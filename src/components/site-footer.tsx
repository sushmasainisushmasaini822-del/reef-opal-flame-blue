import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:px-6">
        <p className="font-display text-sm tracking-wide text-muted uppercase">Circle Call</p>
        <p className="max-w-2xl text-sm text-muted">
          A fan playbook of techniques used in Free Fire World Series, national pro leagues, and
          Esports World Cup — placement math, gloo discipline, and IGL defaults. Not affiliated
          with Garena or 111 Dots Studio.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link to="/playbook" className="text-foreground hover:text-primary">
            Playbook
          </Link>
          <Link to="/roles" className="text-foreground hover:text-primary">
            Roles
          </Link>
          <Link to="/maps" className="text-foreground hover:text-primary">
            Maps
          </Link>
          <Link to="/loadouts" className="text-foreground hover:text-primary">
            Loadouts
          </Link>
          <Link to="/settings" className="text-foreground hover:text-primary">
            HUD
          </Link>
        </div>
      </div>
    </footer>
  );
}
