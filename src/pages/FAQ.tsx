import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "O que é a Agência Vela e que serviços oferece?",
    answer:
      "A Agência Vela é uma agência de marketing digital e web design sediada no Algarve, em Tavira, que atua em todo o território nacional. Oferecemos serviços de criação de websites, gestão de redes sociais, SEO, Google Ads, branding, criação de logotipos, impulsão de perfil Google My Business e integração de agentes de inteligência artificial para negócios.",
  },
  {
    question: "A Agência Vela trabalha apenas no Algarve ou em todo o Portugal?",
    answer:
      "Embora a nossa sede esteja localizada no Algarve, mais concretamente em Tavira, a Agência Vela presta serviços de marketing digital e criação de websites a clientes em todo o Portugal. Trabalhamos remotamente com empresas de norte a sul do país, incluindo Lisboa, Porto, Alentejo e ilhas.",
  },
  {
    question: "Quanto custa criar um website profissional no Algarve?",
    answer:
      "Na Agência Vela, oferecemos soluções de criação de websites adaptadas a cada projeto e orçamento. Cada proposta é personalizada de acordo com as necessidades do cliente. Pode pedir um orçamento gratuito e sem compromisso através da nossa página de contacto ou pelo WhatsApp.",
  },
  {
    question: "Porque preciso de uma agência de marketing digital para o meu negócio no Algarve?",
    answer:
      "O Algarve é uma região altamente competitiva, especialmente nos setores do turismo, restauração e imobiliário. Uma agência de marketing digital como a Agência Vela ajuda o seu negócio a destacar-se online, atrair mais clientes locais e turistas, melhorar a presença no Google e converter visitantes em clientes reais através de estratégias de SEO, redes sociais e publicidade digital.",
  },
  {
    question: "Que tipos de websites a Agência Vela cria?",
    answer:
      "Criamos websites institucionais, landing pages, lojas online, portfólios e sites para restaurantes, hotéis, empresas de serviços e muito mais. Todos os nossos websites são responsivos, otimizados para SEO e desenvolvidos com as tecnologias mais modernas do mercado.",
  },
  {
    question: "O que é SEO e porque é importante para empresas no Algarve?",
    answer:
      "SEO (Search Engine Optimization) é o conjunto de técnicas que permitem ao seu website aparecer nos primeiros resultados do Google quando potenciais clientes pesquisam por serviços na sua área. Para negócios no Algarve, o SEO local é fundamental para aparecer em pesquisas como 'restaurante em Tavira', 'hotel no Algarve' ou 'serviços em Faro', atraindo tanto clientes locais como turistas.",
  },
  {
    question: "A Agência Vela faz gestão de redes sociais?",
    answer:
      "Sim! Oferecemos serviços completos de gestão de redes sociais, incluindo criação de conteúdo, design gráfico, planeamento editorial, gestão de campanhas publicitárias no Facebook e Instagram, e análise de resultados. Ajudamos empresas no Algarve e em todo o Portugal a crescer a sua presença digital.",
  },
  {
    question: "O que é a impulsão de perfil Google My Business?",
    answer:
      "A impulsão do perfil Google My Business é um serviço que otimiza a ficha do seu negócio no Google, melhorando a visibilidade nas pesquisas locais e no Google Maps. Isto é especialmente importante para negócios no Algarve que dependem de clientes locais e turistas que pesquisam serviços na região de Tavira, Faro, Olhão, Loulé e restante Algarve.",
  },
  {
    question: "A Agência Vela cria logotipos e identidade visual?",
    answer:
      "Sim, oferecemos serviços de branding completos, incluindo criação de logotipos, identidade visual, paleta de cores, tipografia e manual de marca. Uma identidade visual forte e profissional é essencial para qualquer empresa que queira destacar-se no mercado algarvio e nacional.",
  },
  {
    question: "O que são agentes de inteligência artificial e como podem ajudar o meu negócio?",
    answer:
      "Os agentes de IA são assistentes virtuais inteligentes que podem ser integrados no seu website ou redes sociais para responder automaticamente a perguntas de clientes, agendar serviços, qualificar leads e muito mais. A Agência Vela desenvolve e integra agentes de IA personalizados para empresas no Algarve e em todo o Portugal, ajudando a automatizar o atendimento e aumentar as vendas.",
  },
  {
    question: "Como posso pedir um orçamento à Agência Vela?",
    answer:
      "Pode pedir um orçamento gratuito e sem compromisso de várias formas: através do formulário na nossa página de orçamento, por email para contacto@agencia-vela.com, por telefone para o 968 334 043, ou diretamente pelo WhatsApp. Respondemos em menos de 24 horas.",
  },
  {
    question: "A Agência Vela trabalha com empresas de turismo no Algarve?",
    answer:
      "Sim! Temos experiência em marketing digital para o setor do turismo algarvio, incluindo hotéis, restaurantes, empresas de atividades turísticas, alojamento local e imobiliário. Conhecemos bem o mercado do Algarve e sabemos como posicionar o seu negócio para atrair tanto clientes nacionais como internacionais.",
  },
  {
    question: "Qual é o prazo de entrega de um website?",
    answer:
      "Na Agência Vela, o prazo máximo para entrega da primeira versão de um website é de 7 dias úteis após receção de todos os materiais necessários. O prazo final depende do feedback e aprovação do cliente. Trabalhamos de forma ágil para garantir resultados rápidos sem comprometer a qualidade.",
  },
  {
    question: "A Agência Vela faz campanhas de Google Ads?",
    answer:
      "Sim, criamos e gerimos campanhas de Google Ads para empresas no Algarve e em todo o Portugal. As campanhas são otimizadas para maximizar o retorno do investimento, direcionando anúncios para o público certo na região certa, seja em Tavira, Faro, todo o Algarve ou a nível nacional.",
  },
  {
    question: "Porquê escolher a Agência Vela em vez de outras agências de marketing?",
    answer:
      "A Agência Vela destaca-se pelo atendimento personalizado, preços competitivos, conhecimento profundo do mercado algarvio e nacional, e pela utilização das tecnologias mais recentes, incluindo inteligência artificial. Somos uma agência criativa e inovadora que se preocupa genuinamente com o sucesso de cada cliente.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Perguntas Frequentes | Agência Vela - Marketing Digital e Web Design Algarve</title>
        <meta
          name="description"
          content="Perguntas frequentes sobre os serviços da Agência Vela. Agência de marketing digital e web design no Algarve, Tavira, com atuação em todo o Portugal. Criação de websites, SEO, redes sociais e mais."
        />
        <link rel="canonical" href="https://vela-digital-navigator.lovable.app/faq" />
        <meta
          name="keywords"
          content="agência de marketing, agência de marketing algarve, agência de marketing tavira, agência de marketing portugal, agência de webdesign, marketing digital algarve, criação de websites, agência de comunicação, marketing tavira, web design algarve, agência criativa, empresa que faz sites, sites baratos, SEO algarve, agencia de marketing, agencia de marketing algarve, agencia de marketing tavira, agencia de marketing portugal, agencia de webdesign, agencia de comunicacao, agencia criativa, agencia vela, criacao de websites, criacao de website"
        />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-44 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Perguntas Frequentes — Agência de Marketing Digital no Algarve
          </h1>
          <p className="text-lg text-foreground/70 mb-10">
            Tire as suas dúvidas sobre os nossos serviços de marketing digital, criação de websites, SEO, gestão de redes sociais e muito mais. A Agência Vela está sediada em Tavira, no Algarve, e presta serviços em todo o Portugal.
          </p>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold text-base py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-5 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-8 rounded-2xl bg-card border border-border text-center">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Não encontrou a resposta que procurava?
            </h2>
            <p className="text-foreground/70 mb-6">
              Entre em contacto connosco. A equipa da Agência Vela está disponível para esclarecer todas as suas dúvidas sobre marketing digital, web design e comunicação no Algarve e em todo o Portugal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                Contacte-nos
              </a>
              <a
                href="/quote"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background text-foreground px-6 py-3 font-medium hover:bg-accent transition-colors"
              >
                Pedir Orçamento Grátis
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
