"use client";

import { useState } from "react";
import { PlayIcon } from "./icons";
import { YouTubeThumb } from "./YouTubeThumb";

// Lightweight player: shows the real thumbnail as a poster, loads the YouTube
// embed only on click (keeps the page fast — no iframe until the user plays).
export function YouTubePlayer({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group absolute inset-0 h-full w-full"
      aria-label={`Play: ${title}`}
    >
      <YouTubeThumb id={id} alt={title} />
      <span className="absolute inset-0 flex items-center justify-center bg-bg/30 transition-colors duration-300 group-hover:bg-bg/10">
        <span
          className="flex h-20 w-20 items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105"
          style={{ background: "linear-gradient(135deg,#C8956C,#D4A853)" }}
        >
          <PlayIcon className="ml-1 h-8 w-8 text-[#1A0F08]" />
        </span>
      </span>
    </button>
  );
}
