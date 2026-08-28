import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Bookmark } from "../_libs/lucide-react.mjs";
import { d as useBookmarks, f as useHydrated, i as CATEGORIES, p as cn, r as Button } from "./router-DqB2kjuL.mjs";
import { t as Badge } from "./badge-Kw_vhb68.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tip-card-DXxlVSjd.js
var import_jsx_runtime = require_jsx_runtime();
function TipCard({ tip }) {
	const hydrated = useHydrated();
	const stored = useBookmarks((s) => s.ids.includes(tip.slug));
	const has = hydrated && stored;
	const toggle = useBookmarks((s) => s.toggle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative flex h-full flex-col rounded-xl bg-card p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-[var(--motion-quick)] hover:shadow-[var(--shadow-border-hover)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "muted",
					children: CATEGORIES[tip.category].label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon",
					className: "relative z-10 size-9 min-h-9 shrink-0",
					"aria-pressed": has,
					"aria-label": has ? "Remove bookmark" : "Save tip",
					onClick: () => toggle(tip.slug),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", has && "fill-primary text-primary") })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-xl leading-tight font-medium tracking-tight text-foreground uppercase",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/playbook/$slug",
					params: { slug: tip.slug },
					className: "after:absolute after:inset-0",
					children: tip.title
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 flex-1 text-sm text-muted",
				children: tip.rule
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-mono text-2xs tracking-wider text-muted uppercase",
				children: tip.difficulty
			})
		]
	});
}
//#endregion
export { TipCard as t };
