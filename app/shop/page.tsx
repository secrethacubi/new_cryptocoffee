import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Branded mugs, espresso-toned apparel, and gift kits with QR codes to your favourite episodes. Coming soon.",
};

const PRODUCTS = [
  { name: "Branded Coffee Mug", image: "/images/shop/mug.jpg" },
  { name: "Espresso Hoodie", image: "/images/shop/hoodie.jpg" },
  { name: "C&C Cap", image: "/images/shop/cap.jpg" },
  { name: "Gift Kit + QR Cards", image: "/images/shop/gift-kit.jpg" },
];

export default function ShopPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Coming Soon"
        title={
          <>
            The C&amp;C <em className="italic text-espresso">Shop</em>
          </>
        }
        subtitle="Branded mugs, espresso-toned apparel, and gift kits with QR codes to your favourite episodes. Launching soon."
      />

      <section className="mx-auto max-w-container px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="overflow-hidden rounded-2xl border border-line-subtle bg-bg-card">
                <div
                  className="relative aspect-square"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, rgba(200,149,108,0.18), transparent 60%), linear-gradient(135deg,#2A2621,#14110E)",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-serif text-[18px]">{p.name}</h2>
                  <div className="mt-1.5 inline-flex rounded-full border border-line px-3 py-1 text-[10px] uppercase tracking-wider text-text-muted">
                    Coming soon
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Notify */}
        <div
          className="mt-14 rounded-3xl border border-line-subtle p-10 text-center md:p-14"
          style={{
            background:
              "radial-gradient(ellipse 700px 400px at 50% 0%, rgba(200,149,108,0.12), transparent 70%), #1A1714",
          }}
        >
          <h2 className="mb-3 font-serif text-[clamp(26px,4vw,38px)]">
            Be first to <em className="italic text-espresso">brew</em>
          </h2>
          <p className="mx-auto mb-7 max-w-[440px] text-text-secondary">
            Drop your email and we&apos;ll let you know the moment the shop opens.
          </p>
          <div className="mx-auto max-w-[460px]">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
