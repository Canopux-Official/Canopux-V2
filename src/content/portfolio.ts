export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  industry: string;
  services: string[];
  stack: string[];
  outcome: string;
  status: "Live";
  image: string;
  imageAlt: string;
};

/** Case studies aligned to small-business product outcomes. */
export const caseStudies: CaseStudy[] = [
  {
    slug: "student-management-system",
    title: "Student Management System",
    tagline: "Educational operations in one platform",
    summary:
      "A comprehensive educational management system that improves student and admin workflows for coaching institutes.",
    industry: "Education & Management",
    services: ["Web & Mobile Development", "Backend Systems & Security"],
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OAuth",
    ],
    outcome:
      "Institutes can onboard teams, track performance, and communicate from one connected system.",
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Students collaborating with laptops",
  },
  {
    slug: "buildcentral",
    title: "BuildCentral",
    tagline: "Construction project management in one place",
    summary:
      "A centralized platform for project, resource, labor, document, client, and budget management.",
    industry: "Construction & Management",
    services: ["Custom Web Apps", "Business Operations"],
    stack: ["React", "Tailwind CSS", "Chart.js", "TypeScript"],
    outcome:
      "Construction teams manage projects and communication from a single operations hub.",
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Construction site with project planning context",
  },
  {
    slug: "indocrypt-2025",
    title: "IndoCrypt 2025",
    tagline: "Conference experience for cryptography leaders",
    summary:
      "Web experience for IndoCrypt — a premier cryptography and information security conference in India.",
    industry: "Cybersecurity & Events",
    services: ["Digital Presence & Branding", "Web Development"],
    stack: ["React", "Vite", "JavaScript", "Framer Motion"],
    outcome:
      "A polished event presence for India's premier cryptography conference.",
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Conference audience in a modern auditorium",
  },
  {
    slug: "auto-check",
    title: "Auto Check",
    tagline: "Smarter vehicle verification before purchase",
    summary:
      "A platform to detect scams, tampered odometers, and hidden accidents before buying a used vehicle.",
    industry: "Automobile & Safety",
    services: ["AI Solutions", "Web Development"],
    stack: ["React", "Vite", "TypeScript", "Supabase"],
    outcome:
      "Buyers get clearer risk signals before committing to a purchase.",
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Modern car exterior representing vehicle verification",
  },
];

export const featuredProduct = {
  title: "Educational Management Suite",
  summary:
    "A ready-to-deploy student management platform for coaching institutes — onboarding, tracking, roles, and notifications included.",
  stack: ["React", "TypeScript", "Full-stack"],
  href: "/products#educational-management-suite",
  image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
} as const;
