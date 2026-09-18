import {
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  MessageCircle,
} from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SiteMotion } from '@/components/site-motion';
import { SolutionsAccordion } from '@/components/solutions-accordion';
import { TypewriterHeadline } from '@/components/typewriter-headline';

const whatsappUrl =
  'https://wa.me/5519982549216?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20melhor%20as%20solu%C3%A7%C3%B5es%20da%20CNOP.';
const instagramUrl = 'https://www.instagram.com/cnop.solucoessstegestao';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-canvas text-ink">
      <SiteMotion />
      <header className="site-header sticky top-0 z-50 border-b border-line/80 bg-canvas/90 backdrop-blur-xl">
        <div className="site-container flex h-[78px] items-center justify-between gap-6">
          <a href="#inicio" className="flex items-center gap-3" aria-label="CNOP Soluções — início">
            <span className="brand-mark relative h-12 w-12 overflow-hidden rounded-xl border border-line bg-white p-1.5">
              <img src="/cnop-logo.png" alt="Logo da CNOP Soluções" className="h-full w-full object-contain p-1" />
            </span>
            <span className="leading-none">
              <strong className="block text-[1.05rem] font-extrabold tracking-[-0.03em]">CNOP</strong>
              <span className="mt-1 block text-[0.8rem] font-bold uppercase tracking-[0.2em] text-ink-soft">Soluções</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 text-[0.95rem] font-semibold lg:flex" aria-label="Navegação principal">
            <a className="nav-link" href="#empresa">A empresa</a>
            <a className="nav-link" href="#solucoes">Soluções</a>
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
            <Reveal delay={40}><p className="eyebrow"><span /> Consultoria, SST e Gestão de Pessoas</p></Reveal>
            <Reveal delay={130}>
            <h1
              className="display-title mt-10 max-w-[1180px]"
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
          </div>

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
            <p className="eyebrow"><span /> Sobre a CNOP</p>
            <h2 className="section-title mt-6">Diferentes desafios.<br />Uma visão <span className="font-editorial font-normal normal-case text-gold">completa.</span></h2>
          </Reveal>
          <Reveal direction="scale" delay={100} className="lg:col-span-3 lg:col-start-6">
            <figure className="about-portrait about-portrait-compact" data-parallax-speed="0.055">
              <img
                src="/cnop-consultora.png"
                alt="Profissional em ambiente corporativo"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
          </Reveal>
          <Reveal direction="right" delay={180} className="lg:col-span-4 lg:col-start-9 lg:pt-12">
            <p className="text-2xl leading-[1.65] text-ink-soft">
              A CNOP Soluções apoia empresas em áreas que influenciam diretamente a qualidade da gestão: processos, segurança e pessoas.
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
              <p className="eyebrow"><span /> Nossas soluções</p>
              <h2 className="section-title mt-6">Conhecimento aplicado<br />à sua operação.</h2>
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

      <section id="contato" className="scroll-mt-20 bg-ink py-20 text-white sm:py-28">
        <div className="site-container">
          <div className="contact-panel relative overflow-hidden rounded-[1.75rem] p-7 sm:p-12 lg:p-16">
            <div className="contact-orb" data-parallax-speed="-0.05" aria-hidden="true" />
            <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
              <Reveal direction="left" className="lg:col-span-8">
                <p className="text-[0.95rem] font-extrabold uppercase tracking-[0.16em] text-white/90">Vamos conversar?</p>
                <h2 className="mt-8 max-w-4xl text-[clamp(2.8rem,7vw,7rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.04em]">
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
                <p className="mt-3 text-base font-semibold text-white/90">(19) 98254-9216</p>
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
