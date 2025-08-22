import { Button } from "@/components/ui/button";
import { Search, Menu, User, Briefcase } from "lucide-react";
import squidLogo from "@/assets/squid-game-logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden squid-glow-pink">
            <img 
              src={squidLogo} 
              alt="SquidJobs Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-2xl font-game font-bold squid-text-glow text-primary">
            SquidJobs
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#jobs" className="font-futuristic text-foreground hover:text-primary transition-colors">
            Find Jobs
          </a>
          <a href="#companies" className="font-futuristic text-foreground hover:text-primary transition-colors">
            Companies
          </a>
          <a href="#about" className="font-futuristic text-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
            <Briefcase className="h-4 w-4" />
            <span className="font-futuristic">For Employers</span>
          </Button>
          
          <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <User className="h-4 w-4" />
            <span className="font-futuristic">Login</span>
          </Button>

          {/* Mobile Menu */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;