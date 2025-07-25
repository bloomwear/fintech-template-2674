
import React from 'react';
import { Star, Quote, Users, TrendingUp, Shield } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Nosso novo site aumentou as vendas online em 300% nos primeiros três meses. O design é incrível e a funcionalidade é perfeita. Recomendo totalmente!",
      author: "Marina Silva",
      position: "CEO da Bella Moda",
      company: "Bella Moda",
      avatar: "bg-gradient-to-br from-blue-500 to-purple-600",
      rating: 5,
      metric: "300% mais vendas"
    },
    {
      quote: "A equipe entendeu exatamente nossa visão e criou um site que superou nossas expectativas. O suporte é excepcional e sempre atendem rapidamente.",
      author: "Carlos Mendes",
      position: "Diretor de Marketing na TechSolutions",
      company: "TechSolutions",
      avatar: "bg-gradient-to-br from-green-500 to-teal-600",
      rating: 5,
      metric: "Resultados excepcionais"
    },
    {
      quote: "Profissionais competentes que entregaram um trabalho de qualidade superior. Nosso site ficou moderno, rápido e está gerando muitos leads qualificados.",
      author: "Ana Carolina",
      position: "Fundadora da AC Consultoria",
      company: "AC Consultoria",
      avatar: "bg-gradient-to-br from-orange-500 to-red-600",
      rating: 5,
      metric: "Leads qualificados"
    }
  ];

  const stats = [
    {
      icon: <Users size={24} className="text-primary" />,
      value: "100+",
      label: "Clientes Satisfeitos"
    },
    {
      icon: <TrendingUp size={24} className="text-primary" />,
      value: "250%",
      label: "Aumento Médio em Conversões"
    },
    {
      icon: <Shield size={24} className="text-primary" />,
      value: "24/7",
      label: "Suporte Dedicado"
    }
  ];
  
  return (
    <section id="depoimentos" className="w-full py-24 px-6 md:px-12 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="cosmic-grid opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Quote size={16} />
            Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            O que nossos clientes
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              falam sobre nós
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Veja como nossos sites transformaram negócios e geraram resultados 
            excepcionais para empresários de diferentes segmentos.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group h-full"
            >
              <div className="h-full p-8 rounded-2xl border border-border bg-background/80 backdrop-blur-sm hover:bg-background hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                {/* Rating and metric */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {testimonial.metric}
                  </span>
                </div>

                {/* Quote */}
                <div className="mb-8">
                  <Quote size={24} className="text-primary/40 mb-4" />
                  <p className="text-lg text-foreground/90 leading-relaxed font-medium italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`h-14 w-14 rounded-full ${testimonial.avatar} flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center pt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors cursor-pointer">
            <Users size={18} />
            Ver Mais Depoimentos
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
