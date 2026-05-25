import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Política de Privacidade | Agência Vela - Marketing Digital Algarve</title>
        <meta name="description" content="Política de privacidade da Agência Vela. Saiba como protegemos os seus dados pessoais. Agência de marketing digital no Algarve e Tavira, Portugal." />
        <link rel="canonical" href="https://vela-digital-navigator.lovable.app/privacy" />
        <meta name="robots" content="noindex, follow" />
        <meta name="keywords" content="agência de marketing, agência de marketing algarve, marketing algarve, agência criativa, telemarketing, marketing, agência de marketing tavira, marketing tavira, empresa que faz sites, empresa de sites, sites baratos, agencia de marketing, agencia de marketing algarve, agencia de marketing tavira, agencia criativa, agencia vela" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-44 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Política de Privacidade</h1>
          
          <div className="space-y-6 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Informações que Coletamos</h2>
              <p>
                A Vela Agency recolhe informações que você nos fornece diretamente, incluindo nome, 
                email, telefone e outras informações de contacto quando utiliza os nossos serviços ou 
                preenche formulários no nosso website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Como Utilizamos as Suas Informações</h2>
              <p>As informações coletadas são utilizadas para:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Prestar os serviços solicitados</li>
                <li>Comunicar sobre os nossos serviços</li>
                <li>Melhorar a experiência do utilizador</li>
                <li>Enviar comunicações de marketing (com o seu consentimento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Proteção de Dados</h2>
              <p>
                Implementamos medidas de segurança adequadas para proteger as suas informações pessoais 
                contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Partilha de Informações</h2>
              <p>
                Não vendemos, trocamos ou transferimos as suas informações pessoais para terceiros sem 
                o seu consentimento, exceto quando necessário para prestar os nossos serviços ou quando 
                exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Cookies</h2>
              <p>
                Utilizamos cookies para melhorar a sua experiência no nosso website. Para mais informações, 
                consulte a nossa Política de Cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Os Seus Direitos</h2>
              <p>Você tem o direito de:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Aceder aos seus dados pessoais</li>
                <li>Retificar informações incorretas</li>
                <li>Solicitar a eliminação dos seus dados</li>
                <li>Opor-se ao processamento dos seus dados</li>
                <li>Retirar o consentimento a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contacto</h2>
              <p>
                Para questões sobre esta política de privacidade ou sobre os seus dados pessoais, 
                contacte-nos através de: contacto@agencia-vela.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Alterações à Política</h2>
              <p>
                Reservamo-nos o direito de atualizar esta política de privacidade. As alterações 
                serão publicadas nesta página com a data de atualização.
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

export default PrivacyPolicy;
