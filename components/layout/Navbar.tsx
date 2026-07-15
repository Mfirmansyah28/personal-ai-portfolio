import Link from "next/link";
import Container from "./Container";

export default function Navbar () {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
            <Container>
                <nav className="flex h-16 items-center justify-between">
                    <Link
                        href="/"
                        className="text-x1 font-bold tracking-tight"
                    >
                        MFirmansyah
                    </Link>

                    <div className="hidden gap-8 md:flex">
                        <Link href="/">Home</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </nav>
            </Container>
        </header>
    );
}