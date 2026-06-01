import type { Metadata } from "next";
import { CONTACT } from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the Crypto & Coffee website.",
};

export default function TermsPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Last updated May 2026" title="Terms of Service" align="left" />
      <section className="mx-auto max-w-container px-6 py-16 md:px-10 md:py-20">
        <p className="mb-8 rounded-xl border border-line-subtle bg-bg-card px-5 py-4 text-sm text-text-muted">
          Template — please review with legal counsel before launch.
        </p>
        <Prose>
          <p>
            By accessing or using the Crypto &amp; Coffee website, you agree to
            these Terms of Service. If you do not agree, please do not use the
            site.
          </p>

          <h2>Use of the site</h2>
          <p>
            You may use this site for personal, non-commercial purposes. You agree
            not to misuse the site, attempt to disrupt it, or use it in any
            unlawful way.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The Crypto &amp; Coffee name, logo, episodes, and original content are
            the property of DTC Group and its licensors. You may share links to
            our content, but you may not reproduce it without permission.
          </p>

          <h2>Third-party links</h2>
          <p>
            Our site links to third-party platforms (such as YouTube, X, and
            others). We are not responsible for the content or practices of those
            external sites.
          </p>

          <h2>Disclaimer</h2>
          <p>
            Content on this site is provided for informational and entertainment
            purposes only and does not constitute financial, investment, or legal
            advice.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            The site is provided &ldquo;as is&rdquo; without warranties of any
            kind. To the fullest extent permitted by law, we are not liable for
            any damages arising from your use of the site.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the site
            after changes means you accept the revised terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email us at{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>
        </Prose>
      </section>
    </SiteShell>
  );
}
