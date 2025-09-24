import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen max-h-[920px] flex items-center p-8 max-w-[1440px] mx-auto">
        <div className="absolute inset-8 overflow-hidden mt-6">
          <Image
            src="/images/hero.png"
            alt="Bamboo architecture in nature"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="relative z-10 max-w-lg ml-auto mr-8 bg-white/60 backdrop-blur-md p-8 shadow-2xl h-5/6 flex flex-col justify-end">
          <h1 className="text-3xl md:text-5xl font-normal text-black mb-6 font-baskervville drop-shadow-lg">
            ACERCA DE NOSOTROS
          </h1>
          <p className="text-lg text-black mb-4 drop-shadow-md">
            Conoce más sobre nuestra filosofía y compromiso con la arquitectura
            regenerativa
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 font-baskervville">
            NUESTRA HISTORIA
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Somos un despacho de arquitectura comprometido con la creación de
            espacios que sanan, conectan y regeneran. Nuestra filosofía se basa
            en la integración de saberes ancestrales con tecnología de
            vanguardia para construir un futuro más sostenible.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Desde nuestros inicios, hemos trabajado con materiales naturales
            como el bambú, implementando técnicas de construcción que respetan
            el medio ambiente y fomentan el desarrollo de economías locales.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
