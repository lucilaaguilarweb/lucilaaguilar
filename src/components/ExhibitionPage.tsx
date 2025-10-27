"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Exhibition } from "@/data/exhibitionsData";
import { ExhibitionImage } from "@/lib/exhibitionImages";
import GalleryModal from "@/components/GalleryModal";

interface ExhibitionPageProps {
  exhibition: Exhibition;
  images: ExhibitionImage[];
}

export default function ExhibitionPage({
  exhibition,
  images,
}: ExhibitionPageProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Create full image paths array
  const imagePaths = images.map(
    (image) => `/images/exposiciones/${exhibition.folderPath}/${image.filename}`
  );

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeImageModal = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-100 pb-12 h-[60vh] flex items-center justify-center pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 font-baskervville">
              {exhibition.title}
            </h1>
            {exhibition.slug === "ixua-time-space-existence" && (
              <p className="text-2xl text-gray-700 font-medium mb-6 font-baskervville">
                Mención honorífica en Arquitectura
              </p>
            )}
            <p className="text-xl text-gray-600 mb-6">{exhibition.subtitle}</p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500"></div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {exhibition.description}
          </p>
        </div>
      </div>

      {/* External Link */}
      {exhibition.link && (
        <div className="py-8 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <a
              href={exhibition.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Ver sitio oficial
            </a>
          </div>
        </div>
      )}

      {/* Gallery */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-normal text-gray-900 mb-8 font-baskervville text-center">
            Galería de Imágenes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => openImageModal(index)}
              >
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/exposiciones/${exhibition.folderPath}/${image.filename}`}
                    alt={`${exhibition.title} - ${image.filename}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index < 6 ? "eager" : "lazy"}
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  {image.filename.replace(/\.[^/.]+$/, "")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/exposiciones"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver a Exposiciones
          </Link>
        </div>
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={closeImageModal}
        images={imagePaths}
        initialIndex={selectedImageIndex}
        title={exhibition.title}
      />
    </div>
  );
}
