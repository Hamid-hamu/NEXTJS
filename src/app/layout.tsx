
import "./globals.css"
import React from "react";


export const metadata = {
  title: "My Next.js App",
  description: "A clean, responsive root layout for Next.js (app router)",
};

type Props = {
  children: React.ReactNode;
};

/**
 * Root layout for Next.js app router (layout.tsx)
 * - Server component by default (no "use client" at the top)
 * - Uses Tailwind utility classes for styling (assumes Tailwind is installed)
 * - Drop this file into the `app/` folder as `layout.tsx` or adapt for a nested layout
 */
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body >
        {children}
        
      
      </body>
    </html>
  );
}
