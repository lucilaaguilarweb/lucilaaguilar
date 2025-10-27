"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
  title?: string;
}

export default function GalleryModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  title,
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
      setCurrentIndex(initialIndex);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialIndex]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          onClose();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, nextImage, prevImage, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-900 hover:text-gray-600 transition-colors z-10"
        aria-label="Close gallery"
      >
        <svg
          className="w-8 h-8"
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

      {/* Title */}
      {title && (
        <div className="absolute top-4 left-4 text-gray-900 z-10">
          <h3 className="text-lg font-baskervville">{title}</h3>
        </div>
      )}

      {/* Image counter */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-gray-900 z-10">
        <span className="text-sm">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Main content */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
        {/* Previous button 
        {images.length > 1 && (
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent text-gray-900 p-3 rounded-full transition-all z-10"
            aria-label="Previous image"
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
          </button>
        )}*/}

        {/* Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            width={1400}
            height={900}
            className="max-w-full max-h-full object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Next button 
        {images.length > 1 && (
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-900 p-3 rounded-full transition-all z-10 bg-transparent"
            aria-label="Next image"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}*/}
      </div>

      {/* Thumbnail strip (optional, for many images) */}
      {images.length > 1 && images.length <= 10 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] p-2 bg-gray-100 rounded-lg">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-16 h-16 flex-shrink-0 rounded overflow-hidden transition-all ${
                idx === currentIndex
                  ? "ring-2 ring-gray-900 scale-110"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
