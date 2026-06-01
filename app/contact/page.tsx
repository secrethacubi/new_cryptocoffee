import type { Metadata } from "next";
import { CONTACT, SOCIALS } from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Whether you're a potential guest, a brand looking to partner, or just want to say hey — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <em className="italic text-espresso">talk</em>
          </>
        }
        subtitle="Whether you're a potential guest, a brand looking to partner, or just want to say hey — we'd love to hear from you."
      />

      <section className="mx-auto max-w-[680px] px-6 py-16 md:px-10 md:py-20">
        <InquiryForm
          options={[
            "I'm a potential guest",
            "I'm interested in sponsorship",
            "General inquiry",
            "Press / Media",
          ]}
        />
        <p className="mt-4 text-sm text-text-muted">
          We typically respond within 48 hours.
        </p>

        {/* Direct contact */}
        <div className="mt-12 rounded-2xl border border-line-subtle bg-bg-card p-7 text-center">
          <h2 className="mb-2 font-serif text-[22px]">Prefer a direct message?</h2>
          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-2"
          >
            Message us on Telegram
          </a>
          <p className="mt-4 text-sm text-text-muted">
            Or email us at{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-espresso hover:underline"
            >
              {CONTACT.email}
            </a>
          </p>
        </div>

        {/* Socials */}
        <div className="mt-10 text-center">
          <div className="mb-4 text-[11px] uppercase tracking-[2px] text-text-muted">
            Follow along
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIALS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-espresso hover:text-espresso-bright"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
