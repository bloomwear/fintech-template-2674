
import React from 'react';
import { User, Award, Target, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="w-full py-28 px-6 md:px-12 bg-gradient-to-b from-background to-card/10 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 cosmic-grid opacity-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/3 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/15 to-primary/5 text-primary text-base font-semibold border border-primary/20 backdrop-blur-sm">
            <User size={18} className="animate-pulse" />
            Sobre Nós
            <TrendingUp size={18} />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Transformando o futuro das
              </span>
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent mt-2">
                operações financeiras
              </span>
            </h2>
            
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          
          <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto">
            Somos especialistas em soluções financeiras inovadoras, dedicados a revolucionar 
            a forma como empresas gerenciam suas operações financeiras com tecnologia de ponta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <User size={32} className="text-primary" />,
              title: "10+ Anos",
              subtitle: "Experiência",
              description: "Mais de uma década desenvolvendo soluções fintech para empresas de todos os tamanhos.",
              gradient: "from-blue-500/10 to-primary/10"
            },
            {
              icon: <Award size={32} className="text-primary" />,
              title: "Certificação",
              subtitle: "Internacional",
              description: "Padrões de segurança de nível bancário e certificações reconhecidas mundialmente.",
              gradient: "from-green-500/10 to-primary/10"
            },
            {
              icon: <Target size={32} className="text-primary" />,
              title: "Soluções",
              subtitle: "Personalizadas",
              description: "Cada projeto é único e desenvolvido para atender necessidades específicas do cliente.",
              gradient: "from-purple-500/10 to-primary/10"
            },
            {
              icon: <Heart size={32} className="text-primary" />,
              title: "Suporte",
              subtitle: "Dedicado",
              description: "Relacionamento duradouro com suporte 24/7 e acompanhamento contínuo.",
              gradient: "from-red-500/10 to-primary/10"
            }
          ].map((item, index) => (
            <div key={index} className="group">
              <div className={`h-full p-8 rounded-3xl border border-border bg-gradient-to-br ${item.gradient} backdrop-blur-sm hover:bg-card/80 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-105`}>
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="space-y-3 mb-6">
                  <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-primary/80 font-semibold text-lg">{item.subtitle}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">{item.description}</p>
                
                {/* Decorative element */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
