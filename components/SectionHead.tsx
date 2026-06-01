import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHead({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  action?: { label: string; href: string };
}) {
  return (
    <Reveal>
      <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[3px] text-espresso">
            {eyebrow}
          </div>
          <h2 className="font-serif text-[clamp(30px,4vw,46px)] font-normal leading-[1.12] tracking-[-0.01em]">
            {title}
          </h2>
        </div>
        {action && (
          <a
            href={action.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-espresso transition-colors hover:text-espresso-bright"
          >
            {action.label}
          </a>
        )}
      </div>
    </Reveal>
  );
}
