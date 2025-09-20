"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Users, CreditCard, BarChart3, ChevronLeft, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MenuItem {
  name: string
  icon: React.ElementType
}

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: BarChart3 },
  { name: "Users", icon: Users },
  { name: "Cards", icon: CreditCard },
  { name: "Analytics", icon: BarChart3 },
]

interface SidebarProps {
  selected: string
  setSelected: (s: string) => void
}

export default function Sidebar({ selected, setSelected }: SidebarProps) {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <motion.aside
      animate={{ width: isOpen ? 240 : 80 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={cn(
        "flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white border-r border-gray-700 shadow-[0_0_25px_rgba(168,85,247,0.5)] backdrop-blur-md fixed md:relative z-50",
        isOpen ? "left-0" : "-left-72",
        "md:left-0 md:translate-x-0 transition-all duration-300"
      )}
    >
      {/* User Info */}
      <div className="px-4 py-4 flex flex-col items-center border-b border-gray-700">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-[0_0_10px_cyan]">
          H
        </div>
        <div className="mt-2 text-center">
          <p className="font-semibold text-white">Hamid</p>
          <p className="text-xs text-gray-300">hamid@example.com</p>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-3 p-4 overflow-y-auto">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          const active = selected === item.name
          return (
            <motion.div
              key={item.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setSelected(item.name)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all text-sm font-medium",
                  active
                    ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.7)]"
                    : "hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {isOpen && <span>{item.name}</span>}
              </button>
            </motion.div>
          )
        })}
      </nav>

      <div className="mt-auto">
        {/* Sidebar Collapse Button */}
        <div className="p-4 border-t border-gray-700">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full w-full flex justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronLeft className={`h-5 w-5 transition-transform ${isOpen ? "" : "rotate-180"}`} />
          </Button>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-600 hover:text-white transition-all duration-300 rounded-lg flex items-center justify-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            {isOpen && <span>Sign out</span>}
          </Button>
        </div>
      </div>
    </motion.aside>
  )
}
