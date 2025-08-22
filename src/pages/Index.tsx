import Header from "../components/Header";
import Hero from "../components/Hero";
import JobsListing from "../components/JobsListing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-futuristic">
      <Header />
      <main>
        <Hero />
        <JobsListing />
      </main>
    </div>
  );
};

export default Index;
