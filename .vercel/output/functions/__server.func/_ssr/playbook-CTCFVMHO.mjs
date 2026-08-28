import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as CATEGORIES, o as ROLE_IDS, p as cn, s as TIPS } from "./router-DqB2kjuL.mjs";
import { t as TipCard } from "./tip-card-DXxlVSjd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/playbook-CTCFVMHO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-border bg-card px-3 text-sm text-foreground shadow-[var(--shadow-border)] transition-[box-shadow,border-color] duration-[var(--motion-quick)] placeholder:text-muted focus-visible:border-primary/40 focus-visible:shadow-[var(--shadow-border-hover)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var ROLE_LABEL = {
	igl: "IGL",
	entry: "Entry",
	support: "Support",
	anchor: "Anchor"
};
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": active,
		onClick,
		className: cn("inline-flex min-h-11 items-center rounded-md px-3 text-sm transition-colors duration-[var(--motion-quick)]", active ? "bg-primary text-primary-foreground" : "bg-card text-muted shadow-[var(--shadow-border)] hover:text-foreground"),
		children
	});
}
function PlaybookPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("all");
	const [role, setRole] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return TIPS.filter((t) => {
			if (cat !== "all" && t.category !== cat) return false;
			if (role !== "all" && !t.roles.includes(role)) return false;
			if (!query) return true;
			return t.title.toLowerCase().includes(query) || t.rule.toLowerCase().includes(query) || t.summary.toLowerCase().includes(query);
		});
	}, [
		q,
		cat,
		role
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-2xs tracking-wider text-primary uppercase",
				children: "22 techniques"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight uppercase sm:text-5xl",
				children: "Playbook"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Filter by job or topic. Every tip is a tournament default — how to execute it, the usual throw, and a drill."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "tip-search",
					className: "sr-only",
					children: "Search tips"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "tip-search",
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search peeks, gloos, rotates…"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: cat === "all",
					onClick: () => setCat("all"),
					children: "All topics"
				}), Object.keys(CATEGORIES).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: cat === id,
					onClick: () => setCat(id),
					children: CATEGORIES[id].label
				}, id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: role === "all",
					onClick: () => setRole("all"),
					children: "All roles"
				}), ROLE_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: role === id,
					onClick: () => setRole(id),
					children: ROLE_LABEL[id]
				}, id))]
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 text-sm text-muted",
				children: "No tips match that filter. Clear search or chips."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TipCard, { tip: t }, t.slug))
			})
		]
	});
}
//#endregion
export { PlaybookPage as component };
