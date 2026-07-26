import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/metadata";

type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const orgId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
const localBusinessId = `${siteConfig.url}/#localbusiness`;

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  };
}

function organizationRef() {
  return {
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icons/icon-512.png"),
      width: 512,
      height: 512,
    },
    image: absoluteUrl("/og-default.png"),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneE164,
    foundingDate: siteConfig.foundingDate,
    address: postalAddress(),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: siteConfig.phoneE164,
        email: siteConfig.email,
        areaServed: ["IN", "Worldwide"],
        availableLanguage: ["English", "Hindi"],
        url: siteConfig.whatsappUrl,
      },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.github,
    ],
    knowsAbout: [
      "Web development",
      "Mobile applications",
      "Artificial intelligence",
      "Business automation",
      "SEO and analytics",
      "Student management systems",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": orgId },
    copyrightHolder: { "@id": orgId },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": localBusinessId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    image: absoluteUrl("/og-default.png"),
    logo: absoluteUrl("/icons/icon-512.png"),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneE164,
    priceRange: "$$",
    foundingDate: siteConfig.foundingDate,
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.2961,
      longitude: 85.8245,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "AdministrativeArea",
        name: "Odisha",
      },
      "Worldwide",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.github,
    ],
    parentOrganization: { "@id": orgId },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceListJsonLd(
  services: Array<{
    name: string;
    description: string;
    path: string;
    serviceType?: string;
  }>,
) {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.serviceType ?? service.name,
    provider: organizationRef(),
    url: absoluteUrl(service.path),
    areaServed: ["India", "Worldwide"],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: siteConfig.whatsappUrl,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneE164,
        contactType: "sales",
      },
    },
  }));
}

export function productListJsonLd(
  products: Array<{
    name: string;
    description: string;
    path: string;
    image?: string;
    url?: string;
    applicationCategory?: string;
  }>,
) {
  return products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    applicationCategory:
      product.applicationCategory ?? "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl(product.path),
    image: product.image,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: product.url ?? absoluteUrl(product.path),
    },
    provider: organizationRef(),
    publisher: organizationRef(),
  }));
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
  image?: string;
  wordCount?: number;
}) {
  const pageUrl = absoluteUrl(input.path);
  const published = `${input.publishedAt}T00:00:00+05:30`;
  const modified = `${input.updatedAt ?? input.publishedAt}T00:00:00+05:30`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: input.title,
    description: input.description,
    datePublished: published,
    dateModified: modified,
    inLanguage: siteConfig.language,
    isAccessibleForFree: true,
    keywords: input.tags?.join(", "),
    wordCount: input.wordCount,
    image: [input.image ?? absoluteUrl("/og-default.png")],
    author: organizationRef(),
    publisher: {
      "@type": "Organization",
      "@id": orgId,
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icons/icon-512.png"),
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
    },
  };
}
