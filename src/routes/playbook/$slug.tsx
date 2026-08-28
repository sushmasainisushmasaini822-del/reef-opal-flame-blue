import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bookmark } from "lucide-react";
import { TipDiagram } from "@/components/diagrams";
import { TipCard } from "@/components/tip-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CATEGORIES, getTip, relatedTips } from "@/data/playbook";
import { useHydrated } from "@/hooks/use-hydrated";
import { cn } from "@/lib/utils";
import { useBookmarks } from "@/store/bookmarks";

export const Route = createFileRoute("/playbook/$slug")({
  component: TipPage,
  loader: ({ params }) => {
    const tip = getTip(params.slug);
    if (!tip) throw notFound();
    return { tip };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.tip.title} · Circle Call` : "Circle Call" }],
  }),
});

function TipPage() {
  const { tip } = Route.useLoaderData();
  const hydrated = useHydrated();
  const stored = useBookmarks((s) => s.ids.includes(tip.slug));
  const has = hydrated && stored;
  const toggle = useBookmarks((s) => s.toggle);
  const related = relatedTips(tip.slug);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        to="/playbook"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Playbook
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Badge>{CATEGORIES[tip.category].label}</Badge>
        <Badge variant="muted">{tip.difficulty}</Badge>
        {tip.roles.map((r) => (
          <Badge key={r} variant="outline">
            {r}
          </Badge>
        ))}
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <h1 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight uppercase sm:text-5xl">
          {tip.title}
        </h1>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-pressed={has}
          aria-label={has ? "Remove bookmark" : "Save tip"}
          onClick={() => toggle(tip.slug)}
        >
          <Bookmark className={cn("size-4", has && "fill-primary text-primary")} />
        </Button>
      </div>
      <p className="mt-4 text-lg text-muted">{tip.rule}</p>

      {tip.diagram ? (
        <div className="mt-8">
          <TipDiagram id={tip.diagram} />
        </div>
      ) : null}

      <section className="mt-10">
        <h2 className="font-display text-2xl tracking-tight uppercase">In the match</h2>
        <p className="mt-3 text-foreground">{tip.summary}</p>
        <p className="mt-3 text-muted">{tip.why}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl tracking-tight uppercase">How to do it</h2>
        <ol className="mt-4 space-y-3">
          {tip.steps.map((s, i) => (
            <li key={s} className="flex gap-4 rounded-lg bg-card p-4 shadow-[var(--shadow-border)]">
              <span className="font-mono text-sm text-primary tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm sm:text-base">{s}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
          <h2 className="font-display text-lg uppercase">The usual throw</h2>
          <p className="mt-2 text-sm text-muted">{tip.mistake}</p>
        </div>
        <div className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
          <h2 className="font-display text-lg uppercase">Drill</h2>
          <p className="mt-2 text-sm text-muted">{tip.drill}</p>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-display text-2xl tracking-tight uppercase">Next</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((t) => (
              <TipCard key={t.slug} tip={t} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
