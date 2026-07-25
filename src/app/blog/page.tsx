import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MediaBleed } from "@/components/ui/MediaBleed";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { paginatePosts } from "@/content/blog";
import { buildMetadata } from "@/lib/metadata";

type BlogIndexProps = {
  searchParams: { page?: string };
};

export const metadata = buildMetadata({
  title: "Blog — Web, App & AI Delivery Notes",
  description:
    "Practical articles from Canopux on maintainable web stacks, AI feature adoption, and cloud foundations for growing product teams.",
  path: "/blog",
  keywords: ["software engineering blog", "web development", "AI product", "DevOps"],
});

export default function BlogIndexPage({ searchParams }: BlogIndexProps) {
  const requestedPage = Number.parseInt(searchParams.page ?? "1", 10);
  const { posts, currentPage, totalPages } = paginatePosts(
    Number.isFinite(requestedPage) ? requestedPage : 1,
    6,
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <section>
        <MediaBleed
          label="blog hero environment"
          alt="Placeholder full-bleed media for Canopux blog"
          aspect="tall"
          kenBurns
          overlay="heavy"
          tone="dark"
        >
          <div className="container-page flex min-h-[100svh] flex-col justify-center pb-20 pt-28">
            <h1 className="max-w-2xl">
              <span className="block font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-canopux-white sm:text-5xl lg:text-6xl">
                Insights
              </span>
              <span className="mt-5 block max-w-xl text-base leading-relaxed text-canopux-silver sm:text-lg">
                for curious builders.
              </span>
            </h1>
          </div>
        </MediaBleed>
      </section>

      <section className="surface-light">
        <div className="container-page pb-16 pt-[18vh] sm:pb-24">
          <div className="divide-y divide-canopux-black/10 border-y border-canopux-black/10">
            {posts.map((post) => (
              <article key={post.slug} className="py-10 sm:py-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-canopux-black/45">
                  {post.publishedAt} · {post.readingTimeMinutes} min read
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-2xl font-semibold tracking-[-0.03em] text-canopux-black sm:text-3xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-opacity hover:opacity-70"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-2xl text-body text-canopux-black/65">
                  {post.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-[0.16em] text-canopux-black/45"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.2em] text-canopux-signal underline-offset-4 hover:underline"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <nav
              aria-label="Blog pagination"
              className="mt-14 flex items-center justify-center gap-4"
            >
              <Button
                href={currentPage > 1 ? `/blog?page=${currentPage - 1}` : "/blog"}
                variant="secondary"
                className={`!border-canopux-black !text-canopux-black hover:!bg-canopux-black hover:!text-canopux-white ${
                  currentPage === 1 ? "pointer-events-none opacity-40" : ""
                }`}
              >
                Previous
              </Button>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-canopux-black/50">
                Page {currentPage} of {totalPages}
              </p>
              <Button
                href={
                  currentPage < totalPages
                    ? `/blog?page=${currentPage + 1}`
                    : `/blog?page=${totalPages}`
                }
                variant="secondary"
                className={`!border-canopux-black !text-canopux-black hover:!bg-canopux-black hover:!text-canopux-white ${
                  currentPage === totalPages ? "pointer-events-none opacity-40" : ""
                }`}
              >
                Next
              </Button>
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
