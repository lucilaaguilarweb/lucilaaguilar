export interface PublicationImage {
  filename: string;
  alt: string;
}

export interface Publication {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  type: "magazine" | "catalog" | "exhibition" | "festival" | "book" | "web";
  coverImage?: string;
  images?: PublicationImage[];
  folderPath?: string;
  link?: string;
}

export const publicationsData: Publication[] = [
  {
    id: "arquine-revista",
    slug: "arquine-revista",
    title: "ARQUINE REVISTA",
    subtitle: "Revista especializada en arquitectura",
    description:
      "Publicación especializada que destaca nuestro trabajo en arquitectura sustentable y el uso innovador del bambú en proyectos contemporáneos.",
    year: "2024",
    type: "magazine",
    coverImage: "/images/medios/arquine-revista/01-portada.jpg",
    folderPath: "medios/arquine-revista",
    images: [
      {
        filename: "01-portada.jpg",
        alt: "Portada Revista Arquine",
      },
      {
        filename: "02-pagina-1.jpg",
        alt: "Revista Arquine página 1",
      },
      {
        filename: "03-pagina-2.jpg",
        alt: "Revista Arquine página 2",
      },
      {
        filename: "04-pagina-3.jpg",
        alt: "Revista Arquine página 3",
      },
      {
        filename: "05-pagina-4.jpg",
        alt: "Revista Arquine página 4",
      },
    ],
  },
  {
    id: "arquine-libro-2017-2018",
    slug: "arquine-libro-2017-2018",
    title: "ARQUINE LIBRO 2017-2018",
    subtitle: "Compendio anual de arquitectura",
    description:
      "Libro anual que recopila los proyectos más destacados del año, incluyendo nuestras propuestas de arquitectura sustentable.",
    year: "2018",
    type: "book",
    coverImage: "/images/medios/arquine-libro-2017-2018/01-portada.jpg",
    folderPath: "medios/arquine-libro-2017-2018",
    images: [
      {
        filename: "01-portada.jpg",
        alt: "Portada Arquine Libro 2017-2018",
      },
      { filename: "02-lateral.jpg", alt: "Vista lateral Arquine Libro" },
      { filename: "03-pagina-1.jpg", alt: "Arquine Libro página 1" },
    ],
  },
  {
    id: "bienal-habana",
    slug: "bienal-habana",
    title: "BIENAL LA HABANA",
    subtitle: "Catálogo de exposición internacional",
    description:
      "Catálogo oficial de la Bienal de La Habana, donde nuestro trabajo fue seleccionado para representar la arquitectura sustentable mexicana.",
    year: "2023",
    type: "exhibition",
    coverImage: "/images/medios/bienal-habana/01-portada.jpg",
    folderPath: "medios/bienal-habana",
    images: [
      {
        filename: "01-portada.jpg",
        alt: "Portada Catálogo Bienal La Habana",
      },
      {
        filename: "02-contraportada.jpg",
        alt: "Contraportada Catálogo Bienal",
      },
      {
        filename: "03-pagina-1.jpg",
        alt: "Bienal La Habana página 1",
      },
      {
        filename: "04-pagina-2.jpg",
        alt: "Bienal La Habana página 2",
      },
    ],
  },
  {
    id: "design-week",
    slug: "design-week",
    title: "DESIGN WEEK MÉXICO",
    subtitle: "Pabellón Yoo - DWM 2020",
    description:
      "Documentación del Pabellón Yoo presentado en Design Week México 2020, donde Lucila Aguilar fue homenajeada por su innovación en materiales sustentables.",
    year: "2020",
    type: "exhibition",
    coverImage: "/images/medios/design-week/01-portada.jpg",
    folderPath: "medios/design-week",
    images: [
      {
        filename: "01-portada.jpg",
        alt: "Portada Design Week México",
      },
      {
        filename: "02-contraportada.jpg",
        alt: "Contraportada Design Week",
      },
      { filename: "03-pagina-1.jpg", alt: "Design Week página 1" },
      { filename: "04-pagina-2.jpg", alt: "Design Week página 2" },
      { filename: "05-pagina-3.jpg", alt: "Design Week página 3" },
      { filename: "06-pagina-4.jpg", alt: "Design Week página 4" },
      { filename: "07-pagina-5.jpg", alt: "Design Week página 5" },
    ],
  },
  {
    id: "down-to-earth-loft",
    slug: "down-to-earth-loft",
    title: "DOWN TO EARTH - LOFT",
    subtitle: "Revista especializada en arquitectura sustentable",
    description:
      "Publicación internacional que destaca nuestro enfoque en arquitectura regenerativa y el uso consciente de materiales naturales.",
    year: "2022",
    type: "magazine",
    coverImage: "/images/medios/down-to-earth-loft/01-portada.jpg",
    folderPath: "medios/down-to-earth-loft",
    images: [
      {
        filename: "01-portada.jpg",
        alt: "Portada Down to Earth LOFT",
      },
      {
        filename: "02-contraportada.jpg",
        alt: "Contraportada Down to Earth",
      },
      { filename: "03-pagina-2.jpg", alt: "Down to Earth página 2" },
      { filename: "04-pagina-3.jpg", alt: "Down to Earth página 3" },
      { filename: "05-pagina-4.jpg", alt: "Down to Earth página 4" },
      { filename: "06-pagina-5.jpg", alt: "Down to Earth página 5" },
      { filename: "07-pagina-6.jpg", alt: "Down to Earth página 6" },
    ],
  },
  {
    id: "film-festival-ny",
    slug: "film-festival-ny",
    title: "FILM FESTIVAL NY",
    subtitle: "Documental de arquitectura sustentable",
    description:
      "Documentación de nuestro proyecto presentado en el Film Festival de Nueva York, destacando la narrativa visual de la arquitectura sustentable.",
    year: "2021",
    type: "festival",
    coverImage: "/images/medios/film-festival-ny/01-portada.jpg",
    folderPath: "medios/film-festival-ny",
    images: [
      {
        filename: "01-portada.jpg",
        alt: "Portada Film Festival NY",
      },
      {
        filename: "02-pagina-2.jpg",
        alt: "Film Festival NY página 2",
      },
    ],
  },
  {
    id: "green-architecture-loft",
    slug: "green-architecture-loft",
    title: "GREEN ARCHITECTURE - LOFT",
    subtitle: "Revista internacional de arquitectura verde",
    description:
      "Publicación especializada que presenta nuestro trabajo como ejemplo de arquitectura regenerativa y diseño consciente con el medio ambiente.",
    year: "2023",
    type: "magazine",
    coverImage: "/images/medios/green-architecture-loft/01-portada.jpg",
    folderPath: "medios/green-architecture-loft",
    images: [
      {
        filename: "01-portada.jpg",
        alt: "Portada Green Architecture LOFT",
      },
      {
        filename: "02-contraportada.jpg",
        alt: "Contraportada Green Architecture",
      },
      {
        filename: "03-pagina-1.jpg",
        alt: "Green Architecture página 1",
      },
      {
        filename: "04-pagina-2.jpg",
        alt: "Green Architecture página 2",
      },
      {
        filename: "05-pagina-3.jpg",
        alt: "Green Architecture página 3",
      },
      {
        filename: "06-pagina-4.jpg",
        alt: "Green Architecture página 4",
      },
      {
        filename: "07-pagina-5.jpg",
        alt: "Green Architecture página 5",
      },
      {
        filename: "08-pagina-6.jpg",
        alt: "Green Architecture página 6",
      },
      {
        filename: "09-pagina-7.jpg",
        alt: "Green Architecture página 7",
      },
      {
        filename: "10-pagina-8.jpg",
        alt: "Green Architecture página 8",
      },
    ],
  },
  {
    id: "ink-talk",
    slug: "ink-talk",
    title: "INK TALK",
    subtitle: "Conferencia internacional de arquitectura",
    description:
      "Documentación de nuestra participación como speakers en Ink Talk, compartiendo nuestra experiencia en arquitectura sustentable con bambú.",
    year: "2022",
    type: "festival",
    coverImage: "/images/medios/ink-talk/01-speaker.jpg",
    folderPath: "medios/ink-talk",
    images: [{ filename: "01-speaker.jpg", alt: "Ink Talk Speaker" }],
  },
  {
    id: "venecia-tse-2021-2025",
    slug: "venecia-tse-2021-2025",
    title: "VENECIA TSE 2021-2025",
    subtitle: "Exposición internacional de arquitectura sustentable",
    description:
      "Catálogo de nuestra participación en la exposición de arquitectura sustentable en Venecia, representando la innovación mexicana en materiales naturales.",
    year: "2025",
    type: "exhibition",
    coverImage: "/images/medios/venecia-tse-2021-2025/01-portada-2025.jpg",
    folderPath: "medios/venecia-tse-2021-2025",
    images: [
      { filename: "01-portada-2025.jpg", alt: "Portada Venecia TSE 2025" },
      { filename: "02-pagina-2025.jpg", alt: "Venecia TSE 2025 página 2" },
      { filename: "03-portada-2021.jpg", alt: "Portada Venecia TSE 2021" },
      { filename: "04-pagina-2021.jpg", alt: "Venecia TSE 2021 página 2" },
    ],
  },
  // Web Publications
  {
    id: "bambu-solucion-european-cultural",
    slug: "bambu-solucion-european-cultural",
    title: "Bambú como solución - European Cultural Centre",
    subtitle: "Reconocimiento internacional",
    description:
      "El European Cultural Centre destacó al despacho de Lucila Aguilar por su uso de bambú en la construcción, señalándolo como ejemplo de diseño sustentable.",
    year: "2024",
    type: "web",
  },
  {
    id: "arkin-excelente-material",
    slug: "arkin-excelente-material",
    title: "ARKIN – Excelente material",
    subtitle: "Análisis técnico del bambú",
    description:
      "Presenta el bambú como un material sustentable y resistente, con propiedades estructurales comparables o superiores al concreto y varilla, que además se trabaja en seco sin contaminar.",
    year: "2024",
    type: "web",
  },
  {
    id: "arkin-pabellon-yoo-dwm",
    slug: "arkin-pabellon-yoo-dwm",
    title: "ARKIN – Pabellón Yoo, DWM",
    subtitle: "Design Week México 2020",
    description:
      "En 2020, Lucila Aguilar fue homenajeada en Design Week México con el Pabellón Yoo, un refugio que invita a reconectar con la tierra mediante materiales naturales.",
    year: "2020",
    type: "web",
  },
  {
    id: "gestor-energetico-bambu-bioconstruccion",
    slug: "gestor-energetico-bambu-bioconstruccion",
    title: "Gestor Energético – La importancia del bambú en la bioconstrucción",
    subtitle: "Investigación en bioconstrucción",
    description:
      "Lucila Aguilar comenzó a trabajar con bambú en el sureste mexicano en el proyecto Uumbal, investigando materiales de bioconstrucción para generar una conexión más consciente con la tierra.",
    year: "2023",
    type: "web",
  },
  {
    id: "brigada-vivienda-permanente",
    slug: "brigada-vivienda-permanente",
    title: "Brigada – Vivienda permanente",
    subtitle: "Modelo de vivienda social",
    description:
      "Por medio de un modelo replicable, modular, adaptable, fácil de construir y accesible, se propone promover la transferencia de tecnologías e impulsar la economía local, mejorando la calidad de vida y el equilibrio con el contexto natural y cultural de las comunidades.",
    year: "2023",
    type: "web",
  },
  {
    id: "best-bamboo-social-housing",
    slug: "best-bamboo-social-housing",
    title: "The Best Bamboo – Bamboo Social Housing",
    subtitle: "Vivienda social sustentable",
    description:
      "The project began as a social housing proposal that Uumbal manages for its field workers. Uumbal is an agro-forestry company with 15,000 hectares of pine and palm plantations in southeastern Mexico -Chiapas, Veracruz, Tabasco and Campeche.",
    year: "2023",
    type: "web",
  },
  {
    id: "green-building-consciousness",
    slug: "green-building-consciousness",
    title: "Green – Building with Consciousness",
    subtitle: "Arquitectura consciente",
    description:
      "Grow your House is a proposal for Sustainable Social Housing that seeks to be a catalyst for change and inspiration by proposing a scheme that disseminates well-being and promotes social and environmental awareness in its inhabitants and their communities.",
    year: "2023",
    type: "web",
  },
  {
    id: "archdaily-manual-construccion-bambu",
    slug: "archdaily-manual-construccion-bambu",
    title: "ArchDaily – Manual de construcción en bambú",
    subtitle: "Guía técnica de construcción",
    description:
      "El bambú es un material constructivo que se ha utilizado desde la antigüedad en distintas edificaciones que han demostrado su superioridad frente a materiales completamente innovadores como el plástico y el acero debido a un sinnúmero de bondades, sin olvidar el factor estético incomparable que lo ha colocado como una de las mayores tendencias arquitectónicas del momento.",
    year: "2023",
    type: "web",
  },
  {
    id: "archdaily-crece-tu-casa",
    slug: "archdaily-crece-tu-casa",
    title: "ArchDaily – Crece tu casa",
    subtitle: "Proyecto de vivienda social",
    description:
      "Por medio de un modelo replicable, modular, adaptable, fácil de construir y accesible, se propone promover la transferencia de tecnologías e impulsar la economía local, mejorando la calidad de vida y el equilibrio con el contexto natural y cultural de las comunidades.",
    year: "2023",
    type: "web",
  },
  {
    id: "arquine-sesion-efimera",
    slug: "arquine-sesion-efimera",
    title: "Arquine – Sesión Efímera",
    subtitle: "Reconstrucción y redensificación",
    description:
      "Sesión efímera sobre reconstrucción y redensificación en alianza con CREST México.",
    year: "2023",
    type: "web",
    link: "https://www.facebook.com/watch/live/?ref=watch_permalink&v=253057248735650",
  },
  {
    id: "archdaily-la-ceiba",
    slug: "archdaily-la-ceiba",
    title: "ArchDaily – La Ceiba",
    subtitle: "Infraestructura sustentable",
    description:
      '"La Ceiba" es un proyecto de infraestructura para Uumbal que integra diseño sustentable y materiales de bajo impacto en 16 construcciones replicables, alineadas con certificaciones ambientales internacionales.',
    year: "2023",
    type: "web",
  },
  {
    id: "arquine-crece-tu-casa-web",
    slug: "arquine-crece-tu-casa-web",
    title: "Arquine – Crece tu casa",
    subtitle: "Vivienda social Uumbal",
    description:
      "El proyecto comenzó como una propuesta de vivienda social que gestiona Uumbal para sus trabajadores de campo. Uumbal es empresa agro forestal con 15,000 has de plantaciones de pino y palma en el sureste de México —Chiapas, Veracruz, Tabasco y Campeche.",
    year: "2023",
    type: "web",
  },
];
