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
  uniqueness?: string;
  stack?: string[];
  liveUrl?: string;
  image: string;
  imageAlt: string;
};

/**
 * Ready-to-deploy products, SMS & Auto Check details imported from canopux.org.
 */
export const products: Product[] = [
  {
    slug: "student-management-system",
    title: "Student Management System",
    tagline: "In the pursuit of excellence",
    summary:
      "A comprehensive educational management system enhancing student and admin experiences, live at sms.canopux.org.",
    detail:
      "Student Management System is designed to streamline educational administration while giving students easy access to learning materials and personal academic records. Super admins control features, admins manage students and sessions, and students track performance in a secure progressive web application.",
    audience: "Education & Management · Coaching institutes",
    features: [
      "Dynamic landing content driven by super admin inputs",
      "Full access control, grant admin-specific feature access",
      "OTP-based registration for secure student signup",
      "Session, attendance, and notice management",
      "Cloudinary image storage and Google Drive class materials",
      "Progressive Web App experience across devices",
    ],
    uniqueness:
      "A full-fledged education management platform that combines dynamic content rendering, session management, secure OTP-based signups, and PWA capabilities, with Drive and Cloudinary integrated for day-to-day teaching workflows.",
    outcome:
      "Institutes run onboarding, tracking, and communication from one connected system instead of fragmented tools.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Material UI",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OAuth",
      "Cloudinary",
      "Google Drive",
    ],
    liveUrl: "https://sms.canopux.org/",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Students collaborating with laptops in a study space",
  },
  {
    slug: "auto-check",
    title: "Auto Check",
    tagline: "Smart Vehicle Verification, Simplified",
    summary:
      "Detect scams, tampered odometers, and hidden accidents before buying a used vehicle.",
    detail:
      "Auto Check lets users upload a vehicle ID to retrieve detailed information, including accident history, AI-based market price estimation (under development), and registration details. Users can also register new vehicles securely.",
    audience: "Automobile & Safety · Used-vehicle buyers",
    features: [
      "Vehicle verification from an uploaded ID",
      "Accident history and tampered-odometer detection",
      "AI market price estimation (under development)",
      "Secure new-vehicle registration",
      "Progressive Web App interface",
    ],
    uniqueness:
      "Combines vehicle ID verification with AI-powered market price predictions, accident history detection, and tamper detection in a user-friendly PWA.",
    outcome:
      "Buyers get clearer risk signals before committing to a purchase.",
    stack: ["React", "Vite", "TypeScript", "Supabase"],
    liveUrl: "https://auto-check-theta.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Modern car exterior representing vehicle verification",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
