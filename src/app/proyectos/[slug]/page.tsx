"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projectsData";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData.find((p) => p.slug === slug);

  // Helper function to get collaboration image file
  const getCollaborationImage = (collaboration: string): string | null => {
    const mapping: { [key: string]: string } = {
      "Atelier One": "atelier-one.jpg",
      "C- Cúbica": "c-cubica.jpeg",
      Cúbica: "c-cubica.jpeg",
      "Jörg Stamm": "jorg-stamm.jpeg",
    };
    return mapping[collaboration] || null;
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectImages, setProjectImages] = useState<
    Array<{ filename: string; alt: string }>
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (project) {
      setIsLoading(true);
      // Fetch all images for this project
      fetch(`/api/project-images?folderPath=${project.folderPath}`)
        .then((res) => res.json())
        .then((images) => {
          setProjectImages(images);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error loading images:", err);
          // Fallback to cover image only
          setProjectImages([
            { filename: project.coverImage, alt: project.title },
          ]);
          setIsLoading(false);
        });
    }
  }, [project]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentImageIndex, projectImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      nextImage();
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right
      prevImage();
    }
  };

  // Mouse handlers for drag
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setMouseStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      setMouseEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      if (mouseStart - mouseEnd > 75) {
        // Dragged left
        nextImage();
      }

      if (mouseStart - mouseEnd < -75) {
        // Dragged right
        prevImage();
      }
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      {/* Main Content - 70/30 Split */}
      <main className="flex flex-col md:flex-row">
        {/* Left Side: Image Carousel (70%) */}
        <div className="w-full lg:w-[60%] md:w-[50%] bg-gray-100 h-[600px] md:h-screen md:sticky md:top-0 mt-16">
          <div
            className="relative w-full h-full p-4 md:p-8 cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              <>
                <Image
                  src={`/images/proyectos/${project.folderPath}/${projectImages[currentImageIndex]?.filename}`}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 70vw"
                  priority
                  draggable={false}
                />

                {/* Carousel Controls */}
                {projectImages.length > 1 && (
                  <>
                    {/* 
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
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
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
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
                    */}

                    {/* Dot Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-auto">
                      {projectImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                            index === currentImageIndex
                              ? "bg-white"
                              : "bg-white/50"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* Right Side: Project Information (30%) */}
        <div className="w-full lg:w-[40%] md:w-[50%] p-8 md:p-12">
          {/* Back Button */}
          <Link
            href={`/proyectos#${project.slug}`}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors mt-16"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver a Proyectos
          </Link>

          {/* Project Header */}
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl font-normal mb-4 font-baskervville">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-2">
              {project.subtitle}
            </p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              {project.year}
            </p>
            {project.collaboration &&
              getCollaborationImage(project.collaboration) && (
                <div className="mt-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Colaboración
                  </p>
                  <div
                    className="relative w-32 h-24 grayscale hover:grayscale-0 transition-all duration-300"
                    title={project.collaboration}
                  >
                    <Image
                      src={`/images/colaboration/${getCollaborationImage(
                        project.collaboration
                      )}`}
                      alt={`Colaboración: ${project.collaboration}`}
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                </div>
              )}
          </div>

          {/* Project Content */}
          {project.content && (
            <div className="mb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {project.content}
                </p>
              </div>
            </div>
          )}

          {/* Awards Section */}
          {project.awards && project.awards.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-normal mb-6 font-baskervville">
                Premios y Reconocimientos
              </h2>
              <div className="space-y-4">
                {project.awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="relative w-16 h-16 flex-shrink-0 bg-white rounded p-2">
                      <Image
                        src={`/images/premios/${award.imageFile}`}
                        alt={award.title}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">{award.year}</p>
                      <h3 className="font-medium text-gray-900 mb-1">
                        {award.title}
                      </h3>
                      {award.description && (
                        <p className="text-sm text-gray-600">
                          {award.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
