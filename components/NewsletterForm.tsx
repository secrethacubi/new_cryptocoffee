"use client";

import { useState } from "react";

export function NewsletterForm({
  variant = "full",
}: {
  variant?: "full" | "footer";
}) {
  const [done, setDone] = useState(false);

  if (variant === "footer") {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
        className="flex max-w-[320px] gap-2"
      >
        <input
          type="email"
          required
          disabled={done}
          aria-label="Email address"
          placeholder={done ? "☕ You're in!" : "Join the newsletter"}
          className="flex-1 rounded-full border border-line bg-bg px-[18px] py-2.5 text-sm text-text placeholder:text-text-muted focus:border-espresso focus:outline-none"
        />
        <button type="submit" className="btn btn-primary btn-sm" aria-label="Subscribe">
          →
        </button>
      </form>
    );
  }

  if (done) {
    return (
      <div className="font-serif text-[22px] text-espresso-bright">
        ☕ You&apos;re in! Check your inbox.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="mx-auto flex max-w-[480px] flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        aria-label="Email address"
        placeholder="your@email.com"
        className="flex-1 rounded-full border border-line bg-bg px-[22px] py-3.5 text-[15px] text-text placeholder:text-text-muted focus:border-espresso focus:outline-none"
      />
      <button type="submit" className="btn btn-primary justify-center">
        Join →
      </button>
    </form>
  );
}
