"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { X, Plus } from "lucide-react"

interface SkillsSectionProps {
  isEditing: boolean
}

const skillCategories = [
  {
    title: "Skills I Offer",
    icon: "🎓",
    skills: ["Python", "Web Development", "Photography"],
    color: "bg-primary/20 text-primary border-primary/30",
  },
  {
    title: "Skills I Want to Learn",
    icon: "📚",
    skills: ["Spanish", "Guitar", "Digital Design"],
    color: "bg-accent/20 text-accent border-accent/30",
  },
]

export function SkillsSection({ isEditing }: SkillsSectionProps) {
  const [skills, setSkills] = useState(skillCategories)
  const [newSkill, setNewSkill] = useState<{ [key: number]: string }>({})

  const handleAddSkill = (idx: number) => {
    if (newSkill[idx]?.trim()) {
      const updated = [...skills]
      updated[idx].skills.push(newSkill[idx])
      setSkills(updated)
      setNewSkill((prev) => ({ ...prev, [idx]: "" }))
    }
  }

  const handleRemoveSkill = (categoryIdx: number, skillIdx: number) => {
    const updated = [...skills]
    updated[categoryIdx].skills.splice(skillIdx, 1)
    setSkills(updated)
  }

  return (
    <div className="space-y-6">
      {skills.map((category, catIdx) => (
        <Card key={catIdx} className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            {category.icon} {category.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {category.skills.map((skill, skillIdx) => (
              <Badge key={skillIdx} variant="outline" className={`${category.color} border`}>
                {skill}
                {isEditing && (
                  <button onClick={() => handleRemoveSkill(catIdx, skillIdx)} className="ml-2 hover:text-destructive">
                    <X size={14} />
                  </button>
                )}
              </Badge>
            ))}
          </div>

          {isEditing && (
            <div className="flex gap-2">
              <Input
                placeholder={`Add a ${category.title.toLowerCase()}...`}
                value={newSkill[catIdx] || ""}
                onChange={(e) => setNewSkill((prev) => ({ ...prev, [catIdx]: e.target.value }))}
              />
              <Button size="sm" variant="outline" onClick={() => handleAddSkill(catIdx)}>
                <Plus size={18} />
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}
