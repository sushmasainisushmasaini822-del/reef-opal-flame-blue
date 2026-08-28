import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogPortal, i as DialogOverlay, l as Slot, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { R as notFound, _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, n as TriangleAlert, o as Bookmark, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/playbook-Bf7iLpto.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "border border-border bg-transparent text-foreground hover:bg-surface",
			ghost: "text-foreground hover:bg-surface",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 min-h-11 px-4",
			sm: "h-9 min-h-9 px-3 text-xs",
			lg: "h-12 min-h-12 px-6",
			icon: "size-11 min-h-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function useHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setHydrated(true);
	}, []);
	return hydrated;
}
var useBookmarks = create()(persist((set, get) => ({
	ids: [],
	toggle: (id) => set((state) => ({ ids: state.ids.includes(id) ? state.ids.filter((x) => x !== id) : [...state.ids, id] })),
	has: (id) => get().ids.includes(id)
}), { name: "circle-call-bookmarks" }));
var CATEGORIES = {
	gloo: {
		label: "Gloo wall",
		blurb: "Cover as a weapon"
	},
	gunfight: {
		label: "Gunfight",
		blurb: "Winning the 1v1"
	},
	rotation: {
		label: "Rotation",
		blurb: "Moving with the zone"
	},
	drop: {
		label: "Drop",
		blurb: "First 90 seconds"
	},
	igl: {
		label: "IGL",
		blurb: "Calling the match"
	},
	late: {
		label: "Late game",
		blurb: "Final circles"
	},
	utility: {
		label: "Utility",
		blurb: "Abilities and kits"
	},
	comms: {
		label: "Comms",
		blurb: "What to say"
	}
};
var ROLE_IDS = [
	"igl",
	"entry",
	"support",
	"anchor"
];
var TIPS = [
	{
		slug: "right-side-peek",
		title: "Always peek the right edge",
		rule: "The model holds the gun on the right. Peeking left shows a full body.",
		category: "gunfight",
		roles: [
			"entry",
			"anchor",
			"support"
		],
		difficulty: "core",
		diagram: "right-peek",
		summary: "In Free Fire the character model shoulders the weapon on the right. Pros only take peeks from the right side of cover so the enemy sees a sliver of head and gun — not a full torso.",
		why: "Tournament 1v1s are decided by who exposes less pixel. Left-side peeks are free kills for anyone pre-aiming the angle. Every FFWS/EWC VOD of a held doorway shows the defender hugging the right jamb.",
		steps: [
			"Put hard cover on your left. Tree, wall, gloo, doorframe — left of your screen.",
			"Strafe out with a short right-peek, fire a burst, strafe back. Do not wide-swing.",
			"If you must take a left angle, drop a gloo first and peek off the right edge of that gloo instead.",
			"Pre-aim head height before you leave cover. The peek is for shooting, not for looking."
		],
		mistake: "Wide-swinging both sides of a door 'to gather info'. You donate a full body to whoever is holding.",
		drill: "Training dummy behind a wall. 20 right-peeks, 20 left-peeks. Watch the replay: left peeks show chest; right peeks show head. Make right-peek muscle memory."
	},
	{
		slug: "triangle-bunker",
		title: "Triangle bunker in the last circles",
		rule: "Three walls, no gaps: front, back, side. 360 cover for revive and heal.",
		category: "gloo",
		roles: [
			"support",
			"igl",
			"anchor"
		],
		difficulty: "core",
		diagram: "triangle",
		summary: "Pros do not panic-spam one wall in the open. They plant a three-wall triangle so the squad can revive, pop kits, and hold a 2v4 without getting beamed from the flank.",
		why: "Final circles in FFPL/FFWS are open sand or street with no natural cover. A single gloo dies to one spray. A closed triangle forces the enemy to break a wall — and the moment they do, you have a shotgun angle on the hole.",
		steps: [
			"Wall 1: directly between you and the known threat.",
			"Turn 90°, wall 2 behind. Turn again, wall 3 on the open side. No gaps at the corners.",
			"Crouch inside. One player holds the most likely break. Support starts the revive or heal.",
			"If a wall cracks, replace it immediately — do not peek the hole unless you have a shotgun ready."
		],
		mistake: "Dropping three walls in a line. That is a fence, not a bunker. Flanks still kill you.",
		drill: "Custom room, open field. From a full sprint, plant a closed triangle in under 2 seconds. Repeat until the corners seal without thinking."
	},
	{
		slug: "jump-slide-gloo",
		title: "Jump-gloo and slide-gloo",
		rule: "Place the wall while moving so chasers eat a wall, not your back.",
		category: "gloo",
		roles: ["entry", "support"],
		difficulty: "advanced",
		diagram: "jump-gloo",
		summary: "The wall button is not a stand-still tool. Pros pre-aim the ground behind them, jump or slide, and plant so a rusher slams into cover mid-sprint.",
		why: "In a 1v1 chase, stopping to place a wall is a death animation. Jump-gloo and slide-gloo keep momentum and break line of sight at the exact moment the enemy commits to the spray.",
		steps: [
			"Put the gloo button next to your movement thumb or left index — not buried in the HUD.",
			"While running away, look slightly down at the spot the wall should appear, then tap.",
			"Jump + gloo: wall appears under/behind you and blocks a jump-shot chase.",
			"Slide + gloo: wall cuts a close rusher; you come out of the slide already behind cover."
		],
		mistake: "Looking at the enemy while placing. The wall goes at your feet in a useless pile, or in front of them as a gift.",
		drill: "Run a straight line in training. Every 8 steps: slide-gloo, then jump-gloo. The wall must land behind you, not beside you."
	},
	{
		slug: "half-second-gloo",
		title: "Gloo on the first pixel of damage",
		rule: "If you are in the open and you eat a bullet, the wall comes out in 0.5s or you are dead.",
		category: "gloo",
		roles: [
			"entry",
			"support",
			"anchor",
			"igl"
		],
		difficulty: "core",
		summary: "Pros treat the first hit marker as a placement cue, not a cue to spray back. Break line of sight, then decide whether to heal, peek, or leave.",
		why: "Free Fire TTK is short. Trading in the open against a pre-aimed AR is a coin flip — and coin flips lose series. Instant cover turns a lost fight into a reset.",
		steps: [
			"The instant you take unexpected damage, wall toward the shot, not toward your destination.",
			"Crouch. Do not stand-peek the same angle you just lost.",
			"If HP is below a kit threshold, heal first. If you still have armor, right-peek and return a burst.",
			"Call the direction: 'shot from clock tower, walling.' The squad should not swing into the same beam."
		],
		mistake: "Shooting back from the open 'because you saw him'. That is how entry fraggers throw a 4-live into a 2-live.",
		drill: "Have a teammate spray you in an open custom. Your only job: wall before the second burst lands. Time it."
	},
	{
		slug: "bait-and-punish",
		title: "Bait the wall, punish the break",
		rule: "Let them waste the spray on gloo. The hole is your shotgun angle.",
		category: "gloo",
		roles: ["entry", "support"],
		difficulty: "advanced",
		summary: "A planted gloo is not only defense. Pros use it as bait: the enemy commits to breaking it, walks into the gap, and eats a SPAS or MP40.",
		why: "Breaking a wall takes time and puts the breaker in a predictable tunnel. In pro 1v1s this is the standard counter to a rusher who holds left-click on your cover.",
		steps: [
			"Drop a wall between you and the pusher. Switch to shotgun / SMG.",
			"Hold the right edge. Do not re-peek the same pixel they are mag-dumping.",
			"When the wall cracks, they will step through. That step is the kill window.",
			"If they don't push, they just burned ammo and time — rotate or re-wall and reset."
		],
		mistake: "Standing in the middle of the wall so the spray that breaks it also breaks you.",
		drill: "1v1 custom: only you may use gloo. Win by baiting the break, not by spraying through your own wall."
	},
	{
		slug: "sky-gloo",
		title: "Sky gloo for height",
		rule: "Jump, place a wall under your feet, climb. Height wins last circles.",
		category: "gloo",
		roles: ["anchor", "entry"],
		difficulty: "pro",
		diagram: "sky-gloo",
		summary: "Pros jump-place a gloo to make a one-man tower when the circle dies on flat ground. Two or three stacked walls become a sniper perch or a revive platform the enemy has to look up to fight.",
		why: "Head-glitching from a sky gloo in a 1-tile circle is a standard FFWS closer. The player on height sees first and exposes less.",
		steps: [
			"Look straight down, jump, tap gloo at the peak so the wall spawns under you.",
			"Land on it. Repeat once if you need a second level — don't stack four and become a lighthouse.",
			"Crouch on the top edge and right-peek. You are a head-glitch, not a standing target.",
			"Keep one gloo in reserve to drop in front if someone sky-gloos next to you."
		],
		mistake: "Building in the open while two squads are already looking. You silhouette against the sky and die on the second wall.",
		drill: "From standstill, get onto a stable sky gloo in one jump. Then do it while strafing. Then stack two."
	},
	{
		slug: "gloo-gap",
		title: "Leave a gap, don't wide-swing",
		rule: "Angle the wall so a slit exists. Shoot the slit. Your body stays home.",
		category: "gloo",
		roles: ["anchor", "entry"],
		difficulty: "advanced",
		summary: "Instead of a perfect seal, plant the wall slightly off-angle so you can fire through a gap while the bulk of the model stays covered. Crouch-stand to change the slit height.",
		why: "A sealed wall is blind. A gapped wall is a portable head-glitch. Pros use this on compound windows and in the open when they want to hold, not hide.",
		steps: [
			"Place the wall at 20–30 degrees, not flush.",
			"Shoulder the right side of the gap. Pre-aim head height through it.",
			"Crouch-stand to change your visible pixel. Don't hold one height.",
			"If they pre-aim the gap, re-wall flush and relocate. The gap is not sacred."
		],
		mistake: "Leaving a gap wide enough for a full chest. That is not a gap, that is a window they will one-burst.",
		drill: "Place 10 walls in training. Each must allow a headshot on a dummy while your own chest stays behind gloo."
	},
	{
		slug: "rotate-on-shrink",
		title: "Rotate when the zone starts, not when it bites",
		rule: "The timer hitting zero is too late. Pros move on the first shrink.",
		category: "rotation",
		roles: ["igl", "support"],
		difficulty: "core",
		diagram: "rotate-early",
		summary: "The IGL calls the next compound as soon as the new circle appears. The squad moves through cover, not across the open, and arrives with kits and ammo — not 20 HP from zone.",
		why: "Late rotates in Bermuda and Kalahari mean bridges, sand, and third parties. EWC placement points punish the team that arrives already fighting the zone and two squads.",
		steps: [
			"The second the next zone draws, IGL names the destination and the path (compound names, not 'over there').",
			"Leave before the current timer is critical. Use vehicles only in mid-game when the gap is huge.",
			"Move tree-to-rock-to-building. Open fields get a gloo tunnel or a Chrono dome, not a sprint.",
			"If two teams are already on your path, take the long rotate. Dying for a 'faster' path is how you get 8th."
		],
		mistake: "Looting one more death box while the zone is already moving. That box is not worth 4 placement points.",
		drill: "In ranked, force yourself to start walking within 5 seconds of the new circle appearing. Track how often you arrive first vs. last."
	},
	{
		slug: "hold-the-edge",
		title: "Hold the edge, not the center",
		rule: "Center has no escape. Edge has a backside and a zone wall.",
		category: "late",
		roles: ["igl", "anchor"],
		difficulty: "core",
		diagram: "edge-hold",
		summary: "Pros sit on the rim of the safe zone, not in the middle. The zone itself is a wall behind you. You see who is rotating in, and you can fade with the next shrink.",
		why: "Center is a 360° problem. Edge is a 180° problem. In a points format, surviving the collapse is worth more than a heroic center spray.",
		steps: [
			"As the circle settles, take a position on the side opposite the densest player count if you can read it.",
			"Put natural cover or a triangle on the inside of the zone. Your back is the blue.",
			"Watch the inbound rotates. Those teams are the ones you third-party, not the ones already nested.",
			"When the next shrink draws, slide with it. Don't get caught in the center with no backside."
		],
		mistake: "Racing to the exact middle 'to be safe'. You will be first in and first sprayed from every angle.",
		drill: "Watch one FFWS late-game VOD on mute. Pause each circle: count how many of the top 4 are on the rim vs. the bullseye."
	},
	{
		slug: "third-party-window",
		title: "Third-party the finish, don't first-party the start",
		rule: "Let two teams spend utility. You take the leftover 2v4.",
		category: "igl",
		roles: ["igl", "entry"],
		difficulty: "core",
		diagram: "third-party",
		summary: "The highest-percentage fight in Free Fire esports is the third party. Pros wait until two squads have burned gloos, kits, and players — then they collapse, wipe, and leave before a fourth team arrives.",
		why: "A fair 4v4 in a compound is a coin flip. A 4v2 after a fight is a placement and kill injection. EVOS-style disciplined teams farm this; LOS-style elim teams still time the collapse, they just take it earlier.",
		steps: [
			"Hear the fight. Mark it. Do not run in on the first spray.",
			"Hold a wide angle or a gloo line 30–50m off. Watch for the first down or the last gloo break.",
			"Collapse together, not as a staggered 1-3. Entry first, support with walls, anchor holding the exit.",
			"One player loots. Three hold. You have 15 seconds before the next team does this to you."
		],
		mistake: "Crashing the second you hear shots. You become the second party, not the third — and you eat both teams' leftover utility.",
		drill: "In ranked, track 'fights we started' vs. 'fights we finished'. Pros want the second number higher until the lobby is thin."
	},
	{
		slug: "twelve-alive-rule",
		title: "The 12-alive rule",
		rule: "If more than 12 are alive, do not take a 50/50. Placement is the point.",
		category: "igl",
		roles: ["igl"],
		difficulty: "core",
		summary: "In EWC/FFWS scoring, a Booyah and a top-3 beat a 8-kill 10th place. Until the lobby is thin, pros only fight with a numbers, info, or cover advantage.",
		why: "Placement table: 1st is 12, 2nd is 9, then 8–1 down to 10th, and 11–12 are zero. One point per kill. Throwing a 4-live for two kills while 16 are alive is negative expected points.",
		steps: [
			"IGL tracks alive count out loud every circle: '14 alive, we hold.'",
			"Take fights that are third parties, knocks already down, or isolated 4v2s.",
			"If you get cracked in a bad spot, reset — Chrono, triangle, leave. Do not ego-trade.",
			"Once you are inside top 8, you can hunt — but still not through open ground."
		],
		mistake: "Hot-dropping Mill every map because 'we need kills'. You will pad elims and miss the final. The table does not care.",
		drill: "Play three ranked games where you are not allowed to start a fight before 12 alive unless you are already being pushed. Note placement vs. your usual."
	},
	{
		slug: "trade-protocol",
		title: "Trade protocol: nobody dies alone",
		rule: "If entry swings, support is already aiming the same pixel.",
		category: "gunfight",
		roles: [
			"entry",
			"support",
			"igl"
		],
		difficulty: "advanced",
		summary: "Pro teams do not take isolated peeks. The entry's job is to create a body and a sound cue. The support's job is to convert that into a knock before the enemy converts the entry.",
		why: "A 1-for-1 in a 4v4 is fine. A 1-for-0 because support was looting is how you get sent to 9th. Crossfire and trade-fragging is the difference between ranked heroes and a league roster.",
		steps: [
			"Before a swing, entry calls the exact angle: 'right window, I go.'",
			"Support pre-aims that pixel, gloo in hand. Anchor watches the off-angle so you don't get the back-stab.",
			"Entry swings. If entry is cracked, support is already shooting — not starting to look.",
			"Downed entry gets a triangle or Chrono, not a panic revive in the open."
		],
		mistake: "Entry solo-swinging because the IGL 'took too long'. Untraded deaths are the #1 VOD note in losing series.",
		drill: "2v2 custom. Entry must die or knock within 2 seconds of the swing; support must fire before entry hits the ground. Reset until the trade is automatic."
	},
	{
		slug: "door-crossfire",
		title: "Two angles on every door",
		rule: "Never hold a doorway from one pixel. Crossfire it.",
		category: "gunfight",
		roles: [
			"anchor",
			"support",
			"entry"
		],
		difficulty: "advanced",
		diagram: "crossfire",
		summary: "When a team is about to enter your compound, one player holds the door, another holds a window or a gloo off-angle. The pusher has to choose which person to look at — and dies to the other.",
		why: "A single held angle is a 1v1. A crossfire is a 2v1 the moment they step in. This is default compound defense in SEA and Brazil league play.",
		steps: [
			"Player A: right-peek the door from inside, shotgun or SMG.",
			"Player B: off-angle — window, stair, or a gloo 5m to the side. AR for the body as they enter.",
			"Player C: watches the rotate / second door so you don't get walked from behind.",
			"Do not both hold the same pixel. If they pre-nade/gloo the door, the off-angle still works."
		],
		mistake: "All four stacking the same doorway. One well-placed spray or a Skyler wall-break wipes the stack.",
		drill: "Custom compound. Two holders, one rusher. Rusher should feel like there is no safe first peek."
	},
	{
		slug: "loot-discipline",
		title: "One loots, three hold",
		rule: "After a wipe you have seconds, not a shopping trip.",
		category: "utility",
		roles: [
			"support",
			"igl",
			"entry"
		],
		difficulty: "core",
		summary: "The death box is a magnet for the next team. Pros assign one player to strip kits, ammo, and the needed gun. The other three hold the two most likely inbound paths.",
		why: "Cape Town garage, Clock Tower stairs, Purgatory compounds — these are famous third-party traps because people loot. The team that leaves with 80% of the loot and 4 lives beats the team that leaves with 100% of the loot and 2 lives.",
		steps: [
			"IGL: 'one loot, hold north and stairs.' Named players, not 'somebody loot'.",
			"Looter takes: kits, gloo, ammo, the one gun upgrade. Ignore skins and extra ARs.",
			"Holders pre-aim inbound. Gloo at the door. No dancing on boxes.",
			"You leave on a timer — 10 to 15 seconds — even if boxes remain."
		],
		mistake: "Four people crouched on four boxes. A single nade or a third party from the roof ends the map.",
		drill: "After every ranked wipe, start a 15-second count. If you are still in the compound at 0, you failed the drill."
	},
	{
		slug: "steep-dive",
		title: "Steep dive, then contest the gun",
		rule: "First on the ground with a weapon wins the compound. Everything else is second.",
		category: "drop",
		roles: ["entry", "igl"],
		difficulty: "core",
		summary: "Pros pull a steep glide (and Falco if they run the pet) to hit dirt before the other squad in the same POI. The first SMG or shotgun out of a crate decides the opening 4v4.",
		why: "A hot drop is only worth it if you win the first gun. Landing 'on the roof for height' with no weapon is how you donate a 4-dead and 0 points. Clock Tower and Mill punish slow glides.",
		steps: [
			"Mark the exact crate or building, not the POI name. All four on the same plan.",
			"Dive steep. Watch other parachutes; if three squads marked your crate, IGL redirects mid-air.",
			"Entry lands on the closest weapon spawn. Support lands on gloo/kits. Do not all land on one crate.",
			"First gun out — you fight. Do not fist-fight a squad that already looted the next house."
		],
		mistake: "Spreading across an entire town 'to loot faster'. You get picked 1v4 in four separate rooms.",
		drill: "Custom hot drop the same building 10 times. Track: who had a gun first, and who won. Steepen the dive until you are first."
	},
	{
		slug: "pre-aim-head",
		title: "Crosshair at head height before the swing",
		rule: "If you have to lift the stick after you see them, you already lost the TTK.",
		category: "gunfight",
		roles: [
			"entry",
			"anchor",
			"support"
		],
		difficulty: "core",
		summary: "Pros walk around with the crosshair where a standing head will be — doorways, stair lips, gloo edges — not at the floor. The first bullets are already on the skull.",
		why: "Free Fire's first-shot advantage is massive. Dragging up from the stomach costs the burst. Every aim routine in pro practice starts with head-level tracking, not spray transfer.",
		steps: [
			"In compounds, put the dot on the head-height line of every door before you open it.",
			"On stairs, pre-aim the landing, not the steps.",
			"When right-peeking, the crosshair is already on the pixel you will see.",
			"After a kill, reset the crosshair to head height. Don't leave it on the body."
		],
		mistake: "ADS-ing at the floor while running, then flicking up. That flick is the time they used to kill you.",
		drill: "15 minutes in training: 5 on moving-head dummies, 5 on recoil bursts at head line, 5 on gloo-right-peek at head line. Daily, not 'when I feel like it'."
	},
	{
		slug: "burst-control",
		title: "Burst the AR, don't mag-dump",
		rule: "Past 15 meters, full spray is a gift of ammo and a miss.",
		category: "gunfight",
		roles: ["anchor", "entry"],
		difficulty: "core",
		summary: "M4A1, SCAR, and AK in pro hands are burst or tap guns at mid range. The SMG and shotgun get the full spray inside 15m. Mixing those ranges is how ranked players 'can't hit'.",
		why: "Recoil patterns in Free Fire walk off a head in a full mag. Pros fire 4–6 round bursts, reset, burst again. Ammo also matters in a 12-minute map — you cannot restock like a pub stomp.",
		steps: [
			"0–15m: SMG/shotgun, full spray, strafe.",
			"15–50m: AR in bursts. Crouch for the second burst if you have cover.",
			"50m+: DMR/sniper. Do not spray an M4 at a pixel on a ridge.",
			"Reload behind cover, not in the kill animation. The third party is already walking."
		],
		mistake: "Holding left-click from 40m with an AK because the first two shots tagged. The rest of the mag is sky.",
		drill: "Dummy at 30m. 10 mags, bursts only. Count headshots. Then 10 mags full spray. Keep the method that actually hits."
	},
	{
		slug: "chrono-rotate",
		title: "Chrono is a rotate tool, not a 1v1 panic",
		rule: "Drop the dome to cross open ground or to revive. Don't waste it on a lost duel.",
		category: "utility",
		roles: [
			"support",
			"igl",
			"entry"
		],
		difficulty: "advanced",
		summary: "The most common pro Chrono use is the open-field rotate and the planted revive — 600 damage shield plus the speed after. Using it as a panic bubble in a lost 1v1 wastes the only safe-cross the squad had.",
		why: "Kalahari sand and Bermuda bridges are otherwise uncrossable under AR fire. Chrono + gloo inside the dome is how league teams take those paths on time without donating a player to zone.",
		steps: [
			"IGL calls the cross: 'Chrono on my mark, we walk together.'",
			"Dome covers the exposed stretch. Optional: plant a gloo inside for a double layer.",
			"Revive happens inside the dome, not after it drops.",
			"When the shield ends, use the speed buff to finish the rotate — don't stand and spray."
		],
		mistake: "Solo Chrono in a 1v3 because you got cracked. You delay death by two seconds and leave the squad with no rotate tool.",
		drill: "Custom open field under fire. Cross 40m with Chrono as a four-man without a down. Then try it with only gloos. Feel the difference."
	},
	{
		slug: "alok-precast",
		title: "Pre-cast Alok before the swing, not after the crack",
		rule: "The aura is a push and a reset. Casting it when you are already 20 HP is late.",
		category: "utility",
		roles: [
			"support",
			"entry",
			"igl"
		],
		difficulty: "core",
		summary: "DJ Alok is the default FF esports pick because the healing aura plus speed covers a team fight. Pros pop it as they commit to a compound or a rotate, so the whole squad is already ticking up when bullets start.",
		why: "Alok's value is the 5m radius on four people, not a selfish heal. Casting after the entry is down means three people get a weak heal and the fight is already a 3v4.",
		steps: [
			"IGL: 'Alok up' is a commit call, same as 'we swing'.",
			"Stand inside the stack — the aura does nothing if you are 20m behind.",
			"Use the speed to take space or to leave, not to dance in the open.",
			"Pair with Chrono for a shielded, healing, fast rotate. That is the standard support core."
		],
		mistake: "Saving Alok 'for later' and dying with it up. Later was the fight you just lost.",
		drill: "In customs, Alok may only be cast before first contact. If you cast after a knock, the round is a failed drill."
	},
	{
		slug: "short-calls",
		title: "Call the pixel, not the story",
		rule: "Name, place, number, need. Then stop talking.",
		category: "comms",
		roles: [
			"igl",
			"entry",
			"support",
			"anchor"
		],
		difficulty: "core",
		summary: "Pro comms are short: 'two north window', 'zone west, we leave', 'down, hold, need kit'. They are not match commentary. The IGL talks most; everyone else talks when they have info the IGL cannot see.",
		why: "A 4-man in a 3-second peek cannot hear a story. Missed trades in VODs are often someone talking over the actual call. FFPL IGLs (the DEW-style shotcallers) run the map like air traffic control.",
		steps: [
			"Format: number + place + height. 'One roof clock, one stairs.'",
			"Needs: 'kit', 'gloo', 'revive', 'reloading'. Not 'I'm kind of low'.",
			"IGL owns rotate and fight/no-fight. Do not start a swing without the word.",
			"After a wipe: one sentence on next plan, then quiet so footsteps exist."
		],
		mistake: "Four people calling the same guy. The off-angle player dies silently because nobody had airtime.",
		drill: "One ranked game where non-IGL players may only speak in the format above. If you catch a sentence, you failed."
	},
	{
		slug: "reset-or-commit",
		title: "Reset or commit — never float",
		rule: "Once bullets start, you either leave together or you finish. Mid-fight loot and hesitation lose both.",
		category: "igl",
		roles: ["igl", "entry"],
		difficulty: "pro",
		summary: "The IGL makes a binary call 2–3 seconds after contact: we commit (trade, Alok, walls, swing) or we reset (smoke/gloo, Chrono, leave). Floating in the doorway is how you donate two players and still don't get the compound.",
		why: "Hesitation fights are the silent killer in series. You spend utility, get one knock, then back out into zone with no kits. League teams look indecisive on the VOD when the IGL never said the word.",
		steps: [
			"Pre-fight: 'if we see two, we commit; if we see four holding, we leave.'",
			"On contact, IGL has two seconds to say 'commit' or 'reset'.",
			"Commit: entry and support go, Alok up, no one peels to loot a box mid-swing.",
			"Reset: walls, backs to the next cover, no hero peek 'for the knock'."
		],
		mistake: "Three committing and one looting a kit 20m behind. That is neither a commit nor a reset.",
		drill: "IGL-only custom: every contact must have a spoken commit/reset. Teammates are not allowed to invent a third option."
	},
	{
		slug: "zone-as-weapon",
		title: "Use the zone as a wall",
		rule: "Pin them against the blue. Don't let them pin you.",
		category: "late",
		roles: ["igl", "anchor"],
		difficulty: "advanced",
		summary: "Late-game IGLs treat the closing zone as extra cover and as a timer on the enemy. You hold the edge they must cross. They either eat blue or eat your AR.",
		why: "A team stuck outside has to path through a known funnel. That funnel is the highest-percentage late-game spray in the sport. The team already inside who chases out into blue is the one that throws the Booyah.",
		steps: [
			"Read who is outside from sound, kills, and the map. Face that inbound.",
			"Gloo the crossing they want. Shotgun the hole, AR the wide.",
			"Do not chase a knock into the blue unless the circle is tiny and the Booyah is the knock.",
			"If you are the ones outside, you need Chrono/Alok/vehicle — not a hero 4-man sprint."
		],
		mistake: "Sitting center and 'hoping' they die to zone. They will walk in behind you while you watch the wrong 180.",
		drill: "Watch a single EWC final circle and pause at each inbound. Note who used the blue as a wall and who got walked."
	}
];
function getTip(slug) {
	return TIPS.find((t) => t.slug === slug);
}
function tipsForRole(role) {
	return TIPS.filter((t) => t.roles.includes(role));
}
function relatedTips(slug, n = 3) {
	const tip = getTip(slug);
	if (!tip) return [];
	return TIPS.filter((t) => t.slug !== slug && (t.category === tip.category || t.roles.some((r) => tip.roles.includes(r)))).slice(0, n);
}
var FEATURED_SLUGS = [
	"right-side-peek",
	"triangle-bunker",
	"twelve-alive-rule",
	"third-party-window",
	"rotate-on-shrink",
	"alok-precast"
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DqB2kjuL.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm tracking-[0.2em] text-primary uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-semibold tracking-tight text-foreground uppercase",
				children: "Off the map"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "That page is outside the zone. Head back to the playbook."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground",
				children: "Return to Circle Call"
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-auto border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm tracking-wide text-muted uppercase",
					children: "Circle Call"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-sm text-muted",
					children: "A fan playbook of techniques used in Free Fire World Series, national pro leagues, and Esports World Cup — placement math, gloo discipline, and IGL defaults. Not affiliated with Garena or 111 Dots Studio."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-x-5 gap-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/playbook",
							className: "text-foreground hover:text-primary",
							children: "Playbook"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/roles",
							className: "text-foreground hover:text-primary",
							children: "Roles"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/maps",
							className: "text-foreground hover:text-primary",
							children: "Maps"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/loadouts",
							className: "text-foreground hover:text-primary",
							children: "Loadouts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/settings",
							className: "text-foreground hover:text-primary",
							children: "HUD"
						})
					]
				})
			]
		})
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-ink/70", className),
	...props
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var SheetContent = (0, import_react.forwardRef)(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn("fixed inset-y-0 right-0 z-50 flex h-full w-[min(100%,20rem)] flex-col border-l border-border bg-background p-6 shadow-[var(--shadow-border)]", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-md text-muted hover:bg-surface hover:text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent.displayName;
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-6 pr-8", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		className: cn("font-display text-xl tracking-tight uppercase", className),
		...props
	});
}
var LINKS = [
	{
		to: "/playbook",
		label: "Playbook"
	},
	{
		to: "/roles",
		label: "Roles"
	},
	{
		to: "/maps",
		label: "Maps"
	},
	{
		to: "/loadouts",
		label: "Loadouts"
	},
	{
		to: "/settings",
		label: "HUD"
	}
];
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2.5 text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative grid size-8 place-items-center rounded-md bg-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full border-2 border-primary-foreground" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-lg leading-none tracking-wide uppercase",
			children: "Circle Call"
		})]
	});
}
function NavLinks({ onClick }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: LINKS.map((l) => {
		const active = pathname === l.to || pathname.startsWith(`${l.to}/`);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: l.to,
			onClick,
			className: cn("inline-flex min-h-11 items-center text-sm font-medium transition-colors duration-[var(--motion-quick)]", active ? "text-foreground" : "text-muted hover:text-foreground"),
			children: l.label
		}, l.to);
	}) });
}
function SiteHeader() {
	const hydrated = useHydrated();
	const count = useBookmarks((s) => s.ids.length);
	const shown = hydrated ? count : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/95",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 md:flex",
					"aria-label": "Primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/saved",
							"aria-label": `Saved tips, ${shown}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-5" }), shown > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-1.5 -right-2 min-w-4 rounded-sm bg-primary px-1 text-center font-mono text-3xs leading-4 text-primary-foreground tabular-nums",
									children: shown
								}) : null]
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "md:hidden",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Circle Call" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-col gap-1",
						"aria-label": "Mobile",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "inline-flex min-h-11 items-center text-sm font-medium text-muted hover:text-foreground",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/saved",
								className: "inline-flex min-h-11 items-center text-sm font-medium text-muted hover:text-foreground",
								children: "Saved"
							})
						]
					})] })] })]
				})
			]
		})
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "main",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var styles_default = "/assets/styles-gORmBJxy.css";
var APP_NAME = "Circle Call";
var Route$8 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Circle Call is a Free Fire esports playbook: gloo techniques, IGL defaults, rotations, and EWC scoring used in real pro matches."
			},
			{
				name: "theme-color",
				content: "#0c0b0a"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$7 = () => import("./routes-Bmgy5KWF.mjs");
var Route$7 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./loadouts-Bq3blsuF.mjs");
var Route$6 = createFileRoute("/loadouts")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [{ title: "Loadouts · Circle Call" }] })
});
var $$splitComponentImporter$5 = () => import("./maps-CRHhHlSW.mjs");
var Route$5 = createFileRoute("/maps")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "Maps · Circle Call" }] })
});
var $$splitComponentImporter$4 = () => import("./roles-D-Kx4S9Z.mjs");
var Route$4 = createFileRoute("/roles")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Squad roles · Circle Call" }] })
});
var $$splitComponentImporter$3 = () => import("./saved-DtSIU3o0.mjs");
var Route$3 = createFileRoute("/saved")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Saved · Circle Call" }] })
});
var $$splitComponentImporter$2 = () => import("./settings-DkLVppDN.mjs");
var Route$2 = createFileRoute("/settings")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "HUD & sensitivity · Circle Call" }] })
});
var $$splitComponentImporter$1 = () => import("./playbook-CTCFVMHO.mjs");
var Route$1 = createFileRoute("/playbook/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("../_slug-C35Sni9t.mjs");
var Route = createFileRoute("/playbook/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const tip = getTip(params.slug);
		if (!tip) throw notFound();
		return { tip };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.tip.title} · Circle Call` : "Circle Call" }] })
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var LoadoutsRoute = Route$6.update({
	id: "/loadouts",
	path: "/loadouts",
	getParentRoute: () => Route$8
});
var MapsRoute = Route$5.update({
	id: "/maps",
	path: "/maps",
	getParentRoute: () => Route$8
});
var RolesRoute = Route$4.update({
	id: "/roles",
	path: "/roles",
	getParentRoute: () => Route$8
});
var SavedRoute = Route$3.update({
	id: "/saved",
	path: "/saved",
	getParentRoute: () => Route$8
});
var SettingsRoute = Route$2.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => Route$8
});
var PlaybookIndexRoute = Route$1.update({
	id: "/playbook/",
	path: "/playbook/",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute,
	LoadoutsRoute,
	MapsRoute,
	RolesRoute,
	SavedRoute,
	SettingsRoute,
	PlaybookSlugRoute: Route.update({
		id: "/playbook/$slug",
		path: "/playbook/$slug",
		getParentRoute: () => Route$8
	}),
	PlaybookIndexRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFound
	});
}
//#endregion
export { FEATURED_SLUGS as a, getTip as c, useBookmarks as d, useHydrated as f, CATEGORIES as i, relatedTips as l, Route as n, ROLE_IDS as o, cn as p, Button as r, TIPS as s, router_exports as t, tipsForRole as u };
