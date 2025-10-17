"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CocoonGalleryModal from "@/components/CocoonGalleryModal";

export default function CocoonProject() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<{
    number: number;
    title: string;
  } | null>(null);

  const openGallery = (sectionNumber: number, sectionTitle: string) => {
    setSelectedSection({ number: sectionNumber, title: sectionTitle });
    setModalOpen(true);
  };

  const closeGallery = () => {
    setModalOpen(false);
    setSelectedSection(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative lg:h-[90vh] md:h-[80vh] h-[70vh] max-h-[700px] flex items-center p-8 lg:mb-40 mb-56 max-w-[1440px] mx-auto">
        <div className="absolute inset-8 overflow-hidden mt-6">
          <Image
            src="/images/cocoon-project/cocoon-project-hero.jpg"
            alt="Bamboo architecture in nature"
            fill
            className="object-cover lg:object-right object-left hidden lg:block"
            priority
          />
          <Image
            src="/images/cocoon-project/cocoon-project-hero.jpg"
            alt="Bamboo architecture in nature"
            fill
            className="object-cover block lg:hidden"
            priority
          />
        </div>
        <div className="lg:relative absolute z-10 lg:max-w-lg w-11/12 lg:ml-auto lg:mr-8 mr-0 lg:left-auto lg:transform-none left-1/2 transform lg:translate-x-0 -translate-x-1/2 bg-white/60 backdrop-blur-md p-8 shadow-2xl lg:h-full flex flex-col justify-end lg:bottom-auto -bottom-40">
          <h1 className="text-2xl md:text-4xl font-normal text-black mb-6 font-baskervville drop-shadow-lg">
            The Cocoon - Redefiniendo el lujo
          </h1>
          <p className="text-lg text-black mb-4 drop-shadow-md">
            ‍Comienza tu eco hotel con un concepto ganador.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col gap-8 md:mb-48 mb-16 items-end">
        <div className="relative md:h-[720px] h-96 md:w-1/2 w-full">
          <Image
            src="/images/cocoon-project/seccion-1-portada.jpg"
            alt="Modern architecture"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative md:w-1/2 w-full md:pl-16">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 font-baskervville mb-4">
            Best Sustainable Hotel Architecture in Mexico 2025
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Where Nature Meets Next-Level Luxury. In a world where luxury
              architecture often leans toward excess,Aguilar& Esteve stand
              apart, championing a design ethos that is bold, soulful, and
              intimately connected to the natural world. Based in Mexico City,
              this visionary firm is internationally recognized for reimagining
              what luxury can look like in the 21st century. Most recently,
              their groundbreaking Cocoon Project earned them the prestigious
              accolade of Best Luxury Sustainable Hotel Architecture in Mexico
              from Luxury Lifestyle Award, firmly positioning their place among
              the world's elite architectural visionaries.
            </p>
            <button
              onClick={() =>
                openGallery(
                  1,
                  "Best Sustainable Hotel Architecture in Mexico 2025"
                )
              }
              className="mt-6 px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              VER MÁS
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col gap-8 mb-16 items-end">
        <div className="relative md:w-1/2 w-full md:pr-16">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 font-baskervville mb-4">
            Siéntete acocoonado en la naturaleza, vive la experiencia.
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Cocoon Project es un sistema de suites en bambú: modular,
              prefabricado y desmontable. Diseñado para habitar la naturaleza
              con impacto mínimo y alta eficiencia. Cada Cocoon no es solo un
              espacio, sino una experiencia: una convergencia de confort, lujo y
              diseño atemporal. Escalable de una suite a un eco–hotel completo.
            </p>
            <button
              onClick={() =>
                openGallery(
                  2,
                  "Siéntete acocoonado en la naturaleza, vive la experiencia"
                )
              }
              className="mt-6 px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              VER MÁS
            </button>
          </div>
        </div>
        <div className="relative md:h-[720px] h-96 md:w-1/2 w-full order-1 md:order-2">
          <Image
            src="/images/cocoon-project/seccion-2-portada.jpg"
            alt="Modern architecture"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 lg:px-8 my-32">
        <h3 className="text-2xl md:text-4xl font-normal text-gray-900 font-baskervville mb-4">
          ‍- “Their Cocoon Project exemplifies how innovative architecture can
          harmonize comfort, sustainability, and cultural identity – a true
          inspiration to the global design community.” -
        </h3>
        <span>
          said <strong>Alexander Chetchikov</strong>, President of the World
          <strong>Luxury Chamber Of Commerce.</strong>
        </span>
      </section>

      {/* Section 3 */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col gap-8 md:mb-48 mb-16 items-end">
        <div className="relative md:h-[720px] h-96 md:w-1/2 w-full">
          <Image
            src="/images/cocoon-project/seccion-3-portada.jpg"
            alt="Modern architecture"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative md:w-1/2 w-full md:pl-16">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 font-baskervville mb-4">
            Arquitectura a tu medida.
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Cocoon es un sistema que nace ligero y crece contigo. Un sistema
              que permite imaginar rutas distintas: una habitación, o un
              conjunto. Cada pieza encaja en el lugar, dibujando un refugio a la
              medida de tu proyecto.
            </p>
            <button
              onClick={() => openGallery(3, "Arquitectura a tu medida")}
              className="mt-6 px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              VER MÁS
            </button>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col gap-8 items-end bg-gray-100 py-32">
        <div className="relative w-full md:w-1/2 md:pl-16">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 font-baskervville mb-4">
            Reconocimientos y Exposiciones.
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Exhibido en <strong>Time Space Existence</strong> (Biennale di
              Venezia) y ganador de{" "}
              <strong>
                Best Sustainable Hotel Architecture in Mexico 2025
              </strong>{" "}
              Luxury Lifestyle Awards, <strong>Cocoon Project</strong> confirma
              su valor como sistema de hospitalidad sustentable, modular y
              escalable, combinando belleza, eficiencia y experiencia.
            </p>
            <div className="space-y-3 pt-4">
              <p className="text-lg">
                <a
                  href="https://luxurylifestyleawards.com/winners/sustainable-hotel-architecture/lucila-aguilar-arquitectos-sustainable-architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600 underline transition-colors"
                >
                  Winner's profile on the Awards website
                </a>
              </p>
              <p className="text-lg">
                <a
                  href="https://luxurylifestyleawards.com/news/lucila-aguilar-best-sustainable-hotel-architecture-mexico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600 underline transition-colors"
                >
                  Press release about your victory on the Awards website
                </a>
              </p>
              <p className="text-lg">
                <a
                  href="https://luxurylifestyleawards.com/experience/best-sustainable-hotel-architecture-for-the-cocoon-project-in-mexico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600 underline transition-colors"
                >
                  Promotional article about your company on the Awards website
                </a>
              </p>
            </div>
            <button
              onClick={() => openGallery(4, "Reconocimientos y Exposiciones")}
              className="mt-6 px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              VER MÁS
            </button>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 flex flex-row gap-16 items-center">
          <div className="relative md:w-64 md:h-64 w-40 h-48">
            <Image
              src="/images/cocoon-project/seccion-4-portada.jpg"
              alt="Modern architecture"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative md:w-64 md:h-88 w-40 h-48">
            <Image
              src="/images/cocoon-project/seccion-4-01.jpg"
              alt="Modern architecture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />

      {/* Gallery Modal */}
      {selectedSection && (
        <CocoonGalleryModal
          isOpen={modalOpen}
          onClose={closeGallery}
          section={selectedSection.number}
          sectionTitle={selectedSection.title}
        />
      )}
    </div>
  );
}
