"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ElementType } from "react";
import { gsap } from "@/lib/gsap";

const PARALLAX = 4;
const DURATION = 1.1;

export interface MaskedHeadingProps {
  text: string;
  tag?: ElementType;
  src: string;
  brightness?: number;
  saturation?: number;
  grayscale?: boolean;
  align?: "left" | "center" | "right";
  weight?: number;
  tracking?: number;
  lineHeight?: number;
  textScale?: number;
  className?: string;
  style?: CSSProperties;
}

const MaskedHeading: React.FC<MaskedHeadingProps> = ({
  text,
  tag = "h2",
  src,
  brightness = 1,
  saturation = 1,
  grayscale = false,
  align = "center",
  weight = 700,
  tracking = -0.03,
  lineHeight = 1.06,
  textScale = 0.115,
  className = "",
  style,
}: MaskedHeadingProps) => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const moveTo = (backgroundPosition: string) => {
      gsap.to(root, {
        backgroundPosition,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const onMove = (event: PointerEvent) => {
      const bounds = root.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / (bounds.width || 1)) * 2 - 1;
      const y = ((event.clientY - bounds.top) / (bounds.height || 1)) * 2 - 1;
      moveTo(`${50 - x * PARALLAX}% ${50 - y * PARALLAX}%`);
    };

    const onLeave = () => moveTo("50% 50%");

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);

    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      gsap.killTweensOf(root);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(root, { clearProps: "transform,opacity" });
      return;
    }

    const tween = gsap.fromTo(
      root,
      { y: 56, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION,
        ease: "power4.out",
        scrollTrigger: {
          trigger: root,
          start: "top 90%",
          once: true,
        },
      }
    );

    return () => {
      tween.kill();
    };
  }, []);

  const Tag = (tag || "h2") as ElementType;

  return (
    <Tag
      ref={rootRef}
      className={`relative w-full m-0 p-0 antialiased [text-wrap:balance] ${className}`.trim()}
      style={{
        color: "transparent",
        backgroundImage: `url("${src}")`,
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "125% 125%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        filter: `brightness(${brightness}) saturate(${saturation})${grayscale ? " grayscale(1)" : ""}`,
        fontSize: `clamp(20px, ${textScale * 100}vw, 200px)`,
        textAlign: align,
        fontWeight: weight,
        letterSpacing: `${tracking}em`,
        lineHeight,
        ...style,
      }}
    >
      {text}
    </Tag>
  );
};

export default MaskedHeading;
