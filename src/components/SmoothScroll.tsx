"use client";

import { useEffect } from "react";

export default function useSmoothScroll(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    let locomotiveScroll: { destroy: () => void } | null = null;

    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        locomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
            lerp: 0.1,
            duration: 1.2,
            smoothWheel: true,
          },
        });
      } catch (error) {
        console.error("Error initializing Locomotive Scroll:", error);
      }
    };

    initScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, [enabled]);
}
