import React from "react";

const categoryConfig: Record<string, { symbol: string; accent: string; lines: string }> = {
  Business:      { symbol: "◈", accent: "#00e5ff", lines: "grid" },
  Communication: { symbol: "◉", accent: "#00daf0", lines: "radial" },
  Philosophy:    { symbol: "◎", accent: "#64b8ff", lines: "arc" },
  Personal:      { symbol: "◇", accent: "#00e5ff", lines: "dots" },
  Digital:       { symbol: "⬡", accent: "#00c8e0", lines: "hex" },
  Marketing:     { symbol: "△", accent: "#00e5ff", lines: "grid" },
  Community:     { symbol: "○", accent: "#00daf0", lines: "radial" },
};

function getConfig(category: string) {
  return categoryConfig[category] ?? { symbol: "◆", accent: "#00e5ff", lines: "grid" };
}

function GridPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#00e5ff" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)"/>
    </svg>
  );
}

function RadialPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#00e5ff"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)"/>
    </svg>
  );
}

function ArcPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {[40, 70, 100, 130, 160].map((r) => (
        <circle key={r} cx="100" cy="200" r={r} fill="none" stroke="#00e5ff" strokeWidth="0.6"/>
      ))}
    </svg>
  );
}

function getPattern(lines: string) {
  if (lines === "radial" || lines === "dots") return <RadialPattern />;
  if (lines === "arc") return <ArcPattern />;
  return <GridPattern />;
}

export default function BlogVisual({
  category,
  title,
  className = "",
}: {
  category: string;
  title?: string;
  className?: string;
}) {
  const cfg = getConfig(category);
  const initial = title ? title[0].toUpperCase() : category[0].toUpperCase();

  return (
    <div className={`relative bg-[#07070f] overflow-hidden flex items-center justify-center ${className}`}>
      {getPattern(cfg.lines)}

      {/* Large faded initial */}
      <span
        className="absolute select-none font-light leading-none pointer-events-none"
        style={{
          fontSize: "clamp(80px, 30%, 220px)",
          color: cfg.accent,
          opacity: 0.04,
          letterSpacing: "-0.05em",
        }}
      >
        {initial}
      </span>

      {/* Center symbol */}
      <span
        className="relative z-10 text-2xl"
        style={{ color: cfg.accent, opacity: 0.25 }}
      >
        {cfg.symbol}
      </span>

      {/* Thin horizontal accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(to right, transparent, ${cfg.accent}40, transparent)` }}
      />

      {/* Category badge — top left */}
      <div className="absolute top-4 left-4">
        <span
          className="text-[10px] tracking-[0.35em] uppercase font-mono px-2 py-1 border"
          style={{ color: cfg.accent, borderColor: `${cfg.accent}30`, background: "rgba(0,0,0,0.6)" }}
        >
          {category}
        </span>
      </div>
    </div>
  );
}
