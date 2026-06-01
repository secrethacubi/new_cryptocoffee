import { LatestEpisodes } from "./LatestEpisodes";
import { AboutStrip } from "./AboutStrip";
import { MeetHost } from "./MeetHost";
import { FeaturedGuests } from "./FeaturedGuests";
import { Platforms } from "./Platforms";
import { Newsletter } from "./Newsletter";
import { PartnerCTA } from "./PartnerCTA";

export function CommonSections() {
  return (
    <>
      <LatestEpisodes />
      <AboutStrip />
      <MeetHost />
      <FeaturedGuests />
      <Platforms />
      <Newsletter />
      <PartnerCTA />
    </>
  );
}
