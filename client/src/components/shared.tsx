import React from "react";

export function GoldDivider() {
  return (
    <div className="gold-divider my-12">
      <div className="gold-divider-diamond" />
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="pre-headline mb-4">{children}</p>;
}

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <span className="text-gold mt-0.5 flex-shrink-0 text-lg">✦</span>
      <span className="text-ivory-muted leading-relaxed">{children}</span>
    </div>
  );
}

export function RomanCard({
  numeral,
  title,
  description,
}: {
  numeral: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card-premium group">
      <div className="roman-badge mb-4">{numeral}</div>
      <h3
        className="text-ivory font-semibold text-lg mb-2"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {title}
      </h3>
      <p className="text-ivory-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export function BonusCard({
  number,
  title,
  description,
  value,
}: {
  number: string;
  title: string;
  description: string;
  value: string;
}) {
  return (
    <div className="card-premium flex gap-4 items-start">
      <div className="flex-shrink-0">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
          style={{
            background: "rgba(201,168,76,0.15)",
            border: "1px solid rgba(201,168,76,0.4)",
            color: "#C9A84C",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {number}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4
            className="text-ivory font-semibold text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {title}
          </h4>
          <span
            className="text-xs flex-shrink-0 px-2 py-0.5 rounded"
            style={{
              background: "rgba(201,168,76,0.15)",
              color: "#C9A84C",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
            }}
          >
            GRÁTIS
          </span>
        </div>
        <p className="text-ivory-muted text-sm leading-relaxed mb-1">{description}</p>
        <p className="text-xs" style={{ color: "#6B6560" }}>
          Valor: {value}
        </p>
      </div>
    </div>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="card-premium">
      <div className="text-3xl text-gold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
        "
      </div>
      <p className="text-ivory-muted leading-relaxed mb-4 italic">{quote}</p>
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
          style={{ background: "rgba(201,168,76,0.2)", color: "#C9A84C" }}
        >
          {name[0]}
        </div>
        <div>
          <p className="text-ivory font-semibold text-sm">{name}</p>
          <p className="text-xs" style={{ color: "#6B6560" }}>
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PageFooter() {
  return (
    <footer
      className="py-12 text-center"
      style={{ background: "#050505", borderTop: "1px solid rgba(201,168,76,0.15)" }}
    >
      <div className="container">
        <div className="flex justify-center mb-4">
          <svg width="32" height="32" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="#C9A84C" strokeWidth="1.5" />
            <text x="14" y="42" fontFamily="'Playfair Display', Georgia, serif" fontSize="32" fontWeight="700" fill="#C9A84C">R</text>
            <path d="M38 14 L32 26 L36 26 L30 42 L42 24 L37 24 Z" fill="#C9A84C" opacity="0.85" />
          </svg>
        </div>
        <p className="text-sm mb-1" style={{ color: "#C9A84C", fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
          Reset Vital · Dr. Santiago Vecina
        </p>
        <p className="text-sm mb-2" style={{ color: "#6B6560" }}>
          © {new Date().getFullYear()} Dr. Santiago Vecina. Todos os direitos reservados.
        </p>
        <p className="text-xs" style={{ color: "#4A4540" }}>
          As informações contidas neste site têm caráter educacional e não substituem a consulta médica
          individualizada. Resultados podem variar de acordo com o perfil de cada pessoa.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-xs hover:text-gold transition-colors" style={{ color: "#6B6560" }}>
            Termos de Uso
          </a>
          <a href="#" className="text-xs hover:text-gold transition-colors" style={{ color: "#6B6560" }}>
            Política de Privacidade
          </a>
          <a href="#" className="text-xs hover:text-gold transition-colors" style={{ color: "#6B6560" }}>
            Suporte
          </a>
        </div>
      </div>
    </footer>
  );
}
