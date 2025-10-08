"use client";

import { useEffect, useState } from "react";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let locomotiveScroll: { destroy: () => void } | null = null;

    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        locomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
            lerp: 0.08, // Lower = longer acceleration (0.05-0.1 range)
            duration: 1.8, // Higher = longer scroll duration (1.0-2.5 range)
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
  }, [isMobile]);

  return <>{children}</>;
}
