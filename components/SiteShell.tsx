import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

// Standard page wrapper: fixed nav + content padded below it + footer.
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main id="top" className="pt-[var(--nav-h)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
