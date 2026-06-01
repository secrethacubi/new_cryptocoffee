import { Reveal } from "./Reveal";

export function PartnerCTA() {
  return (
    <section
      id="partner"
      className="border-y border-line-subtle px-6 py-[72px] text-center"
    >
      <Reveal className="mx-auto max-w-container">
        <div className="mb-5 text-[11px] uppercase tracking-[3px] text-text-muted">
          Trusted by partners in Web3
        </div>
        <div className="mb-10 flex flex-wrap justify-center gap-10 opacity-50">
          {["DTC Group", "Partner", "Partner"].map((n, i) => (
            <span key={i} className="font-serif text-[22px] text-text-muted grayscale">
              {n}
            </span>
          ))}
        </div>
        <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[3px] text-espresso">
          Partnership
        </div>
        <h2 className="mb-6 font-serif text-[clamp(30px,4vw,46px)] font-normal leading-[1.12]">
          Want to partner with{" "}
          <em className="italic text-espresso">Crypto &amp; Coffee?</em>
        </h2>
        <a href="/partner" className="btn btn-primary">
          Partner With Us →
        </a>
      </Reveal>
    </section>
  );
}
