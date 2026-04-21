import React from "react";

const categoryConfig: Record<string, { accent: string; wash: string }> = {
  Business: { accent: "#00e5ff", wash: "rgba(0, 229, 255, 0.10)" },
  Communication: { accent: "#00daf0", wash: "rgba(0, 218, 240, 0.10)" },
  Philosophy: { accent: "#64b8ff", wash: "rgba(100, 184, 255, 0.10)" },
  Personal: { accent: "#00e5ff", wash: "rgba(0, 229, 255, 0.08)" },
  Digital: { accent: "#00c8e0", wash: "rgba(0, 200, 224, 0.10)" },
  Marketing: { accent: "#00e5ff", wash: "rgba(0, 229, 255, 0.10)" },
  Community: { accent: "#00daf0", wash: "rgba(0, 218, 240, 0.09)" },
};

function getConfig(category: string) {
  return categoryConfig[category] ?? { accent: "#00e5ff", wash: "rgba(0, 229, 255, 0.08)" };
}

export default function BlogVisual({
  category,
  className = "",
}: {
  category: string;
  title?: string;
  className?: string;
}) {
  const cfg = getConfig(category);

  return (
    <div className={`relative bg-[#07070f] overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background:
            `radial-gradient(circle at 24% 18%, ${cfg.wash}, transparent 34%), ` +
            "linear-gradient(135deg, rgba(255,255,255,0.035), transparent 45%), " +
            "linear-gradient(180deg, #0b0b14 0%, #050509 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: `linear-gradient(to right, transparent, ${cfg.accent}55, transparent)` }}
      />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.34em]"
          style={{ color: cfg.accent, opacity: 0.7 }}
        >
          {category}
        </span>
        <span className="h-px w-10" style={{ backgroundColor: cfg.accent, opacity: 0.25 }} />
      </div>
    </div>
  );
}
