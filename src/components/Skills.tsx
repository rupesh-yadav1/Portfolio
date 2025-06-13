
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, BarChart3, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 80 },
        { name: "C/C++", level: 70 },
      ]
    },
    {
      title: "Data & Analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        { name: "Data Analysis", level: 85 },
        { name: "Data Visualization", level: 80 },
        { name: "Statistics", level: 75 },
        { name: "Power BI", level: 70 },
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "Scikit-Learn", level: 85 },
        { name: "Neural Networks", level: 75 },
        { name: "Predictive Modeling", level: 80 },
      ]
    },
    {
      title: "Tools & Databases",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "Git & GitHub", level: 85 },
        { name: "Google Colab", level: 90 },
        { name: "Visual Studio", level: 75 },
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My expertise spans across various technologies and tools in the data science and AI ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
