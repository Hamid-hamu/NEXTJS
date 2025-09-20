"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SidebarProvider } from "@/components/ui/sidebar"
import Sidebar from "@/components/app-sidebar"
import SiteHeader from "@/components/site-header"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import ProfilePage from "@/components/users"
import CardsSection from "@/components/cards"

import AnalyticsSection from "@/components/Analytic"
export default function Page() {
  const [selected, setSelected] = React.useState("Dashboard")

  const [stats, setStats] = React.useState({
    totalUsers: Math.floor(Math.random() * 5000),
    growth: (Math.random() * 50).toFixed(1) + "%",
    revenue: "$" + (Math.random() * 100000).toFixed(0),
  })

  const lineData = Array.from({ length: 7 }).map((_, i) => ({
    day: `Day ${i + 1}`,
    users: Math.floor(Math.random() * 500),
    revenue: Math.floor(Math.random() * 2000),
  }))

  const barData = Array.from({ length: 5 }).map((_, i) => ({
    name: `Product ${i + 1}`,
    sales: Math.floor(Math.random() * 1000),
  }))

  React.useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        totalUsers: Math.floor(Math.random() * 5000),
        growth: (Math.random() * 50).toFixed(1) + "%",
        revenue: "$" + (Math.random() * 100000).toFixed(0),
      })
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const ContentMap: Record<string, JSX.Element> = {
    Dashboard: (
      <div className="p-6 text-white grid gap-6 md:grid-cols-2">
        {[
          { label: "Total Users", value: stats.totalUsers },
          { label: "Growth %", value: stats.growth },
          { label: "Revenue", value: stats.revenue },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.4)] flex-1 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: index * 0.2 }}
          >
            <p className="text-gray-300 text-sm">{stat.label}</p>
            <p className="text-white font-bold text-2xl">{stat.value}</p>
          </motion.div>
        ))}

        <motion.div
          className="bg-gray-800/50 backdrop-blur-md p-4 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.4)] md:col-span-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.4 }}
        >
          <h2 className="text-white font-bold mb-2">User Growth</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <CartesianGrid stroke="#444" strokeDasharray="3 3" />
              <XAxis dataKey="day" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#0ff" strokeWidth={2} />
              <Line type="monotone" dataKey="revenue" stroke="#f0f" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          className="bg-gray-800/50 backdrop-blur-md p-4 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.4)] md:col-span-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.6 }}
        >
          <h2 className="text-white font-bold mb-2">Product Sales</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <CartesianGrid stroke="#444" strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="sales" fill="#0ff" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    ),
    Users: <ProfilePage/>,
    Cards: <CardsSection/>,
    Analytics: <AnalyticsSection/>,
  }

  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen bg-gray-900">
        <div className="w-screen z-50">
          <SiteHeader />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar selected={selected} setSelected={setSelected} />
          <main className="flex-1 overflow-y-auto pt-0">
            {ContentMap[selected]}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}












































































































































































































































































































































