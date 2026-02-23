import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 shadow-sm",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 shadow-sm",
        outline: "text-foreground border border-input hover:bg-accent hover:text-accent-foreground",
        success: "border-transparent bg-green-500 text-white hover:bg-green-600 shadow-sm",
        warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-600 shadow-sm",
        info: "border-transparent bg-blue-500 text-white hover:bg-blue-600 shadow-sm",
        purple: "border-transparent bg-purple-500 text-white hover:bg-purple-600 shadow-sm"
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-sm",
        lg: "px-3 py-1 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm"
    }
  }
)

const Badge = React.forwardRef(({ 
  className, 
  variant, 
  size,
  children,
  ...props 
}, ref) => {
  return (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </span>
  )
})

Badge.displayName = "Badge"

export { Badge, badgeVariants }
