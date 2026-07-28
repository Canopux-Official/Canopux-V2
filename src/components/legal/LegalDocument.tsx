import Link from "next/link";
import { MediaBleed } from "@/components/ui/MediaBleed";
import { SectionReveal } from "@/components/ui/SectionReveal";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  summary: string;
  effectiveDate: string;
  contactEmail: string;
  sections: LegalSection[];
};

export function LegalDocument({
  eyebrow,
  title,
  summary,
  effectiveDate,
  contactEmail,
  sections,
}: LegalDocumentProps) {
  return (
    <>
      <section>
        <MediaBleed
          label={`${title} hero`}
          alt={`${title} page background`}
          aspect="cinema"
          overlay="heavy"
          tone="dark"
          showPlaceholderBadge={false}
          className="!min-h-[42svh] sm:!min-h-[48svh]"
        >
          <div className="container-page flex min-h-[42svh] flex-col justify-end pb-12 pt-28 sm:min-h-[48svh] sm:pb-16 sm:pt-32">
            <p className="eyebrow mt-10">{eyebrow}</p>
            <h1 className="mt-4 max-w-3xl font-display text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.04em] text-canopux-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-canopux-silver sm:text-lg">
              {summary}
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-canopux-silver">
              Effective {effectiveDate}
            </p>
          </div>
        </MediaBleed>
      </section>

      <section className="bg-canopux-white text-canopux-black">
        <div className="container-page py-14 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-canopux-black/45">
            Questions?{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-canopux-signal underline-offset-4 hover:underline"
            >
              {contactEmail}
            </a>
          </p>

          <div className="mt-12 space-y-12 sm:mt-16 sm:space-y-14">
            {sections.map((section, index) => (
              <SectionReveal key={section.title}>
                <article>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-canopux-black/45">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-xl font-semibold tracking-[-0.03em] text-canopux-black sm:text-2xl">
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="mt-4 max-w-3xl text-body leading-relaxed text-canopux-black/70"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets?.length ? (
                    <ul className="mt-4 max-w-3xl space-y-2.5">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-body leading-relaxed text-canopux-black/70"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-canopux-black/50"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </SectionReveal>
            ))}
          </div>

          <p className="mt-16 border-t border-canopux-black/10 pt-8">
            <Link
              href="/contact"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-canopux-signal underline-offset-4 hover:underline"
            >
              Contact Canopux →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
