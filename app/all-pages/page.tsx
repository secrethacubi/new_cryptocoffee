import type { Metadata } from "next";
import Link from "next/link";
import { EPISODES, GUESTS, BLOG_POSTS } from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "All Pages",
  description: "A clickable index of every page in the Crypto & Coffee site.",
};

type LinkItem = { label: string; href: string; external?: boolean };
type Group = { title: string; items: LinkItem[] };

const GROUPS: Group[] = [
  {
    title: "Core pages",
    items: [
      { label: "Home", href: "/" },
      { label: "Episodes", href: "/episodes" },
      { label: "About", href: "/about" },
      { label: "Partner With Us", href: "/partner" },
      { label: "Guests", href: "/guests" },
      { label: "Contact", href: "/contact" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Links Hub (standalone)", href: "/links" },
    ],
  },
  {
    title: "More pages",
    items: [
      { label: "Breakfast Club (Events)", href: "/events" },
      { label: "Blog / Insights", href: "/blog" },
      { label: "Shop", href: "/shop" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Episodes",
    items: EPISODES.filter((e) => !e.comingSoon).map((e) => ({
      label: `EP #${e.num} · ${e.title}`,
      href: `/episodes/${e.slug}`,
    })),
  },
  {
    title: "Guest profiles",
    items: GUESTS.map((g) => ({ label: g.name, href: `/guests/${g.slug}` })),
  },
  {
    title: "Blog posts",
    items: BLOG_POSTS.map((p) => ({ label: p.title, href: `/blog/${p.slug}` })),
  },
  {
    title: "System & SEO",
    items: [
      { label: "Sitemap (XML)", href: "/sitemap.xml", external: true },
      { label: "Robots.txt", href: "/robots.txt", external: true },
      { label: "404 page (example)", href: "/this-page-does-not-exist" },
    ],
  },
];

function Row({ item }: { item: LinkItem }) {
  const className =
    "group flex items-center justify-between gap-3 rounded-xl border border-line-subtle bg-bg-card px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-espresso";
  const inner = (
    <>
      <span className="truncate text-[15px] text-text transition-colors group-hover:text-espresso-bright">
        {item.label}
      </span>
      <span className="flex-none font-mono text-[11px] text-text-muted">
        {item.href}
        {item.external ? " ↗" : ""}
      </span>
    </>
  );
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className}>
      {inner}
    </Link>
  );
}

export default function AllPagesIndex() {
  const total = GROUPS.reduce((n, g) => n + g.items.length, 0);
  return (
    <SiteShell>
      <PageHeader
        eyebrow={`${total} links`}
        title={
          <>
            All <em className="italic text-espresso">pages</em>
          </>
        }
        subtitle="Every page in the project, one click away — no typing required."
      />
      <div className="mx-auto max-w-container px-6 py-16 md:px-10 md:py-20">
        <div className="space-y-12">
          {GROUPS.map((group) => (
            <section key={group.title}>
              <div className="mb-5 flex items-baseline gap-3">
                <h2 className="font-serif text-[24px]">{group.title}</h2>
                <span className="font-mono text-[12px] text-text-muted">
                  {group.items.length}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <Row key={item.href + item.label} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
