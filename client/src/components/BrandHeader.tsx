import { useLocation } from "wouter";

export function ResetVitalLogo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="30" cy="30" r="28" stroke="#C9A84C" strokeWidth="1.5" />
      {/* Stylized R with ascending lightning bolt */}
      <text
        x="14"
        y="42"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="32"
        fontWeight="700"
        fill="#C9A84C"
      >
        R
      </text>
      {/* Lightning bolt ascending from R */}
      <path
        d="M38 14 L32 26 L36 26 L30 42 L42 24 L37 24 Z"
        fill="#C9A84C"
        opacity="0.85"
      />
    </svg>
  );
}

export function BrandHeader({ showNav = false }: { showNav?: boolean }) {
  const [, navigate] = useLocation();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div className="container py-4 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 group"
          style={{ background: "none", border: "none" }}
        >
          <ResetVitalLogo size={38} />
          <div className="text-left">
            <p
              className="text-gold font-bold leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
              }}
            >
              Reset Vital
            </p>
            <p
              className="text-xs leading-none mt-0.5"
              style={{
                color: "#6B6560",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Dr. Santiago Vecina
            </p>
          </div>
        </button>

        {showNav && (
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => navigate("/vendas")}
              className="btn-gold-outline py-2 px-4 text-xs"
            >
              Ver o Desafio
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export function BrandWatermark() {
  return (
    <div
      className="flex items-center justify-center gap-2 opacity-20"
      style={{ pointerEvents: "none" }}
    >
      <ResetVitalLogo size={20} />
      <span
        className="text-gold text-xs tracking-widest uppercase"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Reset Vital
      </span>
    </div>
  );
}
