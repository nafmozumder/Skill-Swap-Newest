"use client"

import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

interface BioSectionProps {
  isEditing: boolean
}

export function BioSection({ isEditing }: BioSectionProps) {
  const bio =
    "I'm a high school student who loves coding and teaching others. I've been learning Python for 2 years and recently started with web development. I'm also passionate about photography and love sharing tips with beginners!"

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">About Me</h2>
      {isEditing ? (
        <Textarea defaultValue={bio} className="min-h-32" placeholder="Tell others about yourself..." />
      ) : (
        <p className="text-foreground/70 leading-relaxed">{bio}</p>
      )}
    </Card>
  )
}
