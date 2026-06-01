import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  EPISODES,
  getEpisode,
  getGuest,
  guestName,
  relatedEpisodes,
  initials,
} from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { EpisodeCard } from "@/components/EpisodeCard";
import { ShareRow } from "@/components/ShareRow";
import { Prose } from "@/components/Prose";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PlayIcon, YouTubeIcon } from "@/components/icons";
import { YouTubePlayer } from "@/components/YouTubePlayer";

export function generateStaticParams() {
  return EPISODES.filter((e) => !e.comingSoon).map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const ep = getEpisode(params.slug);
  if (!ep) return {};
  return {
    title: ep.title,
    description: ep.excerpt,
    openGraph: { type: "video.other", title: ep.title, description: ep.excerpt },
  };
}

export default function EpisodeDetail({
  params,
}: {
  params: { slug: string };
}) {
  const ep = getEpisode(params.slug);
  if (!ep || ep.comingSoon) notFound();
  const guest = getGuest(ep.guestSlug);
  const related = relatedEpisodes(ep.slug, 3);

  return (
    <SiteShell>
      <article className="mx-auto max-w-[900px] px-6 py-14 md:px-10 md:py-16">
        <Link
          href="/episodes"
          className="text-sm text-text-muted transition-colors hover:text-espresso"
        >
          ← All episodes
        </Link>

        {/* Player */}
        <div
          className="relative mt-6 flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-line-subtle"
          style={{ background: "linear-gradient(135deg,#2A2621,#14110E)" }}
        >
          {ep.youtubeId ? (
            <YouTubePlayer id={ep.youtubeId} title={ep.title} />
          ) : (
            <>
              <span className="absolute left-5 top-3 font-serif text-[72px] text-text/10">
                {ep.num}
              </span>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(200,149,108,0.12), transparent 60%)",
                }}
              />
              <a
                href="https://youtube.com/@CryptoAndCoffeeShow"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col items-center gap-3 text-text-muted"
              >
                <span
                  className="flex h-20 w-20 items-center justify-center rounded-full shadow-lg"
                  style={{ background: "linear-gradient(135deg,#C8956C,#D4A853)" }}
                >
                  <PlayIcon className="ml-1 h-8 w-8 text-[#1A0F08]" />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider">
                  Watch on YouTube
                </span>
              </a>
            </>
          )}
        </div>

        {/* Title */}
        <div className="mt-7">
          <div className="font-mono text-[12px] tracking-wide text-espresso">
            EP #{ep.num}
            {ep.date ? ` · ${ep.date}` : ""}
            {ep.duration ? ` · ${ep.duration}` : ""}
          </div>
          <h1 className="mt-2 font-serif text-[clamp(30px,4.5vw,46px)] font-normal leading-[1.1] tracking-[-0.02em]">
            {ep.title}
          </h1>
          {ep.guestSlug && (
            <div className="mt-2 text-text-secondary">
              with {guestName(ep.guestSlug)}
            </div>
          )}
        </div>

        {/* Info bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-5 border-y border-line-subtle py-5">
          <ShareRow title={`${ep.title} — Crypto & Coffee`} />
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[2px] text-text-muted">
              Watch &amp; Listen On
            </span>
            <a
              href="https://youtube.com/@CryptoAndCoffeeShow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-text-secondary transition-colors hover:text-espresso-bright"
            >
              <YouTubeIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {ep.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-3 py-1 text-[12px] text-text-secondary"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Guest card */}
        {guest && (
          <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-line-subtle bg-bg-card p-6 sm:flex-row sm:items-center">
            <Link
              href={`/guests/${guest.slug}`}
              className="flex h-[88px] w-[88px] flex-none items-center justify-center rounded-full border border-line font-serif text-[28px] text-espresso/80"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, rgba(200,149,108,0.3), transparent 60%), linear-gradient(135deg,#2A2621,#14110E)",
              }}
            >
              {initials(guest.name)}
            </Link>
            <div>
              <div className="text-[11px] uppercase tracking-[2px] text-espresso">
                Guest
              </div>
              <Link
                href={`/guests/${guest.slug}`}
                className="font-serif text-[22px] hover:text-espresso-bright"
              >
                {guest.name}
              </Link>
              <div className="text-sm text-text-muted">
                {guest.title}
                {guest.company ? `, ${guest.company}` : ""}
              </div>
              <p className="mt-2 max-w-[560px] text-sm text-text-secondary">
                {guest.bio[0]}
              </p>
            </div>
          </div>
        )}

        {/* Show notes */}
        <div className="mt-12">
          <h2 className="mb-4 font-serif text-[26px]">Show notes</h2>
          <Prose>
            {ep.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Prose>
        </div>

        {/* Newsletter CTA */}
        <div
          className="mt-14 rounded-2xl border border-line-subtle p-8 text-center md:p-10"
          style={{
            background:
              "radial-gradient(ellipse 600px 300px at 50% 0%, rgba(200,149,108,0.12), transparent 70%), #1A1714",
          }}
        >
          <h2 className="mb-2 font-serif text-[26px]">
            Enjoyed this conversation?
          </h2>
          <p className="mx-auto mb-6 max-w-[420px] text-text-secondary">
            Get more like it every week — straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-line-subtle py-16 md:py-20">
          <div className="mx-auto max-w-container px-6 md:px-10">
            <h2 className="mb-8 font-serif text-[28px]">You might also enjoy</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <EpisodeCard key={r.slug} ep={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
