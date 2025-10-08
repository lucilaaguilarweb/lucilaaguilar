"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

interface UseHeroClipPathAnimationOptions {
  enabled?: boolean;
  maxInset?: number;
  minInset?: number;
}

export default function useHeroClipPathAnimation(
  imageRef: React.RefObject<HTMLDivElement | null>,
  options: UseHeroClipPathAnimationOptions = {}
) {
  const { enabled = true, maxInset = 50, minInset = 0 } = options;

  useEffect(() => {
    if (!enabled || !imageRef.current) return;

    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 400; // Distance to reach min inset

      // Calculate inset based on scroll position (0 to maxScroll)
      const scrollProgress = Math.min(scrollY / maxScroll, 1);
      const currentInset = minInset + (maxInset - minInset) * scrollProgress;

      // Create clip-path with inset
      const clipPath = `inset(${currentInset}px)`;

      // Apply the clip-path using GSAP for smooth animation
      gsap.to(imageElement, {
        clipPath: clipPath,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [enabled, imageRef, maxInset, minInset]);
}
