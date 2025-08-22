import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Search, X, Circle, Square, Triangle } from "lucide-react";

const FilterSidebar = () => {
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote'];
  const locations = ['Seoul', 'Busan', 'Tokyo', 'Singapore', 'Remote'];
  const skills = ['React', 'Node.js', 'Python', 'Design', 'Marketing', 'Sales'];

  return (
    <div className="w-80 h-screen sticky top-20 overflow-y-auto scrollbar-thin scrollbar-thumb-border">
      <div className="squid-card p-6 m-4 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-game font-bold text-foreground">Game Filters</h2>
          <div className="flex space-x-2">
            <Circle className="h-4 w-4 text-primary" fill="currentColor" />
            <Square className="h-4 w-4 text-secondary" fill="currentColor" />
            <Triangle className="h-4 w-4 text-primary" fill="currentColor" />
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <label className="text-sm font-futuristic font-semibold text-foreground mb-3 block">
            Quick Search
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search jobs..."
              className="pl-10 font-futuristic bg-input/50 border-border focus:border-primary"
            />
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Job Type */}
        <div className="mb-6">
          <label className="text-sm font-futuristic font-semibold text-foreground mb-3 block">
            Game Mode
          </label>
          <div className="space-y-3">
            {jobTypes.map((type) => (
              <div key={type} className="flex items-center space-x-3">
                <Checkbox id={type} className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                <label 
                  htmlFor={type} 
                  className="text-sm font-futuristic text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Location */}
        <div className="mb-6">
          <label className="text-sm font-futuristic font-semibold text-foreground mb-3 block">
            Arena Location
          </label>
          <div className="space-y-3">
            {locations.map((location) => (
              <div key={location} className="flex items-center space-x-3">
                <Checkbox id={location} className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                <label 
                  htmlFor={location} 
                  className="text-sm font-futuristic text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  {location}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Skills */}
        <div className="mb-6">
          <label className="text-sm font-futuristic font-semibold text-foreground mb-3 block">
            Player Skills
          </label>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground border-border font-futuristic text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Salary Range */}
        <div className="mb-6">
          <label className="text-sm font-futuristic font-semibold text-foreground mb-3 block">
            Prize Range
          </label>
          <div className="grid grid-cols-2 gap-3">
            <Input 
              placeholder="Min"
              className="font-futuristic bg-input/50 border-border focus:border-primary"
            />
            <Input 
              placeholder="Max"
              className="font-futuristic bg-input/50 border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Apply Filters Button */}
        <Button className="w-full bg-primary hover:bg-primary/90 squid-glow-pink font-futuristic font-semibold">
          Apply Filters
        </Button>

        {/* Reset Button */}
        <Button variant="outline" className="w-full mt-3 border-border font-futuristic">
          <X className="mr-2 h-4 w-4" />
          Reset Game
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;