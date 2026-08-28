import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getTip, d as useBookmarks, f as useHydrated, r as Button } from "./router-DqB2kjuL.mjs";
import { t as TipCard } from "./tip-card-DXxlVSjd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/saved-DtSIU3o0.js
var import_jsx_runtime = require_jsx_runtime();
function SavedPage() {
	const hydrated = useHydrated();
	const ids = useBookmarks((s) => s.ids);
	const tips = hydrated ? ids.map((id) => getTip(id)).filter(Boolean) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-2xs tracking-wider text-primary uppercase",
				children: "Local"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight uppercase sm:text-5xl",
				children: "Saved tips"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Stored on this device. Bookmark from any card. Build a pre-scrim checklist."
			}),
			!hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 text-sm text-muted",
				children: "Loading saved tips…"
			}) : tips.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-xl bg-card p-8 text-center shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Nothing saved yet."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-5",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/playbook",
						children: "Open the playbook"
					})
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: tips.map((t) => t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TipCard, { tip: t }, t.slug) : null)
			})
		]
	});
}
//#endregion
export { SavedPage as component };
