"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Globe, Clock } from "lucide-react"

export function LocationInfo() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Location & Availability</h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <MapPin size={18} className="text-primary" />
          <div>
            <p className="text-sm text-foreground/60">Location</p>
            <p className="font-medium">Portland, OR</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Globe size={18} className="text-accent" />
          <div>
            <p className="text-sm text-foreground/60">Preferred Sessions</p>
            <p className="font-medium">Online & In-person</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock size={18} className="text-primary" />
          <div>
            <p className="text-sm text-foreground/60">Best Times</p>
            <p className="font-medium">Weekends, 2-8 PM</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
