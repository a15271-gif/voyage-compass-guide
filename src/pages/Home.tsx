import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Zap, Pen, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextType from "@/components/TextType";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroVideo from "@/assets/hero-video.mp4";
import websiteImage from "@/assets/service-website.jpg";
import socialImage from "@/assets/service-social.jpg";
import aiImage from "@/assets/service-ai.jpg";
import seoImage from "@/assets/service-seo.jpg";
import brandingImage from "@/assets/service-branding.jpg";
import googleAdsImage from "@/assets/service-google-ads.jpg";
import specialistsBg from "@/assets/specialists-bg.avif";
import CardSwap, { Card } from "@/components/CardSwap";
const Home = () => {
  const servicesSection = useScrollAnimation();
  const pillarsSection = useScrollAnimation();
  const specialistsSection = useScrollAnimation();
  const processSection = useScrollAnimation();
  const processStep1 = useScrollAnimation();
  const processStep2 = useScrollAnimation();
  const processStep3 = useScrollAnimation();
  const processStep4 = useScrollAnimation();
  const stepAnimations = [processStep1, processStep2, processStep3, processStep4];
  const testimonialsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();
  const processSteps = [{
    step: "Passo 1",
    title: "Primeiro Contacto",
    description: "Seja contactado, contacte ou peça um orçamento"
  }, {
    step: "Passo 2",
    title: "Reunião Online",
    description: "Marque uma reunião online, grátis e sem compromisso"
  }, {
    step: "Passo 3",
    title: "Análise do Negócio",
    description: "Analisamos o seu negócio para avaliar como o iremos ajudar"
  }, {
    step: "Passo 4",
    title: "Sucesso",
    description: "Aplicamos as nossas melhores estratégias e métodos validados e juntos, crescemos o seu negócio como nunca antes!"
  }];
  const services = [{
    title: "Criação de Websites e Web Design",
    description: "Sites profissionais, modernos e responsivos desde 700€",
    image: websiteImage
  }, {
    title: "SEO e Google Meu Negócio",
    description: "Otimização para máxima visibilidade local",
    image: seoImage
  }, {
    title: "Gestão de Redes Sociais",
    description: "Presença consistente e profissional nas redes",
    image: socialImage
  }, {
    title: "Branding e Criação de Logotipos",
    description: "Identidade visual moderna e profissional",
    image: brandingImage
  }, {
    title: "Campanhas Google Ads",
    description: "Publicidade otimizada para máximo retorno",
    image: googleAdsImage
  }, {
    title: "Integração de Agentes IA",
    description: "Automatize a comunicação do seu negócio",
    image: aiImage
  }];
  const pillars = [{
    icon: Zap,
    title: "Entrega Rápida",
    description: "Projetos concluídos em tempo recorde sem comprometer a qualidade"
  }, {
    icon: "€",
    title: "Preço Acessível",
    description: "Marketing profissional ao alcance de pequenos negócios"
  }, {
    icon: Pen,
    title: "Web Design Moderno",
    description: "Web design profissional e elegante que destaca a sua marca online"
  }];
  const testimonials = [{
    name: "Paixão Criação",
    role: "Salão Cabeleireiro e Estética",
    content: "A Vela fez um website com a cara do nosso salão, por um preço muito justo e com marcações online!",
    website: "https://paixaocriacao.com"
  }, {
    name: "Ivânia Shiatsu",
    role: "Terapêuta",
    content: "O meu perfil do google não existia sequer, em dois dias fiquei em 9o de 38! Eles realmente sabem o que fazem!",
    website: "https://www.google.com/search?sca_esv=d59444dfc678413a&sxsrf=AE3TifM3lFWUURFob40-Ntz8C-vd0HXTKw:1765892273489&q=Iv%C3%A2nia+Shiatsu&si=AMgyJEs9DArPE9xmb5yVYVjpG4jqWDEKSIpCRSjmm88XZWnGNQSNN-pGzI8TV-PvyK080jNHQ8n-2joJ6VO8XCmmiWU-EsNroved10ls3CZPL1sXR3V2o47-ac_watO4PNoM4ELfgc0y&sa=X&ved=2ahUKEwj_4LCtncKRAxXaKvsDHQYQE_oHegQIKRAB&biw=1920&bih=911&dpr=1"
  }, {
    name: "Pedro Santos",
    role: "Consultor",
    content: "Excelente serviço de SEO. Já apareço nas primeiras pesquisas do Google!",
    website: "https://example.com"
  }];
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Agência Vela | Marketing Digital e Web Design | Algarve e Tavira</title>
        <meta name="description" content="Agência Vela - Especialistas em marketing digital, web design e criação de websites no Algarve. Sites desde 700€. Agência de marketing em Tavira com SEO, redes sociais e branding low-cost para pequenos negócios." />
        <link rel="canonical" href="https://vela-digital-navigator.lovable.app/" />
        <meta property="og:title" content="Agência Vela | Marketing Digital e Web Design | Algarve e Tavira" />
        <meta property="og:description" content="Agência Vela - Especialistas em marketing digital e web design no Algarve. Sites desde 700€. Marketing Tavira." />
        <meta property="og:url" content="https://vela-digital-navigator.lovable.app/" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="agência de marketing, agência de marketing algarve, marketing algarve, agência criativa, telemarketing, marketing, agência de marketing tavira, marketing tavira, empresa que faz sites, empresa de sites, sites baratos, agência vela, marketing digital, web design, criação de websites, SEO, google meu negócio, gestão de redes sociais, branding, agencia de marketing, agencia de marketing algarve, agencia de marketing tavira, agencia criativa, agencia de comunicacao, agencia de webdesign, agencia vela, criacao de websites, criacao de website, gestao de redes sociais, google meu negocio" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight min-h-[1.2em]">
            {/* Texto para SEO - visualmente oculto mas acessível a crawlers */}
            <span className="sr-only">
              Bem-vindo à Vela! A tua agência de marketing e webdesign no Algarve e todo Portugal!
            </span>
            
            {/* Animação visível para utilizadores */}
            <span aria-hidden="true">
              <TextType
                text={[
                  "Bem-vindo à Vela!",
                  "A tua agência de marketing e webdesign no Algarve e...",
                  "todo Portugal!"
                ]}
                typingSpeed={75}
                pauseDuration={2000}
                deletingSpeed={50}
                showCursor
                cursorCharacter="|"
                cursorBlinkDuration={0.5}
                className="text-white"
                highlightWords={["Vela!", "Algarve e...", "Portugal!"]}
                highlightClassName="text-primary"
              />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">Especialistas em criação de websites, web design, SEO, Google Meu Negócio e gestão de redes sociais. Sites desde <span className="text-primary font-semibold">700€</span>. Marketing low-cost profissional para pequenos negócios.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6">
                Peça um orçamento
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-secondary">
                Fale connosco
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesSection.elementRef} className="py-20 bg-accent overflow-hidden">
        <div className={`container mx-auto px-4 transition-all duration-700 ${servicesSection.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left: Title + CTA */}
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Web Design e Serviços de Marketing Digital
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Agência especializada em criação de websites, branding, gestão de redes sociais, SEO, Google Ads e integração de IA para potenciar o seu negócio.
              </p>
              <Link to="/services">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  Ver mais
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>

            {/* Right: Animated CardSwap */}
            <div className="relative h-[600px] hidden lg:block">
              <CardSwap width={560} height={420} cardDistance={70} verticalDistance={80} delay={3500} pauseOnHover>
                {services.map((service, index) => (
                  <Card key={index}>
                    <div className="relative h-1/2 overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>

            {/* Mobile fallback grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
              {services.map((service, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden shadow-elegant">
                  <div className="relative h-40 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-foreground mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vela */}
      <section ref={pillarsSection.elementRef} className="py-20">
        <div className={`container mx-auto px-4 transition-all duration-700 ${pillarsSection.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Porquê escolher a Vela
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => <div key={index} className="text-center p-8 rounded-lg bg-card shadow-elegant hover:shadow-strong transition-all duration-300">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                  {typeof pillar.icon === 'string' ? <span className="text-primary text-3xl font-bold animate-pulse-strong">{pillar.icon}</span> : index === 0 ? <pillar.icon size={32} className="text-primary animate-shake" /> : <pillar.icon size={32} className="text-primary animate-draw" />}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>)}
          </div>

          <div className="text-center mt-12">
            <Link to="/quote">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6">
                Peça o seu orçamento gratuito
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section ref={specialistsSection.elementRef} className="relative py-20 text-white">
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${specialistsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
        <div className={`container mx-auto px-4 text-center relative z-10 transition-all duration-700 ${specialistsSection.isVisible ? 'animate-scale-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Agência de Marketing em Tavira e Algarve
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto mb-8">
            Especialistas digitais dedicados ao crescimento e impulsão de pequenos negócios. Oferecemos automatização, otimização de negócio e estratégias personalizadas de marketing low-cost que cabem no seu orçamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                Peça um orçamento grátis
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
                Conheça-nos melhor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Como Trabalhamos */}
      <section ref={processSection.elementRef} className="pt-12 pb-40">
        <div className={`container mx-auto px-4 transition-all duration-700 ${processSection.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="text-center mb-28">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Como Trabalhamos</h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary/50"></div>
              <span className="text-primary font-semibold">•</span>
              <div className="h-px w-12 bg-primary/50"></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto relative md:py-[100px]">
            <div className="absolute top-1/2 -translate-y-1/2 left-[50px] right-[50px] h-0.5 bg-primary/30 hidden md:block">
              <div className={`h-full bg-primary transition-all duration-[2000ms] ease-out ${processStep1.isVisible ? 'w-full' : 'w-0'}`} />
            </div>
            
            <div className="flex flex-col gap-6 md:hidden">
              {processSteps.map((step, index) => <div key={index} className={`bg-card p-6 rounded-lg shadow-elegant transition-all duration-700 ${processSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
              transitionDelay: `${index * 150}ms`
            }}>
                  <span className="text-sm font-semibold text-primary mb-2 block">{step.step}</span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>)}
            </div>

            <div className="hidden md:grid md:grid-cols-4 gap-4">
              {processSteps.map((step, index) => <div key={index} ref={stepAnimations[index].elementRef} className="text-center relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary z-10" />
                  <div className={`absolute left-1/2 -translate-x-1/2 w-full transition-all duration-700 ease-out ${index % 2 === 0 ? 'bottom-1/2 pb-6' : 'top-1/2 pt-6'} ${stepAnimations[index].isVisible ? 'opacity-100 translate-y-0' : `opacity-0 ${index % 2 === 0 ? '-translate-y-8' : 'translate-y-8'}`}`} style={{
                transitionDelay: `${index * 500}ms`
              }}>
                    <span className="text-sm font-semibold text-primary mb-2 block">{step.step}</span>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm px-2">{step.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsSection.elementRef} className="py-20 bg-accent">
        <div className={`container mx-auto px-4 transition-all duration-700 ${testimonialsSection.isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              O que dizem os nossos clientes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                    <div className="bg-card p-8 rounded-lg shadow-elegant h-full mx-2 flex flex-col">
                      <Quote className="text-primary mb-4" size={40} />
                      <p className="text-foreground mb-6 text-lg italic">"{testimonial.content}"</p>
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="font-bold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                        <a href={testimonial.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1 whitespace-nowrap">
                          Visitar site <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="bg-card border-border text-foreground hover:bg-accent" />
              <CarouselNext className="bg-card border-border text-foreground hover:bg-accent" />
            </Carousel>
          </div>

          <div className="text-center mt-10">
            <a href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary hover:text-primary-foreground">
                Deixa a tua avaliação
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaSection.elementRef} className="py-20 bg-gradient-hero">
        <div className={`container mx-auto px-4 text-center transition-all duration-700 ${ctaSection.isVisible ? 'animate-scale-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Peça o seu orçamento gratuito e sem compromisso. Respondemos em menos de 24 horas.
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Pedir Orçamento Gratuito
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;