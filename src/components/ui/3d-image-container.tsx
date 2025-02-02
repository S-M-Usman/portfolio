"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageContainerProps {
  src: string
  alt: string
  className?: string
}

export function ImageContainer({ src, alt, className }: ImageContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      className={cn("relative w-80 h-80 md:w-[500px] md:h-[500px] transform perspective-1000", className)}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-black opacity-75 blur-2xl" />
      <div
        className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
        style={{
          transform: "rotateY(-5deg) rotateX(5deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-black/50" />
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-[2rem]"
          priority
        />
      </div>
    </motion.div>
  )
}

