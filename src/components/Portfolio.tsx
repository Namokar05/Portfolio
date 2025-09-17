import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Finthrift",
      description:
        "A personal finance management platform for budgeting and insights. Features expense tracking, budget planning, and financial analytics dashboard.",
      image: "/Banner.png",
      technologies: ["React.js", "Node.js", "Supabase", "Tailwind"],
      category: "web",
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Mockerz",
      description:
        "AI-powered mock interview platform generating custom interview questions based on job roles and experience levels.",
      image: "/mockerz.jpg",
      technologies: ["Next.js", "Firebase", "OpenAI API", "Tailwind"],
      category: "ai",
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Driver Drowsiness Detection",
      description:
        "ML-based application to detect driver fatigue and alert drivers in real-time using computer vision.",
      image: "/drowsiness.jpg",
      technologies: ["OpenCV", "TensorFlow", "Python", "Flask"],
      category: "ai",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "Weather App",
      description:
        "Real-time, responsive weather application with clean UI, location-based forecasts, and weather alerts.",
      image: "/weather.jpg",
      technologies: ["HTML/CSS", "JavaScript", "Weather API", "Chart.js"],
      category: "web",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI & ML" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of projects demonstrating technical expertise and
            real-world impact
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in animate-delay-200">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`hover:scale-105 transition-transform ${
                filter === category.id ? "glow-effect" : ""
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className={`bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 group project-card animate-fade-in ${
                project.featured ? "md:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {project.featured && (
                    <Badge className="absolute top-3 left-3 bg-hero-gradient text-background">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1 group">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                      <ExternalLink
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 group">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2"
                    >
                      <Eye size={16} />
                      Live Demo
                      <ExternalLink
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 animate-fade-in animate-delay-600">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="hover:scale-105 transition-transform"
          >
            <a
              href="https://github.com/Namokar05"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              View All Projects on GitHub
              <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
