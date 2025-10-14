import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Estudio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative lg:h-[90vh] md:h-[80vh] h-[70vh] max-h-[700px] flex items-center p-8 lg:mb-40 mb-56 max-w-[1440px] mx-auto">
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
        <div className="lg:relative absolute z-10 lg:max-w-lg w-11/12 lg:ml-auto lg:mr-8 mr-0 lg:left-auto lg:transform-none left-1/2 transform lg:translate-x-0 -translate-x-1/2 bg-white/60 backdrop-blur-md p-8 shadow-2xl lg:h-full flex flex-col justify-end lg:bottom-auto -bottom-40">
          <h1 className="text-2xl md:text-4xl font-normal text-black mb-6 font-baskervville drop-shadow-lg">
            UN ENFOQUE CONSCIENTE EN LA ARQUITECTURA
          </h1>
          <p className="text-lg text-black mb-4 drop-shadow-md">
            Diseñamos y construimos una arquitectura que nace de la tierra y
            mira al futuro: sensible, inteligente y viva.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col gap-8 md:mb-48 mb-16 items-end">
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
            NUESTRO MANIFIESTO
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

      {/* Section 2 */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col gap-8 md:mb-48 mb-16 items-end">
        <div className="relative md:w-1/2 w-full md:pl-16 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 font-baskervville">
            NUESTRO MANIFIESTO
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
        <div className="relative md:h-[720px] h-96 md:w-1/2 w-full order-1 md:order-2">
          <Image
            src="/images/estudio-2.jpg"
            alt="Modern architecture"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col gap-8 md:mb-48 mb-16 items-end">
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
            NUESTRO MANIFIESTO
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

      <Footer />
    </div>
  );
}
