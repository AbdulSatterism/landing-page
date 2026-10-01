import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
  bordered?: boolean;
}

export function Card({
  children,
  className,
  hoverEffect = true,
  glow = false,
  bordered = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-[#161b22]/80 backdrop-blur-md p-6 sm:p-8 transition-all duration-300",
        bordered && "border border-white/10",
        hoverEffect &&
          "hover:border-[#17B85F]/50 hover:shadow-xl hover:shadow-[#17B85F]/5 hover:-translate-y-1",
        glow && "shadow-lg shadow-[#17B85F]/10 border-[#17B85F]/30",
        className
      )}
      {...props}
    >
      {glow && (
        <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#408E1A]/20 to-[#17B85F]/20 opacity-40 blur-xl transition duration-500 group-hover:opacity-75" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
