import { useLocation } from "wouter";
import { PageFooter, SectionLabel } from "@/components/shared";
import { BrandHeader } from "@/components/BrandHeader";

export default function ThankYouPurchase() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen section-dark">
      <BrandHeader />
      {/* HERO */}
      <section
        className="py-24 text-center pt-36"
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #141414 100%)",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Celebration icon */}
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))",
                border: "2px solid #C9A84C",
                boxShadow: "0 0 40px rgba(201,168,76,0.3)",
              }}
            >
              <span style={{ fontSize: "2.5rem" }}>✦</span>
            </div>

            <SectionLabel>Bem-vindo ao Reset Vital</SectionLabel>
            <h1
              className="text-ivory mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 700,
              }}
            >
              Parabéns!{" "}
              <span className="text-gold">Sua decisão foi tomada.</span>
            </h1>
            <p className="text-ivory-muted leading-relaxed text-lg mb-6">
              Você acaba de dar o passo mais importante: investiu na sua biologia. A partir de
              agora, você tem acesso ao protocolo que vai transformar sua energia, libido e
              composição corporal nos próximos 21 dias.
            </p>
            <div
              className="inline-block px-6 py-3 rounded"
              style={{
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              <p className="text-gold font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                📧 Verifique seu e-mail — o acesso foi enviado agora mesmo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRÓXIMOS PASSOS */}
      <section className="section-alt py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>Guia de Início</SectionLabel>
              <h2
                className="text-ivory"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                }}
              >
                Seus <span className="text-gold">3 Primeiros Passos</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Acesse a Plataforma",
                  desc: "Você recebeu um e-mail com o título 'Seu Acesso ao Desafio Reset Vital'. Clique no link e crie sua senha. Se não encontrar, verifique a pasta de spam.",
                  action: "Acessar Plataforma →",
                  href: "#",
                },
                {
                  step: "2",
                  title: "Preencha o Protocolo do Dia 1",
                  desc: "Antes de assistir ao primeiro vídeo, preencha o Protocolo de Avaliação Inicial (Dia 1). Esse formulário é a sua linha de base — sem ele, você não saberá o quanto evoluiu no Dia 21.",
                  action: null,
                  href: null,
                },
                {
                  step: "3",
                  title: "Assista ao Vídeo do Dia 1",
                  desc: "O primeiro vídeo dura apenas 3 minutos e vai te dar a tarefa mais importante para iniciar sua limpeza metabólica hoje mesmo. Você vai sentir a diferença já amanhã.",
                  action: null,
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="card-premium flex gap-5 items-start"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      border: "1px solid rgba(201,168,76,0.4)",
                      color: "#C9A84C",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h4
                      className="text-ivory font-semibold mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-ivory-muted text-sm leading-relaxed mb-3">{item.desc}</p>
                    {item.action && (
                      <a
                        href={item.href || "#"}
                        className="btn-gold py-2 px-5 text-sm"
                        style={{ display: "inline-flex" }}
                      >
                        {item.action}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="section-dark py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <SectionLabel>Seus Bônus Estão Disponíveis</SectionLabel>
              <h2
                className="text-ivory"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem" }}
              >
                Acesse seus <span className="text-gold">4 Bônus Exclusivos</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "I", title: "Lista de Alimentos Aceleradores" },
                { num: "II", title: "Nutrição Estratégica de Treino" },
                { num: "III", title: "Protocolo de Higiene do Sono" },
                { num: "IV", title: "Guia de Suplementos e Fitoterápicos" },
              ].map((b) => (
                <div
                  key={b.num}
                  className="card-premium text-center py-5"
                >
                  <div
                    className="text-gold mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                    }}
                  >
                    {b.num}
                  </div>
                  <p
                    className="text-ivory text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {b.title}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#6B6560" }}>
                    Disponível na plataforma
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <section
        className="py-16 text-center"
        style={{
          background: "#141414",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div className="container">
          <div className="max-w-xl mx-auto">
            <SectionLabel>Comunidade</SectionLabel>
            <h2
              className="text-ivory mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem" }}
            >
              Entre no Grupo Exclusivo de{" "}
              <span className="text-gold">Alunos</span>
            </h2>
            <p className="text-ivory-muted leading-relaxed mb-8">
              O grupo de alunos é onde o Dr. Santiago compartilha dicas extras, responde dúvidas
              e você se conecta com outros líderes em transformação. A comunidade acelera os
              resultados.
            </p>
            <a
              href="https://wa.me/SEUNUMERO?text=Acabei+de+comprar+o+Reset+Vital"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold py-4 px-8"
              style={{
                background: "#25D366",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(37,211,102,0.3)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>📲</span>
              Entrar no Grupo de Alunos
            </a>
          </div>
        </div>
      </section>

      {/* MENSAGEM MOTIVACIONAL */}
      <section className="section-dark py-20 text-center">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div
              className="text-6xl text-gold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "
            </div>
            <blockquote
              className="text-ivory leading-relaxed mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                fontStyle: "italic",
              }}
            >
              A energia não é algo que você tem ou não tem. É algo que você produz nas suas
              mitocôndrias e protege através dos seus hábitos. Você acabou de escolher protegê-la.
            </blockquote>
            <p className="text-gold font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              — Dr. Santiago Vecina
            </p>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
