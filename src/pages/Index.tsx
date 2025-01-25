import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StarNetwork from "@/components/StarNetwork";

const Index = () => {
  return (
    <main className="bg-space-dark min-h-screen relative">
      <StarNetwork />
      <Hero />
      <Features />
    </main>
  );
};

export default Index;