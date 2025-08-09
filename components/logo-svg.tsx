import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoSvgProps {
  className?: string
  width?: number
  height?: number
}

export default function LogoSvg({ className, width = 64, height = 64 }: LogoSvgProps) {
  return (
    <div className={cn("relative", className)} style={{ width, height }}>
      <Image
        src="/concept2_top_right_BLACK_transparent.png"
        alt="Concept2 Company Logo"
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  )
}
