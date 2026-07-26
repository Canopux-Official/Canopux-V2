import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Page not found",
  description: `The page you requested does not exist on ${siteConfig.name}. Explore services, products, work, or contact us on WhatsApp.`,
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-canopux-black">
      <div className="container-page py-24">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-[-0.04em] text-canopux-white sm:text-5xl">
          This page is off the map.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-canopux-silver sm:text-lg">
          The URL may be mistyped or the page may have moved. Head back home or
          browse our main destinations.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/">Back home</Button>
          <Button href="/services" variant="secondary">
            Services
          </Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.16em] text-canopux-silver">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-opacity hover:text-canopux-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
