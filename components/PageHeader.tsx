import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <section className="relative overflow-hidden border-b border-line-subtle">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 520px at 50% -10%, rgba(200,149,108,0.12), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-container px-6 py-20 md:px-10 md:py-28">
        <div className={centered ? "mx-auto max-w-[760px] text-center" : "max-w-[760px]"}>
          {eyebrow && (
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[3px] text-espresso">
              {eyebrow}
            </div>
          )}
          <h1 className="font-serif text-[clamp(34px,5.5vw,60px)] font-normal leading-[1.08] tracking-[-0.02em]">
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-5 text-[clamp(15px,2vw,18px)] text-text-secondary ${
                centered ? "mx-auto max-w-[600px]" : "max-w-[600px]"
              }`}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
