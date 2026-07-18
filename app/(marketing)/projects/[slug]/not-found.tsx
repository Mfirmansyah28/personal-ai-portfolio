import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-xl text-center">

        <h1 className="text-7xl font-bold text-primary">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold">
          Project Not Found
        </h2>

        <p className="mt-4 text-muted-foreground">
          Sorry, the project you are looking for does not exist or has been removed.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/projects">
            <Button>
              Back to Projects
            </Button>
          </Link>

          <Link href="/">
            <Button variant="outline">
              Go Home
            </Button>
          </Link>
        </div>

      </div>
    </main>
  );
}