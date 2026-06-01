import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { SOCIALS, NAV_LINKS } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line-subtle bg-bg-elevated pb-9 pt-[72px]">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <div className="mb-14 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.4fr]">
          <div>
            <Logo className="mb-[18px]" />
            <p className="mb-[22px] max-w-[300px] text-sm text-text-secondary">
              Meaningful conversations with the builders, thinkers, and creators
              shaping tomorrow.
            </p>
            <NewsletterForm variant="footer" />
          </div>

          <div>
            <h4 className="mb-[18px] text-[11px] font-semibold uppercase tracking-[2px] text-espresso">
              Explore
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-text-secondary hover:text-text"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-text">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-[18px] text-[11px] font-semibold uppercase tracking-[2px] text-espresso">
              Follow Along
            </h4>
            <div className="flex gap-4">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-espresso hover:text-espresso-bright"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line-subtle pt-7 text-[13px] text-text-muted sm:flex-row sm:text-left">
          <div>© 2026 Crypto &amp; Coffee Show. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-text-secondary">
              Privacy
            </a>
            <a href="#" className="hover:text-text-secondary">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
