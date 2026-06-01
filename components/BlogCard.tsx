import Link from "next/link";
import type { BlogPost } from "@/lib/content";

export function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block h-full overflow-hidden rounded-2xl border border-line-subtle bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:border-line hover:shadow-[0_14px_40px_rgba(0,0,0,0.4)] ${
        featured ? "md:grid md:grid-cols-2" : ""
      }`}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden ${
          featured ? "aspect-[16/10] md:aspect-auto" : "aspect-[16/9]"
        }`}
        style={{ background: "linear-gradient(135deg,#2A2621,#14110E)" }}
      >
        <span className="text-[40px] opacity-20" aria-hidden>
          ☕
        </span>
        <span className="absolute left-4 top-4 rounded-full bg-bg/70 px-3 py-1 text-[11px] text-espresso">
          {post.category}
        </span>
      </div>
      <div className={`p-6 ${featured ? "md:flex md:flex-col md:justify-center md:p-9" : ""}`}>
        <h3
          className={`font-serif leading-tight transition-colors group-hover:text-espresso-bright ${
            featured ? "text-[clamp(24px,3vw,34px)]" : "text-[22px]"
          }`}
        >
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-text-secondary">{post.excerpt}</p>
        <div className="mt-4 font-mono text-[11px] text-text-muted">
          {post.author} · {post.date} · {post.readingTime}
        </div>
      </div>
    </Link>
  );
}
