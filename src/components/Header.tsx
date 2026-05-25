import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import velaLogo from "@/assets/vela-logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    name: "Início",
    path: "/"
  }, {
    name: "Sobre Nós",
    path: "/about"
  }, {
    name: "Serviços",
    path: "/services"
  }, {
    name: "Blog",
    path: "/blog"
  }, {
    name: "Contactos",
    path: "/contact"
  }];
  return <header className="fixed top-4 left-4 right-4 z-50 w-[calc(100%-2rem)] md:left-8 md:right-8 md:w-[calc(100%-4rem)]">
      <nav className="mx-auto max-w-6xl bg-background/40 backdrop-blur-xl border border-border/30 rounded-full px-6 py-3 shadow-elegant font-montserrat">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img alt="Vela Agency" src="/lovable-uploads/894b6f27-88af-476b-a469-db2ace67eb75.png" className="h-20 w-20 transition-transform group-hover:scale-105 object-fill" />
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => <Link key={link.path} to={link.path} className="text-foreground/80 hover:text-primary transition-colors font-medium">
                {link.name}
              </Link>)}
            <Link to="/quote">
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full">
                Pedir Orçamento
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground p-2 hover:bg-accent/50 rounded-full transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Floating Card */}
      {isMenuOpen && <div className="md:hidden mt-2 mx-auto max-w-6xl bg-background/95 backdrop-blur-xl border border-border/30 rounded-3xl p-6 shadow-strong animate-fade-in">
          <div className="space-y-3">
            {navLinks.map(link => <Link key={link.path} to={link.path} className="block text-foreground/80 hover:text-primary transition-colors font-medium py-2 px-4 rounded-full hover:bg-accent/50" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>)}
            <Link to="/quote" onClick={() => setIsMenuOpen(false)}>
              <Button variant="default" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-full mt-2">
                Pedir Orçamento
              </Button>
            </Link>
          </div>
        </div>}
    </header>;
};
export default Header;