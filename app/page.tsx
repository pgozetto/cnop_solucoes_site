import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  Check,
  MessageCircle,
  ShieldCheck,
  Users,
} from 'lucide-react';

const whatsappUrl =
  'https://wa.me/5519982549216?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20melhor%20as%20solu%C3%A7%C3%B5es%20da%20CNOP.';
const instagramUrl = 'https://www.instagram.com/cnop.solucoessstegestao';

const services = [
  {
    number: '01',
    title: 'Consultoria\nEmpresarial',
    description:
      'Orientação estratégica para apoiar decisões, organizar processos e fortalecer a gestão da sua empresa.',
    icon: BriefcaseBusiness,
    items: [
      'Análise das necessidades do negócio',
      'Apoio à organização de processos',
      'Soluções alinhadas à realidade da empresa',
    ],
    accent: 'orange',
  },
  {
    number: '02',
    title: 'Segurança\nno Trabalho',
    description:
      'Atuação próxima e preventiva para apoiar ambientes de trabalho mais seguros, organizados e em conformidade.',
    icon: ShieldCheck,
    items: [
      'Treinamentos e integrações',
      'MRs e Programa de Gerenciamento de Riscos — PGR',
      'Acompanhamento de programas',
    ],
    accent: 'pink',
  },
  {
    number: '03',
    title: 'Gestão de\nPessoas — RH',
    description:
      'Soluções para desenvolver lideranças, estruturar equipes e dar mais segurança às rotinas de Recursos Humanos.',
    icon: Users,
    items: [
      'Treinamento de liderança',
      'Recrutamento e seleção',
      'Auxílio no fechamento de folha',
    ],
    accent: 'purple',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-canvas text-ink">
      <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/90 backdrop-blur-xl">
        <div className="site-container flex h-[78px] items-center justify-between gap-6">
          <a href="#inicio" className="flex items-center gap-3" aria-label="CNOP Soluções — início">
            <span className="relative h-12 w-12 overflow-hidden rounded-xl border border-line bg-white p-1.5">
              <img src="/cnop-logo.png" alt="Logo da CNOP Soluções" className="h-full w-full object-contain p-1" />
            </span>
            <span className="leading-none">
              <strong className="block text-[1.05rem] font-extrabold tracking-[-0.03em]">CNOP</strong>
              <span className="mt-1 block text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted">Soluções</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex" aria-label="Navegação principal">
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
        <div className="site-container grid min-h-[calc(100svh-78px)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="relative z-10 lg:col-span-7">
            <p className="eyebrow"><span /> Consultoria, SST e Gestão de Pessoas</p>
            <h1 className="display-title mt-7 max-w-[920px]">
              Soluções que <span className="font-editorial font-normal normal-case">organizam,</span>{' '}
              protegem e desenvolvem o seu negócio.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              A CNOP integra conhecimento empresarial, segurança no trabalho e gestão de pessoas para apoiar empresas que buscam uma operação mais sólida e bem conduzida.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a className="button button-accent" href={whatsappUrl} target="_blank" rel="noreferrer">
                Solicitar atendimento <ArrowUpRight size={19} aria-hidden="true" />
              </a>
              <a className="button button-outline" href="#solucoes">
                Conhecer as soluções <ArrowDownRight size={19} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-5 lg:pl-8">
            <div className="hero-visual">
              <div className="visual-grid" aria-hidden="true" />
              <span className="visual-kicker">Visão integrada</span>
              <div className="relative z-10 flex aspect-square w-[58%] items-center justify-center rounded-[2rem] bg-white p-8 shadow-soft sm:w-[54%]">
                <img src="/cnop-logo.png" alt="Símbolo da CNOP Soluções" width="300" height="300" className="h-auto w-full" />
              </div>
              <div className="visual-note">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span>Estratégia, prevenção e pessoas em uma atuação conectada.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="site-container grid divide-y divide-line py-0 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ['01', 'Visão empresarial'],
            ['02', 'Cuidado preventivo'],
            ['03', 'Desenvolvimento humano'],
          ].map(([number, label]) => (
            <div key={number} className="flex items-center gap-5 py-7 md:px-8 first:pl-0 last:pr-0">
              <span className="font-editorial text-3xl text-gold">{number}</span>
              <span className="text-sm font-bold uppercase tracking-[0.12em] text-ink-soft">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="empresa" className="scroll-mt-20 py-section">
        <div className="site-container grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="eyebrow"><span /> Sobre a CNOP</p>
            <h2 className="section-title mt-6">Diferentes desafios.<br />Uma visão <span className="font-editorial font-normal normal-case text-gold">completa.</span></h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-10">
            <p className="text-xl leading-relaxed text-ink-soft">
              A CNOP Soluções apoia empresas em áreas que influenciam diretamente a qualidade da gestão: processos, segurança e pessoas.
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              Cada atendimento parte das necessidades reais da organização. O objetivo é oferecer orientação clara e suporte aplicável à rotina, conectando as demandas empresariais a soluções consistentes.
            </p>
            <a href="#solucoes" className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-extrabold uppercase tracking-[0.1em] transition-colors hover:border-pink hover:text-pink">
              Veja como podemos apoiar <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="solucoes" className="scroll-mt-20 border-y border-line bg-white py-section">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-7 border-b border-line pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow"><span /> Nossas soluções</p>
              <h2 className="section-title mt-6">Conhecimento aplicado<br />à sua operação.</h2>
            </div>
            <p className="max-w-md leading-relaxed text-muted lg:col-span-4 lg:pb-2">
              Três frentes complementares para apoiar a estrutura, a segurança e o desenvolvimento da sua empresa.
            </p>
          </div>

          <div className="divide-y divide-line">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.number} className="service-row group grid grid-cols-1 gap-8 py-12 lg:grid-cols-12 lg:items-start lg:py-16">
                  <div className="flex items-center gap-5 lg:col-span-2">
                    <span className={`service-icon service-icon-${service.accent}`}><Icon size={26} strokeWidth={1.7} aria-hidden="true" /></span>
                    <span className="text-sm font-extrabold tracking-[0.15em] text-muted lg:hidden">{service.number}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <span className="hidden text-sm font-extrabold tracking-[0.15em] text-muted lg:block">{service.number}</span>
                    <h3 className="mt-0 whitespace-pre-line text-[clamp(2rem,4vw,4rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.045em] lg:mt-5">{service.title}</h3>
                  </div>
                  <div className="lg:col-span-5 lg:col-start-8">
                    <p className="text-lg leading-relaxed text-ink-soft">{service.description}</p>
                    <ul className="mt-7 space-y-3">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-muted">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-canvas text-ink"><Check size={13} strokeWidth={2.5} aria-hidden="true" /></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contato" className="scroll-mt-20 bg-ink py-20 text-white sm:py-28">
        <div className="site-container">
          <div className="contact-panel relative overflow-hidden rounded-[1.75rem] p-7 sm:p-12 lg:p-16">
            <div className="contact-orb" aria-hidden="true" />
            <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-white/70">Vamos conversar?</p>
                <h2 className="mt-6 max-w-4xl text-[clamp(2.8rem,7vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.055em]">
                  Sua empresa pronta para o próximo passo.
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
                  Entre em contato para apresentar a sua necessidade e conhecer a solução mais adequada para a sua empresa.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4 lg:items-stretch">
                <a className="contact-link" href={whatsappUrl} target="_blank" rel="noreferrer">
                  <span><MessageCircle size={20} aria-hidden="true" /> WhatsApp</span>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
                <a className="contact-link" href={instagramUrl} target="_blank" rel="noreferrer">
                  <span><Camera size={20} aria-hidden="true" /> Instagram</span>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
                <p className="mt-2 text-sm text-white/60">(19) 98254-9216</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink py-9 text-white">
        <div className="site-container flex flex-col gap-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
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
