import { LegalDocument } from "@/components/legal/LegalDocument";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const SUPPORT_EMAIL = "support@canopux.org";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms governing use of the Canopux website and related digital services for web, app, and AI projects.",
  path: "/terms",
  keywords: ["Canopux terms of service", "website terms", "legal"],
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <LegalDocument
        eyebrow="Legal"
        title="Terms of Service"
        summary="These terms govern your access to and use of the Canopux website and related online materials. By using the site, you agree to these terms."
        effectiveDate="28 July 2026"
        contactEmail={SUPPORT_EMAIL}
        sections={[
          {
            title: "Agreement",
            paragraphs: [
              `These Terms of Service (“Terms”) are an agreement between you and ${siteConfig.legalName} (“Canopux”, “we”, “us”) regarding use of ${siteConfig.url} and related public content. Paid project work is governed by a separate statement of work or contract when applicable.`,
            ],
          },
          {
            title: "Use of the website",
            paragraphs: [
              "You may browse the site for lawful, professional purposes. You agree not to misuse the site or attempt to disrupt its security, availability, or integrity.",
            ],
            bullets: [
              "Do not scrape, overload, or probe systems without permission",
              "Do not post unlawful, harmful, or misleading content through contact channels",
              "Do not impersonate Canopux or misrepresent your affiliation with us",
            ],
          },
          {
            title: "Intellectual property",
            paragraphs: [
              "Site content, branding, logos, copy, and design elements are owned by Canopux or our licensors unless otherwise stated. You may not copy, modify, distribute, or commercially exploit site materials without prior written consent, except for fair personal reference use permitted by law.",
            ],
          },
          {
            title: "Inquiries and proposals",
            paragraphs: [
              "Information submitted through contact forms, WhatsApp, or email (including support@canopux.org) may be used to respond to your request and evaluate fit. Informal discussions do not create a binding engagement until a written agreement is executed.",
            ],
          },
          {
            title: "No professional warranties on free content",
            paragraphs: [
              "Blog posts, case summaries, and marketing descriptions are provided for general information. They do not constitute legal, financial, or technical advice tailored to your situation. Outcomes described in case studies are illustrative and not guarantees of future results.",
            ],
          },
          {
            title: "Third-party links and tools",
            paragraphs: [
              "The site may link to third-party websites or services (for example social profiles or messaging apps). We are not responsible for their content, policies, or availability. Your use of those services is subject to their terms.",
            ],
          },
          {
            title: "Disclaimer",
            paragraphs: [
              "The website and public materials are provided “as is” and “as available” without warranties of any kind, express or implied, to the fullest extent permitted by law. We do not warrant uninterrupted or error-free access.",
            ],
          },
          {
            title: "Limitation of liability",
            paragraphs: [
              "To the maximum extent permitted by law, Canopux is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of the website or reliance on public content. Liability for paid project work is limited as set out in the applicable contract.",
            ],
          },
          {
            title: "Indemnity",
            paragraphs: [
              "You agree to indemnify and hold Canopux harmless from claims arising out of your misuse of the site, violation of these Terms, or infringement of third-party rights in connection with your use of the site.",
            ],
          },
          {
            title: "Changes",
            paragraphs: [
              "We may update these Terms periodically. Continued use of the site after changes are posted constitutes acceptance of the revised Terms, unless a separate project agreement specifies otherwise.",
            ],
          },
          {
            title: "Governing law",
            paragraphs: [
              "These Terms are governed by the laws of India, without regard to conflict-of-law principles. Courts in Odisha, India shall have exclusive jurisdiction for disputes arising from website use, unless mandatory law provides otherwise.",
            ],
          },
          {
            title: "Contact",
            paragraphs: [
              `Questions about these Terms can be sent to support@canopux.org. For project discussions, visit ${siteConfig.url}/contact.`,
            ],
          },
        ]}
      />
    </>
  );
}
