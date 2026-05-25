import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Política de Cookies | Agência Vela - Marketing Digital Algarve</title>
        <meta name="description" content="Política de cookies da Agência Vela. Informações sobre como utilizamos cookies no nosso website. Agência de marketing digital Algarve e Tavira." />
        <link rel="canonical" href="https://vela-digital-navigator.lovable.app/cookies" />
        <meta name="robots" content="noindex, follow" />
        <meta name="keywords" content="agência de marketing, agência de marketing algarve, marketing algarve, agência criativa, telemarketing, marketing, agência de marketing tavira, marketing tavira, empresa que faz sites, empresa de sites, sites baratos, agencia de marketing, agencia de marketing algarve, agencia de marketing tavira, agencia criativa, agencia vela" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-44 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Política de Cookies</h1>
          
          <div className="space-y-6 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">O que são Cookies?</h2>
              <p>
                Cookies são pequenos ficheiros de texto que são colocados no seu dispositivo quando 
                visita um website. São amplamente utilizados para fazer os websites funcionar de forma 
                mais eficiente e para fornecer informações aos proprietários do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Como Utilizamos Cookies</h2>
              <p>A Vela Agency utiliza cookies para:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Garantir o funcionamento adequado do website</li>
                <li>Melhorar a experiência do utilizador</li>
                <li>Analisar como os visitantes utilizam o nosso website</li>
                <li>Personalizar conteúdo e anúncios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Tipos de Cookies que Utilizamos</h2>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Cookies Essenciais</h3>
                  <p>
                    Estes cookies são necessários para o funcionamento do website e não podem ser 
                    desativados nos nossos sistemas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">Cookies de Desempenho</h3>
                  <p>
                    Estes cookies permitem-nos contar visitas e fontes de tráfego para que possamos 
                    medir e melhorar o desempenho do nosso site.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">Cookies de Funcionalidade</h3>
                  <p>
                    Estes cookies permitem que o website forneça funcionalidade e personalização 
                    melhoradas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">Cookies de Marketing</h3>
                  <p>
                    Estes cookies podem ser definidos através do nosso site pelos nossos parceiros 
                    de publicidade para construir um perfil dos seus interesses.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Gestão de Cookies</h2>
              <p>
                Pode controlar e/ou eliminar cookies como desejar. Pode eliminar todos os cookies 
                que já estão no seu dispositivo e pode configurar a maioria dos navegadores para 
                impedir que sejam colocados.
              </p>
              <p className="mt-4">
                No entanto, se o fizer, poderá ter de ajustar manualmente algumas preferências sempre 
                que visitar um site e alguns serviços e funcionalidades podem não funcionar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies de Terceiros</h2>
              <p>
                Em alguns casos, utilizamos cookies fornecidos por terceiros de confiança. Esta 
                secção detalha quais cookies de terceiros poderá encontrar através deste site:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Google Analytics para análise de tráfego</li>
                <li>Redes sociais para partilha de conteúdo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Mais Informações</h2>
              <p>
                Se tiver alguma dúvida sobre a nossa política de cookies, pode contactar-nos através 
                de: contacto@agencia-vela.com
              </p>
              <p className="mt-4 text-sm">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
