import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Prose } from "@/components/Prose";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { XIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "A modern Web3 culture and conversation platform centered around meaningful discussions with builders, thinkers, creators, and innovators.",
};

const STORY = [
  "Crypto & Coffee started with a simple observation: people who ignore cold outreach will happily accept a podcast invitation. What began as a strategic bridge for building relationships in Web3 quickly became something bigger — a platform where genuine, meaningful conversations could happen without the noise, the hype, or the performative energy that dominates the space.",
  "Founded by B through DTC Group and hosted by Phil, Crypto & Coffee sits at the intersection of Web3 culture, technology, and human connection. Every episode is built around one belief: the most interesting ideas come from the most genuine conversations. No scripts. No gotcha questions. Just two people, a cup of coffee, and the space to go deep.",
  "The show opens with The First Sip — a signature warm-up moment that sets the tone — and closes with The Last Sip, where every guest leaves the audience with one final thought worth carrying. In between, the conversation goes wherever curiosity leads.",
  "What makes Crypto & Coffee different isn't just the format. It's the intention. Every guest is hand-selected. Every conversation is prepared with real research, real curiosity, and real respect for the guest's time and story. And every relationship extends beyond the recording — because the best networks aren't built through transactions, they're built through trust.",
];

const PILLARS = [
  { title: "Warm & Intelligent", body: "Complex topics made approachable. We welcome people in — never talk down." },
  { title: "Relaxed & Optimistic", body: "Optimistic about what's being built, grounded in what's real. No hype, no doom." },
  { title: "Modern & Community-Driven", body: "Built for the internet-native generation. Future-facing, always." },
  { title: "Human-Centered", body: "People over protocols. Stories over specs. The person behind the project always comes first." },
];

const TEAM = [
  { name: "Mek", role: "Head of Marketing", line: "The strategist shaping how the world sees C&C." },
  { name: "Fata", role: "Operations Lead", line: "The engine that keeps every episode running on time." },
  { name: "Smith", role: "Art Director", line: "Every thumbnail, every graphic, every visual — that's Smith." },
  { name: "Hacubi & Ben", role: "Operations Support", line: "The backbone of daily operations and community." },
];

const FORMAT = [
  { icon: "☕", title: "The First Sip", body: "Every episode opens with The First Sip — a warm, signature moment that sets the tone for the conversation ahead." },
  { icon: "💬", title: "The Conversation", body: "No scripts, no rigid Q&A. Just genuine curiosity and the space to go deep on the ideas that matter." },
  { icon: "☕", title: "The Last Sip", body: "Every guest closes with one final thought — the takeaway worth carrying with you." },
];

const STATS = [
  { value: "30+", label: "Episodes" },
  { value: "6", label: "Platforms" },
  { value: "50+", label: "Guests" },
  { value: "10K+", label: "Community" },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About"
        title={
          <>
            More than a podcast — a platform for the conversations that shape{" "}
            <em className="italic text-espresso">the future</em>
          </>
        }
        subtitle="A modern Web3 culture and conversation platform centered around meaningful discussions with builders, thinkers, creators, and innovators."
      />

      {/* Story */}
      <section className="mx-auto max-w-container px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="mb-8 text-[11px] font-semibold uppercase tracking-[3px] text-espresso">
            The Story
          </div>
          <Prose className="text-[18px]">
            {STORY.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Prose>
        </Reveal>
      </section>

      {/* What We Believe */}
      <section className="border-t border-line-subtle py-16 md:py-20">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <Reveal>
            <h2 className="mb-10 font-serif text-[clamp(28px,4vw,40px)]">
              What we <em className="italic text-espresso">believe</em>
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line-subtle bg-bg-card p-7">
                  <h3 className="mb-2 font-serif text-[22px]">{p.title}</h3>
                  <p className="text-text-secondary">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Phil */}
      <section className="border-t border-line-subtle py-16 md:py-20">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <Reveal>
            <div className="grid items-center gap-10 md:grid-cols-[280px_1fr] md:gap-14">
              <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-[20px] border border-line">
                <Image
                  src="/images/host-phil.jpg"
                  alt="Phil — host of Crypto & Coffee"
                  fill
                  sizes="280px"
                  className="object-cover"
                  style={{ objectPosition: "center 22%" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 30%, rgba(200,149,108,0.12), transparent 55%), linear-gradient(180deg, transparent 45%, rgba(20,17,14,0.55))",
                  }}
                />
              </div>
              <div className="text-center md:text-left">
                <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[3px] text-espresso">
                  Host &amp; Partner
                </div>
                <h2 className="mb-4 font-serif text-[clamp(34px,5vw,52px)] font-normal leading-none">
                  Phil
                </h2>
                <p className="mx-auto mb-5 max-w-[560px] italic text-text-muted md:mx-0">
                  Bio coming soon — Phil&apos;s story, why he started Crypto &amp;
                  Coffee, and what drives every conversation.
                </p>
                <a
                  href="https://x.com/CryptoNCoffee_"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-espresso hover:text-espresso-bright"
                >
                  <XIcon className="h-4 w-4" /> Follow Phil
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Team */}
      <section className="border-t border-line-subtle py-16 md:py-20">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <Reveal>
            <h2 className="mb-10 font-serif text-[clamp(28px,4vw,40px)]">
              The <em className="italic text-espresso">team</em>
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line-subtle bg-bg-card p-6">
                  <div className="font-serif text-[22px]">{m.name}</div>
                  <div className="mb-3 text-[12px] uppercase tracking-wider text-espresso">
                    {m.role}
                  </div>
                  <p className="text-sm text-text-secondary">{m.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Format */}
      <section className="border-t border-line-subtle py-16 md:py-20">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <Reveal>
            <h2 className="mb-10 font-serif text-[clamp(28px,4vw,40px)]">
              The <em className="italic text-espresso">format</em>
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {FORMAT.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line-subtle bg-bg-card p-7">
                  <div className="mb-3 text-[32px]" aria-hidden>
                    {f.icon}
                  </div>
                  <h3 className="mb-2 font-serif text-[22px]">{f.title}</h3>
                  <p className="text-text-secondary">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-line-subtle py-16 md:py-20">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <Reveal>
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <AnimatedCounter
                    value={s.value}
                    className="block font-serif text-[clamp(36px,6vw,56px)] leading-none text-text"
                  />
                  <div className="mt-2 text-[11px] uppercase tracking-[2px] text-text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line-subtle py-16 text-center md:py-20">
        <Reveal className="mx-auto max-w-container px-6 md:px-10">
          <h2 className="mb-6 font-serif text-[clamp(28px,4vw,42px)]">
            Want to be part of <em className="italic text-espresso">the story?</em>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/partner" className="btn btn-primary">
              Partner With Us →
            </a>
            <a href="/contact" className="btn btn-outline">
              Be a Guest
            </a>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
