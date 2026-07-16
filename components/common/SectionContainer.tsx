import { ReactNode } from "react";

interface Props {
    id?: string;
    children: ReactNode;
}

export default function SectionContainer ({
    id,
    children,
}: Props) {
    return (
        <section
            id={id}
            className="mx-auto max-w-7xl px-6 py-28"
        >
            {children}
        </section>
    );
}