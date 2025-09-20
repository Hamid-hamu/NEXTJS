
"use client"
import React from "react"
import type { Metadata } from "next"
import "./globals.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
       
            <main className="flex-1 p-6">{children}</main>
          
      </body>
    </html>
  )
}














