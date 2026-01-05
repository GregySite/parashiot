export type SefariaLang = "he" | "en" | "fr";

function extractRefFromSefariaUrl(sefariaUrl: string): string {
  try {
    const url = new URL(sefariaUrl);
    // e.g. "/Jeremiah.32.6-27" -> "Jeremiah.32.6-27"
    return decodeURIComponent(url.pathname.replace(/^\//, ""));
  } catch {
    // Fallback if the URL isn't absolute for some reason
    return sefariaUrl.replace(/^https?:\/\/www\.sefaria\.org\//, "").replace(/^\//, "");
  }
}

function flattenText(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(flattenText);
  return [];
}

async function fetchJson<T = any>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sefaria HTTP ${res.status}`);
  return res.json();
}

function fetchJsonp<T = any>(url: string, timeoutMs = 15000): Promise<T> {
  return new Promise((resolve, reject) => {
    const cbName = `__sefaria_cb_${Math.random().toString(36).slice(2)}`;

    const script = document.createElement("script");
    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error("Sefaria JSONP timeout"));
    }, timeoutMs);

    function cleanup() {
      window.clearTimeout(timer);
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete (window as any)[cbName];
      script.remove();
    }

    (window as any)[cbName] = (data: T) => {
      cleanup();
      resolve(data);
    };

    const u = new URL(url);
    u.searchParams.set("callback", cbName);
    script.src = u.toString();
    script.onerror = () => {
      cleanup();
      reject(new Error("Sefaria JSONP network error"));
    };

    document.body.appendChild(script);
  });
}

export async function fetchSefariaTextByUrl(
  sefariaUrl: string,
  lang: SefariaLang,
  options?: { version?: string }
): Promise<string> {
  const ref = extractRefFromSefariaUrl(sefariaUrl);

  const apiUrl = new URL(`https://www.sefaria.org/api/texts/${encodeURIComponent(ref)}`);
  apiUrl.searchParams.set("context", "0");
  apiUrl.searchParams.set("commentary", "0");
  apiUrl.searchParams.set("pad", "0");
  apiUrl.searchParams.set("lang", lang);
  if (options?.version) apiUrl.searchParams.set("version", options.version);

  // Note: Sefaria docs mention possible CORS issues; JSONP is supported.
  let data: any;
  try {
    data = await fetchJson(apiUrl.toString());
  } catch {
    data = await fetchJsonp(apiUrl.toString());
  }

  const raw = data?.text;
  const lines = flattenText(raw).filter(Boolean);
  return lines.join("\n\n");
}
