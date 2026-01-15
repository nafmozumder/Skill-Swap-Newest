"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline">SkillSwap</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/browse" className="text-sm text-foreground/70 hover:text-foreground transition">
            Browse Skills
          </Link>
          <Link href="/how-it-works" className="text-sm text-foreground/70 hover:text-foreground transition">
            How It Works
          </Link>
          <Link href="/about" className="text-sm text-foreground/70 hover:text-foreground transition">
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card p-4 space-y-3">
          <Link href="/browse" className="block text-sm text-foreground/70 hover:text-foreground">
            Browse Skills
          </Link>
          <Link href="/how-it-works" className="block text-sm text-foreground/70 hover:text-foreground">
            How It Works
          </Link>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" className="flex-1 bg-transparent" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button className="flex-1" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
