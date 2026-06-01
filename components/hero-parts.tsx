import { PlayIcon, ChevronDownIcon } from "./icons";
import { AnimatedCounter } from "./AnimatedCounter";

export const HERO_SUB =
  "No hype. No noise. Just two people, a cup of coffee, and the space to go deep — hosted by Phil.";

export const HERO_STATS = [
  { value: "30+", label: "Episodes" },
  { value: "6", label: "Platforms" },
  { value: "10K+", label: "Community" },
];

export function HeroBadge({
  text = "A Web3 Culture & Conversation Platform",
}: {
  text?: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-elevated/50 px-5 py-2 text-[11px] uppercase tracking-[3px] text-espresso">
      <span className="animate-livepulse h-[7px] w-[7px] rounded-full bg-green" />
      {text}
    </div>
  );
}

export function HeroSubtitle({ className = "" }: { className?: string }) {
  return (
    <p
      className={`mx-auto max-w-[600px] text-[clamp(16px,2vw,19px)] font-light text-text-secondary ${className}`}
    >
      {HERO_SUB}
    </p>
  );
}

export function HeroCtas({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      <a href="#episodes" className="btn btn-primary">
        <PlayIcon className="h-[18px] w-[18px]" />
        Watch Latest Episode
      </a>
      <a href="#newsletter" className="btn btn-outline">
        Subscribe
      </a>
    </div>
  );
}

export function HeroStats({
  animate = false,
  className = "",
}: {
  animate?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-10 text-text-muted ${className}`}
    >
      {HERO_STATS.map((s) => (
        <div key={s.label}>
          <strong className="block font-serif text-3xl font-normal leading-tight text-text">
            {animate ? <AnimatedCounter value={s.value} /> : s.value}
          </strong>
          <span className="text-[11px] uppercase tracking-[1.5px]">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

export function ScrollCue() {
  return (
    <a
      href="#episodes"
      className="animate-scroll-cue absolute bottom-7 left-1/2 z-10 text-text-muted"
      aria-label="Scroll to episodes"
    >
      <ChevronDownIcon className="h-[22px] w-[22px]" />
    </a>
  );
}

export const HERO_SHELL =
  "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-28 text-center";
