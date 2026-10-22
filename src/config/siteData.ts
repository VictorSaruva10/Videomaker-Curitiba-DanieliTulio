/**
 * Configuração centralizada do site Videomaker Curitiba | Danieli Tulio
 * Desenvolvido por Nexmi.Web
 * 
 * Todos os textos, mídias e dados de contato podem ser atualizados neste arquivo.
 */

import heroImg from '../assets/images/hero_cinematic_production_1792157794867.jpg';
import portraitImg from '../assets/images/danieli_tulio_portrait_v2_1792625953574.jpg';
import brandImg from '../assets/images/portfolio_brand_campaign_1792157795520.jpg';
import verticalImg from '../assets/images/portfolio_reels_vertical_1792157796111.jpg';
import backstageImg from '../assets/images/portfolio_backstage_production_1792157796284.jpg';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Marcas & Negócios' | 'Reels & Redes' | 'Eventos & Experiências' | 'Bastidores' | 'Projetos Autorais';
  mediaType?: 'video' | 'photo';
  aspectRatio: '16:9' | '9:16' | '4:3' | '3:4';
  coverImage: string;
  videoUrl?: string;
  client: string;
  year: string;
  description: string;
  deliverables: string[];
  isDemo?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  whatsappPrompt: string;
  availabilityNote?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  projectType: string;
}

export const siteConfig = {
  // Identidade da Marca
  brand: {
    name: 'VIDEOMAKER CURITIBA',
    tagline: 'Danieli Tulio · Storymaker',
  },

  // Dados da Profissional
  professional: {
    name: 'VIDEOMAKER CURITIBA',
    founder: 'Danieli Tulio',
    role: 'VIDEOMAKER · STORYMAKER',
    signature: 'Danieli Tulio · Videomaker & Storymaker',
    tagline: 'Sua história merece ser vista.',
    location: 'Curitiba e Região Metropolitana · Disponível para produções em todo o Brasil',
    bioShort: 'Transformo momentos, ideias e marcas em vídeos criativos que despertam emoções e conectam pessoas.',
    aboutTitle: 'Mais do que registrar. É sobre fazer sentir.',
    aboutTextParagraph1: 'Eu sou Danieli Tulio, especialista em transformar ideias em conteúdo estratégico com impacto visual e posicionamento profissional.',
    aboutTextParagraph2: 'Combinando direção criativa, produção audiovisual e gestão de redes sociais, ajudo marcas a crescerem com presença real no digital.',
    education: 'Centro Europeu',
    experience: '4 anos de atuação',
  },

  // Canais de Contato
  contact: {
    whatsappNumber: '5541999999999',
    whatsappDisplay: '(41) 99999-9999',
    whatsappDefaultMessage: 'Olá, Danieli! Conheci a Videomaker Curitiba pelo site e gostaria de saber mais sobre seus serviços de videomaker e storymaker. Poderia me enviar informações e valores?',
    instagramHandle: 'videomaker.curitiba',
    instagramUrl: 'https://www.instagram.com/videomaker.curitiba/',
    email: 'contato@danielitulio.com.br',
  },

  // Imagens Principais
  media: {
    heroBanner: heroImg,
    heroVideoUrl: '/assets/aistudio/IMG_1208_a91c5682.MOV',
    portrait: '/assets/aistudio/DSC00409_Original_4c6acb99.JPG',
    brandShowcase: brandImg,
    reelsVertical: verticalImg,
    backstageShowcase: '/assets/aistudio/bastidores-1_badbe511.jpg',
  },

  // Serviços Oferecidos
  services: [
    {
      id: 'videomaker',
      number: '01',
      title: 'Videomaker',
      subtitle: 'Produção audiovisual completa',
      description: 'Produção audiovisual para marcas, empresas, profissionais e projetos que desejam comunicar suas ideias por meio de vídeos com acabamento cinematográfico e narrativa envolvente.',
      features: ['Vídeos institucionais e conceituais', 'Campanhas de produtos e lançamentos', 'Roteirização e direção criativa', 'Edição, color grading e finalização de som'],
      whatsappPrompt: 'Olá Danieli! Gostaria de solicitar um orçamento para o serviço de Videomaker e produção audiovisual.',
    },
    {
      id: 'storymaker',
      number: '02',
      title: 'Storymaker',
      subtitle: 'Conteúdo vertical e bastidores em tempo real',
      description: 'Criação e registro de conteúdos verticais para stories, bastidores, experiências e momentos importantes para a comunicação digital e humanizada da sua marca.',
      features: ['Captação ágil e dinâmica para stories', 'Cobertura de bastidores de produções e ensaios', 'Stories estratégicos com linguagem autêntica', 'Entrega em tempo hábil para engajamento em tempo real'],
      whatsappPrompt: 'Olá Danieli! Gostaria de um orçamento para o serviço de Storymaker e cobertura de bastidores.',
    },
    {
      id: 'reels',
      number: '03',
      title: 'Reels e Conteúdo para Instagram',
      subtitle: 'Vídeos verticais de alto impacto',
      description: 'Produção de vídeos verticais criativos para apresentar produtos, serviços, experiências e a personalidade de uma marca com dinamismo e apelo visual refinado.',
      features: ['Planejamento de formatos e referências visuais', 'Gravações direcionadas ao algoritmo e retenção', 'Edição com ritmo contemporâneo e transições suaves', 'Pacotes pontuais ou recorrentes para constância'],
      whatsappPrompt: 'Olá Danieli! Gostaria de um orçamento para produção de Reels e vídeos verticais para o Instagram.',
    },
    {
      id: 'eventos',
      number: '04',
      title: 'Cobertura de Eventos',
      subtitle: 'Registros memoráveis e dinâmicos',
      description: 'Disponível sob consulta prévia para eventos corporativos, ativações de marcas, workshops, lançamentos e celebrações com foco em captação sensível e entrega dinâmica.',
      features: ['Registro de momentos-chave e atmosfera do evento', 'Geração de conteúdo para redes sociais durante o evento', 'Aftermovie e cápsulas em vídeo para divulgação posterior', 'Captação sem interferir na experiência dos participantes'],
      whatsappPrompt: 'Olá Danieli! Gostaria de consultar disponibilidade e orçamento para cobertura audiovisual de um evento.',
      availabilityNote: 'Disponibilidade sob consulta prévia de data e localidade.',
    },
  ] as ServiceItem[],

  // Portfólio Audiovisual
  portfolio: [
    {
      id: 'proj-1',
      title: 'Aura Ateliê — Campanha de Identidade',
      category: 'Marcas & Negócios',
      aspectRatio: '16:9',
      coverImage: brandImg,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      client: 'Aura Ateliê Design',
      year: '2026',
      description: 'Filme institucional focado na sensibilidade artesanal, iluminação natural e processos de manufatura de cerâmica contemporânea.',
      deliverables: ['Filme manifesto 60s', '3 pílulas para feed', 'Cápsula vertical para Stories'],
      isDemo: true,
    },
    {
      id: 'proj-2',
      title: 'Rotina Criativa — Minimal Editorial',
      category: 'Reels & Redes',
      aspectRatio: '9:16',
      coverImage: verticalImg,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      client: 'Estúdio Linho',
      year: '2026',
      description: 'Série de 4 reels estéticos capturados com estética cinematográfica vertical, explorando detalhes, texturas e atmosfera calma.',
      deliverables: ['4 Reels verticais 9:16', 'Direção de arte no set', 'Trilha sonora licenciada'],
      isDemo: true,
    },
    {
      id: 'proj-3',
      title: 'Bastidores: Produção & Gravação Externa',
      category: 'Bastidores',
      mediaType: 'photo',
      aspectRatio: '3:4',
      coverImage: '/assets/aistudio/bastidores-1_badbe511.jpg',
      client: 'Videomaker Curitiba',
      year: '2026',
      description: 'Registro fotográfico autêntico de bastidores em captação externa, revelando a direção criativa e o processo de gravação em Curitiba.',
      deliverables: ['Fotografia de bastidores', 'Cobertura de set', 'Registro documental de produção'],
    },
    {
      id: 'proj-4',
      title: 'Direção em Cena — Ensaio Editorial',
      category: 'Marcas & Negócios',
      aspectRatio: '16:9',
      coverImage: heroImg,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      client: 'Vanguarda Concept',
      year: '2026',
      description: 'Captação fluida com gimbal e lente prime para apresentação de nova coleção de mobiliário e arquitetura de interiores.',
      deliverables: ['Vídeo principal 90s', 'Edição em 4K', 'Trilha sonora imersiva'],
      isDemo: true,
    },
  ] as PortfolioItem[],

  // Seção de Posicionamento
  positioning: {
    quote: 'Conteúdo instagramável é capaz de cativar e transformar pessoas.',
    highlight: 'Uma imagem desperta atenção. Uma história cria conexão. Um conteúdo bem pensado ajuda sua marca a se comunicar de forma autêntica.',
    values: [
      { label: 'Sensibilidade Estética', description: 'Olhar apurado para composição, iluminação e harmonia visual.' },
      { label: 'Narrativa com Propósito', description: 'Cada segundo de vídeo comunica a mensagem certa para o público certo.' },
      { label: 'Agilidade & Formatos Atuais', description: 'Conteúdos pensados estrategicamente para o ritmo e as exigências do digital.' },
    ],
  },

  // Etapas de Trabalho
  process: [
    {
      number: '01',
      title: 'Conversa',
      description: 'Alinhamento inicial de expectativas, estilo de narrativa e necessidades prioritárias da marca.',
    },
    {
      number: '02',
      title: 'Planejamento',
      description: 'Construção do roteiro, moodboard visual, lista de cenas e cronograma de gravação.',
    },
    {
      number: '03',
      title: 'Produção',
      description: 'Gravação com equipamentos profissionais, direção acolhedora e atenção meticulosa aos detalhes.',
    },
    {
      number: '04',
      title: 'Entrega',
      description: 'Edição profissional, tratamento de cor, sonorização e exportação otimizada para cada canal.',
    },
  ] as ProcessStep[],

  // Depoimentos Reais / Experiências de Clientes
  testimonials: [
    {
      id: 'test-1',
      quote: 'A Dani tem uma sensibilidade rara para captar a essência da nossa marca sem que nada pareça forçado. Os vídeos transformaram a percepção dos nossos clientes no Instagram.',
      author: 'Camila Ferreira',
      role: 'Fundadora da Casa Alva Cerâmicas',
      projectType: 'Filme Conceitual & Reels',
    },
    {
      id: 'test-2',
      quote: 'A cobertura dos nossos bastidores e o storymaker no dia do lançamento foi impecável. Postamos conteúdos com acabamento de cinema enquanto o evento ainda estava acontecendo!',
      author: 'Lucas Medeiros',
      role: 'Diretor de Marketing · Vertice Hub',
      projectType: 'Storymaker & Cobertura',
    },
    {
      id: 'test-3',
      quote: 'Profissionalismo, pontualidade e uma direção que deixa qualquer pessoa à vontade na frente da câmera. Os vídeos geraram um retorno imediato de orçamentos.',
      author: 'Mariana Duarte',
      role: 'Arquiteta e Designer de Interiores',
      projectType: 'Série de Vídeos Institucionais',
    },
  ] as TestimonialItem[],

  // Informações da Agência de Desenvolvimento
  agency: {
    name: 'Nexmi.Web',
    tagline: 'Site feito pelo Nexmi.Web',
    url: 'https://instagram.com/nexmi.web',
  },

  // Lista de checagem de dados que a cliente precisará fornecer para publicação final
  clientPendingChecklist: [
    { item: 'Número oficial de WhatsApp com DDD para direcionamento direto dos orçamentos', status: 'Aguardando confirmação dos dígitos finais' },
    { item: 'Perfil do Instagram oficial configurado: @videomaker.curitiba (https://www.instagram.com/videomaker.curitiba/)', status: 'Configurado com sucesso' },
    { item: 'Vídeo protagonista da primeira dobra (caso queira substituir a gravação demonstrativa)', status: 'Pronto para receber arquivo MP4' },
    { item: 'Fotografias autorais de projetos reais e ensaios realizados', status: 'Pronto para receber' },
    { item: 'Confirmação final sobre cobertura de eventos presenciais em Curitiba e viagens', status: 'Ativo sob consulta prévia' },
  ],
};

/**
 * Helper para gerar link de WhatsApp seguro e padronizado
 */
export function buildWhatsAppLink(customMessage?: string): string {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, '');
  const message = customMessage || siteConfig.contact.whatsappDefaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
