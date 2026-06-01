"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { EpisodeThumb } from "./EpisodeThumb";
import { guestName, type Episode } from "@/lib/content";

export function EpisodesBrowser({ episodes }: { episodes: Episode[] }) {
  const [q, setQ] = useState("");
  const real = episodes.filter((e) => !e.comingSoon);
  const soon = episodes.filter((e) => e.comingSoon);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return real;
    return real.filter(
      (e) =>
        e.title.toLowerCase().includes(s) ||
        (e.guestSlug && guestName(e.guestSlug).toLowerCase().includes(s)) ||
        e.excerpt.toLowerCase().includes(s) ||
        e.tags.some((t) => t.toLowerCase().includes(s))
    );
  }, [q, real]);

  return (
    <div>
      <div className="mb-10 max-w-[460px]">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by guest, topic, or keyword…"
          aria-label="Search episodes"
          className="w-full rounded-full border border-line bg-bg-card px-5 py-3 text-[15px] text-text placeholder:text-text-muted focus:border-espresso focus:outline-none"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-text-muted">
          No episodes match your search. Try a different term.
        </p>
      ) : (
        <div className="divide-y divide-line-subtle border-y border-line-subtle">
          {filtered.map((ep) => (
            <Link
              key={ep.slug}
              href={`/episodes/${ep.slug}`}
              className="group flex flex-col gap-5 py-7 sm:flex-row"
            >
              <div className="w-full overflow-hidden rounded-xl sm:w-[260px] sm:flex-none">
                <EpisodeThumb
                  num={ep.num}
                  duration={ep.duration}
                  youtubeId={ep.youtubeId}
                  title={ep.title}
                  className="rounded-xl"
                />
              </div>
              <div className="flex-1">
                <div className="font-mono text-[11px] tracking-wide text-espresso">
                  EP #{ep.num}
                  {ep.date ? ` · ${ep.date}` : ""}
                  {ep.duration ? ` · ${ep.duration}` : ""}
                </div>
                <h3 className="mt-1.5 font-serif text-[24px] leading-tight transition-colors group-hover:text-espresso-bright">
                  {ep.title}
                </h3>
                {ep.guestSlug && (
                  <div className="mt-0.5 text-sm text-text-muted">
                    with {guestName(ep.guestSlug)}
                  </div>
                )}
                {ep.excerpt && (
                  <p className="mt-3 max-w-[640px] text-[15px] text-text-secondary">
                    {ep.excerpt}
                  </p>
                )}
                {ep.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {ep.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-[11px] text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Coming-soon fillers (hidden while searching) */}
      {soon.length > 0 && q.trim() === "" && (
        <div className="mt-12">
          <div className="mb-5 text-[11px] uppercase tracking-[3px] text-text-muted">
            On the way
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {soon.map((ep) => (
              <div
                key={ep.slug}
                className="overflow-hidden rounded-2xl border border-line-subtle bg-bg-card/50"
              >
                <EpisodeThumb num={ep.num} comingSoon />
                <div className="px-5 py-5 text-center">
                  <p className="text-sm text-text-muted">
                    New conversation brewing ☕
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
