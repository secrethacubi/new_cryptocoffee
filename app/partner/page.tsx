import type { Metadata } from "next";
import {
  PARTNER_TIERS,
  PARTNER_ADDONS,
  PARTNER_VALUE_PROPS,
  EVENT_TIERS,
  CONTACT,
} from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "We don't sell ad slots — we build partnerships that embed brands into trusted conversations shaping Web3.",
};

export default function PartnerPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Partnership"
        title={
          <>
            Partner with the conversation{" "}
            <em className="italic text-espresso">shaping Web3</em>
          </>
        }
        subtitle="We don't sell ad slots — we build partnerships that embed brands into trusted conversations."
      >
        <a href="#inquiry" className="btn btn-primary">
          Let&apos;s Talk
        </a>
      </PageHeader>

      {/* Why partner */}
      <section className="mx-auto max-w-container px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <h2 className="mb-10 font-serif text-[clamp(28px,4vw,40px)]">
            Why partner with <em className="italic text-espresso">C&amp;C</em>
          </h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNER_VALUE_PROPS.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line-subtle bg-bg-card p-7">
                <h3 className="mb-2 font-serif text-[20px]">{v.title}</h3>
                <p className="text-sm text-text-secondary">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tiers */}
      <section className="border-t border-line-subtle py-16 md:py-20">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <Reveal>
            <h2 className="mb-3 font-serif text-[clamp(28px,4vw,40px)]">
              Partnership <em className="italic text-espresso">tiers</em>
            </h2>
            <p className="mb-10 max-w-[560px] text-text-secondary">
              Coffee-themed, flexible, and built to grow with you. Pricing scales
              with the audience — reach out for a current rate card.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PARTNER_TIERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-7 ${
                    t.highlight
                      ? "border-espresso-deep bg-[linear-gradient(135deg,rgba(200,149,108,0.08),rgba(212,168,83,0.03))]"
                      : "border-line-subtle bg-bg-card"
                  }`}
                >
                  {t.highlight && (
                    <div className="mb-3 inline-flex w-fit rounded-full bg-espresso-glow px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-espresso-bright">
                      Most popular
                    </div>
                  )}
                  <h3 className="font-serif text-[24px]">{t.name}</h3>
                  <p className="mt-1 text-sm text-text-muted">{t.tagline}</p>
                  <div className="my-5 text-[15px] font-semibold text-espresso-bright">
                    {t.price}
                  </div>
                  <ul className="mb-6 flex-1 space-y-2.5">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className="relative pl-6 text-sm text-text-secondary"
                      >
                        <span className="absolute left-0 text-espresso">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#inquiry"
                    className={`btn justify-center ${
                      t.highlight ? "btn-primary" : "btn-outline"
                    }`}
                  >
                    Let&apos;s Talk
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="border-t border-line-subtle py-16 md:py-20">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <Reveal>
            <h2 className="mb-10 font-serif text-[clamp(28px,4vw,40px)]">
              Add-on <em className="italic text-espresso">opportunities</em>
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNER_ADDONS.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.04}>
                <div className="flex items-center justify-between rounded-xl border border-line-subtle bg-bg-card px-5 py-4">
                  <span className="text-[15px] text-text">{a.name}</span>
                  <span className="font-mono text-[13px] text-espresso">
                    {a.price}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Breakfast Club event sponsorship */}
      <section
        id="events"
        className="scroll-mt-[var(--nav-h)] border-t border-line-subtle py-16 md:py-20"
      >
        <div className="mx-auto max-w-container px-6 md:px-10">
          <Reveal>
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[3px] text-espresso">
              Live Events
            </div>
            <h2 className="mb-3 font-serif text-[clamp(28px,4vw,40px)]">
              Sponsor a <em className="italic text-espresso">Breakfast Club</em>
            </h2>
            <p className="mb-10 max-w-[560px] text-text-secondary">
              Intimate, in-person mornings where Crypto &amp; Coffee comes to
              life. Put your brand in the room.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {EVENT_TIERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-line-subtle bg-bg-card p-7">
                  <h3 className="font-serif text-[22px]">{t.name}</h3>
                  <div className="my-3 text-[14px] font-semibold text-espresso-bright">
                    {t.price}
                  </div>
                  <p className="text-sm text-text-secondary">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section
        id="inquiry"
        className="scroll-mt-[var(--nav-h)] border-t border-line-subtle py-16 md:py-20"
      >
        <div className="mx-auto max-w-[680px] px-6 md:px-10">
          <Reveal>
            <h2 className="mb-3 text-center font-serif text-[clamp(28px,4vw,40px)]">
              Let&apos;s build something <em className="italic text-espresso">together</em>
            </h2>
            <p className="mx-auto mb-10 max-w-[460px] text-center text-text-secondary">
              Tell us a little about your brand and what you&apos;re looking for.
            </p>
            <InquiryForm
              showCompany
              options={[
                ...PARTNER_TIERS.map((t) => t.name),
                "Event sponsorship",
                "Not sure yet",
              ]}
            />
            <p className="mt-8 text-center text-sm text-text-muted">
              Prefer a direct message? Reach us on Telegram:{" "}
              <a
                href={CONTACT.telegram}
                className="text-espresso hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {CONTACT.telegramHandle}
              </a>{" "}
              · or email{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-espresso hover:underline">
                {CONTACT.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
