// @ts-nocheck
import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const location = useLocation();
  const [bottomOffset, setBottomOffset] = useState(24);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const buttonHeight = 60;
      const margin = 24;

      if (footerRect.top < viewportHeight) {
        const overlap = viewportHeight - footerRect.top + margin;
        setBottomOffset(overlap);
      } else {
        setBottomOffset(margin);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  if (location.pathname === "/quote") return null;

  return (
    <div
      className="fixed right-6 z-50 transition-all duration-200"
      style={{ bottom: `${bottomOffset}px` }}
    >
      <Link to="/quote">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full shadow-strong px-6 py-6 text-base font-semibold"
        >
          Pedir Orçamento
          <ArrowRight className="ml-2" size={18} />
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCTA;
