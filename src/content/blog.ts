export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  tags: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-a-web-stack-that-stays-maintainable",
    title: "Choosing a web stack that stays maintainable after launch",
    description:
      "A practical way to evaluate frontend and backend choices based on team skills, SEO needs, and long-term ownership — not trend cycles.",
    publishedAt: "2026-03-12",
    readingTimeMinutes: 7,
    tags: ["Web Development", "Architecture"],
    content: [
      "Launching a web product is easier than keeping it healthy. The stack you pick on day one becomes the default constraint for hiring, SEO work, incident response, and feature speed for years.",
      "Start with the product surfaces you must support. A marketing site with strong SEO needs different priorities than a logged-in application with complex permissions. Many companies need both. Treating them as one undifferentiated codebase often creates compromise architectures that serve neither well.",
      "Favor frameworks with clear upgrade paths and an active ecosystem. Next.js and similar full-stack React frameworks earn their place when you need server rendering, metadata control, and a single deployment model. They are not mandatory for every product, but they reduce the number of moving parts when content, application UI, and APIs share a team.",
      "Separate what must be fast to change from what must be stable. Design tokens, content models, and component APIs should be intentional. One-off page implementations can move quickly; shared primitives should move carefully.",
      "Finally, measure what matters after launch: Core Web Vitals, error rates, and time-to-ship for a typical feature. A maintainable stack is one your team can operate calmly — not just the one that looked modern in a comparison table.",
    ],
  },
  {
    slug: "when-to-add-ai-features-to-an-existing-product",
    title: "When to add AI features to an existing product",
    description:
      "How to decide whether an AI capability belongs in your product now, what to prototype first, and how to avoid shipping a demo that users cannot trust.",
    publishedAt: "2026-04-02",
    readingTimeMinutes: 8,
    tags: ["AI", "Product"],
    content: [
      "AI features fail quietly when they solve a slide-deck problem instead of a user problem. Before choosing a model, name the job: draft faster, retrieve policy answers, classify tickets, summarize long records, or suggest next actions.",
      "A useful first filter is whether the task already has a human workflow with known inputs and an acceptable error cost. If wrong answers create legal, medical, or financial risk, you need stronger guardrails, human review, or a narrower scope. If wrong answers are easy to spot and correct, you can iterate more openly.",
      "Prototype with retrieval and evaluation before polish. Ground responses in documents your organization already trusts. Log prompts, sources, and outcomes so you can compare versions. Without evaluation, you cannot tell whether a newer model is actually better for your users.",
      "Integrate where attention already exists. An assistant buried on a separate page gets ignored. An assistive control beside the form, inbox, or editor where work happens gets used — and generates the feedback you need.",
      "Ship with cost and latency budgets. AI features that feel magical in a demo and sluggish in production lose trust quickly. Set response-time targets and fallbacks so the product remains usable when the model path is slow or unavailable.",
    ],
  },
  {
    slug: "cloud-foundations-before-you-scale-the-team",
    title: "Cloud foundations to put in place before you scale the team",
    description:
      "Environment parity, deployment automation, and observability basics that prevent delivery from slowing down as more engineers join.",
    publishedAt: "2026-05-18",
    readingTimeMinutes: 6,
    tags: ["Cloud", "DevOps"],
    content: [
      "Early-stage teams often deploy from a laptop into a single environment that doubles as production. That works until a second engineer joins, a Friday hotfix collides with a feature branch, or nobody can explain which configuration is live.",
      "Create environment parity early: local, staging, and production should differ by secrets and scale — not by undocumented special cases. Infrastructure as code makes that parity reviewable. If creating an environment requires tribal knowledge, onboarding will stay expensive.",
      "Automate the path from merge to release. Continuous integration should run the checks humans forget under pressure: tests, linting, type checks, and basic security scans. Continuous delivery should make rollback boring.",
      "Add observability before you think you need it. Structured logs, basic metrics, and error tracking turn incidents into learning instead of archaeology. You do not need a perfect dashboard on day one; you need enough signal to answer what changed and who is affected.",
      "Treat access control as part of delivery. Shared root credentials and unbounded cloud permissions become harder to unwind later. Least-privilege roles and audited access are easier to introduce while the team is still small.",
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function paginatePosts(page: number, pageSize = 6) {
  const sorted = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * pageSize;

  return {
    posts: sorted.slice(start, start + pageSize),
    currentPage,
    totalPages,
    totalPosts: sorted.length,
  };
}
