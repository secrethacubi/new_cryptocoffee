import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Weekly insights from the best conversations in Web3 and beyond — straight to your inbox.",
};

const PERKS = [
  { title: "Weekly insights", body: "The best ideas from each conversation, distilled into a quick read." },
  { title: "New episode drops", body: "Be the first to know the moment a new episode lands." },
  { title: "Event invites", body: "First dibs on Breakfast Club seats near you." },
  { title: "No spam, ever", body: "One thoughtful email a week. Unsubscribe anytime." },
];

export default function NewsletterPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Newsletter"
        title={
          <>
            Stay in the <em className="italic text-espresso">loop</em>
          </>
        }
        subtitle="Weekly insights from the best conversations in Web3 & beyond — straight to your inbox."
      >
        <div className="mx-auto max-w-[460px]">
          <NewsletterForm />
          <div className="mt-3 text-xs text-text-muted">
            No spam. Unsubscribe anytime.
          </div>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-container px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line-subtle bg-bg-card p-7">
                <h2 className="mb-2 font-serif text-[20px]">{p.title}</h2>
                <p className="text-sm text-text-secondary">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
