import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface CardContainerProps {
  children: ReactNode
  className?: string
  variant?: "bordered" | "filled"
  size?: "sm" | "md" | "lg"
}

export function CardContainer({ children, className, variant = "bordered", size = "md" }: CardContainerProps) {
  const sizeClasses = {
    sm: "min-h-[180px]",
    md: "min-h-[220px]",
    lg: "min-h-[260px]",
  }

  const variantClasses = {
    bordered: "border border-gray-800",
    filled: "bg-brand-gray-dark bg-opacity-30 border border-gray-800 rounded-lg",
  }

  return (
    <div className={cn("flex flex-col h-full", variantClasses[variant], sizeClasses[size], className)}>{children}</div>
  )
}
