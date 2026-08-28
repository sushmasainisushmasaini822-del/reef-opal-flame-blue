import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PointsCalc } from "@/components/points-calc";
import { TipCard } from "@/components/tip-card";
import { Button } from "@/components/ui/button";
import { FEATURED_SLUGS, getTip } from "@/data/playbook";
import { ROLES } from "@/data/roles";

export const Route = createFileRoute("/")({ component: Home });

const RULES = [
  { n: "01", t: "Placement pays more than ego fights" },
  { n: "02", t: "Peek the right edge of every cover" },
  { n: "03", t: "Gloo is a weapon, not a panic button" },
  { n: "04", t: "Rotate on the draw, hold the rim" },
  { n: "05", t: "Third-party the finish" },
  { n: "06", t: "Info before bullets" },
];

function Home() {
  const featured = FEATURED_SLUGS.map((s) => getTip(s)).filter(Boolean);
  return (
    <main>
      <section className="relative overflow-hidden bg-grid bg-hero-wash">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="font-mono text-2xs tracking-[0.22em] text-primary uppercase">
            FFWS · FFPL · EWC
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.92] font-semibold tracking-tight text-foreground uppercase sm:text-7xl">
            Circle Call
          </h1>
          <p className="mt-3 max-w-xl font-display text-xl tracking-wide text-muted uppercase sm:text-2xl">
            The Free Fire esports playbook
          </p>
          <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
            Techniques actual league rosters use in pro matches — not ranked pub tricks. Gloo
            discipline, IGL defaults, drop timing, and the placement table that decides a series.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/playbook">
                Open the playbook
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/roles">Squad roles</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="font-mono text-2xs tracking-wider text-muted uppercase">
          Six defaults
        </p>
        <h2 className="mt-1 font-display text-3xl tracking-tight uppercase">How the lobby is actually won</h2>
        <ol className="mt-6 divide-y divide-border rounded-xl bg-card shadow-[var(--shadow-border)]">
          {RULES.map((r) => (
            <li key={r.n} className="flex items-baseline gap-4 px-5 py-4">
              <span className="font-mono text-sm text-primary tabular-nums">{r.n}</span>
              <span className="font-display text-lg tracking-wide uppercase sm:text-xl">{r.t}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <PointsCalc />
        </div>
        <aside className="flex flex-col justify-between rounded-xl bg-card p-5 shadow-[var(--shadow-border)] lg:col-span-2 sm:p-6">
          <div>
            <p className="font-mono text-2xs tracking-wider text-primary uppercase">
              Why this exists
            </p>
            <h2 className="mt-1 font-display text-2xl tracking-tight uppercase">Pubs are not series</h2>
            <p className="mt-3 text-sm text-muted">
              Ranked rewards highlight kills. Leagues reward the table: Booyahs, placement, then
              elims. The tips here come from that table — Alok/Chrono cores, triangle bunkers,
              12-alive discipline, right-side peeks — the stuff you see when you watch FFWS on mute
              and only track who is still standing.
            </p>
          </div>
          <Button variant="outline" className="mt-6 w-full" asChild>
            <Link to="/playbook/$slug" params={{ slug: "twelve-alive-rule" }}>
              Read the 12-alive rule
            </Link>
          </Button>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-2xs tracking-wider text-muted uppercase">
              Start here
            </p>
            <h2 className="mt-1 font-display text-3xl tracking-tight uppercase">Core techniques</h2>
          </div>
          <Link
            to="/playbook"
            className="hidden min-h-11 items-center text-sm text-primary sm:inline-flex"
          >
            All tips
            <ArrowRight className="ml-1 size-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((t) => (t ? <TipCard key={t.slug} tip={t} /> : null))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <p className="font-mono text-2xs tracking-wider text-muted uppercase">Roster</p>
        <h2 className="mt-1 font-display text-3xl tracking-tight uppercase">Four jobs, not four fraggers</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((r) => (
            <Link
              key={r.id}
              to="/roles"
              hash={r.id}
              className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-[var(--motion-quick)] hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="font-mono text-2xs tracking-wider text-primary uppercase">{r.also}</p>
              <h3 className="mt-2 font-display text-2xl uppercase">{r.name}</h3>
              <p className="mt-2 text-sm text-muted">{r.job}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
