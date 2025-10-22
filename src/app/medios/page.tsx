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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Filter web publications from the unified data
  const webPublications = publicationsData.filter(
    (publication) => publication.type === "web"
  );

  const videos = [
    {
      id: "1",
      title: "1. Ink Talk - India",
      embedUrl: "https://www.youtube.com/embed/ZVlLWTKoEAI",
    },
    {
      id: "2",
      title: "2. Crece tu Casa",
      embedUrl: "https://www.youtube.com/embed/mtjqg2iPZgQ",
    },
    {
      id: "3",
      title: "3. Green School Tulum",
      embedUrl: "https://www.youtube.com/embed/DR6yQWYC9hs",
    },
    {
      id: "4",
      title: "4. Orquideario Chapultepec",
      embedUrl: "https://player.vimeo.com/video/379308452",
    },
    {
      id: "5",
      title: "5. Taller de Bambú Uumbal",
      embedUrl: "https://www.youtube.com/embed/GxWGKKMpjRQ",
    },
    {
      id: "6",
      title: "6. Exposición UNAM Victor de la Lama Linaje Creativo",
      embedUrl: "https://player.vimeo.com/video/136242935",
    },
  ];

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
      <section className="relative lg:h-[95vh] md:h-[80vh] h-[70vh] max-h-[700px] flex items-center p-8 lg:mb-0 mb-56 max-w-[1440px] mx-auto mt-8">
        <div className="absolute inset-8 overflow-hidden mt-6">
          <Image
            src="/images/medios/medios-portada.png"
            alt="Press and media coverage"
            fill
            className="object-cover lg:object-right object-bottom"
            priority
          />
        </div>
        <div className="lg:relative absolute z-10 lg:max-w-sm w-11/12 lg:ml-auto lg:mr-8 mr-0 lg:left-auto lg:transform-none left-1/2 transform lg:translate-x-0 -translate-x-1/2 bg-white/60 backdrop-blur-md p-8 shadow-2xl lg:h-full flex flex-col justify-end lg:bottom-auto -bottom-48">
          <h1 className="text-2xl md:text-5xl font-normal text-black mb-6 font-baskervville drop-shadow-lg">
            Huella en la prensa
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
          Web
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

      {/* Multimedia Section */}
      <section className="py-20 bg-white max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-12 font-baskervville text-center">
          Multimedia
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="relative h-48 bg-black flex items-center justify-center cursor-pointer hover:bg-gray-900 transition-colors group"
                onClick={() => setSelectedVideo(video.embedUrl)}
              >
                {/* Play Button Circle */}
                <div className="w-20 h-20 rounded-full bg-black border-4 border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-10 h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-normal text-gray-900 mb-2 font-baskervville">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Embed */}
            <iframe
              className="w-full h-full"
              src={selectedVideo}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
