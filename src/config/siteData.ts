/**
 * Configuração centralizada do site Videomaker Curitiba | Danieli Tulio
 * Desenvolvido por Nexmi.Web
 * 
 * Todos os textos, mídias e dados de contato podem ser atualizados neste arquivo.
 */

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Marcas & Negócios' | 'Reels & Redes' | 'Eventos & Experiências' | 'Bastidores' | 'Projetos Autorais';
  mediaType?: 'video' | 'photo';
  aspectRatio: '16:9' | '9:16' | '4:3' | '3:4';
  coverImage: string;
  coverFit?: 'cover' | 'contain';
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
    bioShort: 'Crio vídeos para marcas, empresas e redes sociais, com narrativas autênticas que despertam emoções e aproximam pessoas.',
    aboutTitle: 'Mais do que registrar. É sobre fazer sentir.',
    aboutTextParagraph1: 'Eu sou Danieli Tulio, especialista em transformar ideias em conteúdo estratégico com impacto visual e posicionamento profissional.',
    aboutTextParagraph2: 'Combinando direção criativa, produção audiovisual e criação de conteúdo para redes sociais, ajudo marcas a comunicar sua essência com autenticidade.',
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
    portrait: '/assets/danieli-social-optimized.jpg',
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
      id: 'proj-5',
      title: 'Lojão da Felicidade — Vídeo de Marca',
      category: 'Reels & Redes',
      aspectRatio: '9:16',
      coverImage: '/assets/lojaodaffelicidade-cover-optimized.jpg',
      coverFit: 'contain',
      videoUrl: '/assets/lojaodaffelicidade.mp4',
      client: 'Lojão da Felicidade',
      year: '2026',
      description: 'Produção audiovisual para a marca Lojão da Felicidade.',
      deliverables: ['Vídeo de marca'],
    },
  ] as PortfolioItem[],

  // Seção de Posicionamento
  positioning: {
    quote: 'Conteúdo que encanta o olhar, desperta emoções e transforma a maneira como marcas se conectam com pessoas.',
    highlight: 'Mais do que produzir imagens bonitas, é sobre contar histórias que despertam interesse, traduzem essências e permanecem na memória. Cada detalhe importa quando a intenção é comunicar com autenticidade.',
    values: [
      { label: 'Atenção que Desperta', description: 'Em meio a tantos estímulos, a estética, o ritmo e a criatividade transformam segundos em oportunidades de despertar curiosidade e conquistar olhares.' },
      { label: 'Conexões que Aproximam', description: 'Histórias bem contadas criam identificação, despertam emoções e aproximam marcas de pessoas de forma genuína.' },
      { label: 'Valor que se Percebe', description: 'Cada escolha visual comunica algo. Da captação à edição, o cuidado com os detalhes fortalece a identidade da marca e transmite a qualidade que ela deseja representar.' },
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
      quote: 'Trabalho incrível! A sensibilidade para captar cada detalhe fez toda a diferença. O resultado ficou lindo e superou minhas expectativas.',
    },
    {
      id: 'test-2',
      quote: 'Uma profissional dedicada, criativa e muito atenta aos detalhes. Todo o processo foi leve, organizado e profissional.',
    },
    {
      id: 'test-3',
      quote: 'Os vídeos ficaram modernos, dinâmicos e com a identidade da nossa marca. Exatamente o que buscávamos para nossas redes sociais!',
    },
    {
      id: 'test-4',
      quote: 'Conseguiu transformar momentos especiais em lembranças que vamos guardar com muito carinho. Ficou maravilhoso!',
    },
    {
      id: 'test-5',
      quote: 'A qualidade das imagens, a edição e o cuidado com cada cena são impressionantes. Dá para perceber o carinho colocado em cada projeto.',
    },
    {
      id: 'test-6',
      quote: 'Ela conseguiu traduzir a essência da nossa marca em imagens. O resultado ficou autêntico, criativo e muito bem produzido.',
    },
    {
      id: 'test-8',
      quote: 'Os stories ficaram espontâneos, envolventes e com uma estética incrível. Cada detalhe ajudou a contar nossa história de um jeito especial.',
    },
    {
      id: 'test-9',
      quote: 'Além do talento, o diferencial está no olhar atento e na dedicação. Cada cena teve propósito e o resultado ficou impecável.',
    },
    {
      id: 'test-10',
      quote: 'Se você procura uma profissional criativa, comprometida e apaixonada pelo que faz, vale muito a pena conhecer o trabalho da Danieli!',
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
