import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium outline-none transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    defaultVariants: { variant: "default", size: "default" },
    variants: {
      variant: {
        default: "bg-[#F47B20] text-white hover:bg-[#d96b15]",
        outline: "border border-white/25 text-white hover:border-[#F47B20] hover:text-[#F47B20]",
        ghost: "text-white hover:bg-white/10",
        transparent: "bg-transparent border-none shadow-none hover:bg-transparent",
      },
      size: {
        default: "h-10 px-5 text-sm",
        sm: "h-8 px-4 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "size-10",
      },
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
)
Button.displayName = "Button"

export { Button, buttonVariants }
