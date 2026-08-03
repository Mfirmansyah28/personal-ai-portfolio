import Link from "next/link";
import Container from "./Container";
import profile from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <Link href="/" className="text-sm font-semibold">
              MF.
            </Link>
            <p className="text-xs text-muted-foreground">
              AI Engineer — Building intelligent applications.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="/projects" className="transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} M. Firmansyah
          </p>
        </div>
      </Container>
    </footer>
  );
}
