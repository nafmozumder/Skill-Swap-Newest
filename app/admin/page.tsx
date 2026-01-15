"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Users, Activity, AlertCircle, TrendingUp, Search, Filter, MoreHorizontal } from "lucide-react"

const platformStats = [
  { label: "Total Users", value: "1,247", icon: Users, change: "+12%" },
  { label: "Active Sessions", value: "84", icon: Activity, change: "+8%" },
  { label: "Issues Reported", value: "3", icon: AlertCircle, change: "-2%" },
  { label: "Growth Rate", value: "+18%", icon: TrendingUp, change: "This month" },
]

const chartData = [
  { month: "Jan", users: 400, sessions: 240 },
  { month: "Feb", users: 520, sessions: 290 },
  { month: "Mar", users: 680, sessions: 350 },
  { month: "Apr", users: 890, sessions: 420 },
  { month: "May", users: 1050, sessions: 510 },
  { month: "Jun", users: 1247, sessions: 610 },
]

const userData = [
  { name: "Students", value: 820, color: "#52b1ff" },
  { name: "Instructors", value: 427, color: "#ff6b5b" },
]

const recentUsers = [
  { id: 1, name: "Alex Johnson", email: "alex@example.com", joinDate: "2024-12-15", status: "active", role: "Student" },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria@example.com",
    joinDate: "2024-12-14",
    status: "active",
    role: "Instructor",
  },
  {
    id: 3,
    name: "Jake Wilson",
    email: "jake@example.com",
    joinDate: "2024-12-13",
    status: "inactive",
    role: "Student",
  },
  {
    id: 4,
    name: "Emma Thompson",
    email: "emma@example.com",
    joinDate: "2024-12-12",
    status: "active",
    role: "Instructor",
  },
  { id: 5, name: "Sam Chen", email: "sam@example.com", joinDate: "2024-12-11", status: "active", role: "Student" },
]

const reports = [
  {
    id: 1,
    type: "Inappropriate Content",
    reporter: "Jordan Lee",
    subject: "User Profile",
    date: "2024-12-15",
    status: "pending",
  },
  { id: 2, type: "Spam", reporter: "Sarah Chen", subject: "Session Request", date: "2024-12-14", status: "resolved" },
  {
    id: 3,
    type: "Harassment",
    reporter: "Mike Johnson",
    subject: "Message",
    date: "2024-12-13",
    status: "investigating",
  },
]

export default function AdminPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-foreground/60">Platform management and monitoring</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {platformStats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <Card key={idx} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-foreground/60 text-sm font-medium">{stat.label}</span>
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <span className="text-xs text-accent">{stat.change}</span>
                    </div>
                  </Card>
                )
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 p-6">
                <h3 className="text-lg font-semibold mb-4">Platform Growth</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="hsl(var(--color-primary))" strokeWidth={2} />
                    <Line type="monotone" dataKey="sessions" stroke="hsl(var(--color-accent))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">User Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {userData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {userData.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Filter size={18} />
                Filter
              </Button>
            </div>

            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Join Date</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b border-border hover:bg-muted/30 transition">
                        <td className="px-6 py-4 text-sm font-medium">{user.name}</td>
                        <td className="px-6 py-4 text-sm text-foreground/70">{user.email}</td>
                        <td className="px-6 py-4 text-sm">
                          <Badge variant="outline">{user.role}</Badge>
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/60">{user.joinDate}</td>
                        <td className="px-6 py-4 text-sm">
                          <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal size={16} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="space-y-4">
              {reports.map((report) => (
                <Card key={report.id} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{report.type}</h3>
                        <Badge
                          variant="outline"
                          className={
                            report.status === "pending"
                              ? "bg-accent/10 text-accent border-accent/30"
                              : report.status === "investigating"
                                ? "bg-primary/10 text-primary border-primary/30"
                                : "bg-green-500/10 text-green-700 border-green-500/30"
                          }
                        >
                          {report.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground/60 mb-2">
                        Reported by <span className="font-medium">{report.reporter}</span>
                      </p>
                      <p className="text-sm text-foreground/70">
                        Subject: <span className="font-medium">{report.subject}</span>
                      </p>
                      <p className="text-xs text-foreground/50 mt-2">Reported on {report.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                      <Button size="sm" variant="ghost">
                        <MoreHorizontal size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Platform Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-foreground/60">Send notifications to admins</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">User Registration</p>
                    <p className="text-sm text-foreground/60">Allow new user registration</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">Session Verification</p>
                    <p className="text-sm text-foreground/60">Require admin verification for sessions</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5" />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button>Save Changes</Button>
                <Button variant="outline">Reset</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
