
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Brain, TrendingUp, Zap, Database, BarChart3, MessageSquare } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      Icon: Brain,
      name: "Customer Salary Prediction Model",
      description: "Developed predictive models leveraging machine learning techniques to generate accurate salary predictions for customers.",
      href: "#",
      cta: "View Project",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900" />
      ),
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: TrendingUp,
      name: "Company Profit Prediction Model",
      description: "Created predictive models to forecast company profits using historical data and advanced machine learning algorithms.",
      href: "#",
      cta: "Learn More",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900" />
      ),
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Zap,
      name: "Net Speed Checker",
      description: "Built an AI tool integrating the model of chatgpt, Gemini and Groq to generate response for any Query with real-time performance monitoring.",
      href: "#",
      cta: "Explore",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-950 dark:to-orange-900" />
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
    {
      Icon: Database,
      name: "Face Detection System",
      description: "Implemented computer vision algorithms for real-time face detection using OpenCV and Python with high accuracy.",
      href: "#",
      cta: "View Demo",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900" />
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: BarChart3,
      name: "Coin Flip Simulator",
      description: "Developed a statistical simulation tool to analyze probability distributions and random events with data visualization.",
      href: "#",
      cta: "Try It",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-950 dark:to-rose-900" />
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in AI, machine learning, data analysis, and Python development.
          </p>
        </div>

        <div className="animate-fade-in">
          <BentoGrid className="lg:grid-rows-3 max-w-6xl mx-auto">
            {projects.map((project) => (
              <BentoCard key={project.name} {...project} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
};

export default Projects;
