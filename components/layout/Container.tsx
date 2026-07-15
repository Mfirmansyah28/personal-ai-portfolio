import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

export default function Container ({
    children,
}: ContainerProps) {
    return (
        <div className="mx-auto w-full max-w-7x1 px6 lg:px-8">
            {children}
        </div>
    );
}