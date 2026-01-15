"use client"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

interface BioSectionProps {
  isEditing: boolean
  userData: {
    bio: string
  }
}

export function BioSection({ isEditing, userData }: BioSectionProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">About Me</h2>
      {isEditing ? (
        <Textarea
          defaultValue={userData.bio}
          className="min-h-32"
          placeholder="Tell others about yourself..."
        />
      ) : (
        <p className="text-foreground/70 leading-relaxed">{userData.bio}</p>
      )}
    </Card>
  )
}
