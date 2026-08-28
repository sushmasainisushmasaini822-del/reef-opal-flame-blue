import { createFileRoute, Link } from "@tanstack/react-router";
import { TipCard } from "@/components/tip-card";
import { ROLES } from "@/data/roles";
import { tipsForRole } from "@/data/playbook";

export const Route = createFileRoute("/roles")({
  component: RolesPage,
  head: () => ({ meta: [{ title: "Squad roles · Circle Call" }] }),
});

function RolesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-mono text-2xs tracking-wider text-primary uppercase">Roster</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight uppercase sm:text-5xl">Four jobs</h1>
      <p className="mt-3 max-w-2xl text-muted">
        League teams do not queue four entry fraggers. If your ranked stack has no IGL and no one
        holding gloos, you are not playing the sport — you are playing deathmatch on a BR map.
      </p>

      <div className="mt-10 space-y-14">
        {ROLES.map((r) => {
          const tips = tipsForRole(r.id).slice(0, 3);
          return (
            <section key={r.id} id={r.id} className="scroll-mt-20">
              <div className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)] sm:p-6">
                <p className="font-mono text-2xs tracking-wider text-primary uppercase">
                  {r.also}
                </p>
                <h2 className="mt-1 font-display text-3xl uppercase">{r.name}</h2>
                <p className="mt-3 max-w-2xl text-muted">{r.job}</p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-display text-sm tracking-wide uppercase">Does</h3>
                    <ul className="mt-2 space-y-2">
                      {r.does.map((d) => (
                        <li key={d} className="text-sm text-foreground">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-sm tracking-wide uppercase">Never</h3>
                    <ul className="mt-2 space-y-2">
                      {r.never.map((d) => (
                        <li key={d} className="text-sm text-muted">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-sm">
                  <span className="text-muted">Characters · </span>
                  {r.characters.join(" · ")}
                </p>
                <p className="mt-1 text-sm text-muted">{r.loadout}</p>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {tips.map((t) => (
                  <TipCard key={t.slug} tip={t} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <p className="mt-12 text-sm text-muted">
        Character ability notes live on{" "}
        <Link to="/loadouts" className="text-foreground underline-offset-4 hover:underline">
          Loadouts
        </Link>
        .
      </p>
    </main>
  );
}
