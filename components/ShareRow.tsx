"use client";

import { useState } from "react";
import { XIcon, LinkedInIcon } from "./icons";

export function ShareRow({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const open = (href: string) =>
    window.open(href, "_blank", "noopener,noreferrer");

  const shareX = () =>
    open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(window.location.href)}`
    );
  const shareLinkedIn = () =>
    open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href
      )}`
    );
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const btn =
    "inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-text-secondary transition-colors hover:border-espresso hover:text-espresso-bright";

  return (
    <div className="flex flex-wrap gap-3">
      <button onClick={shareX} className={btn}>
        <XIcon className="h-4 w-4" /> Share
      </button>
      <button onClick={shareLinkedIn} className={btn}>
        <LinkedInIcon className="h-4 w-4" /> Share
      </button>
      <button onClick={copy} className={btn}>
        {copied ? "✓ Copied" : "Copy link"}
      </button>
    </div>
  );
}
