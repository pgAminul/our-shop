"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { gsap } from "gsap";

interface ProductScrollerProps {
  children: ReactNode;
}

export default function ProductScroller({
  children,
}: ProductScrollerProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    let isDragging = false;
    let startX = 0;
    let startScroll = 0;

    const getMaxScroll = () => {
      return Math.max(
        0,
        track.scrollWidth - viewport.clientWidth
      );
    };

    // Mouse Down
    const handlePointerDown = (
      event: PointerEvent
    ) => {
      // Only enable custom dragging on desktop
      if (window.innerWidth < 768) return;

      isDragging = true;
      startX = event.clientX;
      startScroll = viewport.scrollLeft;

      viewport.style.cursor = "grabbing";
      viewport.style.userSelect = "none";

      track.setPointerCapture?.(event.pointerId);
    };

    // Mouse Move
    const handlePointerMove = (
      event: PointerEvent
    ) => {
      if (!isDragging) return;

      const diff = event.clientX - startX;

      const targetScroll =
        startScroll - diff;

      const maxScroll = getMaxScroll();

      const clampedScroll = Math.max(
        0,
        Math.min(targetScroll, maxScroll)
      );

      gsap.to(viewport, {
        scrollLeft: clampedScroll,
        duration: 0.18,
        ease: "power2.out",
        overwrite: true,
      });
    };

    // Mouse Up
    const handlePointerUp = () => {
      if (!isDragging) return;

      isDragging = false;

      viewport.style.cursor = "grab";
      viewport.style.userSelect = "";
    };

    // Wheel → Horizontal
    const handleWheel = (
      event: WheelEvent
    ) => {
      if (window.innerWidth < 768) return;

      const maxScroll = getMaxScroll();

      if (maxScroll <= 0) return;

      // Convert vertical wheel to horizontal
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();

        const target =
          viewport.scrollLeft + event.deltaY;

        const clamped = Math.max(
          0,
          Math.min(target, maxScroll)
        );

        gsap.to(viewport, {
          scrollLeft: clamped,
          duration: 0.5,
          ease: "power3.out",
          overwrite: true,
        });
      }
    };

    viewport.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    viewport.addEventListener(
      "pointermove",
      handlePointerMove
    );

    viewport.addEventListener(
      "pointerup",
      handlePointerUp
    );

    viewport.addEventListener(
      "pointercancel",
      handlePointerUp
    );

    viewport.addEventListener(
      "wheel",
      handleWheel,
      { passive: false }
    );

    // Desktop cursor
    if (window.innerWidth >= 768) {
      viewport.style.cursor = "grab";
    }

    return () => {
      viewport.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      viewport.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      viewport.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      viewport.removeEventListener(
        "pointercancel",
        handlePointerUp
      );

      viewport.removeEventListener(
        "wheel",
        handleWheel
      );

      gsap.killTweensOf(viewport);
    };
  }, []);

  return (
    <div
      ref={viewportRef}
      className="relative overflow-x-auto overflow-y-hidden overscroll-x-contain"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max items-stretch gap-4 pb-2"
      >
        {children}
      </div>
    </div>
  );
}