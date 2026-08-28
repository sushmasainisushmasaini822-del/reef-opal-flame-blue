import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-DkLVppDN.js
var import_jsx_runtime = require_jsx_runtime();
var HUD_RULES = [
	{
		title: "Gloo next to movement",
		body: "The wall button sits where the left thumb or left index already is. If you have to travel across the HUD to place a wall, you will die in the open. This is the first HUD change every league player makes."
	},
	{
		title: "Fire on the claw finger",
		body: "2-thumb: fire where the right thumb rests without covering the whole screen. 3/4-finger claw: right index on fire (and often gloo/scope), right thumb on camera, left thumb on move, left index on jump/crouch. Jump and crouch must be split so you can jump-peek."
	},
	{
		title: "Do not overlap fire and gloo",
		body: "If those two buttons share a hitbox you will wall when you meant to shoot, or shoot when you meant to wall. Give each a dedicated, large target."
	},
	{
		title: "Copy ratios, not codes",
		body: "A pro's HUD code is built for their hand, phone size, and claw. Steal the layout logic (gloo near move, fire on index, jump/crouch split). Do not paste a code and expect their aim."
	}
];
var SENS_PRESETS = [
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
			["Gyro", "Off, or 20–40 if you already drag well"]
		]
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
			["Gyro", "Off until claw or you add a light gyro layer"]
		]
	},
	{
		name: "Light gyro add-on",
		note: "Gyro is for micro recoil, not for looking around. Start tiny.",
		values: [
			["Keep your grip row", "as above"],
			["Gyro general", "25–30 to start"],
			["Mode", "Scope on, or always on once stable"],
			["Sniper", "Keep 35–40 — gyro plus high sniper is unusable"]
		]
	}
];
var SENS_NOTES = [
	"Sniper stays low on purpose. Pros miss because they over-flick 4x/sniper, not because general is 3 points off.",
	"If your client uses 0–200 sliders, keep the same ratios, not the same numbers.",
	"Change one slider a day. If you change six, you will never know what actually helped.",
	"15 minutes of training (heads, recoil, gloo) beats another hour of copying HUD codes from a thumbnail."
];
function SettingsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-2xs tracking-wider text-primary uppercase",
				children: "Hands · sliders"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight uppercase sm:text-5xl",
				children: "HUD and sensitivity"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Pros do not win because they pasted a HUD code from a thumbnail. They win because the wall button is under the finger that already moves, fire is on a claw index, and sniper sensitivity is low enough not to over-flick."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-10 grid gap-4 md:grid-cols-2",
				children: HUD_RULES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl uppercase",
						children: r.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: r.body
					})]
				}, r.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight uppercase",
						children: "Starting presets"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: "These are ranges used by claw and thumb players, not a sacred code. Copy the shape. Adjust to your phone size. If your client is 0–200, keep the ratios."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 lg:grid-cols-3",
						children: SENS_PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl uppercase",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: p.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-4 space-y-2",
									children: p.values.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted",
											children: k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-right font-mono tabular-nums",
											children: v
										})]
									}, k))
								})
							]
						}, p.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 rounded-xl bg-card p-5 shadow-[var(--shadow-border)] sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight uppercase",
					children: "Do not"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: SENS_NOTES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-muted",
						children: n
					}, n))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-sm text-muted",
				children: [
					"Pair this with the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/playbook/$slug",
						params: { slug: "pre-aim-head" },
						className: "text-foreground underline-offset-4 hover:underline",
						children: "head-height pre-aim"
					}),
					" ",
					"drill. Sensitivity without a head line is just faster missing."
				]
			})
		]
	});
}
//#endregion
export { SettingsPage as component };
