
import React from 'react';
import { CreditCard, Shield, BarChart3, Settings, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <CreditCard size={24} className="text-primary" />,
      title: "Processamento de Pagamentos",
      description: "Soluções completas para processar pagamentos online e offline com segurança e eficiência."
    },
    {
      icon: <Shield size={24} className="text-primary" />,
      title: "Gestão de Riscos",
      description: "Ferramentas avançadas de detecção de fraude e análise de risco para proteger seu negócio."
    },
    {
      icon: <BarChart3 size={24} className="text-primary" />,
      title: "Analytics Financeiro",
      description: "Dashboards em tempo real e relatórios detalhados para tomada de decisões estratégicas."
    },
    {
      icon: <Settings size={24} className="text-primary" />,
      title: "Automação de Processos",
      description: "Automatize reconciliações, aprovações e fluxos de trabalho financeiros complexos."
    },
    {
      icon: <Globe size={24} className="text-primary" />,
      title: "Pagamentos Internacionais",
      description: "Processe pagamentos em múltiplas moedas com taxas competitivas e conversão automática."
    },
    {
      icon: <Zap size={24} className="text-primary" />,
      title: "Integração Rápida",
      description: "APIs robustas e documentação completa para integração com seus sistemas existentes."
    }
  ];

  return (
    <section id="servicos" className="w-full py-20 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos soluções completas para modernizar e otimizar suas operações financeiras
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border bg-background hover:border-border/60 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
