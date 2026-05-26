import websiteImage from "@/assets/service-website.jpg";
import socialImage from "@/assets/service-social.jpg";
import googleAdsImage from "@/assets/service-google-ads.jpg";
import seoImage from "@/assets/service-seo.jpg";
import brandingImage from "@/assets/service-branding.jpg";
import aiImage from "@/assets/service-ai.jpg";

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string[];
  image: string;
  features: string[];
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  keywords: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "criacao-de-websites",
    title: "Criação de Websites e Web Design",
    shortTitle: "Criação de Websites",
    description:
      "Sites baratos e profissionais, modernos e responsivos, otimizados para conversão. Web design personalizado com SEO básico incluído e formação de gestão.",
    longDescription: [
      "Na Agência Vela criamos websites profissionais que combinam design moderno, performance e otimização para motores de busca. Cada site é desenhado à medida do seu negócio, com foco em converter visitantes em clientes.",
      "Trabalhamos com pequenos negócios em Tavira, no Algarve e em todo o Portugal, oferecendo preços acessíveis sem comprometer a qualidade. Desde landing pages a sites institucionais ou lojas online, criamos a presença digital que a sua marca merece.",
    ],
    image: websiteImage,
    features: [
      "Design moderno e responsivo (mobile, tablet, desktop)",
      "SEO básico incluído desde o lançamento",
      "Formulários de contacto e integração com email",
      "Integração com redes sociais e Google Maps",
      "Formação de gestão básica do website",
      "Hospedagem e domínio aconselhados",
    ],
    benefits: [
      { title: "Preço acessível", description: "Websites profissionais a partir de 700€, sem custos escondidos." },
      { title: "Entrega rápida", description: "Sites entregues entre 7 a 21 dias úteis consoante a complexidade." },
      { title: "Otimizado para Google", description: "Estrutura técnica preparada para SEO desde o primeiro dia." },
      { title: "Total autonomia", description: "Damos-lhe formação para gerir o seu site sem depender de ninguém." },
    ],
    process: [
      { title: "Briefing", description: "Reunião gratuita para entender o seu negócio e objetivos." },
      { title: "Design", description: "Criamos protótipos visuais alinhados com a sua marca." },
      { title: "Desenvolvimento", description: "Construímos o site com tecnologia moderna e responsiva." },
      { title: "Lançamento", description: "Publicamos online e damos formação para que possa gerir." },
    ],
    faq: [
      {
        question: "Quanto custa criar um website com a Agência Vela?",
        answer:
          "Os nossos websites começam em 700€ e o preço final depende das funcionalidades pretendidas. Pedimos sempre um orçamento personalizado e gratuito.",
      },
      {
        question: "Quanto tempo demora a criação do website?",
        answer:
          "Em média entre 7 e 21 dias úteis, dependendo da complexidade do projeto e da rapidez na entrega dos conteúdos.",
      },
      {
        question: "O website inclui SEO?",
        answer:
          "Sim, todos os nossos websites incluem otimização SEO básica para garantir uma boa base de visibilidade no Google.",
      },
    ],
    seoTitle: "Criação de Websites Baratos e Profissionais | Web Design Algarve | Agência Vela",
    seoDescription:
      "Criação de websites profissionais e responsivos a partir de 700€. Web design moderno com SEO incluído. Empresa de sites em Tavira, Algarve e todo o Portugal.",
    keywords:
      "criação de websites, criacao de websites, web design algarve, web design tavira, sites baratos, empresa que faz sites, empresa de sites, criação de website, websites profissionais, web design portugal",
  },
  {
    slug: "seo-google-meu-negocio",
    title: "SEO e Google Meu Negócio",
    shortTitle: "SEO e Google Meu Negócio",
    description:
      "Otimização contínua para motores de busca e gestão do perfil Google Meu Negócio para máxima visibilidade local.",
    longDescription: [
      "Aparecer no Google é essencial para qualquer negócio. Na Agência Vela ajudamos empresas locais a posicionar-se nas primeiras páginas dos motores de busca, atraindo clientes qualificados de forma contínua.",
      "Combinamos SEO técnico, criação de conteúdo otimizado e gestão profissional do Google Meu Negócio para garantir que a sua marca é encontrada quando mais importa.",
    ],
    image: seoImage,
    features: [
      "Estudo e otimização de palavras-chave",
      "Gestão completa do Google Meu Negócio",
      "Criação de conteúdo otimizado para SEO",
      "Relatórios mensais de posicionamento",
      "Análise contínua da concorrência",
      "Link building básico e estratégico",
    ],
    benefits: [
      { title: "Mais visibilidade local", description: "Apareça no mapa do Google quando procuram serviços como o seu." },
      { title: "Tráfego qualificado", description: "Atraia visitantes que realmente procuram o que oferece." },
      { title: "Resultados duradouros", description: "O SEO constrói uma presença que se mantém no tempo." },
      { title: "Relatórios claros", description: "Acompanhe a sua evolução com relatórios mensais transparentes." },
    ],
    process: [
      { title: "Auditoria SEO", description: "Analisamos o estado atual do seu site e perfil Google." },
      { title: "Estratégia", description: "Definimos palavras-chave e plano de ação personalizado." },
      { title: "Implementação", description: "Otimizamos site, conteúdos e Google Meu Negócio." },
      { title: "Monitorização", description: "Acompanhamos resultados e ajustamos a estratégia." },
    ],
    faq: [
      {
        question: "Quanto tempo até ver resultados de SEO?",
        answer:
          "Os primeiros resultados costumam aparecer em 2 a 4 meses, com crescimento contínuo a partir daí. O SEO é uma estratégia de longo prazo.",
      },
      {
        question: "Porque é importante o Google Meu Negócio?",
        answer:
          "É a ficha que aparece no Google Maps e nas pesquisas locais. Uma boa gestão pode trazer muitos clientes de forma gratuita.",
      },
      {
        question: "Trabalham com negócios fora do Algarve?",
        answer: "Sim, trabalhamos com clientes em todo o Portugal e adaptamos a estratégia à zona geográfica de atuação.",
      },
    ],
    seoTitle: "SEO e Google Meu Negócio | Otimização para Google no Algarve | Agência Vela",
    seoDescription:
      "Serviços de SEO e gestão de Google Meu Negócio para negócios em Tavira, Algarve e Portugal. Apareça no topo do Google com estratégias acessíveis e eficazes.",
    keywords:
      "SEO algarve, SEO tavira, google meu negocio, google meu negócio, otimização google, SEO portugal, posicionamento google, agência SEO, agencia SEO algarve",
  },
  {
    slug: "gestao-de-redes-sociais",
    title: "Gestão de Redes Sociais",
    shortTitle: "Gestão de Redes Sociais",
    description:
      "Presença consistente e profissional nas redes sociais com conteúdos planeados e publicações regulares.",
    longDescription: [
      "As redes sociais são a vitrine da sua marca. Cuidamos da sua presença no Instagram, Facebook e outras plataformas, com conteúdos visuais profissionais e uma estratégia pensada para o seu público.",
      "Desenhamos calendários editoriais, criamos publicações originais e analisamos métricas para garantir crescimento real da sua comunidade.",
    ],
    image: socialImage,
    features: [
      "2 publicações por semana no Instagram e Facebook",
      "Design profissional de posts e stories",
      "Calendário de conteúdos planeado mensalmente",
      "Gestão de comentários e mensagens diretas",
      "Relatório mensal de métricas e crescimento",
      "Estratégia personalizada de crescimento",
    ],
    benefits: [
      { title: "Presença consistente", description: "Publicações regulares que mantêm a sua marca ativa e relevante." },
      { title: "Identidade forte", description: "Conteúdos alinhados com o tom e visual da sua marca." },
      { title: "Mais engagement", description: "Estratégia focada em criar comunidade e interação real." },
      { title: "Sem preocupações", description: "Tratamos de tudo para que se possa focar no seu negócio." },
    ],
    process: [
      { title: "Onboarding", description: "Conhecemos a sua marca, público e objetivos." },
      { title: "Plano editorial", description: "Criamos um calendário mensal de conteúdos." },
      { title: "Produção", description: "Desenhamos e calendarizamos todas as publicações." },
      { title: "Análise", description: "Avaliamos resultados e refinamos a estratégia." },
    ],
    faq: [
      {
        question: "Em que redes sociais trabalham?",
        answer:
          "Trabalhamos principalmente Instagram e Facebook, mas podemos integrar TikTok, LinkedIn ou outras consoante o seu negócio.",
      },
      {
        question: "Eu posso aprovar as publicações antes?",
        answer:
          "Sim, partilhamos consigo o plano mensal antecipadamente para aprovação e ajustes antes de publicar.",
      },
      {
        question: "E se precisar de mais publicações?",
        answer: "Podemos ajustar o plano às suas necessidades — basta falar connosco para definirmos a frequência ideal.",
      },
    ],
    seoTitle: "Gestão de Redes Sociais | Instagram e Facebook | Agência Vela Algarve",
    seoDescription:
      "Gestão profissional de redes sociais para negócios no Algarve e Portugal. Conteúdo visual de qualidade, calendário editorial e crescimento real da sua comunidade.",
    keywords:
      "gestão de redes sociais, gestao de redes sociais, gestão instagram, gestão facebook, social media algarve, social media tavira, agência redes sociais",
  },
  {
    slug: "branding-e-logotipos",
    title: "Branding e Criação de Logotipos",
    shortTitle: "Branding e Logotipos",
    description:
      "Criação de logo profissional, moderno e minimalista que representa a identidade da sua marca. Serviço completo de branding acessível.",
    longDescription: [
      "A sua marca é a primeira impressão que deixa nos clientes. Criamos identidades visuais únicas, modernas e memoráveis que comunicam os valores do seu negócio.",
      "Do logótipo às cores, tipografia e aplicações, entregamos um pacote completo de branding pronto a usar em todos os suportes.",
    ],
    image: brandingImage,
    features: [
      "Conjunto de mockups básicos incluído",
      "2 rondas de revisões",
      "Ficheiros em múltiplos formatos (SVG, PNG, PDF)",
      "Versões a cores e a preto e branco",
      "Manual básico de utilização da marca",
      "Entrega em 7 dias úteis",
    ],
    benefits: [
      { title: "Identidade única", description: "Um logo desenhado de raiz, alinhado com a alma da sua marca." },
      { title: "Profissionalismo", description: "Transmita confiança e credibilidade aos seus clientes." },
      { title: "Versatilidade", description: "Ficheiros prontos para usar online e em impressão." },
      { title: "Coerência visual", description: "Manual de marca para manter a identidade consistente." },
    ],
    process: [
      { title: "Descoberta", description: "Conhecemos a sua marca, valores e público-alvo." },
      { title: "Conceito", description: "Apresentamos propostas iniciais de logotipo." },
      { title: "Refinamento", description: "Ajustamos detalhes até obter o resultado perfeito." },
      { title: "Entrega", description: "Recebe todos os ficheiros e o manual de marca." },
    ],
    faq: [
      {
        question: "Quanto custa criar um logotipo?",
        answer: "Os nossos pacotes de branding são acessíveis e adaptados a pequenos negócios. Peça orçamento gratuito.",
      },
      {
        question: "Posso pedir alterações ao logo?",
        answer: "Sim, incluímos 2 rondas de revisões para garantir que fica totalmente satisfeito com o resultado.",
      },
      {
        question: "Em que formatos recebo o logotipo?",
        answer:
          "Entregamos em SVG, PNG, PDF e outros formatos necessários para uso digital e impressão profissional.",
      },
    ],
    seoTitle: "Criação de Logotipos e Branding | Design de Marca | Agência Vela Algarve",
    seoDescription:
      "Criação de logotipos profissionais e branding completo para pequenos negócios. Design de marca moderno e acessível em Tavira, Algarve e Portugal.",
    keywords:
      "criação de logo, criacao de logo, criação de logotipo, branding algarve, branding tavira, design de marca, identidade visual, logo profissional",
  },
  {
    slug: "google-ads",
    title: "Criação e Gestão de Campanhas Google Ads",
    shortTitle: "Google Ads",
    description:
      "Campanhas de publicidade Google otimizadas para maximizar o retorno do seu investimento com base em resultados reais.",
    longDescription: [
      "O Google Ads é a forma mais rápida de chegar a clientes que estão prontos a comprar. Criamos e gerimos campanhas pensadas para gerar resultados mensuráveis, com cobrança ao desempenho.",
      "Otimizamos continuamente palavras-chave, anúncios e segmentações para maximizar o retorno de cada euro investido.",
    ],
    image: googleAdsImage,
    features: [
      "Setup inicial de campanha com estudo de palavras-chave",
      "Criação de anúncios persuasivos",
      "Gestão mensal de campanha",
      "Relatórios de desempenho transparentes",
      "Otimização contínua de orçamento",
      "Cobrança ao desempenho",
    ],
    benefits: [
      { title: "Resultados rápidos", description: "Aparecer no topo do Google em poucos dias." },
      { title: "ROI mensurável", description: "Saiba exatamente quanto investe e quanto retorna." },
      { title: "Segmentação precisa", description: "Chegue às pessoas certas no momento certo." },
      { title: "Sem compromisso", description: "Pode ajustar ou pausar campanhas a qualquer momento." },
    ],
    process: [
      { title: "Análise", description: "Estudamos o seu mercado e concorrência." },
      { title: "Setup", description: "Configuramos a campanha e palavras-chave." },
      { title: "Otimização", description: "Ajustamos anúncios e lances continuamente." },
      { title: "Relatórios", description: "Recebe relatórios claros de desempenho." },
    ],
    faq: [
      {
        question: "Qual o orçamento mínimo para Google Ads?",
        answer:
          "Recomendamos um investimento mínimo mensal para ter dados suficientes para otimizar. Falamos consigo para definir o ideal.",
      },
      {
        question: "Em quanto tempo vejo resultados?",
        answer: "Os anúncios começam a aparecer logo após aprovação, normalmente em 24 a 48 horas.",
      },
      {
        question: "Como funciona a cobrança ao desempenho?",
        answer:
          "A nossa fee de gestão está ligada aos resultados — alinhamos os nossos incentivos com o sucesso da campanha.",
      },
    ],
    seoTitle: "Gestão de Google Ads | Campanhas Publicidade Google | Agência Vela",
    seoDescription:
      "Criação e gestão de campanhas Google Ads com cobrança ao desempenho. Aumente as vendas do seu negócio no Algarve e Portugal com publicidade otimizada.",
    keywords:
      "google ads, gestão google ads, campanhas google, publicidade google, google ads algarve, google ads portugal, agencia google ads",
  },
  {
    slug: "agentes-ia",
    title: "Integração de Agentes IA",
    shortTitle: "Agentes IA",
    description:
      "Agentes de inteligência artificial para automatizar a comunicação e processos do seu negócio através de chat, WhatsApp, chamadas e mais.",
    longDescription: [
      "A inteligência artificial deixou de ser futuro — é presente. Implementamos agentes IA que atendem clientes, automatizam processos e libertam o seu tempo para o que realmente importa.",
      "Desde chatbots de website a assistentes de WhatsApp ou chamadas telefónicas com IA, criamos soluções treinadas com os dados do seu negócio.",
    ],
    image: aiImage,
    features: [
      "IA de chat para website",
      "IA de WhatsApp automatizado",
      "IA de automação de processos",
      "IA de chamadas telefónicas",
      "Treino com dados do seu negócio",
      "Integração com sistemas existentes",
    ],
    benefits: [
      { title: "Atendimento 24/7", description: "Os seus clientes recebem resposta imediata, dia e noite." },
      { title: "Mais produtividade", description: "Liberte a sua equipa de tarefas repetitivas." },
      { title: "Personalizado", description: "Cada agente é treinado com a informação do seu negócio." },
      { title: "Escalável", description: "Atende dezenas de conversas em simultâneo sem perder qualidade." },
    ],
    process: [
      { title: "Diagnóstico", description: "Identificamos onde a IA traz mais valor ao seu negócio." },
      { title: "Treino", description: "Treinamos o agente com os dados e tom da sua marca." },
      { title: "Integração", description: "Implementamos no canal escolhido (chat, WhatsApp, etc)." },
      { title: "Acompanhamento", description: "Monitorizamos e refinamos o desempenho da IA." },
    ],
    faq: [
      {
        question: "A IA substitui a minha equipa?",
        answer:
          "Não. A IA complementa a sua equipa, automatizando tarefas repetitivas para que se foquem no que requer toque humano.",
      },
      {
        question: "Quanto custa implementar um agente IA?",
        answer:
          "Depende do tipo de agente e da complexidade. Pedimos sempre um orçamento personalizado e gratuito.",
      },
      {
        question: "A IA conhece o meu negócio?",
        answer:
          "Sim, treinamos cada agente com a informação específica do seu negócio para que responda de forma rigorosa.",
      },
    ],
    seoTitle: "Agentes IA para Negócios | Chatbots e Automação | Agência Vela",
    seoDescription:
      "Integração de agentes de inteligência artificial para chat, WhatsApp e chamadas. Automatize a comunicação e processos do seu negócio com IA personalizada.",
    keywords:
      "agentes IA, inteligência artificial negócios, chatbot website, IA whatsapp, automação IA, agente IA portugal, IA para empresas",
  },
];

export const getServiceBySlug = (slug: string) => servicesData.find((s) => s.slug === slug);
