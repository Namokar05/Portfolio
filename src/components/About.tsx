import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and innovation, always exploring new
            tools and workflows
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Designing Solutions, Not Just Visuals
            </h3>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Myself Namokar Jain, a technology enthusiast passionate about
                software development, AI-driven solutions, and digital
                transformation. I focus on creating innovative products and
                streamlining processes to deliver measurable results.
              </p>

              <p>
                I am always exploring new tools and workflows to blend technical
                expertise with real-world impact. My expertise spans across
                full-stack development, machine learning integration, and SEO
                optimization strategies.
              </p>

              <p>
                Currently pursuing my Bachelor's in Computer Science and
                Engineering, I bring both academic knowledge and practical
                experience to every project I work on.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="font-semibold">6+ Complex Projects</span>
              </div>
            </div>
          </div>

          {/* Right Content - Education Card */}
          <div className="animate-slide-in-right">
            <Card className="bg-card-gradient border-border/50 glow-effect hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center">
                    <GraduationCap size={32} className="text-background" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">
                      Education
                    </h4>
                    <p className="text-muted-foreground">Academic Background</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-foreground mb-2">
                      Bachelor of Technology
                    </h5>
                    <p className="text-lg text-primary font-medium mb-2">
                      Computer Science and Engineering
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span>VIT Bhopal</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span>Expected Graduation: 2026</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h6 className="font-semibold text-foreground mb-3">
                      Key Focus Areas
                    </h6>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Web Development",
                        "Data Structures",
                        "Software Engineering",
                      ].map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
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
