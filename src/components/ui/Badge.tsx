import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gradient" | "outline" | "subtle";
  hasDot?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "subtle",
  hasDot = true,
  className,
  icon,
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide transition-all";

  const variantStyles = {
    subtle:
      "bg-[#17B85F]/10 border border-[#17B85F]/30 text-[#17B85F] backdrop-blur-md shadow-sm shadow-[#17B85F]/10",
    gradient:
      "bg-gradient-to-r from-[#408E1A]/20 to-[#17B85F]/20 border border-[#17B85F]/40 text-emerald-400 backdrop-blur-md",
    outline:
      "border border-white/20 text-slate-300 bg-white/[0.03] backdrop-blur-sm",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)}>
      {hasDot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#17B85F] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#17B85F]" />
        </span>
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
