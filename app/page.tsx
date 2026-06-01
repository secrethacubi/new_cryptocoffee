import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CommonSections } from "@/components/CommonSections";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <CommonSections />
      </main>
      <Footer />
    </>
  );
}
