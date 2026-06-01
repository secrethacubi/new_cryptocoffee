import { Reveal } from "./Reveal";
import { NewsletterForm } from "./NewsletterForm";

export function Newsletter() {
  return (
    <section id="newsletter" className="py-20 md:py-[100px]">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <Reveal>
          <div
            className="rounded-3xl border border-line-subtle p-12 text-center md:p-16"
            style={{
              background:
                "radial-gradient(ellipse 700px 400px at 50% 0%, rgba(200,149,108,0.12), transparent 70%), #1A1714",
            }}
          >
            <h2 className="mb-3.5 font-serif text-[clamp(30px,4vw,46px)] font-normal leading-[1.12]">
              ☕ Stay in the <em className="italic text-espresso">loop</em>
            </h2>
            <p className="mx-auto mb-8 max-w-[480px] text-text-secondary">
              Get weekly insights from the best conversations in Web3 &amp;
              beyond — straight to your inbox.
            </p>
            <NewsletterForm />
            <div className="mt-4 text-xs text-text-muted">
              No spam. Unsubscribe anytime.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
