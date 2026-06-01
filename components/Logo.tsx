import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#top"
      className={`flex items-center gap-2.5 font-serif text-[22px] leading-none ${className}`}
    >
      <span aria-hidden>☕</span>
      <span>
        Crypto <span className="italic text-espresso">&amp;</span> Coffee
      </span>
    </Link>
  );
}
