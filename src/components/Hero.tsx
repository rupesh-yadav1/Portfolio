
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/180782db-aab1-4b09-9234-af7f4a5bbde3.png"
              alt="Rupesh Yadav"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Rupesh Yadav
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            AI/ML Engineer | GEN AI | LLM Specialist
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToAbout}
              className="hover:scale-105 transition-transform"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="hover:scale-105 transition-transform"
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">6+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Python</div>
              <div className="text-sm text-muted-foreground">Expert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
