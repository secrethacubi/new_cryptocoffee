import type { Metadata } from "next";
import { GUESTS } from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { GuestCard } from "@/components/GuestCard";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Guests",
  description:
    "Builders, thinkers, creators — the people shaping what's next, in conversation with Crypto & Coffee.",
};

export default function GuestsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow={`${GUESTS.length} guests and counting`}
        title={
          <>
            Our <em className="italic text-espresso">guests</em>
          </>
        }
        subtitle="Builders, thinkers, creators — the people shaping what's next."
      />
      <section className="mx-auto max-w-container px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {GUESTS.map((g, i) => (
            <Reveal key={g.slug} delay={(i % 4) * 0.06}>
              <GuestCard guest={g} />
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
