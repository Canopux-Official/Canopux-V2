import Image from "next/image";
import type { ReactNode } from "react";

type MediaBleedProps = {
  /** Short label describing what photography/render should replace this */
  label: string;
  alt: string;
  className?: string;
  kenBurns?: boolean;
  overlay?: "heavy" | "medium" | "light" | "none";
  children?: ReactNode;
  aspect?: "screen" | "cinema" | "square" | "tall";
  tone?: "dark" | "mid";
  /** Optional real image path under /public (e.g. /space-bg.png) */
  src?: string;
  priority?: boolean;
  /** Hide the “Placeholder media” badge when a real asset is provided */
  showPlaceholderBadge?: boolean;
};

const aspectClass = {
  screen: "min-h-[100svh]",
  cinema: "min-h-[70vh] aspect-[16/9]",
  square: "aspect-square min-h-[20rem]",
  tall: "min-h-[85vh]",
} as const;

const overlayClass = {
  none: "",
  light: "bg-black/30",
  medium: "bg-black/55",
  heavy: "bg-gradient-to-t from-black via-black/70 to-black/35",
} as const;

/**
 * Full-bleed media for photography / product renders / looping video.
 * Pass `src` for a real image; omit it for a placeholder plate.
 */
export function MediaBleed({
  label,
  alt,
  className = "",
  kenBurns = false,
  overlay = "medium",
  children,
  aspect = "cinema",
  tone = "dark",
  src,
  priority = false,
  showPlaceholderBadge,
}: MediaBleedProps) {
  const isPlaceholder = !src;
  const badgeVisible = showPlaceholderBadge ?? isPlaceholder;

  return (
    <div
      className={`relative overflow-hidden bg-canopux-black ${aspectClass[aspect]} ${className}`}
    >
      <div
        className={`absolute inset-0 ${kenBurns ? "animate-ken-burns motion-reduce:animate-none" : ""}`}
        aria-hidden={!src}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover object-center"
          />
        ) : (
          <>
            {/* TODO: replace with real photography/render */}
            <div
              className={`absolute inset-0 ${
                tone === "dark"
                  ? "bg-[radial-gradient(ellipse_at_30%_20%,#1a1a1e_0%,#000_55%),linear-gradient(160deg,#111114_0%,#000_70%)]"
                  : "bg-[radial-gradient(ellipse_at_70%_40%,#2a2c30_0%,#0d0d0f_60%),linear-gradient(200deg,#17181b_0%,#000_75%)]"
              }`}
            />
            <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.55%22/></svg>')]" />
          </>
        )}
      </div>

      {overlay !== "none" && (
        <div className={`absolute inset-0 ${overlayClass[overlay]}`} aria-hidden />
      )}

      {!src && <span className="sr-only">{alt}</span>}

      {badgeVisible && (
        <div className="pointer-events-none absolute bottom-4 left-4 z-10 sm:bottom-6 sm:left-6">
          <span className="inline-flex items-center gap-2 border border-canopux-line bg-canopux-black/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-canopux-silver backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-canopux-signal" aria-hidden />
            Placeholder media · {label}
          </span>
        </div>
      )}

      {children && (
        <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-end">
          {children}
        </div>
      )}
    </div>
  );
}
