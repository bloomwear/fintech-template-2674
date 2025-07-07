
import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "PayFlow Enterprise",
      description: "Plataforma completa de pagamentos para grandes corporações com processamento em tempo real e analytics avançados.",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      stats: {
        transactions: "1M+",
        users: "50K+",
        uptime: "99.9%"
      },
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      year: "2024"
    },
    {
      title: "FinTech Mobile App",
      description: "Aplicativo móvel para gestão financeira pessoal com integração bancária e IA para insights financeiros.",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      stats: {
        downloads: "100K+",
        rating: "4.8",
        countries: "15+"
      },
      technologies: ["React Native", "Python", "PostgreSQL", "GCP"],
      year: "2023"
    },
    {
      title: "Blockchain Payment Gateway",
      description: "Gateway de pagamentos baseado em blockchain para transações internacionais com baixas taxas.",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      stats: {
        volume: "$10M+",
        countries: "25+",
        partners: "50+"
      },
      technologies: ["Solidity", "Web3", "Next.js", "Docker"],
      year: "2023"
    }
  ];

  return (
    <section id="projetos" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Nossos Projetos
          </h2>
          <p className="text-muted-foreground text-lg">
            Alguns dos projetos que desenvolvemos para transformar operações financeiras
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="rounded-xl border border-border bg-card overflow-hidden hover:border-border/60 transition-all duration-300"
            >
              <div className={`h-48 ${project.image} relative`}>
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                    <Github size={16} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <Calendar size={16} />
                  <span className="text-sm">{project.year}</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                  {Object.entries(project.stats).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-medium text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
