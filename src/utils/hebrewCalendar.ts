import { HDate, HebrewCalendar, Location } from '@hebcal/core';
import { getLeyningOnDate, Leyning } from '@hebcal/leyning';

/**
 * Map of known Hebcal aliases to our canonical names
 */
const parashaAliases: Record<string, string> = {
  'achrei mot': 'acharei mot',
  'chayei sara': 'chayei sarah',
  'lechlecha': 'lech lecha',
  'nasso': 'naso',
  'shlach': 'shelach',
  'shmini': 'shemini',
  'vayeilech': 'vayelech',
};

/**
 * Get the current Hebrew date for Israel
 * Considers sunset (approximate) to determine if it's the next day
 */
export function getCurrentHebrewDate(): HDate {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();

  // If it's Saturday night (after 18:00), we are already in the next Hebrew week
  // for the purpose of "Next Shabbat's Parasha"
  if (day === 6 && hour >= 18) {
    const nextDay = new Date(now);
    nextDay.setDate(now.getDate() + 1);
    return new HDate(nextDay);
  }

  return new HDate(now);
}

/**
 * Get the upcoming Saturday's Hebrew date based on a given date
 */
export function getUpcomingSaturday(date: Date = new Date()): HDate {
  const current = new Date(date);
  const day = current.getDay();
  const hour = current.getHours();

  // If it's Saturday night, skip to next week's Saturday
  if (day === 6 && hour >= 18) {
    current.setDate(current.getDate() + 7);
  } else {
    // Otherwise calculate days until upcoming Saturday
    const daysUntilSaturday = (6 - day + 7) % 7;
    current.setDate(current.getDate() + daysUntilSaturday);
  }

  return new HDate(current);
}

/**
 * Get the Torah portion(s) for the upcoming Shabbat in Israel
 */
export function getCurrentParashaIsrael(): string[] {
  const saturday = getUpcomingSaturday();
  // Location for Israel (Jerusalem)
  const options = { location: Location.lookup('Jerusalem'), il: true };
  const leyning = getLeyningOnDate(saturday, true); // true = il (Israel)

  return (leyning && leyning.parsha) ? leyning.parsha : [];
}

/**
 * Get the Torah portion(s) for the upcoming Shabbat in Diaspora
 */
export function getCurrentParashaDiaspora(): string[] {
  const saturday = getUpcomingSaturday();
  const leyning = getLeyningOnDate(saturday, false); // false = diaspora

  return (leyning && leyning.parsha) ? leyning.parsha : [];
}

/**
 * Normalize parasha name for comparison
 */
export function normalizeParashaName(name: string): string {
  const normalized = name
    .toLowerCase()
    .replace(/['\u2019]/g, '')
    .replace(/-/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return parashaAliases[normalized] ?? normalized;
}

/**
 * Check if a parasha is the current week's reading
 */
export function isCurrentParasha(parashaName: string, location: 'israel' | 'diaspora'): boolean {
  const currentParashiot = location === 'israel'
    ? getCurrentParashaIsrael()
    : getCurrentParashaDiaspora();

  const normalizedParashaName = normalizeParashaName(parashaName);

  return currentParashiot.some(p => normalizeParashaName(p) === normalizedParashaName);
}
