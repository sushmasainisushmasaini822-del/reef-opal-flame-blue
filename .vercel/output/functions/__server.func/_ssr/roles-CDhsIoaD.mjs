//#region node_modules/.nitro/vite/services/ssr/assets/roles-CDhsIoaD.js
var ROLES = [
	{
		id: "igl",
		name: "IGL",
		also: "In-game leader",
		job: "Owns the map. Rotations, fight/no-fight, and the commit/reset call. Mechanics are secondary to the table.",
		does: [
			"Names the next compound the moment the circle draws",
			"Tracks alive count and points — not just the nearest spray",
			"Calls third-party timing so the squad collapses together",
			"Talks in short orders; leaves gun-skill calls to entry"
		],
		never: [
			"Hot-drops for clips when the series needs a top 4",
			"Starts a 50/50 while 16 are alive",
			"Lets four people loot after a wipe"
		],
		characters: [
			"DJ Alok",
			"Moco",
			"Chrono",
			"K"
		],
		loadout: "Versatile AR (M4A1/SCAR) + SMG. You take mid-range info fights, not ego 1v1s."
	},
	{
		id: "entry",
		name: "Entry",
		also: "Fragger",
		job: "First body through the door. Creates the trade, does not take untraded hero peeks.",
		does: [
			"Steep-dives the gun crate and wins the opening 1v1",
			"Swings only when support is already aiming the same pixel",
			"Carries SPAS/MP40 for the hole in a gloo",
			"Dies forward — never 20m behind looting"
		],
		never: [
			"Wide-swings a left peek 'to see'",
			"Starts a fight the IGL did not call",
			"Wastes Chrono/Alok as a personal panic button"
		],
		characters: [
			"Tatsuya",
			"A124",
			"Jota",
			"Skyler"
		],
		loadout: "SPAS-12 or MP40 + M4A1. Close-range first, AR for the follow-up."
	},
	{
		id: "support",
		name: "Support",
		also: "Utility",
		job: "Keeps the squad alive and moving. Gloos, kits, auras, revives. The unglamorous reason you make finals.",
		does: [
			"Holds the most gloos and kits on the team",
			"Plants the triangle before the revive, not during the revive animation",
			"Pre-casts Alok on the commit call",
			"Trades the entry — your crosshair is already there"
		],
		never: [
			"Looting while entry is swinging",
			"Reviving in the open because 'it's faster'",
			"Saving the aura for a later that never comes"
		],
		characters: [
			"DJ Alok",
			"Chrono",
			"K",
			"A124"
		],
		loadout: "AR + SMG, max gloo and kits. You are the backpack."
	},
	{
		id: "anchor",
		name: "Anchor",
		also: "Cover / sniper",
		job: "Holds the off-angle, the backside, and the long lane so the stack is not walked.",
		does: [
			"Plays height and right-side peeks",
			"Watches the rotate the IGL cannot see",
			"Closes late-game with SVD/AWM from the rim",
			"Does not chase a knock into the open"
		],
		never: [
			"Abandoning the off-angle to pad a kill",
			"Holding the same pixel as the entry",
			"Sniping from a silhouette on a ridge with no gloo"
		],
		characters: [
			"Maro",
			"Moco",
			"Chrono",
			"K"
		],
		loadout: "SVD/AWM + AR. You win the 50m+ fight the entry cannot take."
	}
];
//#endregion
export { ROLES as t };
