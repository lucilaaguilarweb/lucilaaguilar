"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/components/useScrollAnimation";
import { projectsData } from "@/data/projectsData";

interface ProjectImagesData {
  [key: string]: Array<{ filename: string; alt: string }>;
}

export default function Proyectos() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [carouselIndexes, setCarouselIndexes] = useState<
    Record<string, number>
  >({});
  const [projectImages, setProjectImages] = useState<ProjectImagesData>({});
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

  // Initialize scroll animation (desktop only)
  useScrollAnimation(projectsContainerRef, {
    zoomOutValue: 0.95,
    zoomOutDuration: 0.04,
    zoomInDuration: 0.9,
    zoomOutEase: "power3.inOut",
    zoomInEase: "sine.inOut",
    enabled: !isMobile,
  });

  // Load images for expanded project
  useEffect(() => {
    if (expandedProject) {
      const project = projectsData.find((p) => p.slug === expandedProject);
      if (project && !projectImages[expandedProject]) {
        // Fetch images from API route
        fetch(`/api/project-images?folderPath=${project.folderPath}`)
          .then((res) => res.json())
          .then((images) => {
            setProjectImages((prev) => ({
              ...prev,
              [expandedProject]: images,
            }));
          })
          .catch((err) => console.error("Error loading images:", err));
      }
    }
  }, [expandedProject, projectImages]);

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
    // Reset carousel to first image when opening
    if (expandedProject !== projectId) {
      setCarouselIndexes({ ...carouselIndexes, [projectId]: 0 });
    }
  };

  const nextImage = (
    projectSlug: string,
    totalImages: number,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    setCarouselIndexes({
      ...carouselIndexes,
      [projectSlug]: ((carouselIndexes[projectSlug] || 0) + 1) % totalImages,
    });
  };

  const prevImage = (
    projectSlug: string,
    totalImages: number,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    setCarouselIndexes({
      ...carouselIndexes,
      [projectSlug]:
        ((carouselIndexes[projectSlug] || 0) - 1 + totalImages) % totalImages,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gray-100">
        <div className="relative w-full h-full">
          <Image
            src="/images/proyectos/gst-library-proyecto/gst-library-proyecto-exterior-03.jpg"
            alt="Proyectos que regeneran y conectan"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white z-10 px-4">
              <h1 className="text-5xl md:text-7xl font-normal mb-6 font-baskervville">
                PROYECTOS
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
                className="transition-all duration-500 ease-in-out flex justify-center md:mr-24"
              >
                {/* Mobile Layout */}
                <div className="md:hidden w-full">
                  {/* Title and Year - Above image */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-normal text-gray-900 mb-2 font-baskervville">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                      {project.year}
                    </p>
                  </div>

                  {/* Image / Carousel - Full width, always same size */}
                  <div
                    className="cursor-pointer relative"
                    onClick={() => toggleProject(project.slug)}
                  >
                    <div className="relative overflow-hidden aspect-[4/3] w-full">
                      {isExpanded && projectImages[project.slug] ? (
                        // Carousel when expanded
                        <div className="">
                          <Image
                            src={`/images/proyectos/${project.folderPath}/${
                              projectImages[project.slug][
                                carouselIndexes[project.slug] || 0
                              ]?.filename || project.coverImage
                            }`}
                            alt={`${project.title} - Image ${
                              (carouselIndexes[project.slug] || 0) + 1
                            }`}
                            fill
                            className="object-cover"
                            sizes="100vw"
                          />

                          {/* Carousel Controls */}
                          {projectImages[project.slug].length > 1 && (
                            <div className="opacity-0 animate-fadeIn delay-100">
                              {/* Previous Button */}
                              <button
                                onClick={(e) =>
                                  prevImage(
                                    project.slug,
                                    projectImages[project.slug].length,
                                    e
                                  )
                                }
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                              >
                                <svg
                                  className="w-5 h-5"
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

                              {/* Next Button */}
                              <button
                                onClick={(e) =>
                                  nextImage(
                                    project.slug,
                                    projectImages[project.slug].length,
                                    e
                                  )
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                              >
                                <svg
                                  className="w-5 h-5"
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

                              {/* Image Counter */}
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                                {(carouselIndexes[project.slug] || 0) + 1} /{" "}
                                {projectImages[project.slug].length}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        // Cover image when collapsed
                        <Image
                          src={`/images/proyectos/${project.folderPath}/${project.coverImage}`}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />
                      )}
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
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex md:gap-8 items-start">
                  {/* Left: Title and Year - gets pushed by image growth */}
                  <div className="pt-2 text-end transition-all duration-500 ease-in-out flex-shrink-0 w-[180px]">
                    <h2 className="text-2xl font-normal text-gray-900 mb-2 font-baskervville text-right">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                      {project.year}
                    </p>
                  </div>

                  {/* Center: Image / Carousel */}
                  <div
                    className="cursor-pointer group flex-shrink-0 transition-all duration-500 ease-in-out relative"
                    onClick={() => toggleProject(project.slug)}
                  >
                    <div
                      className={`relative overflow-hidden transition-all duration-500 ease-in-out aspect-[4/3] ${
                        isExpanded ? "w-[720px]" : "w-[480px]"
                      }`}
                    >
                      {isExpanded && projectImages[project.slug] ? (
                        // Carousel when expanded - fades in
                        <div className="">
                          <Image
                            src={`/images/proyectos/${project.folderPath}/${
                              projectImages[project.slug][
                                carouselIndexes[project.slug] || 0
                              ]?.filename || project.coverImage
                            }`}
                            alt={`${project.title} - Image ${
                              (carouselIndexes[project.slug] || 0) + 1
                            }`}
                            fill
                            className="object-cover"
                            sizes="720px"
                          />

                          {/* Carousel Controls - fade in with delay */}
                          {projectImages[project.slug].length > 1 && (
                            <div className="opacity-0 animate-fadeIn delay-100">
                              {/* Previous Button */}
                              <button
                                onClick={(e) =>
                                  prevImage(
                                    project.slug,
                                    projectImages[project.slug].length,
                                    e
                                  )
                                }
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
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

                              {/* Next Button */}
                              <button
                                onClick={(e) =>
                                  nextImage(
                                    project.slug,
                                    projectImages[project.slug].length,
                                    e
                                  )
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
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

                              {/* Image Counter */}
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                                {(carouselIndexes[project.slug] || 0) + 1} /{" "}
                                {projectImages[project.slug].length}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        // Cover image when collapsed
                        <Image
                          src={`/images/proyectos/${project.folderPath}/${project.coverImage}`}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 480px"
                        />
                      )}
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
