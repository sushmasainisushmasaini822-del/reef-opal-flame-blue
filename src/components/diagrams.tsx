import type { JSX, ReactNode } from "react";
import type { DiagramId } from "@/data/playbook";

const svg = "w-full h-auto text-foreground";

function Frame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-xl bg-card p-3 shadow-[var(--shadow-border)]">
      <figcaption className="px-2 pt-1 pb-2 font-mono text-2xs tracking-wider text-muted uppercase">
        {title}
      </figcaption>
      {children}
    </figure>
  );
}

function RightPeek() {
  return (
    <Frame title="Right-side peek · less body shown">
      <svg viewBox="0 0 400 180" className={svg} aria-hidden="true">
        <rect x="40" y="28" width="70" height="124" className="fill-surface stroke-muted" strokeWidth="1.5" />
        <text x="75" y="94" textAnchor="middle" className="fill-muted" fontSize="11">
          COVER
        </text>
        <circle cx="128" cy="70" r="10" className="fill-primary" />
        <rect x="122" y="82" width="12" height="36" className="fill-foreground/80" />
        <line x1="134" y1="70" x2="210" y2="62" className="stroke-primary" strokeWidth="2" />
        <text x="168" y="54" className="fill-primary" fontSize="11">
          peek right
        </text>
        <circle cx="300" cy="88" r="10" className="fill-muted" />
        <rect x="294" y="100" width="12" height="36" className="fill-muted" />
        <text x="300" y="154" textAnchor="middle" className="fill-muted" fontSize="10">
          ENEMY
        </text>
        <text x="128" y="168" textAnchor="middle" className="fill-foreground" fontSize="10">
          YOU
        </text>
      </svg>
    </Frame>
  );
}

function Triangle() {
  return (
    <Frame title="Triangle bunker · 360 cover">
      <svg viewBox="0 0 400 180" className={svg} aria-hidden="true">
        <path
          d="M200 36 L308 150 L92 150 Z"
          className="fill-primary/10 stroke-primary"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <circle cx="200" cy="112" r="8" className="fill-foreground" />
        <circle cx="184" cy="124" r="6" className="fill-muted" />
        <circle cx="216" cy="124" r="6" className="fill-muted" />
        <text x="200" y="172" textAnchor="middle" className="fill-muted" fontSize="11">
          revive / heal inside
        </text>
      </svg>
    </Frame>
  );
}

function JumpGloo() {
  return (
    <Frame title="Slide / jump gloo · wall behind you">
      <svg viewBox="0 0 400 180" className={svg} aria-hidden="true">
        <path
          d="M40 130 C90 130, 90 70, 150 70"
          className="stroke-muted"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4"
        />
        <rect x="148" y="48" width="18" height="70" className="fill-primary/80" />
        <circle cx="200" cy="78" r="8" className="fill-foreground" />
        <path d="M210 90 L250 120" className="stroke-foreground" strokeWidth="2" />
        <circle cx="80" cy="118" r="8" className="fill-muted" />
        <text x="80" y="154" textAnchor="middle" className="fill-muted" fontSize="10">
          CHASER
        </text>
        <text x="157" y="40" className="fill-primary" fontSize="10">
          WALL
        </text>
      </svg>
    </Frame>
  );
}

function EdgeHold() {
  return (
    <Frame title="Hold the rim · zone is a wall">
      <svg viewBox="0 0 400 180" className={svg} aria-hidden="true">
        <circle cx="200" cy="90" r="70" className="fill-primary/5 stroke-primary/70" strokeWidth="2" />
        <circle cx="200" cy="90" r="18" className="fill-transparent stroke-muted" strokeWidth="1" strokeDasharray="3 3" />
        <text x="200" y="94" textAnchor="middle" className="fill-muted" fontSize="9">
          DEAD
        </text>
        <circle cx="148" cy="48" r="7" className="fill-foreground" />
        <circle cx="252" cy="44" r="7" className="fill-foreground" />
        <circle cx="268" cy="110" r="7" className="fill-foreground" />
        <text x="200" y="172" textAnchor="middle" className="fill-muted" fontSize="11">
          you sit on the edge, not the bullseye
        </text>
      </svg>
    </Frame>
  );
}

function Crossfire() {
  return (
    <Frame title="Door crossfire · two angles, one entry">
      <svg viewBox="0 0 400 180" className={svg} aria-hidden="true">
        <rect x="150" y="28" width="160" height="120" className="fill-surface stroke-muted" strokeWidth="1.5" />
        <rect x="150" y="70" width="14" height="36" className="fill-background" />
        <circle cx="200" cy="88" r="7" className="fill-primary" />
        <circle cx="278" cy="50" r="7" className="fill-foreground" />
        <circle cx="90" cy="88" r="7" className="fill-muted" />
        <line x1="200" y1="88" x2="164" y2="88" className="stroke-primary" strokeWidth="2" />
        <line x1="278" y1="50" x2="164" y2="82" className="stroke-foreground" strokeWidth="2" />
        <text x="90" y="114" textAnchor="middle" className="fill-muted" fontSize="10">
          PUSHER
        </text>
        <text x="200" y="112" textAnchor="middle" className="fill-primary" fontSize="9">
          A
        </text>
        <text x="278" y="38" textAnchor="middle" className="fill-foreground" fontSize="9">
          B
        </text>
      </svg>
    </Frame>
  );
}

function ThirdParty() {
  return (
    <Frame title="Third party · collapse after they spend">
      <svg viewBox="0 0 400 180" className={svg} aria-hidden="true">
        <circle cx="130" cy="80" r="8" className="fill-muted" />
        <circle cx="160" cy="100" r="8" className="fill-muted" />
        <circle cx="200" cy="70" r="8" className="fill-muted" />
        <circle cx="230" cy="96" r="8" className="fill-muted" />
        <path d="M145 88 L215 84" className="stroke-muted" strokeWidth="1.5" />
        <circle cx="320" cy="120" r="7" className="fill-primary" />
        <circle cx="338" cy="138" r="7" className="fill-primary" />
        <circle cx="302" cy="138" r="7" className="fill-primary" />
        <circle cx="320" cy="154" r="7" className="fill-primary" />
        <path d="M310 128 L240 100" className="stroke-primary" strokeWidth="2" />
        <text x="145" y="40" className="fill-muted" fontSize="10">
          4v4 already burning
        </text>
        <text x="268" y="170" className="fill-primary" fontSize="10">
          you collapse
        </text>
      </svg>
    </Frame>
  );
}

function RotateEarly() {
  return (
    <Frame title="Rotate on the draw · not on the bite">
      <svg viewBox="0 0 400 180" className={svg} aria-hidden="true">
        <circle cx="130" cy="90" r="58" className="fill-transparent stroke-muted" strokeWidth="2" />
        <circle cx="230" cy="90" r="40" className="fill-primary/10 stroke-primary" strokeWidth="2" />
        <circle cx="96" cy="70" r="6" className="fill-foreground" />
        <path d="M104 74 L200 90" className="stroke-primary" strokeWidth="2" />
        <text x="70" y="58" className="fill-muted" fontSize="10">
          NOW
        </text>
        <text x="222" y="148" className="fill-primary" fontSize="10">
          next zone
        </text>
      </svg>
    </Frame>
  );
}

function SkyGloo() {
  return (
    <Frame title="Sky gloo · jump, wall under feet">
      <svg viewBox="0 0 400 180" className={svg} aria-hidden="true">
        <rect x="170" y="100" width="60" height="14" className="fill-primary" />
        <rect x="178" y="86" width="44" height="14" className="fill-primary/70" />
        <circle cx="200" cy="70" r="8" className="fill-foreground" />
        <path d="M200 40 L200 62" className="stroke-muted" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="200" y="32" textAnchor="middle" className="fill-muted" fontSize="10">
          JUMP
        </text>
        <line x1="40" y1="114" x2="360" y2="114" className="stroke-muted/40" strokeWidth="1" />
      </svg>
    </Frame>
  );
}

const MAP: Record<DiagramId, () => JSX.Element> = {
  "right-peek": RightPeek,
  triangle: Triangle,
  "jump-gloo": JumpGloo,
  "edge-hold": EdgeHold,
  crossfire: Crossfire,
  "third-party": ThirdParty,
  "rotate-early": RotateEarly,
  "sky-gloo": SkyGloo,
};

export function TipDiagram({ id }: { id: DiagramId }) {
  const Comp = MAP[id];
  return <Comp />;
}
