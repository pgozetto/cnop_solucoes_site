import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  CalendarCheck,
  Camera,
  Clock,
  MessageCircle,
  TrendingUp,
} from 'lucide-react';
import { CommerceProgram } from '@/components/commerce-program';
import { Reveal } from '@/components/reveal';
import { SiteMotion } from '@/components/site-motion';
import { SolutionsAccordion } from '@/components/solutions-accordion';
import { TypewriterHeadline } from '@/components/typewriter-headline';

const whatsappUrl =
  'https://wa.me/5519982549216?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20melhor%20as%20solu%C3%A7%C3%B5es%20da%20CNOP.';
const escalaUrl =
  'https://wa.me/5519982549216?text=Ol%C3%A1%2C%20quero%20planejar%20a%20transi%C3%A7%C3%A3o%20do%20fim%20da%20escala%206x1%20na%20minha%20empresa.';
const instagramUrl = 'https://www.instagram.com/cnop.solucoessstegestao';

const transitionFacts = [
  {
    icon: CalendarDays,
    title: 'O que mudou?',
    text: 'A Emenda Constitucional nº 141/2026 foi promulgada em 16 de outubro de 2026 e estabelece o fim da escala 6x1, com a adoção da escala 5x2 após um período de transição de 60 dias, a partir de 15 de dezembro de 2026.',
  },
  {
    icon: Clock,
    title: 'Jornada de trabalho',
    text: 'A redução da carga horária se dará em duas etapas:',
    points: [
      'Inicialmente, de 44 para 42 horas semanais (após 12 meses, para 40 horas semanais).',
      'Sem redução salarial.',
    ],
  },
  {
    icon: CalendarCheck,
    title: 'E o que isso significa?',
    text: 'Mais tempo de descanso, melhor qualidade de vida e novos desafios para a gestão das equipes, com impacto direto nas escalas, jornadas, custos e na organização da operação.',
  },
] as { icon: typeof Clock; title: string; text: string; points?: string[] }[];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-canvas text-ink">
      <SiteMotion />
      <header className="site-header sticky top-0 z-50 border-b border-line/80 bg-canvas/90 backdrop-blur-xl">
        <div className="site-container flex h-[78px] items-center justify-between gap-6">
          <a href="#inicio" className="flex items-center gap-3" aria-label="CNOP Soluções — início">
            <img src="/cnop-logo-hero.jpeg" alt="CNOP Soluções" className="header-logo" />
          </a>

          <nav className="hidden items-center gap-9 text-[0.95rem] font-semibold lg:flex" aria-label="Navegação principal">
            <a className="nav-link" href="#empresa">A empresa</a>
            <a className="nav-link" href="#solucoes">Soluções</a>
            <a className="nav-link" href="#comercio">Comércio</a>
            <a className="nav-link" href="#contato">Contato</a>
          </nav>

          <a className="button button-dark px-5 py-3 text-sm" href={whatsappUrl} target="_blank" rel="noreferrer">
            <span className="hidden sm:inline">Fale com a CNOP</span>
            <span className="sm:hidden">WhatsApp</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </header>

      <section id="inicio" className="relative scroll-mt-24 border-b border-line">
        <div className="brand-rail" aria-hidden="true" />
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-orb hero-orb-one" data-parallax-speed="0.1" />
          <span className="hero-orb hero-orb-two" data-parallax-speed="-0.08" />
        </div>
        <div className="site-container grid min-h-[calc(100svh-78px)] grid-cols-1 items-center py-20 lg:grid-cols-12 lg:py-28">
          <div className="relative z-10 lg:col-span-11 xl:col-span-10">
            <Reveal delay={130}>
            <h1
              className="display-title max-w-[1180px]"
              aria-label="Soluções que organizam, protegem e desenvolvem o seu negócio."
            >
              <TypewriterHeadline prefix="Soluções que " accent="organizam,">
                {' '}protegem e desenvolvem o seu negócio.
              </TypewriterHeadline>
            </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-12 max-w-3xl text-xl leading-[1.7] text-ink-soft sm:text-2xl">
                A CNOP integra conhecimento empresarial, segurança no trabalho e gestão de pessoas para apoiar empresas que buscam uma operação mais sólida e bem conduzida.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a className="button button-accent" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Solicitar atendimento <ArrowUpRight size={19} aria-hidden="true" />
                </a>
                <a className="button button-outline" href="#solucoes">
                  Conhecer as soluções <ArrowDownRight size={19} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={430}>
              <div className="hero-logo-wrap" data-parallax-speed="0.035">
                <img
                  src="/cnop-logo-hero.jpeg"
                  alt="Logo CNOP Soluções"
                  className="hero-logo-image"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="escala" className="relative scroll-mt-24 border-b border-line">
        <div className="site-container py-16 lg:py-24">
          <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal delay={60}>
                <h2 className="display-title">
                  Fim da escala <span className="animated-accent">6x1:</span>
                  <span className="mt-2 block text-ink-soft">Sua empresa está preparada?</span>
                </h2>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-10 max-w-2xl border-l-4 border-gold pl-6 text-xl leading-[1.6] text-ink-soft sm:text-2xl">
                  A mudança já foi promulgada e a transição começa em <strong className="font-extrabold text-ink">15 de dezembro de 2026.</strong>
                </p>
              </Reveal>
            </div>

            <Reveal direction="scale" delay={260} className="lg:col-span-4">
              <div className="scale-card" data-parallax-speed="0.035" aria-label="Escala 6x1 muda para 5x2">
                <span className="scale-card-old">6x1</span>
                <span className="scale-card-arrow" aria-hidden="true"><ArrowDownRight size={34} /></span>
                <span className="scale-card-new">5x2</span>
              </div>
            </Reveal>
          </div>

          <div className="relative z-10 mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {transitionFacts.map(({ icon: Icon, title, text, points }, index) => (
              <Reveal key={title} delay={index * 110} className="h-full">
                <article className="fact-card h-full">
                  <span className="fact-icon"><Icon size={26} aria-hidden="true" /></span>
                  <h2 className="fact-title">{title}</h2>
                  <p className="fact-text">{text}</p>
                  {points && (
                    <ul className="fact-points">
                      {points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="relative z-10 mt-8">
            <div className="hero-cta-panel">
              <span className="fact-icon fact-icon-lg"><TrendingUp size={30} aria-hidden="true" /></span>
              <div className="flex-1">
                <h2 className="fact-title">E a sua empresa?</h2>
                <p className="fact-text mt-2">
                  Agora é o momento de se planejar, revisar processos e alinhar estratégias para manter a produtividade, garantir a continuidade do negócio e aproveitar as novas oportunidades.
                </p>
                <p className="mt-4 text-lg font-extrabold text-pink sm:text-xl">
                  Como você vai reorganizar as escalas, jornadas e custos? Sua operação está pronta para manter a produtividade?
                </p>
              </div>
              <a className="button button-accent shrink-0" href={escalaUrl} target="_blank" rel="noreferrer">
                Chame a CNOP Soluções <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="site-container grid divide-y divide-line py-0 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ['01', 'Visão empresarial'],
            ['02', 'Cuidado preventivo'],
            ['03', 'Desenvolvimento humano'],
          ].map(([number, label], index) => (
            <Reveal key={number} delay={index * 110} className="h-full">
              <div className="proof-item flex h-full items-center gap-5 py-7 md:px-8">
                <span className="font-editorial text-3xl text-gold">{number}</span>
                <span className="text-[0.95rem] font-bold uppercase tracking-[0.12em] text-ink-soft">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="empresa" className="relative scroll-mt-20 overflow-hidden py-section">
        <span className="about-parallax-word" data-parallax-speed="0.07" aria-hidden="true">CNOP</span>
        <div className="site-container grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          <Reveal direction="left" className="lg:col-span-5">
            <h2 className="section-title">Diferentes desafios.<br />Uma visão <span className="font-editorial font-normal normal-case text-gold">completa.</span></h2>
          </Reveal>
          <Reveal direction="scale" delay={100} className="lg:col-span-3 lg:col-start-6">
            <figure className="about-portrait about-portrait-compact" data-parallax-speed="0.055">
              <img
                src="/cnop-consultora.png"
                alt="Profissional em ambiente corporativo"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <figcaption>Camila Perboni</figcaption>
            </figure>
          </Reveal>
          <Reveal direction="right" delay={180} className="lg:col-span-4 lg:col-start-9 lg:pt-12">
            <p className="text-xl leading-[1.7] text-ink-soft sm:text-2xl sm:leading-[1.65]">
              Camila Novaes de Oliveira Perboni é formada em Segurança do Trabalho, com ampla experiência em Gestão de Pessoas e Riscos Psicossociais. À frente da CNOP, une conhecimento técnico e experiência prática para oferecer soluções integradas em pessoas, segurança e processos, com atendimento próximo e personalizado para cada empresa.
            </p>
            <p className="mt-8 text-lg leading-[1.8] text-ink-soft">
              Cada atendimento parte das necessidades reais da organização. O objetivo é oferecer orientação clara e suporte aplicável à rotina, conectando as demandas empresariais a soluções consistentes.
            </p>
            <a href="#solucoes" className="mt-10 inline-flex items-center gap-2 border-b border-ink pb-1 text-[0.95rem] font-extrabold uppercase tracking-[0.1em] transition-colors hover:border-pink hover:text-pink">
              Veja como podemos apoiar <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="solucoes" className="scroll-mt-20 border-y border-line bg-white py-section">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-7 border-b border-line pb-10 lg:grid-cols-12 lg:items-end">
            <Reveal direction="left" className="lg:col-span-8">
              <h2 className="section-title">Conhecimento aplicado<br />à sua operação.</h2>
            </Reveal>
            <Reveal direction="right" delay={140} className="lg:col-span-4 lg:pb-2">
              <p className="max-w-md text-lg leading-[1.75] text-ink-soft">
                Clique em uma solução para entender como a CNOP pode apoiar a rotina da sua empresa.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <SolutionsAccordion whatsappNumber="5519982549216" />
          </Reveal>
        </div>
      </section>

      <CommerceProgram />

      <section id="contato" className="scroll-mt-20 bg-ink py-20 text-white sm:py-28">
        <div className="site-container">
          <div className="contact-panel relative overflow-hidden rounded-[1.75rem] p-7 sm:p-12 lg:p-16">
            <div className="contact-orb" data-parallax-speed="-0.05" aria-hidden="true" />
            <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
              <Reveal direction="left" className="lg:col-span-8">
                <h2 className="max-w-4xl text-[clamp(2.8rem,7vw,7rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.04em]">
                  Sua empresa pronta para o próximo passo.
                </h2>
                <p className="mt-9 max-w-xl text-xl leading-[1.7] text-white/90">
                  Entre em contato para apresentar a sua necessidade e conhecer a solução mais adequada para a sua empresa.
                </p>
              </Reveal>
              <Reveal direction="right" delay={160} className="lg:col-span-4">
              <div className="flex flex-col gap-3 lg:items-stretch">
                <a className="contact-link" href={whatsappUrl} target="_blank" rel="noreferrer">
                  <span><MessageCircle size={20} aria-hidden="true" /> WhatsApp</span>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
                <a className="contact-link" href={instagramUrl} target="_blank" rel="noreferrer">
                  <span><Camera size={20} aria-hidden="true" /> Instagram</span>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
                <p className="mt-3 text-base font-semibold text-white/90">(19) 98254-9216 · Piracicaba e região</p>
              </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink py-9 text-white">
        <div className="site-container flex flex-col gap-7 text-base leading-relaxed text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative h-9 w-9 overflow-hidden rounded-lg bg-white p-1"><img src="/cnop-logo.png" alt="" className="h-full w-full object-contain p-1" /></span>
            <span className="font-bold text-white">CNOP Soluções</span>
          </div>
          <p>Consultoria Empresarial · Segurança no Trabalho · Gestão de Pessoas</p>
          <a className="transition-colors hover:text-white" href="#inicio">Voltar ao início ↑</a>
        </div>
      </footer>
    </main>
  );
}
