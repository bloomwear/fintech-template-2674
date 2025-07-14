
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Design Responsivo",
      description: "Sites que se adaptam perfeitamente a qualquer dispositivo, garantindo a melhor experiência do usuário.",
      expandedDescription: "Criamos designs que funcionam fluidamente em desktop, tablet e mobile. Utilizamos as mais modernas técnicas de CSS Grid e Flexbox para garantir layouts flexíveis e adaptativos. Todos os elementos são testados em diferentes tamanhos de tela para uma experiência consistente.",
      icon: (
        <Layers size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Performance Otimizada",
      description: "Sites rápidos e otimizados para SEO, garantindo melhor posicionamento nos mecanismos de busca.",
      expandedDescription: "Implementamos técnicas avançadas de otimização como lazy loading, compressão de imagens, minificação de código e cache estratégico. Monitoramos métricas Core Web Vitals e garantimos tempos de carregamento inferiores a 3 segundos em qualquer conexão.",
      icon: (
        <Grid3x3 size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "CMS Personalizado",
      description: "Sistema de gerenciamento de conteúdo intuitivo para você atualizar seu site facilmente.",
      expandedDescription: "Desenvolvemos painéis administrativos personalizados onde você pode gerenciar todo o conteúdo do seu site. Interface amigável para adicionar produtos, posts de blog, imagens e textos. Inclui sistema de usuários com diferentes níveis de permissão e backup automático.",
      icon: (
        <LayoutDashboard size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Integração com APIs",
      description: "Conectamos seu site com sistemas externos como CRM, ERP e plataformas de pagamento.",
      expandedDescription: "Integramos seu site com diversos serviços como WhatsApp Business, Google Analytics, Facebook Pixel, sistemas de email marketing e plataformas de pagamento. Criamos conexões seguras que automatizam processos e melhoram a eficiência do seu negócio.",
      icon: (
        <ListCheck size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Segurança Avançada",
      description: "Implementamos as melhores práticas de segurança para proteger seu site e dados dos clientes.",
      expandedDescription: "Utilizamos certificados SSL, criptografia de dados, proteção contra ataques DDoS e malware. Implementamos autenticação de dois fatores, backup automático diário e monitoramento 24/7. Garantimos conformidade com LGPD e outras regulamentações de privacidade.",
      icon: (
        <Star size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Suporte Técnico",
      description: "Suporte contínuo e manutenção para garantir que seu site esteja sempre funcionando perfeitamente.",
      expandedDescription: "Oferecemos suporte técnico especializado, atualizações regulares de segurança, monitoramento de performance e backup diário. Nossa equipe está disponível para resolver qualquer problema e implementar melhorias conforme seu negócio evolui.",
      icon: (
        <BookOpen size={24} className="text-cosmic-accent" />
      )
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Tudo que seu negócio precisa
          </h2>
          <p className="text-cosmic-muted text-lg">
            Recursos completos para criar uma presença digital forte e gerar resultados reais
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                      openFeature === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-cosmic-muted">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium">
                      Saiba mais →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
