"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projectsData";

export default function Proyectos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Show only the first 4 projects in the carousel
  const featuredProjects = projectsData.slice(0, 4);

  const scrollToProject = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.querySelectorAll("[data-project-card]");

      if (cards[index]) {
        const card = cards[index] as HTMLElement;
        const cardLeft = card.offsetLeft;

        container.scrollTo({
          left: cardLeft,
          behavior: "smooth",
        });
        setCurrentIndex(index);
      }
    }
  };

  const scrollLeft = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : featuredProjects.length - 1;
    scrollToProject(newIndex);
  };

  const scrollRight = () => {
    const newIndex =
      currentIndex < featuredProjects.length - 1 ? currentIndex + 1 : 0;
    scrollToProject(newIndex);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative lg:h-[95vh] md:h-[80vh] h-[70vh] max-h-[700px] flex items-center p-8 lg:mb-0 mb-56 max-w-[1440px] mx-auto">
        <div className="absolute inset-8 overflow-hidden mt-6">
          <Image
            src="/images/proyectos/gst-library-proyecto/gst-library-proyecto-exterior-03.jpg"
            alt="Proyectos que regeneran y conectan"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="lg:relative absolute z-10 lg:max-w-lg w-11/12 lg:ml-auto lg:mr-8 mr-0 lg:left-auto lg:transform-none left-1/2 transform lg:translate-x-0 -translate-x-1/2 bg-white/60 backdrop-blur-md p-8 shadow-2xl lg:h-full flex flex-col justify-end lg:bottom-auto -bottom-48">
          <h1 className="text-3xl md:text-5xl font-normal text-black mb-6 font-baskervville drop-shadow-lg">
            PROYECTOS QUE REGENERAN Y CONECTAN
          </h1>
          <p className="text-lg text-black mb-4 drop-shadow-md">
            Cada obra es una semilla de conciencia sustentable: espacios que
            equilibran innovación, naturaleza y comunidad, para inspirar nuevas
            formas de habitar la Tierra.
          </p>
        </div>
      </section>

      {/* Projects Carousel Section */}
      <section className="py-20 bg-white max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons - Top of carousel */}
        <div className="flex gap-4 items-center mb-6">
          <Link
            href="/proyectos/galeria"
            className="bg-black text-white hover:bg-gray-800 px-6 py-3 transition-all duration-200 hover:scale-105 font-medium uppercase tracking-wider"
          >
            Ver Todos
          </Link>

          <button
            onClick={scrollLeft}
            className="bg-white border-2 border-black hover:bg-black hover:text-white p-3 transition-all duration-200 hover:scale-110"
            aria-label="Previous project"
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
            onClick={scrollRight}
            className="bg-white border-2 border-black hover:bg-black hover:text-white p-3 transition-all duration-200 hover:scale-110"
            aria-label="Next project"
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

        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div
              className="flex space-x-12 pb-4"
              style={{ width: `${featuredProjects.length * 100}vw` }}
            >
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  data-project-card
                  className="flex-shrink-0 w-[80vw] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-[400px]">
                    <Image
                      src={`/images/proyectos/${project.folderPath}/${project.coverImage}`}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="80vw"
                      priority={index === 0}
                      loading={index <= 1 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-normal text-gray-900 mb-4 font-baskervville">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <Link
                      href={`/proyectos/${project.slug}`}
                      className="inline-flex items-center text-black font-medium uppercase underline hover:text-gray-700 transition-colors duration-200 text-lg py-3"
                    >
                      Ver más
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
              ))}
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-gray-900"
                    : "bg-gray-300 hover:bg-gray-500"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
