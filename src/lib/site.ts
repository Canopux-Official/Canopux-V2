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

/** Home hero value pillars, free Unsplash photos (Unsplash License). */
export const pillars = [
  {
    id: "digital-presence",
    title: "Digital Presence & Branding",
    summary:
      "Striking landing pages, e-commerce stores, and cohesive brand design that help small businesses look established from day one.",
    href: "/services#branding-digital-design",
    // Visual: A striking, minimalist glowing globe/network interface over a deep black background, capturing global presence.
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Minimalist, sleek dark-themed digital interface layout on a premium display",
  },
  {
    id: "web-mobile-apps",
    title: "Custom Web & Mobile Apps",
    summary:
      "High-performance full-stack applications with robust admin portals and secure access for teams and customers.",
    href: "/services#web-mobile-development",
    // Visual: Clean, high-contrast code/interface glowing on a sleek bezel-less screen, reminiscent of SpaceX console hardware.
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Futuristic lines of clean code glowing on a high-performance monitor",
  },
  {
    id: "data-driven-growth",
    title: "Data-Driven Growth",
    summary:
      "Integrated SEO, GA4 analytics, and automated lead generation so marketing spend turns into measurable pipeline.",
    href: "/services#marketing-analytics-growth",
    // Visual: Elegant, glowing server stacks or telemetry data data streams in a clean, dark tech hub.
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "High-tech server room telemetry representing data-driven scale and growth pipelines",
  },
  {
    id: "ai-automation",
    title: "AI & Smart Automation",
    summary:
      "Next-generation AI models, intelligent notifications, and seamless API integrations that streamline operations.",
    href: "/services#artificial-intelligence",
    // Visual: A stunning, Starlink-esque view of a bright satellite constellation/orbital network pattern firing data across the dark.
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Sleek orbital data network visualization representing next-gen AI automation",
  },
] as const;