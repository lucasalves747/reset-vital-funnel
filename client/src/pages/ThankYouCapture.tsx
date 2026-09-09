import { useLocation } from "wouter";
import { PageFooter, SectionLabel } from "@/components/shared";
import { BrandHeader } from "@/components/BrandHeader";

const WELCOME_VIDEO_URL =
  "https://assets.cdn.filesafe.space/PMW6fmu3oCfXFYueuN2D/media/6aa14cedfb8abdad105134f7.mov";

const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/KBaQ1xqkOKtAy307G7I9KN?mode=gi_t";

export default function ThankYouCapture() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen section-dark">
      <BrandHeader />
      {/* HERO */}
      <section
        className="py-24 text-center pt-36"
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #141414 100%)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Check icon */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
              style={{
                background: "rgba(201,168,76,0.15)",
                border: "2px solid #C9A84C",
              }}
            >
              <span className="text-gold text-3xl">✓</span>
            </div>

            <SectionLabel>Etapa 1 Concluída</SectionLabel>
            <h1
              className="text-ivory mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
              }}
            >
              Quase lá!{" "}
              <span className="text-gold">Seu manual clínico</span>{" "}
              foi enviado para o seu e-mail.
            </h1>
            <p className="text-ivory-muted leading-relaxed text-lg">
              Mas antes de fechar esta página, você precisa completar a{" "}
              <strong className="text-ivory">Etapa 2</strong> para garantir sua vaga na
              Masterclass Gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* ETAPA 2 — WHATSAPP */}
      <section className="section-alt py-20">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            {/* Vídeo de boas-vindas */}
            <div
              className="rounded-lg overflow-hidden mb-4 mx-auto"
              style={{
                width: "100%",
                maxWidth: "320px",
                background: "#141414",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              <video
                src={WELCOME_VIDEO_URL}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full block"
                style={{ aspectRatio: "9/16", objectFit: "cover", background: "#141414" }}
              >
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
            <p className="text-ivory-muted text-sm mb-10">
              Mensagem do Dr. Santiago Vecina
            </p>

            <SectionLabel>Etapa 2 — Obrigatória</SectionLabel>
            <h2
              className="text-ivory mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem",
                fontWeight: 700,
              }}
            >
              Entre no Grupo VIP do{" "}
              <span className="text-gold">WhatsApp</span>
            </h2>
            <p className="text-ivory-muted leading-relaxed mb-8">
              O link da Masterclass <strong className="text-ivory">"O Código da Vitalidade"</strong>{" "}
              será enviado exclusivamente para os membros do Grupo VIP. Não perca o acesso.
            </p>

            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full max-w-sm mx-auto block py-4 mb-3"
              style={{
                background: "#25D366",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(37,211,102,0.3)",
              }}
            >
              <span className="mr-2">📲</span>
              Entrar no Grupo VIP do WhatsApp Agora
            </a>
            <p className="text-xs" style={{ color: "#6B6560" }}>
              Grupo silencioso. Apenas avisos importantes do Dr. Santiago.
            </p>
          </div>
        </div>
      </section>

      {/* PRÓXIMOS PASSOS */}
      <section className="section-dark py-16">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <h3
              className="text-ivory mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem" }}
            >
              Seus <span className="text-gold">próximos passos</span>
            </h3>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Entre no Grupo VIP",
                  desc: "Clique no botão verde acima para garantir o recebimento do link da Masterclass.",
                },
                {
                  step: "2",
                  title: "Verifique seu e-mail",
                  desc: "Procure o e-mail do Dr. Santiago Vecina com o assunto 'Seu E-book Chegou'. Verifique spam/promoções.",
                },
                {
                  step: "3",
                  title: "Leia a página 5 do e-book hoje",
                  desc: "Nela está o segredo sobre por que o café que você toma para 'acordar' está destruindo sua energia.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      border: "1px solid rgba(201,168,76,0.4)",
                      color: "#C9A84C",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h4
                      className="text-ivory font-semibold mb-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-ivory-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEASER DA MASTERCLASS */}
      <section
        className="py-16 text-center"
        style={{
          background: "#141414",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <SectionLabel>Em Breve</SectionLabel>
            <h2
              className="text-ivory mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem",
                fontWeight: 700,
              }}
            >
              Masterclass Gratuita:{" "}
              <span className="text-gold">"O Código da Vitalidade"</span>
            </h2>
            <p className="text-ivory-muted leading-relaxed mb-6">
              Na Masterclass, o Dr. Santiago vai revelar o protocolo exato para limpar a
              inflamação silenciosa, religar suas mitocôndrias e recuperar sua energia, libido
              e foco em 21 dias. Tudo aplicável à rotina de quem não tem tempo a perder.
            </p>
            <button
              onClick={() => navigate("/vendas")}
              className="btn-gold-outline"
            >
              Conhecer o Desafio Reset Vital →
            </button>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
