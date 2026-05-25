import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Subtle deep red glow - bottom */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 20% 80%, hsl(0 70% 15% / 0.3) 0%, transparent 45%)",
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Subtle glow - top right */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: "radial-gradient(circle at 80% 20%, hsl(0 0% 8% / 0.5) 0%, transparent 45%)",
          transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`,
          transition: "transform 0.25s ease-out",
        }}
      />

      {/* Center subtle primary pulse */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(0 60% 20% / 0.15) 0%, transparent 50%)",
          transform: `translate(${mousePosition.x * 1}px, ${mousePosition.y * 1}px)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* Vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, hsl(0 0% 0% / 0.5) 100%)",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
