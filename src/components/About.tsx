
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate AI & Data Science student with expertise in Python programming, 
            machine learning, and data analysis. I love turning data into actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my Bachelor of Technology in AI & Data Science at Vivekananda Global University, 
              I have gained hands-on experience through multiple internships and have developed a strong foundation 
              in machine learning, data analysis, and Python programming.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey includes working with companies like ViQasys and CSRBOX in collaboration with IBM, 
              where I've improved task efficiency by 20% through automation and enhanced model performance by 30% 
              through neural network optimization.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Python", "Machine Learning", "Data Analysis", "TensorFlow", "Scikit-learn", "SQL", "Power BI"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">Education</h3>
                    <p className="text-muted-foreground">Bachelor of Technology in AI & DS</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Vivekananda Global University, Jaipur</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Aug 2022 - May 2026</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">Previous Education</h3>
                    <p className="text-muted-foreground">Intermediate in Science</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Arniko Intel's College, Kathmandu</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Aug 2020 - May 2022</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
