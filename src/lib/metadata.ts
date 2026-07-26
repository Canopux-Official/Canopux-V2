import type { Metadata } from "next";
import { siteConfig } from "./site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImagePath?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
};

function toIsoDate(date: string): string {
  if (date.includes("T")) return date;
  return `${date}T00:00:00+05:30`;
}

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  ogImagePath = "/og-default.png",
  ogImageAlt,
  noIndex = false,
  absoluteTitle = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors = [siteConfig.name],
  section,
  tags,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(ogImagePath);
  const imageAlt = ogImageAlt ?? `${siteConfig.name}, ${title}`;
  const mergedKeywords = Array.from(
    new Set([...(keywords ?? []), ...(tags ?? [])]),
  );

  const openGraphBase = {
    title,
    description,
    url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    alternateLocale: [...siteConfig.alternateLocales],
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: imageAlt,
        type: "image/png",
      },
    ],
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: mergedKeywords.length ? mergedKeywords : undefined,
    applicationName: siteConfig.name,
    authors: authors.map((name) => ({ name })),
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: section,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        "en-IN": url,
        "x-default": url,
      },
    },
    openGraph:
      type === "article"
        ? {
            ...openGraphBase,
            type: "article",
            publishedTime: publishedTime
              ? toIsoDate(publishedTime)
              : undefined,
            modifiedTime: modifiedTime
              ? toIsoDate(modifiedTime)
              : publishedTime
                ? toIsoDate(publishedTime)
                : undefined,
            authors,
            section,
            tags,
          }
        : {
            ...openGraphBase,
            type: "website",
          },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: {
        url: ogImage,
        alt: imageAlt,
      },
      site: siteConfig.social.twitterHandle,
      creator: siteConfig.social.twitterHandle,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "geo.region": siteConfig.address.regionCode,
      "geo.placename": siteConfig.address.addressLocality,
    },
  };
}
