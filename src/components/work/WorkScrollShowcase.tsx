"use client";

import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/content/portfolio";
import { siteConfig } from "@/lib/site";

type WorkScrollShowcaseProps = {
  studies: CaseStudy[];
};

function MobileWorkCard({
  study,
  index,
  total,
  reduceMotion,
}: {
  study: CaseStudy;
  index: number;
  total: number;
  reduceMotion: boolean;
}) {
  return (
    <div className={reduceMotion ? undefined : "animate-fade-rise"}>
      <div className="flex items-start justify-between gap-2 sm:gap-4">
        <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-canopux-silver sm:text-[11px] sm:tracking-[0.18em]">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </p>
        <p className="min-w-0 text-right font-mono text-[9px] uppercase leading-snug tracking-[0.14em] text-canopux-silver sm:text-[11px] sm:tracking-[0.16em]">
          {study.industry}
        </p>
      </div>

      <h2 className="mt-4 font-display text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.035em] text-canopux-white max-[360px]:text-[1.25rem] sm:mt-5 sm:text-[1.75rem] md:text-3xl">
        {study.title}
      </h2>
      <p className="mt-2 text-[14px] leading-snug text-canopux-silver sm:text-[15px] md:text-base">
        {study.tagline}
      </p>
      <p className="mt-4 text-[14px] leading-relaxed text-canopux-silver sm:mt-5 sm:text-[15px] md:text-body">
        {study.summary}
      </p>
      <p className="mt-4 border-t border-white/10 pt-4 text-[13px] leading-relaxed text-canopux-silver sm:mt-5 sm:pt-5 sm:text-[14px] md:text-body-sm">
        <span className="font-display font-semibold text-canopux-white">
          Outcome:{" "}
        </span>
        {study.outcome}
      </p>
      <a
        href={study.liveUrl ?? siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto mt-5 inline-flex min-h-11 items-center gap-2 font-sans text-[13px] font-semibold text-canopux-white transition-opacity hover:opacity-80 sm:mt-6 sm:text-sm"
      >
        {study.liveUrl ? "Visit live site" : "Discuss a similar project"}
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

function clampIndex(value: number, length: number) {
  if (length <= 0) return 0;
  return Math.min(Math.max(value, 0), length - 1);
}

export function WorkScrollShowcase({ studies }: WorkScrollShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const desktopPanelRefs = useRef<Array<HTMLElement | null>>([]);
  const mobilePanelRefs = useRef<Array<HTMLElement | null>>([]);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      reduceMotionRef.current = media.matches;
      setReduceMotion(media.matches);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Desktop: intersection observer
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const ratios = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        if (!media.matches) return;

        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (Number.isNaN(index)) return;
          ratios.set(
            index,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        let bestIndex = 0;
        let bestRatio = -1;
        ratios.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });

        if (bestRatio <= 0) return;
        if (bestIndex === activeIndexRef.current) return;
        setActiveIndex(bestIndex);
      },
      {
        threshold: [0.15, 0.3, 0.45, 0.6, 0.75, 0.9],
        rootMargin: "-25% 0px -35% 0px",
      },
    );

    const sync = () => {
      observer.disconnect();
      ratios.clear();
      if (!media.matches) return;
      desktopPanelRefs.current.forEach((panel) => {
        if (panel) observer.observe(panel);
      });
    };

    sync();
    media.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
      observer.disconnect();
    };
  }, [studies.length]);

  // Mobile / tablet: one gesture → one project
  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 1024px)");
    let animating = false;
    let unlockTimer = 0;
    let touchStartY = 0;
    let touchStartX = 0;
    let touchArmed = false;

    const panelCount = () =>
      mobilePanelRefs.current.filter(Boolean).length || studies.length;

    const isDesktop = () => desktopMedia.matches;

    const inSnapZone = () => {
      const track = mobileTrackRef.current;
      if (!track) return false;
      const rect = track.getBoundingClientRect();
      return rect.top <= 12 && rect.bottom >= window.innerHeight * 0.55;
    };

    const scrollToIndex = (index: number) => {
      const panels = mobilePanelRefs.current.filter(Boolean) as HTMLElement[];
      const next = clampIndex(index, panels.length);
      const panel = panels[next];
      if (!panel) return;

      animating = true;
      window.clearTimeout(unlockTimer);
      activeIndexRef.current = next;
      setActiveIndex(next);

      const top = Math.round(window.scrollY + panel.getBoundingClientRect().top);
      window.scrollTo({
        top,
        behavior: reduceMotionRef.current ? "auto" : "smooth",
      });

      unlockTimer = window.setTimeout(
        () => {
          animating = false;
        },
        reduceMotionRef.current ? 80 : 750,
      );
    };

    const syncIndexFromPosition = () => {
      if (isDesktop() || animating) return;
      const panels = mobilePanelRefs.current.filter(Boolean) as HTMLElement[];
      const track = mobileTrackRef.current;
      if (!panels.length || !track) return;

      const focusY = window.innerHeight * 0.5;
      const trackRect = track.getBoundingClientRect();

      if (trackRect.top > focusY) {
        if (activeIndexRef.current !== 0) setActiveIndex(0);
        return;
      }
      if (trackRect.bottom < focusY) {
        const last = panels.length - 1;
        if (activeIndexRef.current !== last) setActiveIndex(last);
        return;
      }

      let next = 0;
      let bestDist = Infinity;
      panels.forEach((panel, i) => {
        const rect = panel.getBoundingClientRect();
        const mid = (rect.top + rect.bottom) / 2;
        const dist = Math.abs(mid - focusY);
        if (dist < bestDist) {
          bestDist = dist;
          next = i;
        }
      });

      if (next !== activeIndexRef.current) setActiveIndex(next);
    };

    const onWheel = (event: WheelEvent) => {
      if (isDesktop()) return;
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;

      if (animating) {
        event.preventDefault();
        return;
      }

      if (!inSnapZone()) return;

      const idx = activeIndexRef.current;
      const last = panelCount() - 1;

      if (event.deltaY > 10) {
        if (idx < last) {
          event.preventDefault();
          scrollToIndex(idx + 1);
        }
        return;
      }

      if (event.deltaY < -10) {
        if (idx > 0) {
          event.preventDefault();
          scrollToIndex(idx - 1);
        }
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      if (isDesktop() || event.touches.length !== 1) return;
      touchStartY = event.touches[0].clientY;
      touchStartX = event.touches[0].clientX;
      touchArmed = inSnapZone() && !animating;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!touchArmed || isDesktop() || event.touches.length !== 1) return;
      if (animating) {
        event.preventDefault();
        return;
      }
      if (!inSnapZone()) {
        touchArmed = false;
        return;
      }

      const dy = touchStartY - event.touches[0].clientY;
      const dx = touchStartX - event.touches[0].clientX;
      if (Math.abs(dy) < 12 || Math.abs(dy) < Math.abs(dx)) return;

      const idx = activeIndexRef.current;
      const last = panelCount() - 1;

      // Block free-scroll inside the gallery so one swipe = one step
      if ((dy > 0 && idx < last) || (dy < 0 && idx > 0)) {
        event.preventDefault();
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (!touchArmed || isDesktop()) return;
      touchArmed = false;
      if (animating || !inSnapZone()) return;

      const dy = touchStartY - event.changedTouches[0].clientY;
      const dx = touchStartX - event.changedTouches[0].clientX;
      if (Math.abs(dy) < 48 || Math.abs(dy) < Math.abs(dx)) {
        // Small move: settle back on current project
        scrollToIndex(activeIndexRef.current);
        return;
      }

      const idx = activeIndexRef.current;
      const last = panelCount() - 1;

      if (dy > 0 && idx < last) {
        scrollToIndex(idx + 1);
        return;
      }
      if (dy < 0 && idx > 0) {
        scrollToIndex(idx - 1);
        return;
      }

      // At ends: allow leaving the section on the next native scroll
      scrollToIndex(idx);
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(syncIndexFromPosition);
    };

    const onBreakpoint = () => {
      animating = false;
      touchArmed = false;
      if (!isDesktop()) syncIndexFromPosition();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    desktopMedia.addEventListener("change", onBreakpoint);
    syncIndexFromPosition();

    return () => {
      window.clearTimeout(unlockTimer);
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktopMedia.removeEventListener("change", onBreakpoint);
    };
  }, [studies.length]);

  const active = studies[activeIndex] ?? studies[0];

  return (
    <section
      id="work-showcase"
      className="bg-canopux-black [overflow-anchor:none]"
      aria-label="Case studies"
    >
      {/* Desktop: compact left titles + fixed description card */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-10 xl:gap-x-16">
        <div className="py-[14vh] xl:py-[18vh]">
          {studies.map((study, index) => {
            const isActive = index === activeIndex;
            return (
              <article
                key={study.slug}
                data-index={index}
                ref={(node) => {
                  desktopPanelRefs.current[index] = node;
                }}
                className="flex min-h-[38vh] flex-col justify-center px-8 py-7 xl:min-h-[42vh] xl:px-16 xl:py-8"
              >
                <p
                  className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? "text-canopux-silver" : "text-canopux-silver/40"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2
                  className={`mt-3 max-w-lg font-display text-[1.75rem] font-semibold tracking-[-0.04em] transition-colors duration-300 xl:text-4xl ${
                    isActive ? "text-canopux-white" : "text-canopux-white/35"
                  }`}
                >
                  {study.title}
                </h2>
                <p
                  className={`mt-3 max-w-md text-[15px] transition-colors duration-300 xl:text-lg ${
                    isActive ? "text-canopux-silver" : "text-canopux-silver/30"
                  }`}
                >
                  {study.tagline}
                </p>
              </article>
            );
          })}
        </div>

        <div className="relative">
          <div className="sticky top-0 flex h-[100svh] items-center px-8 xl:px-12">
            <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#141414] p-7 shadow-[0_24px_64px_rgba(0,0,0,0.45)] xl:p-10">
              <div className="mb-6 flex gap-2 xl:mb-7" aria-hidden>
                {studies.map((study, index) => (
                  <span
                    key={study.slug}
                    className={`h-0.5 flex-1 transition-colors duration-500 ${
                      index === activeIndex
                        ? "bg-canopux-white"
                        : "bg-canopux-line"
                    }`}
                  />
                ))}
              </div>

              <div
                key={active.slug}
                className={reduceMotion ? undefined : "animate-fade-rise"}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-canopux-silver">
                  {active.industry}
                  <span className="mx-2 text-canopux-line">·</span>
                  <span className="text-canopux-signal">{active.status}</span>
                </p>
                <p className="mt-5 text-body leading-relaxed text-canopux-silver">
                  {active.summary}
                </p>

                <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
                  {active.services.map((service) => (
                    <li
                      key={service}
                      className="font-mono text-[10px] uppercase tracking-[0.16em] text-canopux-silver"
                    >
                      {service}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 border-t border-white/10 pt-6 text-body-sm text-canopux-silver">
                  <span className="font-display font-semibold text-canopux-white">
                    Outcome:{" "}
                  </span>
                  {active.outcome}
                </p>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-canopux-silver/70">
                  {active.stack.slice(0, 6).join(" · ")}
                </p>
              </div>

              <a
                href={active.liveUrl ?? siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-11 items-center gap-2 font-sans text-sm font-semibold text-canopux-white transition-opacity hover:opacity-80"
              >
                {active.liveUrl ? "Visit live site" : "Discuss a similar project"}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet: one sticky card; one gesture advances one work */}
      <div className="relative [overflow-anchor:none] lg:hidden">
        <div ref={mobileTrackRef} className="relative" aria-hidden>
          {studies.map((study, index) => (
            <div
              key={study.slug}
              data-index={index}
              ref={(node) => {
                mobilePanelRefs.current[index] = node;
              }}
              className="h-[100svh]"
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 [overflow-anchor:none]">
          <div className="sticky top-0 flex h-[100svh] items-center justify-center px-4 pt-[max(4.75rem,calc(env(safe-area-inset-top)+3.75rem))] pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6 md:px-10">
            <div
              className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#141414] p-5 shadow-[0_24px_64px_rgba(0,0,0,0.45)] max-[360px]:p-4 sm:p-7 md:p-8"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="mb-4 flex gap-1.5 sm:mb-5" aria-hidden>
                {studies.map((study, index) => (
                  <span
                    key={study.slug}
                    className={`h-0.5 flex-1 transition-colors duration-500 ${
                      index === activeIndex
                        ? "bg-canopux-white"
                        : "bg-canopux-line"
                    }`}
                  />
                ))}
              </div>

              <MobileWorkCard
                key={active.slug}
                study={active}
                index={activeIndex}
                total={studies.length}
                reduceMotion={reduceMotion}
              />
            </div>
          </div>
        </div>

        <ul className="sr-only">
          {studies.map((study) => (
            <li key={study.slug}>
              {study.title}. {study.summary}
              {study.liveUrl ? ` Live site: ${study.liveUrl}` : ""}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
