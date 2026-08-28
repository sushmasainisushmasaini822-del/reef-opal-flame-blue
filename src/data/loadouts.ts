export type Character = {
  name: string;
  role: string;
  ability: string;
  proUse: string;
};

export const CHARACTERS: Character[] = [
  {
    name: "DJ Alok",
    role: "Support / default pick",
    ability: "Drop the Beat — healing aura and speed in a small radius.",
    proUse:
      "Most-picked character in Free Fire esports because it heals four people, not one. Pre-cast on the commit or the rotate. Standing 20m behind the stack wastes the radius. Pair with Chrono for the standard support core.",
  },
  {
    name: "Chrono",
    role: "Defensive initiator",
    ability: "Time Traveler — 600-damage dome plus a speed buff after.",
    proUse:
      "Open-field rotates, planted revives, and holding a doorway. Not a panic 1v1 bubble. Drop a gloo inside the dome when the cross is under AR fire. Use the speed after the shield to finish the path.",
  },
  {
    name: "K",
    role: "Sustain / hybrid",
    ability: "Master of All — Jiu-Jitsu (faster healing) or Psychology (passive EP).",
    proUse:
      "Tournament survival. Jiu-Jitsu in downtime so you burn fewer kits; Psychology in the actual gunfight. Pros toggle with intent — they don't leave the wrong mode up for a whole circle.",
  },
  {
    name: "A124",
    role: "Entry sustain",
    ability: "Rapid self-heal to keep momentum after first contact.",
    proUse:
      "Lets the entry take the first swing without instantly draining the support's kits. Still needs a trade partner — self-heal is not a 1v4 button.",
  },
  {
    name: "Moco",
    role: "Intel",
    ability: "Hacker's Eye — marks enemies the squad can then pre-aim.",
    proUse:
      "IGL and anchor tool. Mark before the swing so four crosshairs already exist on the pixel. Useless if you mark after the team has already wide-swung blind.",
  },
  {
    name: "Tatsuya",
    role: "Entry pathing",
    ability: "Bushido dash for space and peels.",
    proUse:
      "Dash through the open, dash to trade, dash out. The dash is a path, not a highlight. Don't dash into a held right-peek with no wall.",
  },
  {
    name: "Jota",
    role: "SMG entry",
    ability: "HP on SMG kills.",
    proUse:
      "Rewards the close-range entry who actually converts. Pair with MP40/UMP. Falls off if you insist on long-range AR duels.",
  },
  {
    name: "Maro",
    role: "Long range",
    ability: "Damage increases with distance.",
    proUse:
      "Kalahari and Bermuda ridges. Hold the 50m+ lane the entry cannot take. Do not take this character and then play MP40 in hallways.",
  },
  {
    name: "Skyler",
    role: "Anti-gloo",
    ability: "Destroys enemy walls and heals on placement.",
    proUse:
      "Late-game triangle breaker. You delete their only cover, then the squad swings the hole. First-pick when the lobby is wall-heavy.",
  },
];

export const WEAPONS = [
  {
    range: "Close · 0–15m",
    guns: "SPAS-12, MP40, UMP",
    note: "Full spray, strafe, shotgun the gloo hole. This is the entry's job.",
  },
  {
    range: "Mid · 15–50m",
    guns: "M4A1, SCAR, AK",
    note: "Burst or tap. M4A1 + UMP is the most consistent two-gun pair in the game — low recoil, both ranges covered.",
  },
  {
    range: "Long · 50m+",
    guns: "SVD, AWM, Kar98k",
    note: "Anchor only. Do not spray an M4 at a ridge pixel. One clean DMR tag is worth a mag of sky.",
  },
];

export const COMBOS = [
  {
    name: "League default",
    line: "Alok + Chrono + Moco + Tatsuya/A124",
    why: "Heal, rotate shield, intel, entry. This is the shape of most FFWS/EWC lineups for a reason.",
  },
  {
    name: "Kalahari lane",
    line: "Alok + Chrono + Maro + K",
    why: "You will fight sand and 60m peeks. Sustain plus a dedicated long gun.",
  },
  {
    name: "Breaker",
    line: "Alok + Skyler + A124 + Moco",
    why: "When every surviving team is a triangle. Delete cover, mark, swing.",
  },
];
