"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projectsData";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.galleryUrls.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.galleryUrls.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-normal text-gray-900 font-baskervville">
          {project.title}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative h-96 lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={project.galleryUrls[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />

              {/* Navigation Arrows */}
              {project.galleryUrls.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
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
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
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
                </>
              )}

              {/* Image Counter */}
              {project.galleryUrls.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {project.galleryUrls.length}
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {project.galleryUrls.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {project.galleryUrls.map((url, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                      index === currentImageIndex
                        ? "border-gray-900"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <Image
                      src={url}
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-normal text-gray-900 mb-4 font-baskervville">
                {project.description}
              </h3>
              <div className="prose prose-gray max-w-none">
                {project.content.split("\n").map((paragraph, index) => {
                  if (paragraph.trim() === "") return null;

                  // Check if it's a bullet point
                  if (paragraph.trim().startsWith("●")) {
                    return (
                      <div key={index} className="flex items-start mb-2">
                        <span className="text-gray-400 mr-3 mt-1">●</span>
                        <span className="text-gray-700">
                          {paragraph.trim().substring(1).trim()}
                        </span>
                      </div>
                    );
                  }

                  // Check if it's a heading (no bullet points and shorter text)
                  if (paragraph.length < 100 && !paragraph.includes("●")) {
                    return (
                      <h4
                        key={index}
                        className="text-lg font-normal text-gray-900 mb-3 font-baskervville mt-6 first:mt-0"
                      >
                        {paragraph}
                      </h4>
                    );
                  }

                  // Regular paragraph
                  return (
                    <p
                      key={index}
                      className="text-gray-700 mb-4 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Download Link */}
            <div className="pt-6 border-t border-gray-200">
              <a
                href={project.driveFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Ver más imágenes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
