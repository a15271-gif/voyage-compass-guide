// @ts-nocheck
import { useParams, Link, Navigate } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import { getServiceBySlug, servicesData } from "@/data/servicesData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BASE_URL = "https://vela-digital-navigator.lovable.app";

const ServiceDetail = () => {
  const params = useParams({ strict: false }) as { slug?: string };
  const slug = params.slug;
  const service = slug ? getServiceBySlug(slug) : undefined;

  const benefitsAnim = useScrollAnimation();
  const processAnim = useScrollAnimation();
  const faqAnim = useScrollAnimation();

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const canonical = `${BASE_URL}/services/${service.slug}`;
  const relatedServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "Agência Vela",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Algarve" },
        { "@type": "AdministrativeArea", name: "Tavira" },
        { "@type": "Country", name: "Portugal" },
      ],
    },
    url: canonical,
    image: `${BASE_URL}${service.image}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.shortTitle, item: canonical },
    ],
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{service.seoTitle}</title>
        <meta name="description" content={service.seoDescription} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={service.seoTitle} />
        <meta property="og:description" content={service.seoDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        <meta property="og:locale" content="pt_PT" />
        <meta name="keywords" content={service.keywords} />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-44 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Voltar a Serviços
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/quote">
                    <Button size="lg" className="text-base">
                      Pedir Orçamento Gratuito
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="text-base">
                      Falar Connosco
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-strong border border-white/[0.06]">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover aspect-[4/3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Sobre este serviço</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {service.longDescription.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="bg-card/60 backdrop-blur-xl border border-white/[0.06] rounded-3xl p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-foreground mb-6">O que está incluído</h3>
              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/90">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsAnim.elementRef} className="py-20">
        <div
          className={`container mx-auto px-4 transition-all duration-700 ${
            benefitsAnim.isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Porquê escolher a <span className="text-primary">Agência Vela</span>
              </h2>
              <p className="text-muted-foreground">
                Vantagens reais para o seu negócio quando trabalha connosco.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-card/60 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center text-lg font-semibold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processAnim.elementRef} className="py-20">
        <div
          className={`container mx-auto px-4 transition-all duration-700 ${
            processAnim.isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O nosso processo</h2>
              <p className="text-muted-foreground">Como trabalhamos consigo, passo a passo.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((p, i) => (
                <div key={i} className="relative">
                  <div className="bg-card/60 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 h-full">
                    <div className="text-5xl font-bold text-primary/30 mb-3">0{i + 1}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqAnim.elementRef} className="py-20">
        <div
          className={`container mx-auto px-4 transition-all duration-700 ${
            faqAnim.isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
              <p className="text-muted-foreground">Respostas às dúvidas mais comuns sobre este serviço.</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {service.faq.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card/60 backdrop-blur-xl border border-white/[0.06] rounded-2xl px-6"
                >
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">Outros serviços</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group bg-card/60 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-500"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {s.shortTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{s.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                    Saber mais <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para começar?</h2>
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
    </div>
  );
};

export default ServiceDetail;
