"use client";

import { useState } from "react";

// Renders a YouTube video's thumbnail. Tries the HD maxres image first and
// falls back to hqdefault (which always exists) if maxres isn't available.
export function YouTubeThumb({
  id,
  alt,
  className = "",
}: {
  id: string;
  alt: string;
  className?: string;
}) {
  const [src, setSrc] = useState(
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
  );
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setSrc(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
