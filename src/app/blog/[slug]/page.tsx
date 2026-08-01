import Link from "next/link";
import { notFound } from "next/navigation";
import {
  JsonLd,
  articleJsonLd,
  breadcrumbJsonLd,
} from "@/components/seo/JsonLd";
import { getAllPosts, getPostBySlug, getPostPlainText } from "@/content/blog";
import { absoluteUrl, buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return buildMetadata({
      title: "Article not found",
      description: "The requested blog post could not be found.",
      path: `/blog/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
    tags: post.tags,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
    section: post.tags[0],
    authors: [siteConfig.name],
  });
}

function formatDisplayDate(isoDate: string) {
  return new Date(`${isoDate}T12:00:00+05:30`).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const shareUrl = absoluteUrl(`/blog/${post.slug}`);
  const shareText = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(shareUrl);
  const wordCount = getPostPlainText(post.content)
    .split(/\s+/)
    .filter(Boolean).length;
  const publishedIso = `${post.publishedAt}T00:00:00+05:30`;
  const modifiedIso = `${post.updatedAt ?? post.publishedAt}T00:00:00+05:30`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          tags: post.tags,
          wordCount,
        })}
      />

      <article
        className="surface-light min-h-screen pt-24"
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className="container-page py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-body-sm text-canopux-black/45">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
              <li>
                <Link href="/" className="hover:text-canopux-black">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/blog" className="hover:text-canopux-black">
                  Blog
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-canopux-black/70">{post.title}</li>
            </ol>
          </nav>

          <header className="mt-10 max-w-3xl border-b border-canopux-black/10 pb-12">
            <p className="eyebrow">Article</p>
            <h1
              className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-canopux-black sm:text-5xl lg:text-6xl"
              itemProp="headline"
            >
              {post.title}
            </h1>
            <p
              className="mt-6 text-body text-canopux-black/65 sm:text-[1.0625rem]"
              itemProp="description"
            >
              {post.description}
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-canopux-black/45">
              <time dateTime={publishedIso} itemProp="datePublished">
                {formatDisplayDate(post.publishedAt)}
              </time>
              {post.updatedAt ? (
                <>
                  {" · Updated "}
                  <time dateTime={modifiedIso} itemProp="dateModified">
                    {formatDisplayDate(post.updatedAt)}
                  </time>
                </>
              ) : (
                <meta itemProp="dateModified" content={modifiedIso} />
              )}
              {" · "}
              <span itemProp="timeRequired">{post.readingTimeMinutes} min read</span>
              {" · "}
              <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">{siteConfig.name}</span>
              </span>
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-canopux-black/45"
                >
                  <span itemProp="keywords">{tag}</span>
                </li>
              ))}
            </ul>
          </header>

          <div className="mt-12 max-w-3xl space-y-6" itemProp="articleBody">
            {post.content.map((block, index) => {
              if (typeof block === "string") {
                return (
                  <p
                    key={`p-${index}-${block.slice(0, 24)}`}
                    className="text-body leading-relaxed text-canopux-black/70 sm:text-[1.0625rem]"
                  >
                    {block}
                  </p>
                );
              }

              if ("heading" in block) {
                return (
                  <h2
                    key={`h-${index}-${block.heading}`}
                    className="!mt-12 font-display text-2xl font-semibold tracking-[-0.03em] text-canopux-black first:!mt-0 sm:text-3xl"
                  >
                    {block.heading}
                  </h2>
                );
              }

              return (
                <ul
                  key={`l-${index}-${block.list[0]?.slice(0, 16) ?? index}`}
                  className="space-y-2.5 pl-1"
                >
                  {block.list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-body leading-relaxed text-canopux-black/70 sm:text-[1.0625rem]"
                    >
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-canopux-black/40"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            })}
          </div>

          <footer className="mt-16 max-w-3xl border-t border-canopux-black/10 pt-10 pb-20">
            <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-canopux-black">
              Share this article
            </h2>
            <div className="mt-5 flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.16em]">
              <a
                className="text-canopux-black/55 transition-opacity hover:text-canopux-black"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="text-canopux-black/55 transition-opacity hover:text-canopux-black"
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                X / Twitter
              </a>
              <a
                className="text-canopux-black/55 transition-opacity hover:text-canopux-black"
                href={`mailto:?subject=${shareText}&body=${encodedUrl}`}
              >
                Email
              </a>
            </div>
            <Link
              href="/blog"
              className="mt-10 inline-flex font-mono text-[11px] uppercase tracking-[0.2em] text-canopux-signal underline-offset-4 hover:underline"
            >
              Back to blog
            </Link>
          </footer>
        </div>
      </article>
    </>
  );
}
