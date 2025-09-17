import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import namokarProfile from '@/assets/namokar-profile.jpg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const titles = ['Software Developer', 'AI Innovator', 'SEO Strategist'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setTypedText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentTitle.slice(0, prev.length + 1)
        );
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentTitleIndex, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="floating-shapes"></div>
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left animate-slide-in-left">
          <div className="mb-6">
            <p className="text-muted-foreground text-lg mb-2">Hi, I'm</p>
            <h1 className="text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Namokar Jain
              </span>
            </h1>
            <div className="text-2xl lg:text-3xl font-semibold text-foreground h-12">
              <span className="typing-animation">{typedText}</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Crafting AI-powered solutions, web products, and SEO strategies that deliver real results. 
            I focus on creating innovative products and streamlining processes to blend technical expertise with real-world impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="hero-gradient glow-effect hover:scale-105 transition-transform">
              <a href="#portfolio" className="flex items-center gap-2">
                View Portfolio
                <ExternalLink size={18} />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
              <a href="#contact" className="flex items-center gap-2">
                Let's Connect
              </a>
            </Button>
          </div>
          
          <div className="mt-8">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Resume_Namokar_Jain_Latest.pdf';
                link.download = 'Resume_Namokar_Jain_Latest.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div className="flex justify-center animate-slide-in-right">
          <div className="relative">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-hero-gradient rounded-full blur-3xl opacity-30 scale-110"></div>
            
            {/* Profile Image */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 glow-effect">
              <img 
                src={namokarProfile} 
                alt="Namokar Jain - Software Developer & AI Innovator" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full animate-bounce"></div>
            <div className="absolute bottom-8 left-8 w-4 h-4 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 -left-4 w-8 h-8 border-2 border-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ChevronDown size={32} className="text-muted-foreground hover:text-primary transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default Hero;