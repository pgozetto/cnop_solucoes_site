'use client';

import { useState } from 'react';

type GlyphName = 'shield' | 'briefcase' | 'file' | 'laptop';

function CategoryGlyph({ name }: { name: GlyphName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === 'shield' && <><path d="M12 3 19 6v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>}
      {name === 'briefcase' && <><rect x="4" y="7" width="16" height="12" rx="1.5" /><path d="M9 7V5h6v2M4 11h16M10 11v2h4v-2" /></>}
      {name === 'file' && <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h4M9 13h6M9 17h6" /></>}
      {name === 'laptop' && <><rect x="4" y="5" width="16" height="11" rx="1" /><path d="M2 19h20M8 19h8" /></>}
    </svg>
  );
}

type SolutionItem = {
  title: string;
  description: string;
};

type SolutionCategory = {
  id: string;
  title: string;
  description: string;
  accent: 'orange' | 'pink' | 'purple' | 'gold';
  icon: GlyphName;
  items: SolutionItem[];
};

const solutionCategories: SolutionCategory[] = [
  {
    id: 'sst',
    title: 'Segurança do Trabalho e SST',
    description: 'Estruturação de rotinas preventivas, documentação e suporte à conformidade em segurança e saúde no trabalho.',
    accent: 'pink',
    icon: 'shield',
    items: [
      { title: 'PGR / GRO', description: 'Organização do gerenciamento de riscos ocupacionais, com identificação de perigos, definição de medidas e acompanhamento das ações.' },
      { title: 'AEP e gestão de riscos', description: 'Avaliação ergonômica preliminar e apoio à gestão dos riscos que podem afetar a saúde, a segurança e a rotina da equipe.' },
      { title: 'NR-01 e riscos psicossociais', description: 'Apoio na organização das exigências da NR-01 e em ações preventivas relacionadas aos fatores psicossociais do trabalho.' },
      { title: 'PCMSO', description: 'Suporte na organização e no acompanhamento do programa de saúde ocupacional, em alinhamento às necessidades da empresa.' },
      { title: 'LTCAT', description: 'Elaboração e atualização de documentação técnica para apoiar análises previdenciárias e registros ocupacionais.' },
      { title: 'eSocial SST', description: 'Organização das informações e acompanhamento dos eventos de segurança e saúde no trabalho enviados ao eSocial.' },
      { title: 'CIPA', description: 'Suporte para estruturação, treinamento e acompanhamento das atividades da Comissão Interna de Prevenção de Acidentes.' },
      { title: 'DDS', description: 'Diálogos diários de segurança objetivos, voltados à prevenção e à conscientização da equipe.' },
      { title: 'Gestão de EPI', description: 'Controle de entrega, registros e acompanhamento dos equipamentos de proteção individual utilizados pelos colaboradores.' },
      { title: 'Treinamentos de NRs', description: 'Capacitações alinhadas às Normas Regulamentadoras aplicáveis à atividade e à realidade operacional da empresa.' },
      { title: 'Integração de segurança', description: 'Apresentação inicial das regras, riscos e boas práticas de segurança para novos colaboradores e prestadores.' },
      { title: 'Auditorias e adequações', description: 'Análise das rotinas existentes, identificação de pontos de melhoria e apoio à adequação de processos e documentos.' },
    ],
  },
  {
    id: 'rh',
    title: 'Gestão de Pessoas e RH',
    description: 'Apoio prático para estruturar pessoas, lideranças e rotinas de Recursos Humanos com mais clareza e consistência.',
    accent: 'purple',
    icon: 'briefcase',
    items: [
      { title: 'Terceirização e suporte de RH', description: 'Apoio especializado às demandas de RH, com suporte adaptado à estrutura e ao momento da empresa.' },
      { title: 'Recrutamento e seleção', description: 'Condução de processos para atrair, avaliar e selecionar profissionais alinhados à vaga e à cultura da organização.' },
      { title: 'Integração de colaboradores', description: 'Organização da chegada de novos profissionais para acelerar a adaptação e apresentar a empresa de forma consistente.' },
      { title: 'Gestão de pessoas', description: 'Apoio a práticas que fortalecem comunicação, acompanhamento e desenvolvimento das equipes.' },
      { title: 'Desenvolvimento de líderes', description: 'Treinamentos e orientações para preparar lideranças para decisões, feedbacks e condução de equipes.' },
      { title: 'Treinamentos', description: 'Capacitações planejadas para desenvolver competências técnicas e comportamentais relevantes à operação.' },
      { title: 'Gestão de conflitos', description: 'Apoio na condução de conversas e na criação de caminhos mais claros para prevenir e resolver conflitos.' },
      { title: 'Processos de admissão e desligamento', description: 'Organização das etapas necessárias para entradas e saídas de colaboradores com mais segurança e padronização.' },
      { title: 'Acompanhamento de afastamentos e atestados', description: 'Suporte à organização dos registros e ao acompanhamento das informações relacionadas a ausências e afastamentos.' },
    ],
  },
  {
    id: 'dp',
    title: 'Departamento Pessoal e Processos',
    description: 'Rotinas organizadas para dar mais previsibilidade às informações, documentos e controles do dia a dia.',
    accent: 'gold',
    icon: 'file',
    items: [
      { title: 'Organização de rotinas', description: 'Mapeamento e estruturação das atividades recorrentes para tornar os processos mais claros e previsíveis.' },
      { title: 'Controle de ponto', description: 'Apoio ao acompanhamento dos registros de jornada, com atenção à consistência das informações.' },
      { title: 'Ponto digital', description: 'Orientação para adoção e organização de soluções digitais que simplificam o registro de ponto.' },
      { title: 'Gestão de jornada e frequência', description: 'Acompanhamento de horários, ocorrências e frequência para apoiar uma rotina mais organizada.' },
      { title: 'Apoio às rotinas de DP', description: 'Suporte operacional às tarefas de Departamento Pessoal, conforme as necessidades da empresa.' },
      { title: 'Organização de documentos', description: 'Estruturação de arquivos e informações para facilitar consultas, controles e continuidade das rotinas.' },
      { title: 'Padronização de processos internos', description: 'Criação de fluxos e referências para reduzir dúvidas, retrabalho e variações nas atividades internas.' },
    ],
  },
  {
    id: 'digitais',
    title: 'Soluções Digitais',
    description: 'Ferramentas e fluxos digitais para centralizar informações e tornar a gestão mais simples de acompanhar.',
    accent: 'orange',
    icon: 'laptop',
    items: [
      { title: 'Gestão digital de EPI', description: 'Organização eletrônica dos registros de entrega, controle e acompanhamento de equipamentos de proteção.' },
      { title: 'Assinaturas digitais', description: 'Apoio à adoção de assinaturas digitais para dar mais agilidade e rastreabilidade aos documentos.' },
      { title: 'Controle de documentos', description: 'Estruturação de documentos digitais para facilitar acesso, atualização e acompanhamento de pendências.' },
      { title: 'Gestão de ponto', description: 'Apoio no uso de recursos digitais para acompanhar registros de jornada e informações de frequência.' },
      { title: 'Organização de informações e indicadores', description: 'Centralização de dados e indicadores para apoiar análises mais claras e decisões do dia a dia.' },
    ],
  },
];

type SolutionsAccordionProps = {
  whatsappNumber: string;
};

export function SolutionsAccordion({ whatsappNumber }: SolutionsAccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const getWhatsappUrl = (serviceName: string) => {
    const message = `Olá, gostaria de saber mais sobre ${serviceName} da CNOP Soluções.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="solutions-directory">
      {solutionCategories.map((category) => {
        return (
          <section
            key={category.id}
            className="solutions-category"
            data-accent={category.accent}
            aria-labelledby={`${category.id}-title`}
          >
            <div className="solutions-category-heading">
              <span className="solutions-category-icon" aria-hidden="true">
                <CategoryGlyph name={category.icon} />
              </span>
              <div>
                <p className="eyebrow"><span /> Área de atuação</p>
                <h3 id={`${category.id}-title`} className="solutions-category-title">{category.title}</h3>
                <p className="solutions-category-description">{category.description}</p>
              </div>
            </div>

            <div className="solutions-list">
              {category.items.map((item) => {
                const itemId = `${category.id}-${item.title}`;
                const isOpen = openItem === itemId;

                return (
                  <article className="solution-item" data-open={isOpen} key={itemId}>
                    <button
                      type="button"
                      className="solution-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`${itemId}-content`}
                      onClick={() => setOpenItem(isOpen ? null : itemId)}
                    >
                      <span>
                        <strong>{item.title}</strong>
                        <small>{isOpen ? 'Fechar detalhes' : 'Ver detalhes'}</small>
                      </span>
                      <span className="solution-indicator" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                      </span>
                    </button>

                    <div className="solution-answer" id={`${itemId}-content`} role="region" aria-label={`Detalhes sobre ${item.title}`}>
                      <div className="solution-answer-inner">
                        <p>{item.description}</p>
                        <a
                          className="solution-whatsapp"
                          href={getWhatsappUrl(item.title)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.2A8 8 0 1 1 20 11.5Z" /><path d="M8.5 9.5c.3 2 1.4 3.4 3.3 4.3l1.3-1.2 1.7.8c.2.1.3.3.2.5-.2.7-.8 1.2-1.6 1.1-3.7-.5-6.4-3.2-6.9-6.9-.1-.8.4-1.4 1.1-1.6.2-.1.4 0 .5.2l.8 1.7-1.2 1.1Z" /></svg>
                          Falar sobre esta solução
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
