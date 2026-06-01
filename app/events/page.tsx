import type { Metadata } from "next";
import { TARGET_CITIES } from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "The Breakfast Club",
  description:
    "Intimate morning coffee meetups and live recording sessions at crypto and tech events around the world.",
};

export default function EventsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Live Events"
        title={
          <>
            The <em className="italic text-espresso">Breakfast Club</em>
          </>
        }
        subtitle="Where Crypto & Coffee comes to life."
      />

      {/* What is it */}
      <section className="mx-auto max-w-container px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[3px] text-espresso">
                What is it
              </div>
              <p className="font-serif text-[clamp(22px,3vw,30px)] leading-[1.35]">
                Intimate morning coffee meetups and live recording sessions at
                major crypto and tech events around the world.
              </p>
              <p className="mt-5 text-text-secondary">
                20–50 attendees. Curated guest lists. Real conversations over
                real breakfast — and it&apos;s a live recording, so the audience
                gets to be in the room.
              </p>
            </div>
            <div
              className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-line"
              style={{
                background:
                  "radial-gradient(circle at 40% 30%, rgba(200,149,108,0.22), transparent 55%), linear-gradient(135deg,#2A2621,#14110E)",
              }}
            >
              <span className="text-[64px] opacity-35" aria-hidden>
                🥐
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Upcoming */}
      <section className="border-t border-line-subtle py-16 md:py-20">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <Reveal>
            <h2 className="mb-8 font-serif text-[clamp(28px,4vw,40px)]">
              Upcoming <em className="italic text-espresso">events</em>
            </h2>
            <div className="rounded-2xl border border-line-subtle bg-bg-card p-8 text-center md:p-12">
              <div className="mb-3 inline-flex rounded-full border border-line px-4 py-1.5 text-[11px] uppercase tracking-[2px] text-espresso">
                Coming Soon
              </div>
              <h3 className="font-serif text-[clamp(28px,5vw,44px)]">
                Bangkok · Q4 2026
              </h3>
              <p className="mx-auto mt-3 max-w-[440px] text-text-secondary">
                Our first Breakfast Club. Get notified the moment seats open.
              </p>
              <div className="mx-auto mt-7 max-w-[460px]">
                <NewsletterForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Target cities */}
      <section className="border-t border-line-subtle py-16 md:py-20">
        <div className="mx-auto max-w-container px-6 text-center md:px-10">
          <Reveal>
            <div className="mb-6 text-[11px] uppercase tracking-[3px] text-text-muted">
              On the map
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {TARGET_CITIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-line bg-bg-elevated px-5 py-2.5 text-[15px] text-text-secondary"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sponsor CTA */}
      <section className="border-t border-line-subtle py-16 text-center md:py-20">
        <Reveal className="mx-auto max-w-container px-6 md:px-10">
          <h2 className="mb-6 font-serif text-[clamp(28px,4vw,42px)]">
            Want to <em className="italic text-espresso">sponsor</em> a Breakfast Club?
          </h2>
          <a href="/partner#events" className="btn btn-primary">
            Sponsor an Event →
          </a>
        </Reveal>
      </section>
    </SiteShell>
  );
}
