"use client";

import { useState } from "react";
import Image from "next/image";
import ImageSkeleton from "./ImageSkeleton";

interface LazyImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
}

export default function LazyImageWithSkeleton({
  src,
  alt,
  className = "",
  fill = true,
  sizes,
  priority = false,
  loading = "lazy",
}: LazyImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative bg-gray-100 flex items-center justify-center ${className}`}
      >
        <div className="text-gray-400 text-sm">Image unavailable</div>
      </div>
    );
  }

  return (
    <div className={className || "relative"}>
      {/* Skeleton while loading - only show when not loaded */}
      {!isLoaded && <ImageSkeleton className="absolute inset-0" />}

      {/* Actual image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        loading={loading}
        className={`object-cover hover:scale-105 transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
