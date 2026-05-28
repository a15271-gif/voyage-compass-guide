import { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import velaLogo from "@/assets/vela-logo-header.png";


const navLinks = [
  { name: "Início", path: "/" },
  { name: "Sobre", path: "/about" },
  { name: "Serviços", path: "/services" },
  { name: "Contactos", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Track viewport
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // Desktop scroll behavior
  useEffect(() => {
    if (isMobile) return;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 120) {
        setCollapsed(false);
      } else if (y > lastY) {
        setCollapsed(true);
      } else if (y < lastY) {
        setCollapsed(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  // Mobile: always collapsed
  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    }
  }, [isMobile]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);


  const listRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState<{ x: number; opacity: number }>({
    x: 0,
    opacity: 0,
  });

  const moveTo = (idx: number) => {
    const el = linkRefs.current[idx];
    const parent = listRef.current;
    if (!el || !parent) return;
    const elRect = el.getBoundingClientRect();
    const pRect = parent.getBoundingClientRect();
    setIndicator({
      x: elRect.left - pRect.left + elRect.width / 2 - 4,
      opacity: 1,
    });
  };

  // Snap to active link on route change
  useEffect(() => {
    const idx = navLinks.findIndex((l) => l.path === pathname);
    if (idx >= 0) moveTo(idx);
    else setIndicator((s) => ({ ...s, opacity: 0 }));
  }, [pathname]);

  const handlePillClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      setIsMenuOpen((v) => !v);
    }
  };


  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* Desktop nav */}
      <div className="relative hidden md:block">
        <nav
          className={`relative bg-background/50 backdrop-blur-2xl border border-white/10 rounded-full pl-2 pr-2 py-2 shadow-strong font-montserrat flex items-center gap-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
            collapsed
              ? "opacity-0 scale-90 pointer-events-none blur-sm"
              : "opacity-100 scale-100"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="relative -ml-1 flex items-center justify-center h-12 px-3 shrink-0 transition-transform hover:scale-105"
            aria-label="Início"
          >
            <img
              src={velaLogo}
              alt="Vela Agency"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop links with animated dot indicator */}
          <div
            ref={listRef}
            className="flex items-center relative px-3"
            onMouseLeave={() => {
              const idx = navLinks.findIndex((l) => l.path === pathname);
              if (idx >= 0) moveTo(idx);
              else setIndicator((s) => ({ ...s, opacity: 0 }));
            }}
          >
            {navLinks.slice(0, 4).map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                onMouseEnter={() => moveTo(i)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? "text-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Yellow indicator dot */}
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-0.5 left-0 h-2 w-2 rounded-full bg-primary transition-all duration-300 ease-out"
              style={{
                transform: `translateX(${indicator.x}px)`,
                opacity: indicator.opacity,
              }}
            />
          </div>

          {/* CTA inset pill */}
          <Link to="/quote">
            <Button
              size="sm"
              className="rounded-full bg-secondary hover:bg-secondary-hover text-foreground border border-white/10 shadow-none hover:-translate-y-0 h-10 px-5"
            >
              Orçamento
            </Button>
          </Link>
        </nav>

        {/* Desktop collapsed pill */}
        <Link
          to="/contact"
          onClick={handlePillClick}
          className={`absolute inset-0 m-auto flex items-center gap-2 h-12 px-5 rounded-full bg-background/60 backdrop-blur-2xl border border-white/10 shadow-strong font-montserrat text-sm font-medium text-foreground whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-background/80 hover:-translate-y-0.5 w-fit ${
            collapsed
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90 pointer-events-none blur-sm"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Vamos trabalhar juntos
          <ArrowRight size={14} className="opacity-70" />
        </Link>
      </div>

      {/* Mobile compact pill → dropdown */}
      <div
        className={`md:hidden relative w-[280px] bg-background/70 backdrop-blur-2xl border border-white/10 shadow-strong overflow-hidden transition-[height,border-radius,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen
            ? "h-[292px] rounded-[1.6rem]"
            : "h-12 rounded-full"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="absolute left-3 top-3 z-10 flex items-center"
          aria-label="Início"
        >
          <img src={velaLogo} alt="Vela Agency" className="h-8 w-auto object-contain" />
        </Link>

        {/* Toggle button */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="absolute right-3 top-2 z-10 flex h-8 items-center justify-end gap-2 rounded-full font-montserrat text-sm font-medium text-foreground whitespace-nowrap transition-colors duration-300 hover:bg-white/10"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`overflow-hidden transition-[width,opacity,transform] duration-300 ${
              isMenuOpen ? "w-0 opacity-0 -translate-x-1" : "w-[162px] opacity-100 translate-x-0"
            }`}
          >
            Vamos trabalhar juntos
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-500" style={{ transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
            {isMenuOpen ? <X size={18} /> : <Menu size={16} />}
          </span>
        </button>

        {/* Expanded menu content */}
        <div
          className={`absolute inset-x-0 top-12 bottom-0 flex flex-col px-5 pb-5 transition-[opacity,transform] duration-300 ${
            isMenuOpen ? "opacity-100 translate-y-0 delay-150 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex-1 flex flex-col items-center justify-center gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                style={{ transitionDelay: isMenuOpen ? `${250 + i * 50}ms` : "0ms" }}
                className={`block w-full rounded-full px-6 py-2 text-center font-medium text-foreground/80 transition-all duration-500 ease-out hover:bg-accent/50 hover:text-foreground ${
                  isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/quote"
            onClick={() => setIsMenuOpen(false)}
            style={{ transitionDelay: isMenuOpen ? `${250 + navLinks.length * 50}ms` : "0ms" }}
            className={`block transition-all duration-500 ease-out ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
            }`}
          >
            <Button className="w-full rounded-full">Pedir Orçamento</Button>
          </Link>
        </div>
      </div>


    </header>
  );
};

export default Header;
