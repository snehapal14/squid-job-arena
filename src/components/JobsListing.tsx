import JobCard from "./JobCard";
import FilterSidebar from "./FilterSidebar";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";

const sampleJobs = [
  {
    id: "001",
    title: "Frontend Developer",
    company: "NeonTech Industries",
    location: "Seoul, Korea",
    type: "Full-time",
    salary: "$80K - $120K",
    posted: "2 days ago",
    applicants: 42,
    description: "Join our elite development team and create the future of digital experiences with cutting-edge React and TypeScript technologies.",
    tags: ["React", "TypeScript", "CSS", "Git"],
    shape: "circle" as const
  },
  {
    id: "067",
    title: "UX Designer",
    company: "CyberSpace Labs",
    location: "Remote",
    type: "Contract",
    salary: "$70K - $95K",
    posted: "1 day ago",
    applicants: 28,
    description: "Design immersive user experiences that blend the digital and physical worlds. Perfect for creative minds who think outside the box.",
    tags: ["Figma", "Design System", "Prototyping"],
    shape: "square" as const
  },
  {
    id: "218",
    title: "DevOps Engineer",
    company: "GameForge Corporation",
    location: "Tokyo, Japan",
    type: "Full-time",
    salary: "$95K - $140K",
    posted: "5 hours ago",
    applicants: 15,
    description: "Architect and maintain the infrastructure that powers millions of users. Join the engineering team behind the next digital revolution.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    shape: "triangle" as const
  },
  {
    id: "456",
    title: "Product Manager",
    company: "DigitalArena",
    location: "Singapore",
    type: "Full-time",
    salary: "$110K - $160K",
    posted: "3 days ago",
    applicants: 73,
    description: "Lead product strategy and execution for innovative digital platforms. Transform ideas into reality and shape the future of technology.",
    tags: ["Strategy", "Analytics", "Leadership"],
    shape: "circle" as const
  },
  {
    id: "999",
    title: "Data Scientist",
    company: "QuantumData Inc",
    location: "Remote",
    type: "Part-time",
    salary: "$60K - $85K",
    posted: "1 week ago",
    applicants: 91,
    description: "Uncover insights from complex data patterns and drive data-driven decisions. Perfect for analytical minds who love solving puzzles.",
    tags: ["Python", "ML", "Statistics", "SQL"],
    shape: "square" as const
  },
  {
    id: "123",
    title: "Blockchain Developer",
    company: "CryptoVision",
    location: "Busan, Korea",
    type: "Full-time",
    salary: "$120K - $180K",
    posted: "6 days ago",
    applicants: 34,
    description: "Build the decentralized future with cutting-edge blockchain technology. Join a team that's redefining how we think about digital ownership.",
    tags: ["Solidity", "Web3", "Smart Contracts"],
    shape: "triangle" as const
  }
];

const JobsListing = () => {
  return (
    <section className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-game font-bold text-foreground mb-2">
              Available <span className="text-primary">Games</span>
            </h1>
            <p className="font-futuristic text-muted-foreground">
              {sampleJobs.length} opportunities waiting for the right players
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-primary">
              <LayoutGrid className="h-4 w-4 mr-2" />
              Grid
            </Button>
            <Button variant="ghost" size="sm">
              <List className="h-4 w-4 mr-2" />
              List
            </Button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Jobs Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
              {sampleJobs.map((job, index) => (
                <div key={job.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <JobCard {...job} />
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button 
                className="bg-secondary hover:bg-secondary/90 squid-glow-green font-futuristic font-semibold px-8 py-3"
              >
                Load More Games
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsListing;