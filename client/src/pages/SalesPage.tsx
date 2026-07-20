import { useLocation } from "wouter";
import {
  GoldDivider,
  SectionLabel,
  CheckItem,
  BonusCard,
  TestimonialCard,
  PageFooter,
} from "@/components/shared";
import { BrandHeader, ResetVitalLogo } from "@/components/BrandHeader";

const PRICE_INSTALLMENT = "12x de R$ 9,70";
const PRICE_FULL = "R$ 97,00";

function PriceBox({ onBuy }: { onBuy: () => void }) {
  return (
    <div
      className="card-premium text-center"
      style={{
        borderColor: "rgba(201,168,76,0.5)",
        background: "linear-gradient(135deg, #141414 0%, #1A1A1A 100%)",
      }}
    >
      <div className="flex justify-center mb-4">
        <ResetVitalLogo size={44} />
      </div>
      <p className="pre-headline mb-2">Acesso Imediato ao Protocolo</p>
      <h3
        className="text-ivory mb-1"
        style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem" }}
      >
        Desafio Reset Vital 21 Dias
      </h3>
      <p className="text-xs mb-4 line-through" style={{ color: "#6B6560" }}>
        Valor de referência: R$ 497,00
      </p>
      <div className="mb-1">
        <span
          className="text-gold"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", fontWeight: 700 }}
        >
          {PRICE_INSTALLMENT}
        </span>
      </div>
      <p className="text-xs mb-6" style={{ color: "#6B6560" }}>
        ou {PRICE_FULL} à vista
      </p>
      <button onClick={onBuy} className="btn-gold btn-gold-shimmer w-full py-4 mb-4">
        ✦ Iniciar Meu Reset Vital Agora
      </button>
      <div className="flex justify-center gap-4 text-xs" style={{ color: "#6B6560" }}>
        <span>🔒 Compra Segura</span>
        <span>⚡ Acesso Imediato</span>
        <span>✓ Garantia 7 Dias</span>
      </div>
    </div>
  );
}

export default function SalesPage() {
  const [, navigate] = useLocation();

  function handleBuy() {
    navigate("/obrigado-compra");
  }

  return (
    <div className="min-h-screen section-dark">
      <BrandHeader />

      {/* HERO — Full editorial */}
      <section
        className="relative min-h-screen flex items-end overflow-hidden pt-20"
        style={{ background: "#0A0A0A" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/manus-storage/hero_vendas_022e37d3.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,1) 100%)",
          }}
        />

        <div className="container relative z-10 pb-20 pt-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              <span className="pre-headline">Protocolo Clínico de Alta Performance</span>
            </div>

            <h1
              className="text-ivory mb-6 leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
              }}
            >
              Transforme Sua
              <br />
              <span className="text-gold italic">Biologia</span>
              <br />
              em 21 Dias.
            </h1>

            <p
              className="text-ivory-muted leading-relaxed mb-10"
              style={{ fontSize: "1.15rem", maxWidth: "600px" }}
            >
              O protocolo médico definitivo para líderes que recusam operar abaixo do seu
              potencial biológico. Energia, libido e composição corporal — transformados de
              dentro para fora.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={handleBuy}
                className="btn-gold btn-gold-shimmer py-4 px-10"
                style={{ fontSize: "1rem" }}
              >
                ✦ Quero Iniciar Meu Reset Vital
              </button>
              <p className="text-xs" style={{ color: "#6B6560" }}>
                Garantia Incondicional de 7 Dias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL STATS STRIP */}
      <section
        className="py-10"
        style={{
          background: "#141414",
          borderTop: "1px solid rgba(201,168,76,0.2)",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "21", label: "Dias de Protocolo" },
              { number: "3 min", label: "Por Vídeo Diário" },
              { number: "4", label: "Bônus Clínicos" },
              { number: "7 dias", label: "Garantia Total" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-gold font-bold mb-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2.2rem",
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

      {/* DOR — Editorial split */}
      <section className="section-alt py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2">
                <SectionLabel>Diagnóstico</SectionLabel>
                <h2
                  className="text-ivory leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                  }}
                >
                  Você opera com o{" "}
                  <span className="text-gold italic">"freio de mão puxado"</span>?
                </h2>
                <div className="mt-6 w-12 h-px" style={{ background: "#C9A84C" }} />
              </div>
              <div className="lg:col-span-3 space-y-1">
                <CheckItem>
                  <strong className="text-ivory">Fadiga Crônica e Névoa Mental:</strong> Você
                  acorda cansado mesmo após dormir 8 horas. Precisa de café para começar o dia
                  e sente um apagão cognitivo no meio da tarde.
                </CheckItem>
                <CheckItem>
                  <strong className="text-ivory">Ganho de Peso Silencioso:</strong> Acumulou
                  gordura abdominal nos últimos anos, mesmo comendo relativamente bem. Nenhuma
                  dieta funciona mais.
                </CheckItem>
                <CheckItem>
                  <strong className="text-ivory">Queda de Libido e Vitalidade:</strong> A
                  energia sexual despencou. Falta disposição para a vida a dois e para aproveitar
                  os momentos com a família.
                </CheckItem>
                <CheckItem>
                  <strong className="text-ivory">Estresse e Irritabilidade:</strong> Você está
                  constantemente no limite da paciência. O pavio está curto e o sono é fragmentado.
                </CheckItem>
                <div
                  className="mt-6 p-5 rounded"
                  style={{
                    background: "rgba(201,168,76,0.06)",
                    border: "1px solid rgba(201,168,76,0.25)",
                  }}
                >
                  <p className="text-ivory-muted text-sm leading-relaxed">
                    <strong className="text-ivory">Isso não é culpa da sua idade.</strong> É
                    inflamação celular e declínio mitocondrial — e é totalmente reversível com
                    o protocolo biológico correto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VSL */}
      <section className="section-dark py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>Assista Antes de Continuar</SectionLabel>
            <h2
              className="text-ivory mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              }}
            >
              O Dr. Santiago explica o{" "}
              <span className="text-gold">protocolo</span>
            </h2>
            <div
              className="rounded-lg overflow-hidden flex items-center justify-center mx-auto"
              style={{
                aspectRatio: "16/9",
                background: "#141414",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              <div className="text-center p-8">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(201,168,76,0.12)", border: "2px solid #C9A84C" }}
                >
                  <span className="text-gold text-3xl">▶</span>
                </div>
                <p className="text-ivory-muted text-sm">Vídeo do Dr. Santiago Vecina</p>
                <p className="text-xs mt-1" style={{ color: "#6B6560" }}>
                  [Insira aqui o link do seu vídeo de vendas]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTORIDADE — Editorial split */}
      <section className="section-alt py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div
                className="relative rounded-lg overflow-hidden"
                style={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  aspectRatio: "3/4",
                  maxHeight: "520px",
                }}
              >
                <img
                  src="/manus-storage/dr_placeholder_94bb1642.jpg"
                  alt="Dr. Santiago Vecina"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{
                    background: "linear-gradient(0deg, rgba(10,10,10,0.95) 0%, transparent 100%)",
                  }}
                >
                  <p
                    className="text-gold text-xs uppercase tracking-widest"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Criador do Método Invictus
                  </p>
                </div>
              </div>
              <div>
                <SectionLabel>Quem vai te guiar</SectionLabel>
                <h2
                  className="text-ivory leading-tight mb-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2.2rem, 4vw, 3rem)",
                    fontWeight: 700,
                  }}
                >
                  Dr. Santiago
                </h2>
                <h2
                  className="text-gold italic leading-tight mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2.2rem, 4vw, 3rem)",
                    fontWeight: 700,
                  }}
                >
                  Vecina
                </h2>
                <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#6B6560" }}>
                  Médico Nutrólogo · Bioquímica & Metabolismo · Fisiologia Hormonal
                </p>
                <p className="text-ivory-muted leading-relaxed mb-4">
                  Há mais de uma década, atendo CEOs, empresários e líderes de alta performance
                  que chegam ao meu consultório exaustos e dependentes de remédios para dormir
                  e acordar.
                </p>
                <p className="text-ivory-muted leading-relaxed mb-6">
                  Criei o <strong className="text-gold">Método Invictus</strong> porque líderes
                  não precisam de dietas de revista; precisam de um protocolo biológico
                  inteligente, aplicável a rotinas insanas.
                </p>
                <blockquote
                  className="pl-4 italic text-ivory-muted text-sm"
                  style={{ borderLeft: "2px solid #C9A84C" }}
                >
                  "Pessoas alinhadas constroem empresas fortes. Empresas fortes sustentam
                  famílias estruturadas. Famílias estruturadas constroem legado."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O MÉTODO */}
      <section className="section-dark py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel>O Programa</SectionLabel>
              <h2
                className="text-ivory"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                }}
              >
                O Desafio{" "}
                <span className="text-gold italic">Reset Vital</span>
                <br />
                21 Dias
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-14">
              {[
                {
                  week: "I",
                  title: "Fundamentos e Limpeza Metabólica",
                  desc: "Interrompemos os ciclos de inflamação, limpamos o terreno biológico e ajustamos seu sono e hidratação celular.",
                  days: "Dias 1–7",
                },
                {
                  week: "II",
                  title: "Otimização da Energia e Mente",
                  desc: "Religamos suas mitocôndrias, melhoramos seu foco cognitivo e iniciamos a modulação hormonal natural.",
                  days: "Dias 8–14",
                },
                {
                  week: "III",
                  title: "Transformação e o Novo Normal",
                  desc: "Consolidamos práticas avançadas para garantir que sua nova energia e perda de peso sejam sustentáveis.",
                  days: "Dias 15–21",
                },
              ].map((w) => (
                <div key={w.week} className="card-premium">
                  <p className="pre-headline mb-2">{w.days}</p>
                  <div
                    className="text-gold mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      fontStyle: "italic",
                    }}
                  >
                    Semana {w.week}
                  </div>
                  <h3
                    className="text-ivory font-semibold mb-3 text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {w.title}
                  </h3>
                  <p className="text-ivory-muted text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>

            {/* Entregáveis */}
            <div
              className="card-premium"
              style={{ borderColor: "rgba(201,168,76,0.3)" }}
            >
              <h3
                className="text-ivory mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem" }}
              >
                O que você recebe ao entrar hoje
              </h3>
              <div className="space-y-1">
                <CheckItem>
                  <strong className="text-ivory">21 Mini Vídeos Diários de Instrução</strong> —
                  Direto ao ponto (2–3 minutos). Você assiste e já sabe exatamente o que fazer
                  no seu dia.
                </CheckItem>
                <CheckItem>
                  <strong className="text-ivory">Protocolo de Avaliação Mensurável</strong> —
                  Ferramenta clínica para medir sua evolução do Dia 1 ao Dia 21.
                </CheckItem>
                <CheckItem>
                  <strong className="text-ivory">Acesso à Plataforma Premium</strong> — Assista
                  de qualquer lugar, no celular ou computador.
                </CheckItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section-alt py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>Resultados Documentados</SectionLabel>
              <h2
                className="text-ivory"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 700,
                }}
              >
                Quem já passou pelo{" "}
                <span className="text-gold italic">Reset</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <TestimonialCard
                quote="Eu achava que meu cansaço era normal da idade. Em 15 dias no protocolo do Dr. Santiago, minha energia dobrou e minha barriga desinchou absurdamente."
                name="João M."
                role="Empresário, 42 anos"
              />
              <TestimonialCard
                quote="O foco mental que recuperei não tem preço. Parei de tomar café às 16h e meu sono voltou a ser profundo. As tarefas levam minutos, mas o resultado dura o dia todo."
                name="Marcos R."
                role="Executivo, 48 anos"
              />
              <TestimonialCard
                quote="Perdi 6kg em 21 dias sem passar fome. Mas o que mais me surpreendeu foi a clareza mental. Minhas reuniões ficaram muito mais produtivas."
                name="Ana P."
                role="Diretora Comercial, 39 anos"
              />
              <TestimonialCard
                quote="Minha libido voltou ao nível de quando tinha 30 anos. Minha esposa notou a diferença antes de mim. Esse protocolo é real."
                name="Carlos S."
                role="CEO, 51 anos"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA E BÔNUS */}
      <section className="section-dark py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel>A Oferta Completa</SectionLabel>
              <h2
                className="text-ivory"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                }}
              >
                Bônus Clínicos{" "}
                <span className="text-gold italic">Exclusivos</span>
              </h2>
            </div>

            <div className="space-y-4 mb-14">
              <BonusCard
                number="I"
                title="Lista de Alimentos Aceleradores de Metabolismo"
                description="O guia prático do que comer para desinflamar e queimar gordura sem passar fome. Alimentos termogênicos, anti-inflamatórios e moduladores hormonais."
                value="R$ 97"
              />
              <BonusCard
                number="II"
                title="Nutrição Estratégica de Treino"
                description="O que comer antes, durante e depois da atividade física para maximizar ganho de massa, energia e recuperação muscular."
                value="R$ 97"
              />
              <BonusCard
                number="III"
                title="Protocolo Radical de Higiene do Sono"
                description="O passo a passo noturno para otimizar testosterona e hormônio do crescimento enquanto você dorme. Inclui protocolo de luz, temperatura e suplementação noturna."
                value="R$ 97"
              />
              <BonusCard
                number="IV"
                title="Guia Clínico de Suplementos e Fitoterápicos"
                description="O arsenal clínico completo para energia, foco, libido e controle do estresse. Dosagens, horários e combinações seguras baseadas em evidências."
                value="R$ 197"
              />
            </div>

            <GoldDivider />

            <div className="max-w-md mx-auto">
              <PriceBox onBuy={handleBuy} />
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="section-alt py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/manus-storage/garantia_badge_5a01f9e6.png"
                  alt="Garantia Incondicional 7 Dias"
                  className="w-52 h-52 object-contain"
                />
              </div>
              <div>
                <SectionLabel>Risco Zero</SectionLabel>
                <h2
                  className="text-ivory mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    fontWeight: 700,
                  }}
                >
                  Garantia Incondicional de{" "}
                  <span className="text-gold">7 Dias</span>
                </h2>
                <p className="text-ivory-muted leading-relaxed mb-6">
                  Eu confio tanto no poder biológico deste protocolo que assumo todo o risco.
                  Entre no Desafio, aplique as tarefas. Se em 7 dias você não sentir melhora
                  clara na sua energia e disposição, basta enviar um único e-mail e eu devolvo{" "}
                  <strong className="text-ivory">100% do seu investimento</strong>. Sem perguntas,
                  sem burocracia.
                </p>
                <button onClick={handleBuy} className="btn-gold">
                  ✦ Entrar com Garantia Total
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>Dúvidas Frequentes</SectionLabel>
              <h2
                className="text-ivory"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                  fontWeight: 700,
                }}
              >
                Perguntas <span className="text-gold italic">Frequentes</span>
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Preciso passar horas na academia?",
                  a: "Não. O foco é em movimento estratégico. Os treinos sugeridos duram de 15 a 20 minutos e podem ser feitos em casa.",
                },
                {
                  q: "É uma dieta restritiva onde vou passar fome?",
                  a: "De forma alguma. O foco é na densidade nutricional, consumindo proteínas e gorduras boas que geram saciedade profunda. Sem contar calorias.",
                },
                {
                  q: "Terei que comprar suplementos caros?",
                  a: "Os suplementos (Bônus IV) são aceleradores opcionais. A base da transformação vem da alimentação, sono e hidratação.",
                },
                {
                  q: "E se eu viajar durante os 21 dias?",
                  a: "O protocolo ensina a 'Mentalidade Antifrágil', mostrando como manter a performance mesmo fora da rotina, em hotéis ou viagens de negócios.",
                },
                {
                  q: "Funciona para mulheres?",
                  a: "Sim. Os princípios de otimização mitocondrial e controle de inflamação se aplicam a todos os gêneros.",
                },
                {
                  q: "Como recebo o acesso?",
                  a: "Imediatamente após a confirmação do pagamento, você receberá o login e senha no seu e-mail. Acesso disponível 24h por dia.",
                },
                {
                  q: "Qual a diferença para outros programas de emagrecimento?",
                  a: "Este não é um programa estético. É um protocolo de restauração biológica onde o emagrecimento é uma consequência natural de um corpo desinflamado.",
                },
                {
                  q: "E se eu não tiver resultados?",
                  a: "Você tem 7 dias de garantia incondicional. Se não sentir melhora, devolvemos 100% do seu investimento. Sem perguntas.",
                },
              ].map((faq, i) => (
                <div key={i} className="card-premium">
                  <h4
                    className="text-ivory font-semibold mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span className="text-gold mr-2">✦</span>
                    {faq.q}
                  </h4>
                  <p className="text-ivory-muted text-sm leading-relaxed pl-5">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-28 text-center"
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)",
          borderTop: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-8">
              <ResetVitalLogo size={60} />
            </div>
            <SectionLabel>A Decisão é Sua</SectionLabel>
            <h2
              className="text-ivory mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 700,
              }}
            >
              A decisão agora é{" "}
              <span className="text-gold italic">biológica.</span>
            </h2>
            <p className="text-ivory-muted leading-relaxed mb-10 text-lg">
              Você pode continuar operando com o freio de mão puxado, aceitando a fadiga e a
              baixa libido como "normais". Ou pode tomar a decisão de um líder: investir na
              sua biologia e voltar a performar no seu auge.
            </p>
            <button
              onClick={handleBuy}
              className="btn-gold btn-gold-shimmer py-5 px-12 text-lg mb-4"
            >
              ✦ Sim, Eu Quero Resetar Minha Energia Agora
            </button>
            <p className="text-xs" style={{ color: "#6B6560" }}>
              Compra 100% segura · Acesso Imediato · Garantia Incondicional de 7 Dias
            </p>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
