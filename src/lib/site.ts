export const siteConfig = {
  name: "Canopux",
  legalName: "Canopux Inc.",
  url: "https://www.canopux.org",
  description:
    "Canopux empowers small businesses with scalable digital solutions, custom web and mobile apps, data-driven growth, and intelligent automation.",
  tagline: "Empowering small businesses with scalable digital solutions.",
  headline: "Empowering Small Businesses with Scalable Digital Solutions & Intelligent Automation.",
  email: "hello@canopux.org",
  phone: "+91-8260783152",
  whatsappUrl: "https://wa.me/918260783152",
  bookingUrl: "https://wa.me/918260783152",
  responseTime: "Average response time: under 30 minutes",
  founded: "2023",
  office: {
    label: "Headquarters",
    timezone: "IST (UTC+5:30)",
    location: "Bhubaneswar, Odisha 751003 · India",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/canopux",
    twitter: "https://twitter.com/canopux",
    github: "https://github.com/Canopux-Official",
  },
  expertise: [
    { area: "Full Stack", count: "8 Devs" },
    { area: "AI / ML", count: "5 Engineers" },
    { area: "App Developers", count: "6 Devs" },
    { area: "Cloud / DevOps", count: "4 Engineers" },
    { area: "Cyber Security", count: "3 Engineers" },
  ] as const,
  stack: ["React", "Next.js", "NestJS", "Python", "AWS"] as const,
  nav: [
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/portfolio", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];

/** Home hero value pillars — free Unsplash photos (Unsplash License). */
export const pillars = [
  {
    id: "digital-presence",
    title: "Digital Presence & Branding",
    summary:
      "Striking landing pages, e-commerce stores, and cohesive brand design that help small businesses look established from day one.",
    href: "/services#branding-digital-design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Designer reviewing brand materials on a desk",
  },
  {
    id: "web-mobile-apps",
    title: "Custom Web & Mobile Apps",
    summary:
      "High-performance full-stack applications with robust admin portals and secure access for teams and customers.",
    href: "/services#web-mobile-development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Person using a mobile application",
  },
  {
    id: "data-driven-growth",
    title: "Data-Driven Growth",
    summary:
      "Integrated SEO, GA4 analytics, and automated lead generation so marketing spend turns into measurable pipeline.",
    href: "/services#marketing-analytics-growth",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Analytics dashboard charts on a laptop screen",
  },
  {
    id: "ai-automation",
    title: "AI & Smart Automation",
    summary:
      "Next-generation AI models, intelligent notifications, and seamless API integrations that streamline operations.",
    href: "/services#artificial-intelligence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Abstract visualization representing artificial intelligence",
  },
] as const;
