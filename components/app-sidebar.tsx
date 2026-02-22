"use client"

import { useState } from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

import {
  BookOpen,
  Bot,
  Settings,
  LayoutGrid,
  PieChart,
  ChevronRight,
  ChevronsUpDown,
} from "lucide-react"
import Link from "next/link"

export function AppSidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu))
  }

  return (
    <Sidebar side="right" variant="floating" dir="rtl" className="border-r">
      {/* ---------- HEADER ---------- */}
      <SidebarHeader>
        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-blue-600" />
            <div>
              <p className="text-sm font-semibold">Acme Inc</p>
              <p className="text-xs text-muted-foreground">
                Enterprise
              </p>
            </div>
          </div>
          <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </SidebarHeader>
      {/* ---------- CONTENT ---------- */}
      <SidebarContent>
        {/* Platform */}
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>

          <SidebarMenu>
            {/* Playground */}
            <SidebarMenuItem>
              <>
                <SidebarMenuButton onClick={() => toggleMenu("playground")}>
                  <LayoutGrid className="h-4 w-4" />
                  Playground
                  <ChevronRight
                    className={`mr-auto h-4 w-4 transition-transform duration-200 ${
                      openMenu === "playground" ? "rotate-90" : ""
                    }`}
                  />
                </SidebarMenuButton>

                {openMenu === "playground" && (
                  <div className="mt-1 mr-6 space-y-1 text-sm text-muted-foreground">
                    <Link href="/professors">
                    <p className="cursor-pointer hover:text-foreground">
                      professors
                    </p>
                    </Link>
                    <Link href="/subjects">
                    <p className="cursor-pointer hover:text-foreground">
                      subjects
                    </p>
                    </Link>
                    <Link href="/universitys">
                    <p className="cursor-pointer hover:text-foreground">
                      universitys
                    </p>
                    </Link>
                  </div>
                )}
              </>
            </SidebarMenuItem>

            {/* Models */}
            <SidebarMenuItem>
              <>
                <SidebarMenuButton onClick={() => toggleMenu("models")}>
                  <Bot className="h-4 w-4" />
                  Models
                  <ChevronRight
                    className={`mr-auto h-4 w-4 transition-transform duration-200 ${
                      openMenu === "models" ? "rotate-90" : ""
                    }`}
                  />
                </SidebarMenuButton>

                {openMenu === "models" && (
                  <div className="mt-1 mr-6 space-y-1 text-sm text-muted-foreground">
                    <p className="cursor-pointer hover:text-foreground">
                      hello
                    </p>
                    <p className="cursor-pointer hover:text-foreground">
                      Fine-tuning
                    </p>
                  </div>
                )}
              </>
            </SidebarMenuItem>

            {/* Documentation */}
            <SidebarMenuItem>
              <>
                <SidebarMenuButton onClick={() => toggleMenu("Documentation")}>
                  <Bot className="h-4 w-4" />
                  Documentation
                  <ChevronRight
                    className={`mr-auto h-4 w-4 transition-transform duration-200 ${
                      openMenu === "models" ? "rotate-90" : ""
                    }`}
                  />
                </SidebarMenuButton>

                {openMenu === "Documentation" && (
                  <div className="mt-1 mr-6 space-y-1 text-sm text-muted-foreground">
                    <p className="cursor-pointer hover:text-foreground">
                      API Reference
                    </p>
                    <p className="cursor-pointer hover:text-foreground">
                      Guides
                    </p>
                  </div>
                )}
              </>
            </SidebarMenuItem>

            {/* Settings */}
            <SidebarMenuItem>
              <>
                <SidebarMenuButton onClick={() => toggleMenu("settings")}>
                  <Settings className="h-4 w-4" />
                  Settings
                  <ChevronRight
                    className={`mr-auto h-4 w-4 transition-transform duration-200 ${
                      openMenu === "settings" ? "rotate-90" : ""
                    }`}
                  />
                </SidebarMenuButton>

                {openMenu === "settings" && (
                  <div className="mt-1 mr-6 space-y-1 text-sm text-muted-foreground">
                    <p className="cursor-pointer hover:text-foreground">
                      Profile
                    </p>
                    <p className="cursor-pointer hover:text-foreground">
                      Billing
                    </p>
                  </div>
                )}
              </>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Projects */}
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <LayoutGrid className="h-4 w-4" />
                Design Engineering
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <PieChart className="h-4 w-4" />
                Sales & Marketing
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* ---------- FOOTER ---------- */}
      <SidebarFooter>
        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-muted" />
            <div>
              <p className="text-sm font-medium">shadcn</p>
              <p className="text-xs text-muted-foreground">
                mohammad@example.com
              </p>
            </div>
          </div>
          <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}