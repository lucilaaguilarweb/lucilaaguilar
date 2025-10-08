"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface UseMultiImageClipPathAnimationOptions {
  enabled?: boolean;
  maxInset?: number;
  minInset?: number;
}

export default function useMultiImageClipPathAnimation(
  imageRefs: React.RefObject<HTMLDivElement | null>[],
  options: UseMultiImageClipPathAnimationOptions = {}
) {
  const { enabled = true, maxInset = 50, minInset = 0 } = options;
  const hasBeenRevealedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!enabled || imageRefs.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      imageRefs.forEach((imageRef, index) => {
        if (!imageRef.current) return;

        const imageElement = imageRef.current;
        const rect = imageElement.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementBottom = elementTop + rect.height;

        // If this image has been revealed before, keep it at 0px inset
        if (hasBeenRevealedRef.current.has(index)) {
          const clipPath = `inset(0px)`;
          gsap.to(imageElement, {
            clipPath: clipPath,
            duration: 0.3,
            ease: "power2.out",
          });
          return;
        }

        // Calculate scroll progress relative to the element
        // When element is above viewport (scrolled past): progress = 1 (minInset - stays revealed)
        // When element is in viewport: progress = 0 to 1 (maxInset to minInset)
        // When element is below viewport: progress = 0 (maxInset)

        let scrollProgress;
        if (elementBottom < scrollY) {
          // Element is above viewport (scrolled past) - mark as revealed and stay revealed
          hasBeenRevealedRef.current.add(index);
          scrollProgress = 1;
        } else if (elementTop > scrollY + windowHeight) {
          // Element is below viewport - fully inset
          scrollProgress = 0;
        } else {
          // Element is in viewport - calculate progress
          const elementCenter = elementTop + rect.height / 2;
          const viewportCenter = scrollY + windowHeight / 2;
          const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
          const maxDistance = windowHeight / 2 + rect.height / 2;
          scrollProgress = Math.max(
            0,
            Math.min(1, 1 - distanceFromCenter / maxDistance)
          );

          // If progress is high enough, mark as revealed
          if (scrollProgress > 0.8) {
            hasBeenRevealedRef.current.add(index);
          }
        }

        // Calculate inset based on scroll progress
        const currentInset = maxInset - scrollProgress * (maxInset - minInset);

        // Create clip-path with inset
        const clipPath = `inset(${currentInset}px)`;

        // Apply the clip-path using GSAP for smooth animation
        gsap.to(imageElement, {
          clipPath: clipPath,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [enabled, imageRefs, maxInset, minInset]);
}
