import React from "react";

/** Icono Lucide inline — stroke 2px, currentColor, sin deps externas */
export function Icon({ d, size = 24, fill, color, style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill || "none"}
      stroke={fill ? "none" : color || "currentColor"}
      strokeWidth={fill ? undefined : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      {d.map((path, i) => <path key={i} d={path} />)}
    </svg>
  );
}