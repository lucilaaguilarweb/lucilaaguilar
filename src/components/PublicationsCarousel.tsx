"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { publicationsData } from "@/data/publicationsData";

export default function PublicationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Filter only print publications (those with folderPath and coverImage)
  const printPublications = publicationsData.filter(
    (publication) => publication.folderPath && publication.coverImage
  );

  // Responsive items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1); // Mobile: 1 card per page
      } else if (width < 768) {
        setItemsPerPage(2); // Small tablet: 2 cards per page
      } else if (width < 1024) {
        setItemsPerPage(2); // Medium tablet: 2 cards per page
      } else {
        setItemsPerPage(3); // Desktop: 3 cards per page
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Group publications into pages based on responsive itemsPerPage
  const totalPages = Math.ceil(printPublications.length / itemsPerPage);

  const groupedPublications: (typeof printPublications)[] = [];
  for (let i = 0; i < printPublications.length; i += itemsPerPage) {
    groupedPublications.push(printPublications.slice(i, i + itemsPerPage));
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {/* Top Navigation */}
      <div className="flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start mb-6 gap-4">
        <div className="flex md:flex-row flex-col md:gap-8 gap-2">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 font-baskervville text-left">
            IMPRESAS
          </h2>
          {/* Publication Selector */}
          <div className="flex-1 max-w-xs">
            <select
              defaultValue=""
              onChange={(e) => {
                if (e.target.value) {
                  window.location.href = `/medios/${e.target.value}`;
                }
              }}
              className="w-full px-2 py-2 border-[1px] border-gray-600 bg-white text-black font-medium focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
              aria-label="Select publication"
            >
              <option value="">Seleccionar publicación...</option>
              {printPublications.map((publication) => (
                <option key={publication.id} value={publication.slug}>
                  {publication.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 items-center">
          <button
            onClick={goToPrevious}
            className="p-3 border-2 border-black hover:bg-black hover:text-white transition-colors duration-200"
            aria-label="Previous publication"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="p-3 border-2 border-black hover:bg-black hover:text-white transition-colors duration-200"
            aria-label="Next publication"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {groupedPublications.map((page, pageIndex) => (
            <div key={pageIndex} className="w-full flex-shrink-0 px-4">
              <div
                className="grid gap-6"
                style={{
                  gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
                }}
              >
                {page.map((publication) => (
                  <div
                    key={publication.id}
                    className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-[300px] w-full bg-gray-200">
                      <Image
                        src={publication.coverImage!}
                        alt={publication.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                        priority={false}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-white/90 text-black text-sm font-medium rounded-full">
                          {publication.year}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-normal text-gray-900 mb-2 font-baskervville">
                        {publication.title}
                      </h3>
                      <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                        {publication.description}
                      </p>

                      <div className="flex items-center justify-end">
                        <Link
                          href={`/medios/${publication.slug}`}
                          className="inline-flex items-center text-black font-medium uppercase underline hover:text-gray-700 transition-colors duration-200"
                        >
                          Ver publicación
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
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Page Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {groupedPublications.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
