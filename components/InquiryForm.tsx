"use client";

import { useState } from "react";

const field =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-[15px] text-text placeholder:text-text-muted focus:border-espresso focus:outline-none";

export function InquiryForm({
  options,
  showCompany = false,
}: {
  options: string[];
  showCompany?: boolean;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-line-subtle bg-bg-card p-8 text-center">
        <div className="mb-2 font-serif text-[24px] text-espresso-bright">
          ☕ Thanks for reaching out.
        </div>
        <p className="text-text-secondary">
          We typically respond within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Name" aria-label="Name" className={field} />
        <input
          required
          type="email"
          placeholder="Email"
          aria-label="Email"
          className={field}
        />
      </div>
      {showCompany && (
        <input placeholder="Company" aria-label="Company" className={field} />
      )}
      <select
        required
        aria-label="Inquiry type"
        defaultValue=""
        className={`${field} appearance-none`}
      >
        <option value="" disabled>
          Which best describes you?
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <textarea
        required
        rows={5}
        placeholder="Your message"
        aria-label="Message"
        className={`${field} resize-none`}
      />
      <button type="submit" className="btn btn-primary justify-center sm:justify-self-start">
        Send Message
      </button>
    </form>
  );
}
