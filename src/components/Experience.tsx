
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Analysis Using Python Internship",
      company: "CSRBOX in Collaboration with IBM",
      location: "Remote, India",
      period: "December 2024 - January 2025",
      achievements: [
        "Extracted actionable insights from large datasets, improving decision-making accuracy by 25%",
        "Enhanced data quality by performing cleaning and preprocessing, reducing errors by 30%",
        "Visualized patterns and trends using Seaborn, improving data presentation clarity by 35%"
      ],
      skills: ["Python", "Data Analysis", "Seaborn", "Data Preprocessing"]
    },
    {
      title: "Mastering Data with Machine Learning Internship",
      company: "CSRBOX in Collaboration with IBM",
      location: "Remote, India",
      period: "October 2024 - November 2024",
      achievements: [
        "Achieved a 25% improvement in prediction accuracy by developing and training machine learning models",
        "Enhanced model performance by 30% through implementing and fine-tuning neural networks",
        "Used TensorFlow and scikit-learn for model development"
      ],
      skills: ["Machine Learning", "TensorFlow", "Scikit-learn", "Neural Networks"]
    },
    {
      title: "Python Programming Internship",
      company: "ViQasys",
      location: "Remote, India",
      period: "March 2024 - May 2024",
      achievements: [
        "Automated routine tasks by writing Python scripts, improving task efficiency by 20%",
        "Developed beginner-level projects including calculator, coin flip simulator, and face detection system",
        "Demonstrated practical programming skills through hands-on projects"
      ],
      skills: ["Python", "Automation", "Computer Vision", "Problem Solving"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey through internships that have shaped my expertise in data science and machine learning.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl text-primary">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:text-right gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
