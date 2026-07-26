import { Button } from "@/components/ui/Button";
import { MediaBleed } from "@/components/ui/MediaBleed";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Canopux, WhatsApp, Email & Office",
  description:
    "Reach Canopux on WhatsApp, email, or phone. Headquartered in Bhubaneswar, Odisha. Average response time under 30 minutes.",
  path: "/contact",
  keywords: [
    "contact Canopux",
    "Canopux WhatsApp",
    "software company Bhubaneswar contact",
    "hello@canopux.org",
  ],
});

const channels = [
  {
    title: "WhatsApp",
    summary: "Fastest way to start a scoping conversation about your project.",
    value: siteConfig.phone,
    href: siteConfig.whatsappUrl,
    cta: "Chat on WhatsApp",
    external: true,
    primary: true,
  },
  {
    title: "Email",
    summary: "Share briefs, files, or longer notes and we will follow up.",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: "Send an email",
    external: false,
    primary: false,
  },
  {
    title: "Phone",
    summary: "Prefer a call? Reach us on the same number we use for WhatsApp.",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneE164}`,
    cta: "Call now",
    external: false,
    primary: false,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Canopux",
          url: `${siteConfig.url}/contact`,
          description:
            "Contact Canopux via WhatsApp, email, or phone from Bhubaneswar, India.",
          mainEntity: {
            "@type": "Organization",
            name: siteConfig.name,
            email: siteConfig.email,
            telephone: siteConfig.phoneE164,
            url: siteConfig.url,
          },
        }}
      />

      <section>
        <MediaBleed
          label="contact hero"
          alt="Dark space backdrop for the Canopux contact page"
          aspect="tall"
          kenBurns
          overlay="heavy"
          tone="dark"
        >
          <div className="container-page flex min-h-[100svh] flex-col justify-center pb-16 pt-28 sm:pb-20 sm:pt-28">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-5 max-w-2xl">
              <span className="block font-display text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.04em] text-canopux-white sm:text-5xl lg:text-6xl">
                Let&apos;s talk
              </span>
              <span className="mt-4 block max-w-xl text-base leading-relaxed text-canopux-silver sm:mt-5 sm:text-lg">
                about what you want to build next.
              </span>
            </h1>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={siteConfig.whatsappUrl}
                external
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
                <span aria-hidden className="text-base leading-none">
                  →
                </span>
              </Button>
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Email us
              </Button>
            </div>
          </div>
        </MediaBleed>
      </section>

      <section className="bg-canopux-black pb-20 pt-12 sm:pb-28 sm:pt-16 lg:pt-[18vh]">
        <div className="container-page">
          <SectionReveal>
            <p className="eyebrow">Reach us</p>
            <h2 className="section-title mt-4 max-w-2xl">
              <span className="block">Pick the channel</span>
              <span className="block">that fits you.</span>
            </h2>
            <p className="section-lead">
              {siteConfig.responseTime}. We are based in{" "}
              {siteConfig.office.location}.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {channels.map((channel) => (
              <SectionReveal key={channel.title}>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className={`group flex h-full min-h-[16rem] flex-col justify-between rounded-2xl p-6 transition-colors sm:p-7 ${
                    channel.primary
                      ? "bg-canopux-white text-canopux-black hover:bg-canopux-white/95"
                      : "bg-[#171717] text-canopux-white hover:bg-[#1c1c1c]"
                  }`}
                >
                  <div>
                    <p
                      className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                        channel.primary
                          ? "text-canopux-black/45"
                          : "text-canopux-silver"
                      }`}
                    >
                      {channel.title}
                    </p>
                    <p
                      className={`mt-4 font-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl ${
                        channel.primary
                          ? "text-canopux-black"
                          : "text-canopux-white"
                      }`}
                    >
                      {channel.value}
                    </p>
                    <p
                      className={`mt-3 text-[15px] leading-relaxed ${
                        channel.primary
                          ? "text-canopux-black/65"
                          : "text-canopux-silver"
                      }`}
                    >
                      {channel.summary}
                    </p>
                  </div>
                  <span
                    className={`mt-8 inline-flex min-h-11 items-center gap-1.5 text-[15px] transition-opacity group-hover:opacity-80 ${
                      channel.primary
                        ? "font-semibold text-canopux-black"
                        : "text-canopux-silver group-hover:text-canopux-white"
                    }`}
                  >
                    {channel.cta}
                    <span aria-hidden>→</span>
                  </span>
                </a>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 p-6 sm:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-canopux-silver">
                  {siteConfig.office.label}
                </p>
                <p className="mt-4 font-display text-xl font-semibold tracking-[-0.03em] text-canopux-white">
                  {siteConfig.address.addressLocality}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-canopux-silver">
                  {siteConfig.address.addressRegion},{" "}
                  {siteConfig.address.postalCode}
                  <br />
                  India · {siteConfig.office.timezone}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 p-6 sm:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-canopux-silver">
                  Response
                </p>
                <p className="mt-4 font-display text-xl font-semibold tracking-[-0.03em] text-canopux-white">
                  Under 30 minutes
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-canopux-silver">
                  Typical reply window during business hours. WhatsApp is
                  monitored first.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 p-6 sm:p-7 sm:col-span-2 lg:col-span-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-canopux-silver">
                  Social
                </p>
                <ul className="mt-5 space-y-3">
                  <li>
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-canopux-silver transition-colors hover:text-canopux-white"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-canopux-silver transition-colors hover:text-canopux-white"
                    >
                      X / Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-canopux-silver transition-colors hover:text-canopux-white"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
