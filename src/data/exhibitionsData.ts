export interface Exhibition {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  coverImage: string;
  folderPath: string;
  link?: string;
}

export const exhibitionsData: Exhibition[] = [
  {
    id: "arch-days-cdmx",
    slug: "arch-days-cdmx",
    title: "Arch Days CDMX",
    subtitle: "Conferencia internacional de arquitectura",
    description:
      "Participación en Arch Days CDMX, donde presentamos nuestras innovaciones en arquitectura sustentable y el uso del bambú como material constructivo.",
    year: "2024",
    coverImage: "/images/exposiciones/arch-days-cdmx/01-archdays-proyecta.jpg",
    folderPath: "arch-days-cdmx",
  },
  {
    id: "bienal-habana-intersecciones",
    slug: "bienal-habana-intersecciones",
    title: "Bienal La Habana - Intersecciones",
    subtitle: "Exposición internacional de arquitectura",
    description:
      "Participación en la Bienal de La Habana con el proyecto 'Intersecciones', explorando las conexiones entre arquitectura sustentable y comunidades locales.",
    year: "2023",
    coverImage:
      "/images/exposiciones/bienal-habana-intersecciones/01-bienal-habana-portada.jpg",
    folderPath: "bienal-habana-intersecciones",
  },
  {
    id: "ixua-time-space-existence",
    slug: "ixua-time-space-existence",
    title: "Ixua Time Space Existence",
    subtitle: "Bienal de Venecia 2021",
    description:
      "Proyecto IXUA presentado en la Bienal de Venecia 2021, explorando la relación entre tiempo, espacio y existencia en la arquitectura contemporánea.",
    year: "2021",
    coverImage:
      "/images/exposiciones/ixua-time-space-existence/01-ixua-room7-1.jpg",
    folderPath: "ixua-time-space-existence",
  },
  {
    id: "linaje-creativo",
    slug: "linaje-creativo",
    title: "Linaje Creativo",
    subtitle: "Exposición UNAM - Homenaje a Víctor de la Lama",
    description:
      "Exposición individual en la UNAM como homenaje a Víctor de la Lama, explorando el linaje creativo en la arquitectura mexicana contemporánea.",
    year: "2022",
    coverImage: "/images/exposiciones/linaje-creativo/01-linaje-creativo-1.jpg",
    folderPath: "linaje-creativo",
  },
  {
    id: "yoo-design-week-mexico",
    slug: "yoo-design-week-mexico",
    title: "Yoo Design Week México",
    subtitle: "Pabellón YOO - Homenaje 2020",
    description:
      "Pabellón YOO presentado en Design Week México 2020, donde Lucila Aguilar fue homenajeada por su innovación en materiales sustentables y diseño consciente.",
    year: "2020",
    coverImage:
      "/images/exposiciones/yoo-design-week-mexico/02-yoo-design-week-2.jpg",
    folderPath: "yoo-design-week-mexico",
    link: "https://www.designweekmexico.com/",
  },
  {
    id: "fyja",
    slug: "fyja",
    title: "Fyja",
    subtitle: "Conferencia internacional de arquitectura",
    description:
      "Participación en  FYJA, Festival de Flores y Jardines 2025, sembrando una semilla para los &quot;Jardines del Futuro”.",
    year: "2025",
    coverImage: "/images/exposiciones/fyja/fyja-portada.jpg",
    folderPath: "fyja",
  },
];
