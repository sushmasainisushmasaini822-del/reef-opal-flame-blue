export type MapGuide = {
  slug: string;
  name: string;
  tag: string;
  identity: string;
  drops: { name: string; note: string; risk: "safe" | "mid" | "hot" }[];
  rotate: string[];
  late: string[];
  trap: string;
};

export const MAPS: MapGuide[] = [
  {
    slug: "bermuda",
    name: "Bermuda",
    tag: "Default league map",
    identity:
      "Mixed city, bridges, and height. Most FFWS/EWC series still live and die here. Information and bridge timing matter more than raw aim.",
    drops: [
      {
        name: "Clock Tower",
        risk: "hot",
        note: "Height and crates. Steep-dive the gun, don't land 'for the view' unarmed. Sniper heaven once you win the compound.",
      },
      {
        name: "Cape Town",
        risk: "mid",
        note: "Loot is real. The garage is a third-party magnet — one loots, three hold, leave on a 15-second clock.",
      },
      {
        name: "Mars Electric",
        risk: "safe",
        note: "Consistent loot, fewer contestants. Standard if the IGL wants a clean 4-live into mid-game.",
      },
      {
        name: "Mill",
        risk: "hot",
        note: "Only if you need early elims and you actually win them. Otherwise it is a 0-point opener.",
      },
      {
        name: "Crossroads / bridges",
        risk: "mid",
        note: "Not a drop — a rotate. Cross early. A late bridge is a filmed execution for whoever already holds it.",
      },
    ],
    rotate: [
      "The moment the next zone draws, name the compound and the bridge you will or will not take.",
      "Vehicles are for mid-game gaps, not for driving a highlight through a held town.",
      "Tree–rock–building. Open fields get Chrono or a gloo tunnel.",
      "If two squads are already on your short path, take the long one. 8th place is still points; a wipe is not.",
    ],
    late: [
      "Hold the rim, not the bullseye. Bermuda streets become a 360° spray in the center.",
      "Clock Tower / high roofs still matter if the circle allows — height plus right-peek.",
      "Do not chase a knock across a street into a third party.",
    ],
    trap: "Looting Cape Town garage or Clock Tower stairs after a wipe. The next team is already on the stairs.",
  },
  {
    slug: "purgatory",
    name: "Purgatory",
    tag: "Vertical, fast third parties",
    identity:
      "Tighter compounds, more verticality, shorter time-to-contact. Fights chain. The team that lingers on boxes gets walked.",
    drops: [
      {
        name: "Katulistiwa / Forge",
        risk: "hot",
        note: "Contest only with a plan for the first gun and a pre-agreed reset if a second squad lands.",
      },
      {
        name: "Campsite / Village",
        risk: "mid",
        note: "Playable loot without a guaranteed 3-squad. Still leave on a timer — compounds here are loud.",
      },
      {
        name: "Edge settlements",
        risk: "safe",
        note: "If the plane path is greedy, take the quiet edge, kit up, and be the third party — not the first.",
      },
    ],
    rotate: [
      "Assume every gunfight has an audience. After a wipe you are already late.",
      "Use interior pathing (buildings, rocks) more than Bermuda-style field walks.",
      "Don't over-rotate into the next zone too early and get pinched by the lobby moving in behind you.",
    ],
    late: [
      "Triangles and sky gloos on flat tiles. Natural cover disappears fast.",
      "Sound is everything — footsteps on metal and gloo breaks give the inbound away.",
      "Skyler value is high: enemy triangles are the only cover left.",
    ],
    trap: "Staying for the last crate in a compound after you already won. Purgatory third parties arrive faster than Bermuda ones.",
  },
  {
    slug: "kalahari",
    name: "Kalahari",
    tag: "Sightlines and sand",
    identity:
      "Long lanes, little cover, vehicles actually matter. Maro/SVD and Chrono rotates are not optional — they are the map.",
    drops: [
      {
        name: "Town / Refinery",
        risk: "hot",
        note: "Loot density with long approaches. Win the compound, then don't silhouette on the exit.",
      },
      {
        name: "Mines",
        risk: "mid",
        note: "Playable if you want a mix of close fights and a path into zone. Watch the ridges on the way out.",
      },
      {
        name: "Edge dunes",
        risk: "safe",
        note: "Quiet kit, then vehicle to the first real circle. Only works if you actually find a car.",
      },
    ],
    rotate: [
      "Open sand is a gloo/Chrono problem. A 4-man sprint is a montage for the team on the ridge.",
      "Vehicles in mid-game to close 200m gaps. Ditch them before the engine tells the whole lobby your vector.",
      "Rotate on the first shrink. Late Kalahari rotates are blue plus two ARs you cannot see.",
    ],
    late: [
      "Edge hold with a triangle. The blue is your back wall.",
      "Anchor on SVD/AWM. Entry does not take 60m ego sprays with an MP40.",
      "Sky gloo only when the circle is already small — a tower on open sand at 20 alive is a beacon.",
    ],
    trap: "Walking a dune line in silhouette. If you can see the horizon, they can see you.",
  },
];
