import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Circle, Square, Triangle } from "lucide-react";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  applicants: number;
  description: string;
  tags: string[];
  shape: 'circle' | 'square' | 'triangle';
}

const ShapeIcon = ({ shape, className }: { shape: string; className?: string }) => {
  switch (shape) {
    case 'circle':
      return <Circle className={className} fill="currentColor" />;
    case 'square':
      return <Square className={className} fill="currentColor" />;
    case 'triangle':
      return <Triangle className={className} fill="currentColor" />;
    default:
      return <Circle className={className} fill="currentColor" />;
  }
};

const JobCard = ({ 
  id, 
  title, 
  company, 
  location, 
  type, 
  salary, 
  posted, 
  applicants, 
  description, 
  tags, 
  shape 
}: JobCardProps) => {
  return (
    <div className="squid-card squid-hover-lift rounded-xl p-6 group cursor-pointer">
      {/* Player Card Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 flex items-center justify-center ${
            shape === 'circle' ? 'squid-shape-circle bg-primary/20 text-primary' :
            shape === 'square' ? 'squid-shape-square bg-secondary/20 text-secondary' :
            'squid-shape-triangle bg-primary/20 text-primary'
          }`}>
            <ShapeIcon shape={shape} className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xs font-futuristic text-muted-foreground">Player #{id}</div>
            <div className="font-game text-sm text-secondary">{company}</div>
          </div>
        </div>
        
        <Badge 
          variant="outline" 
          className={`font-futuristic border-primary/30 ${
            type === 'Full-time' ? 'text-primary' :
            type === 'Part-time' ? 'text-secondary' :
            'text-accent'
          }`}
        >
          {type}
        </Badge>
      </div>

      {/* Job Title */}
      <h3 className="text-xl font-game font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground font-futuristic mb-4 line-clamp-2">
        {description}
      </p>

      {/* Job Details */}
      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="font-futuristic">{location}</span>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <DollarSign className="h-4 w-4" />
          <span className="font-futuristic">{salary}</span>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span className="font-futuristic">{posted}</span>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Users className="h-4 w-4" />
          <span className="font-futuristic">{applicants} applicants</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="font-futuristic text-xs bg-muted/50 text-muted-foreground">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Apply Button */}
      <Button className="w-full bg-primary hover:bg-primary/90 squid-glow-pink font-futuristic font-semibold group-hover:animate-neon-pulse">
        Apply Now
      </Button>
    </div>
  );
};

export default JobCard;