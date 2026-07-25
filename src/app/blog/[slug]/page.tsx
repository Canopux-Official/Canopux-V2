import Link from "next/link";
import { notFound } from "next/navigation";
import {
  JsonLd,
  articleJsonLd,
  breadcrumbJsonLd,
} from "@/components/seo/JsonLd";
import { getAllPosts, getPostBySlug } from "@/content/blog";
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
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const shareUrl = absoluteUrl(`/blog/${post.slug}`);
  const shareText = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(shareUrl);

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
        })}
      />

      <article className="surface-light min-h-screen pt-24">
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
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-canopux-black sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-body text-canopux-black/65 sm:text-[1.0625rem]">
              {post.description}
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-canopux-black/45">
              {post.publishedAt} · {post.readingTimeMinutes} min read ·{" "}
              {siteConfig.name}
            </p>
          </header>

          <div className="mt-12 max-w-3xl space-y-6">
            {post.content.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-body leading-relaxed text-canopux-black/70 sm:text-[1.0625rem]"
              >
                {paragraph}
              </p>
            ))}
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
