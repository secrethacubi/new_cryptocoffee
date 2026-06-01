import { PLATFORMS } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Platforms() {
  return (
    <section className="py-20 md:py-[100px]">
      <div className="mx-auto max-w-container px-6 text-center md:px-10">
        <Reveal>
          <div className="mb-7 text-[11px] uppercase tracking-[3px] text-text-muted">
            Watch &amp; Listen Everywhere
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-11 gap-y-7">
            {PLATFORMS.map(({ name, href, Icon, soon }) => (
              <a
                key={name}
                href={href}
                className="group flex flex-col items-center gap-2 text-text-muted transition-all duration-300 hover:-translate-y-1 hover:text-espresso-bright"
              >
                <Icon className="h-[30px] w-[30px]" />
                <span className="flex items-center gap-1.5 text-xs tracking-wide">
                  {name}
                  {soon && (
                    <span className="rounded-full border border-line px-1.5 text-[9px] uppercase tracking-wider text-espresso">
                      Soon
                    </span>
                  )}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
