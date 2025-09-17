import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Brain,
  TrendingUp,
  Database,
  Globe,
  Smartphone,
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Software Development",
      icon: <Code size={32} />,
      description: "Web apps, digital product architecture",
      skills: [
        { name: "HTML", level: 83 },
        { name: "CSS", level: 82 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 81 },
        { name: "Next.js", level: 83 },
        { name: "Node.js", level: 75 },
        { name: "TypeScript", level: 88 },
      ],
    },
    {
      title: "SEO & Digital Strategy",
      icon: <TrendingUp size={32} />,
      description: "SEO optimization, website audits, structure improvement",
      skills: [
        { name: "Technical SEO", level: 85 },
        { name: "Content Strategy", level: 83 },
        { name: "Analytics", level: 82 },
        { name: "Performance Optimization", level: 80 },
      ],
    },
    {
      title: "Technologies & AI",
      icon: <Brain size={32} />,
      description: "Intelligent workflows, AI,API",
      skills: [
        { name: "Git", level: 70 },
        { name: "GitHub", level: 75 },
        { name: "SQL", level: 68 },
        { name: "API Integration", level: 80 },
        { name: "Vapi", level: 75 },
      ],
    },
  ];

  const additionalSkills = [
    {
      name: "Database Design",
      icon: <Database size={20} />,
      category: "Backend",
    },
    {
      name: "Web Development",
      icon: <Globe size={20} />,
      category: "Frontend",
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three main expertise areas with cutting-edge technologies and proven
            methodologies
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 project-card animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                  <div className="text-background">{category.icon}</div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {category.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar h-2">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${
                            index * 200 + skillIndex * 100
                          }ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="animate-fade-in animate-delay-600">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 px-6 py-3 bg-card border border-border/50 rounded-full hover:border-primary/50 transition-colors duration-200"
              >
                <div className="text-primary">{skill.icon}</div>
                <span className="text-foreground font-medium">
                  {skill.name}
                </span>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
