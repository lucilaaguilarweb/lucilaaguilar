import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Bambu() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative lg:h-[95vh] md:h-[80vh] h-[70vh] max-h-[700px] flex items-center p-8 lg:mb-0 mb-56 max-w-[1440px] mx-auto">
        <div className="absolute inset-8 overflow-hidden mt-6">
          <Image
            src="/images/bambu-1.png"
            alt="Bamboo architecture and construction"
            fill
            className="object-cover lg:object-right object-bottom"
            priority
          />
        </div>
        <div className="lg:relative absolute z-10 lg:max-w-lg w-11/12 lg:ml-auto lg:mr-8 mr-0 lg:left-auto lg:transform-none left-1/2 transform lg:translate-x-0 -translate-x-1/2 bg-white/60 backdrop-blur-md p-8 shadow-2xl lg:h-full flex flex-col justify-end lg:bottom-auto -bottom-48">
          <h1 className="text-2xl md:text-4xl font-normal text-black mb-6 font-baskervville drop-shadow-lg">
            ARQUITECTURA CON BAMBÚ: LA FIBRA DE UN FUTURO SOSTENIBLE
          </h1>
          <p className="text-lg text-black mb-4 drop-shadow-md">
            Conectamos innovación, tecnología y técnicas artesanales para crear
            espacios que honran a la Tierra.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="md:py-20 py-8 bg-white max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-8 font-baskervville">
            EL MATERIAL QUE SANA Y REGENERA
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            El bambú es más que un material de construcción: es un símbolo de
            nuestra filosofía. Su increíble resistencia y su rápido crecimiento
            lo convierten en un aliado perfecto para crear una arquitectura que
            no solo es hermosa, sino que también contribuye activamente a la
            regeneración de nuestro planeta. En Lucila Aguilar Arquitectos,
            combinamos la sabiduría ancestral de este material con las
            herramientas más innovadoras para llevar el diseño sustentable al
            siguiente nivel.
          </p>
        </div>
      </section>

      {/* Downloadables Section */}
      <section className="py-20 bg-gray-100 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-12 font-baskervville text-center">
          DESCARGABLES
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Manual 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 font-baskervville">
                  Catálogo de Bambú en México
                </h3>
                <p className="text-sm text-gray-500">Documento técnico</p>
              </div>
              <a
                href="/manuales/01. LAA Catalogo de Bambú en México.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black font-medium uppercase underline hover:text-gray-700 transition-colors duration-200"
              >
                Ver PDF
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </a>
            </div>

            {/* Manual 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 font-baskervville">
                  Manual General de Bambú
                </h3>
                <p className="text-sm text-gray-500">Guía completa</p>
              </div>
              <a
                href="/manuales/02. LAA Manual General de Bambú.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black font-medium uppercase underline hover:text-gray-700 transition-colors duration-200"
              >
                Ver PDF
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </a>
            </div>

            {/* Manual 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 font-baskervville">
                  Requisitos Bambú
                </h3>
                <p className="text-sm text-gray-500">
                  Especificaciones técnicas
                </p>
              </div>
              <a
                href="/manuales/03. LAA Requisitos Bambú.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black font-medium uppercase underline hover:text-gray-700 transition-colors duration-200"
              >
                Ver PDF
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </a>
            </div>

            {/* Manual 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 font-baskervville">
                  La Ceiba - Baños
                </h3>
                <p className="text-sm text-gray-500">Sistema constructivo</p>
              </div>
              <a
                href="/manuales/04. LAA La Ceiba- Baños.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black font-medium uppercase underline hover:text-gray-700 transition-colors duration-200"
              >
                Ver PDF
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </a>
            </div>

            {/* Manual 5 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 font-baskervville">
                  La Ceiba - Comedor
                </h3>
                <p className="text-sm text-gray-500">Sistema constructivo</p>
              </div>
              <a
                href="/manuales/05. LAA La Ceiba- Comedor.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black font-medium uppercase underline hover:text-gray-700 transition-colors duration-200"
              >
                Ver PDF
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </a>
            </div>

            {/* Manual 6 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 font-baskervville">
                  La Ceiba - Armaduras
                </h3>
                <p className="text-sm text-gray-500">Sistema constructivo</p>
              </div>
              <a
                href="/manuales/06. LAA La Ceiba- Armaduras.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black font-medium uppercase underline hover:text-gray-700 transition-colors duration-200"
              >
                Ver PDF
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </a>
            </div>

            {/* Manual 7 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 font-baskervville">
                  La Ceiba - Dormitorio
                </h3>
                <p className="text-sm text-gray-500">Sistema constructivo</p>
              </div>
              <a
                href="/manuales/07. LAA La Ceiba- Dormitorio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black font-medium uppercase underline hover:text-gray-700 transition-colors duration-200"
              >
                Ver PDF
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </a>
            </div>

            {/* Manual 8 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 font-baskervville">
                  Crece tu Casa - Bahareque
                </h3>
                <p className="text-sm text-gray-500">Sistema constructivo</p>
              </div>
              <a
                href="/manuales/08. LAA Crece tu Casa-Bahareque.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black font-medium uppercase underline hover:text-gray-700 transition-colors duration-200"
              >
                Ver PDF
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </a>
            </div>

            {/* Manual 9 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 font-baskervville">
                  Crece tu Casa - Paja
                </h3>
                <p className="text-sm text-gray-500">Sistema constructivo</p>
              </div>
              <a
                href="/manuales/09. LAA. Crece tu Casa-Paja.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black font-medium uppercase underline hover:text-gray-700 transition-colors duration-200"
              >
                Ver PDF
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </a>
            </div>

            {/* Manual 10 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 font-baskervville">
                  Crece tu Casa - BTC
                </h3>
                <p className="text-sm text-gray-500">Sistema constructivo</p>
              </div>
              <a
                href="/manuales/10. LAA. Crece tu Casa-BTC.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black font-medium uppercase underline hover:text-gray-700 transition-colors duration-200"
              >
                Ver PDF
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </a>
            </div>

            {/* Manual 11 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 font-baskervville">
                  Crece tu Casa - Pamacon
                </h3>
                <p className="text-sm text-gray-500">Sistema constructivo</p>
              </div>
              <a
                href="/manuales/11. LAA Crece tu Casa-Pamacon.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black font-medium uppercase underline hover:text-gray-700 transition-colors duration-200"
              >
                Ver PDF
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Multimedia Section */}
      <section className="py-20 bg-white  max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-12 font-baskervville text-center">
          MULTIMEDIA
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Video 1 - Ink Talk India */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 bg-gray-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ZVlLWTKoEAI"
                title="Ink Talk - India"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-normal text-gray-900 mb-2 font-baskervville">
                1. Ink Talk - India
              </h3>
            </div>
          </div>

          {/* Video 2 - Crece tu Casa */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 bg-gray-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/mtjqg2iPZgQ"
                title="Crece tu Casa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-normal text-gray-900 mb-2 font-baskervville">
                2. Crece tu Casa
              </h3>
            </div>
          </div>

          {/* Video 3 - Green School Tulum */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 bg-gray-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/DR6yQWYC9hs"
                title="Green School Tulum"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-normal text-gray-900 mb-2 font-baskervville">
                3. Green School Tulum
              </h3>
            </div>
          </div>

          {/* Video 4 - Orquideario Chapultepec */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 bg-gray-200">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/379308452"
                title="Orquideario Chapultepec"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-normal text-gray-900 mb-2 font-baskervville">
                4. Orquideario Chapultepec
              </h3>
            </div>
          </div>

          {/* Video 5 - Taller de Bambú Uumbal */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 bg-gray-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/GxWGKKMpjRQ"
                title="Taller de Bambú Uumbal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-normal text-gray-900 mb-2 font-baskervville">
                5. Taller de Bambú Uumbal
              </h3>
            </div>
          </div>

          {/* Video 6 - Exposición UNAM Victor de la Lama */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 bg-gray-200">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/136242935"
                title="Exposición UNAM Victor de la Lama Linaje Creativo"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-normal text-gray-900 mb-2 font-baskervville">
                6. Exposición UNAM Victor de la Lama Linaje Creativo
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
