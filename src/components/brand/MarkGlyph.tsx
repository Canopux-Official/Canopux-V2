type MarkGlyphProps = {
  className?: string;
  size?: number;
};

/** Small ringed-planet mark — nav/footer/section divider only. Never hero-scale. */
export function MarkGlyph({ className = "", size = 20 }: MarkGlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
      <ellipse
        cx="16"
        cy="16"
        rx="13"
        ry="5"
        transform="rotate(-28 16 16)"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M6 22 L26 10"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SectionDivider({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const lineClass =
    tone === "light" ? "bg-canopux-black/15" : "bg-canopux-line";
  const markClass =
    tone === "light" ? "text-canopux-black/40" : "text-canopux-silver";

  return (
    <div
      className={`flex items-center justify-center gap-4 py-6 ${className}`}
      aria-hidden
    >
      <span className={`h-px w-12 sm:w-24 ${lineClass}`} />
      <MarkGlyph size={16} className={markClass} />
      <span className={`h-px w-12 sm:w-24 ${lineClass}`} />
    </div>
  );
}
