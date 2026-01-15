"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, MessageCircle, Share2 } from "lucide-react"

export default function SkillDetailPage({ params }: { params: { id: string } }) {
  const [showRequestForm, setShowRequestForm] = useState(false)

  // Mock data - would be fetched based on params.id
  const skill = {
    id: params.id,
    title: "Python Tutoring - Beginner to Intermediate",
    instructor: "Alex Johnson",
    rating: 4.9,
    reviews: 32,
    avatar: "AJ",
    description: "Learn Python from basics to advanced. Perfect for beginners and intermediate learners!",
    category: "Programming",
    skill: "Python",
    experience: "2 years",
    learners: 18,
    sessionType: "Online",
    about: `I'm passionate about teaching Python to beginners. With 2 years of experience, I've helped over 18 students master Python fundamentals.
    
My teaching style focuses on hands-on projects and real-world applications. Each session is tailored to your learning pace and goals.

Topics covered:
- Python basics and syntax
- Data structures and algorithms
- Object-oriented programming
- Web scraping and automation
- Data analysis with pandas and numpy`,
    availability: "Mon-Fri 3-8 PM, Weekends 10 AM-6 PM",
    location: "Portland, OR",
    prerequisites: "No coding experience needed!",
    sessionDuration: "60 minutes",
    maxStudents: 1,
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <a href="/browse">← Back to Browse</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-8 border-2 border-primary/20">
              <h1 className="text-3xl font-bold mb-4">{skill.title}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xl font-bold text-primary-foreground">
                  {skill.avatar}
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{skill.instructor}</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-sm text-foreground/60">
                      {skill.rating} ({skill.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-foreground/70 mb-6">{skill.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-foreground/60">Duration</p>
                    <p className="font-semibold">{skill.sessionDuration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-accent" />
                  <div>
                    <p className="text-sm text-foreground/60">Max Students</p>
                    <p className="font-semibold">{skill.maxStudents}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">About This Skill</h3>
              <div className="prose prose-sm max-w-none text-foreground/70 whitespace-pre-wrap">{skill.about}</div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-foreground/60">Category</p>
                  <Badge className="mt-1">{skill.category}</Badge>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Prerequisites</p>
                  <p className="font-medium">{skill.prerequisites}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Availability</p>
                  <p className="font-medium">{skill.availability}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Location</p>
                  <p className="font-medium">{skill.location}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-20 space-y-4">
              <Button className="w-full text-lg h-12 bg-primary hover:bg-primary/90">Request a Session</Button>
              <Button variant="outline" className="w-full h-12 gap-2 bg-transparent">
                <MessageCircle size={18} />
                Message
              </Button>
              <Button variant="outline" className="w-full h-12 gap-2 bg-transparent">
                <Share2 size={18} />
                Share
              </Button>

              <div className="border-t border-border pt-4 space-y-3">
                <div className="text-sm">
                  <p className="text-foreground/60 mb-1">Learners Helped</p>
                  <p className="text-2xl font-bold text-primary">{skill.learners}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
