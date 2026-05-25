import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Loader2, MessageCircle, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mqarjnap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Responderemos em menos de 24 horas."
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        throw new Error("Erro ao enviar");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Por favor tente novamente ou contacte-nos diretamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contacte a Agência Vela | Marketing Digital Tavira | Algarve Portugal</title>
        <meta name="description" content="Contacte a Agência Vela para marketing digital, web design e SEO no Algarve. Agência de marketing em Tavira. Resposta garantida em 24h. Orçamentos gratuitos sem compromisso." />
        <link rel="canonical" href="https://vela-digital-navigator.lovable.app/contact" />
        <meta property="og:title" content="Contacte a Agência Vela | Marketing Digital Tavira" />
        <meta property="og:description" content="Contacte-nos para marketing digital e web design. Resposta em 24h." />
        <meta property="og:url" content="https://vela-digital-navigator.lovable.app/contact" />
        <meta name="keywords" content="agência de marketing, agência de marketing algarve, marketing algarve, agência criativa, telemarketing, marketing, agência de marketing tavira, marketing tavira, empresa que faz sites, empresa de sites, sites baratos, contacto agência vela, orçamento marketing, contacto web design, agencia de marketing, agencia de marketing algarve, agencia de marketing tavira, agencia criativa, agencia vela, contacto agencia vela, orcamento marketing" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-44 pb-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contacte a Nossa <span className="text-primary">Agência de Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Especialistas em web design e marketing digital em Tavira, Algarve. Respondemos em menos de 24 horas!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <h2 className="text-3xl font-bold text-foreground mb-6">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome *
                  </label>
                  <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full" placeholder="O seu nome" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full" placeholder="seuemail@exemplo.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full" placeholder="+351 912 345 678" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} className="w-full min-h-[150px]" placeholder="Conte-nos sobre o seu projeto..." />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      A enviar...
                    </>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Informações de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">contacto@agencia-vela.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Telefone</h3>
                      <p className="text-muted-foreground">968 334 043</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Localização</h3>
                      <p className="text-muted-foreground">Algarve, Portugal</p>
                      <p className="text-muted-foreground">Atendemos todo o país</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Horário</h3>
                      <p className="text-muted-foreground py-0">Domingo a Sexta: 9h - 20h </p>
                      <p className="text-muted-foreground">Sábado: 9h-12h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
                      <a href="https://wa.me/351968334043" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        968 334 043
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Instagram className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Instagram</h3>
                      <a href="https://www.instagram.com/agencia_vela/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        @agencia_vela
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-bold text-foreground mb-2">Resposta Rápida Garantida</h3>
                <p className="text-muted-foreground">
                  Comprometemo-nos a responder a todas as mensagens em menos de 24 horas úteis. 
                  A sua mensagem é importante para nós!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;