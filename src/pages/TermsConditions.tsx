import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Termos e Condições | Agência Vela - Marketing Digital Algarve</title>
        <meta name="description" content="Termos e condições da Agência Vela. Conheça as condições de prestação dos nossos serviços de marketing digital no Algarve e Tavira, Portugal." />
        <link rel="canonical" href="https://vela-digital-navigator.lovable.app/terms" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 pt-44 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Termos e Condições</h1>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Serviços</h2>
              <p>
                Ao aceitar uma proposta, o cliente está a concordar que contratou todos e apenas os serviços descritos na mesma.
              </p>
              <p className="mt-3">
                Qualquer alteração ou serviço adicional, não referido na proposta inicial, poderá implicar custos extra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Revisões</h2>
              <p>
                Dado o início do projeto e a aceitação da proposta, serão enviados resultados do desenvolvimento dos trabalhos afim de uma revisão e feedback por parte do cliente. Estas revisões não têm número limite, pelo que poderão ser feitas todas as revisões necessárias para que o resultado final seja do agrado do cliente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Prazos</h2>
              <p>
                O serviço de Criação de Website tem um prazo máximo de 7 dias úteis para que a primeira versão seja entregue.
              </p>
              <p className="mt-3">
                O serviço de Impulsão de Perfil Google My Business deve ser iniciado e terminado dentro do intervalo de tempo de desenvolvimento e publicação do website, quando os serviços sejam contratados em conjunto. Caso este serviço seja um serviço isolado, deverá ser completado no prazo máximo de 2 semanas.
              </p>
              <p className="mt-3">
                Outros serviços deverão ter prazos e datas de publicação, acordadas entre a Agência e o cliente.
              </p>
              <p className="mt-3">
                O cumprimento de todo e qualquer prazo depende sempre da entrega atempada de materiais por parte do cliente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Métodos de Pagamento</h2>
              <p>Os pagamentos poderão ser efetuados de duas formas:</p>
              <ul className="list-disc ml-6 mt-3 space-y-3">
                <li>
                  <strong>Link de Pagamento:</strong> É gerado um link de pagamento apoiado pela plataforma STRIPE, onde o cliente poderá pagar por transferência bancária, MBWAY, Revolut Pay, entre outros.
                </li>
                <li>
                  <strong>Transferência Bancária Direta:</strong> É fornecido o IBAN assim como todas as informações necessárias, para onde o cliente deverá enviar o pagamento.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Faturação</h2>
              <p>
                O cliente deverá fornecer os seus dados de faturação (empresariais ou pessoais) para que lhe possa ser passada uma fatura-recibo, referente aos serviços contratados e ao valor pago. Esta fatura é passada por um programa de faturação online, FIZ, certificado pela AT Portuguesa, onde a fatura-recibo será posteriormente enviada em formato digital PDF, para a via de comunicação preferida pelo cliente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Data de Pagamento</h2>
              <ul className="list-disc ml-6 space-y-4">
                <li>
                  <strong>Website:</strong> O serviço de criação de website é pago num sistema de 50%/50%, onde deverão ser pagos 50% do valor total da proposta antes do início do desenvolvimento do mesmo e, 50% após finalização do mesmo, seguido da publicação do website.
                </li>
                <li>
                  <strong>Impulsão de Perfil Google My Business:</strong> Este serviço, quando contratado conjuntamente com o website, usufrui do mesmo tipo de pagamento, 50%/50%. Caso seja contratado isoladamente ou com qualquer outro serviço, deverá ser pago na totalidade, antecipadamente.
                </li>
                <li>
                  <strong>Agentes de IA:</strong> O serviço de Criação e Integração de Agente IA é pago num sistema de 50%/50%, onde deverão ser pagos 50% do valor total acordado, antes do início de criação e treino do mesmo agente. Os 50% finais devem ser pagos, uma vez que o agente IA esteja terminado e pronto a publicar, dando-se a publicação uma vez que pago o valor total.
                </li>
                <li>
                  <strong>Mensalidades (Serviços de Gestão):</strong> O cliente deve proceder ao pagamento do valor da mensalidade acordado na proposta, todos os meses, no mesmo dia da sua contratação.
                </li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                O não pagamento de um serviço, atempadamente, poderá resultar na suspensão imediata do mesmo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Política de Cancelamento e Reembolso</h2>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Cancelamentos</h3>
              <p>
                Apenas serviços de mensalidade estão sujeitos a política de cancelamento. Isto não inclui os serviços: Criação de Website; Impulsão de Perfil Google My Business; Criação de Logotipos e Branding; Criação e Integração de Agentes IA.
              </p>
              <p className="mt-3">
                Qualquer serviço contratado mensalmente é possível ser cancelado a qualquer momento, tendo efeito no ciclo de faturação seguinte.
              </p>
              <p className="mt-3">
                Para efetuar cancelamentos, o cliente deverá contactar a agência pelos canais de contacto adequados e requisitar este cancelamento ou, aceder ao portal do cliente fornecido pela plataforma de pagamento, STRIPE, podendo efetuar o cancelamento manualmente.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">Reembolso</h3>
              <p>
                A Agência Vela limita-se a oferecer reembolsos nos casos legalmente previstos para prestação de serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Direitos de Uso</h2>
              <p>
                Todo e qualquer produto digital que seja gerado a partir da contratação dos nossos serviços é da propriedade do cliente que o contratou, uma vez que pago na sua totalidade, pelo que poderá sempre ficar alojado nas plataformas da Agência ou ser transferido para o cliente, caso necessário. O alojamento destes produtos pode estar sujeito a um pagamento que deverá ser comunicado pela Agência antes da contratação dos serviços por parte do cliente.
              </p>
              <p className="mt-3">
                Apenas produtos que estejam ligados a uma gestão mensal não podem ser transferidos para plataformas de clientes, afim de facilitar o trabalho por parte da agência (Exp: Um website que fique ligado a um serviço de gestão/manutenção mensal, deve ser mantido na plataforma da agência para que esta manutenção possa ser realizada corretamente).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Direito de Partilha</h2>
              <p>
                A Agência Vela reserva-se o direito de utilização dos projetos desenvolvidos para fins de portfólio, divulgação e marketing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitação de Responsabilidade</h2>
              <p>A Agência Vela não se responsabiliza por:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Resultados comerciais e performance</li>
                <li>Perdas indiretas ou lucros cessantes</li>
                <li>Problemas decorrentes de plataformas externas</li>
                <li>Problemas legais oriundos de conteúdos fornecidos pelo cliente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Responsabilidade do Cliente</h2>
              <p>
                O cumprimento de todos os prazos e o desenvolvimento correto de todos e quaisquer projetos depende do empenho e feedback do cliente, pelo que este deve comprometer-se a:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Fornecer conteúdos, imagens e quaisquer informações necessárias</li>
                <li>Garantir a legalidade dos conteúdos fornecidos à Agência</li>
                <li>Respostas e feedback atempado afim de cumprimento de prazos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Entrega e Conclusão</h2>
              <p>
                Consideram-se concluídos os serviços: Criação de Website e Criação e Integração de Agentes IA, uma vez que:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Exista aprovação explícita do cliente</li>
                <li>O cliente não apresente qualquer feedback no espaço de 30 dias</li>
              </ul>
            </section>

            <p className="text-sm mt-8">Última atualização: 27/04/2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
