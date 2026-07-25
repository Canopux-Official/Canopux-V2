export type TeamCapability = {
  area: string;
  capacity: string;
  description: string;
};

export type Milestone = {
  date: string;
  title: string;
  summary: string;
};

export const values = [
  {
    title: "Precision from first principles",
    description:
      "We break problems down to what actually matters for the business — then build only what creates leverage.",
  },
  {
    title: "No goal is too ambitious",
    description:
      "Small teams can ship serious systems. We push for outcomes that feel out of reach with generic tools.",
  },
  {
    title: "Move quickly and fix things",
    description:
      "Fast iteration without breaking trust. We ship, learn, and harden — so owners stay online while we improve.",
  },
] as const;

export const mission = {
  eyebrow: "Our mission",
  headlinePrimary: "Empower",
  headlineSecondary: "small businesses to grow.",
  body: "We build digital systems that create leverage — presence, products, automation, analytics, and AI designed so owners can move faster with clarity.",
} as const;

export const aboutIntro = {
  established: "EST. 2023",
  headline: "Digital systems that help small businesses grow.",
  body: "Canopux is a digital engineering firm. We help small businesses launch stronger digital presence, ship custom apps, measure growth, and automate operations — without drowning owners in technical jargon.",
} as const;

export const aboutHighlights = [
  {
    title: "Products",
    summary: "Ready-to-deploy systems for education, retail, CRM, and verification.",
    href: "/products",
    cta: "Explore products",
  },
  {
    title: "Services",
    summary: "Branding, web, apps, security, automation, growth, and AI — by category.",
    href: "/services",
    cta: "View services",
  },
  {
    title: "Work",
    summary: "Case studies across institutes, retail ops, events, and automotive.",
    href: "/portfolio",
    cta: "See our work",
  },
  {
    title: "Contact",
    summary: "Message us on WhatsApp to start a free scoping conversation.",
    href: "https://wa.me/918260783152",
    cta: "Chat on WhatsApp",
  },
] as const;

export const milestones: Milestone[] = [
  {
    date: "2023",
    title: "Canopux founded",
    summary:
      "Started in Bhubaneswar to help small businesses ship digital systems without enterprise overhead.",
  },
  {
    date: "2024",
    title: "Product packages take shape",
    summary:
      "Educational Suite, retail hub, CRM, and verification layers matured into ready-to-deploy offerings.",
  },
  {
    date: "2025",
    title: "Broader delivery stack",
    summary:
      "Expanded across branding, full-stack apps, analytics, automation, and practical AI integrations.",
  },
  {
    date: "2026",
    title: "Systems for growing teams",
    summary:
      "Focused on clearer packages and outcomes — so owners can choose a path and ship with confidence.",
  },
];

export const teamCapabilities: TeamCapability[] = [
  {
    area: "Full Stack",
    capacity: "8 Devs",
    description:
      "End-to-end product engineering for websites, portals, and customer-facing apps.",
  },
  {
    area: "AI / ML",
    capacity: "5 Engineers",
    description:
      "Practical AI integrations and custom models that fit real business workflows.",
  },
  {
    area: "App Developers",
    capacity: "6 Devs",
    description:
      "Cross-platform mobile experiences that keep customers engaged.",
  },
  {
    area: "Cloud / DevOps",
    capacity: "4 Engineers",
    description:
      "Deployment, domains, and infrastructure that stay stable as you grow.",
  },
  {
    area: "Cyber Security",
    capacity: "3 Engineers",
    description:
      "Authentication, access control, and security practices built into delivery.",
  },
];
