import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light"; // "dark" = for dark backgrounds like footer, "light" = for white/light header
  withLink?: boolean;
  className?: string;
}

export default function BrandLogo({
  size = "md",
  variant = "light",
  withLink = true,
  className = "",
}: BrandLogoProps) {
  const iconSizes = {
    sm: "w-8 h-8 rounded-xl",
    md: "w-10 h-10 rounded-2xl",
    lg: "w-12 h-12 rounded-2xl",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const hubPillSizes = {
    sm: "text-xs px-1.5 py-0.5",
    md: "text-xs px-2 py-0.5",
    lg: "text-sm px-2.5 py-1",
  };

  const content = (
    <div className={`flex items-center gap-2.5 font-black tracking-tight select-none group ${className}`}>
      {/* Radiant Gradient Icon */}
      <div
        className={`relative ${iconSizes[size]} p-0.5 bg-gradient-to-tr from-blue-600 via-indigo-600 to-rose-500 shadow-md group-hover:shadow-indigo-500/30 group-hover:scale-105 transition-all duration-300 flex items-center justify-center overflow-hidden flex-shrink-0`}
      >
        {/* Subtle glass reflection highlight */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-white/25 rounded-t-xl pointer-events-none" />
        
        {/* Calculator Vector Glyphs */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-white relative z-10 drop-shadow-sm"
        >
          {/* Main frame */}
          <rect x="4" y="2" width="16" height="20" rx="3" />
          {/* Display screen */}
          <line x1="8" y1="6" x2="16" y2="6" strokeWidth="2.5" />
          {/* Math keys */}
          <circle cx="8" cy="11" r="0.8" fill="currentColor" />
          <circle cx="12" cy="11" r="0.8" fill="currentColor" />
          <circle cx="16" cy="11" r="0.8" fill="currentColor" />
          <circle cx="8" cy="15" r="0.8" fill="currentColor" />
          <circle cx="12" cy="15" r="0.8" fill="currentColor" />
          <circle cx="16" cy="15" r="0.8" fill="currentColor" />
          <circle cx="8" cy="18" r="0.8" fill="currentColor" />
          <circle cx="12" cy="18" r="0.8" fill="currentColor" />
          <line x1="15" y1="18" x2="17" y2="18" strokeWidth="2" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex items-center gap-1.5">
        <span className={`${textSizes[size]} font-black ${variant === "dark" ? "text-white" : "text-gray-900"}`}>
          MyCalculator
        </span>
        <span
          className={`${hubPillSizes[size]} font-black uppercase tracking-wider rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-500 text-white shadow-sm shadow-indigo-500/20`}
        >
          Hub
        </span>
      </div>
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" className="inline-flex items-center no-underline focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
