import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web & App Development',
      icon: <Globe size={48} />,
      description: 'Building scalable, responsive web and mobile applications using modern tech stacks.',
      features: [
        'Full-stack web applications',
        'Responsive mobile-first design',
        'Modern tech stack (React, Node.js, Python)',
        'Database design and optimization',
        'API development and integration',
        'Performance optimization'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'Firebase']
    },
    {
      title: 'SEO Optimization',
      icon: <TrendingUp size={48} />,
      description: 'Enhancing online visibility through on-page SEO, content strategy, and structural optimization.',
      features: [
        'Technical SEO audits',
        'On-page optimization',
        'Content strategy development',
        'Website performance optimization',
        'Search ranking improvement',
        'Analytics and reporting'
      ],
      technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'GTM', 'Schema Markup', 'Core Web Vitals']
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your digital transformation needs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 group hover:scale-105 project-card animate-slide-in-${index === 0 ? 'left' : 'right'}`}
            >
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-hero-gradient rounded-2xl flex items-center justify-center glow-effect group-hover:scale-110 transition-transform duration-300">
                    <div className="text-background">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">What's Included:</h4>
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground border border-border hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <div className="pt-4">
                  <Button className="w-full group hover:scale-105 transition-transform" variant="outline">
                    <a href="#contact" className="flex items-center gap-2">
                      Get Started
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center mt-16 animate-fade-in animate-delay-600">
          <div className="bg-card-gradient rounded-2xl p-8 border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-xl text-muted-foreground mb-6">
              Let's discuss your project and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-gradient glow-effect">
                <a href="#contact">Start Your Project</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#portfolio">View My Work</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;