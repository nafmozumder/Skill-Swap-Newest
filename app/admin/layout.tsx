"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, Users, AlertCircle, Settings } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-card">
          <div className="p-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">S</span>
              </div>
              <span className="font-bold">SkillSwap Admin</span>
            </Link>
          </div>

          <nav className="space-y-2 px-4">
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/admin">
                <BarChart3 size={18} />
                Overview
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/admin/users">
                <Users size={18} />
                Users
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/admin/reports">
                <AlertCircle size={18} />
                Reports
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/admin/settings">
                <Settings size={18} />
                Settings
              </Link>
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
