import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, getPost, getEpisode, guestName, initials } from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { Prose } from "@/components/Prose";
import { ShareRow } from "@/components/ShareRow";
import { BlogCard } from "@/components/BlogCard";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", title: post.title, description: post.excerpt },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  const ep = post.relatedEpisodeSlug ? getEpisode(post.relatedEpisodeSlug) : undefined;

  return (
    <SiteShell>
      <article className="mx-auto max-w-[760px] px-6 py-14 md:px-10 md:py-16">
        <Link
          href="/blog"
          className="text-sm text-text-muted transition-colors hover:text-espresso"
        >
          ← All posts
        </Link>

        <div className="mt-6 text-[12px] uppercase tracking-[2px] text-espresso">
          {post.category}
        </div>
        <h1 className="mt-3 font-serif text-[clamp(30px,5vw,52px)] font-normal leading-[1.1] tracking-[-0.02em]">
          {post.title}
        </h1>

        <div className="mt-5 flex items-center gap-3 border-b border-line-subtle pb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line font-serif text-sm text-espresso/80">
            {initials(post.author)}
          </span>
          <div className="text-sm text-text-muted">
            <span className="text-text">{post.author}</span> · {post.date} ·{" "}
            {post.readingTime}
          </div>
        </div>

        {/* Hero image placeholder */}
        <div
          className="mt-8 flex aspect-[16/8] items-center justify-center rounded-2xl border border-line-subtle"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(200,149,108,0.15), transparent 60%), linear-gradient(135deg,#2A2621,#14110E)",
          }}
        >
          <span className="text-[44px] opacity-20" aria-hidden>
            ☕
          </span>
        </div>

        {/* Body */}
        <div className="mt-10">
          <Prose>
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Prose>
        </div>

        {/* Related episode */}
        {ep && (
          <Link
            href={`/episodes/${ep.slug}`}
            className="group mt-10 flex items-center justify-between gap-4 rounded-2xl border border-line-subtle bg-bg-card p-5 transition-colors hover:border-espresso"
          >
            <div>
              <div className="text-[11px] uppercase tracking-[2px] text-espresso">
                Listen to the episode
              </div>
              <div className="mt-1 font-serif text-[20px] group-hover:text-espresso-bright">
                {ep.title}
              </div>
              <div className="text-sm text-text-muted">
                with {guestName(ep.guestSlug)}
              </div>
            </div>
            <span className="text-espresso">→</span>
          </Link>
        )}

        {/* Share */}
        <div className="mt-10 border-t border-line-subtle pt-6">
          <ShareRow title={`${post.title} — Crypto & Coffee`} />
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-line-subtle py-16 md:py-20">
          <div className="mx-auto max-w-container px-6 md:px-10">
            <h2 className="mb-8 font-serif text-[28px]">Keep reading</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
