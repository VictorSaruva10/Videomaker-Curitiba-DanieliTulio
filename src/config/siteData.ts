/**
 * Configuração centralizada do site Videomaker Curitiba | Danieli Tulio
 * Desenvolvido por Nexmi.Web
 *
 * Todos os textos, mídias e dados de contato podem ser atualizados neste arquivo.
 */

export interface PortfolioItem {
  id: string;
  title: string;
  category:
    | "Marcas & Negócios"
    | "Reels & Redes"
    | "Eventos & Experiências"
    | "Bastidores"
    | "Projetos Autorais";
  mediaType?: "video" | "photo";
  aspectRatio: "16:9" | "9:16" | "4:3" | "3:4";
  coverImage: string;
  coverFit?: "cover" | "contain";
  videoUrl?: string;
  instagramUrl?: string;
  whatsappPrompt?: string;
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
  previewImage?: string;
  previewAlt?: string;
  previewVideo?: string;
  whatsappPrompt: string;
  buttonLabel: string;
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
    name: "VIDEOMAKER CURITIBA",
    tagline: "Danieli Tulio · Storymaker",
  },

  // Dados da Profissional
  professional: {
    name: "VIDEOMAKER CURITIBA",
    founder: "Danieli Tulio",
    role: "VIDEOMAKER · STORYMAKER",
    signature: "Danieli Tulio · Videomaker & Storymaker",
    tagline: "Sua história merece ser vista.",
    location:
      "Curitiba e Região Metropolitana · Disponível para produções em todo o Brasil",
    bioShort:
      "Produção de vídeos para redes sociais e cobertura de eventos como Storymaker, com criatividade, estratégia e narrativas que aproximam marcas e pessoas.",
    aboutTitle: "Sou Danieli Tulio, videomaker e storymaker em Curitiba.",
    aboutTextParagraph1:
      "Minha trajetória começou em 2021, na área de social media, e em 2024 passei a atuar profissionalmente com produção audiovisual.",
    aboutTextParagraph2:
      "Essa experiência me permite unir estratégia de conteúdo, criatividade e narrativa visual para produzir vídeos para redes sociais e registrar experiências em tempo real. Acredito no poder do vídeo para transmitir ideias, despertar emoções e criar conexões entre marcas e pessoas.",
    education: "Centro Europeu",
    experience: "4 anos de atuação",
  },

  // Canais de Contato
  contact: {
    whatsappNumber: "554199433790",
    whatsappDisplay: "+55 (41) 9943-3790",
    whatsappDefaultMessage:
      "Olá, Danieli! Conheci a Videomaker Curitiba pelo site e gostaria de saber mais sobre seus serviços de videomaker e storymaker. Poderia me enviar informações e valores?",
    instagramHandle: "videomaker.curitiba",
    instagramUrl: "https://www.instagram.com/videomaker.curitiba/",
    tiktokUrl: "https://www.tiktok.com/@videomaker.curitiba",
    email: "tulio.danieli@gmail.com",
  },

  // Imagens Principais
  media: {
    portrait: "/assets/danieli-social-optimized.jpg",
  },

  // Serviços Oferecidos
  services: [
    {
      id: "producao-videos",
      number: "01",
      title: "Produção de vídeos para redes sociais",
      subtitle: "Conteúdo estratégico para marcas",
      description:
        "Produção de vídeos criativos e estratégicos para marcas, empresas e profissionais que desejam fortalecer sua presença digital e se conectar com seu público.",
      features: [
        "Reels para Instagram",
        "Vídeos para TikTok",
        "Vídeos para YouTube, incluindo Shorts e outros formatos, conforme o projeto",
        "Vídeos institucionais e comerciais",
        "Conteúdos criativos inspirados em tendências das redes sociais",
        "Vídeos com storytelling, narrativa visual e apelo emocional",
      ],
      whatsappPrompt:
        "Olá, Danieli! Quero produzir meus vídeos para redes sociais. Podemos conversar sobre o meu projeto?",
      buttonLabel: "Quero produzir meus vídeos.",
    },
    {
      id: "storymaker-eventos",
      number: "02",
      title: "Storymaker para eventos",
      subtitle: "Cobertura vertical em tempo real",
      description:
        "Cobertura de eventos com produção de conteúdo vertical, espontâneo e dinâmico, pensado para compartilhar momentos e experiências enquanto acontecem.",
      features: [
        "Stories para Instagram",
        "Bastidores e momentos importantes",
        "Cobertura de eventos corporativos",
        "Eventos de marcas e experiências",
        "Conteúdos verticais para publicação durante ou logo após o evento",
      ],
      whatsappPrompt:
        "Olá, Danieli! Quero contratar uma Storymaker para um evento. Podemos conversar sobre disponibilidade e detalhes?",
      buttonLabel: "Quero contratar uma Storymaker.",
    },
  ] as ServiceItem[],

  // Portfólio Audiovisual
  portfolio: [
    {
      id: "proj-3",
      title: "Bastidores: Produção & Gravação Externa",
      category: "Bastidores",
      mediaType: "photo",
      aspectRatio: "3:4",
      coverImage: "/assets/aistudio/bastidores-1_badbe511.jpg",
      client: "Videomaker Curitiba",
      year: "2026",
      description:
        "Registro fotográfico autêntico de bastidores em captação externa, revelando a direção criativa e o processo de gravação em Curitiba.",
      deliverables: [
        "Fotografia de bastidores",
        "Cobertura de set",
        "Registro documental de produção",
      ],
    },
    {
      id: "proj-5",
      title: "Lojão da Felicidade — Vídeo de Marca",
      category: "Reels & Redes",
      aspectRatio: "9:16",
      coverImage: "/assets/stitch.png",
      coverFit: "contain",
      videoUrl: "/assets/videos/lojaodaffelicidade.mp4",
      client: "Lojão da Felicidade",
      year: "2026",
      description: "Produção audiovisual para a marca Lojão da Felicidade.",
      deliverables: ["Vídeo de marca"],
    },
    {
      id: "proj-pequenas-festas",
      title: "Fachada — Pequenas Festas",
      category: "Reels & Redes",
      mediaType: "video",
      aspectRatio: "9:16",
      coverImage: "/assets/casamento-foto.png",
      videoUrl: "/assets/videos/casamento.mp4",
      instagramUrl: "https://www.instagram.com/reels/DDU6J2XRIV0/",
      whatsappPrompt:
        'Olá Danieli! Assisti ao projeto "Fachada — Pequenas Festas" no seu site e gostaria de saber se podemos desenvolver algo semelhante para a minha marca.',
      client: "Pequenas Festas",
      year: "2026",
      description: "Registro vertical da fachada e dos detalhes externos do espaço.",
      deliverables: ["Fotografia vertical"],
    },
  ] as PortfolioItem[],

  // Seção de Posicionamento
  positioning: {
    quote:
      "Conteúdo que encanta o olhar, desperta emoções e transforma a maneira como marcas se conectam com pessoas.",
    highlight:
      "Mais do que produzir imagens bonitas, é sobre contar histórias que despertam interesse, traduzem essências e permanecem na memória. Cada detalhe importa quando a intenção é comunicar com autenticidade.",
    values: [
      {
        label: "Atenção que Desperta",
        description:
          "Em meio a tantos estímulos, a estética, o ritmo e a criatividade transformam segundos em oportunidades de despertar curiosidade e conquistar olhares.",
      },
      {
        label: "Conexões que Aproximam",
        description:
          "Histórias bem contadas criam identificação, despertam emoções e aproximam marcas de pessoas de forma genuína.",
      },
      {
        label: "Valor que se Percebe",
        description:
          "Cada escolha visual comunica algo. Da captação à edição, o cuidado com os detalhes fortalece a identidade da marca e transmite a qualidade que ela deseja representar.",
      },
    ],
  },

  // Etapas de Trabalho
  process: [
    {
      number: "01",
      title: "Briefing",
      description:
        "Entender a necessidade, o objetivo e o formato do conteúdo.",
    },
    {
      number: "02",
      title: "Planejamento",
      description: "Definir a proposta criativa e organizar a produção.",
    },
    {
      number: "03",
      title: "Produção",
      description: "Realizar a captação de acordo com o projeto contratado.",
    },
    {
      number: "04",
      title: "Entrega",
      description:
        "Finalizar e entregar os conteúdos conforme o escopo combinado.",
    },
  ] as ProcessStep[],

  // Depoimentos Reais / Experiências de Clientes
  testimonials: [
    {
      id: "test-1",
      quote:
        "Trabalho incrível! A sensibilidade para captar cada detalhe fez toda a diferença. O resultado ficou lindo e superou minhas expectativas.",
    },
    {
      id: "test-2",
      quote:
        "Uma profissional dedicada, criativa e muito atenta aos detalhes. Todo o processo foi leve, organizado e profissional.",
    },
    {
      id: "test-3",
      quote:
        "Os vídeos ficaram modernos, dinâmicos e com a identidade da nossa marca. Exatamente o que buscávamos para nossas redes sociais!",
    },
    {
      id: "test-4",
      quote:
        "Conseguiu transformar momentos especiais em lembranças que vamos guardar com muito carinho. Ficou maravilhoso!",
    },
    {
      id: "test-5",
      quote:
        "A qualidade das imagens, a edição e o cuidado com cada cena são impressionantes. Dá para perceber o carinho colocado em cada projeto.",
    },
    {
      id: "test-6",
      quote:
        "Ela conseguiu traduzir a essência da nossa marca em imagens. O resultado ficou autêntico, criativo e muito bem produzido.",
    },
    {
      id: "test-8",
      quote:
        "Os stories ficaram espontâneos, envolventes e com uma estética incrível. Cada detalhe ajudou a contar nossa história de um jeito especial.",
    },
    {
      id: "test-9",
      quote:
        "Além do talento, o diferencial está no olhar atento e na dedicação. Cada cena teve propósito e o resultado ficou impecável.",
    },
    {
      id: "test-10",
      quote:
        "Se você procura uma profissional criativa, comprometida e apaixonada pelo que faz, vale muito a pena conhecer o trabalho da Danieli!",
    },
  ] as TestimonialItem[],

  // Informações da Agência de Desenvolvimento
  agency: {
    name: "Nexmi.Web",
    tagline: "Site feito pelo Nexmi.Web",
    url: "https://instagram.com/nexmi.web",
  },

  // Lista de checagem de dados que a cliente precisará fornecer para publicação final
  clientPendingChecklist: [
    {
      item: "Número oficial de WhatsApp com DDD para direcionamento direto dos orçamentos",
      status: "Aguardando confirmação dos dígitos finais",
    },
    {
      item: "Perfil do Instagram oficial configurado: @videomaker.curitiba (https://www.instagram.com/videomaker.curitiba/)",
      status: "Configurado com sucesso",
    },
    {
      item: "Vídeo protagonista da primeira dobra (caso queira substituir a gravação demonstrativa)",
      status: "Pronto para receber arquivo MP4",
    },
    {
      item: "Fotografias autorais de projetos reais e ensaios realizados",
      status: "Pronto para receber",
    },
    {
      item: "Confirmação final sobre cobertura de eventos presenciais em Curitiba e viagens",
      status: "Ativo sob consulta prévia",
    },
  ],
};

/**
 * Helper para gerar link de WhatsApp seguro e padronizado
 */
export function buildWhatsAppLink(customMessage?: string): string {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  const message = customMessage || siteConfig.contact.whatsappDefaultMessage;
  return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
}
