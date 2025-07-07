
import React from 'react';
import { User, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Sobre Nós
          </h2>
          <p className="text-muted-foreground text-lg">
            Somos especialistas em soluções financeiras inovadoras, dedicados a transformar a forma como empresas gerenciam suas operações financeiras.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <User size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-medium text-foreground">Experiência</h3>
            <p className="text-muted-foreground">Mais de 10 anos desenvolvendo soluções fintech para empresas de todos os tamanhos.</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Award size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-medium text-foreground">Qualidade</h3>
            <p className="text-muted-foreground">Certificações internacionais e padrões de segurança de nível bancário.</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Target size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-medium text-foreground">Foco</h3>
            <p className="text-muted-foreground">Soluções personalizadas que atendem às necessidades específicas de cada cliente.</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Heart size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-medium text-foreground">Compromisso</h3>
            <p className="text-muted-foreground">Suporte dedicado e relacionamento duradouro com nossos clientes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
