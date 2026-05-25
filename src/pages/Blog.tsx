import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogWebsite from "@/assets/blog-website.png";
import blog15segundos from "@/assets/blog-15segundos.png";
import blogGoogleRanking from "@/assets/blog-google-ranking.png";
import blogFotografia from "@/assets/blog-fotografia.png";

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Razões Para Ter um Website Profissional em 2026",
      excerpt: "Descubra porque um website profissional é essencial para o sucesso do seu negócio no mundo digital atual.",
      date: "10 Fevereiro 2026",
      category: "Marketing Digital",
      slug: "razoes-website-profissional",
    },
    {
      title: "Como o Google Meu Negócio Pode Aumentar as Suas Vendas",
      excerpt: "Aprenda a otimizar o seu perfil Google Meu Negócio para atrair mais clientes locais e aumentar a visibilidade.",
      date: "15 Janeiro 2026",
      category: "SEO Local",
      slug: "google-meu-negocio",
    },
    {
      title: "Fotografia Profissional Vale a Pena?",
      excerpt: "Descubra porque investir em fotografia profissional pode fazer toda a diferença na imagem do seu negócio.",
      date: "5 Março 2026",
      category: "Fotografia",
      slug: "fotografia-profissional-vale-a-pena",
      externalLink: "https://www.instagram.com/p/DVROabZjBwu/",
      image: blogFotografia,
      imagePosition: "object-top",
    },
    {
      title: "5 Dicas para Subir no Ranking Google My Business",
      excerpt: "Aprenda 5 estratégias práticas para melhorar o posicionamento do seu negócio no Google My Business e atrair mais clientes.",
      date: "10 Dezembro 2025",
      category: "SEO",
      slug: "google-my-business-ranking",
      externalLink: "https://www.instagram.com/p/DSFydvVjMfH/?img_index=1",
      image: blogGoogleRanking,
      imagePosition: "object-bottom",
    },
    {
      title: "3 Razões Pelas Quais o Teu Negócio Deve Ter um Site",
      excerpt: "Descubra porque ter um site profissional é fundamental para o crescimento e credibilidade do teu negócio.",
      date: "10 Dezembro 2025",
      category: "Web Design",
      slug: "razoes-negocio-ter-site",
      externalLink: "https://www.instagram.com/p/DSF2i0-jgoL/?img_index=1",
      image: blogWebsite,
      imagePosition: "object-top",
    },
    {
      title: "O Que Fazemos em 15 Segundos",
      excerpt: "Descubra como a Agência Vela pode transformar o seu negócio em apenas 15 segundos.",
      date: "4 Dezembro 2025",
      category: "Marketing Digital",
      slug: "o-que-fazemos-15-segundos",
      externalLink: "https://www.instagram.com/p/DR2qxLHDh2k/?img_index=1",
      image: blog15segundos,
      imagePosition: "object-top",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog de Marketing Digital | Dicas SEO e Web Design | Agência Vela</title>
        <meta name="description" content="Blog da Agência Vela com dicas de marketing digital, SEO, web design e redes sociais para pequenos negócios. Estratégias de marketing Tavira e Algarve para crescimento do seu negócio." />
        <link rel="canonical" href="https://vela-digital-navigator.lovable.app/blog" />
        <meta property="og:title" content="Blog de Marketing Digital | Agência Vela" />
        <meta property="og:description" content="Dicas de marketing digital, SEO e web design para pequenos negócios." />
        <meta property="og:url" content="https://vela-digital-navigator.lovable.app/blog" />
        <meta name="keywords" content="agência de marketing, agência de marketing algarve, marketing algarve, agência criativa, telemarketing, marketing, agência de marketing tavira, marketing tavira, empresa que faz sites, empresa de sites, sites baratos, blog marketing digital, dicas SEO, web design, redes sociais, crescimento de negócio, impulsão de negócio, agencia de marketing, agencia de marketing algarve, agencia de marketing tavira, agencia criativa, agencia vela, crescimento de negocio, impulsao de negocio" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-44 pb-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Blog <span className="text-primary">Vela</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Dicas, estratégias e insights sobre marketing digital para pequenos negócios
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-strong transition-all duration-300 group flex flex-col"
              >
                {post.image ? (
                  <img src={post.image} alt={post.title} className={`h-48 w-full object-cover ${post.imagePosition || ''}`} />
                ) : (
                  <div className="h-48 bg-gradient-hero" />
                )}
                
                <div className="p-6 space-y-4 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-2">
                  {post.externalLink ? (
                    <a 
                      href={post.externalLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      Ler mais
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Button 
                      variant="ghost" 
                      className="group-hover:text-primary p-0 h-auto font-semibold"
                    >
                      Ler mais
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Carregar Mais Artigos
            </Button>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Blog;
