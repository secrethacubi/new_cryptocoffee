import Link from "next/link";
import { initials, type Guest } from "@/lib/content";

export function GuestCard({
  guest,
  size = "md",
}: {
  guest: Guest;
  size?: "sm" | "md";
}) {
  const dim =
    size === "sm"
      ? "h-[110px] w-[110px] text-[32px]"
      : "h-[140px] w-[140px] text-[40px]";
  return (
    <Link href={`/guests/${guest.slug}`} className="group block text-center">
      <div
        className={`mx-auto mb-4 flex ${dim} items-center justify-center rounded-full border border-line font-serif text-espresso/80 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-espresso`}
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(200,149,108,0.3), transparent 60%), linear-gradient(135deg,#2A2621,#14110E)",
        }}
      >
        {initials(guest.name)}
      </div>
      <div className="text-[15px] font-semibold text-text">{guest.name}</div>
      <div className="text-xs text-text-muted">
        {guest.title}
        {guest.company ? `, ${guest.company}` : ""}
      </div>
    </Link>
  );
}
