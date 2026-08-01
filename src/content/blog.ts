export type BlogContentBlock =
  | string
  | { heading: string }
  | { list: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  tags: string[];
  content: BlogContentBlock[];
};

export function getPostPlainText(content: BlogContentBlock[]): string {
  return content
    .map((block) => {
      if (typeof block === "string") return block;
      if ("heading" in block) return block.heading;
      return block.list.join(" ");
    })
    .join(" ");
}

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-a-web-stack-that-stays-maintainable",
    title: "Choosing a web stack that stays maintainable after launch",
    description:
      "A practical way to evaluate frontend and backend choices based on team skills, SEO needs, and long-term ownership, not trend cycles.",
    publishedAt: "2026-03-12",
    readingTimeMinutes: 7,
    tags: ["Web Development", "Architecture"],
    content: [
      "Launching a web product is easier than keeping it healthy. The stack you pick on day one becomes the default constraint for hiring, SEO work, incident response, and feature speed for years.",
      "Start with the product surfaces you must support. A marketing site with strong SEO needs different priorities than a logged-in application with complex permissions. Many companies need both. Treating them as one undifferentiated codebase often creates compromise architectures that serve neither well.",
      "Favor frameworks with clear upgrade paths and an active ecosystem. Next.js and similar full-stack React frameworks earn their place when you need server rendering, metadata control, and a single deployment model. They are not mandatory for every product, but they reduce the number of moving parts when content, application UI, and APIs share a team.",
      "Separate what must be fast to change from what must be stable. Design tokens, content models, and component APIs should be intentional. One-off page implementations can move quickly; shared primitives should move carefully.",
      "Finally, measure what matters after launch: Core Web Vitals, error rates, and time-to-ship for a typical feature. A maintainable stack is one your team can operate calmly, not just the one that looked modern in a comparison table.",
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
      "Integrate where attention already exists. An assistant buried on a separate page gets ignored. An assistive control beside the form, inbox, or editor where work happens gets used, and generates the feedback you need.",
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
      "Create environment parity early: local, staging, and production should differ by secrets and scale, not by undocumented special cases. Infrastructure as code makes that parity reviewable. If creating an environment requires tribal knowledge, onboarding will stay expensive.",
      "Automate the path from merge to release. Continuous integration should run the checks humans forget under pressure: tests, linting, type checks, and basic security scans. Continuous delivery should make rollback boring.",
      "Add observability before you think you need it. Structured logs, basic metrics, and error tracking turn incidents into learning instead of archaeology. You do not need a perfect dashboard on day one; you need enough signal to answer what changed and who is affected.",
      "Treat access control as part of delivery. Shared root credentials and unbounded cloud permissions become harder to unwind later. Least-privilege roles and audited access are easier to introduce while the team is still small.",
    ],
  },
  {
    slug: "what-small-businesses-actually-need-from-a-website",
    title: "What small businesses actually need from a website in 2026",
    description:
      "A clear checklist for founders: trust signals, conversion paths, mobile speed, and SEO basics that matter more than decorative redesigns.",
    publishedAt: "2026-06-04",
    readingTimeMinutes: 6,
    tags: ["Small Business", "Web Development"],
    content: [
      "Many small-business websites fail for ordinary reasons: visitors cannot tell what you sell, how to contact you, or why they should trust you. Before adding animations or a new color system, fix clarity.",
      "Lead with one primary action. Book a call, request a quote, order, or message on WhatsApp. Secondary links can exist, but competing CTAs dilute attention. Place the primary action above the fold and again near the end of each key page.",
      "Make proof easy to scan. Show real work, named clients when permitted, locations you serve, and response expectations. Vague claims do less work than a short case outcome or a clear service list.",
      "Treat mobile as the default experience. Most local and service inquiries start on a phone. Large tap targets, readable type, compressed images, and fast load times are conversion features, not polish.",
      "Instrument the basics. Connect Search Console and analytics so you know which pages attract visits and which forms convert. A site you cannot measure becomes expensive guesswork after launch.",
    ],
  },
  {
    slug: "seo-and-ga4-setup-that-pays-off-in-90-days",
    title: "SEO and GA4 setup that pays off in the first 90 days",
    description:
      "Technical SEO foundations, conversion tracking, and reporting habits that help small teams stop guessing about growth.",
    publishedAt: "2026-06-20",
    readingTimeMinutes: 7,
    tags: ["SEO", "Analytics"],
    content: [
      "SEO and analytics only help when they are connected to decisions. In the first 90 days, aim for a clean crawlable site, accurate conversion events, and a short weekly review ritual.",
      "Start with technical hygiene: unique titles and descriptions, sensible heading structure, XML sitemap, robots rules, and fast Core Web Vitals. Fix broken links and thin pages before publishing more content.",
      "Map conversions to real business outcomes. Form submits, WhatsApp clicks, calls, and checkout starts matter more than vanity pageviews. Configure GA4 events so marketing and sales discuss the same numbers.",
      "Publish content that matches search intent you can serve. Local service pages, product explainers, and comparison articles work when they answer the questions your buyers already ask on calls.",
      "Review weekly, not obsessively. Look at landing pages, organic queries, and conversion rates. Change one thing at a time so you can tell what moved the needle.",
    ],
  },
  {
    slug: "building-mobile-apps-without-overbuilding",
    title: "Building mobile apps without overbuilding the first release",
    description:
      "How to choose between PWA, cross-platform, and native approaches, and how to keep v1 focused on the workflows users repeat daily.",
    publishedAt: "2026-07-03",
    readingTimeMinutes: 7,
    tags: ["Mobile", "Product"],
    content: [
      "The first version of an app should earn daily use, not demonstrate every capability on a roadmap. Overbuilt releases delay learning and create maintenance costs before product-market fit is clear.",
      "Choose the delivery model from constraints. A PWA can be enough when installability, offline basics, and web distribution are acceptable. Cross-platform frameworks help when one team must ship iOS and Android with shared UI. Native is justified when platform depth or performance is the product.",
      "Define the three workflows users will repeat. Login, the core job, and a clear success state. Everything else is secondary until those paths are reliable on real devices and networks.",
      "Plan for admin and operations from day one. Many apps fail because staff tools are an afterthought. Roles, audit trails, and content updates keep the product usable after launch.",
      "Ship with crash reporting, analytics, and a feedback channel. Mobile quality issues are expensive when discovered only through store reviews. Instrument early so you can prioritize fixes with evidence.",
    ],
  },
  {
    slug: "automation-that-saves-hours-for-operations-teams",
    title: "Automation that actually saves hours for operations teams",
    description:
      "Practical places to automate notifications, follow-ups, and handoffs without creating brittle workflows nobody trusts.",
    publishedAt: "2026-07-14",
    readingTimeMinutes: 6,
    tags: ["Automation", "AI"],
    content: [
      "Useful automation removes repetitive coordination work: status updates, reminders, lead routing, invoice follow-ups, and document handoffs. It should make people faster, not force them to babysit fragile scripts.",
      "Begin with a process map. Write the trigger, the decision points, and the exception cases. If the happy path is unclear on paper, automation will amplify confusion.",
      "Prefer systems of record over inbox gymnastics. When your CRM, helpdesk, or operations database is the source of truth, notifications and WhatsApp alerts can stay accurate. Automating around email threads alone usually decays.",
      "Keep humans in the loop where judgment matters. Auto-draft a reply, queue an approval, or suggest a next step. Fully silent automation is fine for low-risk chores; customer-facing messages need review until quality is proven.",
      "Measure hours saved and error rates. If a workflow requires constant manual overrides, simplify the rules or pause the automation. The goal is calm operations, not a dashboard full of failed jobs.",
    ],
  },
  {
    slug: "ecommerce-foundations-for-regional-retailers",
    title: "E-commerce foundations for regional retailers in India",
    description:
      "Catalogue structure, enquiry-to-order flow, payments, and logistics messaging that help local retailers sell online without enterprise complexity.",
    publishedAt: "2026-07-28",
    readingTimeMinutes: 7,
    tags: ["E-commerce", "Small Business"],
    content: [
      "Regional retailers do not need a marketplace clone to sell online. They need a trustworthy catalogue, clear pricing or enquiry paths, and a smooth way for buyers to complete the next step on mobile.",
      "Structure products the way customers shop: category, use case, and specifications that matter for purchase. Thin product pages with only a name and photo create support load and abandoned carts.",
      "Decide early between checkout and assisted sales. Some categories convert better with WhatsApp or call-back quoting. Others need prepaid checkout. Match the flow to how your buyers already purchase offline.",
      "Be explicit about delivery, lead times, and service areas. Ambiguity around shipping is one of the fastest ways to lose trust with first-time online buyers.",
      "Connect inventory and order status to reality. Even a lightweight admin that updates stock and order stage prevents overselling and reduces the back-and-forth that eats staff time.",
    ],
  },
  {
    slug: "ready-to-deploy-software-vs-custom-builds",
    title: "Ready-to-deploy software vs custom builds: how to choose",
    description:
      "A decision frame for institutes and operators choosing between white-label systems and fully custom product engineering.",
    publishedAt: "2026-08-01",
    readingTimeMinutes: 6,
    tags: ["Products", "Strategy"],
    content: [
      "Custom software is powerful when your process is a competitive advantage. Ready-to-deploy systems are powerful when speed, proven workflows, and lower ownership cost matter more than unique mechanics.",
      "Ask whether your requirements are mostly standard. Student management, vehicle checks, basic CRM, and catalogue commerce often share patterns across organizations. Buying or deploying a package can get you live in weeks instead of months.",
      "Choose custom when integrations, permissions, or domain rules are unusual enough that configuring a package would become a permanent workaround. Also choose custom when the product itself is what you sell.",
      "Hybrid paths are common. Start with a ready system for the core job, then extend with integrations, branding, and reporting that fit your operation. Avoid rewriting working modules just for control.",
      "Evaluate total cost of ownership: implementation, training, hosting, support, and change requests. The cheapest build quote is rarely the cheapest year of operation.",
    ],
  },
  {
    slug: "priyaanshii-tasteworks-digital-presence",
    title:
      "From Vision to Reality: How Canopux Built the Digital Presence for Priyaanshii Tasteworks",
    description:
      "How Canopux planned, designed, and engineered a performance-first website for Priyaanshii Tasteworks, from brand discovery and UX to SEO, QA, and launch.",
    publishedAt: "2026-08-01",
    readingTimeMinutes: 9,
    tags: ["Case Study", "Web Development", "Hospitality"],
    content: [
      "Running a food business today is about more than serving exceptional products, it is about creating a digital experience that reflects the quality, trust, and professionalism of the brand. Every visitor who lands on a website forms an impression within seconds, making a strong online presence as important as the product itself.",
      "At Canopux, we believe that every business deserves a website that tells its story with clarity and confidence. Priyaanshii Tasteworks became one such journey where our team transformed an idea into a complete digital experience, carefully crafted from the ground up.",
      { heading: "Understanding the Brand" },
      "Before writing a single line of code or designing the first screen, our team focused on understanding the business itself.",
      "Priyaanshii Tasteworks is built around quality, authenticity, and trust. These values needed to be reflected in every aspect of the website.",
      "Instead of beginning with design, we started with questions:",
      {
        list: [
          "Who is the target audience?",
          "What products will customers explore first?",
          "What should visitors feel when they open the website?",
          "How can we simplify the customer journey?",
        ],
      },
      "Every successful website begins with understanding people, not technology.",
      { heading: "Research & Planning" },
      "Once the business goals were clear, our developers and designers moved into the planning stage.",
      "We created:",
      {
        list: [
          "Website architecture",
          "User flow diagrams",
          "Navigation structure",
          "Content hierarchy",
          "SEO strategy",
          "Mobile-first layouts",
        ],
      },
      "Rather than simply creating pages, we designed an experience where every click naturally leads users toward discovering the brand.",
      { heading: "Designing the User Experience" },
      "Food websites need to feel fresh, inviting, and premium.",
      "Our design team focused on:",
      {
        list: [
          "Clean typography",
          "Spacious layouts",
          "Warm and elegant color palette",
          "High-quality product presentation",
          "Easy navigation",
          "Fast interaction",
        ],
      },
      "The objective wasn't to overload visitors with animations or unnecessary effects.",
      "Instead, every design decision was made to enhance readability and encourage users to explore further.",
      { heading: "Building Everything From Scratch" },
      "After finalizing the designs, our development team began building the website from the ground up.",
      "Every section was carefully handcrafted by our developers to ensure performance, scalability, and maintainability.",
      "The development process included:",
      {
        list: [
          "Responsive layouts",
          "Component-based architecture",
          "Optimized loading performance",
          "Interactive UI elements",
          "Smooth animations",
          "Clean code structure",
          "Cross-browser compatibility",
        ],
      },
      "Every pixel was implemented with attention to detail.",
      { heading: "Performance First" },
      "A beautiful website means little if it loads slowly.",
      "Performance optimization was integrated throughout development rather than added at the end.",
      "Our developers optimized:",
      {
        list: [
          "Image loading",
          "Code splitting",
          "Lazy loading",
          "Asset compression",
          "Rendering performance",
          "Responsive media delivery",
        ],
      },
      "The result is a website that feels fast across desktops, tablets, and mobile devices.",
      { heading: "Mobile Experience" },
      "Today, the majority of visitors access websites through smartphones.",
      "Because of this, every page was designed and developed with mobile users in mind.",
      "The mobile experience offers:",
      {
        list: [
          "Touch-friendly navigation",
          "Responsive layouts",
          "Readable typography",
          "Optimized images",
          "Smooth scrolling",
          "Fast loading",
        ],
      },
      "Whether someone visits from a desktop or a mobile device, the experience remains consistent.",
      { heading: "Search Engine Optimization" },
      "Visibility matters just as much as appearance.",
      "Our SEO strategy included:",
      {
        list: [
          "Semantic HTML",
          "Proper heading hierarchy",
          "Optimized metadata",
          "Search-friendly URLs",
          "Image optimization",
          "Accessibility improvements",
          "Structured page organization",
        ],
      },
      "These practices help search engines understand the website while improving user experience.",
      { heading: "Quality Assurance" },
      "Before deployment, the website underwent extensive testing.",
      "Our QA process covered:",
      {
        list: [
          "Mobile responsiveness",
          "Browser compatibility",
          "Performance testing",
          "Accessibility checks",
          "Navigation testing",
          "Content verification",
          "Bug fixing",
        ],
      },
      "Only after passing every checkpoint was the website considered ready for launch.",
      { heading: "Deployment & Launch" },
      "Launching a website involves much more than publishing files.",
      "Our deployment process included:",
      {
        list: [
          "Production build optimization",
          "Hosting configuration",
          "Domain setup",
          "Security verification",
          "Performance monitoring",
          "Final testing",
        ],
      },
      "The launch was planned to ensure visitors experienced a smooth and reliable website from day one.",
      { heading: "Beyond Launch" },
      "A website is not the finish line, it is the beginning of a digital journey.",
      "After deployment, our focus remains on:",
      {
        list: [
          "Continuous improvements",
          "Performance monitoring",
          "Feature enhancements",
          "Security updates",
          "Content optimization",
          "Long-term scalability",
        ],
      },
      "Our goal is to ensure the platform grows alongside the business.",
      { heading: "What This Project Represents" },
      "The Priyaanshii Tasteworks website reflects what Canopux stands for.",
      "It demonstrates our belief that great digital products are created through thoughtful planning, purposeful design, and quality engineering, not shortcuts.",
      "From the first brainstorming session to the final deployment, every stage of the project was handled by our in-house team of designers and developers with a commitment to delivering a modern, scalable, and high-performance web experience.",
      { heading: "Why Businesses Choose Canopux" },
      "At Canopux, we don't just develop websites, we create digital experiences that help businesses grow.",
      "Our development philosophy focuses on:",
      {
        list: [
          "User-first design",
          "Performance optimization",
          "Responsive development",
          "Scalable architecture",
          "SEO-friendly implementation",
          "Modern technologies",
          "Clean development practices",
          "Long-term maintainability",
        ],
      },
      "Every project is approached with the same level of dedication, whether it's a startup launching its first website or an established business expanding its digital presence.",
      { heading: "Final Thoughts" },
      "Every successful website begins with a vision. Turning that vision into a polished, high-performing digital product requires careful planning, creativity, technical expertise, and countless hours of development.",
      "The Priyaanshii Tasteworks project is a reflection of our commitment to building digital solutions that are not only visually engaging but also engineered for performance, usability, and long-term growth.",
      "As we continue building products for businesses across industries, our mission remains the same, to craft digital experiences that leave a lasting impression.",
      "If you're looking to transform your business with a professionally built website, the team at Canopux is ready to help bring your vision to life.",
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
