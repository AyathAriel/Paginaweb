"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface LogoLoaderProps {
  onComplete?: () => void
}

export default function LogoLoader({ onComplete }: LogoLoaderProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={onComplete}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: 1,
            repeatType: "reverse",
          }}
        >
          <Image
            src="/logo-256.png"
            alt="ADO CODE Technologies Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </motion.div>

        <motion.div
          className="mt-4 text-center font-display font-bold text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          ADO CODE
          <motion.span
            className="text-muted-foreground font-normal text-sm block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Technologies
          </motion.span>
        </motion.div>

        <motion.div
          className="mt-6 w-48 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.2, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
