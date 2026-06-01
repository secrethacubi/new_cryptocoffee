import type { Metadata } from "next";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles, recaps, and analysis from the Crypto & Coffee team — the written companion to the conversations.",
};

export default function BlogPage() {
  const featured = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
  const rest = BLOG_POSTS.filter((p) => p.slug !== featured.slug);

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Insights"
        title={
          <>
            The <em className="italic text-espresso">blog</em>
          </>
        }
        subtitle="Articles, recaps, and analysis — the written companion to the conversations."
      />

      <section className="mx-auto max-w-container px-6 py-16 md:px-10 md:py-20">
        {/* Categories */}
        <div className="mb-10 flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line px-4 py-1.5 text-[12px] text-text-secondary"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Featured */}
        <Reveal>
          <BlogCard post={featured} featured />
        </Reveal>

        {/* Grid */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
