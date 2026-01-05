import ParachiotTable from "@/components/ParachiotTable";
import StatsCards from "@/components/StatsCards";
import ParachiotCharts from "@/components/ParachiotCharts";
import { Scroll } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scroll className="h-12 w-12 text-primary" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Parachiots de la Torah
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez les 54 portions hebdomadaires de la Torah avec leurs statistiques détaillées
          </p>
        </header>

        {/* Stats Cards */}
        <StatsCards />

        {/* Main Content */}
        <main className="space-y-12">
          {/* Charts Section */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Visualisations</h2>
              <p className="text-muted-foreground">
                Comparez les parachiots par leur longueur et découvrez les statistiques par livre
              </p>
            </div>
            <ParachiotCharts />
          </section>

          {/* Table Section */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Liste Complète des Parachiots</h2>
              <p className="text-muted-foreground">
                Explorez chaque parachiot avec le nombre de psoukim (versets), mots et lettres
              </p>
            </div>
            
            <ParachiotTable />
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-muted-foreground space-y-2">
          <p>Les statistiques proviennent de sources rabbiniques traditionnelles</p>
          <p className="text-xs">
            Source des données: <a 
              href="https://www.torahcalc.com/info/parsha-stats" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              TorahCalc.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
