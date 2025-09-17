import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, ArrowUp, Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: "mailto:namokar.jain@example.com",
      label: "Email",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/namokar",
      label: "LinkedIn",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/namokar",
      label: "GitHub",
    },
  ];

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-3xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Namokar
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Passionate technology enthusiast crafting AI-powered solutions,
              web products, and SEO strategies that deliver real-world impact.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Get In Touch
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <p>📍 Bhopal, India</p>
              <p>📧 namokar.jain2004@gmail.com</p>
              <p>🎓 VIT Bhopal, CSE Student</p>
              <p>💼 Available for Fulltime Role</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © {currentYear} Namokar Jain. Made with{" "}
            <Heart size={16} className="inline text-red-500 mx-1" />
            using React & TypeScript
          </p>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Built with modern tech stack
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="hover:scale-110 transition-transform"
            >
              <ArrowUp size={16} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
