import React from "react";

interface SukhavasLogoProps {
  variant?: "horizontal" | "stacked" | "mark-only";
  className?: string;
  symbolClassName?: string;
  textClassName?: string;
  theme?: "light" | "dark" | "gold";
}

export default function SukhavasLogo({
  variant = "horizontal",
  className = "h-12 w-auto",
  theme = "light",
}: SukhavasLogoProps) {
  const colorClass =
    theme === "light"
      ? "text-white"
      : theme === "gold"
      ? "text-[#E6C7A8]"
      : "text-[#1B0E17]";

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${colorClass} ${className}`}>
        {/* Emblem */}
        <svg
          viewBox="0 0 100 100"
          className="w-16 h-16 fill-none stroke-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(50, 50)">
            {/* Lobe 1 (Top) */}
            <g>
              <path d="M -22,-3 C -18,-17 -8,-27 0,-30 C 8,-27 18,-17 22,-3" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M -18,-7 C -14,-19 -6,-25 0,-27 C 6,-25 14,-19 18,-7" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M -14,-11 C -10,-20 -4,-23 0,-24 C 4,-23 10,-20 14,-11" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M -10,-14 C -7,-19 -2,-21 0,-21.5 C 2,-21 7,-19 10,-14" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M -6,-16 C -4,-18 -1,-19 0,-19.5 C 1,-19 4,-18 6,-16" strokeWidth="2.5" strokeLinecap="round" />
            </g>
            {/* Lobe 2 (Bottom Right) */}
            <g transform="rotate(120)">
              <path d="M -22,-3 C -18,-17 -8,-27 0,-30 C 8,-27 18,-17 22,-3" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M -18,-7 C -14,-19 -6,-25 0,-27 C 6,-25 14,-19 18,-7" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M -14,-11 C -10,-20 -4,-23 0,-24 C 4,-23 10,-20 14,-11" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M -10,-14 C -7,-19 -2,-21 0,-21.5 C 2,-21 7,-19 10,-14" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M -6,-16 C -4,-18 -1,-19 0,-19.5 C 1,-19 4,-18 6,-16" strokeWidth="2.5" strokeLinecap="round" />
            </g>
            {/* Lobe 3 (Bottom Left) */}
            <g transform="rotate(240)">
              <path d="M -22,-3 C -18,-17 -8,-27 0,-30 C 8,-27 18,-17 22,-3" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M -18,-7 C -14,-19 -6,-25 0,-27 C 6,-25 14,-19 18,-7" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M -14,-11 C -10,-20 -4,-23 0,-24 C 4,-23 10,-20 14,-11" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M -10,-14 C -7,-19 -2,-21 0,-21.5 C 2,-21 7,-19 10,-14" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M -6,-16 C -4,-18 -1,-19 0,-19.5 C 1,-19 4,-18 6,-16" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </g>
        </svg>

        <span className="font-display text-xl sm:text-2xl font-semibold tracking-[0.32em] uppercase mt-2.5">
          SUKHAVAS
        </span>
        <span className="font-body text-[9px] font-medium tracking-[0.25em] uppercase text-current opacity-75 mt-0.5">
          Legacy of Elegance
        </span>
      </div>
    );
  }

  if (variant === "mark-only") {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`fill-none stroke-current ${colorClass} ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(50, 50)">
          <g>
            <path d="M -22,-3 C -18,-17 -8,-27 0,-30 C 8,-27 18,-17 22,-3" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -18,-7 C -14,-19 -6,-25 0,-27 C 6,-25 14,-19 18,-7" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -14,-11 C -10,-20 -4,-23 0,-24 C 4,-23 10,-20 14,-11" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -10,-14 C -7,-19 -2,-21 0,-21.5 C 2,-21 7,-19 10,-14" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -6,-16 C -4,-18 -1,-19 0,-19.5 C 1,-19 4,-18 6,-16" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <g transform="rotate(120)">
            <path d="M -22,-3 C -18,-17 -8,-27 0,-30 C 8,-27 18,-17 22,-3" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -18,-7 C -14,-19 -6,-25 0,-27 C 6,-25 14,-19 18,-7" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -14,-11 C -10,-20 -4,-23 0,-24 C 4,-23 10,-20 14,-11" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -10,-14 C -7,-19 -2,-21 0,-21.5 C 2,-21 7,-19 10,-14" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -6,-16 C -4,-18 -1,-19 0,-19.5 C 1,-19 4,-18 6,-16" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <g transform="rotate(240)">
            <path d="M -22,-3 C -18,-17 -8,-27 0,-30 C 8,-27 18,-17 22,-3" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -18,-7 C -14,-19 -6,-25 0,-27 C 6,-25 14,-19 18,-7" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -14,-11 C -10,-20 -4,-23 0,-24 C 4,-23 10,-20 14,-11" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -10,-14 C -7,-19 -2,-21 0,-21.5 C 2,-21 7,-19 10,-14" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -6,-16 C -4,-18 -1,-19 0,-19.5 C 1,-19 4,-18 6,-16" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 select-none ${colorClass} ${className}`}>
      {/* Emblem */}
      <svg
        viewBox="0 0 100 100"
        className="h-9 sm:h-11 md:h-12 w-auto shrink-0 fill-none stroke-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(50, 50)">
          <g>
            <path d="M -22,-3 C -18,-17 -8,-27 0,-30 C 8,-27 18,-17 22,-3" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M -18,-7 C -14,-19 -6,-25 0,-27 C 6,-25 14,-19 18,-7" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M -14,-11 C -10,-20 -4,-23 0,-24 C 4,-23 10,-20 14,-11" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M -10,-14 C -7,-19 -2,-21 0,-21.5 C 2,-21 7,-19 10,-14" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M -6,-16 C -4,-18 -1,-19 0,-19.5 C 1,-19 4,-18 6,-16" strokeWidth="2.6" strokeLinecap="round" />
          </g>
          <g transform="rotate(120)">
            <path d="M -22,-3 C -18,-17 -8,-27 0,-30 C 8,-27 18,-17 22,-3" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M -18,-7 C -14,-19 -6,-25 0,-27 C 6,-25 14,-19 18,-7" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M -14,-11 C -10,-20 -4,-23 0,-24 C 4,-23 10,-20 14,-11" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M -10,-14 C -7,-19 -2,-21 0,-21.5 C 2,-21 7,-19 10,-14" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M -6,-16 C -4,-18 -1,-19 0,-19.5 C 1,-19 4,-18 6,-16" strokeWidth="2.6" strokeLinecap="round" />
          </g>
          <g transform="rotate(240)">
            <path d="M -22,-3 C -18,-17 -8,-27 0,-30 C 8,-27 18,-17 22,-3" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M -18,-7 C -14,-19 -6,-25 0,-27 C 6,-25 14,-19 18,-7" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M -14,-11 C -10,-20 -4,-23 0,-24 C 4,-23 10,-20 14,-11" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M -10,-14 C -7,-19 -2,-21 0,-21.5 C 2,-21 7,-19 10,-14" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M -6,-16 C -4,-18 -1,-19 0,-19.5 C 1,-19 4,-18 6,-16" strokeWidth="2.6" strokeLinecap="round" />
          </g>
        </g>
      </svg>

      {/* Brand Text Stack */}
      <div className="flex flex-col justify-center text-left leading-none">
        <span className="font-display text-lg sm:text-2xl md:text-[26px] font-semibold tracking-[0.24em] uppercase">
          SUKHAVAS
        </span>
        <span className="font-body text-[8px] sm:text-[9.5px] font-medium tracking-[0.22em] uppercase text-current opacity-70 mt-1">
          Legacy of Elegance
        </span>
      </div>
    </div>
  );
}
