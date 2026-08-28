import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { TipCard } from "@/components/tip-card";
import { Input } from "@/components/ui/input";
import {
  CATEGORIES,
  ROLE_IDS,
  TIPS,
  type CategoryId,
  type RoleId,
} from "@/data/playbook";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/playbook/")({ component: PlaybookPage });

const ROLE_LABEL: Record<RoleId, string> = {
  igl: "IGL",
  entry: "Entry",
  support: "Support",
  anchor: "Anchor",
};

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 items-center rounded-md px-3 text-sm transition-colors duration-[var(--motion-quick)]",
        active
          ? "bg-primary text-primary-foreground"
          : "bg-card text-muted shadow-[var(--shadow-border)] hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

function PlaybookPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<CategoryId | "all">("all");
  const [role, setRole] = useState<RoleId | "all">("all");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return TIPS.filter((t) => {
      if (cat !== "all" && t.category !== cat) return false;
      if (role !== "all" && !t.roles.includes(role)) return false;
      if (!query) return true;
      return (
        t.title.toLowerCase().includes(query) ||
        t.rule.toLowerCase().includes(query) ||
        t.summary.toLowerCase().includes(query)
      );
    });
  }, [q, cat, role]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-mono text-2xs tracking-wider text-primary uppercase">
        22 techniques
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight uppercase sm:text-5xl">Playbook</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Filter by job or topic. Every tip is a tournament default — how to execute it, the usual
        throw, and a drill.
      </p>

      <div className="mt-8">
        <label htmlFor="tip-search" className="sr-only">
          Search tips
        </label>
        <Input
          id="tip-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search peeks, gloos, rotates…"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Chip active={cat === "all"} onClick={() => setCat("all")}>
          All topics
        </Chip>
        {(Object.keys(CATEGORIES) as CategoryId[]).map((id) => (
          <Chip key={id} active={cat === id} onClick={() => setCat(id)}>
            {CATEGORIES[id].label}
          </Chip>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <Chip active={role === "all"} onClick={() => setRole("all")}>
          All roles
        </Chip>
        {ROLE_IDS.map((id) => (
          <Chip key={id} active={role === id} onClick={() => setRole(id)}>
            {ROLE_LABEL[id]}
          </Chip>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-12 text-sm text-muted">No tips match that filter. Clear search or chips.</p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <TipCard key={t.slug} tip={t} />
          ))}
        </div>
      )}
    </main>
  );
}
