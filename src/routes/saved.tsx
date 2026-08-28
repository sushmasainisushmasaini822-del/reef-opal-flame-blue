import { createFileRoute, Link } from "@tanstack/react-router";
import { TipCard } from "@/components/tip-card";
import { Button } from "@/components/ui/button";
import { getTip } from "@/data/playbook";
import { useHydrated } from "@/hooks/use-hydrated";
import { useBookmarks } from "@/store/bookmarks";

export const Route = createFileRoute("/saved")({
  component: SavedPage,
  head: () => ({ meta: [{ title: "Saved · Circle Call" }] }),
});

function SavedPage() {
  const hydrated = useHydrated();
  const ids = useBookmarks((s) => s.ids);
  const tips = hydrated ? ids.map((id) => getTip(id)).filter(Boolean) : [];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-mono text-2xs tracking-wider text-primary uppercase">Local</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight uppercase sm:text-5xl">Saved tips</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Stored on this device. Bookmark from any card. Build a pre-scrim checklist.
      </p>

      {!hydrated ? (
        <p className="mt-12 text-sm text-muted">Loading saved tips…</p>
      ) : tips.length === 0 ? (
        <div className="mt-12 rounded-xl bg-card p-8 text-center shadow-[var(--shadow-border)]">
          <p className="text-muted">Nothing saved yet.</p>
          <Button className="mt-5" asChild>
            <Link to="/playbook">Open the playbook</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((t) => (t ? <TipCard key={t.slug} tip={t} /> : null))}
        </div>
      )}
    </main>
  );
}
