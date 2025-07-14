
import React from 'react';
import { Globe, Smartphone, ShoppingCart, Settings, Search, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe size={28} className="text-primary" />,
      title: "Sites Institucionais",
      description: "Sites elegantes e profissionais para apresentar sua empresa, produtos e serviços de forma impactante.",
      features: ["Design responsivo", "SEO otimizado", "Carregamento rápido"]
    },
    {
      icon: <ShoppingCart size={28} className="text-primary" />,
      title: "E-commerce",
      description: "Lojas virtuais completas com sistema de pagamento integrado e painel administrativo completo.",
      features: ["Pagamentos online", "Gestão de estoque", "Relatórios de vendas"]
    },
    {
      icon: <Smartphone size={28} className="text-primary" />,
      title: "Landing Pages",
      description: "Páginas de conversão otimizadas para campanhas de marketing e geração de leads qualificados.",
      features: ["Alta conversão", "Formulários inteligentes", "Analytics integrado"]
    },
    {
      icon: <Settings size={28} className="text-primary" />,
      title: "Sistemas Web",
      description: "Desenvolvimento de sistemas personalizados para automatizar processos da sua empresa.",
      features: ["Painel administrativo", "Integração com APIs", "Banco de dados seguro"]
    },
    {
      icon: <Search size={28} className="text-primary" />,
      title: "SEO & Performance",
      description: "Otimização para mecanismos de busca e performance para garantir visibilidade online.",
      features: ["Ranking no Google", "Velocidade otimizada", "Análise de concorrência"]
    },
    {
      icon: <Zap size={28} className="text-primary" />,
      title: "Manutenção",
      description: "Serviços de manutenção, atualizações e suporte técnico para manter seu site sempre funcionando.",
      features: ["Updates regulares", "Backup automático", "Suporte 24/7"]
    }
  ];

  return (
    <section id="servicos" className="w-full py-24 px-6 md:px-12 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Settings size={16} />
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Soluções completas para
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              sua presença digital
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Oferecemos um ecossistema completo de serviços para criar e manter sua presença digital 
            com as mais modernas tecnologias e melhores práticas do mercado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group h-full"
            >
              <div className="h-full p-8 rounded-2xl border border-border bg-background/80 backdrop-blur-sm hover:bg-background hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
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

export default Services;
