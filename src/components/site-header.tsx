import { Link, useRouterState } from "@tanstack/react-router";
import { Bookmark, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useHydrated } from "@/hooks/use-hydrated";
import { cn } from "@/lib/utils";
import { useBookmarks } from "@/store/bookmarks";

const LINKS = [
  { to: "/playbook", label: "Playbook" },
  { to: "/roles", label: "Roles" },
  { to: "/maps", label: "Maps" },
  { to: "/loadouts", label: "Loadouts" },
  { to: "/settings", label: "HUD" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 text-foreground">
      <span className="relative grid size-8 place-items-center rounded-md bg-primary">
        <span className="size-3 rounded-full border-2 border-primary-foreground" />
      </span>
      <span className="font-display text-lg leading-none tracking-wide uppercase">
        Circle Call
      </span>
    </Link>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <>
      {LINKS.map((l) => {
        const active = pathname === l.to || pathname.startsWith(`${l.to}/`);
        return (
          <Link
            key={l.to}
            to={l.to}
            onClick={onClick}
            className={cn(
              "inline-flex min-h-11 items-center text-sm font-medium transition-colors duration-[var(--motion-quick)]",
              active ? "text-foreground" : "text-muted hover:text-foreground",
            )}
          >
            {l.label}
          </Link>
        );
      })}
    </>
  );
}

export function SiteHeader() {
  const hydrated = useHydrated();
  const count = useBookmarks((s) => s.ids.length);
  const shown = hydrated ? count : 0;
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/saved" aria-label={`Saved tips, ${shown}`}>
              <span className="relative">
                <Bookmark className="size-5" />
                {shown > 0 ? (
                  <span className="absolute -top-1.5 -right-2 min-w-4 rounded-sm bg-primary px-1 text-center font-mono text-3xs leading-4 text-primary-foreground tabular-nums">
                    {shown}
                  </span>
                ) : null}
              </span>
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Circle Call</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                <Link
                  to="/"
                  className="inline-flex min-h-11 items-center text-sm font-medium text-muted hover:text-foreground"
                >
                  Home
                </Link>
                <NavLinks />
                <Link
                  to="/saved"
                  className="inline-flex min-h-11 items-center text-sm font-medium text-muted hover:text-foreground"
                >
                  Saved
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
