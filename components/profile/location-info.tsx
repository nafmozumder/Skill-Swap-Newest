"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Globe, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Dispatch, SetStateAction } from "react"

interface LocationInfoProps {
  isEditing: boolean
  userData: {
    location?: string
    preferredSessions?: string
    bestTimes?: string
  }
  setUserData: Dispatch<SetStateAction<any>>
}

export function LocationInfo({ isEditing, userData, setUserData }: LocationInfoProps) {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Location & Availability</h3>

      <div className="space-y-4">
        {/* Location */}
        <div className="flex items-center gap-3">
          <MapPin size={18} className="text-primary" />
          <div className="flex-1">
            <p className="text-sm text-foreground/60">Location</p>
            {isEditing ? (
              <Input
                type="text"
                value={userData.location || ""}
                placeholder="Enter your location"
                onChange={(e) => setUserData((prev) => ({ ...prev, location: e.target.value }))}
              />
            ) : (
              <p className="font-medium">{userData.location || "Not set"}</p>
            )}
          </div>
        </div>

        {/* Preferred Sessions */}
        <div className="flex items-center gap-3">
          <Globe size={18} className="text-accent" />
          <div className="flex-1">
            <p className="text-sm text-foreground/60">Preferred Sessions</p>
            {isEditing ? (
              <Input
                type="text"
                value={userData.preferredSessions || ""}
                placeholder="e.g., Online & In-person"
                onChange={(e) => setUserData((prev) => ({ ...prev, preferredSessions: e.target.value }))}
              />
            ) : (
              <p className="font-medium">{userData.preferredSessions || "Not set"}</p>
            )}
          </div>
        </div>

        {/* Best Times */}
        <div className="flex items-center gap-3">
          <Clock size={18} className="text-primary" />
          <div className="flex-1">
            <p className="text-sm text-foreground/60">Best Times</p>
            {isEditing ? (
              <Input
                type="text"
                value={userData.bestTimes || ""}
                placeholder="e.g., Weekends, 2-8 PM"
                onChange={(e) => setUserData((prev) => ({ ...prev, bestTimes: e.target.value }))}
              />
            ) : (
              <p className="font-medium">{userData.bestTimes || "Not set"}</p>
            )}
          </div>
        </div>

        {isEditing && (
          <p className="text-xs text-foreground/50 mt-2">
            You can update these details anytime in your profile.
          </p>
        )}
      </div>
    </Card>
  )
}
