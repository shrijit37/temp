"use client";

import { useEffect, useRef, useMemo, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  baseOpacity?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  baseOpacity = 0.1,
  blurStrength = 4,
  containerClassName = "",
  textClassName = ""
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: 3 },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true
        }
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>(".word");

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=20%",
          end: "bottom bottom",
          scrub: true
        }
      }
    );

    gsap.fromTo(
      wordElements,
      { filter: `blur(${blurStrength}px)` },
      {
        ease: "none",
        filter: "blur(0px)",
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=20%",
          end: "bottom bottom",
          scrub: true
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [baseOpacity, blurStrength]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
