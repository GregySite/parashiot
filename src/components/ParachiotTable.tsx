import { parachiots } from "@/data/parachiots";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";
import { isCurrentParasha } from "@/utils/hebrewCalendar";
import ParashaDetailDialog from "./ParashaDetailDialog";
import { Parachiot } from "@/data/parachiots";
import { cn } from "@/lib/utils";

const ParachiotTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedParasha, setSelectedParasha] = useState<Parachiot | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredParachiots = parachiots.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.hebrewName.includes(searchTerm) ||
      p.book.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (parasha: Parachiot) => {
    setSelectedParasha(parasha);
    setDialogOpen(true);
  };

  return (
    <>
      <Card className="overflow-hidden shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Rechercher une Parasha
          </CardTitle>
          <Input
            placeholder="Rechercher par nom, hébreu ou livre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-2"
          />
        </CardHeader>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary hover:bg-primary">
                <TableHead className="text-primary-foreground font-bold">#</TableHead>
                <TableHead className="text-primary-foreground font-bold">Parachiot</TableHead>
                <TableHead className="text-primary-foreground font-bold text-right">Nom Hébreu</TableHead>
                <TableHead className="text-primary-foreground font-bold">Livre</TableHead>
                <TableHead className="text-primary-foreground font-bold text-right">Psoukim</TableHead>
                <TableHead className="text-primary-foreground font-bold text-right">Mots</TableHead>
                <TableHead className="text-primary-foreground font-bold text-right">Lettres</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredParachiots.map((parachiot, index) => {
                const isIsrael = isCurrentParasha(parachiot.name, 'israel');
                const isDiaspora = isCurrentParasha(parachiot.name, 'diaspora');
                const isBoth = isIsrael && isDiaspora;

                return (
                  <TableRow
                    key={parachiot.id}
                    onClick={() => handleRowClick(parachiot)}
                    className={cn(
                      "cursor-pointer transition-all",
                      index % 2 === 0 ? "bg-muted/50" : "",
                      isBoth && "bg-fuchsia-500/20 hover:bg-fuchsia-500/30 border-l-4 border-l-fuchsia-500 shadow-md",
                      isIsrael && !isBoth && "bg-pink-500/20 hover:bg-pink-500/30 border-l-4 border-l-pink-500 shadow-sm",
                      isDiaspora && !isBoth && "bg-purple-500/20 hover:bg-purple-500/30 border-l-4 border-l-purple-500"
                    )}
                  >
                    <TableCell className="font-medium">{parachiot.id}</TableCell>
                    <TableCell className="font-semibold">
                      {parachiot.name}
                      {isBoth && <span className="ml-2 text-xs font-bold text-fuchsia-600 animate-pulse">(🌍 Semaine actuelle)</span>}
                      {isIsrael && !isBoth && <span className="ml-2 text-xs font-bold text-pink-600">(🇮🇱 Israël)</span>}
                      {isDiaspora && !isBoth && <span className="ml-2 text-xs text-purple-600">(🌎 Diaspora)</span>}
                    </TableCell>
                    <TableCell className="text-right font-hebrew text-lg">{parachiot.hebrewName}</TableCell>
                    <TableCell className="text-muted-foreground">{parachiot.book}</TableCell>
                    <TableCell className="text-right">{parachiot.verses.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{parachiot.words.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{parachiot.letters.toLocaleString()}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Card>
      <ParashaDetailDialog
        parasha={selectedParasha}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
};

export default ParachiotTable;
