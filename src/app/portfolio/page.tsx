import { MediaBleed } from "@/components/ui/MediaBleed";
import { BuildNextCta } from "@/components/ui/BuildNextCta";
import { WorkScrollShowcase } from "@/components/work/WorkScrollShowcase";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/content/portfolio";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Work — Case Studies for Growing Businesses",
  description:
    "Explore Canopux case studies across education, retail operations, events, and automotive verification — real systems built for business outcomes.",
  path: "/portfolio",
  keywords: [
    "Canopux case studies",
    "student management system",
    "BuildCentral",
    "small business software",
  ],
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/portfolio" },
        ])}
      />

      <section>
        <MediaBleed
          label="portfolio hero"
          alt="Product team reviewing systems work on screens"
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2400&q=80"
          aspect="cinema"
          kenBurns
          overlay="heavy"
          priority
          showPlaceholderBadge={false}
        >
          <div className="container-page flex min-h-[70vh] flex-col justify-center py-28">
            <p className="eyebrow">Work</p>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-[-0.04em] text-canopux-white sm:text-5xl lg:text-6xl">
              <span className="block">Outcomes first.</span>
              <span className="block">Systems that ship.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-canopux-silver sm:text-lg">
              Scroll through selected builds — the brief updates as each project
              comes into view.
            </p>
          </div>
        </MediaBleed>
      </section>

      <WorkScrollShowcase studies={caseStudies} />

      <BuildNextCta
        primaryHref={siteConfig.whatsappUrl}
        primaryLabel="Start a Project"
        primaryExternal
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />
    </>
  );
}
