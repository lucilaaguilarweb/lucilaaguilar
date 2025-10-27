"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface CocoonGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: number;
  sectionTitle: string;
}

export default function CocoonGalleryModal({
  isOpen,
  onClose,
  section,
  sectionTitle,
}: CocoonGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";

      // Load images for the section
      const imageCounts: { [key: number]: number } = {
        1: 11, // seccion-1-01.jpg to seccion-1-11.jpg
        2: 10, // seccion-2-01.jpg to seccion-2-10.jpg
        3: 10, // seccion-3-01.jpg to seccion-3-10.jpg
        4: 4, // seccion-4-01.jpg to seccion-4-03.jpg
      };

      const count = imageCounts[section] || 0;
      const imageList = Array.from({ length: count }, (_, i) => {
        const num = String(i + 1).padStart(2, "0");
        return `/images/cocoon-project/seccion-${section}-${num}.jpg`;
      });

      setImages(imageList);
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, section]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    },
    [onClose, nextImage, prevImage]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-7xl mx-auto p-4 md:p-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-black hover:text-gray-500 transition-colors pointer-events-auto"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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

        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-normal text-black font-baskervville">
            {sectionTitle}
          </h2>
          <p className="text-black text-sm mt-2">
            {currentIndex + 1} / {images.length}
          </p>
        </div>

        {/* Image Container */}
        <div
          className="relative flex-1 flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {images.length > 0 && (
            <div className="relative w-full h-full pointer-events-none">
              <Image
                src={images[currentIndex]}
                alt={`${sectionTitle} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
                draggable={false}
              />
            </div>
          )}

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              {/*
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-black hover:text-gray-500 transition-colors bg-white bg-opacity-50 rounded-full p-3"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-gray-500 transition-colors bg-white bg-opacity-50 rounded-full p-3"
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
            </>
          )}
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-4 overflow-x-auto pointer-events-auto">
          <div className="flex gap-2 justify-center min-w-max px-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 h-20 flex-shrink-0 transition-opacity ${
                  idx === currentIndex
                    ? "opacity-100 ring-2 ring-black"
                    : "opacity-50 hover:opacity-75"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
