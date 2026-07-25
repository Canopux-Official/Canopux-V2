"use client";

import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/content/portfolio";
import { siteConfig } from "@/lib/site";

type WorkScrollShowcaseProps = {
  studies: CaseStudy[];
};

export function WorkScrollShowcase({ studies }: WorkScrollShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const panelRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const panels = panelRefs.current.filter(Boolean) as HTMLElement[];
    if (panels.length === 0) return;

    const ratios = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (Number.isNaN(index)) return;
          ratios.set(index, entry.intersectionRatio);
        });

        let bestIndex = 0;
        let bestRatio = -1;
        ratios.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });
        setActiveIndex(bestIndex);
      },
      {
        threshold: [0.2, 0.4, 0.55, 0.7, 0.9],
        rootMargin: "-20% 0px -35% 0px",
      },
    );

    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, [studies.length]);

  const active = studies[activeIndex] ?? studies[0];

  return (
    <section
      id="work-showcase"
      className="bg-canopux-black"
      aria-label="Case studies"
    >
      {/* Desktop: compact left titles + fixed description card */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-10 xl:gap-x-16">
        <div className="py-[18vh]">
          {studies.map((study, index) => {
            const isActive = index === activeIndex;
            return (
              <article
                key={study.slug}
                data-index={index}
                ref={(node) => {
                  panelRefs.current[index] = node;
                }}
                className="flex min-h-[42vh] flex-col justify-center px-10 py-8 xl:px-16"
              >
                <p
                  className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? "text-canopux-silver" : "text-canopux-silver/40"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2
                  className={`mt-3 max-w-lg font-display text-3xl font-semibold tracking-[-0.04em] transition-colors duration-300 xl:text-4xl ${
                    isActive ? "text-canopux-white" : "text-canopux-white/35"
                  }`}
                >
                  {study.title}
                </h2>
                <p
                  className={`mt-3 max-w-md text-base transition-colors duration-300 xl:text-lg ${
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
          <div className="sticky top-0 flex h-[100svh] items-center px-10 xl:px-12">
            {/* Card shell stays mounted — only copy inside swaps */}
            <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#141414] p-8 shadow-[0_24px_64px_rgba(0,0,0,0.45)] xl:p-10">
              <div className="mb-7 flex gap-2" aria-hidden>
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
                className={reduceMotion ? "" : "animate-fade-rise"}
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
                className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-canopux-white transition-opacity hover:opacity-80"
              >
                {active.liveUrl ? "Visit live site" : "Discuss a similar project"}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stacked text panels */}
      <div className="pt-[18vh] lg:hidden">
        {studies.map((study, index) => (
          <article key={study.slug} className="px-5 py-12 sm:px-8">
            <div className="rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-canopux-silver">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(studies.length).padStart(2, "0")}
                <span className="mx-2 text-canopux-line">·</span>
                {study.industry}
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                {study.title}
              </h2>
              <p className="mt-2 text-canopux-silver">{study.tagline}</p>
              <p className="mt-5 text-body text-canopux-silver">{study.summary}</p>
              <p className="mt-5 border-t border-white/10 pt-5 text-body-sm text-canopux-silver">
                <span className="font-display font-semibold text-canopux-white">
                  Outcome:{" "}
                </span>
                {study.outcome}
              </p>
              {study.liveUrl ? (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-canopux-white transition-opacity hover:opacity-80"
                >
                  Visit live site
                  <span aria-hidden>→</span>
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
