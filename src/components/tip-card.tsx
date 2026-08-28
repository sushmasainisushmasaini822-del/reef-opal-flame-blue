import { Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CATEGORIES, type Tip } from "@/data/playbook";
import { useHydrated } from "@/hooks/use-hydrated";
import { cn } from "@/lib/utils";
import { useBookmarks } from "@/store/bookmarks";

export function TipCard({ tip }: { tip: Tip }) {
  const hydrated = useHydrated();
  const stored = useBookmarks((s) => s.ids.includes(tip.slug));
  const has = hydrated && stored;
  const toggle = useBookmarks((s) => s.toggle);
  return (
    <article className="group relative flex h-full flex-col rounded-xl bg-card p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-[var(--motion-quick)] hover:shadow-[var(--shadow-border-hover)]">
      <div className="flex items-start justify-between gap-3">
        <Badge variant="muted">{CATEGORIES[tip.category].label}</Badge>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="relative z-10 size-9 min-h-9 shrink-0"
          aria-pressed={has}
          aria-label={has ? "Remove bookmark" : "Save tip"}
          onClick={() => toggle(tip.slug)}
        >
          <Bookmark className={cn("size-4", has && "fill-primary text-primary")} />
        </Button>
      </div>
      <h3 className="mt-3 font-display text-xl leading-tight font-medium tracking-tight text-foreground uppercase">
        <Link
          to="/playbook/$slug"
          params={{ slug: tip.slug }}
          className="after:absolute after:inset-0"
        >
          {tip.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted">{tip.rule}</p>
      <p className="mt-4 font-mono text-2xs tracking-wider text-muted uppercase">
        {tip.difficulty}
      </p>
    </article>
  );
}
