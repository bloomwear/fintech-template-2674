
import React from 'react';
import { User, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="w-full py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cosmic-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <User size={16} />
            Sobre Nós
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Transformando ideias em
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              experiências digitais incríveis
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Somos especialistas em desenvolvimento web, dedicados a criar sites que não apenas impressionam visualmente, mas também geram resultados reais para seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <User size={28} className="text-primary" />,
              title: "5+ Anos",
              subtitle: "Experiência",
              description: "Mais de cinco anos criando sites modernos e funcionais para empresas de todos os segmentos."
            },
            {
              icon: <Award size={28} className="text-primary" />,
              title: "100+ Sites",
              subtitle: "Entregues",
              description: "Centenas de projetos concluídos com sucesso, sempre priorizando qualidade e satisfação do cliente."
            },
            {
              icon: <Target size={28} className="text-primary" />,
              title: "Design",
              subtitle: "Responsivo",
              description: "Todos os nossos sites são otimizados para funcionar perfeitamente em qualquer dispositivo."
            },
            {
              icon: <Heart size={28} className="text-primary" />,
              title: "Suporte",
              subtitle: "Contínuo",
              description: "Oferecemos suporte técnico e manutenção para garantir que seu site esteja sempre funcionando."
            }
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="h-full p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-2 mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-primary font-medium">{item.subtitle}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
