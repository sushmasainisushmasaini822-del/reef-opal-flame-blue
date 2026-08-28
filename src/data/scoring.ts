/** EWC 2026 Free Fire placement table (12-team map). 1 point per elimination. */
export const PLACEMENT_POINTS = [0, 12, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0] as const;

export function matchPoints(place: number, elims: number) {
  const p = Math.min(12, Math.max(1, Math.round(place)));
  const e = Math.max(0, Math.round(elims));
  return { place: p, elims: e, placement: PLACEMENT_POINTS[p] ?? 0, total: (PLACEMENT_POINTS[p] ?? 0) + e };
}

export const SCORING_NOTES = [
  "1st is 12 placement points, 2nd is 9, then 8 down to 1 for 10th. 11th and 12th get zero placement.",
  "Every elimination is 1 extra point. Kills are a bonus, not a substitute for staying alive.",
  "Tiebreakers: most Booyahs, then most kill points, then best placement in the most recent match.",
  "A 2-kill Booyah (14 pts) beats an 8-kill 10th (9 pts). That is why the 12-alive rule exists.",
];
