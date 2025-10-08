"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface UseScrollAnimationOptions {
  zoomOutValue?: number;
  zoomOutDuration?: number;
  zoomInDuration?: number;
  zoomOutEase?: string;
  zoomInEase?: string;
  enabled?: boolean;
}

export default function useScrollAnimation(
  containerRef: React.RefObject<HTMLDivElement | null>,
  options: UseScrollAnimationOptions = {}
) {
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const {
    zoomOutValue = 0.95,
    zoomOutDuration = 0.04,
    zoomInDuration = 0.9,
    zoomOutEase = "power3.inOut",
    zoomInEase = "sine.inOut",
    enabled = true,
  } = options;

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      if (containerRef.current) {
        // Clear any existing timeout and kill any running animations
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Kill any existing timeline animations
        if (timelineRef.current) {
          timelineRef.current.kill();
        }

        // Get current zoom value
        const currentZoom = gsap.getProperty(
          containerRef.current,
          "zoom"
        ) as number;

        // Create a new continuous animation from current position
        timelineRef.current = gsap.timeline();

        // Phase 1: Zoom out (only if not already at target)
        if (currentZoom > zoomOutValue) {
          timelineRef.current.to(containerRef.current, {
            zoom: zoomOutValue,
            duration: zoomOutDuration,
            ease: zoomOutEase,
          });
        }

        // Phase 2: Zoom back to normal (starts immediately)
        timelineRef.current.to(
          containerRef.current,
          {
            zoom: 1,
            duration: zoomInDuration,
            ease: zoomInEase,
          },
          "0"
        ); // Start immediately

        // Reset timeout to restart animation if user scrolls again
        scrollTimeoutRef.current = setTimeout(() => {
          // Animation will continue naturally
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [
    containerRef,
    zoomOutValue,
    zoomOutDuration,
    zoomInDuration,
    zoomOutEase,
    zoomInEase,
    enabled,
  ]);
}
