"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ProfileHeader } from "@/components/profile/profile-header"
import { SkillsSection } from "@/components/profile/skills-section"
import { LocationInfo } from "@/components/profile/location-info"
import { BioSection } from "@/components/profile/bio-section"
import { auth, db } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"

// ✅ Define the user type here
interface UserData {
  fullName: string
  bio: string
  skillsOffered: string[]
  skillsSought: string[]
  location?: string
  preferredSessions?: string
  bestTimes?: string
  reviews?: number
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    // Listen for authenticated user
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setUserData(docSnap.data() as UserData)
        }
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {userData ? (
          <>
            <ProfileHeader isEditing={isEditing} userData={userData} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              <div className="lg:col-span-2 space-y-6">
                <BioSection isEditing={isEditing} userData={userData} />
                <SkillsSection isEditing={isEditing} userData={userData} />
              </div>

              <div className="lg:col-span-1">
                <LocationInfo userData={userData} />
                <Card className="p-6 mt-6">
                  <h3 className="font-semibold mb-4">Quick Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Sessions Completed</span>
                      <span className="font-semibold">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Average Rating</span>
                      <span className="font-semibold">{userData.reviews || 0}★</span>
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
          </>
        ) : (
          <p className="text-center mt-8">Loading profile...</p>
        )}
      </div>
    </div>
  )
}
