import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Minus, r as Plus, s as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as FEATURED_SLUGS, c as getTip, r as Button } from "./router-DqB2kjuL.mjs";
import { t as TipCard } from "./tip-card-DXxlVSjd.mjs";
import { t as ROLES } from "./roles-CDhsIoaD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bmgy5KWF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** EWC 2026 Free Fire placement table (12-team map). 1 point per elimination. */
var PLACEMENT_POINTS = [
	0,
	12,
	9,
	8,
	7,
	6,
	5,
	4,
	3,
	2,
	1,
	0,
	0
];
function matchPoints(place, elims) {
	const p = Math.min(12, Math.max(1, Math.round(place)));
	const e = Math.max(0, Math.round(elims));
	return {
		place: p,
		elims: e,
		placement: PLACEMENT_POINTS[p] ?? 0,
		total: (PLACEMENT_POINTS[p] ?? 0) + e
	};
}
var SCORING_NOTES = [
	"1st is 12 placement points, 2nd is 9, then 8 down to 1 for 10th. 11th and 12th get zero placement.",
	"Every elimination is 1 extra point. Kills are a bonus, not a substitute for staying alive.",
	"Tiebreakers: most Booyahs, then most kill points, then best placement in the most recent match.",
	"A 2-kill Booyah (14 pts) beats an 8-kill 10th (9 pts). That is why the 12-alive rule exists."
];
function Stepper({ label, value, min, max, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "icon",
					className: "size-11",
					"aria-label": `Decrease ${label}`,
					onClick: () => onChange(Math.max(min, value - 1)),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-10 text-center font-mono text-lg tabular-nums",
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "icon",
					className: "size-11",
					"aria-label": `Increase ${label}`,
					onClick: () => onChange(Math.min(max, value + 1)),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
				})
			]
		})]
	});
}
function PointsCalc() {
	const [place, setPlace] = (0, import_react.useState)(4);
	const [elims, setElims] = (0, import_react.useState)(3);
	const result = matchPoints(place, elims);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-2xs tracking-wider text-primary uppercase",
				children: "EWC 2026 table"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-2xl tracking-tight uppercase",
				children: "Match points"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Placement plus one point per elimination. This is why a quiet top 4 beats a loud 10th."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
					label: "Placement",
					value: place,
					min: 1,
					max: 12,
					onChange: setPlace
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
					label: "Eliminations",
					value: elims,
					min: 0,
					max: 20,
					onChange: setElims
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-3 gap-2 rounded-lg bg-surface p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Place pts",
						value: result.placement
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Elim pts",
						value: result.elims
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Total",
						value: result.total,
						accent: true
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 space-y-2",
				children: SCORING_NOTES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-muted",
					children: n
				}, n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-mono text-2xs text-muted",
				children: [
					"1st ",
					PLACEMENT_POINTS[1],
					" · 2nd ",
					PLACEMENT_POINTS[2],
					" · 3rd ",
					PLACEMENT_POINTS[3],
					" · … · 10th",
					" ",
					PLACEMENT_POINTS[10],
					" · 11–12 ",
					PLACEMENT_POINTS[11]
				]
			})
		]
	});
}
function Stat({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-3xs tracking-wider text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: accent ? "font-display text-3xl text-primary tabular-nums" : "font-display text-3xl tabular-nums",
			children: value
		})]
	});
}
var RULES = [
	{
		n: "01",
		t: "Placement pays more than ego fights"
	},
	{
		n: "02",
		t: "Peek the right edge of every cover"
	},
	{
		n: "03",
		t: "Gloo is a weapon, not a panic button"
	},
	{
		n: "04",
		t: "Rotate on the draw, hold the rim"
	},
	{
		n: "05",
		t: "Third-party the finish"
	},
	{
		n: "06",
		t: "Info before bullets"
	}
];
function Home() {
	const featured = FEATURED_SLUGS.map((s) => getTip(s)).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-grid bg-hero-wash",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-2xs tracking-[0.22em] text-primary uppercase",
						children: "FFWS · FFPL · EWC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-5xl leading-[0.92] font-semibold tracking-tight text-foreground uppercase sm:text-7xl",
						children: "Circle Call"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl font-display text-xl tracking-wide text-muted uppercase sm:text-2xl",
						children: "The Free Fire esports playbook"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base text-muted sm:text-lg",
						children: "Techniques actual league rosters use in pro matches — not ranked pub tricks. Gloo discipline, IGL defaults, drop timing, and the placement table that decides a series."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/playbook",
								children: ["Open the playbook", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/roles",
								children: "Squad roles"
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-2xs tracking-wider text-muted uppercase",
					children: "Six defaults"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl tracking-tight uppercase",
					children: "How the lobby is actually won"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 divide-y divide-border rounded-xl bg-card shadow-[var(--shadow-border)]",
					children: RULES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline gap-4 px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm text-primary tabular-nums",
							children: r.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg tracking-wide uppercase sm:text-xl",
							children: r.t
						})]
					}, r.n))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PointsCalc, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "flex flex-col justify-between rounded-xl bg-card p-5 shadow-[var(--shadow-border)] lg:col-span-2 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-2xs tracking-wider text-primary uppercase",
						children: "Why this exists"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl tracking-tight uppercase",
						children: "Pubs are not series"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Ranked rewards highlight kills. Leagues reward the table: Booyahs, placement, then elims. The tips here come from that table — Alok/Chrono cores, triangle bunkers, 12-alive discipline, right-side peeks — the stuff you see when you watch FFWS on mute and only track who is still standing."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "mt-6 w-full",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/playbook/$slug",
						params: { slug: "twelve-alive-rule" },
						children: "Read the 12-alive rule"
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-12 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-2xs tracking-wider text-muted uppercase",
					children: "Start here"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl tracking-tight uppercase",
					children: "Core techniques"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/playbook",
					className: "hidden min-h-11 items-center text-sm text-primary sm:inline-flex",
					children: ["All tips", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((t) => t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TipCard, { tip: t }, t.slug) : null)
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-2xs tracking-wider text-muted uppercase",
					children: "Roster"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl tracking-tight uppercase",
					children: "Four jobs, not four fraggers"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/roles",
						hash: r.id,
						className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-[var(--motion-quick)] hover:shadow-[var(--shadow-border-hover)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-2xs tracking-wider text-primary uppercase",
								children: r.also
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl uppercase",
								children: r.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: r.job
							})
						]
					}, r.id))
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
