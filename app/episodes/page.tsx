import type { Metadata } from "next";
import { EPISODES } from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { EpisodesBrowser } from "@/components/EpisodesBrowser";

export const metadata: Metadata = {
  title: "Episodes",
  description: "Every conversation, from the first sip to the last.",
};

export default function EpisodesPage() {
  const eps = [...EPISODES].sort((a, b) => b.num - a.num);
  return (
    <SiteShell>
      <PageHeader
        eyebrow="The Library"
        title="Episodes"
        subtitle="Every conversation, from the first sip to the last."
      />
      <section className="mx-auto max-w-container px-6 py-16 md:px-10 md:py-20">
        <EpisodesBrowser episodes={eps} />
      </section>
    </SiteShell>
  );
}
