import {
  ArrowUpRight,
  Check,
  ClipboardList,
  GraduationCap,
  Package,
  Store,
  UserPlus,
  Users,
} from 'lucide-react';
import { Reveal } from '@/components/reveal';

const pillars = [
  { icon: UserPlus, title: 'Recrutamento & seleção', text: 'Gestão administrativa de temporários' },
  { icon: Store, title: 'Treinamento de vendas', text: 'Atendimento, conversão e fidelização' },
  { icon: Users, title: 'Desenvolvimento de lideranças', text: 'Equipes preparadas para resultados' },
];

const program = [
  {
    title: 'Recrutamento e seleção de profissionais temporários',
    items: [
      'Divulgação de vagas, atração de candidatos e triagem de currículos.',
      'Entrevistas e seleção conforme o perfil da loja e da função.',
      'Apoio na organização do processo admissional.',
      'Vendedores, operadores de caixa, estoquistas, auxiliares e atendentes.',
    ],
  },
  {
    title: 'Acompanhamento administrativo dos contratos de final de ano',
    items: [
      'Controle de dias e horas trabalhadas, jornadas, escalas e registros de ponto.',
      'Organização de informações sobre faltas, atrasos e horas extras.',
      'Conferência e encaminhamento de informações à contabilidade ou ao departamento pessoal responsável.',
      'Acompanhamento de prazos contratuais e organização dos procedimentos de encerramento e desligamento.',
    ],
    note: 'O escopo é definido conforme a modalidade de contratação e as responsabilidades legais de cada empresa.',
  },
  {
    title: 'Treinamento de vendas e atendimento ao cliente',
    items: [
      'Abordagem, comunicação e experiência de compra.',
      'Identificação das necessidades do cliente e argumentação comercial.',
      'Como lidar com objeções e aumentar a conversão de vendas.',
      'Atendimento em períodos de grande movimento.',
      'Pós-venda e fidelização de clientes.',
    ],
  },
  {
    title: 'Treinamento de liderança para gerentes e supervisores',
    items: [
      'Comunicação, direcionamento e distribuição de tarefas.',
      'Organização da rotina e acompanhamento de metas.',
      'Gestão de conflitos, feedback e desenvolvimento de colaboradores.',
      'Engajamento e condução de equipes em períodos de alta demanda.',
    ],
  },
  {
    title: 'Apoio em RH e processos administrativos',
    items: [
      'Organização de documentos e informações dos colaboradores.',
      'Apoio nos processos de admissão, integração e desligamento.',
      'Organização de escalas e controles administrativos.',
      'Orientações e treinamentos de Segurança e Saúde no Trabalho conforme a necessidade.',
    ],
  },
];

const reasons = [
  'Mais agilidade na formação das equipes.',
  'Processos seletivos e informações organizados.',
  'Profissionais preparados para atender e vender.',
  'Lideranças mais capacitadas e rotinas administrativas mais estruturadas.',
  'Soluções flexíveis conforme o porte e a realidade de cada negócio.',
];

const formats = [
  {
    icon: ClipboardList,
    title: 'Contratação de temporários',
    text: 'Recrutamento e seleção, com possibilidade de acompanhamento administrativo das jornadas, escalas e prazos contratuais.',
  },
  {
    icon: GraduationCap,
    title: 'Capacitação de equipes',
    text: 'Treinamentos em turma para lojistas e colaboradores: vendas, atendimento ao cliente e liderança.',
  },
  {
    icon: Package,
    title: 'Pacote integrado de final de ano',
    text: 'Combinação de recrutamento, organização das informações dos temporários e treinamento, conforme escopo acordado.',
  },
];

export function CommerceProgram() {
  const proposalUrl =
    'https://wa.me/5519982549216?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20Programa%20Especial%20de%20Apoio%20ao%20Com%C3%A9rcio%20da%20CNOP.';

  return (
    <section id="comercio" className="scroll-mt-20 border-t border-line bg-canvas py-section">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-8 border-b border-line pb-12 lg:grid-cols-12 lg:items-end">
          <Reveal direction="left" className="lg:col-span-8">
            <h2 className="section-title">
              Prepare sua empresa para vender mais <span className="font-editorial font-normal normal-case text-gold">no final do ano.</span>
            </h2>
          </Reveal>
          <Reveal direction="right" delay={140} className="lg:col-span-4 lg:pb-2">
            <p className="text-lg leading-[1.75] text-ink-soft">
              Uma parceria para fortalecer o comércio local, organizar equipes e transformar o movimento de fim de ano em melhores resultados.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 100} className="h-full">
              <div className="commerce-pillar">
                <span className="fact-icon"><Icon size={26} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal direction="left" className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h3 className="commerce-heading">Programa especial de apoio ao comércio</h3>
              <p className="mt-5 text-xl font-semibold leading-snug text-ink-soft">
                Reforce sua equipe. Organize seus processos. Potencialize suas vendas.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:col-span-8">
            {program.map((step, index) => (
              <Reveal key={step.title} delay={60}>
                <article className="commerce-step">
                  <span className="commerce-step-number">{index + 1}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <ul>
                      {step.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    {step.note && <p className="commerce-note">{step.note}</p>}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal direction="left" className="lg:col-span-5">
            <h3 className="commerce-heading">Por que contar com a CNOP?</h3>
            <ul className="mt-8 grid gap-4">
              {reasons.map((reason) => (
                <li key={reason} className="commerce-reason">
                  <span><Check size={16} aria-hidden="true" /></span>
                  {reason}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal direction="right">
              <h3 className="commerce-heading">Possibilidades de atendimento</h3>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {formats.map(({ icon: Icon, title, text }, index) => (
                <Reveal key={title} delay={index * 100} className="h-full">
                  <div className="commerce-pillar commerce-format">
                    <span className="fact-icon"><Icon size={24} aria-hidden="true" /></span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={100} className="mt-20">
          <div className="commerce-cta">
            <div className="flex-1">
              <h3>Vamos preparar sua empresa para o final do ano?</h3>
              <p>
                Entre em contato para conversar sobre as necessidades do seu estabelecimento ou conhecer uma proposta para um grupo de lojistas.
              </p>
              <p className="commerce-cta-place">Piracicaba e região</p>
            </div>
            <a className="button button-dark shrink-0" href={proposalUrl} target="_blank" rel="noreferrer">
              Solicitar proposta <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted">
            Os serviços e responsabilidades serão formalizados em proposta específica, considerando a modalidade contratual, a legislação aplicável e a atuação da contabilidade/departamento pessoal responsável.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
