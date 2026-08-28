import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { matchPoints, PLACEMENT_POINTS, SCORING_NOTES } from "@/data/scoring";

function Stepper({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-muted">{label}</span>
      <div className="flex items-center gap-1">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-11"
          aria-label={`Decrease ${label}`}
          onClick={() => onChange(Math.max(min, value - 1))}
        >
          <Minus className="size-4" />
        </Button>
        <span className="w-10 text-center font-mono text-lg tabular-nums">{value}</span>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-11"
          aria-label={`Increase ${label}`}
          onClick={() => onChange(Math.min(max, value + 1))}
        >
          <Plus className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export function PointsCalc() {
  const [place, setPlace] = useState(4);
  const [elims, setElims] = useState(3);
  const result = matchPoints(place, elims);
  return (
    <section className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)] sm:p-6">
      <p className="font-mono text-2xs tracking-wider text-primary uppercase">
        EWC 2026 table
      </p>
      <h2 className="mt-1 font-display text-2xl tracking-tight uppercase">Match points</h2>
      <p className="mt-2 text-sm text-muted">
        Placement plus one point per elimination. This is why a quiet top 4 beats a loud 10th.
      </p>
      <div className="mt-5 space-y-3">
        <Stepper label="Placement" value={place} min={1} max={12} onChange={setPlace} />
        <Stepper label="Eliminations" value={elims} min={0} max={20} onChange={setElims} />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 rounded-lg bg-surface p-3">
        <Stat label="Place pts" value={result.placement} />
        <Stat label="Elim pts" value={result.elims} />
        <Stat label="Total" value={result.total} accent />
      </div>
      <ol className="mt-5 space-y-2">
        {SCORING_NOTES.map((n) => (
          <li key={n} className="text-sm text-muted">
            {n}
          </li>
        ))}
      </ol>
      <p className="mt-4 font-mono text-2xs text-muted">
        1st {PLACEMENT_POINTS[1]} · 2nd {PLACEMENT_POINTS[2]} · 3rd {PLACEMENT_POINTS[3]} · … · 10th{" "}
        {PLACEMENT_POINTS[10]} · 11–12 {PLACEMENT_POINTS[11]}
      </p>
    </section>
  );
}

function Stat({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="text-center">
      <p className="font-mono text-3xs tracking-wider text-muted uppercase">{label}</p>
      <p
        className={
          accent
            ? "font-display text-3xl text-primary tabular-nums"
            : "font-display text-3xl tabular-nums"
        }
      >
        {value}
      </p>
    </div>
  );
}
