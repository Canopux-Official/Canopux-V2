"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
} from "react";
import { partners } from "@/content/partners";

const LOOP_SECONDS = 38;

function ChevronLeft({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function PartnersMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const loopWidthRef = useRef(0);
  const pausedRef = useRef(false);
  const animatingRef = useRef(false);
  const reduceMotionRef = useRef(false);

  const normalize = useCallback(() => {
    const loop = loopWidthRef.current;
    if (!loop) return;
    while (offsetRef.current <= -loop) offsetRef.current += loop;
    while (offsetRef.current > 0) offsetRef.current -= loop;
  }, []);

  const applyTransform = useCallback((animated = false) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = animated ? "transform 0.45s ease" : "none";
    track.style.transform = `translateX(${offsetRef.current}px)`;
  }, []);

  const measureLoop = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    loopWidthRef.current = track.scrollWidth / 3;
  }, []);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const track = trackRef.current;
    if (!track) return;

    measureLoop();
    const observer = new ResizeObserver(measureLoop);
    observer.observe(track);

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const loop = loopWidthRef.current;
      const delta = now - last;
      last = now;

      if (
        loop &&
        !pausedRef.current &&
        !animatingRef.current &&
        !reduceMotionRef.current
      ) {
        const speed = loop / (LOOP_SECONDS * 1000);
        offsetRef.current -= speed * delta;
        normalize();
        applyTransform(false);
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [applyTransform, measureLoop, normalize]);

  const nudge = (direction: "left" | "right") => {
    const wrap = trackRef.current?.parentElement;
    if (!wrap) return;
    const step = Math.max(wrap.clientWidth * 0.8, 140);
    animatingRef.current = true;
    offsetRef.current += direction === "left" ? step : -step;
    normalize();
    applyTransform(true);
    window.setTimeout(() => {
      animatingRef.current = false;
    }, 460);
  };

  const looped = [...partners, ...partners, ...partners];

  return (
    <section
      className="relative overflow-hidden bg-canopux-white pt-16 pb-6 sm:pt-20 sm:pb-8"
      aria-label="Partner companies and organizations working with Canopux"
      style={
        {
          "--mq-fade":
            "linear-gradient(90deg, transparent 0%, black 4%, black 96%, transparent 100%)",
        } as CSSProperties
      }
    >
      <div className="container-page relative z-[3] mb-10 sm:mb-12">
        <p className="eyebrow font-semibold text-canopux-black/50">Our Partners</p>
        <h2 className="sr-only">Technology Partners and Clients of Canopux</h2>
      </div>

      <div
        className="relative z-[2] flex items-center gap-0 px-0 sm:gap-4 sm:px-6"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <button
          type="button"
          className="absolute left-2 z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-canopux-black/10 bg-canopux-white/95 text-canopux-black/50 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition hover:border-canopux-black/20 hover:text-canopux-black sm:static sm:h-12 sm:w-12 sm:bg-canopux-white sm:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]"
          onClick={() => nudge("left")}
          aria-label="View previous partners"
        >
          <ChevronLeft />
        </button>

        <div
          className="min-w-0 flex-1 overflow-hidden px-1 sm:px-0"
          style={{
            maskImage: "var(--mq-fade)",
            WebkitMaskImage: "var(--mq-fade)",
          }}
        >
          <div
            ref={trackRef}
            className="flex w-max items-center py-2 will-change-transform"
          >
            {looped.map((partner, index) => {
              const logo = (
                <img
                  src={partner.src}
                  alt={partner.alt}
                  loading="lazy"
                  draggable={false}
                  className="pointer-events-none block h-14 w-auto max-w-[120px] select-none object-contain sm:h-[100px] sm:max-w-[220px]"
                />
              );

              return (
                <figure
                  key={`${partner.name}-${index}`}
                  className="mx-1.5 flex shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-canopux-black/[0.08] bg-canopux-white px-5 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-canopux-black/15 sm:mx-2.5 sm:rounded-[20px] sm:px-14 sm:py-6"
                  aria-hidden={index >= partners.length}
                >
                  {partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${partner.name} website`}
                      tabIndex={index >= partners.length ? -1 : undefined}
                      className="flex items-center justify-center"
                    >
                      {logo}
                    </a>
                  ) : (
                    logo
                  )}
                </figure>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="absolute right-2 z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-canopux-black/10 bg-canopux-white/95 text-canopux-black/50 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition hover:border-canopux-black/20 hover:text-canopux-black sm:static sm:h-12 sm:w-12 sm:bg-canopux-white sm:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]"
          onClick={() => nudge("right")}
          aria-label="View next partners"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
