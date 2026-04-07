"use client";

import Image from "next/image";

type Props = {
  src?: string | null;
  alt: string;
  label?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  variant?: "portrait" | "landscape" | "square" | "book";
};

const patterns = {
  portrait: (
    <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20">
      <circle cx="100" cy="90" r="38" stroke="#00e5ff" strokeWidth="0.8" fill="none" />
      <ellipse cx="100" cy="210" rx="65" ry="50" stroke="#00e5ff" strokeWidth="0.8" fill="none" />
      <line x1="100" y1="128" x2="100" y2="160" stroke="#00e5ff" strokeWidth="0.8" />
      <circle cx="100" cy="90" r="2" fill="#00e5ff" />
      <circle cx="62" cy="90" r="1" fill="#00e5ff" opacity="0.5" />
      <circle cx="138" cy="90" r="1" fill="#00e5ff" opacity="0.5" />
    </svg>
  ),
  landscape: (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20">
      <rect x="20" y="20" width="280" height="160" stroke="#00e5ff" strokeWidth="0.8" fill="none" strokeDasharray="4 4" />
      <circle cx="160" cy="100" r="40" stroke="#00e5ff" strokeWidth="0.8" fill="none" />
      <line x1="20" y1="100" x2="120" y2="100" stroke="#00e5ff" strokeWidth="0.5" opacity="0.4" />
      <line x1="200" y1="100" x2="300" y2="100" stroke="#00e5ff" strokeWidth="0.5" opacity="0.4" />
      <circle cx="160" cy="100" r="3" fill="#00e5ff" opacity="0.6" />
    </svg>
  ),
  square: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20">
      <rect x="10" y="10" width="180" height="180" stroke="#00e5ff" strokeWidth="0.8" fill="none" />
      <rect x="30" y="30" width="140" height="140" stroke="#00e5ff" strokeWidth="0.4" fill="none" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="45" stroke="#00e5ff" strokeWidth="0.8" fill="none" />
      <circle cx="100" cy="100" r="4" fill="#00e5ff" opacity="0.5" />
      <line x1="10" y1="100" x2="55" y2="100" stroke="#00e5ff" strokeWidth="0.4" opacity="0.4" />
      <line x1="145" y1="100" x2="190" y2="100" stroke="#00e5ff" strokeWidth="0.4" opacity="0.4" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 160 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20">
      <rect x="15" y="10" width="130" height="200" stroke="#00e5ff" strokeWidth="0.8" fill="none" />
      <rect x="15" y="10" width="12" height="200" fill="#00e5ff" opacity="0.05" />
      <line x1="27" y1="10" x2="27" y2="210" stroke="#00e5ff" strokeWidth="0.8" />
      <line x1="40" y1="70" x2="130" y2="70" stroke="#00e5ff" strokeWidth="0.5" opacity="0.4" />
      <line x1="40" y1="90" x2="130" y2="90" stroke="#00e5ff" strokeWidth="0.3" opacity="0.3" />
      <line x1="40" y1="105" x2="110" y2="105" stroke="#00e5ff" strokeWidth="0.3" opacity="0.3" />
      <circle cx="85" cy="145" r="20" stroke="#00e5ff" strokeWidth="0.6" fill="none" />
      <circle cx="85" cy="145" r="3" fill="#00e5ff" opacity="0.5" />
    </svg>
  ),
};

export default function PhotoSlot({
  src,
  alt,
  label,
  className = "",
  fill = false,
  width,
  height,
  variant = "square",
}: Props) {
  if (src) {
    return fill ? (
      <Image src={src} alt={alt} fill className={`object-cover ${className}`} />
    ) : (
      <Image src={src} alt={alt} width={width ?? 400} height={height ?? 400} className={`object-cover ${className}`} />
    );
  }

  return (
    <div
      className={`relative bg-[#07070f] border border-dashed border-[#00e5ff]/20 flex flex-col items-center justify-center overflow-hidden group ${className}`}
      style={!fill && width && height ? { width, height } : {}}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#00e5ff]/30" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#00e5ff]/30" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#00e5ff]/30" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#00e5ff]/30" />
      {/* Pattern */}
      <div className="relative z-10 w-1/2 max-w-[100px]">
        {patterns[variant]}
      </div>
      {/* Label */}
      <p className="relative z-10 mt-3 text-[#6b6b8a]/50 text-[10px] font-mono tracking-[0.25em] text-center px-4">
        {label ?? "Add your photo"}
      </p>
    </div>
  );
}
