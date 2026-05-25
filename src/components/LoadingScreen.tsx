import velaLogo from "@/assets/vela-logo.png";

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-12 animate-pulse">
        <img 
          src={velaLogo} 
          alt="Vela Agency" 
          className="h-24 w-auto"
        />
      </div>

      {/* Loading Bar Container */}
      <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden relative">
        {/* Wave Animation */}
        <div className="absolute inset-0 bg-primary animate-wave-fill"></div>
        <div className="absolute inset-0 opacity-50">
          <div className="wave-1"></div>
          <div className="wave-2"></div>
          <div className="wave-3"></div>
        </div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-muted-foreground text-sm animate-pulse">
        A carregar...
      </p>
    </div>
  );
};
