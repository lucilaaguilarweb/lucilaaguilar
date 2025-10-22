import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import { studioTimelineData } from "@/data/studioTimelineData";

export default function Estudio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative lg:h-[90vh] md:h-[80vh] h-[70vh] max-h-[700px] flex items-center p-8 lg:mb-0 mb-56 max-w-[1440px] mx-auto mt-8">
        <div className="absolute inset-8 overflow-hidden mt-6">
          <Image
            src="/images/estudio-1.jpg"
            alt="Bamboo architecture in nature"
            fill
            className="object-cover lg:object-right object-left hidden lg:block"
            priority
          />
          <Image
            src="/images/estudio-1Mobile.jpg"
            alt="Bamboo architecture in nature"
            fill
            className="object-cover block lg:hidden"
            priority
          />
        </div>
        <div className="lg:relative absolute z-10 lg:max-w-sm w-11/12 lg:ml-auto lg:mr-8 mr-0 lg:left-auto lg:transform-none left-1/2 transform lg:translate-x-0 -translate-x-1/2 bg-white/60 backdrop-blur-md p-8 shadow-2xl lg:h-full flex flex-col justify-end lg:bottom-auto -bottom-40">
          <h1 className="text-2xl md:text-4xl font-normal text-black mb-6 font-baskervville drop-shadow-lg">
            Un enfoque consciente en la arquitectura
          </h1>
          <p className="text-lg text-black mb-4 drop-shadow-md">
            Diseñamos y construimos una arquitectura que nace de la tierra y
            mira al futuro: sensible, inteligente y viva.
          </p>
        </div>
      </section>

      {/* Studio Introduction */}
      <section className="md:pb-20 pb-8 bg-white max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 font-baskervville">
            Estudio
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Lucila Aguilar y Esteve Arquitectos es una firma dedicada a
            redefinir espacios a través de formas sostenibles de ser, vivir y
            relacionarse. Nos dedicamos a crear espacios que inspiren y conecten
            con la naturaleza, con el objetivo de generar una conciencia social
            y ecológica que nos reconozca como parte orgánica del planeta.
          </p>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col gap-8 mb-12 items-end">
        <div className="relative md:h-[720px] h-96 md:w-1/2 w-full">
          <Image
            src="/images/estudio-2.jpg"
            alt="Modern architecture"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative md:w-1/2 w-full md:pl-16">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 font-baskervville">
            Nuestro manifiesto
          </h2>
          <p className="text-lg text-gray-500 mb-12 uppercase mt-1">
            Arquitectura al servicio de la tierra.
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-normal text-gray-900 mb-3 font-baskervville">
                  Combinamos lo ancestral con lo innovador
                </h3>
                <p className="text-lg text-gray-700">
                  Unimos la sabiduría de las técnicas tradicionales con la
                  tecnología de vanguardia, usando modelado paramétrico y
                  herramientas de precisión para diseñar con eficiencia. Cada
                  proyecto es una oportunidad para regenerar.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-normal text-gray-900 mb-3 font-baskervville">
                  Diseño con propósito
                </h3>
                <p className="text-lg text-gray-700">
                  Nuestra arquitectura sana, conecta e inspira, creando espacios
                  que no solo son bellos, sino que también contribuyen
                  positivamente al planeta.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-normal text-gray-900 mb-3 font-baskervville">
                  Nuestros valores
                </h3>
                <p className="text-lg text-gray-700">
                  Nos mueven el amor por la naturaleza, la curiosidad, la
                  sostenibilidad, la creatividad sin miedo y la belleza con
                  intención.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-12 font-baskervville md:text-center text-left">
          CONOCE AL EQUIPO
        </h2>

        <div className="flex md:flex-row flex-col gap-8">
          {/* Lucila Aguilar */}
          <div className="text-left flex-1">
            <div className="relative md:h-[600px] h-72 mb-6">
              <Image
                src="/images/estudio-3.jpg"
                alt="Lucila Aguilar"
                fill
                className="object-cover object-top"
              />
            </div>
            <h3 className="text-2xl font-normal text-gray-900 mb-4 font-baskervville">
              Lucila Aguilar
            </h3>
            <p className="text-gray-700 mb-6">
              Lucila Aguilar de la Lama es arquitecta por la Universidad
              Iberoamericana (CDMX) y socia fundadora de Lucila Aguilar
              Arquitectos. Persigue la integración del diseño artístico de
              calidad y el desarrollo sostenible, temas sobre los que se ha
              formado en instituciones como Chicago Art Institute, RISD, ICP
              (NY) y Bamboo U (Bali). Ha colaborado en los despachos de Alberto
              Kalach (CDMX) y Emilio Ambasz (NY).
            </p>
          </div>

          {/* Jorge Esteve Aguilar */}
          <div className="text-left flex-1">
            <div className="relative md:h-[600px] h-72 mb-6">
              <Image
                src="/images/estudio-4.jpg"
                alt="Jorge Esteve Aguilar"
                fill
                className="object-cover object-top"
              />
            </div>
            <h3 className="text-2xl font-normal text-gray-900 mb-4 font-baskervville">
              Jorge Esteve Aguilar
            </h3>
            <p className="text-gray-700 mb-6">
              Jorge Esteve Aguilar es arquitecto por la Universidad
              Iberoamericana (CDMX) y socio de Lucila Aguilar Arquitectos. Su
              trayectoria internacional inició en Bamboo U (Bali), escuela
              especializada en construcción sustentable y permacultura, donde
              adquirió experiencia práctica en el uso del bambú y en la
              coordinación de proyectos educativos. Posteriormente, cursó
              estudios en Nordfjord Folkehøgskule (Noruega), reforzando su
              interés por la arquitectura vinculada a la naturaleza. Ha formado
              parte del equipo de Green School Tulum, desarrollando proyectos
              educativos con un enfoque integral de sustentabilidad. Su trabajo
              integra diseño, funcionalidad y respeto por el entorno.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Timeline Accordion */}
      <Accordion
        items={studioTimelineData}
        title="Una historia de innovación y reconocimiento"
        subtitle="Desde nuestros inicios, hemos participado en proyectos, exposiciones y premios que nos han llevado de México al mundo. Esta es una mirada a algunos de nuestros hitos."
      />

      <Footer />
    </div>
  );
}
