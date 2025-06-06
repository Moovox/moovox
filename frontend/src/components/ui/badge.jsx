import React from "react";
import { cn } from "../../utils/cn";

const badgeVariants = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  destructive: "bg-destructive text-destructive-foreground",
  outline: "border border-input text-foreground",
};

export const Badge = ({
  className,
  variant = "default",
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "focus:ring-ring inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        badgeVariants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
