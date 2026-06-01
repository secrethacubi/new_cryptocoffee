import {
  XIcon,
  YouTubeIcon,
  InstagramIcon,
  TikTokIcon,
  LinkedInIcon,
  FacebookIcon,
  SpotifyIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/* ──────────────────────────────────────────────────────────────
   Episodes 1 & 2 are real (YouTube). The "coming soon" entries are
   intentional placeholders to fill out the grid until more publish.
   Durations/dates are omitted where not known — fill them in here.
   ────────────────────────────────────────────────────────────── */

export type Episode = {
  num: number;
  title: string;
  slug: string;
  guestSlug?: string;
  date?: string; // display, e.g. "May 2026"
  dateISO?: string;
  duration?: string; // "45:12"
  excerpt: string;
  description: string[];
  tags: string[];
  youtubeId?: string;
  featured?: boolean;
  comingSoon?: boolean;
};

export const EPISODES: Episode[] = [
  {
    num: 2,
    title: "The Opportunity Nobody Is Talking About",
    slug: "the-opportunity-nobody-is-talking-about",
    guestSlug: "rememberme",
    youtubeId: "PS521hKuW4U",
    excerpt:
      "RememberMe — founder of RememberUs and part of the IDBW team — on the Web3 opportunity most people are overlooking.",
    description: [
      "In Episode 2, the conversation turns to an opportunity hiding in plain sight — the one nobody seems to be talking about.",
      "RememberMe shares the thinking behind RememberUs and the IDBW team, and why timing and attention matter as much as the idea itself.",
    ],
    tags: ["Web3", "Builders"],
    featured: true,
  },
  {
    num: 1,
    title: "Why We Built This — The Story Behind Crypto & Coffee",
    slug: "why-we-built-this",
    guestSlug: "barami-rai",
    youtubeId: "f_7O1XauTjw",
    excerpt:
      "The origin story — why Crypto & Coffee exists, straight from Barami Rai, CEO of DTC Group.",
    description: [
      "Episode 1 is where it all starts. Barami Rai, CEO of DTC Group, sits down to explain why Crypto & Coffee was built and what it's meant to become.",
      "It's a candid look at the intention behind the show — the belief that the most interesting ideas come from the most genuine conversations.",
    ],
    tags: ["Founders", "Behind the Scenes"],
  },
  // Coming-soon fillers
  { num: 0, title: "Coming soon", slug: "coming-soon-1", excerpt: "", description: [], tags: [], comingSoon: true },
  { num: 0, title: "Coming soon", slug: "coming-soon-2", excerpt: "", description: [], tags: [], comingSoon: true },
  { num: 0, title: "Coming soon", slug: "coming-soon-3", excerpt: "", description: [], tags: [], comingSoon: true },
  { num: 0, title: "Coming soon", slug: "coming-soon-4", excerpt: "", description: [], tags: [], comingSoon: true },
];

export type Guest = {
  name: string;
  slug: string;
  title: string;
  company?: string;
  image?: string; // e.g. "/images/guests/barami-rai.jpg" — falls back to initials
  imagePosition?: string; // CSS object-position to frame the face, e.g. "center 20%"
  bio: string[];
  socials: { x?: string; linkedin?: string; website?: string };
  episodeSlugs: string[];
};

export const GUESTS: Guest[] = [
  {
    name: "Barami Rai",
    slug: "barami-rai",
    title: "CEO",
    company: "DTC Group",
    image: "/images/guests/barami-rai.jpg",
    imagePosition: "center 18%",
    bio: [
      "Barami Rai is the CEO of DTC Group and the founder behind Crypto & Coffee.",
      "On Episode 1, he shares the story of why the show exists and what he hopes it becomes.",
    ],
    socials: {},
    episodeSlugs: ["why-we-built-this"],
  },
  {
    name: "RememberMe",
    slug: "rememberme",
    title: "Founder",
    company: "RememberUs & IDBW",
    image: "/images/guests/rememberme.jpg",
    imagePosition: "center 30%",
    bio: [
      "RememberMe is the founder of RememberUs and part of the IDBW team.",
      "On Episode 2, the conversation digs into an opportunity in Web3 that most people are overlooking.",
    ],
    socials: {},
    episodeSlugs: ["the-opportunity-nobody-is-talking-about"],
  },
];

/* ── Helpers ── */
export function getEpisode(slug: string): Episode | undefined {
  return EPISODES.find((e) => e.slug === slug);
}
export function getGuest(slug?: string): Guest | undefined {
  return slug ? GUESTS.find((g) => g.slug === slug) : undefined;
}
export function guestName(slug?: string): string {
  return getGuest(slug)?.name ?? "Guest";
}
export function episodesByGuest(slug: string): Episode[] {
  return EPISODES.filter((e) => !e.comingSoon && e.guestSlug === slug).sort(
    (a, b) => b.num - a.num
  );
}
export function latestEpisodes(n = 3): Episode[] {
  const real = EPISODES.filter((e) => !e.comingSoon).sort((a, b) => b.num - a.num);
  const soon = EPISODES.filter((e) => e.comingSoon);
  return [...real, ...soon].slice(0, n);
}
export function relatedEpisodes(slug: string, n = 3): Episode[] {
  const ep = getEpisode(slug);
  const pool = EPISODES.filter((e) => e.slug !== slug && !e.comingSoon);
  if (!ep) return pool.slice(0, n);
  return pool
    .map((e) => ({ e, score: e.tags.filter((t) => ep.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score || b.e.num - a.e.num)
    .slice(0, n)
    .map((x) => x.e);
}

export function initials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/* ── Blog ── */
export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  dateISO: string;
  category: string;
  readingTime: string;
  excerpt: string;
  image?: string; // hero/thumbnail — falls back to a branded ☕ placeholder
  body: string[];
  relatedEpisodeSlug?: string;
  featured?: boolean;
};

export const BLOG_CATEGORIES = [
  "Episode Recaps",
  "Industry Analysis",
  "Guest Spotlights",
  "Behind the Scenes",
  "Web3 101",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-the-best-conversations-happen-over-coffee",
    title: "Why the Best Conversations Happen Over Coffee",
    author: "Phil",
    date: "May 2026",
    dateISO: "2026-05-20",
    category: "Behind the Scenes",
    readingTime: "4 min read",
    excerpt:
      "The format isn't an accident. Here's the thinking behind The First Sip, The Last Sip, and everything in between.",
    image: "/images/blog/conversations.jpg",
    body: [
      "When we started Crypto & Coffee, we made one rule: no scripts. The best moments in any conversation are the ones nobody planned, and you can't plan your way into them.",
      "The First Sip exists to lower the temperature. Before we talk about protocols or raises or the state of the market, we just talk like people. It changes everything that comes after.",
      "By the time we reach The Last Sip, the guest isn't performing anymore. That final thought — the one we ask everyone to leave the audience with — is almost always the part people remember.",
    ],
    relatedEpisodeSlug: "why-we-built-this",
    featured: true,
  },
  {
    slug: "the-opportunity-most-people-miss",
    title: "The Opportunity Most People Miss",
    author: "Mek",
    date: "May 2026",
    dateISO: "2026-05-12",
    category: "Industry Analysis",
    readingTime: "6 min read",
    excerpt:
      "A few quiet shifts are reshaping Web3 — and the biggest opportunities are the ones nobody's talking about.",
    image: "/images/blog/opportunity.jpg",
    body: [
      "Every cycle, attention rushes to the loudest narrative. Meanwhile the real openings tend to be quieter, slower, and easier to dismiss.",
      "We unpack a few of those overlooked corners — and why timing and attention often matter more than the idea itself.",
    ],
    relatedEpisodeSlug: "the-opportunity-nobody-is-talking-about",
  },
  {
    slug: "meet-barami-rai",
    title: "Guest Spotlight: Barami Rai",
    author: "Phil",
    date: "May 2026",
    dateISO: "2026-05-16",
    category: "Guest Spotlights",
    readingTime: "5 min read",
    excerpt: "The founder of DTC Group on why he built Crypto & Coffee — in his own words.",
    image: "/images/guests/barami-rai.jpg",
    body: [
      "Barami doesn't talk like most founders. He's more interested in the long game — relationships, trust, and the kind of conversations that compound over time.",
      "We caught up with him after Episode 1 to go deeper on the story behind the show.",
    ],
    relatedEpisodeSlug: "why-we-built-this",
  },
  {
    slug: "web3-101-what-is-an-onchain-agent",
    title: "Web3 101: What Is an Onchain Agent?",
    author: "Mek",
    date: "Apr 2026",
    dateISO: "2026-04-26",
    category: "Web3 101",
    readingTime: "6 min read",
    excerpt:
      "Software that can hold value and act on your behalf is no longer science fiction. A plain-English primer.",
    image: "/images/blog/web3-101.jpg",
    body: [
      "An onchain agent is software that can make decisions and move value without a human pressing the button each time. That's it — and that's a lot.",
      "Here's what they can and can't do today, minus the hype.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/* ── Partner ── */
export type PartnerTier = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
};

export const PARTNER_TIERS: PartnerTier[] = [
  {
    name: "The Sip",
    price: "Starting from $500 / episode",
    tagline: "A taste of the conversation.",
    features: ["Host-read shout-out", "Episode description link", "One social mention"],
  },
  {
    name: "The Brew",
    price: "Starting from $1,000 / episode",
    tagline: "A genuine integration.",
    features: ["Everything in The Sip", "Conversational host-read segment", "On-screen logo placement", "Newsletter mention"],
    highlight: true,
  },
  {
    name: "The Roast",
    price: "Starting from $3,000 / month",
    tagline: "An ongoing partnership.",
    features: ["Everything in The Brew", "Presence across the month's episodes", "Dedicated social package", "Priority guest alignment"],
  },
  {
    name: "The House Blend",
    price: "Starting from $10,000 / quarter",
    tagline: "Embedded in the brand.",
    features: ["Everything in The Roast", "Co-branded content series", "Breakfast Club event presence", "Custom collaboration"],
  },
];

export const PARTNER_ADDONS: { name: string; price: string }[] = [
  { name: "Spotlight Session", price: "from $2,000" },
  { name: "On-Screen Placement", price: "from $300 / ep" },
  { name: "Branded Segment", price: "from $500 / ep" },
  { name: "Social Package", price: "from $500 / mo" },
  { name: "Newsletter Sponsor", price: "from $300 / issue" },
  { name: "Content Series", price: "from $3,000" },
  { name: "Co-Branded Merch", price: "Custom" },
];

export const EVENT_TIERS: { name: string; price: string; desc: string }[] = [
  { name: "Community Table", price: "from $1,000 / event", desc: "A seat at the table — brand presence at an intimate Breakfast Club meetup." },
  { name: "Presenting Sponsor", price: "from $3,000 / event", desc: "Front-and-centre billing, branded moments, and recorded recognition." },
  { name: "Exclusive Co-Host", price: "from $5,000 / event", desc: "Co-host the room with us — the deepest possible integration." },
];

export const PARTNER_VALUE_PROPS = [
  { title: "Engaged Audience", body: "Young builders, founders, and investors who actually tune in — not passive impressions." },
  { title: "Premium Content", body: "Quality over volume. Every episode is crafted, not churned." },
  { title: "Multi-Platform Reach", body: "Six platforms, one trusted voice — YouTube, X, Instagram, TikTok, LinkedIn, Facebook." },
  { title: "Authentic Integration", body: "Host-read, conversational, and never forced. Partnerships that feel native." },
];

export const TARGET_CITIES = ["Bangkok", "Dubai", "Singapore", "Lisbon", "New York"];

/* ── Socials, platforms, nav ── */
export type Social = { name: string; href: string; Icon: Icon };

export const SOCIALS: Social[] = [
  { name: "X", href: "https://x.com/CryptoNCoffee_", Icon: XIcon },
  { name: "YouTube", href: "https://youtube.com/@CryptoAndCoffeeShow", Icon: YouTubeIcon },
  { name: "Instagram", href: "https://instagram.com/cryptoandcoffee_/", Icon: InstagramIcon },
  { name: "TikTok", href: "https://tiktok.com/@cryptoandcoffee", Icon: TikTokIcon },
  { name: "LinkedIn", href: "https://linkedin.com/company/crypto-coffee-show/", Icon: LinkedInIcon },
  { name: "Facebook", href: "https://facebook.com/61574422497951/", Icon: FacebookIcon },
];

export type Platform = { name: string; href: string; Icon: Icon; soon?: boolean };

export const PLATFORMS: Platform[] = [
  { name: "YouTube", href: "https://youtube.com/@CryptoAndCoffeeShow", Icon: YouTubeIcon },
  { name: "Spotify", href: "#", Icon: SpotifyIcon, soon: true },
  { name: "X / Spaces", href: "https://x.com/CryptoNCoffee_", Icon: XIcon },
  { name: "TikTok", href: "https://tiktok.com/@cryptoandcoffee", Icon: TikTokIcon },
  { name: "Instagram", href: "https://instagram.com/cryptoandcoffee_/", Icon: InstagramIcon },
  { name: "LinkedIn", href: "https://linkedin.com/company/crypto-coffee-show/", Icon: LinkedInIcon },
];

export const NAV_LINKS = [
  { label: "Episodes", href: "/episodes" },
  { label: "About", href: "/about" },
  { label: "Guests", href: "/guests" },
  { label: "Partner", href: "/partner" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT = {
  email: "business@dtcgroup.xyz",
  telegram: "https://t.me/DTCGroupBusiness",
  telegramHandle: "@DTCGroupBusiness",
};
