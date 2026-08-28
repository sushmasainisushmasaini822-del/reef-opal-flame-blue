import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { c as ArrowLeft, o as Bookmark } from "./_libs/lucide-react.mjs";
import { d as useBookmarks, f as useHydrated, i as CATEGORIES, l as relatedTips, n as Route, p as cn, r as Button } from "./_ssr/router-DqB2kjuL.mjs";
import { t as Badge } from "./_ssr/badge-Kw_vhb68.mjs";
import { t as TipCard } from "./_ssr/tip-card-DXxlVSjd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-C35Sni9t.js
var import_jsx_runtime = require_jsx_runtime();
var svg = "w-full h-auto text-foreground";
function Frame({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "overflow-hidden rounded-xl bg-card p-3 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "px-2 pt-1 pb-2 font-mono text-2xs tracking-wider text-muted uppercase",
			children: title
		}), children]
	});
}
function RightPeek() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Right-side peek · less body shown",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 400 180",
			className: svg,
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "28",
					width: "70",
					height: "124",
					className: "fill-surface stroke-muted",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "75",
					y: "94",
					textAnchor: "middle",
					className: "fill-muted",
					fontSize: "11",
					children: "COVER"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "128",
					cy: "70",
					r: "10",
					className: "fill-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "122",
					y: "82",
					width: "12",
					height: "36",
					className: "fill-foreground/80"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "134",
					y1: "70",
					x2: "210",
					y2: "62",
					className: "stroke-primary",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "168",
					y: "54",
					className: "fill-primary",
					fontSize: "11",
					children: "peek right"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "300",
					cy: "88",
					r: "10",
					className: "fill-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "294",
					y: "100",
					width: "12",
					height: "36",
					className: "fill-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "300",
					y: "154",
					textAnchor: "middle",
					className: "fill-muted",
					fontSize: "10",
					children: "ENEMY"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "128",
					y: "168",
					textAnchor: "middle",
					className: "fill-foreground",
					fontSize: "10",
					children: "YOU"
				})
			]
		})
	});
}
function Triangle() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Triangle bunker · 360 cover",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 400 180",
			className: svg,
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M200 36 L308 150 L92 150 Z",
					className: "fill-primary/10 stroke-primary",
					strokeWidth: "6",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "112",
					r: "8",
					className: "fill-foreground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "184",
					cy: "124",
					r: "6",
					className: "fill-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "216",
					cy: "124",
					r: "6",
					className: "fill-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "200",
					y: "172",
					textAnchor: "middle",
					className: "fill-muted",
					fontSize: "11",
					children: "revive / heal inside"
				})
			]
		})
	});
}
function JumpGloo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Slide / jump gloo · wall behind you",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 400 180",
			className: svg,
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M40 130 C90 130, 90 70, 150 70",
					className: "stroke-muted",
					strokeWidth: "2",
					fill: "none",
					strokeDasharray: "4 4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "148",
					y: "48",
					width: "18",
					height: "70",
					className: "fill-primary/80"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "78",
					r: "8",
					className: "fill-foreground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M210 90 L250 120",
					className: "stroke-foreground",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "80",
					cy: "118",
					r: "8",
					className: "fill-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "80",
					y: "154",
					textAnchor: "middle",
					className: "fill-muted",
					fontSize: "10",
					children: "CHASER"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "157",
					y: "40",
					className: "fill-primary",
					fontSize: "10",
					children: "WALL"
				})
			]
		})
	});
}
function EdgeHold() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Hold the rim · zone is a wall",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 400 180",
			className: svg,
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "90",
					r: "70",
					className: "fill-primary/5 stroke-primary/70",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "90",
					r: "18",
					className: "fill-transparent stroke-muted",
					strokeWidth: "1",
					strokeDasharray: "3 3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "200",
					y: "94",
					textAnchor: "middle",
					className: "fill-muted",
					fontSize: "9",
					children: "DEAD"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "148",
					cy: "48",
					r: "7",
					className: "fill-foreground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "252",
					cy: "44",
					r: "7",
					className: "fill-foreground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "268",
					cy: "110",
					r: "7",
					className: "fill-foreground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "200",
					y: "172",
					textAnchor: "middle",
					className: "fill-muted",
					fontSize: "11",
					children: "you sit on the edge, not the bullseye"
				})
			]
		})
	});
}
function Crossfire() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Door crossfire · two angles, one entry",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 400 180",
			className: svg,
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "150",
					y: "28",
					width: "160",
					height: "120",
					className: "fill-surface stroke-muted",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "150",
					y: "70",
					width: "14",
					height: "36",
					className: "fill-background"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "88",
					r: "7",
					className: "fill-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "278",
					cy: "50",
					r: "7",
					className: "fill-foreground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "90",
					cy: "88",
					r: "7",
					className: "fill-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "200",
					y1: "88",
					x2: "164",
					y2: "88",
					className: "stroke-primary",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "278",
					y1: "50",
					x2: "164",
					y2: "82",
					className: "stroke-foreground",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "90",
					y: "114",
					textAnchor: "middle",
					className: "fill-muted",
					fontSize: "10",
					children: "PUSHER"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "200",
					y: "112",
					textAnchor: "middle",
					className: "fill-primary",
					fontSize: "9",
					children: "A"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "278",
					y: "38",
					textAnchor: "middle",
					className: "fill-foreground",
					fontSize: "9",
					children: "B"
				})
			]
		})
	});
}
function ThirdParty() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Third party · collapse after they spend",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 400 180",
			className: svg,
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "130",
					cy: "80",
					r: "8",
					className: "fill-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "100",
					r: "8",
					className: "fill-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "70",
					r: "8",
					className: "fill-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "230",
					cy: "96",
					r: "8",
					className: "fill-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M145 88 L215 84",
					className: "stroke-muted",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "320",
					cy: "120",
					r: "7",
					className: "fill-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "338",
					cy: "138",
					r: "7",
					className: "fill-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "302",
					cy: "138",
					r: "7",
					className: "fill-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "320",
					cy: "154",
					r: "7",
					className: "fill-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M310 128 L240 100",
					className: "stroke-primary",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "145",
					y: "40",
					className: "fill-muted",
					fontSize: "10",
					children: "4v4 already burning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "268",
					y: "170",
					className: "fill-primary",
					fontSize: "10",
					children: "you collapse"
				})
			]
		})
	});
}
function RotateEarly() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Rotate on the draw · not on the bite",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 400 180",
			className: svg,
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "130",
					cy: "90",
					r: "58",
					className: "fill-transparent stroke-muted",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "230",
					cy: "90",
					r: "40",
					className: "fill-primary/10 stroke-primary",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "96",
					cy: "70",
					r: "6",
					className: "fill-foreground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M104 74 L200 90",
					className: "stroke-primary",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "70",
					y: "58",
					className: "fill-muted",
					fontSize: "10",
					children: "NOW"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "222",
					y: "148",
					className: "fill-primary",
					fontSize: "10",
					children: "next zone"
				})
			]
		})
	});
}
function SkyGloo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Sky gloo · jump, wall under feet",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 400 180",
			className: svg,
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "170",
					y: "100",
					width: "60",
					height: "14",
					className: "fill-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "178",
					y: "86",
					width: "44",
					height: "14",
					className: "fill-primary/70"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "200",
					cy: "70",
					r: "8",
					className: "fill-foreground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M200 40 L200 62",
					className: "stroke-muted",
					strokeWidth: "1.5",
					strokeDasharray: "3 3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "200",
					y: "32",
					textAnchor: "middle",
					className: "fill-muted",
					fontSize: "10",
					children: "JUMP"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "40",
					y1: "114",
					x2: "360",
					y2: "114",
					className: "stroke-muted/40",
					strokeWidth: "1"
				})
			]
		})
	});
}
var MAP = {
	"right-peek": RightPeek,
	triangle: Triangle,
	"jump-gloo": JumpGloo,
	"edge-hold": EdgeHold,
	crossfire: Crossfire,
	"third-party": ThirdParty,
	"rotate-early": RotateEarly,
	"sky-gloo": SkyGloo
};
function TipDiagram({ id }) {
	const Comp = MAP[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {});
}
function TipPage() {
	const { tip } = Route.useLoaderData();
	const hydrated = useHydrated();
	const stored = useBookmarks((s) => s.ids.includes(tip.slug));
	const has = hydrated && stored;
	const toggle = useBookmarks((s) => s.toggle);
	const related = relatedTips(tip.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/playbook",
				className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Playbook"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: CATEGORIES[tip.category].label }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "muted",
						children: tip.difficulty
					}),
					tip.roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: r
					}, r))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl leading-[1.05] font-semibold tracking-tight uppercase sm:text-5xl",
					children: tip.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "icon",
					"aria-pressed": has,
					"aria-label": has ? "Remove bookmark" : "Save tip",
					onClick: () => toggle(tip.slug),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", has && "fill-primary text-primary") })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted",
				children: tip.rule
			}),
			tip.diagram ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TipDiagram, { id: tip.diagram })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight uppercase",
						children: "In the match"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-foreground",
						children: tip.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: tip.why
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight uppercase",
					children: "How to do it"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-3",
					children: tip.steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4 rounded-lg bg-card p-4 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm text-primary tabular-nums",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm sm:text-base",
							children: s
						})]
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg uppercase",
						children: "The usual throw"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: tip.mistake
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg uppercase",
						children: "Drill"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: tip.drill
					})]
				})]
			}),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight uppercase",
					children: "Next"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 sm:grid-cols-2",
					children: related.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TipCard, { tip: t }, t.slug))
				})]
			}) : null
		]
	});
}
//#endregion
export { TipPage as component };
