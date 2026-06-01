"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS, SOCIALS } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[1000] flex h-[var(--nav-h)] items-center border-b transition-all duration-300 ${
          scrolled
            ? "border-line-subtle bg-bg/80 backdrop-blur-md"
            : "border-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-container items-center justify-between px-6 md:px-10">
          <Logo />

          <ul className="hidden list-none items-center gap-7 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm font-medium text-text-secondary transition-colors hover:text-text"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-espresso transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a href="/newsletter" className="btn btn-primary btn-sm hidden md:inline-flex">
              Subscribe
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex flex-col gap-[5px] p-1.5 md:hidden"
              aria-label="Open menu"
            >
              <span className="h-0.5 w-6 rounded bg-text" />
              <span className="h-0.5 w-6 rounded bg-text" />
              <span className="h-0.5 w-6 rounded bg-text" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[1001] flex flex-col items-center justify-center gap-7 bg-bg/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-8 top-6 text-4xl leading-none text-text-muted"
          aria-label="Close menu"
        >
          &times;
        </button>
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-serif text-3xl text-text hover:text-espresso"
          >
            {l.label}
          </a>
        ))}
        <a
          href="/newsletter"
          onClick={() => setOpen(false)}
          className="btn btn-primary"
        >
          Subscribe ☕
        </a>
        <div className="mt-3 flex gap-5">
          {SOCIALS.slice(0, 4).map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              className="text-text-muted hover:text-espresso"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
