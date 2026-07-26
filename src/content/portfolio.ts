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
  liveUrl?: string;
  image: string;
  imageAlt: string;
};

/**
 * Selected work, client sites and platforms.
 * Live details sourced from canopux.org and each public site.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "jj-institute",
    title: "JJ Institute of Science",
    tagline: "In the pursuit of excellence",
    summary:
      "JJ Institute of Science runs on Canopux’s Student Management System, a full education platform for admissions, sessions, student records, and day-to-day institute operations under their “In the Pursuit of Excellence” brand.",
    industry: "Education & Management",
    services: ["Student Management System", "Web & Mobile Development"],
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Material UI",
      "Node.js",
      "MongoDB",
    ],
    outcome:
      "The institute operates student and admin workflows on a live SMS deployment instead of fragmented tools.",
    status: "Live",
    liveUrl: "https://www.jjinstitute.in/",
    image:
      "https://images.unsplash.com/photo-1696395050055-eb7a315bb1cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
    imageAlt: "Students collaborating on campus with laptops",
  },
  {
    slug: "priyaanshii-tasteworks",
    title: "Priyaanshii Tasteworks Pvt. Ltd.",
    tagline: "One passion. Many experiences. For great food.",
    summary:
      "Brand and web presence for an all-India hospitality group spanning Sukoon Tea Point, Apna Adda family dining, and Priyaanshii Caters & Event Management, weddings, corporate events, and dining under one kitchen philosophy.",
    industry: "Hospitality & Events",
    services: ["Digital Presence & Branding", "Web Development"],
    stack: ["React", "Brand UI", "Content"],
    outcome:
      "A single site that presents three houses clearly and converts visitors into event enquiries and brand discovery.",
    status: "Live",
    liveUrl: "https://www.priyaanshiitasteworks.in/",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Elegant hospitality table setting for a celebration",
  },
  {
    slug: "indocrypt-2025",
    title: "IndoCrypt 2025",
    tagline: "India’s premier cryptography conference",
    summary:
      "Conference web experience for IndoCrypt 2025 at IIIT Bhubaneswar (14–17 December 2025), registrations, schedule, important dates, and organizer presence for India’s leading cryptography and information security gathering.",
    industry: "Cybersecurity & Events",
    services: ["Digital Presence & Branding", "Web Development"],
    stack: ["React", "Vite", "JavaScript", "Framer Motion"],
    outcome:
      "A polished public hub for speakers, attendees, and sponsors around India’s flagship crypto conference.",
    status: "Live",
    liveUrl: "https://www.indocrypt2025.in/",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Conference audience in a modern auditorium",
  },
  {
    slug: "sri-jagannath-traders",
    title: "Sri Jagannath Traders",
    tagline: "Strength that builds tomorrow",
    summary:
      "Premium steel distributor site for Bhadrak, Odisha, product catalogue (stainless, GI/MS pipes, roofing, angles, channels), mill partners, industries served, and a clear enquiry-to-delivery path for builders and contractors.",
    industry: "Industrial & Distribution",
    services: ["Digital Presence & Branding", "Web Development"],
    stack: ["React", "Brand UI", "Content"],
    outcome:
      "Contractors can browse stock categories and request quotes without relying only on phone or word of mouth.",
    status: "Live",
    liveUrl: "https://www.srijagannathtraders.in/",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Industrial steel materials in a distribution warehouse",
  },
  {
    slug: "kkr-mahila-hs-school",
    title: "KKR Mahila Higher Secondary School",
    tagline: "Educating young women. Building stronger tomorrows.",
    summary:
      "School website for a Government Higher Secondary School in Bhadrak (est. 1994), story, academics (CHSE Arts), campus life, SAMS Odisha admissions guidance, gallery, and leadership messaging built around trust and clarity.",
    industry: "Education",
    services: ["Digital Presence & Branding", "Web Development"],
    stack: ["React", "Brand UI", "Content"],
    outcome:
      "Families and students find admissions paths, campus life, and institutional identity in one clear public presence.",
    status: "Live",
    liveUrl: "https://www.kkrmahilahsschool.in/",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "School campus building and courtyard",
  },
  {
    slug: "ai-ats-resume-screening",
    title: "AI ATS",
    tagline: "AI-powered resume screening and job matching",
    summary:
      "Recruiters spend hours reviewing resumes while candidates rarely know why applications fail ATS filters. This platform uses AI to score resumes, rank candidates for posted jobs, and recommend roles, bridging both sides of hiring.",
    industry: "AI & ML",
    services: ["AI Solutions", "Web & Backend Development"],
    stack: ["React", "Tailwind CSS", "NestJS", "PostgreSQL", "NLP", "Prisma"],
    outcome:
      "Recruiters get ranked candidates faster; job seekers get ATS feedback and smarter job matches.",
    status: "Live",
    liveUrl: "https://ats-orpin.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Team reviewing hiring analytics on a laptop",
  },
  {
    slug: "math-superhighway",
    title: "Math SuperHighway",
    tagline: "Excellence in mathematics",
    summary:
      "Learning platform for structured maths programs, foundation through JEE and Olympiad prep, with courses, testimonials, enrolment, and a brand presence for a Bhubaneswar coaching institute known for conceptual clarity and results.",
    industry: "EdTech & Coaching",
    services: ["Digital Presence & Branding", "Web Development"],
    stack: ["React", "Animations", "Brand UI"],
    outcome:
      "Prospective students can explore programs and enrol through a modern, confidence-building site.",
    status: "Live",
    liveUrl: "https://www.mathsuperhighway.com/",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Mathematics equations and learning materials",
  },
  {
    slug: "new-darshan-jewellery",
    title: "New Darshan Jewellery",
    tagline: "Gold & silver jewellery for every celebration",
    summary:
      "Premium jewellery brand website for New Darshan Jewellery in Ghasipura, Keonjhar, collections, celebrations, and store identity for gold and silver shoppers discovering the brand online.",
    industry: "Retail & Jewellery",
    services: ["Digital Presence & Branding", "Web Development"],
    stack: ["React", "Brand UI", "Commerce"],
    outcome:
      "A refined digital storefront that presents collections and invites customers into the boutique experience.",
    status: "Live",
    liveUrl: "https://www.newdarshanjewellery.com/",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Gold jewellery displayed for a celebration",
  },
];

export const featuredProduct = {
  title: "Student Management System",
  summary:
    "A live full-stack platform for coaching institutes, onboarding, tracking, roles, OTP signup, and PWA delivery included.",
  stack: ["React", "TypeScript", "Node.js", "MongoDB"],
  href: "/products#student-management-system",
  image:
    "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&q=80",
} as const;
