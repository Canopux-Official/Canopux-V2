"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import type { Product } from "@/content/products";
import { siteConfig } from "@/lib/site";
import { SectionReveal } from "@/components/ui/SectionReveal";

type ProductsShowcaseProps = {
  products: Product[];
};

type OriginRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

function usePrefersReducedMotion() {
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduceMotion;
}

export function ProductsShowcase({ products }: ProductsShowcaseProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [origin, setOrigin] = useState<OriginRect | null>(null);
  const [phase, setPhase] = useState<"idle" | "opening" | "open" | "closing">(
    "idle",
  );
  const reduceMotion = usePrefersReducedMotion();
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map());
  const titleId = useId();
  const closeTimer = useRef<number | null>(null);

  const active = products.find((product) => product.slug === activeSlug) ?? null;
  const isExpanded = phase !== "idle" && active !== null;

  const clearCloseTimer = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const close = useCallback(() => {
    if (phase === "closing" || phase === "idle") return;
    clearCloseTimer();
    if (reduceMotion) {
      setPhase("idle");
      setActiveSlug(null);
      setOrigin(null);
      window.history.replaceState(null, "", "/products");
      return;
    }
    setPhase("closing");
    closeTimer.current = window.setTimeout(() => {
      setPhase("idle");
      setActiveSlug(null);
      setOrigin(null);
      window.history.replaceState(null, "", "/products");
      closeTimer.current = null;
    }, 420);
  }, [phase, reduceMotion]);

  const open = useCallback(
    (slug: string, fromHash = false) => {
      clearCloseTimer();
      const node = cardRefs.current.get(slug);
      const rect = node?.getBoundingClientRect();
      if (rect && !fromHash) {
        setOrigin({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        });
      } else {
        setOrigin(null);
      }
      setActiveSlug(slug);
      setPhase(reduceMotion || fromHash ? "open" : "opening");
      window.history.replaceState(null, "", `/products#${slug}`);
    },
    [reduceMotion],
  );

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    if (products.some((product) => product.slug === hash)) {
      open(hash, true);
    }
    // intentionally once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isExpanded) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isExpanded]);

  useEffect(() => {
    if (!isExpanded) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isExpanded, close]);

  // Paint origin frame, then animate to open
  useLayoutEffect(() => {
    if (phase !== "opening") return;
    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setPhase("open"));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [phase]);

  useEffect(() => () => clearCloseTimer(), []);

  const overlayStyle = ((): CSSProperties => {
    const base: CSSProperties = {
      transitionProperty: "transform, opacity",
      transitionDuration: reduceMotion ? "0ms" : "420ms",
      transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    };

    if (!origin || typeof window === "undefined" || reduceMotion) {
      return {
        ...base,
        transform: "translate(0px, 0px) scale(1)",
        opacity: phase === "closing" ? 0 : 1,
      };
    }

    const targetWidth = Math.min(720, window.innerWidth * 0.92);
    const targetHeight = Math.min(window.innerHeight * 0.86, 740);
    const targetLeft = (window.innerWidth - targetWidth) / 2;
    const targetTop = (window.innerHeight - targetHeight) / 2;

    const scale = Math.max(
      origin.width / targetWidth,
      origin.height / targetHeight,
    );

    const dx =
      origin.left + origin.width / 2 - (targetLeft + targetWidth / 2);
    const dy =
      origin.top + origin.height / 2 - (targetTop + targetHeight / 2);

    if (phase === "opening" || phase === "closing") {
      return {
        ...base,
        transform: `translate(${dx}px, ${dy}px) scale(${scale})`,
        opacity: phase === "closing" ? 0.85 : 1,
      };
    }

    return {
      ...base,
      transform: "translate(0px, 0px) scale(1)",
      opacity: 1,
    };
  })();

  return (
    <>
      <div className="container-page pb-20 pt-[18vh] sm:pb-28">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {products.map((product) => (
            <SectionReveal key={product.slug} className="h-full">
              <article
                id={product.slug}
                ref={(node) => {
                  if (node) cardRefs.current.set(product.slug, node);
                  else cardRefs.current.delete(product.slug);
                }}
                className="scroll-mt-28 flex h-full min-h-[17rem] flex-col justify-between rounded-2xl bg-[#171717] p-7 sm:min-h-[18.5rem] sm:p-8 lg:min-h-[20rem] lg:p-9"
              >
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-canopux-white sm:text-[1.65rem]">
                    {product.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-canopux-silver">
                    {product.summary}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => open(product.slug)}
                  className="mt-8 inline-flex w-fit items-center gap-1.5 text-[15px] text-canopux-silver transition-colors hover:text-canopux-white"
                >
                  Learn More
                  <span aria-hidden>→</span>
                </button>
              </article>
            </SectionReveal>
          ))}

          <SectionReveal className="h-full">
            <article className="flex h-full min-h-[17rem] flex-col justify-between rounded-2xl border border-dashed border-canopux-line bg-transparent p-7 sm:min-h-[18.5rem] sm:p-8 lg:min-h-[20rem] lg:p-9">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-canopux-white sm:text-[1.65rem]">
                  Explore our work
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-canopux-silver">
                  See how these systems ship in real institutes, retail, and
                  operations projects.
                </p>
              </div>
              <Link
                href="/portfolio"
                className="mt-8 inline-flex w-fit items-center gap-1.5 text-[15px] text-canopux-silver transition-colors hover:text-canopux-white"
              >
                View all case studies
                <span aria-hidden>→</span>
              </Link>
            </article>
          </SectionReveal>
        </div>
      </div>

      {isExpanded && active && (
        <div className="fixed inset-0 z-[60]" role="presentation">
          <button
            type="button"
            aria-label="Close product details"
            className={`absolute inset-0 bg-black/70 backdrop-blur-[2px] transition-opacity duration-300 ${
              phase === "open" ? "opacity-100" : "opacity-0"
            }`}
            onClick={close}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="pointer-events-auto relative flex max-h-[86vh] w-full max-w-[45rem] origin-center flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#171717] shadow-[0_32px_96px_rgba(0,0,0,0.65)]"
              style={overlayStyle}
            >
              <div className="relative h-40 shrink-0 overflow-hidden sm:h-48">
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="720px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/40 to-black/25" />
                <button
                  type="button"
                  onClick={close}
                  className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-canopux-white backdrop-blur-sm transition-colors hover:bg-black/70"
                  aria-label="Close"
                >
                  <span aria-hidden className="text-lg leading-none">
                    ×
                  </span>
                </button>
              </div>

              <div
                className={`flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 ${
                  phase === "open"
                    ? "opacity-100 transition-opacity duration-300 delay-100"
                    : "opacity-0"
                }`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-canopux-silver">
                  {active.audience}
                </p>
                <h2
                  id={titleId}
                  className="mt-3 font-display text-3xl font-semibold tracking-[-0.035em] text-canopux-white sm:text-4xl"
                >
                  {active.title}
                </h2>
                <p className="mt-2 text-lg text-canopux-silver">{active.tagline}</p>
                <p className="mt-5 text-body leading-relaxed text-canopux-silver">
                  {active.detail}
                </p>

                {active.uniqueness ? (
                  <p className="mt-4 text-body leading-relaxed text-canopux-silver/80">
                    {active.uniqueness}
                  </p>
                ) : null}

                <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-canopux-silver">
                  Features included
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {active.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-body text-canopux-silver"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-canopux-white" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {active.stack && active.stack.length > 0 ? (
                  <>
                    <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-canopux-silver">
                      Tech stack
                    </h3>
                    <p className="mt-3 text-body-sm text-canopux-silver">
                      {active.stack.join(" · ")}
                    </p>
                  </>
                ) : null}

                <p className="mt-8 border-t border-white/10 pt-6 text-body-sm text-canopux-silver">
                  <span className="font-display font-semibold text-canopux-white">
                    Outcome:{" "}
                  </span>
                  {active.outcome}
                </p>

                <div className="mt-8 flex flex-wrap gap-3 pb-2">
                  {active.liveUrl ? (
                    <a
                      href={active.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-canopux-white px-5 py-2.5 font-sans text-sm font-semibold text-canopux-black transition-opacity hover:opacity-90"
                    >
                      View live product
                      <span aria-hidden className="ml-2">
                        →
                      </span>
                    </a>
                  ) : (
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-canopux-white px-5 py-2.5 font-sans text-sm font-semibold text-canopux-black transition-opacity hover:opacity-90"
                    >
                      Ask about this product
                      <span aria-hidden className="ml-2">
                        →
                      </span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={close}
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-2.5 font-sans text-sm font-semibold text-canopux-white transition-colors hover:bg-white/5"
                  >
                    Back to products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
