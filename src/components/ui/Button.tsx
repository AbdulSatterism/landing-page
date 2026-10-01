"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gradient" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "gradient",
      size = "md",
      href,
      isExternal,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17B85F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variantStyles = {
      gradient:
        "bg-gradient-to-r from-[#408E1A] to-[#17B85F] text-white shadow-lg shadow-[#17B85F]/20 hover:shadow-[#17B85F]/35 hover:brightness-110 active:scale-[0.98]",
      outline:
        "border border-white/20 text-white hover:border-[#17B85F] hover:bg-[#17B85F]/10 hover:text-white active:scale-[0.98] backdrop-blur-sm",
      ghost:
        "text-slate-300 hover:text-white hover:bg-white/10 active:scale-[0.98]",
      secondary:
        "bg-white/10 text-white hover:bg-white/15 active:scale-[0.98] backdrop-blur-sm border border-white/5",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
