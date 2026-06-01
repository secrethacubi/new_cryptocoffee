import type { ReactNode } from "react";

// Styled long-form text wrapper for blog posts, show notes, and legal pages.
export function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "max-w-[720px] text-text-secondary " +
        "[&>p]:mb-5 [&>p]:text-[17px] [&>p]:leading-[1.85] " +
        "[&>h2]:mb-3 [&>h2]:mt-10 [&>h2]:font-serif [&>h2]:text-[26px] [&>h2]:text-text " +
        "[&>h3]:mb-2 [&>h3]:mt-8 [&>h3]:text-[16px] [&>h3]:font-semibold [&>h3]:text-text " +
        "[&>ul]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>li]:mb-2 [&>li]:leading-[1.7] " +
        "[&_a]:text-espresso [&_a]:underline [&_a]:underline-offset-2 " +
        className
      }
    >
      {children}
    </div>
  );
}
