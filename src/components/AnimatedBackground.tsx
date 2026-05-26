import { useEffect, useState, lazy, Suspense } from "react";

const Sail3D = lazy(() => import("./Sail3D"));

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Centered 3D sail */}
      <div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 opacity-70">
        {mounted && (
          <Suspense fallback={null}>
            <Sail3D />
          </Suspense>
        )}
      </div>

      {/* Depth vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.6) 60%, #000 100%)",
        }}
      />

      {/* Subtle noise */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
