import { Button } from "@/components/ui/Button";
import { MediaBleed } from "@/components/ui/MediaBleed";
import { BuildNextCta } from "@/components/ui/BuildNextCta";
import { ProductsShowcase } from "@/components/products/ProductsShowcase";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { products } from "@/content/products";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Products, Ready-to-Deploy Digital Systems",
  description:
    "Canopux products: Student Management System and Auto Check vehicle verification.",
  path: "/products",
  keywords: [
    "student management system",
    "auto check vehicle verification",
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
          <div className="container-page flex min-h-[100svh] flex-col justify-center pb-16 pt-28 sm:pb-20 sm:pt-28">
            <p className="eyebrow">Our products</p>
            <h1 className="mt-5 max-w-2xl">
              <span className="block font-display text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.04em] text-canopux-white sm:text-5xl lg:text-6xl">
                Systems
              </span>
              <span className="mt-4 block max-w-xl text-base leading-relaxed text-canopux-silver sm:mt-5 sm:text-lg">
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
