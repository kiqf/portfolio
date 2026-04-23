import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  id?: string;
  title: string;
};

export function SectionContainer({
  children,
  id,
  title,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-3xl border border-black/10 bg-white p-10 shadow-sm"
    >
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 text-base leading-7 text-neutral-600">{children}</div>
    </section>
  );
}
