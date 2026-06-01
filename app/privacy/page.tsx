import type { Metadata } from "next";
import { CONTACT } from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Crypto & Coffee handles your data.",
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Last updated May 2026" title="Privacy Policy" align="left" />
      <section className="mx-auto max-w-container px-6 py-16 md:px-10 md:py-20">
        <p className="mb-8 rounded-xl border border-line-subtle bg-bg-card px-5 py-4 text-sm text-text-muted">
          Template — please review with legal counsel and tailor to your data
          practices before launch.
        </p>
        <Prose>
          <p>
            This Privacy Policy explains how Crypto &amp; Coffee (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;), operated by DTC Group, collects, uses, and protects
            your information when you visit our website.
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect information you provide directly — such as your email
            address when you subscribe to our newsletter, or the details you
            submit through our contact and partnership forms. We also collect
            limited, privacy-friendly analytics about how the site is used.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To send you the newsletter and updates you&apos;ve requested.</li>
            <li>To respond to your inquiries and partnership requests.</li>
            <li>To understand and improve how the website performs.</li>
          </ul>

          <h2>Cookies &amp; analytics</h2>
          <p>
            We use a lightweight, privacy-respecting analytics tool to measure
            traffic. We do not sell your personal data to third parties.
          </p>

          <h2>Third-party services</h2>
          <p>
            We rely on trusted providers for email delivery, hosting, and video
            embedding (such as YouTube). These services have their own privacy
            policies governing the data they process.
          </p>

          <h2>Your rights</h2>
          <p>
            You can unsubscribe from our emails at any time using the link in
            every message, and you may contact us to access or delete the
            personal information we hold about you.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>
        </Prose>
      </section>
    </SiteShell>
  );
}
