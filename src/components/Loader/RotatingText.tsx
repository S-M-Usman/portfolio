"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function RotatingText() {
  return (
    <div className="relative w-48 h-48 lg:w-64 lg:h-64 ">
      <motion.div
        className="absolute inset-0 flex items-center justify-center animate-spin"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <defs>
            <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <text fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#e9d5ff">
            <textPath href="#circle" textLength="230">
              Shaikh Muhammad Usman • Shaikh Muhammad Usman •
            </textPath>
          </text>
        </svg>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <ArrowRight className="w-8 h-8 lg:w-12 lg:h-12 text-violet-500" />
      </div>
    </div>
  )
}

