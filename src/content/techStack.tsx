import type { ReactNode } from "react";

export type TechStackItem = {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
};

const iconClass = "h-6 w-6 shrink-0 text-canopux-white";

function IconShell({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden
    >
      {children}
    </svg>
  );
}

/** Filled brand-style marks kept monochrome for the dark grid. */
function BrandIcon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
      {children}
    </svg>
  );
}

export const techStack: TechStackItem[] = [
  {
    id: "react",
    name: "React",
    description: "Component-driven interfaces for web products that stay fast to iterate.",
    icon: (
      <BrandIcon>
        <path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          transform="rotate(120 12 12)"
        />
      </BrandIcon>
    ),
  },
  {
    id: "nextjs",
    name: "Next.js",
    description: "Full-stack React apps with strong SEO, routing, and deploy simplicity.",
    icon: (
      <BrandIcon>
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.2 14.7h-1.7l-4.3-6.4v6.4H8.5V7.3h1.8l4.2 6.3V7.3h1.7Z" />
      </BrandIcon>
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "Typed codebases that stay maintainable as features and teams grow.",
    icon: (
      <BrandIcon>
        <path d="M3 3h18v18H3V3Zm9.4 8.3h-2.1v6.4H8.4v-6.4H6.3V9.5h6.1v1.8Zm5.3 4.4c0 .9-.5 1.6-1.7 1.6-.9 0-1.5-.4-1.8-1l1.2-.7c.1.3.4.5.7.5.3 0 .5-.1.5-.4 0-.3-.2-.4-.7-.6l-.7-.3c-.9-.4-1.5-1-1.5-2 0-1 .8-1.8 2-1.8.9 0 1.5.3 1.9 1l-1.1.7c-.2-.3-.4-.4-.7-.4-.3 0-.5.1-.5.4 0 .2.2.4.7.6l.6.3c1.1.4 1.6 1 1.6 2.1Z" />
      </BrandIcon>
    ),
  },
  {
    id: "nodejs",
    name: "Node.js",
    description: "Event-driven backends for APIs, admin tools, and real-time workflows.",
    icon: (
      <IconShell>
        <path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z" />
        <path d="M12 12v7.2" />
        <path d="m7.5 9.2 4.5 2.6 4.5-2.6" />
      </IconShell>
    ),
  },
  {
    id: "nestjs",
    name: "NestJS",
    description: "Structured server architecture for secure, scalable business APIs.",
    icon: (
      <IconShell>
        <path d="M12 3 4.5 7.2v5.4c0 4.1 3.2 7.8 7.5 8.9 4.3-1.1 7.5-4.8 7.5-8.9V7.2L12 3Z" />
        <path d="M9 11.5c.8-1.4 2.2-2 3.5-2s2.4.5 3 1.6" />
      </IconShell>
    ),
  },
  {
    id: "python",
    name: "Python",
    description: "Automation, data pipelines, and practical AI integrations that ship.",
    icon: (
      <IconShell>
        <path d="M12 3c-2.8 0-3.5.7-3.5 3.2v1.6h3.7v.5H6.2C4 8.3 3 9.4 3 12s1 3.7 3.2 3.7h1.5V13c0-2.5 1.1-3.7 3.7-3.7h3.1c2.3 0 3.2-.9 3.2-3.1V6.2C17.7 3.8 16.5 3 12 3Z" />
        <path d="M12 21c2.8 0 3.5-.7 3.5-3.2v-1.6h-3.7v-.5h6c2.2 0 3.2-1.1 3.2-3.7s-1-3.7-3.2-3.7h-1.5V11c0 2.5-1.1 3.7-3.7 3.7H9.5c-2.3 0-3.2.9-3.2 3.1v1.9C6.3 20.2 7.5 21 12 21Z" />
        <circle cx="9.8" cy="5.8" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="14.2" cy="18.2" r="0.7" fill="currentColor" stroke="none" />
      </IconShell>
    ),
  },
  {
    id: "aws",
    name: "AWS",
    description: "Cloud infrastructure that scales with traffic, storage, and security needs.",
    icon: (
      <IconShell>
        <path d="M5 16.5c1.8 1.3 5.4 2.2 8.7 2.2 3.5 0 5.7-.9 6.8-1.8" />
        <path d="m7.5 5.5 4.5 13 4.5-13" />
        <path d="M9.2 11.5h5.6" />
      </IconShell>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description: "Design systems that stay consistent across marketing and product UI.",
    icon: (
      <IconShell>
        <path d="M3.5 12c2-5 4.2-7.5 6.5-7.5 1.7 0 3 1.2 4 3.5C15 10.8 16.5 12 18 12c1.3 0 2.3-.8 3.5-2.5-2 5-4.2 7.5-6.5 7.5-1.7 0-3-1.2-4-3.5C9.5 11.2 8 10 6.5 10 5.2 10 4.2 10.8 3.5 12Z" />
      </IconShell>
    ),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description: "Reliable relational data for operations, auth, and business records.",
    icon: (
      <IconShell>
        <ellipse cx="12" cy="6.5" rx="6.5" ry="2.8" />
        <path d="M5.5 6.5v4.2c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8V6.5" />
        <path d="M5.5 10.7v4.2c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-4.2" />
      </IconShell>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    description: "Flexible document storage for evolving product schemas and content.",
    icon: (
      <IconShell>
        <path d="M12 2.5c.4 2.2 2.8 4.2 2.8 8.2 0 3.6-1.5 5.8-2.8 10.8-1.3-5-2.8-7.2-2.8-10.8 0-4 2.4-6 2.8-8.2Z" />
        <path d="M12 21.5v-4" />
      </IconShell>
    ),
  },
  {
    id: "supabase",
    name: "Supabase",
    description: "Auth, storage, and realtime data without slowing early delivery.",
    icon: (
      <IconShell>
        <path d="M12 3 5 14.5h5.2L8.8 21 19 9.5h-5.2L15.2 3 12 3Z" />
      </IconShell>
    ),
  },
  {
    id: "docker",
    name: "Docker",
    description: "Consistent environments from local development through production.",
    icon: (
      <IconShell>
        <path d="M3 13.5h2.2v2.2H3zM5.8 13.5h2.2v2.2H5.8zM8.6 13.5h2.2v2.2H8.6zM11.4 13.5h2.2v2.2h-2.2zM5.8 10.8h2.2v2.2H5.8zM8.6 10.8h2.2v2.2H8.6zM11.4 10.8h2.2v2.2h-2.2zM8.6 8.1h2.2v2.2H8.6z" />
        <path d="M15.5 12.2c1.4 0 2.8.4 3.5 1.5.8 0 2.5.2 2.5 2.2 0 2.1-1.8 3.1-4.2 3.1H4.2c-1.8 0-2.7-1-2.7-2.4 0-1.5 1.1-2.5 2.8-2.7.4-2.1 2.1-3.2 4.2-3.2 1.1 0 2.1.4 2.8 1 .5-.9 1.5-1.5 2.7-1.5.4 0 .8.1 1.2.2.2-.5.7-.9 1.3-.9Z" />
      </IconShell>
    ),
  },
  {
    id: "vite",
    name: "Vite",
    description: "Rapid frontend tooling for apps that need quick feedback loops.",
    icon: (
      <IconShell>
        <path d="m12 3 8.5 15.5H3.5L12 3Z" />
        <path d="M12 8.5 8.2 15h7.6L12 8.5Z" />
      </IconShell>
    ),
  },
  {
    id: "react-native",
    name: "React Native",
    description: "Cross-platform mobile apps that share logic with your web stack.",
    icon: (
      <IconShell>
        <rect x="8" y="3" width="8" height="18" rx="2" />
        <path d="M11 5.5h2M12 18.5v.01" />
      </IconShell>
    ),
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    description: "Motion that adds presence and hierarchy without visual noise.",
    icon: (
      <IconShell>
        <path d="M6 4h8v6H6V4ZM6 10h8v6l-4 4v-4H6v-6ZM14 10h4v6h-4v-6Z" />
      </IconShell>
    ),
  },
  {
    id: "ga4",
    name: "GA4 & SEO",
    description: "Measurement and search foundations so growth work stays accountable.",
    icon: (
      <IconShell>
        <path d="M4 19V9M10 19V5M16 19v-7M20 19v-3" />
      </IconShell>
    ),
  },
  {
    id: "oauth",
    name: "OAuth & Auth",
    description: "Secure access patterns for teams, customers, and admin portals.",
    icon: (
      <IconShell>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        <circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none" />
      </IconShell>
    ),
  },
  {
    id: "apis",
    name: "REST & Integrations",
    description: "Payment, messaging, and third-party systems wired into one product.",
    icon: (
      <IconShell>
        <path d="M9 12h6" />
        <path d="M8 8H6a3 3 0 0 0 0 6h2" />
        <path d="M16 8h2a3 3 0 0 1 0 6h-2" />
      </IconShell>
    ),
  },
];
