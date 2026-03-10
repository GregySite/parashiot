import { parachiots } from "@/data/parachiots";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { isCurrentParasha } from "@/utils/hebrewCalendar";

const ParachiotCharts = () => {
  // Parachiots dans l'ordre de la Torah
  const parashiotData = parachiots.map(p => {
    const isIsrael = isCurrentParasha(p.name, 'israel');
    const isDiaspora = isCurrentParasha(p.name, 'diaspora');

    // Debug logging
    if (isIsrael) {
      console.log('Current Parasha Israel:', p.name, p.hebrewName);
    }

    return {
      name: p.name,
      hebrewName: p.hebrewName,
      verses: p.verses,
      words: p.words,
      letters: p.letters,
      isCurrentIsrael: isIsrael,
      isCurrentDiaspora: isDiaspora,
    };
  });

  const getBarColor = (data: any, baseColor: string) => {
    if (data.isCurrentIsrael) {
      return 'hsl(320 100% 50%)'; // Magenta vif pour Israël (Opposé au bleu/vert)
    }
    return baseColor;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const parasha = parachiots.find(p => p.name === payload[0].payload.name);
      return (
        <div className="bg-card border border-border rounded-lg p-4 shadow-lg max-w-md">
          <p className="font-semibold text-foreground text-lg">{payload[0].payload.name}</p>
          <p className="text-sm text-muted-foreground mb-3">{payload[0].payload.hebrewName}</p>
          {parasha?.summary && (
            <p className="text-xs text-foreground/80 mb-3 italic border-l-2 border-primary pl-2">
              {parasha.summary}
            </p>
          )}
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm font-medium">
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-2xl flex items-center gap-2">
          📊 Parachiots Classées par Longueur
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-6 pt-0">
        <Tabs defaultValue="verses" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4 sm:mb-6 h-auto">
            <TabsTrigger value="verses" className="text-xs sm:text-sm py-2">Psoukim</TabsTrigger>
            <TabsTrigger value="words" className="text-xs sm:text-sm py-2">Mots</TabsTrigger>
            <TabsTrigger value="letters" className="text-xs sm:text-sm py-2">Lettres</TabsTrigger>
          </TabsList>

          {["verses", "words", "letters"].map((key) => {
            const labelMap: Record<string, string> = { verses: "Psoukim", words: "Mots", letters: "Lettres" };
            return (
              <TabsContent key={key} value={key}>
                <div className="w-full overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0">
                  <div className="min-w-[600px] sm:min-w-0">
                    <ResponsiveContainer width="100%" height={500}>
                      <BarChart data={parashiotData} margin={{ top: 20, right: 10, left: 0, bottom: 100 }}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis
                          dataKey="name"
                          angle={-90}
                          textAnchor="end"
                          height={120}
                          tick={{ fontSize: 9 }}
                          interval={0}
                        />
                        <YAxis tick={{ fontSize: 11 }} width={45} />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey={key} name={labelMap[key]} radius={[4, 4, 0, 0]}>
                          {parashiotData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={getBarColor(entry, 'hsl(var(--primary))')} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ParachiotCharts;
