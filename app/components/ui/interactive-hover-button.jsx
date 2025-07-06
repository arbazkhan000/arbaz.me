"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../../lib/utils";

export const InteractiveHoverButton = React.forwardRef(
  ({ children, icon: Icon, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-full border bg-background px-6 py-3 font-semibold transition-colors",
          "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
          className
        )}
        {...props}
      >
        {/* Default State */}
        <span className="flex items-center gap-2 transition-all duration-300 group-hover:-translate-x-6 group-hover:opacity-0">
          {Icon && <Icon size={18} />}
          {children}
        </span>

        {/* Hover State */}
        <span className="absolute inset-0 flex items-center justify-center gap-2 translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          {Icon && <Icon size={18} />}
          {children}
          <ArrowRight size={18} />
        </span>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
