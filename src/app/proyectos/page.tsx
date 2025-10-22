"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// import useScrollAnimation from "@/components/useScrollAnimation"; // Disabled animation
import { projectsData } from "@/data/projectsData";

export default function Proyectos() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  // Check if mobile (disable animations on mobile)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll to project if hash is present
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      // Wait for the page to render
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, []);

  // Initialize scroll animation (desktop only) - DISABLED
  // useScrollAnimation(projectsContainerRef, {
  //   zoomOutValue: 0.95,
  //   zoomOutDuration: 0.04,
  //   zoomInDuration: 0.9,
  //   zoomOutEase: "power3.inOut",
  //   zoomInEase: "sine.inOut",
  //   enabled: !isMobile,
  // });

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gray-100 mt-8">
        <div className="relative w-full h-full">
          <Image
            src="/images/proyectos/pericos/pericos-01.jpg"
            alt="Proyectos que regeneran y conectan"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-left md:px-32">
            <div className="text-left text-white z-10 px-4">
              <h1 className="text-5xl md:text-7xl font-normal mb-6 font-baskervville">
                Proyectos
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Arquitectura que regenera y conecta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={projectsContainerRef} className="space-y-16 origin-top">
          {projectsData.map((project) => {
            const isExpanded = expandedProject === project.slug;

            return (
              <div
                key={project.slug}
                id={project.slug}
                className="transition-all duration-500 ease-in-out flex justify-center md:mr-24"
              >
                {/* Mobile Layout */}
                <div className="md:hidden w-full">
                  {/* Title and Year - Above image */}
                  <div
                    className="mb-4 cursor-pointer"
                    onClick={() => toggleProject(project.slug)}
                  >
                    <h2 className="text-2xl font-normal text-gray-900 mb-2 font-baskervville">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
                      {project.year}
                    </p>
                    {/* Awards below year */}
                    {project.awards && project.awards.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {Array.from(
                          new Map(
                            project.awards.map((award) => [
                              award.imageFile,
                              award,
                            ])
                          ).values()
                        ).map((award, index) => (
                          <div
                            key={index}
                            className="relative w-12 h-12 grayscale hover:grayscale-0 transition-all duration-300"
                            title={`${award.title} - ${award.year}`}
                          >
                            <Image
                              src={`/images/premios/${award.imageFile}`}
                              alt={award.title}
                              fill
                              className="object-contain"
                              sizes="48px"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Image - Full width, always same size */}
                  <div
                    className="cursor-pointer relative"
                    onClick={() => toggleProject(project.slug)}
                  >
                    <div className="relative overflow-hidden aspect-[4/3] w-full">
                      <Image
                        src={`/images/proyectos/${project.folderPath}/${project.coverImage}`}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </div>

                  {/* Description - Below image, fades in when expanded */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpanded
                        ? "max-h-[500px] opacity-100 mt-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`transition-opacity duration-300 ${
                        isExpanded ? "opacity-100 delay-300" : "opacity-0"
                      }`}
                    >
                      <p className="text-xl font-baskervville mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-base text-gray-700 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      {/* Ver más CTA */}
                      <Link
                        href={`/proyectos/${project.slug}`}
                        className="text-sm text-gray-700 hover:text-black uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all duration-200"
                      >
                        Ver más
                        <svg
                          className="w-4 h-4"
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

                {/* Desktop Layout */}
                <div className="hidden md:flex md:gap-8 items-start">
                  {/* Left: Title and Year - gets pushed by image growth */}
                  <div
                    className="pt-2 text-end transition-all duration-500 ease-in-out flex-shrink-0 w-[180px] cursor-pointer"
                    onClick={() => toggleProject(project.slug)}
                  >
                    <h2 className="text-2xl font-normal text-gray-900 mb-2 font-baskervville text-right">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-500 uppercase tracking-wider text-right mb-3">
                      {project.year}
                    </p>
                    {/* Awards below year */}
                    {project.awards && project.awards.length > 0 && (
                      <div className="flex flex-wrap gap-2 justify-end">
                        {Array.from(
                          new Map(
                            project.awards.map((award) => [
                              award.imageFile,
                              award,
                            ])
                          ).values()
                        ).map((award, index) => (
                          <div
                            key={index}
                            className="relative w-12 h-12 grayscale hover:grayscale-0 transition-all duration-300"
                            title={`${award.title} - ${award.year}`}
                          >
                            <Image
                              src={`/images/premios/${award.imageFile}`}
                              alt={award.title}
                              fill
                              className="object-contain"
                              sizes="48px"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Center: Image */}
                  <div
                    className="cursor-pointer group flex-shrink-0 transition-all duration-500 ease-in-out relative"
                    onClick={() => toggleProject(project.slug)}
                  >
                    <div
                      className={`relative overflow-hidden transition-all duration-500 ease-in-out aspect-[4/3] ${
                        isExpanded ? "w-[720px]" : "w-[480px]"
                      }`}
                    >
                      <Image
                        src={`/images/proyectos/${project.folderPath}/${project.coverImage}`}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 720px"
                      />
                    </div>
                  </div>

                  {/* Right: Description - appears after container expands */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden flex-shrink-0 ${
                      isExpanded ? "w-[300px]" : "w-0"
                    }`}
                  >
                    <div
                      className={`pt-2 w-[300px] transition-opacity duration-300 ${
                        isExpanded ? "opacity-100 delay-300" : "opacity-0"
                      }`}
                    >
                      <p className="text-xl font-baskervville mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-base text-gray-700 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      {/* Ver más CTA */}
                      <Link
                        href={`/proyectos/${project.slug}`}
                        className="text-sm text-gray-700 hover:text-black uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all duration-200"
                      >
                        Ver más
                        <svg
                          className="w-4 h-4"
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
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
