import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  containerClassName?: string
}

export default function Logo({ size = "md", className, containerClassName }: LogoProps) {
  // Definir dimensiones según el tamaño
  const dimensions = {
    sm: { width: 32, height: 32 },
    md: { width: 64, height: 64 },
    lg: { width: 128, height: 128 },
    xl: { width: 256, height: 256 },
  }

  const { width, height } = dimensions[size]

  // Usar el nuevo logo de la empresa
  const logoSrc = "/concept2_top_right_BLACK_transparent.png"

  return (
    <div className={cn("relative", containerClassName)} style={{ width, height }}>
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt="Concept2 Company Logo"
        width={width}
        height={height}
        className={cn("object-contain", className)}
        priority={size === "xl" || size === "lg"}
      />
    </div>
  )
}
