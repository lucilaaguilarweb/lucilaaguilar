"use client";

import { useRef } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { timelineData } from "@/data/timelineData";
import useHeroClipPathAnimation from "@/components/useHeroClipPathAnimation";
import useMultiImageClipPathAnimation from "@/components/useMultiImageClipPathAnimation";

export default function Home() {
  const imageRef = useRef<HTMLDivElement>(null);

  // Create refs for all other images on the page
  const section1Image1Ref = useRef<HTMLDivElement>(null);
  const section1Image2Ref = useRef<HTMLDivElement>(null);
  const section2Image1Ref = useRef<HTMLDivElement>(null);
  const section2Image2Ref = useRef<HTMLDivElement>(null);
  const section2Image3Ref = useRef<HTMLDivElement>(null);
  const section3Image1Ref = useRef<HTMLDivElement>(null);
  const section4Image1Ref = useRef<HTMLDivElement>(null);
  const section4Image2Ref = useRef<HTMLDivElement>(null);
  const section5Image1Ref = useRef<HTMLDivElement>(null);
  const section6Image1Ref = useRef<HTMLDivElement>(null);

  // Initialize hero clip-path animation
  useHeroClipPathAnimation(imageRef, {
    enabled: true,
    maxInset: 100,
    minInset: 0,
  });

  // Initialize multi-image clip-path animation for all other images
  useMultiImageClipPathAnimation(
    [
      section1Image1Ref,
      section1Image2Ref,
      section2Image1Ref,
      section2Image2Ref,
      section2Image3Ref,
      section3Image1Ref,
      section4Image1Ref,
      section4Image2Ref,
      section5Image1Ref,
      section6Image1Ref,
    ],
    {
      enabled: true,
      maxInset: 80,
      minInset: 0,
    }
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative lg:h-[95vh] md:h-[80vh] h-[70vh] max-h-[700px] flex items-center p-8 lg:mb-0 mb-96 max-w-[1440px] mx-auto">
        <div
          ref={imageRef}
          className="absolute inset-8 overflow-hidden mt-6"
          style={{ clipPath: "inset(0px)" }}
        >
          <Image
            src="/images/hero.png"
            alt="Bamboo architecture in nature"
            fill
            className="object-cover lg:object-right object-bottom"
            priority
          />
        </div>
        <div className="lg:relative absolute z-10 lg:max-w-lg w-11/12 lg:ml-auto lg:mr-8 mr-0 lg:left-auto lg:transform-none left-1/2 transform lg:translate-x-0 -translate-x-1/2 bg-white/60 backdrop-blur-md p-8 shadow-2xl lg:h-full flex flex-col justify-end lg:bottom-auto -bottom-88">
          <h1 className="text-3xl md:text-5xl font-normal text-black md:mb-6 mb-4 font-baskervville drop-shadow-lg">
            ARQUITECTURA QUE SANA Y CONECTA
          </h1>
          <p className="text-lg text-black mb-4 drop-shadow-md">
            Espacios vivos que inspiran, conectan y respiran con la naturaleza
          </p>
          <a>Ver proyectos</a>
          <div className="flex gap-4 mt-8">
            <div className="relative w-24 h-24">
              <Image
                src="/images/herologo1.png"
                alt="Logo 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-24 h-24 p-1">
              <Image
                src="/images/herologo2.png"
                alt="Logo 2"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Architecture at Service of Earth */}
      <section className="pb-20 bg-white max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-end mb-16 uppercase text-gray-500 items-center">
          <div className="h-[1px] w-12 bg-gray-500 mr-4"></div>
          <p>Cada proyecto porta la semilla de una conciencia sustentable</p>
          <div className="h-[1px] w-12 bg-gray-500 ml-4"></div>
        </div>
        <div className="max-w-4xl md:mb-16 mb-0">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 font-baskervville">
            ARQUITECTURA AL SERVICIO DE LA TIERRA
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Somos un despacho en la Ciudad de México que imagina y construye
            espacios para un futuro regenerativo. Combinamos saberes ancestrales
            y tecnología de vanguardia para crear proyectos que transforman la
            forma en que habitamos, conectándonos de nuevo con la Tierra y entre
            nosotros.
          </p>
          <a
            href="#"
            className="text-gray-900 font-semibold underline hover:no-underline transition-all"
          >
            CONOCE EL ESTUDIO
          </a>
        </div>
      </section>

      {/* Cocoon Project Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 md:pb-24 pb-0">
        <div className="flex flex-row md:gap-8 gap-4 mb-12">
          <div
            ref={section1Image1Ref}
            className="relative md:h-[720px] h-80 w-2/6"
            style={{ clipPath: "inset(80px)" }}
          >
            <Image
              src="/images/section1-1.png"
              alt="Bamboo texture"
              fill
              className="object-cover"
            />
          </div>
          <div
            ref={section1Image2Ref}
            className="relative md:h-[720px] h-80 w-4/6"
            style={{ clipPath: "inset(80px)" }}
          >
            <Image
              src="/images/section1-2.png"
              alt="Person in bamboo structure"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 font-baskervville">
            Cocoon Project: modular, sustentable e innovador
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Ganador del Luxury Lifestyle Award y presentado en la Bienal de
            Arquitectura de Venecia 2025, el Cocoon Project es un sistema de
            alojamiento modular en bambú, adaptable a entornos naturales y
            diseñado para la hotelería y el ecoturismo. Montable, desmontable y
            en armonía con el paisaje.
          </p>
          <a
            href="#"
            className="text-gray-900 font-semibold underline hover:no-underline transition-all"
          >
            VER MÁS
          </a>
        </div>
      </section>

      {/* Building with Green Roof */}
      <section className="relative md:px-8 px-4 max-w-[1440px] mx-auto pt-20">
        <div
          ref={section2Image1Ref}
          className="relative w-full md:h-96 h-64"
          style={{ clipPath: "inset(80px)" }}
        >
          <Image
            src="/images/section2-1.png"
            alt="Green roof building with gardener"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-8 gap-4 w-full md:pt-8 pt-4">
          <div
            ref={section2Image2Ref}
            className="relative md:w-1/2 w-full md:h-96 h-64"
            style={{ clipPath: "inset(80px)" }}
          >
            <Image
              src="/images/section2-2.png"
              alt="Decorative light pattern"
              fill
              className="object-cover"
            />
          </div>
          <div
            ref={section2Image3Ref}
            className="relative md:w-1/2 w-full md:h-96 h-64"
            style={{ clipPath: "inset(80px)" }}
          >
            <Image
              src="/images/section2-3.png"
              alt="Interior with bamboo and pool"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full flex justify-start mb-16 uppercase text-gray-500 items-center mt-6">
          <div className="h-[1px] w-12 bg-gray-500 mr-4"></div>
          <p>La arquitectura es un puente entre el alma y la Tierra</p>
          <div className="h-[1px] w-12 bg-gray-500 ml-4"></div>
        </div>
      </section>

      {/* Bamboo Architecture Section */}
      <section className="md:py-20 py-8 bg-white max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-12 font-baskervville md:text-right text-left">
          BAMBÚ: NATURALEZA HECHA ARQUITECTURA
        </h2>
        <div className="flex flex-col">
          <div
            ref={section3Image1Ref}
            className="relative h-64 md:h-[500px] md:mb-12 mb-0 md:mt-0 mt-8 md:order-1 order-2"
            style={{ clipPath: "inset(80px)" }}
          >
            <Image
              src="/images/section3-1.png"
              alt="Bamboo architecture building"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full flex justify-end md:order-2 order-1">
            <div className="">
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Encontramos en el bambú un aliado inigualable: renovable,
                resistente y bello. Este material, cultivado y trabajado
                localmente, nos permite diseñar estructuras eficientes, ligeras
                y orgánicas que regeneran el entorno y fomentan economías
                locales.
              </p>
              <a
                href="#"
                className="text-gray-900 font-semibold underline hover:no-underline transition-all"
              >
                VER MÁS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="md:py-20 py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 md:text-center text-left">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-8 font-baskervville">
            PROYECTOS QUE INSPIRAN Y REGENERAN
          </h2>
          <a
            href="#"
            className="text-gray-900 font-semibold underline hover:no-underline transition-all mb-12 inline-block"
          >
            VER MÁS
          </a>

          <div className="flex md:flex-row flex-col gap-8">
            {/* Humanitrek Caucasio Project */}
            <div className="text-left">
              <div
                ref={section4Image1Ref}
                className="relative md:h-[800px] h-96 mb-6"
                style={{ clipPath: "inset(80px)" }}
              >
                <Image
                  src="/images/section4-1.png"
                  alt="Humanitrek Caucasio project"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4 font-baskervville">
                HUMANITREK CAUCASO
              </h3>
              <p className="text-gray-700 mb-6">
                Proyecto que integra arquitectura, juego y aprendizaje mediante
                cocoons de bambú y paracord en tres niveles temáticos.
              </p>
              <a
                href="#"
                className="text-gray-900 font-semibold underline hover:no-underline transition-all"
              >
                EXPLORAR
              </a>
            </div>

            {/* Pabellón Semilla Project */}
            <div className="text-left">
              <div
                ref={section4Image2Ref}
                className="relative md:h-[800px] h-96 mb-6"
                style={{ clipPath: "inset(80px)" }}
              >
                <Image
                  src="/images/section4-2.png"
                  alt="Pabellón Semilla project"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4 font-baskervville">
                PABELLÓN SEMILLA
              </h3>
              <p className="text-gray-700 mb-6">
                Espacio icónico que dignifica el trabajo del cacao y la
                comunidad que lo cultiva.
              </p>
              <a
                href="#"
                className="text-gray-900 font-semibold underline hover:no-underline transition-all"
              >
                EXPLORAR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal mb-8 font-baskervville max-w-2xl">
            UNA HISTORIA DE INNOVACIÓN Y RECONOCIMIENTO
          </h2>
          <p className="text-lg mb-12 max-w-2xl">
            Desde nuestros inicios, hemos participado en proyectos, exposiciones
            y premios que nos han llevado de México al mundo. Esta es una mirada
            a algunos de nuestros hitos.
          </p>

          <div className="flex md:flex-col flex-row md:gap-0 gap-4">
            {/* Timeline visual elements (circles and lines) */}
            <div className="flex md:flex-row flex-col items-center mb-8">
              {timelineData.map((_, index) => (
                <div
                  key={index}
                  className="flex-1 flex md:flex-row flex-col items-center"
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  {index < timelineData.length - 1 && (
                    <div className="flex-1 md:h-[1px] md:w-full w-[1px] h-full  bg-gray-600"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Timeline content */}
            <div className="grid md:grid-cols-5 md:grid-rows-1 grid-rows-5 gap-4 mb-16">
              {timelineData.map((item, index) => (
                <div key={index} className="text-left">
                  <div className="text-2xl font-normal mb-2">{item.year}</div>
                  <div className="text-lg font-baskervville mb-2 max-w-[90%]">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-400">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a href="#">Explora nuestra trayectoria completa</a>
        </div>
      </section>

      {/* Illuminated Structures */}
      <section className="py-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={section5Image1Ref}
          className="relative h-96 md:h-[600px]"
          style={{ clipPath: "inset(80px)" }}
        >
          <Image
            src="/images/section5-1.png"
            alt="Illuminated bamboo structures at night"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Ideas that Travel */}
      <section className="md:py-20 pb-16 bg-white max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:gap-24 gap-8 items-center">
          <div
            ref={section6Image1Ref}
            className="relative md:w-5/12 w-full h-[600px]"
            style={{ clipPath: "inset(80px)" }}
          >
          <Image
            src="/images/section6-1.png"
            alt="Magazine cover"
            fill
            className="object-contain rounded-lg"
          />
        </div>

        <div className="md:w-7/12 w-full">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 font-baskervville">
            IDEAS QUE VIAJAN Y TRASCIENDEN
          </h2>
          <p className="text-lg text-gray-700 mb-8">
              Nuestros proyectos han sido parte de bienales, exposiciones y
              medios internacionales como Green Architecture for a sustainable
              future, ⁠Down to Earth, ⁠XIII Bienal de La Habana y Time Space
              Existence 2021 y 2025. Publicamos manuales y recursos para
              inspirar y compartir soluciones sostenibles con el mundo.
          </p>
          <a
            href="#"
            className="text-gray-900 font-semibold underline hover:no-underline transition-all"
          >
            VER MEDIOS
          </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
