const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Centered 3D sail video */}
      <video
        className="absolute left-1/2 top-1/2 h-[65vh] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain opacity-40 mix-blend-screen"
        src="/videos/sail.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

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
