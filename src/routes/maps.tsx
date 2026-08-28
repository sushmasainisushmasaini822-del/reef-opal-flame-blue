import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { MAPS } from "@/data/maps";

export const Route = createFileRoute("/maps")({
  component: MapsPage,
  head: () => ({ meta: [{ title: "Maps · Circle Call" }] }),
});

const RISK = {
  safe: "Quiet",
  mid: "Contested",
  hot: "Hot drop",
} as const;

function MapsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-mono text-2xs tracking-wider text-primary uppercase">
        Bermuda · Purgatory · Kalahari
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight uppercase sm:text-5xl">Maps</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Same sport, different problems. Bermuda is bridges and height. Purgatory is chained third
        parties. Kalahari is sand and sightlines. The IGL changes the drop, not the 12-alive rule.
      </p>

      <div className="mt-10 space-y-8">
        {MAPS.map((m) => (
          <article key={m.slug} className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)] sm:p-6">
            <p className="font-mono text-2xs tracking-wider text-primary uppercase">{m.tag}</p>
            <h2 className="mt-1 font-display text-3xl uppercase">{m.name}</h2>
            <p className="mt-3 max-w-2xl text-muted">{m.identity}</p>

            <h3 className="mt-8 font-display text-sm tracking-wide uppercase">Drops</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {m.drops.map((d) => (
                <li key={d.name} className="rounded-lg bg-surface p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">{d.name}</span>
                    <Badge variant={d.risk === "hot" ? "default" : "muted"}>{RISK[d.risk]}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted">{d.note}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-display text-sm tracking-wide uppercase">Rotate</h3>
                <ul className="mt-3 space-y-2">
                  {m.rotate.map((x) => (
                    <li key={x} className="text-sm text-foreground">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-sm tracking-wide uppercase">Late</h3>
                <ul className="mt-3 space-y-2">
                  {m.late.map((x) => (
                    <li key={x} className="text-sm text-foreground">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-6 rounded-lg bg-surface px-4 py-3 text-sm">
              <span className="font-medium text-primary">Death trap · </span>
              <span className="text-muted">{m.trap}</span>
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
