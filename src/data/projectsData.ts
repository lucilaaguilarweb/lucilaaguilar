export interface Award {
  year: string;
  title: string;
  description?: string;
  imageFile: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  coverImage: string;
  folderPath: string;
  category: "residencial" | "comercial" | "publico" | "exposicion" | "otro";
  content?: string;
  awards?: Award[];
}

export const projectsData: Project[] = [
  {
    slug: "cocoon",
    title: "COCOON",
    subtitle: "Vivienda Modular Sustentable",
    description:
      "Vivir en la naturaleza, sin renunciar al confort. Estructuras elegantes y de bajo impacto que ofrecen comodidad sin concesiones y belleza sin destrucción.",
    year: "2024",
    coverImage: "cocoon-portada.jpg",
    folderPath: "cocoon",
    category: "residencial",
    awards: [
      {
        year: "2025",
        title: "Luxury Lifestyle Award",
        description: "Best Sustainable Hotel Architecture in México",
        imageFile: "Time Space VENECIA 2025.png",
      },
      {
        year: "2025",
        title: "Time Space Existence",
        description: "Participación en Venecia",
        imageFile: "Time Space VENECIA 2025.png",
      },
      {
        year: "2025",
        title: "LOFT PUBLICATIONS",
        description: "",
        imageFile: "LOFT.png",
      },
    ],
    content: `Vivir en la naturaleza, sin renunciar al confort
Creemos en una nueva forma de habitar el mundo: ligera, adaptable y en sintonía con la Tierra. El Cocoon Project nace de esa visión: estructuras elegantes y de bajo impacto que ofrecen comodidad sin concesiones y belleza sin destrucción.

Diseño modular y flexible
El Cocoon está compuesto por paneles prefabricados desmontables, fáciles de transportar y reubicar. Incluso su cimentación es no invasiva, permitiendo retirarla por completo sin dañar el terreno ni la vegetación.
Las unidades se pueden combinar para crear diferentes configuraciones: suites privadas, terrazas, salas comunes, cocinas o módulos múltiples, adaptándose a cada sitio y necesidad.

Estructura ligera, impacto mínimo
● Columnas de bambú convergen en una base central, reduciendo el contacto con el suelo.
● Seis cables de acero tensan la estructura, otorgando estabilidad sin afectar la tierra circundante.
● Más del 80% de materiales son sustentables, priorizando lo local y lo artesanal.

Experiencia sensorial
Entrar al Cocoon es descubrir un refugio íntimo y luminoso.
● La geometría curva de bambú envuelve el espacio, filtrando la luz de manera suave.
● Acabados en palma sintética/tejas de madera/tejas de pizarra, textiles artesanales y muros de bambú aportan calidez.
● Mamparas y persianas translúcidas en xuxé ofrecen privacidad sin perder la conexión con la luz natural.
Con aislamiento térmico y acústico, el Cocoon mantiene interiores frescos en climas cálidos y confortables en temperaturas frías.

Una filosofía regenerativa
Más que un edificio, el Cocoon es una forma de vida sostenible. Su diseño minimiza el impacto ambiental, maximiza la adaptabilidad y demuestra que la arquitectura puede ser moderna, sustentable y profundamente humana.`,
  },
  {
    slug: "pericos",
    title: "PERICOS",
    subtitle: "Arquitectura que dialoga con el cacao y la selva",
    description:
      "Un conjunto de 5 módulos con 9 habitaciones que miran hacia el volcán Tacaná y se integran de manera orgánica con el paisaje de la Finca Don Jorge.",
    year: "2023",
    coverImage: "1-portada-pericos.jpg",
    folderPath: "pericos",
    category: "residencial",
    awards: [
      {
        year: "2023",
        title: "LOFT PUBLICATIONS",
        description: "Down to Earth - Rammed Earth Architecture",
        imageFile: "LOFT.png",
      },
    ],
    content: `Arquitectura que dialoga con el cacao y la selva
En la Finca Don Jorge, una plantación de cacao en el Soconusco, nacen las Viviendas Pericos: un conjunto de 5 módulos con 9 habitaciones que miran hacia el volcán Tacaná y se integran de manera orgánica con el paisaje.

Diseño con raíces locales
● Muros de adobe reforzados con piedras de río.
● Techos de bambú y esterilla cubiertos de vegetación para mantener frescura natural.
● Uso de materiales de la región: tierra, bambú, madera y piedra bola.

Un refugio en armonía
Cada espacio está pensado para vivir la experiencia del cacao mexicano y reconectar con la naturaleza. El canto de las aves, la sombra de la vegetación y la sencillez de los materiales crean un ambiente de paz y contemplación.

Innovación con tradición
Viviendas Pericos refleja la visión de Lucila Aguilar Arquitectos: demostrar que los materiales naturales y procesos artesanales pueden ser la clave para un futuro sostenible, sin perder belleza ni confort.`,
  },
  {
    slug: "pabellon-semilla",
    title: "PABELLÓN SEMILLA",
    subtitle: "Arquitectura que germina desde la tierra del cacao",
    description:
      "Ubicado en la región del Soconusco, Chiapas, bajo la sombra del Volcán Tacaná, da la bienvenida a visitantes y trabajadores de la Finca de Cacao Don Jorge.",
    year: "2024",
    coverImage: "1-portada-pabellon-semilla.jpg",
    folderPath: "pabellon-semilla",
    category: "exposicion",
    content: `Arquitectura que germina desde la tierra del cacao
Ubicado en la región del Soconusco, Chiapas, bajo la sombra del Volcán Tacaná, el Pabellón Semilla da la bienvenida a visitantes y trabajadores de la Finca de Cacao Don Jorge. Más que un edificio, es un refugio natural que honra la cultura del cacao y celebra la unión entre comunidad y naturaleza.

Inspirado en la semilla
El diseño nace de las formas orgánicas del cacao, integrándose entre las matas existentes y respetando cada árbol del jardín. Visto desde arriba, su silueta evoca una semilla o una hoja que se abre hacia la luz y el viento.

Materiales con raíz local
● Bambú Asper y Olhami como estructura principal.
● Bahareque (tierra, arena, paja y baba de nopal) para muros térmicos y resistentes.
● Piedra bola de río para cimentación.
● Cubierta de tejas de bambú que imitan las curvas de una gran hoja.

Espacio vivo y bioclimático
El pabellón cuenta con recepción, sala de reuniones, comedor, áreas de trabajo, baños y bodegas.

Su diseño bioclimático incluye:
● Altura generosa para ventilación natural.
● Luz cenital a través de un domo central.
● Grandes aleros y techos verdes que brindan frescura y confort.

Impacto social y cultural
Construido con la participación de la comunidad y trabajadores de la finca, el Pabellón Semilla promueve la transferencia de técnicas y el uso de materiales locales. Hoy es un ícono regional, un espacio de encuentro para productores, investigadores y amantes del cacao que buscan preservar y compartir este legado ancestral.`,
  },
  {
    slug: "finca-don-jorge",
    title: "FINCA DON JORGE",
    subtitle: "Arquitectura sustentable al servicio del cacao y la comunidad",
    description:
      "Ubicada en el corazón del Soconusco, a 23 km de Tapachula, Chiapas, es un proyecto de ECOM cuyo propósito es rescatar el cacao blanco criollo, una de las variedades más valiosas de México.",
    year: "2023",
    coverImage: "1-portada-fdj.jpg",
    folderPath: "finca-don-jorge",
    category: "residencial",
    awards: [
      {
        year: "2021",
        title: "Noldi Schreck Awards",
        description: "Segundo Lugar Arquitectura de Paisaje",
        imageFile: "NOLDI.png",
      },
    ],
    content: `Arquitectura sustentable al servicio del cacao y la comunidad
Ubicada en el corazón del Soconusco, a 23 km de Tapachula, Chiapas, Finca Don Jorge es un proyecto de ECOM cuyo propósito es rescatar el cacao blanco criollo, una de las variedades más valiosas de México. Además de impulsar el cultivo y producción de cacao, la finca busca empoderar a las comunidades locales e integrar prácticas sostenibles en toda su infraestructura.

En colaboración con Lucila Aguilar Arquitectos, se ha diseñado un conjunto de espacios que combina funcionalidad, confort y sustentabilidad. El bambú, la tierra, la piedra de río, la madera local y techos verdes han sido la base de un sistema constructivo que integra naturaleza, productividad y hospitalidad.

El conjunto arquitectónico puede dividirse en tres grandes categorías: alojamiento, infraestructura productiva y espacios colectivos.

Alojamiento
La finca, ubicada en un entorno remoto, requiere espacios dignos y confortables tanto para trabajadores como para visitantes:
● Comedor Guacamaya: Donde visitantes, socios, colaboradores y trabajadores del campo se reunen para disfrutar de los alimentps y cocina tradicional.
● Dormitorios Quetzal: diseñados para alojar a los trabajadores de campo.
● Dormitorios Colibrí: pensados para el personal administrativo.
● Pericos: habitaciones para visitantes, construidas con adobe, bambú y techo verde, que ofrecen frescura térmica y se integran al paisaje.
● Casa MaCa (Mazorca-Cacao): un módulo habitable inspirado en la forma de la mazorca, con estructura ligera de acero y bambú. Su diseño modular y elevado reduce al mínimo el impacto en el suelo, ofreciendo todas las comodidades en un espacio armónico con la naturaleza.

Infraestructura productiva
La finca crece orgánicamente conforme lo hace la producción, integrando arquitectura sustentable también en la infraestructura agrícola:
● Caseta de Fertirriego: con la última tecnologia gestiona el riego por goteo que optimiza el uso del agua y distribuye nutrientes directamente a las raíces.
● Corazón de la Finca (en construcción): edificio clave para procesos de secado, horneado, clasificado y almacenamiento del cacao, además de un laboratorio para la innovación en producción.
Ambas estructuras integran bambú y piedra local en combinación con cimentaciones de concreto, incorporando sistemas pasivos de enfriamiento, techos verdes y paneles solares.

Espacios colectivos
Además de producir cacao, la finca busca generar comunidad:
● Parque Tortuga: un espacio de convivencia que integra esculturas de bambú inspiradas en caparazones de tortuga, ofreciendo sombra, descanso y vistas panorámicas de la finca.
● Pabellón Semilla: ícono de la región, espacio de reunión y aprendizaje en torno al cacao, diseñado con formas orgánicas que evocan una semilla y construido con bambú, tierra y piedra de río.

Una finca sustentable e inspiradora
El conjunto de edificaciones de Finca Don Jorge demuestra que la infraestructura agrícola, habitacional y comunitaria puede construirse con materiales renovables, respetando al entorno y fortaleciendo a las comunidades.
Cada proyecto, desde un dormitorio hasta un pabellón de encuentro, está pensado para dignificar la vida de quienes trabajan el cacao y, al mismo tiempo, educar en la confianza hacia materiales como el bambú, que además de ser sustentable es resistente, bello y transformador.`,
  },
  {
    slug: "humanitree",
    title: "HUMANITREE",
    subtitle: "Un espacio lúdico que fusiona aprendizaje, juego y diseño",
    description:
      "En colaboración con C Cúbica Arquitectos, una estructura de bambú que transforma el vacío de tres niveles en una gran instalación lúdica con dos cocoons que se entrelazan con redes de paracord.",
    year: "2023",
    coverImage: "1-portada-humanitree.jpg",
    folderPath: "humanitree",
    category: "publico",
    content: `Un espacio lúdico que fusiona aprendizaje, juego y diseño
En colaboración con C Cúbica Arquitectos, Lucila Aguilar Arquitectos fue invitada a diseñar una estructura de bambú para el nuevo Humanitree School, ubicado en Lomas de Chapultepec, Ciudad de México. El reto: crear un espacio que no solo acompañara el diseño vanguardista de la escuela, sino que también potenciara la creatividad, el juego y la exploración de los estudiantes.

La propuesta transformó el vacío de tres niveles del edificio —originalmente destinado a barandales— en una gran instalación lúdica: dos cocoons de bambú que atraviesan verticalmente el espacio y se entrelazan con redes de paracord tejidas a mano.

Construidos con bambú madake, cuidadosamente trabajado por artesanos de Monte Blanco, Veracruz, los cocoons destacan tanto por su expresividad arquitectónica como por su cualidad sensorial. El paracord, tejido en vibrantes colores, añade dinamismo y convierte la estructura en un espacio de juego interactivo.

El recorrido se divide en tres niveles, cada uno con una atmósfera temática:
● Nivel 1 (Bosque): redes en tonos verdes y amarillos, acompañadas de una resbaladilla y plataformas tejidas.
● Nivel 2 (Mar): una zona en tonalidades azules que invita a trepar y balancearse.
● Nivel 3 (Cielo místico): colores morados y vegetación suspendida crean un espacio íntimo para leer, descansar o simplemente contemplar.

El resultado es un entorno que integra juego, aprendizaje y naturaleza en un mismo gesto arquitectónico, alineando la filosofía educativa de Humanitree con una propuesta innovadora que demuestra que la creatividad no tiene límites.`,
  },
  {
    slug: "la-ceiba",
    title: "LA CEIBA",
    subtitle: "Infraestructura sostenible para dignificar el campo mexicano",
    description:
      "Desarrollado para Uumbal, empresa agroforestal del sureste mexicano, el proyecto incluye 16 prototipos replicables que resuelven necesidades de seguridad y operación con bajo impacto ambiental y alta calidad estética.",
    year: "2023",
    coverImage: "la-ceiba-portada.jpg",
    folderPath: "la-ceiba",
    category: "comercial",
    awards: [
      {
        year: "2016",
        title: "XVI Bienal de Arquitectura",
        description: "Mención Honorífica",
        imageFile: "BIENAL.png",
      },
      {
        year: "2021",
        title: "LOFT PUBLICATIONS",
        description: "Green Architecture for a Sustainable Future",
        imageFile: "LOFT.png",
      },
    ],
    content: `Infraestructura sostenible para dignificar el campo mexicano
Con La Ceiba buscamos transmitir un mensaje en la región: las construcciones industriales pueden tener otro lenguaje. Al usar materiales naturales como tierra y bambú, demostramos que también pueden ser armónicas con su entorno y dignificar el trabajo en el campo.

Desarrollado para Uumbal, empresa agroforestal del sureste mexicano, el proyecto incluye 16 prototipos replicables —bodegas, viviendas, casetas de vigilancia y más— que resuelven necesidades de seguridad y operación con bajo impacto ambiental y alta calidad estética.

Diseño y sustentabilidad
● Uso de materiales naturales combinados con convencionales para lograr diseños atractivos y funcionales.
● Estrategia bioclimática adaptada a climas cálido-húmedos.
● Orientación estratégica para aprovechar vientos y sol.
● Cubiertas vegetales y techos de bambú que generan sombra y confort térmico.
● Construcción en seco con materiales que pueden reutilizarse al final de su vida útil.

Prototipos constructivos
● Armaduras de bambú: estructuras prefabricadas que facilitan traslado y montaje; aplicadas en bodegas, viviendas, casetas y talleres. → Premiadas con Mención Honorífica en la XIV Bienal de Arquitectura Mexicana.
● Cerchas: dormitorios con ventilación cruzada, muros de tierra (bahareque) y techos verdes; sistema eficiente para reproducir elementos en sitio.
● Paraboloides hiperbólicos: usados en comedores y vestidores, estructuras geométricas rígidas hechas con postes rectos que generan superficies curvas. Incorporan techos verdes y espacios abiertos para confort térmico.`,
  },
  {
    slug: "crece-tu-casa",
    title: "CRECE TU CASA",
    subtitle: "Vivienda social sustentable, modular y digna",
    description:
      "Un modelo de vivienda social sustentable que busca inspirar y generar cambio. Rescata la esencia de la arquitectura tradicional mexicana, aportando belleza, color y alegría, mientras promueve bienestar y dignidad en las comunidades.",
    year: "2023",
    coverImage: "1-portada-crece-tu-casa.jpg",
    folderPath: "crece-tu-casa",
    category: "residencial",
    awards: [
      {
        year: "2021",
        title: "Architizer Awards",
        description: "Finalist Private House (1000-2000 sq ft)",
        imageFile: "ARCHITIZNER.png",
      },
      {
        year: "2021",
        title: "World Design Awards",
        description: "Runner Up",
        imageFile: "WORLD D.png",
      },
      {
        year: "2021",
        title: "Arquine",
        description: "",
        imageFile: "AQRUINE.png",
      },
      {
        year: "2021",
        title: "NY Awards",
        description: "",
        imageFile: "NY.png",
      },
      {
        year: "2021",
        title: "LOFT PUBLICATIONS",
        description: "",
        imageFile: "LOFT.png",
      },
    ],
    content: `Vivienda social sustentable, modular y digna
Crece tu Casa es un modelo de vivienda social sustentable que busca inspirar y generar cambio. Rescata la esencia de la arquitectura tradicional mexicana, aportando belleza, color y alegría, mientras promueve bienestar y dignidad en las comunidades.

El diseño es modular, replicable, adaptable y accesible, lo que facilita su construcción en distintos climas y contextos, siempre priorizando el uso del bambú y materiales locales. El proyecto impulsa la economía regional, transfiere tecnologías y mejora la calidad de vida en equilibrio con el entorno natural y cultural.

Sistemas constructivos
Cada prototipo integra bambú como estructura principal, acompañado de distintos tipos de muros según el contexto:
● Bahareque – Tres capas de barro y fibras naturales, con gran aislamiento térmico.
● BTC (bloques de tierra comprimida) – Material local, económico y con propiedades térmicas especiales.
● Paja – Muros de pacas compactas recubiertas con barro o mortero.
● Pamacon – Paneles prefabricados de fibras de madera y concreto, reforzados con bambú.
⏱️ Tiempo estimado de construcción: 7–8 semanas`,
  },
  {
    slug: "crece-tu-escuela",
    title: "CRECE TU ESCUELA",
    subtitle: "Un aula hecha con manos, bambú y comunidad",
    description:
      "Nació como un esfuerzo colectivo en Unión Mexicana, Chiapas, para crear un espacio educativo digno y sustentable. Más que un edificio, es un punto de encuentro para el aprendizaje, la convivencia y el desarrollo de toda la comunidad.",
    year: "2023",
    coverImage: "crece-tu-escuela-portada.jpg",
    folderPath: "crece-tu-escuela",
    category: "publico",
    awards: [
      {
        year: "2021",
        title: "Noldi Schreck Awards",
        description: "Ganadora Arquitectura Institucional Pública",
        imageFile: "NOLDI.png",
      },
    ],
    content: `Un aula hecha con manos, bambú y comunidad
Crece tu Escuela nació como un esfuerzo colectivo en Unión Mexicana, Chiapas, para crear un espacio educativo digno y sustentable. Más que un edificio, es un punto de encuentro para el aprendizaje, la convivencia y el desarrollo de toda la comunidad.

El valor del bambú
El bambú fue el material elegido por su fuerza y versatilidad:
● Tan resistente como el acero y el concreto.
● Crece localmente, es accesible y fácil de trabajar con herramientas simples.
● Permite que los habitantes participaran directamente en la construcción.

Construcción colaborativa
● Padres de familia y vecinos ayudaron a desmontar la vieja estructura.
● Ellos mismos participaron en la obra, junto con especialistas.
● Los niños dejaron su huella al pintar un mural en la nueva escuela.

Un espacio para aprender y convivir
● Aulas más amplias y ventiladas con techos de bambú.
● Nuevo salón de cómputo para modernizar la educación.
● Comedor y área cubierta para actividades al aire libre.
● Reparación de la cancha de básquetbol y cerco vivo alrededor de la escuela.

Impacto:
Crece tu Escuela demostró que la educación puede crecer desde la comunidad misma. Hoy los niños aprenden en un lugar mejor, y las familias confían en el bambú como un material práctico, fuerte y sustentable para construir su futuro.`,
  },
  {
    slug: "ixua",
    title: "IXUA – BARRIO PALENQUE",
    subtitle: "Un barrio sustentable tejido con bambú y selva",
    description:
      "En colaboración con Fonatur, diseñamos un proyecto que forma parte de la ruta del Tren Maya: un barrio construido casi por completo en bambú, donde la arquitectura y la naturaleza se entrelazan.",
    year: "2024",
    coverImage: "ixua-portada.jpg",
    folderPath: "ixua",
    category: "comercial",
    awards: [
      {
        year: "2021",
        title: "TSE Venecia",
        description: "Mención Especial en Arquitectura",
        imageFile: "TSV2021.png",
      },
      {
        year: "2021",
        title: "LOFT PUBLICATIONS",
        description: "",
        imageFile: "LOFT.png",
      },
    ],
    content: `Un barrio sustentable tejido con bambú y selva
En colaboración con Fonatur, diseñamos un proyecto que forma parte de la ruta del Tren Maya: un barrio construido casi por completo en bambú, donde la arquitectura y la naturaleza se entrelazan.

IXUA busca ser la primera comunidad sustentable en bambú, un espacio donde selva, cultura y vida cotidiana se encuentren en armonía. El master plan contempla mercados, hoteles, restaurantes, viviendas, centros culturales y más: un lugar vivo que celebra los colores y tradiciones del sureste de México.

Sustentabilidad
La construcción genera el 40% de las emisiones de carbono a nivel global. IXUA propone al bambú como alternativa: un material ligero, flexible y tan resistente como el acero y el concreto.
● Captura hasta 50 toneladas de CO₂ por hectárea al año.
● Limpia el agua y fertiliza los suelos.
● Se trabaja con herramientas simples, lo que lo hace accesible y económico.
Con él, buscamos no solo reducir impacto, sino regenerar el entorno y cumplir varios de los Objetivos de Desarrollo Sostenible de la ONU.

Comunidad
IXUA será un mosaico cultural y social.
● Espacios para artesanos, cocineros, músicos y artistas.
● 28 embajadas que representarán a diferentes poblados de la región.
● Residencias artísticas y científicas, además de una Universidad Politécnica.
Un núcleo comercial y cultural que fomente el intercambio entre visitantes y habitantes locales.

Barrio Peatonal
El diseño prioriza al peatón para mejorar la calidad de vida. Calles caminables, restaurantes y tiendas que se abren al espacio público, y pórticos ondulados de bambú que protegen del sol y la lluvia, hacen de IXUA un lugar para caminar, conectar y sentir la selva.`,
  },
  {
    slug: "oficinas-uumbal",
    title: "OFICINAS UUMBAL",
    subtitle: "Oficinas sustentables en el corazón de la industria",
    description:
      'Diseñadas para Uumbal, las oficinas ubicadas en Chiapas, dentro de una planta extractora de aceite de palma, retoman la intención sustentable y el diseño bioclimático del proyecto "La Ceiba".',
    year: "2023",
    coverImage: "oficinas-uumbal-portada.jpg",
    folderPath: "uumbal-oficinas",
    category: "comercial",
    content: `Diseñadas para Uumbal, las oficinas ubicadas en Chiapas, dentro de una planta extractora de aceite de palma, retoman la intención sustentable y el diseño bioclimático del proyecto "La Ceiba", adaptándolo a un lenguaje arquitectónico con un giro industrial a través de la selección de materiales. La estructura de acero elevada aporta ligereza y reduce el impacto sobre el terreno, mientras que los techos verdes, independientes de la estructura, funcionan como aislantes térmicos. Los muros, construidos con bloques de tierra comprimida (BTC), incorporan líneas modernas que permiten una integración armónica con el paisaje natural.`,
  },
  {
    slug: "tolsa",
    title: "TOLSÁ",
    subtitle: "Una casa serena en la Ciudad de México",
    description:
      "Rodeada de jardines de encinos y magnolias, esta casa en la Ciudad de México recibe con una atmósfera serena y contemplativa. Una escalinata de piedra labrada en espiral evoca la forma de un caracol.",
    year: "2023",
    coverImage: "portada-tolsa.jpg",
    folderPath: "tolsa",
    category: "residencial",
    content: `Rodeada de jardines de encinos y magnolias, esta casa en la Ciudad de México recibe con una atmósfera serena y contemplativa. Una escalinata de piedra labrada en espiral evoca la forma de un caracol, conduciendo al corazón del espacio: una piedra de granito donde el agua fluye sutilmente, llenando el ambiente de sonido y calma. Un domo en forma de luna baña con luz cambiante el muro curvo de la escalera, creando un santuario donde la naturaleza habita. La fachada, envuelta en bloques de piedra suavemente curvados, enmarca vistas al jardín y otorga al interior la sensación de una cueva acogedora. La casa cuenta con 350 m², tres recámaras principales y una de servicio.`,
  },
  {
    slug: "casa-valle",
    title: "CASA VALLE",
    subtitle: "Remodelación de una casa icónica en Valle de Bravo",
    description:
      'Diseñada por el arquitecto Víctor de la Lama en 1962, y ubicada en Valle de Bravo, las casas del conjunto "La Balsa" se caracterizan por su estructura en forma de "A" con fachadas de vidrio orientadas al lago.',
    year: "2016",
    coverImage: "valle-portada.jpg",
    folderPath: "casa-valle",
    category: "residencial",
    content: `Diseñada por el arquitecto Víctor de la Lama en 1962, y ubicada en Valle de Bravo, las casas del conjunto "La Balsa" se caracterizan por su estructura en forma de "A", basada en marcos metálicos, con muros y entrepisos de madera y techos exteriores de tejamanil. Las fachadas de vidrio orientadas al lago y sus terrazas de madera evocan la sensación de flotar sobre el agua. En 2016, esta casa fue remodelada por Lucila Aguilar Arquitectos para adaptarse a las nuevas necesidades de la familia, preservando su esencia original y la integración armónica con el entorno natural.`,
  },
  {
    slug: "jardin-de-la-diosa",
    title: "JARDÍN DE LA DIOSA",
    subtitle: "Pabellón de Bambú Contemplativo",
    description:
      "Ubicado en Salazar, dentro de un jardín boscoso, establece una conexión fluida con su entorno gracias a sus fachadas de vidrio sin marcos, que permiten una integración visual total con la naturaleza.",
    year: "2024",
    coverImage: "portada-jd-6.jpg",
    folderPath: "jardin-de-la-diosa",
    category: "publico",
    content: `Ubicado en Salazar, dentro de un jardín boscoso, el Pabellón de Bambú establece una conexión fluida con su entorno gracias a sus fachadas de vidrio sin marcos, que permiten una integración visual total con la naturaleza. Este espacio acogedor y contemplativo está diseñado para albergar tanto talleres y clases de bienestar como eventos sociales. En su interior, el juego de luces y sombras proyectadas por los árboles sobre la cubierta se convierte en parte esencial de la experiencia sensorial y contemplativa.`,
  },
  {
    slug: "orquideario",
    title: "ORQUIDEARIO",
    subtitle: "Un ícono verde en el corazón de la Ciudad de México",
    description:
      "Los invernaderos nacieron para proteger a las plantas, pero paradójicamente dieron nombre al efecto invernadero. Este proyecto buscó retar esa paradoja: crear un invernadero sustentable hecho de bambú en el Jardín Botánico de Chapultepec.",
    year: "2023",
    coverImage: "orquideario-portada.jpg",
    folderPath: "orquideario",
    category: "publico",
    content: `Un ícono verde en el corazón de la Ciudad de México
Los invernaderos nacieron para proteger a las plantas, pero paradójicamente dieron nombre al efecto invernadero, uno de los procesos que más daña a la naturaleza. Este proyecto buscó retar esa paradoja: crear un invernadero sustentable hecho de bambú en el Jardín Botánico de Chapultepec.

El valor del bambú
● Crece rápido, absorbe CO₂ y purifica el ambiente.
● Tan fuerte y flexible como el acero y el concreto.
● Su producción tiene un impacto ambiental mínimo frente a materiales convencionales.

Diseño y construcción
● Proyecto en colaboración con el experto en bambú Jörg Stamm.
● Estructura ligera que salva claros de más de 10 metros sin columnas.
● Se construyó en solo 3 días gracias a su practicidad.

Un espacio vivo
Hoy, este invernadero funciona como orquideario en el Jardín Botánico. Es un ejemplo urbano del potencial del bambú y un símbolo de cómo la arquitectura puede ayudar a sanar nuestra relación con la naturaleza.`,
  },
  {
    slug: "gst-library-proyecto",
    title: "GST LIBRARY",
    subtitle: "Santuario Contemplativo para Niños",
    description:
      "Una de las 64 estructuras de bambú que conforman Green School Tulum, un proyecto educativo dedicado a formar a los líderes verdes del futuro. Ubicada al final del recorrido principal como un santuario contemplativo.",
    year: "2024",
    coverImage: "gst-portada.jpg",
    folderPath: "gst",
    category: "publico",
    content: `La Biblioteca es una de las 64 estructuras de bambú que conforman Green School Tulum, un proyecto educativo dedicado a formar a los líderes verdes del futuro. Inspirada en la sustentabilidad y creatividad artística de Green School Bali, esta escuela busca integrar el aprendizaje con la naturaleza.

Ubicada al final del recorrido principal, la Biblioteca se concibe como un santuario contemplativo para los niños. El edificio combina diversas técnicas constructivas: un muro de piedra local, que se disuelve en los extremos, abraza un jardín de agua central. Sobre él, una estructura ligera de bambú da forma a un techo que permite la transparencia y la conexión con el entorno.

El susurro del agua, la luz filtrada entre el bambú y la vegetación que envuelve el espacio crean una atmósfera serena y envolvente, invitando a los niños a disfrutar momentos de introspección, lectura y calma en plena conexión con la naturaleza.`,
  },
  {
    slug: "loto",
    title: "LOTO - PABELLÓN FLOTANTE",
    subtitle: "Un pabellón monumental de bambú inspirado en la naturaleza",
    description:
      "Una estructura única en el mundo por su escala e ingeniería. Su diseño de bambú permite un gran espacio sin columnas intermedias, flexible y lleno de belleza, pensado para albergar todo tipo de eventos.",
    year: "2023",
    coverImage: "loto-portada.jpg",
    folderPath: "loto",
    category: "exposicion",
    content: `Un pabellón monumental de bambú inspirado en la naturaleza
Loto es una estructura única en el mundo por su escala e ingeniería. Su diseño de bambú permite un gran espacio sin columnas intermedias, flexible y lleno de belleza, pensado para albergar todo tipo de eventos: bodas, conciertos, exhibiciones de arte y más.

Inspirado en la flor de loto
La forma del pabellón evoca a la flor de loto, símbolo de pureza, resiliencia e iluminación: incluso en aguas turbias, florece con fuerza y belleza. Así, la estructura transmite un mensaje de esperanza y renovación.

El poder del bambú
● Material flexible y fuerte, capaz de salvar claros monumentales.
● Proporciona una estética orgánica y ligera, distinta a las estructuras industriales tradicionales.
● Resistente al clima, brinda protección contra lluvia y sol.

Un mensaje al mundo
Loto demuestra que el bambú no es solo un material sustentable, sino también resistente, monumental y bello, capaz de transformar la arquitectura a gran escala.`,
  },
  {
    slug: "refugio-oajtl-cca-chapultepec",
    title: "REFUGIO OAJTL - CCA CHAPULTEPEC",
    subtitle: "Un museo natural en el corazón del bosque",
    description:
      "Este proyecto propone un espacio que celebra la relación entre las especies naturales y el ser humano, recordándonos que La Tierra es nuestro refugio más esencial.",
    year: "2023",
    coverImage: "refugio-oajtl-portada.jpg",
    folderPath: "refugio-oajtl-cca-chapultepec",
    category: "publico",
    content: `Un museo natural en el corazón del bosque
Este proyecto propone un espacio que celebra la relación entre las especies naturales y el ser humano, recordándonos que La Tierra es nuestro refugio más esencial.

Una arquitectura regenerativa
El diseño plantea sustituir materiales contaminantes como el acero y el concreto por recursos renovables que contribuyan al bienestar del planeta. Con creatividad y materiales naturales, la arquitectura se convierte en una herramienta para imaginar un futuro más armónico y sostenible.

Reconocimiento
Realizado en colaboración con C Cúbica Arquitectos y Pedro Sánchez Paisajismo, este proyecto recibió Mención Honorífica en el Concurso Nacional Jardín Temático – Etnobotánico.`,
  },
];
