import { parachiots } from "@/data/parachiots";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Type } from "lucide-react";

const StatsCards = () => {
  const totalVerses = parachiots.reduce((sum, p) => sum + p.verses, 0);
  const totalWords = parachiots.reduce((sum, p) => sum + p.words, 0);
  const totalLetters = parachiots.reduce((sum, p) => sum + p.letters, 0);

  const stats = [
    {
      title: "Total Psoukim",
      value: totalVerses.toLocaleString(),
      icon: BookOpen,
      gradient: "from-primary to-primary/80"
    },
    {
      title: "Total Mots",
      value: totalWords.toLocaleString(),
      icon: FileText,
      gradient: "from-secondary to-accent"
    },
    {
      title: "Total Lettres",
      value: totalLetters.toLocaleString(),
      icon: Type,
      gradient: "from-accent to-secondary"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className={`h-2 bg-gradient-to-r ${stat.gradient}`} />
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Icon className="h-5 w-5 text-primary" />
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCards;
