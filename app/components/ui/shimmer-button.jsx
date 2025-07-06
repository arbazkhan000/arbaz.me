"use client";

import React from "react";
import { cn } from "../../../lib/utils";

export const ShimmerButton = React.forwardRef(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
         style={{
    "--border-gradient": "conic-gradient(from 90deg, #ffffff40 0%, #ffffff80 50%, #ffffff40 100%)",
    "--bg": background,
    "--radius": borderRadius,
  }}
        className={cn(
    "relative overflow-hidden rounded-full",
    "border border-transparent",
    "bg-[var(--bg)]",
    "border-[3px] border-transparent",
    "border-image-[var(--border-gradient)] border-image-slice-[1]",
    "transition-all duration-300 ease-in-out",
    className
  )}
        {...props}
      >
        {/* Shimmer background */}
        <div className="-z-30 absolute inset-0 blur-sm overflow-visible">
          <div className="absolute inset-0 h-full animate-shimmer-slide [aspect-ratio:1]">
            <div
              className="absolute -inset-full w-auto [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"
            />
          </div>
        </div>

        {/* Button Content */}
        <span className="relative z-10">{children}</span>

        {/* Inner highlight */}
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "shadow-[inset_0_-8px_10px_#ffffff1f]",
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
            "transition-all duration-300 ease-in-out"
          )}
        />

        {/* Static backdrop */}
        <div
          className="absolute -z-20 inset-0 [background:var(--bg)] [border-radius:var(--radius)]"
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
