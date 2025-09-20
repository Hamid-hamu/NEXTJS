"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface StatCard {
  id: number
  title: string
  value: number
  growth: number
  color: string
}

const statsData: StatCard[] = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: ["Total Users", "Active Users", "New Signups", "Revenue ($k)", "Orders", "Feedbacks"][i],
  value: Math.floor(Math.random() * 1000 + 50),
  growth: Math.floor(Math.random() * 20 - 10), // +/- growth %
  color: ["from-cyan-400 to-pink-500", "from-purple-400 to-blue-500", "from-green-400 to-teal-500", "from-pink-400 to-red-500", "from-yellow-400 to-orange-500", "from-indigo-400 to-purple-500"][i],
}))

export default function AnalyticsSection() {
  return (
    <div className="p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.id}
          className={`bg-gray-900/60 backdrop-blur-md rounded-xl shadow-[0_0_25px_rgba(236,72,153,0.5)] p-6 flex flex-col`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 14, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, boxShadow: `0 0 25px rgba(236,72,153,0.7)` }}
        >
          <h3 className="text-white font-bold text-lg">{stat.title}</h3>
          <p className="text-3xl font-extrabold text-white mt-2">{stat.value}</p>
          <p
            className={`mt-1 text-sm font-medium ${
              stat.growth >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {stat.growth >= 0 ? `+${stat.growth}%` : `${stat.growth}%`} since last week
          </p>
          <div className="mt-4 w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${stat.color}`}
              style={{ width: `${Math.min(Math.max(stat.value / 10, 10), 100)}%` }}
            ></div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
