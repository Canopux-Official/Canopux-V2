import { Button } from "@/components/ui/Button";
import { MediaBleed } from "@/components/ui/MediaBleed";
import { BuildNextCta } from "@/components/ui/BuildNextCta";
import { WorkScrollShowcase } from "@/components/work/WorkScrollShowcase";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/content/portfolio";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Work, Case Studies for Growing Businesses",
  description:
    "Explore Canopux work across education, hospitality, conferences, industrial retail, schools, AI hiring, and more, live client sites and platforms.",
  path: "/portfolio",
  keywords: [
    "Canopux case studies",
    "JJ Institute",
    "Priyaanshii Tasteworks",
    "IndoCrypt 2025",
    "Student Management System",
    "AI ATS",
    "web development portfolio India",
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
          alt="Placeholder full-bleed hero for Canopux work"
          aspect="tall"
          kenBurns
          overlay="heavy"
          tone="dark"
          src='/bg-image/work.png'
        >
          <div className="container-page flex min-h-[100svh] flex-col justify-center pb-16 pt-28 sm:pb-20 sm:pt-28">
            <p className="eyebrow">Our work</p>
            <h1 className="mt-5 max-w-2xl">
              <span className="block font-display text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.04em] text-canopux-white sm:text-5xl lg:text-6xl">
                Built
              </span>
              <span className="mt-4 block max-w-xl text-base leading-relaxed text-canopux-silver sm:mt-5 sm:text-lg">
                for growing businesses.
              </span>
            </h1>
            <div className="mt-8">
              <Button href={siteConfig.whatsappUrl} external className="w-full sm:w-auto">
                Start your project
                <span aria-hidden className="text-base leading-none">
                  →
                </span>
              </Button>
            </div>
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
