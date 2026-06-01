import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 text-[64px]" aria-hidden>
          ☕
        </div>
        <div className="font-mono text-[12px] uppercase tracking-[3px] text-espresso">
          404
        </div>
        <h1 className="mt-3 font-serif text-[clamp(34px,6vw,56px)] font-normal leading-tight">
          This cup is <em className="italic text-espresso">empty</em>
        </h1>
        <p className="mx-auto mt-4 max-w-[440px] text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you back to a good conversation.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary">
            Back home
          </Link>
          <Link href="/episodes" className="btn btn-outline">
            Browse episodes
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
