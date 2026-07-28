import Link from "next/link";
import Image from "next/image";
import { SectionDivider } from "@/components/brand/MarkGlyph";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { Button } from "@/components/ui/Button";
import { LiveTime } from "@/components/ui/LiveTime";
import { MediaBleed } from "@/components/ui/MediaBleed";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { serviceCategories } from "@/content/services";
import { caseStudies, featuredProduct } from "@/content/portfolio";
import { products } from "@/content/products";
import { getAllPosts } from "@/content/blog";
import { buildMetadata } from "@/lib/metadata";
import { pillars, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: siteConfig.title,
  description:
    "Empowering small businesses with scalable digital solutions and intelligent automation, branding, web and mobile apps, analytics, and AI.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "Canopux",
    "small business digital solutions",
    "web development",
    "e-commerce",
    "AI automation",
    "SEO GA4",
    "Bhubaneswar",
  ],
});

export default function HomePage() {
  const featuredWork = caseStudies.slice(0, 4);
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <>
      <section className="relative">
        <MediaBleed
          label="hero celestial chart background"
          alt="Celestial star chart background for the Canopux hero"
          aspect="screen"
          kenBurns
          overlay="heavy"
          tone="dark"
          src="/globe-bg.png"
          priority
          showPlaceholderBadge={false}
        >
          <div className="relative min-h-[100svh]">
            <div className="container-page flex min-h-[100svh] flex-col justify-center pb-24 pt-24 sm:pb-32 sm:pt-28">
              <div className="w-full max-w-2xl animate-fade-rise">
                <h1>
                  <span className="block font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-canopux-white sm:text-5xl lg:text-6xl">
                    <span className="block">Empowering</span>
                    <span className="block">small businesses</span>
                  </span>
                  <span className="mt-5 block max-w-xl text-base leading-relaxed text-canopux-silver sm:text-lg">
                    with scalable digital solutions &amp; intelligent automation.
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
            </div>

            <LiveTime className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-20 max-[420px]:text-[10px] sm:bottom-10 sm:right-8 lg:bottom-12 lg:right-10" />
          </div>
        </MediaBleed>
      </section>

      <PartnersMarquee />

      <section className="surface-light">
        <div className="container-page pt-16 pb-10 sm:pt-20 sm:pb-12">
          <SectionReveal>
            <p className="eyebrow">Core pillars</p>
            <h2 className="section-title mt-3 max-w-2xl sm:mt-4">
              <span className="block">Four ways we help</span>
              <span className="block">small businesses grow.</span>
            </h2>
            <p className="section-lead">
              We group a broad capability set into clear outcomes, so you can
              choose the path that matches where your business is today.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <SectionReveal key={pillar.id}>
                <Link
                  href={pillar.href}
                  className="group block overflow-hidden border border-canopux-black/10 transition-opacity hover:opacity-90"
                >
                  <MediaBleed
                    label={pillar.title}
                    alt={pillar.imageAlt}
                    src={pillar.image}
                    aspect="cinema"
                    overlay="medium"
                    kenBurns={index === 0}
                    showPlaceholderBadge={false}
                    className="!min-h-[11rem] sm:!min-h-[14rem]"
                  />
                  <div className="bg-canopux-white px-5 py-6 sm:px-6 sm:py-7">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-canopux-black/45">
                      0{index + 1} / 04
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.03em] text-canopux-black sm:text-2xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-body text-canopux-black/65">
                      {pillar.summary}
                    </p>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
        <SectionDivider tone="light" />
      </section>

      <section className="relative bg-canopux-black">
        <MediaBleed
          label="ready-to-deploy products"
          alt="Students collaborating, Student Management System"
          src={featuredProduct.image}
          aspect="tall"
          overlay="heavy"
          showPlaceholderBadge={false}
          className="!h-auto !min-h-[85svh]"
        >
          <div className="container-page pt-32 pb-12 sm:pt-36 sm:pb-14">
            <SectionReveal>
              <p className="eyebrow">Products</p>
              <h2 className="section-title mt-3 max-w-xl sm:mt-4">
                <span className="block">Ready-to-deploy</span>
                <span className="block">systems, not blank pages.</span>
              </h2>
              <p className="section-lead max-w-[36ch] sm:max-w-measure">
                Prefer a proven package over starting from scratch? Explore
                white-label and ready-to-deploy products built for institutes,
                retailers, and operators.
              </p>
              <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-2">
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products#${product.slug}`}
                    className="border border-canopux-line bg-canopux-black/40 p-4 transition-opacity hover:opacity-80 sm:p-5"
                  >
                    <h3 className="font-display text-base font-semibold tracking-[-0.02em] sm:text-lg">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-body-sm text-canopux-silver sm:mt-3">
                      {product.tagline}
                    </p>
                  </Link>
                ))}
              </div>
              <Button href="/products" className="mt-8 w-full sm:mt-10 sm:w-auto">
                View all products
              </Button>
            </SectionReveal>
          </div>
        </MediaBleed>
        <SectionDivider />
      </section>

      <section className="bg-canopux-black">
        <div className="container-page pt-24 pb-10 sm:pt-32 sm:pb-12">
          <SectionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Services snapshot</p>
              <h2 className="section-title mt-4">
                <span className="block">Everything your</span>
                <span className="block">business needs to ship.</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {serviceCategories.map((category) => (
              <SectionReveal key={category.id}>
                <Link
                  href={`/services#${category.id}`}
                  className="group flex h-full min-h-[22rem] flex-col rounded-3xl bg-[#171717] p-7 transition-colors hover:bg-[#1c1c1c] sm:p-8"
                >
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-canopux-white sm:text-2xl">
                    {category.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-canopux-silver">
                    {category.intro}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {category.items.slice(0, 4).map((item) => (
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
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-canopux-silver">
                      Explore service
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold tracking-[-0.02em] text-canopux-white transition-opacity group-hover:opacity-80">
                      View details
                      <span aria-hidden className="ml-2">
                        →
                      </span>
                    </p>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-body-sm text-canopux-silver">
            Packages can be combined or tailored, from a single landing page to
            full operations systems.{" "}
            <Link
              href="/services"
              className="text-canopux-white underline-offset-4 hover:underline"
            >
              Full services list
            </Link>
          </p>
        </div>
        <SectionDivider />
      </section>

      <section className="surface-light">
        <div className="container-page pt-32 pb-10 sm:pt-36 sm:pb-12">
          <SectionReveal>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 className="section-title mt-3 sm:mt-4">
                  <span className="block">Work that</span>
                  <span className="block">speaks for itself.</span>
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.2em] text-canopux-signal underline-offset-4 hover:underline"
              >
                Browse portfolio
              </Link>
            </div>
          </SectionReveal>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {featuredWork.map((study) => (
              <SectionReveal key={study.slug}>
                <Link
                  href="/portfolio"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#171717] transition-colors hover:bg-[#1c1c1c]"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/10 to-transparent" />
                  </div>

                  <div className="flex items-center justify-between gap-3 px-5 py-4 sm:gap-4 sm:px-6 sm:py-5">
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-sans text-[14px] text-canopux-silver sm:text-[15px]">
                        {study.title}
                      </p>
                    </div>
                    <span className="inline-flex min-h-11 shrink-0 items-center pl-1 text-[14px] text-canopux-silver transition-colors group-hover:text-canopux-white sm:text-[15px]">
                      Explore
                      <span aria-hidden className="ml-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
        <SectionDivider tone="light" />
      </section>

      <section
        className="relative bg-canopux-black bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-image/quote comp.avif')" }}
      >
        <div className="absolute inset-0 bg-canopux-black/70" />
        <div className="container-page py-20 sm:py-32 lg:py-36 relative z-10">
          <SectionReveal>
            <figure className="mx-auto max-w-3xl text-center">
              <blockquote>
                <p className="font-display text-3xl font-semibold leading-[1.15] tracking-[-0.035em] text-canopux-white sm:text-4xl lg:text-5xl">
                  Technology should amplify the people running the business,
                  not bury them in complexity.
                </p>
              </blockquote>
              <figcaption className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-canopux-silver">
                Canopux
              </figcaption>
            </figure>
          </SectionReveal>
        </div>
        <SectionDivider />
      </section>

      <section className="surface-light">
        <div className="container-page pt-24 pb-16 sm:pt-32 sm:pb-20">
          <SectionReveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="eyebrow">From the blog</p>
                <h2 className="section-title mt-4 max-w-md">
                  <span className="block">Practical notes</span>
                  <span className="block">for digital growth.</span>
                </h2>
              </div>
              <Link
                href="/blog"
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-canopux-signal underline-offset-4 hover:underline"
              >
                Read the blog
              </Link>
            </div>
          </SectionReveal>
          <div className="mt-16 divide-y divide-canopux-black/10 border-y border-canopux-black/10">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block py-10 transition-opacity hover:opacity-70"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-canopux-black/45">
                  {post.publishedAt} · {post.readingTimeMinutes} min read
                </p>
                <h3 className="mt-3 max-w-3xl font-display text-2xl font-semibold tracking-[-0.03em] text-canopux-black sm:text-3xl">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-2xl text-body text-canopux-black/65">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
