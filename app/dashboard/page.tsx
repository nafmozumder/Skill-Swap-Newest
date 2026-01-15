"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Star, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome Back, Alex!</h1>
          <p className="text-foreground/60">Here's what's happening with your account</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground/60 text-sm">Sessions Completed</span>
              <Calendar className="text-primary" size={20} />
            </div>
            <p className="text-3xl font-bold">12</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground/60 text-sm">Rating</span>
              <Star className="text-accent fill-accent" size={20} />
            </div>
            <p className="text-3xl font-bold">4.9★</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground/60 text-sm">Students Helped</span>
              <Users className="text-primary" size={20} />
            </div>
            <p className="text-3xl font-bold">18</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground/60 text-sm">Profile Views</span>
              <TrendingUp className="text-accent" size={20} />
            </div>
            <p className="text-3xl font-bold">127</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg">
                <div>
                  <p className="font-medium">Python Tutoring with Jordan</p>
                  <p className="text-sm text-foreground/60">Today at 3:00 PM</p>
                </div>
                <Badge>Today</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                <div>
                  <p className="font-medium">Spanish Practice with Maria</p>
                  <p className="text-sm text-foreground/60">Tomorrow at 4:00 PM</p>
                </div>
                <Badge variant="outline">Tomorrow</Badge>
              </div>
            </div>
            <Button asChild className="w-full mt-4 bg-transparent" variant="outline">
              <Link href="/sessions">View All Sessions</Link>
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Jordan left you a 5★ review</p>
                  <p className="text-xs text-foreground/60">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Sarah requested a Python session</p>
                  <p className="text-xs text-foreground/60">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">You completed a session with Mike</p>
                  <p className="text-xs text-foreground/60">1 day ago</p>
                </div>
              </div>
            </div>
            <Button asChild className="w-full mt-4 bg-transparent" variant="outline">
              <Link href="/messages">View Messages</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
