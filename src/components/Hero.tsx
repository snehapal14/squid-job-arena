import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Briefcase } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 squid-shape-circle bg-primary/20 animate-glow-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 squid-shape-triangle bg-secondary/20 animate-glow-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-14 h-14 squid-shape-square bg-primary/20 animate-glow-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 squid-shape-circle bg-secondary/20 animate-glow-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-game font-bold mb-6 squid-text-glow text-foreground">
          Find Your
          <span className="block text-primary animate-neon-pulse">Game-Changing</span>
          Career
        </h1>
        
        <p className="text-xl md:text-2xl font-futuristic text-muted-foreground mb-12 max-w-2xl mx-auto">
          Enter the ultimate job portal where opportunities glow like neon lights in the digital maze
        </p>

        {/* Glass Bridge Style Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="squid-card p-6 rounded-2xl border-2 border-primary/30 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Search for dream jobs..."
                  className="pl-12 h-14 text-lg font-futuristic bg-input/50 border-border focus:border-primary focus:squid-glow-pink"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Location"
                  className="pl-12 h-14 text-lg font-futuristic bg-input/50 border-border focus:border-primary md:w-48"
                />
              </div>

              <Button className="h-14 px-8 bg-primary hover:bg-primary/90 squid-glow-pink font-futuristic text-lg font-semibold animate-neon-pulse">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-game font-bold text-primary mb-2">456+</div>
            <div className="font-futuristic text-muted-foreground">Active Jobs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-game font-bold text-secondary mb-2">78+</div>
            <div className="font-futuristic text-muted-foreground">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-game font-bold text-primary mb-2">1.2K+</div>
            <div className="font-futuristic text-muted-foreground">Players Hired</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;