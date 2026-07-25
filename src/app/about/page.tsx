import Link from "next/link";
import { MediaBleed } from "@/components/ui/MediaBleed";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getAllPosts } from "@/content/blog";
import {
  aboutHighlights,
  milestones,
  mission,
  teamCapabilities,
  values,
} from "@/content/team";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Canopux — Digital Partners for Small Business",
  description:
    "Canopux helps small businesses grow with digital presence, custom apps, analytics, automation, and AI. Founded in 2023 and headquartered in Bhubaneswar, India.",
  path: "/about",
  keywords: [
    "about Canopux",
    "small business digital partner",
    "Bhubaneswar software company",
  ],
});

function formatPostDate(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function AboutPage() {
  const latestPosts = getAllPosts().slice(0, 4);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      {/* Mission hero — leave space for page hero image */}
      <section>
        <MediaBleed
          label="about hero"
          alt="Placeholder full-bleed hero for Canopux about"
          aspect="tall"
          kenBurns
          overlay="heavy"
          tone="dark"
        >
          <div className="container-page flex min-h-[85vh] flex-col justify-center pb-20 pt-28">
            <p className="eyebrow">{mission.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              <span className="block text-canopux-white">
                {mission.headlinePrimary}
              </span>
              <span className="block text-canopux-silver">
                {mission.headlineSecondary}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-canopux-silver/80 sm:text-lg">
              {mission.body}
            </p>
          </div>
        </MediaBleed>
      </section>

      {/* Highlight cards — x.ai company style */}
      <section className="bg-canopux-black py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {aboutHighlights.map((item) => {
              const external = item.href.startsWith("http");
              const cardClass =
                "group flex h-full min-h-[14rem] flex-col justify-between rounded-2xl bg-[#171717] p-6 transition-colors hover:bg-[#1c1c1c] sm:p-7";
              const content = (
                <>
                  <div>
                    <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-canopux-white">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-canopux-silver">
                      {item.summary}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-[15px] text-canopux-silver transition-colors group-hover:text-canopux-white">
                    {item.cta}
                    <span aria-hidden>→</span>
                  </span>
                </>
              );

              return (
                <SectionReveal key={item.title}>
                  {external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link href={item.href} className={cardClass}>
                      {content}
                    </Link>
                  )}
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* At our core */}
      <section className="bg-canopux-black pb-24 sm:pb-32">
        <div className="container-page">
          <SectionReveal>
            <p className="eyebrow">At our core</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.035em] text-canopux-white sm:text-4xl lg:text-5xl">
              A focused team connected by curiosity and delivery.
            </h2>
          </SectionReveal>

          <div className="mt-14 grid gap-10 border-t border-canopux-line pt-14 md:grid-cols-3 md:gap-8">
            {values.map((value, index) => (
              <SectionReveal key={value.title}>
                <article>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-canopux-silver">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em] text-canopux-white sm:text-2xl">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-body leading-relaxed text-canopux-silver">
                    {value.description}
                  </p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="border-y border-canopux-line bg-canopux-black py-24 sm:py-32">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionReveal>
            <p className="eyebrow">Offices</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-[-0.035em] text-canopux-white sm:text-4xl lg:text-5xl">
              <span className="block">Built for collaboration.</span>
            </h2>
            <p className="mt-5 max-w-lg text-body leading-relaxed text-canopux-silver">
              We work closely with founders and operators — prioritizing clear
              communication and fast feedback loops on every project.
            </p>
          </SectionReveal>

          <SectionReveal>
            <div className="rounded-2xl border border-canopux-line bg-[#171717] p-7 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-canopux-silver">
                Headquarters
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-canopux-white">
                Bhubaneswar
              </h3>
              <p className="mt-3 text-body text-canopux-silver">
                {siteConfig.office.location}
              </p>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-[15px] text-canopux-silver transition-colors hover:text-canopux-white"
              >
                {siteConfig.phone}
                <span aria-hidden>→</span>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Path of progress */}
      <section className="bg-canopux-black py-24 sm:py-32">
        <div className="container-page">
          <SectionReveal>
            <p className="eyebrow">Our path of progress</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-[-0.035em] text-canopux-white sm:text-4xl">
              From founding to systems that ship.
            </h2>
          </SectionReveal>

          <ol className="mt-14 space-y-0 border-t border-canopux-line">
            {milestones.map((item) => (
              <li
                key={item.title}
                className="grid gap-3 border-b border-canopux-line py-8 sm:grid-cols-[7rem_1fr] sm:gap-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-canopux-silver">
                  {item.date}
                </p>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-canopux-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-body text-canopux-silver">
                    {item.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Capacity + CTA */}
      <section className="border-t border-canopux-line bg-canopux-black pb-24 pt-20 sm:pb-32">
        <div className="container-page">
          <SectionReveal>
            <p className="eyebrow">Team expertise</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.035em] text-canopux-white sm:text-4xl">
              Capacity behind the delivery.
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {teamCapabilities.map((member) => (
              <article
                key={member.area}
                className="rounded-2xl bg-[#171717] p-6 sm:p-7"
              >
                <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-canopux-white">
                  {member.capacity}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-[-0.02em] text-canopux-white">
                  {member.area}
                </h3>
                <p className="mt-3 text-body-sm text-canopux-silver">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest news — single row like x.ai company */}
      <section className="border-t border-canopux-line bg-canopux-black py-24 sm:py-32">
        <div className="container-page">
          <SectionReveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-display text-3xl font-semibold tracking-[-0.035em] text-canopux-white sm:text-4xl">
                Latest blogs
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-[15px] text-canopux-silver transition-colors hover:text-canopux-white"
              >
                View all
                <span aria-hidden>→</span>
              </Link>
            </div>
          </SectionReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex min-h-[11rem] flex-col justify-between rounded-2xl bg-[#171717] p-6 transition-colors hover:bg-[#1c1c1c] sm:p-7"
              >
                <h3 className="font-display text-lg font-semibold tracking-[-0.03em] text-canopux-white transition-opacity group-hover:opacity-90 sm:text-xl">
                  {post.title}
                </h3>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-canopux-silver">
                  {formatPostDate(post.publishedAt)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
