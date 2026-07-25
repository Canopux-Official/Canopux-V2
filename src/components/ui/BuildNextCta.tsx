import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/ui/SectionReveal";

type BuildNextCtaProps = {
  primaryHref?: string;
  primaryLabel?: string;
  primaryExternal?: boolean;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function BuildNextCta({
  primaryHref = "/services",
  primaryLabel = "Explore Services",
  primaryExternal = false,
  secondaryHref = "/portfolio",
  secondaryLabel = "View Our Work",
}: BuildNextCtaProps = {}) {
  return (
    <section className="bg-canopux-black pb-24 pt-8 sm:pb-32">
      <div className="container-page">
        <SectionReveal>
          <div className="flex flex-col gap-8 rounded-3xl bg-[#171717] px-7 py-9 sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-12">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-canopux-white sm:text-3xl lg:text-4xl">
                Build what&apos;s next.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-canopux-silver sm:text-base">
                From ambitious ideas to production-ready software, we design,
                build, and scale digital products that create lasting impact.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Button
                href={primaryHref}
                external={primaryExternal || undefined}
                className="rounded-full"
              >
                {primaryLabel}
                <span aria-hidden>→</span>
              </Button>
              <Button
                href={secondaryHref}
                variant="secondary"
                className="rounded-full"
              >
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
