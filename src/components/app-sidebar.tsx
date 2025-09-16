
"use client";

import * as React from "react";
import {
  LayoutDashboard,
  List,
  BarChart,
  Folder,
  Users,
  LogOut,
  ArrowUpCircle,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "#", icon: LayoutDashboard },
  { title: "Lifecycle", url: "#", icon: List },
  { title: "Analytics", url: "#", icon: BarChart },
  { title: "Projects", url: "#", icon: Folder },
  { title: "Team", url: "#", icon: Users },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="offcanvas"
      className="bg-[rgba(15,23,42,0.95)] backdrop-blur-xl text-white shadow-2xl border-r border-slate-800"
      {...props}
    >
      {/* HEADER / BRAND */}
      <SidebarHeader className="px-6 py-6 border-b border-slate-700">
        <a
          href="#"
          className="flex items-center gap-3 text-xl font-bold tracking-wide"
        >
          <ArrowUpCircle className="h-6 w-6 text-indigo-400" />
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            REEM AI
          </span>
        </a>
        <p className="mt-1 text-xs text-slate-400">Welcome, Hamid</p>
      </SidebarHeader>

      {/* NAVIGATION */}
      <SidebarContent className="px-4 py-6">
        <SidebarMenu>
          {navItems.map((item, idx) => (
            <SidebarMenuItem key={idx}>
              <SidebarMenuButton
                asChild
                className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all text-sm font-medium hover:bg-slate-800/70 hover:shadow-[0_0_12px_rgba(99,102,241,0.6)]"
              >
                <a href={item.url}>
                  <item.icon className="h-5 w-5 text-indigo-300" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* FOOTER / USER + LOGOUT */}
      <SidebarFooter className="px-6 py-4 border-t border-slate-700">
        <div className="flex items-center gap-3">
          <img
            src="/avatars/shadcn.jpg"
            alt="User Avatar"
            className="h-9 w-9 rounded-full border-2 border-indigo-400"
          />
          <div className="flex-1">
            <p className="text-sm font-medium">{`Hamid Maqbool`}</p>
            <p className="text-xs text-slate-400">hamidmaqboolhamu@gmail.com</p>
          </div>
        </div>
        <button className="mt-4 flex items-center gap-2 px-3 py-2 w-full text-sm font-medium text-slate-300 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-all">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
