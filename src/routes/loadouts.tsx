import { createFileRoute, Link } from "@tanstack/react-router";
import { CHARACTERS, COMBOS, WEAPONS } from "@/data/loadouts";

export const Route = createFileRoute("/loadouts")({
  component: LoadoutsPage,
  head: () => ({ meta: [{ title: "Loadouts · Circle Call" }] }),
});

function LoadoutsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-mono text-2xs tracking-wider text-primary uppercase">
        Characters · guns
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight uppercase sm:text-5xl">Loadouts</h1>
      <p className="mt-3 max-w-2xl text-muted">
        How league rosters actually spend abilities — not a tier-list thumbnail. Alok is default
        because four people heal. Chrono is a rotate. Maro is a lane.
      </p>

      <section className="mt-10">
        <h2 className="font-display text-2xl tracking-tight uppercase">Comps</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {COMBOS.map((c) => (
            <article key={c.name} className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-xl uppercase">{c.name}</h3>
              <p className="mt-2 text-sm text-primary">{c.line}</p>
              <p className="mt-2 text-sm text-muted">{c.why}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl tracking-tight uppercase">Guns by range</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {WEAPONS.map((w) => (
            <article key={w.range} className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
              <p className="font-mono text-2xs tracking-wider text-primary uppercase">
                {w.range}
              </p>
              <h3 className="mt-2 font-display text-xl uppercase">{w.guns}</h3>
              <p className="mt-2 text-sm text-muted">{w.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl tracking-tight uppercase">Characters in series</h2>
        <ul className="mt-4 divide-y divide-border rounded-xl bg-card shadow-[var(--shadow-border)]">
          {CHARACTERS.map((c) => (
            <li key={c.name} className="px-5 py-5 sm:px-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl uppercase">{c.name}</h3>
                <p className="font-mono text-2xs tracking-wider text-muted uppercase">
                  {c.role}
                </p>
              </div>
              <p className="mt-1 text-sm text-primary">{c.ability}</p>
              <p className="mt-2 text-sm text-muted">{c.proUse}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-sm text-muted">
        Ability timing is covered in{" "}
        <Link
          to="/playbook/$slug"
          params={{ slug: "alok-precast" }}
          className="text-foreground underline-offset-4 hover:underline"
        >
          Alok pre-cast
        </Link>{" "}
        and{" "}
        <Link
          to="/playbook/$slug"
          params={{ slug: "chrono-rotate" }}
          className="text-foreground underline-offset-4 hover:underline"
        >
          Chrono rotates
        </Link>
        .
      </p>
    </main>
  );
}
