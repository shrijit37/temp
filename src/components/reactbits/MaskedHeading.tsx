"use client";

import { useCallback, useEffect, useId, useMemo, useRef } from "react";
import type { CSSProperties, ElementType } from "react";
import { gsap } from "gsap";

const clamp = (v: number, a: number, b: number): number => (v < a ? a : v > b ? b : v);

const FILL_SCALE = 1.25;
const PARALLAX = 26;
const DRIFT = 18;
const DURATION = 1.1;
const STAGGER = 0.09;

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
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const revealRef = useRef<HTMLSpanElement | null>(null);
  const mediaRef = useRef<HTMLSpanElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const baseRefs = useRef<(HTMLElement | null)[]>([]);
  const glyphRefs = useRef<(SVGTextElement | null)[]>([]);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const offsetRef = useRef<{ x: number; y: number; tx: number; ty: number }>({ x: 0, y: 0, tx: 0, ty: 0 });

  const clipId = `mh-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  const settingsRef = useRef<{
    brightness: number;
    saturation: number;
    grayscale: boolean;
    textScale: number;
  }>({ brightness: 1, saturation: 1, grayscale: false, textScale: 0.115 });

  useEffect(() => {
    settingsRef.current = { brightness, saturation, grayscale, textScale };
  });

  const place = useCallback(() => {
    const root = rootRef.current;
    const media = mediaRef.current;
    if (!root || !media) return;
    const s = settingsRef.current;
    const W = root.clientWidth;
    const H = root.clientHeight;
    const off = offsetRef.current;

    const maxX = Math.max(0, ((FILL_SCALE - 1) / 2) * W);
    const maxY = Math.max(0, ((FILL_SCALE - 1) / 2) * H);

    media.style.transform = `translate3d(${clamp(off.x, -maxX, maxX).toFixed(2)}px, ${clamp(off.y, -maxY, maxY).toFixed(2)}px, 0) scale(${FILL_SCALE})`;
    media.style.filter = `brightness(${s.brightness}) saturate(${s.saturation})${s.grayscale ? " grayscale(1)" : ""}`;
  }, []);

  const sync = useCallback(() => {
    const root = rootRef.current;
    const measure = measureRef.current;
    if (!root || !measure) return;
    const s = settingsRef.current;

    root.style.fontSize = `${clamp(root.clientWidth * s.textScale, 20, 200).toFixed(1)}px`;

    const cs = window.getComputedStyle(measure);
    for (let i = 0; i < wordRefs.current.length; i += 1) {
      const box = wordRefs.current[i];
      const base = baseRefs.current[i];
      const glyph = glyphRefs.current[i];
      if (!box || !base || !glyph) continue;
      glyph.setAttribute("x", `${box.offsetLeft}`);
      glyph.setAttribute("y", `${base.offsetTop}`);
      glyph.style.fontFamily = cs.fontFamily;
      glyph.style.fontSize = cs.fontSize;
      glyph.style.fontWeight = cs.fontWeight;
      glyph.style.fontStyle = cs.fontStyle;
      glyph.style.letterSpacing = cs.letterSpacing;
    }
    place();
  }, [place]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(root);
    if (document.fonts?.ready) {
      document.fonts.ready.then(sync).catch(() => { });
    }

    let raf = 0;
    let last = performance.now();
    let clock = 0;

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      clock += dt;
      const off = offsetRef.current;

      const dx = Math.sin(clock * 0.21) * DRIFT;
      const dy = Math.cos(clock * 0.17) * DRIFT * 0.6;

      const ease = 1 - Math.exp(-dt / 0.18);
      off.x += (off.tx + dx - off.x) * ease;
      off.y += (off.ty + dy - off.y) * ease;

      place();
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / (r.width || 1)) * 2 - 1;
      const ny = ((e.clientY - r.top) / (r.height || 1)) * 2 - 1;
      offsetRef.current.tx = clamp(nx, -1, 1) * -PARALLAX;
      offsetRef.current.ty = clamp(ny, -1, 1) * -PARALLAX;
    };

    const onLeave = () => {
      offsetRef.current.tx = 0;
      offsetRef.current.ty = 0;
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [place, sync]);

  useEffect(() => {
    sync();
  }, [sync, words, tag, align, weight, tracking, lineHeight, textScale]);

  useEffect(() => {
    const root = rootRef.current;
    const layer = revealRef.current;
    if (!root || !layer) return;
    const glyphs = glyphRefs.current.filter(Boolean);
    if (!glyphs.length) return;

    const riseDistance = () => (parseFloat(window.getComputedStyle(root).fontSize) || 48) * 1.15;

    const settle = () => {
      gsap.set(glyphs, { y: 0 });
      gsap.set(layer, { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      settle();
      return;
    }

    settle();
    gsap.set(glyphs, { y: riseDistance() });
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          tweenRef.current?.kill();
          tweenRef.current = gsap.fromTo(
            glyphs,
            { y: riseDistance() },
            { y: 0, duration: DURATION, stagger: STAGGER, ease: "power4.out", overwrite: "auto" }
          );
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(root);
    return () => {
      io.disconnect();
      tweenRef.current?.kill();
    };
  }, [words]);

  const Tag = (tag || "h2") as ElementType;

  return (
    <Tag
      ref={rootRef}
      className={`relative w-full m-0 p-0 antialiased [text-wrap:balance] ${className}`.trim()}
      style={{
        textAlign: align,
        fontWeight: weight,
        letterSpacing: `${tracking}em`,
        lineHeight,
        ...style,
      }}
    >
      <span ref={measureRef} className="text-transparent">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            ref={(el: HTMLSpanElement | null) => {
              wordRefs.current[i] = el;
            }}
            className="inline-block whitespace-pre [&:not(:last-child)]:after:content-['\00a0']"
          >
            {word}
            <i
              ref={(el: HTMLElement | null) => {
                baseRefs.current[i] = el;
              }}
              className="inline-block w-0 h-0"
            />
          </span>
        ))}
      </span>

      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            {words.map((word, i) => (
              <text
                key={`${word}-${i}`}
                ref={(el: SVGTextElement | null) => {
                  glyphRefs.current[i] = el;
                }}
              >
                {word}
              </text>
            ))}
          </clipPath>
        </defs>
      </svg>

      <span ref={revealRef} className="absolute inset-0 block pointer-events-none">
        <span className="absolute inset-0 block" style={{ clipPath: `url(#${clipId})` }}>
          <span ref={mediaRef} className="absolute inset-0 block [will-change:transform,filter]">
            <img className="block w-full h-full object-cover select-none" src={src} alt="" draggable={false} />
          </span>
        </span>
      </span>
    </Tag>
  );
};

export default MaskedHeading;
