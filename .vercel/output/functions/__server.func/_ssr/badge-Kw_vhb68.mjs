import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { p as cn } from "./router-DqB2kjuL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-Kw_vhb68.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-sm px-2 py-0.5 text-2xs font-medium tracking-wide uppercase", {
	variants: { variant: {
		default: "bg-primary/15 text-primary",
		muted: "bg-surface text-muted",
		outline: "border border-border text-muted"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
export { Badge as t };
