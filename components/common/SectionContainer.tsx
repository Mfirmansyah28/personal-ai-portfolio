import { ReactNode } from "react";

interface Props {
  id?: string;
  children: ReactNode;
}

export default function SectionContainer({ id, children }: Props) {
  return (
    <section id={id} className="border-b border-border py-24">
      {children}
    </section>
  );
}
