"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projectsData";
import { ProjectImage } from "@/lib/projectImages";
import LazyImageWithSkeleton from "./LazyImageWithSkeleton";

interface ProjectPageProps {
  project: Project;
  images: ProjectImage[];
}

export default function ProjectPage({ project, images }: ProjectPageProps) {
  // Group images by category for better organization
  const groupedImages = images.reduce((acc, image) => {
    if (!acc[image.category]) {
      acc[image.category] = [];
    }
    acc[image.category].push(image);
    return acc;
  }, {} as Record<string, ProjectImage[]>);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/proyectos/galeria"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
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
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`/images/proyectos/${project.folderPath}/${project.coverImage}`}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-wider">
            {project.title.toUpperCase()}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4 text-gray-200">
            {project.subtitle}
          </p>
          <p className="text-lg font-light text-gray-300 max-w-2xl mx-auto">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        {/* Project Description */}
        {project.content && (
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {project.content}
            </div>
          </div>
        )}
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 text-gray-800">
            Galería de Imágenes
          </h2>

          {Object.keys(groupedImages).length === 0 ? (
            <div className="text-center text-gray-500">
              <p>No hay imágenes disponibles para este proyecto.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(groupedImages).map(
                ([category, categoryImages]) => (
                  <div key={category}>
                    <h3 className="text-xl font-light mb-6 text-gray-700 capitalize">
                      {category === "general" ? "Vistas Generales" : category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryImages.map((image, index) => (
                        <div
                          key={`${category}-${index}`}
                          className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                          <LazyImageWithSkeleton
                            src={`/images/proyectos/${project.folderPath}/${image.filename}`}
                            alt={`${project.title} - ${category} - ${
                              index + 1
                            }`}
                            className="absolute inset-0"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading={index < 2 ? "eager" : "lazy"}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
