import { useState } from "react";
import { useLocation } from "wouter";
import { GoldDivider, SectionLabel, CheckItem, PageFooter } from "@/components/shared";
import { BrandHeader, ResetVitalLogo } from "@/components/BrandHeader";

const WEBHOOK_URL =
  "https://id-preview--49b3064f-d9ff-44af-b75b-aef783c91466.lovable.app/api/public/contatos/ck_a26e15a4_a26e15a40bdef0c3c13acf55ff8430cb92b8b50fa21bd26a012d18ce6d58c89a";

const PROFISSOES = [
  "Limpeza residencial e comercial",
  "Construção civil",
  "Pintura",
  "Flooring / pisos",
  "Roofing / telhados",
  "Landscaping / jardinagem",
  "Moving / mudanças",
  "Delivery e transporte",
  "Restaurantes e alimentação",
  "Salões de beleza e estética",
  "Real Estate",
  "Property management",
  "Airbnb / vacation rental",
  "Serviços automotivos",
  "Contabilidade e tax services",
  "Seguros",
  "Consultoria migratória e documental",
  "Marketing digital",
  "Eventos e entretenimento",
  "E-commerce",
];

export default function CapturePage() {
  const [, navigate] = useLocation();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    regiao: "",
    profissao: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nome || !form.email || !form.telefone || !form.regiao || !form.profissao) return;
    setLoading(true);

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          telefone: form.telefone,
          regiao: form.regiao,
          profissao: form.profissao,
          tags: ["reset 21 dias"],
        }),
      });
    } catch (err) {
      // Não bloqueia o usuário caso o webhook falhe — o lead segue para a página de obrigado.
      console.error("Falha ao enviar lead para o webhook:", err);
    } finally {
      navigate("/obrigado-ebook");
    }
  }

  return (
    <div className="min-h-screen section-dark">
      <BrandHeader showNav />

      {/* HERO — Editorial asymmetric layout */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{ background: "#0A0A0A" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url('/images/hero_captura.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
        {/* Gradient overlay — stronger on left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.92) 45%, rgba(10,10,10,0.5) 75%, rgba(10,10,10,0.2) 100%)",
          }}
        />
        {/* Vertical gold accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
          style={{
            background: "linear-gradient(180deg, transparent 0%, #C9A84C 30%, #C9A84C 70%, transparent 100%)",
            left: "calc(50% + 2rem)",
            opacity: 0.15,
          }}
        />

        <div className="container relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT — Copy */}
            <div>
              {/* Protocol label */}
              <div className="fade-up flex items-center gap-3 mb-8">
                <div
                  className="h-px flex-1 max-w-12"
                  style={{ background: "#C9A84C" }}
                />
                <span className="pre-headline">Protocolo Clínico Exclusivo</span>
              </div>

              {/* Oversized headline */}
              <h1
                className="fade-up fade-up-delay-1 text-ivory mb-6 leading-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                }}
              >
                Os{" "}
                <em
                  className="not-italic"
                  style={{
                    color: "#C9A84C",
                    fontStyle: "italic",
                  }}
                >
                  7 Erros
                </em>
                <br />
                que Destroem
                <br />
                <span style={{ color: "#C9A84C" }}>Sua Vitalidade</span>
              </h1>

              {/* Sub-headline */}
              <p
                className="fade-up fade-up-delay-2 mb-8 leading-relaxed"
                style={{ fontSize: "1.1rem", color: "#D4CFC7", maxWidth: "480px" }}
              >
                O manual clínico que revela por que você acorda exausto, depende de
                estimulantes e opera abaixo do seu potencial biológico — e o protocolo
                exato para reverter isso.
              </p>

              {/* Trust signals */}
              <div className="fade-up fade-up-delay-3 flex flex-wrap gap-4 mb-8">
                {["Acesso Imediato", "100% Gratuito", "Baseado em Evidências"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <span className="text-gold text-xs">✦</span>
                    <span
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "#6B6560", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {t}
                    </span>
                  </div>
                ))}
              </div>

              {/* Medical authority badge */}
              <div
                className="fade-up fade-up-delay-4 hidden lg:flex items-center gap-4 mt-12 p-4 rounded"
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  maxWidth: "400px",
                }}
              >
                <ResetVitalLogo size={44} />
                <div>
                  <p
                    className="text-ivory text-sm font-semibold"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Dr. Santiago Vecina
                  </p>
                  <p className="text-xs" style={{ color: "#6B6560" }}>
                    Médico Nutrólogo · Bioquímica & Metabolismo
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="fade-up fade-up-delay-2">
              <div
                className="card-premium p-8 lg:p-10"
                style={{
                  borderColor: "rgba(201,168,76,0.4)",
                  background: "linear-gradient(135deg, #141414 0%, #1A1A1A 100%)",
                }}
              >
                {/* Form header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-1 h-10 rounded-full"
                    style={{ background: "linear-gradient(180deg, #C9A84C, #A07830)" }}
                  />
                  <div>
                    <p className="pre-headline">Acesso Gratuito Imediato</p>
                    <p className="text-ivory font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Receba o Manual Clínico
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    className="input-premium"
                    type="text"
                    placeholder="Seu nome completo"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    required
                  />
                  <input
                    className="input-premium"
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                  <input
                    className="input-premium"
                    type="tel"
                    placeholder="WhatsApp / telefone (com DDD)"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    required
                  />
                  <input
                    className="input-premium"
                    type="text"
                    placeholder="Sua região (ex: São Paulo - SP)"
                    value={form.regiao}
                    onChange={(e) => setForm({ ...form, regiao: e.target.value })}
                    required
                  />
                  <select
                    className="input-premium"
                    value={form.profissao}
                    onChange={(e) => setForm({ ...form, profissao: e.target.value })}
                    required
                    style={{
                      color: form.profissao ? "#F5F0E8" : "#6B6560",
                      appearance: "none",
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23C9A84C' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1.1rem center",
                      cursor: "pointer",
                    }}
                  >
                    <option value="" disabled style={{ color: "#6B6560" }}>
                      Selecione sua área de atuação
                    </option>
                    {PROFISSOES.map((p) => (
                      <option key={p} value={p} style={{ color: "#141414" }}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold btn-gold-shimmer w-full py-4"
                    style={{ fontSize: "0.9rem", letterSpacing: "0.08em" }}
                  >
                    {loading ? "Enviando..." : "✦ Quero o Manual Clínico Gratuito"}
                  </button>
                </form>

                <div
                  className="mt-5 pt-5 flex items-center gap-3"
                  style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
                >
                  <span className="text-gold text-sm">🔒</span>
                  <p className="text-xs" style={{ color: "#6B6560" }}>
                    Seus dados são protegidos e nunca serão compartilhados.
                  </p>
                </div>

                {/* Bonus teaser */}
                <div
                  className="mt-4 p-4 rounded text-center"
                  style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}
                >
                  <p className="text-xs text-gold font-semibold uppercase tracking-widest mb-1">
                    Bônus de Inscrição
                  </p>
                  <p className="text-xs" style={{ color: "#D4CFC7" }}>
                    Vaga garantida na Masterclass Gratuita
                    <br />
                    <em>"O Código da Vitalidade"</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROTOCOL NUMBERS — Clinical data strip */}
      <section
        className="py-10"
        style={{
          background: "#141414",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "21", label: "Dias de Protocolo" },
              { number: "7", label: "Erros Revelados" },
              { number: "4", label: "Bônus Exclusivos" },
              { number: "100%", label: "Baseado em Evidências" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-gold font-bold mb-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2.5rem",
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#6B6560", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI DESCOBRIR */}
      <section className="section-alt py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Left — oversized section title */}
              <div className="lg:col-span-2">
                <SectionLabel>Conteúdo Clínico</SectionLabel>
                <h2
                  className="text-ivory leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                  }}
                >
                  O que você vai
                  <br />
                  <span className="text-gold italic">descobrir</span>
                  <br />
                  neste manual
                </h2>
                <div
                  className="mt-6 w-12 h-px"
                  style={{ background: "#C9A84C" }}
                />
              </div>
              {/* Right — checklist */}
              <div className="lg:col-span-3 space-y-1">
                <CheckItem>
                  <strong className="text-ivory">A Mentira do Cansaço Normal:</strong> Por que
                  aceitar a fadiga como "parte da idade" é o maior erro que um líder pode cometer.
                </CheckItem>
                <CheckItem>
                  <strong className="text-ivory">O Paradoxo da Cafeína:</strong> Como o café que
                  você toma para "acordar" está destruindo suas glândulas adrenais.
                </CheckItem>
                <CheckItem>
                  <strong className="text-ivory">O Assassino Silencioso da Testosterona:</strong>{" "}
                  O hábito noturno que sabota sua produção hormonal e destrói sua cognição.
                </CheckItem>
                <CheckItem>
                  <strong className="text-ivory">A Armadilha dos Exames "Normais":</strong> A
                  diferença entre média populacional e otimização biológica real.
                </CheckItem>
                <CheckItem>
                  <strong className="text-ivory">O Erro do Overtraining:</strong> Por que treinar
                  demais gera cortisol crônico e impede a perda de gordura.
                </CheckItem>
                <CheckItem>
                  <strong className="text-ivory">A Desidratação Celular Oculta:</strong> Como
                  beber água sem eletrólitos não hidrata a célula nem conduz energia neural.
                </CheckItem>
                <CheckItem>
                  <strong className="text-ivory">O Maior Dreno de Energia Mental:</strong> O erro
                  existencial que nenhum suplemento resolve.
                </CheckItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* BÔNUS MASTERCLASS */}
      <section className="section-dark py-16">
        <div className="container">
          <div
            className="max-w-3xl mx-auto card-premium text-center py-12"
            style={{
              borderColor: "rgba(201,168,76,0.4)",
              background: "linear-gradient(135deg, #141414 0%, #1A1A1A 100%)",
            }}
          >
            <div className="flex justify-center mb-6">
              <ResetVitalLogo size={52} />
            </div>
            <span className="pre-headline block mb-3">Bônus Exclusivo de Inscrição</span>
            <h3
              className="text-ivory mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
              }}
            >
              Acesso VIP à Masterclass Gratuita
            </h3>
            <p
              className="text-gold font-semibold mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem" }}
            >
              "O Código da Vitalidade: Como Resetar Sua Biologia em 21 Dias"
            </p>
            <p
              className="text-ivory-muted leading-relaxed mb-8 mx-auto"
              style={{ maxWidth: "520px" }}
            >
              Ao baixar o e-book hoje, você garante automaticamente sua vaga na Masterclass
              inédita onde o Dr. Santiago Vecina vai transformar a teoria em protocolo de ação
              imediata para energia real, perda de peso e alta performance.
            </p>
            <button
              onClick={() => {
                const form = document.querySelector("form");
                form?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-gold btn-gold-shimmer py-4 px-10"
            >
              ✦ Garantir Meu Acesso Gratuito
            </button>
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="section-alt py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className="rounded-lg overflow-hidden relative"
                style={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  aspectRatio: "3/4",
                  maxHeight: "500px",
                }}
              >
                <img
                  src="https://assets.cdn.filesafe.space/dkM0aNpySiIFf3uusFTa/media/69c192d4ad14000bb821045e.jpg"
                  alt="Dr. Santiago Vecina"
                  className="w-full h-full object-cover"
                />
                {/* Gold overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{
                    background: "linear-gradient(0deg, rgba(10,10,10,0.8) 0%, transparent 100%)",
                  }}
                />
              </div>
              <div>
                <SectionLabel>Sobre o Autor</SectionLabel>
                <h2
                  className="text-ivory mb-1 leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    fontWeight: 700,
                  }}
                >
                  Dr. Santiago
                </h2>
                <h2
                  className="text-gold mb-2 leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    fontWeight: 700,
                    fontStyle: "italic",
                  }}
                >
                  Vecina
                </h2>
                <p
                  className="text-xs uppercase tracking-widest mb-6"
                  style={{ color: "#6B6560", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Médico · Empresário · Mentor
                </p>
                <p className="text-ivory-muted leading-relaxed mb-4">
                  Médico nutrólogo com pós-graduação em Bioquímica, Metabolismo e Fisiologia
                  Hormonal. Empresário e mentor de líderes de alta performance, criador do{" "}
                  <strong className="text-gold">Método Invictus</strong>.
                </p>
                <p className="text-ivory-muted leading-relaxed mb-6">
                  Diariamente, atende CEOs e executivos que chegam exaustos e dependentes de
                  estimulantes. Sua missão: transformar a biologia de líderes para que construam
                  empresas maiores, famílias mais sólidas e um legado duradouro.
                </p>
                <blockquote
                  className="pl-4 italic text-ivory-muted text-sm"
                  style={{ borderLeft: "2px solid #C9A84C" }}
                >
                  "A energia não é algo que você tem ou não tem. É algo que você produz nas suas
                  mitocôndrias e protege através dos seus hábitos."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
