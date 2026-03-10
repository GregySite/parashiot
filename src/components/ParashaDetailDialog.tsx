import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Parachiot } from "@/data/parachiots";
import { getAliyotForParasha, getCombinedAliyotForParasha } from "@/data/aliyot";
import { getHaftaraForParasha } from "@/data/haftarot";
import { ExternalLink, BookOpen, ScrollText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";

interface ParashaDetailDialogProps {
  parasha: Parachiot | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AliyotChart = ({ chartData }: { chartData: { name: string; verses: number; range: string }[] }) => (
  <div className="h-64">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData} margin={{ top: 25, right: 10, left: 10, bottom: 20 }}>
        <XAxis
          dataKey="name"
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          axisLine={{ stroke: 'hsl(var(--border))' }}
        />
        <YAxis
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          axisLine={{ stroke: 'hsl(var(--border))' }}
          label={{ value: 'Versets', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px'
          }}
          labelStyle={{ color: 'hsl(var(--foreground))' }}
          formatter={(value: number, name: string, props: any) => [
            `${value} versets (${props.payload.range})`,
            'Aliyah'
          ]}
        />
        <Bar dataKey="verses" radius={[4, 4, 0, 0]}>
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill="hsl(var(--primary))" />
          ))}
          <LabelList dataKey="verses" position="top" fill="hsl(var(--foreground))" fontSize={12} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const ParashaDetailDialog = ({ parasha, open, onOpenChange }: ParashaDetailDialogProps) => {
  const aliyotData = parasha ? getAliyotForParasha(parasha.id) : undefined;
  const combinedData = parasha ? getCombinedAliyotForParasha(parasha.id) : undefined;
  const haftaraData = parasha ? getHaftaraForParasha(parasha.id) : undefined;

  const hasCombined = !!combinedData;

  const chartDataSimple = useMemo(() => {
    return aliyotData?.aliyot.map((aliyah) => ({
      name: aliyah.name,
      verses: aliyah.verses,
      range: `${aliyah.start} - ${aliyah.end}`,
    })) || [];
  }, [aliyotData]);

  const chartDataCombined = useMemo(() => {
    return combinedData?.aliyot.map((aliyah) => ({
      name: aliyah.name,
      verses: aliyah.verses,
      range: `${aliyah.start} - ${aliyah.end}`,
    })) || [];
  }, [combinedData]);

  if (!parasha) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-3xl flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            <div>
              <div className="flex items-center gap-2">
                {parasha.name}
                {hasCombined && (
                  <Badge variant="secondary" className="text-xs">
                    <Users className="h-3 w-3 mr-1" />
                    Peut être doublée
                  </Badge>
                )}
              </div>
              <div className="text-2xl text-muted-foreground font-hebrew">{parasha.hebrewName}</div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Basic Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="text-sm text-muted-foreground">Livre</div>
              <div className="text-xl font-semibold">{parasha.book}</div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="text-sm text-muted-foreground">Versets</div>
              <div className="text-xl font-semibold">{parasha.verses}</div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="text-sm text-muted-foreground">Mots</div>
              <div className="text-xl font-semibold">{parasha.words.toLocaleString()}</div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="text-sm text-muted-foreground">Lettres</div>
              <div className="text-xl font-semibold">{parasha.letters.toLocaleString()}</div>
            </div>
          </div>

          {/* Sefaria Link for Parasha */}
          {aliyotData && (
            <Button asChild className="w-full">
              <a href={aliyotData.sefariaUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Lire la Parasha sur Sefaria
              </a>
            </Button>
          )}

          {/* Aliyot Chart Section */}
          {aliyotData && chartDataSimple.length > 0 && (
            <div className="bg-muted/30 p-6 rounded-lg border">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Versets par Aliyah</h3>
              </div>

              {hasCombined ? (
                <Tabs defaultValue="simple">
                  <TabsList className="mb-4 w-full">
                    <TabsTrigger value="simple" className="flex-1">
                      📖 Lecture simple
                    </TabsTrigger>
                    <TabsTrigger value="combined" className="flex-1">
                      📚 Lecture double ({combinedData.name})
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="simple">
                    <p className="text-sm text-muted-foreground mb-3">
                      Découpage des 7 montées quand {parasha.name} est lue seule.
                    </p>
                    <AliyotChart chartData={chartDataSimple} />
                  </TabsContent>
                  <TabsContent value="combined">
                    <p className="text-sm text-muted-foreground mb-3">
                      Découpage des 7 montées quand {combinedData.name} sont lues ensemble.
                    </p>
                    <AliyotChart chartData={chartDataCombined} />
                    <Button asChild variant="outline" className="w-full mt-4">
                      <a href={combinedData.sefariaUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Lire {combinedData.name} sur Sefaria
                      </a>
                    </Button>
                  </TabsContent>
                </Tabs>
              ) : (
                <AliyotChart chartData={chartDataSimple} />
              )}
            </div>
          )}

          {/* Haftara Section */}
          {haftaraData && (
            <div className="bg-muted/30 p-6 rounded-lg border">
              <div className="flex items-center gap-3 mb-4">
                <ScrollText className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Haftara</h3>
              </div>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-muted-foreground">Lecture :</span>
                  <span className="font-semibold">{haftaraData.frenchTitle}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-muted-foreground">Référence :</span>
                  <span className="font-hebrew text-lg">{haftaraData.hebrewReference}</span>
                </div>

                {/* French Text */}
                {haftaraData.frenchText && (
                  <div className="mt-4 p-4 bg-background/50 rounded-lg border max-h-96 overflow-y-auto">
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {haftaraData.frenchText}
                    </p>
                  </div>
                )}

                <Button asChild variant="outline" className="w-full mt-4">
                  <a href={haftaraData.sefariaUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Lire la Haftara sur Sefaria
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ParashaDetailDialog;
