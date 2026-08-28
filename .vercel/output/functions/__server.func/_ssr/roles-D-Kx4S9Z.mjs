import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as tipsForRole } from "./router-DqB2kjuL.mjs";
import { t as TipCard } from "./tip-card-DXxlVSjd.mjs";
import { t as ROLES } from "./roles-CDhsIoaD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/roles-D-Kx4S9Z.js
var import_jsx_runtime = require_jsx_runtime();
function RolesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-2xs tracking-wider text-primary uppercase",
				children: "Roster"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight uppercase sm:text-5xl",
				children: "Four jobs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "League teams do not queue four entry fraggers. If your ranked stack has no IGL and no one holding gloos, you are not playing the sport — you are playing deathmatch on a BR map."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-14",
				children: ROLES.map((r) => {
					const tips = tipsForRole(r.id).slice(0, 3);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: r.id,
						className: "scroll-mt-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)] sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-2xs tracking-wider text-primary uppercase",
									children: r.also
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 font-display text-3xl uppercase",
									children: r.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-2xl text-muted",
									children: r.job
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 grid gap-6 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-sm tracking-wide uppercase",
										children: "Does"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 space-y-2",
										children: r.does.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "text-sm text-foreground",
											children: d
										}, d))
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-sm tracking-wide uppercase",
										children: "Never"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 space-y-2",
										children: r.never.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "text-sm text-muted",
											children: d
										}, d))
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-6 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: "Characters · "
									}), r.characters.join(" · ")]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: r.loadout
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-4 sm:grid-cols-3",
							children: tips.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TipCard, { tip: t }, t.slug))
						})]
					}, r.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-12 text-sm text-muted",
				children: [
					"Character ability notes live on",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/loadouts",
						className: "text-foreground underline-offset-4 hover:underline",
						children: "Loadouts"
					}),
					"."
				]
			})
		]
	});
}
//#endregion
export { RolesPage as component };
