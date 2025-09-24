export interface ExhibitionImage {
  filename: string;
  alt: string;
}

export interface Exhibition {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  coverImage: string;
  folderPath: string;
  images: ExhibitionImage[];
  link?: string;
}

export const exhibitionsData: Exhibition[] = [
  {
    id: "arch-days-cdmx",
    slug: "arch-days-cdmx",
    title: "ARCH DAYS CDMX",
    subtitle: "Conferencia internacional de arquitectura",
    description:
      "Participación en Arch Days CDMX, donde presentamos nuestras innovaciones en arquitectura sustentable y el uso del bambú como material constructivo.",
    year: "2024",
    coverImage: "/images/exposiciones/arch-days-cdmx/01-archdays-proyecta.jpg",
    folderPath: "arch-days-cdmx",
    images: [
      {
        filename: "01-archdays-proyecta.jpg",
        alt: "Arch Days CDMX Proyecta",
      },
      {
        filename: "02-crece-tu-casa-archdays.jpg",
        alt: "Crece tu casa Arch Days",
      },
      {
        filename: "03-img-4125.jpg",
        alt: "Arch Days CDMX imagen 1",
      },
      {
        filename: "04-img-4126.jpg",
        alt: "Arch Days CDMX imagen 2",
      },
    ],
  },
  {
    id: "bienal-habana-intersecciones",
    slug: "bienal-habana-intersecciones",
    title: "BIENAL LA HABANA - INTERSECCIONES",
    subtitle: "Exposición internacional de arquitectura",
    description:
      "Participación en la Bienal de La Habana con el proyecto 'Intersecciones', explorando las conexiones entre arquitectura sustentable y comunidades locales.",
    year: "2023",
    coverImage:
      "/images/exposiciones/bienal-habana-intersecciones/01-bienal-habana-portada.jpg",
    folderPath: "bienal-habana-intersecciones",
    images: [
      {
        filename: "01-bienal-habana-portada.jpg",
        alt: "Portada Bienal La Habana Intersecciones",
      },
      {
        filename: "02-bienal-habana-1.jpg",
        alt: "Bienal La Habana imagen 1",
      },
      {
        filename: "03-bienal-habana-2.jpg",
        alt: "Bienal La Habana imagen 2",
      },
      {
        filename: "04-bienal-habana-3.jpg",
        alt: "Bienal La Habana imagen 3",
      },
      {
        filename: "05-bienal-habana-4.jpg",
        alt: "Bienal La Habana imagen 4",
      },
      {
        filename: "06-bienal-habana-5.jpg",
        alt: "Bienal La Habana imagen 5",
      },
      {
        filename: "07-bienal-habana-7.jpg",
        alt: "Bienal La Habana imagen 7",
      },
    ],
  },
  {
    id: "ixua-time-space-existence",
    slug: "ixua-time-space-existence",
    title: "IXUA TIME SPACE EXISTENCE",
    subtitle: "Bienal de Venecia 2021",
    description:
      "Proyecto IXUA presentado en la Bienal de Venecia 2021, explorando la relación entre tiempo, espacio y existencia en la arquitectura contemporánea.",
    year: "2021",
    coverImage:
      "/images/exposiciones/ixua-time-space-existence/01-room7-002.jpeg",
    folderPath: "ixua-time-space-existence",
    images: [
      {
        filename: "01-room7-002.jpeg",
        alt: "IXUA Room 7 imagen 2",
      },
      {
        filename: "02-room7-003.jpeg",
        alt: "IXUA Room 7 imagen 3",
      },
      {
        filename: "03-room7-004.jpg",
        alt: "IXUA Room 7 imagen 4",
      },
      {
        filename: "04-room7-006.jpg",
        alt: "IXUA Room 7 imagen 6",
      },
      {
        filename: "05-room7-007.jpg",
        alt: "IXUA Room 7 imagen 7",
      },
      {
        filename: "06-room7-008.jpg",
        alt: "IXUA Room 7 imagen 8",
      },
      {
        filename: "07-room7-011.jpg",
        alt: "IXUA Room 7 imagen 11",
      },
    ],
  },
  {
    id: "linaje-creativo",
    slug: "linaje-creativo",
    title: "LINAJE CREATIVO",
    subtitle: "Exposición UNAM - Homenaje a Víctor de la Lama",
    description:
      "Exposición individual en la UNAM como homenaje a Víctor de la Lama, explorando el linaje creativo en la arquitectura mexicana contemporánea.",
    year: "2022",
    coverImage: "/images/exposiciones/linaje-creativo/01-linaje-creativo-1.jpg",
    folderPath: "linaje-creativo",
    images: [
      {
        filename: "01-linaje-creativo-1.jpg",
        alt: "Linaje Creativo imagen 1",
      },
      {
        filename: "02-linaje-creativo-2.jpg",
        alt: "Linaje Creativo imagen 2",
      },
      {
        filename: "03-linaje-creativo-3.jpg",
        alt: "Linaje Creativo imagen 3",
      },
      {
        filename: "04-linaje-creativo-4.jpg",
        alt: "Linaje Creativo imagen 4",
      },
      {
        filename: "05-linaje-creativo-5.jpg",
        alt: "Linaje Creativo imagen 5",
      },
      {
        filename: "06-linaje-creativo-6.jpg",
        alt: "Linaje Creativo imagen 6",
      },
      {
        filename: "07-linaje-creativo-7.jpg",
        alt: "Linaje Creativo imagen 7",
      },
      {
        filename: "08-linaje-creativo-8.jpg",
        alt: "Linaje Creativo imagen 8",
      },
      {
        filename: "09-muro-intencion.jpeg",
        alt: "Muro Intención Linaje Creativo",
      },
    ],
  },
  {
    id: "yoo-design-week-mexico",
    slug: "yoo-design-week-mexico",
    title: "YOO DESIGN WEEK MÉXICO",
    subtitle: "Pabellón YOO - Homenaje 2020",
    description:
      "Pabellón YOO presentado en Design Week México 2020, donde Lucila Aguilar fue homenajeada por su innovación en materiales sustentables y diseño consciente.",
    year: "2020",
    coverImage:
      "/images/exposiciones/yoo-design-week-mexico/fotos-y-videos/01 Yoo Portrait .jpg",
    folderPath: "yoo-design-week-mexico",
    images: [
      {
        filename: "fotos-y-videos/01 Yoo Portrait .jpg",
        alt: "YOO Portrait Design Week",
      },
      {
        filename: "fotos-y-videos/01 Yoo Portrait 2.tif",
        alt: "YOO Portrait 2",
      },
      {
        filename: "fotos-y-videos/02 Yoo Xuxes 2.jpg",
        alt: "YOO Xuxes 2",
      },
      {
        filename: "fotos-y-videos/06 Yoo Noche 4.tif",
        alt: "YOO Noche 4",
      },
      {
        filename: "planos/01 Yoo Conjunto_h.jpg",
        alt: "YOO Conjunto plano",
      },
    ],
    link: "https://www.designweekmexico.com/",
  },
];
