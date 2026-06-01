import Image from "next/image";
import { Reveal } from "./Reveal";
import { XIcon } from "./icons";

export function MeetHost() {
  return (
    <section className="py-20 md:py-[100px]">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <Reveal>
          <div className="grid items-center gap-10 md:grid-cols-[280px_1fr] md:gap-14 lg:grid-cols-[320px_1fr]">
            <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-[20px] border border-line">
              <Image
                src="/images/host-phil.jpg"
                alt="Phil — host of Crypto & Coffee"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 280px"
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
              <h2 className="mb-[18px] font-serif text-[clamp(34px,5vw,52px)] font-normal leading-none">
                Phil
              </h2>
              <p className="mx-auto mb-[18px] max-w-[560px] italic text-text-muted md:mx-0">
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
  );
}
