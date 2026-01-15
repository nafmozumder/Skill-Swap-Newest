"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ProfileHeader } from "@/components/profile/profile-header"
import { SkillsSection } from "@/components/profile/skills-section"
import { LocationInfo } from "@/components/profile/location-info"
import { BioSection } from "@/components/profile/bio-section"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <ProfileHeader isEditing={isEditing} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <BioSection isEditing={isEditing} />
            <SkillsSection isEditing={isEditing} />
          </div>

          <div className="lg:col-span-1">
            <LocationInfo />
            <Card className="p-6 mt-6">
              <h3 className="font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/60">Sessions Completed</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Average Rating</span>
                  <span className="font-semibold">4.9★</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Students Helped</span>
                  <span className="font-semibold">18</span>
                </div>
              </div>
            </Card>

            <div className="flex gap-2 mt-6">
              <Button
                variant={isEditing ? "default" : "outline"}
                onClick={() => setIsEditing(!isEditing)}
                className="flex-1"
              >
                {isEditing ? "Save Profile" : "Edit Profile"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
