import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-sm tracking-[0.2em] text-primary uppercase">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground uppercase">
        Off the map
      </h1>
      <p className="mt-3 text-muted">
        That page is outside the zone. Head back to the playbook.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground"
      >
        Return to Circle Call
      </Link>
    </main>
  );
}
