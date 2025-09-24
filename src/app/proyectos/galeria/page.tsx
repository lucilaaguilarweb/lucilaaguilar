"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingSpinner from "@/components/LoadingSpinner";
import { projectsData } from "@/data/projectsData";

export default function GaleriaProyectos() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Loading Spinner */}
      {isLoading && <LoadingSpinner />}

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/proyectos/cocoon/cocoon-general-01.jpg"
            alt="Galería de Proyectos"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wider">
            GALERÍA DE PROYECTOS
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Todos nuestros proyectos de arquitectura sustentable
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Link
              key={index}
              href={`/proyectos/${project.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={`/images/proyectos/${project.folderPath}/${project.coverImage}`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110 object-bottom"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    loading={index < 6 ? "eager" : "lazy"}
                    onError={(e) => {
                      console.error(
                        `Failed to load image: /images/proyectos/${project.folderPath}/${project.coverImage}`
                      );
                      // Hide image if it doesn't exist
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="absolute inset-0 " />
                <div className="absolute bottom-0 left-0 right-0 px-6 py-4 text-black bg-white/60 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium uppercase tracking-wider bg-white/70 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm font-light">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-light">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
