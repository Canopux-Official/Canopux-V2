export type Product = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  /** Longer copy shown in the expanded detail view */
  detail: string;
  audience: string;
  features: string[];
  outcome: string;
  image: string;
  imageAlt: string;
};

/** Ready-to-deploy product packages for small businesses. */
export const products: Product[] = [
  {
    slug: "educational-management-suite",
    title: "Educational Management Suite",
    tagline: "A live full-stack platform for coaching institutes",
    summary:
      "Student onboarding, tracking, and communication in one connected system — without stitching tools together.",
    detail:
      "Built for coaching institutes that outgrow spreadsheets and chat threads. Admins onboard teams, teachers track performance, and students stay informed through automated workflows — all with role-based access.",
    audience: "Coaching institutes and education operators",
    features: [
      "Administrative onboarding",
      "Performance tracking",
      "Role-based access for teachers and students",
      "Automated email notifications",
    ],
    outcome:
      "Institutes run day-to-day operations from one platform instead of fragmented tools.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Students collaborating with laptops in a study space",
  },
  {
    slug: "ecommerce-retail-hub",
    title: "E-Commerce & Retail Hub",
    tagline: "A complete digital storefront for local businesses",
    summary:
      "Product showcase, secure checkout, and sales tracking designed for small retail teams.",
    detail:
      "Launch a storefront that looks polished and converts. Catalog, payments, OTP-secured checkout, and GA4 insight are packaged so local sellers can sell online without a custom build from scratch.",
    audience: "Local retail and digital product sellers",
    features: [
      "Online product showcase",
      "Payment API integrations",
      "OTP verification at checkout",
      "GA4 tracking for sales insight",
    ],
    outcome:
      "Retailers go live faster with checkout and analytics already wired in.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Customer checking out at a modern retail counter",
  },
  {
    slug: "business-operations-crm",
    title: "Business Operations & CRM Portal",
    tagline: "A centralized dashboard for daily operations",
    summary:
      "One place to manage customers, staff access, and leads from WhatsApp and social channels.",
    detail:
      "Owners get a single operations hub: customers, employee roles, and inbound conversations. Built for teams that live in WhatsApp and social DMs but still need a structured CRM.",
    audience: "Small business owners and operations managers",
    features: [
      "Customer management",
      "Secure admin portals",
      "Role-based employee access",
      "Database management",
      "WhatsApp and social lead integration",
    ],
    outcome:
      "Leads and staff workflows stop leaking across chats, sheets, and inboxes.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Business team reviewing operations on a shared screen",
  },
  {
    slug: "identity-verification-api",
    title: "Identity & Verification API",
    tagline: "Scalable security for platforms that need strict validation",
    summary:
      "OTP, Captcha, and Google Sign-in as a modular layer — ready to grow into AI identification.",
    detail:
      "Drop trusted verification into products that cannot afford weak sign-in. Modular endpoints cover OTP, Captcha, and Google Sign-in, with room to extend into advanced identification pipelines.",
    audience: "Platforms and apps needing stronger user validation",
    features: [
      "OTP verification",
      "Captcha protection",
      "Google Sign-in",
      "Ready for advanced AI-driven identification pipelines",
    ],
    outcome:
      "Product teams add verification without rebuilding auth from zero.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Person securing a digital device with authentication",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
