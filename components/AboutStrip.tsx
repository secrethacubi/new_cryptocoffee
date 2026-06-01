import { Reveal } from "./Reveal";

export function AboutStrip() {
  return (
    <section id="about" className="py-20 md:py-[100px]">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <Reveal>
          <div className="grid items-center gap-12 overflow-hidden rounded-[20px] border border-line-subtle bg-bg-elevated p-10 md:p-14 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[3px] text-espresso">
                More than a podcast
              </div>
              <p className="font-serif text-[clamp(24px,3vw,34px)] leading-[1.3]">
                A platform for the conversations that shape the future of{" "}
                <em className="italic text-espresso">Web3, AI, and culture.</em>
              </p>
              <p className="my-7 max-w-[520px] text-text-secondary">
                Every guest is hand-selected. Every conversation is built on
                real research, real curiosity, and real respect — the kind of
                talk you&apos;d genuinely enjoy over coffee.
              </p>
              <a href="/about" className="btn btn-outline btn-sm">
                Learn More →
              </a>
            </div>
            <div
              className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-line lg:aspect-[4/5]"
              style={{
                background:
                  "radial-gradient(circle at 40% 30%, rgba(200,149,108,0.22), transparent 55%), linear-gradient(135deg,#2A2621,#14110E)",
              }}
            >
              <span className="text-6xl opacity-35" aria-hidden>
                ☕
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
