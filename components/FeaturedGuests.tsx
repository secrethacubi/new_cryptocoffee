import { GUESTS } from "@/lib/content";
import { GuestCard } from "./GuestCard";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function FeaturedGuests() {
  return (
    <section id="guests" className="py-20 md:py-[100px]">
      <div className="mx-auto max-w-container px-6 md:px-10">
        <SectionHead
          eyebrow="Social proof"
          title={
            <>
              Conversations with{" "}
              <em className="italic text-espresso">remarkable people</em>
            </>
          }
          action={{ label: "See all guests →", href: "/guests" }}
        />
        <Reveal>
          <div
            className="no-scrollbar flex gap-6 overflow-x-auto pb-4 pt-1.5"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {GUESTS.map((g) => (
              <div
                key={g.slug}
                className="w-[160px] flex-none"
                style={{ scrollSnapAlign: "start" }}
              >
                <GuestCard guest={g} size="sm" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
