"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Moon, Sun, User, Lock, Mail } from "lucide-react"

export default function SignupCard() {
  const [dark, setDark] = useState(true)

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card
        className={cn(
          "relative w-[420px] h-[640px] rounded-2xl p-6 transition-all duration-500 ease-in-out",
          "shadow-[0_20px_50px_rgba(139,92,246,0.6)]",
          "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-purple-900 before:via-purple-800 before:to-purple-950 before:-z-10",
          "hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(139,92,246,0.8)]"
        )}
      >
        {/* Header */}
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle
            className={cn(
              "text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
              "hover:scale-105 transition-transform cursor-pointer"
            )}
          >
            REEM AI
          </CardTitle>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:scale-110 transition-transform"
          >
            {dark ? <Moon className="w-5 h-5 text-cyan-300" /> : <Sun className="w-5 h-5 text-yellow-400" />}
          </button>
        </CardHeader>

        {/* Signup Form */}
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name" className="flex items-center gap-2 text-white text-sm">
              <User className="w-4 h-4" /> Full Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              className="mt-1 bg-purple-950/40 border-none focus:ring-2 focus:ring-cyan-400 text-white transition-all"
            />
          </div>
          <div>
            <Label htmlFor="email" className="flex items-center gap-2 text-white text-sm">
              <Mail className="w-4 h-4" /> Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 bg-purple-950/40 border-none focus:ring-2 focus:ring-cyan-400 text-white transition-all"
            />
          </div>
          <div>
            <Label htmlFor="password" className="flex items-center gap-2 text-white text-sm">
              <Lock className="w-4 h-4" /> Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Create password"
              className="mt-1 bg-purple-950/40 border-none focus:ring-2 focus:ring-cyan-400 text-white transition-all"
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword" className="flex items-center gap-2 text-white text-sm">
              <Lock className="w-4 h-4" /> Confirm Password
            </Label>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter password"
              className="mt-1 bg-purple-950/40 border-none focus:ring-2 focus:ring-cyan-400 text-white transition-all"
            />
          </div>

          {/* Signup Button */}
          <Button
            className={cn(
              "w-full rounded-lg font-semibold transition-all duration-300 shadow-lg",
              "hover:scale-[1.03] hover:shadow-cyan-500/50",
              dark
                ? "bg-gradient-to-r from-cyan-400 to-blue-600"
                : "bg-gradient-to-r from-pink-500 to-orange-500"
            )}
          >
            Sign Up
          </Button>

          {/* Already have account */}
          <p className="text-center text-xs text-gray-300">
            Already have an account?{" "}
            <span className="text-cyan-400 hover:underline cursor-pointer hover:text-cyan-200 transition-colors">
              Login
            </span>
          </p>
        </CardContent>

        {/* About Section */}
        <div className="px-6 text-center text-sm text-gray-300 leading-relaxed">
          <p>
            <strong className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Join REEM AI:
            </strong>{" "}
            Sign up today to unlock AI-powered dashboards, smart insights, and seamless automation.
          </p>
        </div>

        {/* Footer */}
        <CardFooter className="justify-center text-xs text-gray-400 pt-4">
          © 2025 REEM AI. All rights reserved.
        </CardFooter>
      </Card>
    </div>
  )
}
