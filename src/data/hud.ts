export const HUD_RULES = [
  {
    title: "Gloo next to movement",
    body: "The wall button sits where the left thumb or left index already is. If you have to travel across the HUD to place a wall, you will die in the open. This is the first HUD change every league player makes.",
  },
  {
    title: "Fire on the claw finger",
    body: "2-thumb: fire where the right thumb rests without covering the whole screen. 3/4-finger claw: right index on fire (and often gloo/scope), right thumb on camera, left thumb on move, left index on jump/crouch. Jump and crouch must be split so you can jump-peek.",
  },
  {
    title: "Do not overlap fire and gloo",
    body: "If those two buttons share a hitbox you will wall when you meant to shoot, or shoot when you meant to wall. Give each a dedicated, large target.",
  },
  {
    title: "Copy ratios, not codes",
    body: "A pro's HUD code is built for their hand, phone size, and claw. Steal the layout logic (gloo near move, fire on index, jump/crouch split). Do not paste a code and expect their aim.",
  },
];

export const SENS_PRESETS = [
  {
    name: "3 / 4-finger claw",
    note: "League default starting point. High general, low sniper.",
    values: [
      ["General", "95–100"],
      ["Red dot", "90–100"],
      ["2x", "80–90"],
      ["4x", "70–80"],
      ["Sniper", "35–40"],
      ["Free look", "70–85"],
      ["Gyro", "Off, or 20–40 if you already drag well"],
    ],
  },
  {
    name: "2-thumb",
    note: "Stable first. Raise general only after you stop over-flicking.",
    values: [
      ["General", "90–100"],
      ["Red dot", "85–95"],
      ["2x", "75–85"],
      ["4x", "65–75"],
      ["Sniper", "35–45"],
      ["Free look", "65–80"],
      ["Gyro", "Off until claw or you add a light gyro layer"],
    ],
  },
  {
    name: "Light gyro add-on",
    note: "Gyro is for micro recoil, not for looking around. Start tiny.",
    values: [
      ["Keep your grip row", "as above"],
      ["Gyro general", "25–30 to start"],
      ["Mode", "Scope on, or always on once stable"],
      ["Sniper", "Keep 35–40 — gyro plus high sniper is unusable"],
    ],
  },
];

export const SENS_NOTES = [
  "Sniper stays low on purpose. Pros miss because they over-flick 4x/sniper, not because general is 3 points off.",
  "If your client uses 0–200 sliders, keep the same ratios, not the same numbers.",
  "Change one slider a day. If you change six, you will never know what actually helped.",
  "15 minutes of training (heads, recoil, gloo) beats another hour of copying HUD codes from a thumbnail.",
];
