
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/918603923646", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Mail className="h-6 w-6" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:adhikariprasad80@gmail.com" className="hover:text-primary transition-colors">
                    adhikariprasad80@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+918603923646" className="hover:text-primary transition-colors">
                    +91 8603923646
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="sm" asChild className="hover:scale-105 transition-transform">
                    <a href="https://github.com/rupesh-yadav1" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="hover:scale-105 transition-transform">
                    <a href="https://linkedin.com/in/Rupesh Kumar Yadav" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={openWhatsApp}
                    className="hover:scale-105 transition-transform bg-green-50 hover:bg-green-100 border-green-200 text-green-700"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="text-primary">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button className="w-full hover:scale-105 transition-transform">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
