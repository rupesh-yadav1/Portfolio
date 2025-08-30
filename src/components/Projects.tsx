

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Brain, TrendingUp, Zap, Database, BarChart3, MessageSquare, Route } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      Icon: Route,
      name: "AI Router",
      description: "Intelligent AI routing system that automatically switches between GPT, Gemini, and other models based on question type to provide the most accurate response from the best-suited model.",
      href: "#",
      cta: "Explore",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-900" />
      ),
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Brain,
      name: "Customer Salary Prediction Model",
      description: "Developed predictive models leveraging machine learning techniques to generate accurate salary predictions for customers.",
      href: "#",
      cta: "View Project",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900" />
      ),
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-4",
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
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4",
    },
    {
      Icon: MessageSquare,
      name: "AI Query Response Tool",
      description: "Built an AI tool integrating ChatGPT, Gemini and Groq models to generate intelligent responses for any query with real-time performance monitoring.",
      href: "#",
      cta: "Explore",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900" />
      ),
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: Zap,
      name: "Net Speed Checker",
      description: "Developed a Python application to test and monitor internet connection speeds with real-time data visualization and performance analytics.",
      href: "#",
      cta: "Try It",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-950 dark:to-orange-900" />
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: Database,
      name: "Face Detection System",
      description: "Implemented computer vision algorithms for real-time face detection using OpenCV and Python with high accuracy.",
      href: "#",
      cta: "View Demo",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-950 dark:to-pink-900" />
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: BarChart3,
      name: "Coin Flip Simulator",
      description: "Developed a statistical simulation tool to analyze probability distributions and random events with data visualization.",
      href: "#",
      cta: "Try It",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-teal-950 dark:to-cyan-900" />
      ),
      className: "lg:col-start-1 lg:col-end-4 lg:row-start-4 lg:row-end-5",
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
          <BentoGrid className="lg:grid-rows-5 max-w-6xl mx-auto">
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

