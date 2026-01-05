import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Parachiot } from "@/data/parachiots";
import { getAliyotForParasha } from "@/data/aliyot";
import { getHaftaraForParasha } from "@/data/haftarot";
import { ExternalLink, BookOpen, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";

interface ParashaDetailDialogProps {
  parasha: Parachiot | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ParashaDetailDialog = ({ parasha, open, onOpenChange }: ParashaDetailDialogProps) => {
  if (!parasha) return null;

  const aliyotData = getAliyotForParasha(parasha.id);
  const haftaraData = getHaftaraForParasha(parasha.id);

  // Transform aliyot data for chart
  const chartData = useMemo(() => {
    return aliyotData?.aliyot.map((aliyah) => ({
      name: aliyah.name,
      verses: aliyah.verses,
      range: `${aliyah.start} - ${aliyah.end}`,
    })) || [];
  }, [aliyotData]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            <div>
              <div>{parasha.name}</div>
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
          {aliyotData && chartData.length > 0 && (
            <div className="bg-muted/30 p-6 rounded-lg border">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Versets par Aliyah</h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
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
