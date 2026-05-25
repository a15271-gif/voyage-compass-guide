import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import velaLogo from "@/assets/vela-logo.png";
const Footer = () => {
  return <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img alt="Vela Agency" src="/lovable-uploads/975ed2ad-8a3a-46d6-94e0-3f50842ccc3a.png" className="h-52 w-52 object-fill" />
              
            </div>
            
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Contactos
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Pedir Orçamento
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Criação de Websites</li>
              <li>SEO & Google Meu Negócio</li>
              <li>Gestão de Redes Sociais</li>
              <li>Branding e Logotipos</li>
              <li>Campanhas Google Ads</li>
              <li>Integração de Agente IA</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Mail size={16} className="text-primary" />
                <a href="mailto:contacto@agencia-vela.com" className="hover:text-primary transition-colors">
                  contacto@agencia-vela.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Phone size={16} className="text-primary" />
                <a href="tel:+351968334043" className="hover:text-primary transition-colors">
                  968 334 043
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <MapPin size={16} className="text-primary" />
                <span>Algarve, Portugal</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <MessageCircle size={16} className="text-primary" />
                <a href="https://wa.me/351968334043" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Instagram size={16} className="text-primary" />
                <a href="https://www.instagram.com/agencia_vela/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @agencia_vela
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Vela Agency. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <span className="text-secondary-foreground/40">|</span>
              <Link to="/cookies" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Política de Cookies
              </Link>
              <span className="text-secondary-foreground/40">|</span>
              <Link to="/terms" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Termos e Condições
              </Link>
              <span className="text-secondary-foreground/40">|</span>
              <a href="https://livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Livro de Reclamações
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;