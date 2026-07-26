export type ServiceItem = {
  title: string;
  description: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  intro: string;
  items: ServiceItem[];
  image: string;
  imageAlt: string;
};

/** Service catalog positioned for small-business buyers. */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "branding-digital-design",
    title: "Branding & Digital Design",
    intro:
      "Build a cohesive look and feel across every customer touchpoint, from logo to social assets and print.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b7993143456?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Creative branding workspace with color swatches",
    items: [
      {
        title: "Brand Identity",
        description:
          "Custom logo design and cohesive visual branding that helps small businesses stand out with clarity.",
      },
      {
        title: "Digital & Print Assets",
        description:
          "Canva-based design for social media, plus business documentation such as brochures and digital menu cards.",
      },
    ],
  },
  {
    id: "web-mobile-development",
    title: "Web & Mobile Development",
    intro:
      "Ship customer-facing experiences that convert, websites, stores, apps, and the infrastructure behind them.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Laptop showing a modern website analytics interface",
    items: [
      {
        title: "Custom Website Creation",
        description:
          "High-conversion landing pages and interactive online product showcases built for clarity and speed.",
      },
      {
        title: "E-Commerce Development",
        description:
          "End-to-end online stores tailored for small retail and digital businesses.",
      },
      {
        title: "App Development",
        description:
          "Cross-platform mobile applications to engage customers on the go.",
      },
      {
        title: "Infrastructure Setup",
        description:
          "End-to-end deployment and custom domain mapping so launches stay reliable.",
      },
    ],
  },
  {
    id: "backend-systems-security",
    title: "Backend Systems & Security",
    intro:
      "Protect customer data and staff access with secure architecture, roles, and modern authentication.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Secure server room representing backend infrastructure",
    items: [
      {
        title: "Database & Architecture",
        description:
          "Secure, high-scale database management designed for growing business workloads.",
      },
      {
        title: "Access Control",
        description:
          "Granular role-based access for staff and management across admin portals.",
      },
      {
        title: "Authentication & Security",
        description:
          "Google Sign-in integration, OTP verification, and Captcha protection for safer onboarding.",
      },
    ],
  },
  {
    id: "integrations-automation",
    title: "Integrations & Automation",
    intro:
      "Connect the tools your team already uses and remove repetitive work from daily operations.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Network cables and systems representing integrations",
    items: [
      {
        title: "Omnichannel Communication",
        description:
          "WhatsApp, Facebook, and Instagram integrations that keep conversations in one flow.",
      },
      {
        title: "Workflow Automation",
        description:
          "Automatic email generation and real-time push notifications that keep customers informed.",
      },
      {
        title: "Third-Party API Integrations",
        description:
          "Payment gateways, live data syncs, and external software connections for your stack.",
      },
    ],
  },
  {
    id: "marketing-analytics-growth",
    title: "Marketing Analytics & Growth",
    intro:
      "Know what is working. Improve visibility, track campaigns, and grow leads with clear measurement.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Marketing analytics charts and growth metrics",
    items: [
      {
        title: "Search Engine Optimization (SEO)",
        description:
          "Boost organic visibility with technical foundations and content that search engines can understand.",
      },
      {
        title: "Analytics & Tracking",
        description:
          "Advanced GA4 integration and UTM parameter tracking for campaign clarity.",
      },
      {
        title: "Enhanced Lead Generation",
        description:
          "Automated funnels to capture and convert business leads without manual busywork.",
      },
    ],
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence Solutions",
    intro:
      "Add intelligent features that save time, from API-powered assistants to custom trained models.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Robot hand and human hand representing AI collaboration",
    items: [
      {
        title: "AI Integrations",
        description:
          "Embedding smart features (such as Gemini API workflows) into existing business processes.",
      },
      {
        title: "Custom AI Engineering",
        description:
          "Training and fine-tuning machine learning models, feature matching, object detection, and industry-specific pipelines.",
      },
    ],
  },
];

/** Flattened list kept for JSON-LD Service schema. */
export const services = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({
    id: `${category.id}-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    title: item.title,
    summary: item.description,
    forWhom: category.intro,
    includes: [item.description],
    proofPoint: `Part of Canopux ${category.title} for small businesses.`,
    stack: [] as string[],
  })),
);
