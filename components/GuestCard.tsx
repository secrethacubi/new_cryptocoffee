import Image from "next/image";
import Link from "next/link";
import { initials, type Guest } from "@/lib/content";

export function GuestCard({
  guest,
  size = "md",
}: {
  guest: Guest;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "h-[110px] w-[110px]" : "h-[140px] w-[140px]";
  const textSize = size === "sm" ? "text-[32px]" : "text-[40px]";
  return (
    <Link href={`/guests/${guest.slug}`} className="group block text-center">
      <div
        className={`relative mx-auto mb-4 ${dim} overflow-hidden rounded-full border border-line transition-all duration-300 group-hover:-translate-y-1 group-hover:border-espresso`}
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(200,149,108,0.3), transparent 60%), linear-gradient(135deg,#2A2621,#14110E)",
        }}
      >
        {guest.image ? (
          <Image
            src={guest.image}
            alt={guest.name}
            fill
            sizes={size === "sm" ? "110px" : "140px"}
            className="object-cover"
          />
        ) : (
          <span
            className={`flex h-full w-full items-center justify-center font-serif ${textSize} text-espresso/80`}
          >
            {initials(guest.name)}
          </span>
        )}
      </div>
      <div className="text-[15px] font-semibold text-text">{guest.name}</div>
      <div className="text-xs text-text-muted">
        {guest.title}
        {guest.company ? `, ${guest.company}` : ""}
      </div>
    </Link>
  );
}
