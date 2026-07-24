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
            className="relative overflow-hidden py-24"
        >
            {children}
        </section>
    );
}