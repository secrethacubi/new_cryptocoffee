import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import { latestEpisodes, CONTACT } from "@/lib/content";
import {
  YouTubeIcon,
  XIcon,
  InstagramIcon,
  TikTokIcon,
  LinkedInIcon,
  FacebookIcon,
  SpotifyIcon,
  PlayIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "All Links",
  description:
    "Crypto & Coffee — every link in one place. Watch, follow, partner, and get in touch.",
};

type Icon = ComponentType<SVGProps<SVGSVGElement>>;
type LinkItem = {
  label: string;
  href: string;
  Icon?: Icon;
  emoji?: string;
  variant?: "social" | "cta" | "muted";
  external?: boolean;
};

const latest = latestEpisodes(1)[0];

const LINKS: LinkItem[] = [
  { label: "Watch Latest Episode", href: `/episodes/${latest.slug}`, Icon: PlayIcon, variant: "cta" },
  { label: "YouTube", href: "https://youtube.com/@CryptoAndCoffeeShow", Icon: YouTubeIcon, external: true },
  { label: "Follow on X", href: "https://x.com/CryptoNCoffee_", Icon: XIcon, external: true },
  { label: "Instagram", href: "https://instagram.com/cryptoandcoffee_/", Icon: InstagramIcon, external: true },
  { label: "TikTok", href: "https://tiktok.com/@cryptoandcoffee", Icon: TikTokIcon, external: true },
  { label: "LinkedIn", href: "https://linkedin.com/company/crypto-coffee-show/", Icon: LinkedInIcon, external: true },
  { label: "Facebook", href: "https://facebook.com/61574422497951/", Icon: FacebookIcon, external: true },
  { label: "Spotify — Coming Soon", href: "#", Icon: SpotifyIcon, variant: "muted" },
  { label: "Visit Our Website", href: "/", emoji: "🌐" },
];

const CTA_LINKS: LinkItem[] = [
  { label: "Partner With Us", href: "/partner", emoji: "☕", variant: "cta" },
  { label: "Contact Us on Telegram", href: CONTACT.telegram, emoji: "💬", variant: "cta", external: true },
  { label: "Email Us", href: `mailto:${CONTACT.email}`, emoji: "📧", variant: "muted" },
];

function LinkButton({ item, index }: { item: LinkItem; index: number }) {
  const base =
    "animate-linkin flex items-center justify-center gap-2.5 rounded-xl border px-4 py-3.5 text-[15px] font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]";
  const variant =
    item.variant === "cta"
      ? "border-espresso-deep bg-espresso-glow text-espresso-bright hover:border-espresso"
      : item.variant === "muted"
        ? "border-line-subtle text-text-muted hover:border-line"
        : "border-line text-text hover:border-espresso hover:text-espresso-bright";
  const inner = (
    <>
      {item.Icon ? <item.Icon className="h-[18px] w-[18px]" /> : <span aria-hidden>{item.emoji}</span>}
      <span>{item.label}</span>
    </>
  );
  const style = { animationDelay: `${index * 55}ms` };

  if (item.variant === "muted" && item.href === "#") {
    return (
      <div className={`${base} ${variant} cursor-default`} style={style}>
        {inner}
      </div>
    );
  }
  return (
    <a
      href={item.href}
      style={style}
      className={`${base} ${variant}`}
      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  );
}

export default function LinksPage() {
  let i = 0;
  return (
    <main className="flex min-h-screen flex-col items-center px-5 py-12">
      <div className="relative w-full max-w-[420px] text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 -translate-y-10 rounded-full blur-[70px]"
          style={{ background: "radial-gradient(circle, rgba(200,149,108,0.22), transparent 70%)" }}
        />
        <div className="relative">
          <div className="mx-auto mb-5 text-[56px] leading-none" aria-hidden>
            ☕
          </div>
          <h1 className="font-serif text-[26px] leading-tight">Crypto &amp; Coffee</h1>
          <p className="mt-1 text-sm text-text-muted">
            Web3 culture &amp; conversation platform
          </p>
          <p className="text-sm text-text-muted">Hosted by Phil</p>

          <div className="mt-8 flex flex-col gap-2.5">
            {LINKS.map((item) => (
              <LinkButton key={item.label} item={item} index={i++} />
            ))}
            <div className="my-2 h-px bg-line-subtle" />
            {CTA_LINKS.map((item) => (
              <LinkButton key={item.label} item={item} index={i++} />
            ))}
          </div>

          <p className="mt-10 text-xs text-text-muted">
            © Crypto &amp; Coffee · DTC Group
          </p>
        </div>
      </div>
    </main>
  );
}
