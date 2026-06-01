import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  GUESTS,
  getGuest,
  episodesByGuest,
  initials,
} from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { EpisodeCard } from "@/components/EpisodeCard";
import { Prose } from "@/components/Prose";
import { XIcon, LinkedInIcon } from "@/components/icons";

export function generateStaticParams() {
  return GUESTS.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const guest = getGuest(params.slug);
  if (!guest) return {};
  return {
    title: `${guest.name} — Guest`,
    description: `${guest.name}, ${guest.title}${
      guest.company ? ` at ${guest.company}` : ""
    }, in conversation with Crypto & Coffee.`,
  };
}

export default function GuestProfile({
  params,
}: {
  params: { slug: string };
}) {
  const guest = getGuest(params.slug);
  if (!guest) notFound();
  const eps = episodesByGuest(guest.slug);

  const social =
    "inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-text-secondary transition-colors hover:border-espresso hover:text-espresso-bright";

  return (
    <SiteShell>
      <section className="mx-auto max-w-[900px] px-6 py-14 md:px-10 md:py-16">
        <Link
          href="/guests"
          className="text-sm text-text-muted transition-colors hover:text-espresso"
        >
          ← All guests
        </Link>

        <div className="mt-8 flex flex-col items-center gap-7 text-center sm:flex-row sm:items-center sm:text-left">
          <div
            className="flex h-[150px] w-[150px] flex-none items-center justify-center rounded-full border border-line font-serif text-[48px] text-espresso/80"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(200,149,108,0.3), transparent 60%), linear-gradient(135deg,#2A2621,#14110E)",
            }}
          >
            {initials(guest.name)}
          </div>
          <div>
            <h1 className="font-serif text-[clamp(34px,5vw,52px)] font-normal leading-none">
              {guest.name}
            </h1>
            <div className="mt-3 text-text-secondary">
              {guest.title}
              {guest.company ? `, ${guest.company}` : ""}
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
              {guest.socials.x && (
                <a href={guest.socials.x} target="_blank" rel="noopener noreferrer" className={social}>
                  <XIcon className="h-4 w-4" /> X
                </a>
              )}
              {guest.socials.linkedin && (
                <a href={guest.socials.linkedin} target="_blank" rel="noopener noreferrer" className={social}>
                  <LinkedInIcon className="h-4 w-4" /> LinkedIn
                </a>
              )}
              {guest.socials.website && (
                <a href={guest.socials.website} target="_blank" rel="noopener noreferrer" className={social}>
                  Website ↗
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Prose>
            {guest.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Prose>
        </div>
      </section>

      {eps.length > 0 && (
        <section className="border-t border-line-subtle py-16 md:py-20">
          <div className="mx-auto max-w-container px-6 md:px-10">
            <h2 className="mb-8 font-serif text-[28px]">
              {guest.name.split(" ")[0]} on the show
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {eps.map((ep) => (
                <EpisodeCard key={ep.slug} ep={ep} />
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
