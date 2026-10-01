import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const iconSizeClasses = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const badgePaddingClasses = {
    sm: "p-1.5 rounded-xl",
    md: "p-2 rounded-2xl",
    lg: "p-2.5 rounded-2xl",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="#hero"
      className={cn(
        "group inline-flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] focus:outline-none",
        className
      )}
      aria-label="VerdantIQ Homepage"
    >
      {/* 
        Strict Branding Requirement:
        Render the logo icon within a clean white circular/rounded-hex background badge
        (bg-white p-2 rounded-2xl shadow-md) for maximum contrast
      */}
      <div
        className={cn(
          "bg-white shadow-md shadow-black/20 flex items-center justify-center shrink-0 transition-shadow duration-200 group-hover:shadow-lg group-hover:shadow-[#17B85F]/20",
          badgePaddingClasses[size]
        )}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={iconSizeClasses[size]}
        >
          <defs>
            <linearGradient
              id="brandGreenGradient"
              x1="2"
              y1="4"
              x2="30"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#408E1A" />
              <stop offset="100%" stopColor="#17B85F" />
            </linearGradient>
            <linearGradient
              id="brandAccentGradient"
              x1="10"
              y1="6"
              x2="26"
              y2="26"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#17B85F" />
              <stop offset="100%" stopColor="#408E1A" />
            </linearGradient>
          </defs>
          {/* Modern high-tech geometric monogram / leaf-circuit emblem */}
          <path
            d="M16 2L28 8.5V23.5L16 30L4 23.5V8.5L16 2Z"
            stroke="url(#brandGreenGradient)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M16 8L22 11.5V18.5L16 22L10 18.5V11.5L16 8Z"
            fill="url(#brandGreenGradient)"
            fillOpacity="0.15"
          />
          <path
            d="M16 11V21M11 13.5L21 18.5M21 13.5L11 18.5"
            stroke="url(#brandAccentGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="16" cy="16" r="2.5" fill="url(#brandGreenGradient)" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-extrabold tracking-tight text-white leading-none flex items-center gap-0.5",
              textSizeClasses[size]
            )}
          >
            Verdant
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#408E1A] to-[#17B85F]">
              IQ
            </span>
          </span>
          <span className="text-[10px] tracking-widest uppercase text-slate-400 font-semibold mt-0.5">
            Enterprise Cloud
          </span>
        </div>
      )}
    </Link>
  );
}
