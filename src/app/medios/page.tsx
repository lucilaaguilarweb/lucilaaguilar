"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingSpinner from "@/components/LoadingSpinner";
import PublicationsCarousel from "@/components/PublicationsCarousel";
import { publicationsData } from "@/data/publicationsData";

export default function Medios() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Filter web publications from the unified data
  const webPublications = publicationsData.filter(
    (publication) => publication.type === "web"
  );

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
            src="/images/medios-1.jpg"
            alt="Press and media coverage"
            fill
            className="object-cover lg:object-right object-bottom"
            priority
          />
        </div>
        <div className="lg:relative absolute z-10 lg:max-w-lg w-11/12 lg:ml-auto lg:mr-8 mr-0 lg:left-auto lg:transform-none left-1/2 transform lg:translate-x-0 -translate-x-1/2 bg-white/60 backdrop-blur-md p-8 shadow-2xl lg:h-full flex flex-col justify-end lg:bottom-auto -bottom-48">
          <h1 className="text-3xl md:text-5xl font-normal text-black mb-6 font-baskervville drop-shadow-lg">
            HUELLA EN LA PRENSA
          </h1>
          <p className="text-lg text-black mb-4 drop-shadow-md">
            Artículos, entrevistas y publicaciones que cuentan nuestra historia.
          </p>
        </div>
      </section>

      {/* IMPRESAS Section */}
      <section className="py-20 bg-white max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <PublicationsCarousel />
      </section>

      {/* WEB Section */}
      <section className="py-20 bg-gray-100 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-12 font-baskervville text-center">
          WEB
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-2">
            {webPublications.map((publication, index) => (
              <div
                key={publication.id}
                className="bg-white border-b border-gray-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left py-6 px-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-gray-400 text-xl transition-transform duration-200">
                      {openItems.includes(index) ? "−" : "+"}
                    </div>
                    <div className="text-lg font-baskervville text-gray-900">
                      {publication.title}
                    </div>
                  </div>
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed my-4">
                      {publication.description}
                    </p>
                    {publication.link && (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"
                      >
                        Ver publicación →
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
