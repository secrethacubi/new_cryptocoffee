import Link from "next/link";
import { EpisodeThumb } from "./EpisodeThumb";
import { guestName, type Episode } from "@/lib/content";

export function EpisodeCard({ ep }: { ep: Episode }) {
  if (ep.comingSoon) {
    return (
      <div className="h-full overflow-hidden rounded-2xl border border-line-subtle bg-bg-card/50">
        <EpisodeThumb num={ep.num} comingSoon />
        <div className="px-5 py-5 text-center">
          <p className="text-sm text-text-muted">New conversation brewing ☕</p>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/episodes/${ep.slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-line-subtle bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:border-line hover:shadow-[0_14px_40px_rgba(0,0,0,0.4)]"
    >
      <EpisodeThumb
        num={ep.num}
        duration={ep.duration}
        youtubeId={ep.youtubeId}
        title={ep.title}
      />
      <div className="px-[22px] pb-6 pt-5">
        <div className="mb-2 font-mono text-[11px] tracking-wide text-espresso">
          EP #{ep.num}
          {ep.date ? ` · ${ep.date}` : ""}
        </div>
        <h3 className="mb-1.5 font-serif text-[21px] leading-tight">{ep.title}</h3>
        {ep.guestSlug && (
          <p className="text-sm text-text-muted">with {guestName(ep.guestSlug)}</p>
        )}
      </div>
    </Link>
  );
}
