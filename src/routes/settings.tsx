import { createFileRoute, Link } from "@tanstack/react-router";
import { HUD_RULES, SENS_NOTES, SENS_PRESETS } from "@/data/hud";

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
  head: () => ({ meta: [{ title: "HUD & sensitivity · Circle Call" }] }),
});

function SettingsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-mono text-2xs tracking-wider text-primary uppercase">
        Hands · sliders
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight uppercase sm:text-5xl">
        HUD and sensitivity
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Pros do not win because they pasted a HUD code from a thumbnail. They win because the wall
        button is under the finger that already moves, fire is on a claw index, and sniper
        sensitivity is low enough not to over-flick.
      </p>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {HUD_RULES.map((r) => (
          <article key={r.title} className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-xl uppercase">{r.title}</h2>
            <p className="mt-2 text-sm text-muted">{r.body}</p>
          </article>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl tracking-tight uppercase">Starting presets</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          These are ranges used by claw and thumb players, not a sacred code. Copy the shape. Adjust
          to your phone size. If your client is 0–200, keep the ratios.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {SENS_PRESETS.map((p) => (
            <article key={p.name} className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-xl uppercase">{p.name}</h3>
              <p className="mt-1 text-sm text-muted">{p.note}</p>
              <dl className="mt-4 space-y-2">
                {p.values.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-3 text-sm">
                    <dt className="text-muted">{k}</dt>
                    <dd className="text-right font-mono tabular-nums">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl bg-card p-5 shadow-[var(--shadow-border)] sm:p-6">
        <h2 className="font-display text-2xl tracking-tight uppercase">Do not</h2>
        <ul className="mt-4 space-y-2">
          {SENS_NOTES.map((n) => (
            <li key={n} className="text-sm text-muted">
              {n}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-sm text-muted">
        Pair this with the{" "}
        <Link
          to="/playbook/$slug"
          params={{ slug: "pre-aim-head" }}
          className="text-foreground underline-offset-4 hover:underline"
        >
          head-height pre-aim
        </Link>{" "}
        drill. Sensitivity without a head line is just faster missing.
      </p>
    </main>
  );
}
