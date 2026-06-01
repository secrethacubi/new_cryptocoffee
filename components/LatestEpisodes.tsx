import { latestEpisodes } from "@/lib/content";
import { EpisodeCard } from "./EpisodeCard";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function LatestEpisodes() {
  const eps = latestEpisodes(3);
  return (
    <section id="episodes" className="py-20 md:py-[100px]">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <SectionHead
          eyebrow="Fresh from the studio"
          title={
            <>
              Latest <em className="italic text-espresso">Episodes</em>
            </>
          }
          action={{ label: "View all episodes →", href: "/episodes" }}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {eps.map((ep, i) => (
            <Reveal key={ep.slug} delay={i * 0.08}>
              <EpisodeCard ep={ep} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
