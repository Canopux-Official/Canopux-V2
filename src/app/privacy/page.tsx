import { LegalDocument } from "@/components/legal/LegalDocument";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const SUPPORT_EMAIL = "support@canopux.org";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Canopux collects, uses, and protects information when you visit canopux.org or contact us about web, app, and AI projects.",
  path: "/privacy",
  keywords: ["Canopux privacy policy", "data protection", "privacy"],
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <LegalDocument
        eyebrow="Legal"
        title="Privacy Policy"
        summary="This policy explains what information we collect when you use Canopux websites and services, how we use it, and the choices available to you."
        effectiveDate="28 July 2026"
        contactEmail={SUPPORT_EMAIL}
        sections={[
          {
            title: "Who we are",
            paragraphs: [
              `${siteConfig.legalName} (“Canopux”, “we”, “us”) operates ${siteConfig.url} and related product and service experiences. We are headquartered in ${siteConfig.office.location}.`,
            ],
          },
          {
            title: "Scope",
            paragraphs: [
              "This policy covers information collected through our marketing website, contact channels (including email and WhatsApp when you message us), and related project inquiries. Separate product agreements may apply when we deliver client work under contract.",
            ],
          },
          {
            title: "Information we collect",
            paragraphs: [
              "We collect information you choose to provide and limited technical data needed to operate the site securely.",
            ],
            bullets: [
              "Contact details you submit (name, email, company, phone, and message content)",
              "Project notes when you email support@canopux.org, WhatsApp, or use our contact forms",
              "Basic device and usage data such as browser type, pages viewed, and approximate location derived from IP",
              "Cookies or similar technologies used for essential site function and optional analytics, where enabled",
            ],
          },
          {
            title: "How we use information",
            paragraphs: [
              "We use personal information only for legitimate business purposes related to operating Canopux.",
            ],
            bullets: [
              "Respond to inquiries and scope potential projects",
              "Provide customer and technical support via support@canopux.org",
              "Improve our website, products, and service delivery",
              "Comply with legal obligations and protect against abuse or fraud",
            ],
          },
          {
            title: "Sharing and processors",
            paragraphs: [
              "We do not sell your personal information. We may share limited data with service providers who help us run email, hosting, analytics, or communications tools, under agreements that require appropriate protection. We may also disclose information if required by law or to protect our rights and users.",
            ],
          },
          {
            title: "Retention",
            paragraphs: [
              "We keep inquiry and project-related records only as long as needed for the purposes described above, including support history, legal compliance, and legitimate business records. When data is no longer required, we delete or anonymize it where practicable.",
            ],
          },
          {
            title: "Security",
            paragraphs: [
              "We use reasonable administrative and technical measures to protect information. No method of transmission or storage is fully secure; please avoid sending sensitive credentials or payment details over unsecured channels.",
            ],
          },
          {
            title: "Your choices",
            paragraphs: [
              "You may request access, correction, or deletion of personal information we hold about you, subject to applicable law and legitimate retention needs. Contact us at support@canopux.org. You can also ask us to stop non-essential marketing communications at any time.",
            ],
          },
          {
            title: "Children",
            paragraphs: [
              "Our services are directed to businesses and professionals. We do not knowingly collect personal information from children under 16. If you believe a child has provided us information, contact support@canopux.org and we will take appropriate steps.",
            ],
          },
          {
            title: "Changes",
            paragraphs: [
              "We may update this policy from time to time. The effective date above will be revised when material changes are published on this page.",
            ],
          },
          {
            title: "Contact",
            paragraphs: [
              `For privacy questions or requests, email support@canopux.org. You may also reach us through the channels listed on our Contact page at ${siteConfig.url}/contact.`,
            ],
          },
        ]}
      />
    </>
  );
}
