"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, MessageCircle, CheckCircle, ClockIcon } from "lucide-react"

const upcomingSessions = [
  {
    id: 1,
    title: "Python Tutoring Session",
    instructor: "Alex Johnson",
    date: "2024-12-15",
    time: "3:00 PM",
    duration: "60 minutes",
    location: "Online",
    status: "confirmed",
    avatar: "AJ",
  },
  {
    id: 2,
    title: "Spanish Conversation Practice",
    instructor: "Maria Garcia",
    date: "2024-12-17",
    time: "4:00 PM",
    duration: "45 minutes",
    location: "Online",
    status: "confirmed",
    avatar: "MG",
  },
]

const pastSessions = [
  {
    id: 3,
    title: "Guitar Basics Lesson",
    instructor: "Jake Wilson",
    date: "2024-12-08",
    time: "5:00 PM",
    duration: "60 minutes",
    location: "Portland, OR",
    status: "completed",
    avatar: "JW",
  },
]

const pendingRequests = [
  {
    id: 101,
    title: "Web Development - React Basics",
    instructor: "Emma Thompson",
    status: "pending",
    sentAt: "2024-12-13",
    avatar: "ET",
    message: "I would love to learn React and build modern web applications.",
  },
]

function SessionCard({ session, isPast = false }) {
  return (
    <Card className="p-6 hover:border-accent/50 transition">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
            {session.avatar}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{session.title}</h3>
            <p className="text-sm text-foreground/60">{session.instructor}</p>
          </div>
        </div>
        <Badge variant={isPast ? "outline" : "default"}>{isPast ? "Completed" : "Confirmed"}</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-muted-foreground" />
          <span>{session.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-muted-foreground" />
          <span>{session.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon size={16} className="text-muted-foreground" />
          <span>{session.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-muted-foreground" />
          <span>{session.location}</span>
        </div>
      </div>

      {!isPast && (
        <div className="flex gap-2">
          <Button className="flex-1 gap-2">
            <MessageCircle size={16} />
            Message
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            Reschedule
          </Button>
        </div>
      )}
    </Card>
  )
}

function RequestCard({ request }) {
  return (
    <Card className="p-6 hover:border-accent/50 transition">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
            {request.avatar}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{request.title}</h3>
            <p className="text-sm text-foreground/60">{request.instructor}</p>
          </div>
        </div>
        <Badge variant="outline" className="text-accent border-accent/30 bg-accent/5">
          Pending
        </Badge>
      </div>

      <p className="text-foreground/70 mb-4 text-sm">{request.message}</p>

      <p className="text-xs text-foreground/50 mb-4">Sent on {request.sentAt}</p>

      <div className="flex gap-2">
        <Button className="flex-1 gap-2">
          <CheckCircle size={16} />
          Accept & Schedule
        </Button>
        <Button variant="outline" className="flex-1 bg-transparent">
          Decline
        </Button>
      </div>
    </Card>
  )
}

export default function SessionsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Sessions</h1>
          <p className="text-foreground/60">Manage your skill exchange sessions</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingSessions.length > 0 ? (
              upcomingSessions.map((session) => <SessionCard key={session.id} session={session} />)
            ) : (
              <Card className="p-8 text-center">
                <p className="text-foreground/60 mb-4">No upcoming sessions scheduled.</p>
                <Button asChild>
                  <a href="/browse">Browse Skills & Schedule One</a>
                </Button>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastSessions.length > 0 ? (
              pastSessions.map((session) => <SessionCard key={session.id} session={session} isPast={true} />)
            ) : (
              <Card className="p-8 text-center">
                <p className="text-foreground/60">No past sessions yet.</p>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="requests" className="space-y-4">
            {pendingRequests.length > 0 ? (
              pendingRequests.map((request) => <RequestCard key={request.id} request={request} />)
            ) : (
              <Card className="p-8 text-center">
                <p className="text-foreground/60">No pending requests.</p>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
