import { Button } from "@/components/ui/Button";
import { MediaBleed } from "@/components/ui/MediaBleed";
import { BuildNextCta } from "@/components/ui/BuildNextCta";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { TechStackGrid } from "@/components/services/TechStackGrid";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceListJsonLd,
} from "@/components/seo/JsonLd";
import { serviceCategories, services } from "@/content/services";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Services, Branding, Web, Apps, Automation & AI",
  description:
    "Canopux services for small businesses: branding and design, web and mobile development, backend security, integrations, marketing analytics, and AI solutions.",
  path: "/services",
  keywords: [
    "small business web development",
    "e-commerce development",
    "SEO GA4",
    "AI automation services",
    "brand identity design",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd
        data={serviceListJsonLd(
          services.map((service) => ({
            name: service.title,
            description: service.summary,
            path: `/services`,
          })),
        )}
      />

      <section>
        <MediaBleed
          label="services hero"
          alt="Placeholder full-bleed hero for Canopux services"
          aspect="tall"
          kenBurns
          overlay="heavy"
          tone="dark"
        >
          <div className="container-page flex min-h-[100svh] flex-col justify-center pb-16 pt-24 sm:pb-20 sm:pt-28">
            <p className="eyebrow">Our services</p>
            <h1 className="mt-5 max-w-2xl">
              <span className="block font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-canopux-white sm:text-5xl lg:text-6xl">
                Services
              </span>
              <span className="mt-5 block max-w-xl text-base leading-relaxed text-canopux-silver sm:text-lg">
                for every stage of growth.
              </span>
            </h1>
            <div className="mt-8">
              <Button href={siteConfig.whatsappUrl} external>
                Start your project
                <span aria-hidden className="text-base leading-none">
                  →
                </span>
              </Button>
            </div>
          </div>
        </MediaBleed>
      </section>

      <section className="bg-canopux-black pb-24 pt-12 sm:pb-32 sm:pt-16 lg:pt-[18vh]">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {serviceCategories.map((category) => (
              <SectionReveal key={category.id}>
                <article
                  id={category.id}
                  className="scroll-mt-28 flex h-full min-h-[22rem] flex-col rounded-3xl bg-[#171717] p-6 sm:min-h-[24rem] sm:p-8"
                >
                  <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-canopux-white sm:text-2xl">
                    {category.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-canopux-silver">
                    {category.intro}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {category.items.map((item) => (
                      <li
                        key={item.title}
                        className="flex items-start gap-2.5 text-[14px] text-canopux-white"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-canopux-white"
                          aria-hidden
                        />
                        {item.title}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto border-t border-white/10 pt-6">
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[15px] text-canopux-silver transition-colors hover:text-canopux-white"
                    >
                      Discuss this service
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <TechStackGrid />

      <BuildNextCta
        primaryHref={siteConfig.whatsappUrl}
        primaryLabel="Start a Project"
        primaryExternal
        secondaryHref="/portfolio"
        secondaryLabel="View Our Work"
      />
    </>
  );
}
