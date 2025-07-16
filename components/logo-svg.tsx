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
        src="/logo.png"
        alt="Ayath Code Technologies Logo"
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  )
}
