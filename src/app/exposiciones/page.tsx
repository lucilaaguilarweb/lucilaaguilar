"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingSpinner from "@/components/LoadingSpinner";
import ExhibitionsCarousel from "@/components/ExhibitionsCarousel";

export default function Exposiciones() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Loading Spinner */}
      {isLoading && <LoadingSpinner />}

      <Navigation />

      {/* Hero Section */}
      <section className="relative lg:h-[95vh] md:h-[80vh] h-[70vh] max-h-[700px] flex items-center p-8 lg:mb-0 mb-56 max-w-[1440px] mx-auto">
        <div className="absolute inset-8 overflow-hidden mt-6">
          <Image
            src="/images/exposiciones/yoo-design-week-mexico/06-yoo-design-week-6.jpg"
            alt="Exposiciones y bienales internacionales"
            fill
            className="object-cover lg:object-right object-bottom"
            priority
            sizes="100vw"
          />
        </div>
        <div className="lg:relative absolute z-10 lg:max-w-lg w-11/12 lg:ml-auto lg:mr-8 mr-0 lg:left-auto lg:transform-none left-1/2 transform lg:translate-x-0 -translate-x-1/2 bg-white/60 backdrop-blur-md p-8 shadow-2xl lg:h-full flex flex-col justify-end lg:bottom-auto -bottom-48">
          <h1 className="text-3xl md:text-5xl font-normal text-black mb-6 font-baskervville drop-shadow-lg">
            EXPOSICIONES Y BIENALES
          </h1>
          <p className="text-lg text-black mb-4 drop-shadow-md">
            Participación en eventos internacionales que reconocen la innovación
            en arquitectura sustentable.
          </p>
        </div>
      </section>

      {/* Exibitions Section */}
      <section className="py-20 bg-gray-100 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <ExhibitionsCarousel />
      </section>

      <Footer />
    </div>
  );
}
