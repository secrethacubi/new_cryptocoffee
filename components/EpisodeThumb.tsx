import { PlayIcon } from "./icons";
import { YouTubeThumb } from "./YouTubeThumb";

// 16:9 thumbnail. Three states: coming-soon, real YouTube thumbnail, or
// branded number placeholder. Reveals a play button on parent `group` hover.
export function EpisodeThumb({
  num,
  duration,
  youtubeId,
  title,
  comingSoon = false,
  className = "",
}: {
  num: number;
  duration?: string;
  youtubeId?: string;
  title?: string;
  comingSoon?: boolean;
  className?: string;
}) {
  if (comingSoon) {
    return (
      <div
        className={`relative flex aspect-video flex-col items-center justify-center gap-2.5 overflow-hidden ${className}`}
        style={{ background: "linear-gradient(135deg,#211E1A,#161310)" }}
      >
        <span className="text-[26px] opacity-30" aria-hidden>
          ☕
        </span>
        <span className="rounded-full border border-line px-3 py-1 text-[10px] uppercase tracking-[2px] text-text-muted">
          Coming Soon
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative flex aspect-video items-center justify-center overflow-hidden ${className}`}
      style={{ background: "linear-gradient(135deg,#2A2621,#1A1714)" }}
    >
      {youtubeId ? (
        <YouTubeThumb id={youtubeId} alt={title ?? `Episode ${num}`} />
      ) : (
        <span className="font-serif text-[54px] text-text/10">{num}</span>
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-bg/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span
          className="flex h-14 w-14 scale-90 items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:scale-100"
          style={{ background: "linear-gradient(135deg,#C8956C,#D4A853)" }}
        >
          <PlayIcon className="ml-0.5 h-[22px] w-[22px] text-[#1A0F08]" />
        </span>
      </div>
      {duration && (
        <span className="absolute bottom-2.5 right-2.5 rounded bg-bg/80 px-2 py-0.5 font-mono text-[11px] text-cream">
          {duration}
        </span>
      )}
    </div>
  );
}
