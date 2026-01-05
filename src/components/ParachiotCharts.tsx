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
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          📊 Parachiots Classées par Longueur
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="verses" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="verses">Par Psoukim</TabsTrigger>
            <TabsTrigger value="words">Par Mots</TabsTrigger>
            <TabsTrigger value="letters">Par Lettres</TabsTrigger>
          </TabsList>

          <TabsContent value="verses">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[900px] sm:min-w-0">
                <ResponsiveContainer width="100%" height={650}>
                  <BarChart data={parashiotData} margin={{ top: 20, right: 30, left: 20, bottom: 120 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis
                      dataKey="name"
                      angle={-90}
                      textAnchor="end"
                      height={150}
                      className="text-xs"
                      interval={0}
                    />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="verses" name="Psoukim" radius={[8, 8, 0, 0]}>
                      {parashiotData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={getBarColor(entry, 'hsl(var(--primary))')} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="words">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[900px] sm:min-w-0">
                <ResponsiveContainer width="100%" height={650}>
                  <BarChart data={parashiotData} margin={{ top: 20, right: 30, left: 20, bottom: 120 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis
                      dataKey="name"
                      angle={-90}
                      textAnchor="end"
                      height={150}
                      className="text-xs"
                      interval={0}
                    />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="words" name="Mots" radius={[8, 8, 0, 0]}>
                      {parashiotData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={getBarColor(entry, 'hsl(var(--primary))')} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="letters">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[900px] sm:min-w-0">
                <ResponsiveContainer width="100%" height={650}>
                  <BarChart data={parashiotData} margin={{ top: 20, right: 30, left: 20, bottom: 120 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis
                      dataKey="name"
                      angle={-90}
                      textAnchor="end"
                      height={150}
                      className="text-xs"
                      interval={0}
                    />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="letters" name="Lettres" radius={[8, 8, 0, 0]}>
                      {parashiotData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={getBarColor(entry, 'hsl(var(--primary))')} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ParachiotCharts;
