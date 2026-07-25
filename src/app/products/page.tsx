import { Button } from "@/components/ui/Button";
import { MediaBleed } from "@/components/ui/MediaBleed";
import { BuildNextCta } from "@/components/ui/BuildNextCta";
import { ProductsShowcase } from "@/components/products/ProductsShowcase";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { products } from "@/content/products";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Products — Ready-to-Deploy Digital Systems",
  description:
    "Canopux ready-to-deploy products for small businesses: Educational Management Suite, E-Commerce & Retail Hub, Business Operations CRM, and Identity Verification API.",
  path: "/products",
  keywords: [
    "student management system",
    "e-commerce platform",
    "CRM portal",
    "OTP verification API",
    "ready to deploy software",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />

      <section>
        <MediaBleed
          label="products hero"
          alt="Placeholder full-bleed hero for Canopux products"
          aspect="tall"
          kenBurns
          overlay="heavy"
          tone="dark"
        >
          <div className="container-page flex min-h-[85vh] flex-col justify-center pb-20 pt-28">
            <h1 className="max-w-2xl">
              <span className="block font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-canopux-white sm:text-5xl lg:text-6xl">
                Systems
              </span>
              <span className="mt-5 block max-w-xl text-base leading-relaxed text-canopux-silver sm:text-lg">
                for every growing team.
              </span>
            </h1>
            <div className="mt-8">
              <Button href={siteConfig.whatsappUrl} external>
                Talk about a fit
                <span aria-hidden className="text-base leading-none">
                  →
                </span>
              </Button>
            </div>
          </div>
        </MediaBleed>
      </section>

      <ProductsShowcase products={products} />

      <BuildNextCta />
    </>
  );
}
