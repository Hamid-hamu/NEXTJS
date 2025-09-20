"use client"

import * as React from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"

export default function SiteHeader() {
  const controls = useAnimation()

  React.useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({ textShadow: "0 0 15px #0ff, 0 0 25px #f0f, 0 0 30px #ec4899", transition: { duration: 1 } })
        await controls.start({ textShadow: "0 0 8px #0ff, 0 0 12px #f0f, 0 0 15px #ec4899", transition: { duration: 1 } })
      }
    }
    sequence()
  }, [controls])

  return (
    <div className="w-full h-[50px] bg-gradient-to-r from-gray-900 via-purple-900 to-gray-800 shadow-[0_0_20px_rgba(236,72,153,0.6)] border-b border-gray-700 backdrop-blur-md relative">
      <motion.div
        className="px-4 py-2 text-center flex flex-col justify-center h-full"
        animate={controls}
        initial={{ textShadow: "0 0 3px #0ff, 0 0 3px #f0f, 0 0 3px #ec4899" }}
      >
        <h1 className="text-xl md:text-2xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          🌟 REEM AI Dashboard
        </h1>
        <p className="mt-0 text-xs text-gray-300 animate-pulse">Intelligent Virtual Agents & Insights</p>
      </motion.div>

      <AnimatePresence>
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-24 bg-gradient-to-b from-cyan-400 via-pink-500 to-purple-500 rounded-full"
              style={{ left: `${15 + i * 30}%` }}
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
