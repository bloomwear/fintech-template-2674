
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedKeyboard from './AnimatedKeyboard';
import { Loader, ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card/20">
      {/* Enhanced cosmic particle effect */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      {/* Multiple gradient glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full">
        <div className="w-full h-full opacity-15 bg-primary blur-[100px] animate-pulse-slow"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.3}s`
            }}
          />
        ))}
      </div>
      
      <div className={`relative z-10 max-w-5xl text-center space-y-8 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 animate-pulse" />
            Lançando novas funcionalidades de pagamento
            <Loader className="h-4 w-4 animate-spin text-primary" />
          </span>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Operações financeiras para empresas de 
            </span>
            <span className="block bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent animate-gradient-shift bg-300% mt-2">
              crescimento
            </span>
          </h1>
          
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed font-light">
          Simplifique seus fluxos de trabalho financeiros com nossa plataforma fintech abrangente. 
          Criada para empresas modernas que valorizam eficiência, conformidade e crescimento escalável.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 items-center">
          <Button className="group bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 text-lg h-14 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 min-h-[56px]">
            Começar gratuitamente
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 text-lg h-14 px-10 rounded-full transition-all duration-300 backdrop-blur-sm min-h-[56px]">
            Agendar demonstração
          </Button>
        </div>
        
        <div className="pt-6 text-base text-muted-foreground flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary/60 animate-pulse"></div>
          Sem cartão de crédito necessário • Teste gratuito de 14 dias
        </div>
      </div>
      
      {/* Enhanced Animated Keyboard */}
      <div className={`w-full max-w-7xl mt-16 z-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <AnimatedKeyboard />
      </div>
    </section>
  );
};

export default HeroSection;
