import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import velaLogo from "@/assets/vela-logo.png";
const About = () => {
  const [revealedWords, setRevealedWords] = useState<number[]>([]);
  const storySection = useScrollAnimation();
  const missionSection = useScrollAnimation();
  const valuesSection = useScrollAnimation();
  const specializationSection = useScrollAnimation();
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sobre a Agência Vela | Marketing Digital Tavira e Algarve | Portugal</title>
        <meta name="description" content="Conheça a Agência Vela - agência de marketing digital no Algarve especializada em web design, SEO e branding para pequenos negócios. Marketing Tavira com preços acessíveis e profissionais dedicados." />
        <link rel="canonical" href="https://vela-digital-navigator.lovable.app/about" />
        <meta property="og:title" content="Sobre a Agência Vela | Marketing Digital Tavira e Algarve" />
        <meta property="og:description" content="Conheça a Agência Vela - especialistas em marketing digital no Algarve e Tavira." />
        <meta property="og:url" content="https://vela-digital-navigator.lovable.app/about" />
        <meta name="keywords" content="agência de marketing, agência de marketing algarve, marketing algarve, agência criativa, telemarketing, marketing, agência de marketing tavira, marketing tavira, empresa que faz sites, empresa de sites, sites baratos, agência vela, sobre nós, especialista marketing, especialista digital, profissional web, agencia de marketing, agencia de marketing algarve, agencia de marketing tavira, agencia criativa, agencia de comunicacao, agencia de webdesign, agencia vela, sobre nos" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-44 pb-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Descobre quem é a Agência       <span className="text-primary">Vela!</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Especialistas em web design, criação de websites e marketing em Portugal que navegam ao lado dos pequenos negócios
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storySection.elementRef} className="py-20">
        <div className={`container mx-auto px-4 transition-all duration-700 ${storySection.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">A Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Vela nasceu da frustração de ver pequenos negócios lutarem para ter uma presença 
                  online profissional. Preços inacessíveis, prazos longos e processos complicados 
                  tornavam o marketing digital um luxo inalcançável.
                </p>
                <p>
                  Dois sócios com experiência em marketing e design decidiram mudar isso. Criámos uma agência diferente: rápida, acessível e sem complicações. Como os nossos antepassados portugueses navegaram e descobriram o mundo, também nós queremos ajudar os nossos parceiros a navegar as marés do digital!
                </p>
                <p>
                  Hoje, especializamo-nos em servir negócios locais, oferecendo soluções personalizadas que cabem em qualquer orçamento. Porque acreditamos que todos merecem ter uma presença digital profissional.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img alt="Agência de Marketing Digital Vela - Logo profissional" src="/lovable-uploads/4cd54715-777a-47f4-894a-5a1d6a206ac9.png" className="w-72 h-72 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionSection.elementRef} className="py-20 bg-secondary text-secondary-foreground">
        <div className={`container mx-auto px-4 transition-all duration-700 ${missionSection.isVisible ? 'animate-scale-up' : 'opacity-0'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">A Nossa Missão</h2>
            <p className="text-xl text-secondary-foreground/90 leading-relaxed">
              Impulsão e crescimento de pequenos negócios através de serviços profissionais de marketing digital, 
              web design e automatização. Como gestores de marketing especializados, acreditamos que qualquer negócio 
              merece ter acesso a websites, branding e otimização digital de qualidade para crescer e competir 
              no mercado atual com soluções low-cost.
            </p>
          </div>
        </div>
      </section>



      {/* Values Section - VELA Vertical */}
      <section ref={valuesSection.elementRef} className="py-20 bg-secondary text-secondary-foreground">
        <div className={`container mx-auto px-4 transition-all duration-700 ${valuesSection.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Os Nossos Valores</h2>
            <p className="text-xl text-secondary-foreground/90">O que nos guia em cada projeto</p>
          </div>

          <div className="w-full flex flex-col gap-4 md:gap-6">
            {[
              { letter: 'V', word: 'elocidade', description: 'Entregamos projetos em tempo recorde sem comprometer a qualidade.' },
              { letter: 'E', word: 'ficácia', description: 'Soluções que funcionam e geram resultados reais para o seu negócio.' },
              { letter: 'L', word: 'ucidez', description: 'Estratégias claras e transparentes, sem complicações desnecessárias.' },
              { letter: 'A', word: 'mbição', description: 'Objetivos ambiciosos para levar o seu negócio mais longe.' }
            ].map((value, index) => {
              const isRevealed = revealedWords.includes(index);
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-4 md:gap-8 p-4 md:p-6 rounded-lg bg-card shadow-elegant hover:shadow-strong transition-all duration-300 group cursor-pointer"
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => {
                    if (!isRevealed) {
                      setRevealedWords(prev => [...prev, index]);
                    }
                  }}
                >
                  <h3 className="text-5xl md:text-7xl font-bold tracking-tight">
                    <span className="text-primary">{value.letter}</span>
                    <span 
                      className={`text-foreground ml-2 md:ml-4 transition-all duration-500 ${
                        isRevealed 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-4'
                      }`}
                    >
                      {value.word}
                    </span>
                  </h3>
                  <p className={`text-muted-foreground text-sm md:text-base flex-1 transition-opacity duration-300 hidden md:block ${
                    isRevealed ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Focus Section */}
      <section ref={specializationSection.elementRef} className="py-20 bg-accent">
        <div className={`container mx-auto px-4 transition-all duration-700 ${specializationSection.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
              Especialização que Faz a Diferença
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-center">
                Ao contrário de agências generalistas, focamo-nos em entender profundamente 
                as necessidades específicas dos nossos clientes. Esta especialização permite-nos 
                criar soluções mais eficazes e personalizadas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-card p-6 rounded-lg shadow-elegant">
                  <h3 className="text-2xl font-bold text-primary mb-3">Arquitetos e Engenheiros Civis</h3>
                  <p className="text-muted-foreground">
                    Compreendemos a importância de portfolios visuais impactantes e otimização para pesquisas locais de serviços de arquitetura. Toda a gente merece a oportunidade de ter uma boa casa. Nós seremos os arquitetos da sua casa digital.                       
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-elegant">
                  <h3 className="text-2xl font-bold text-primary mb-3">Clínicas Locais       </h3>
                  <p className="text-muted-foreground">Seja a sua clínica de estética, dentária ou de animais de estimação, estará seguro connosco! Sabemos as estratégias e métodos para melhor mostrar o seu trabalho e as suas transformações! Faça com que os seus clientes o escolham a si, com toda a segurança e confiança.                                                                                          </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;