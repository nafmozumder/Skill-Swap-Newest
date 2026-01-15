"use client"
import { Input } from "@/components/ui/input"
import { Camera, Star } from "lucide-react"

interface ProfileHeaderProps {
  isEditing: boolean
}

export function ProfileHeader({ isEditing }: ProfileHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-border">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground">
            AJ
          </div>
          {isEditing && (
            <button className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 hover:bg-primary/90">
              <Camera size={16} />
            </button>
          )}
        </div>

        <div className="flex-1 text-center sm:text-left">
          {isEditing ? (
            <Input type="text" defaultValue="Alex Johnson" className="text-2xl font-bold mb-2" />
          ) : (
            <h1 className="text-3xl font-bold">Alex Johnson</h1>
          )}

          <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm text-foreground/60">(32 reviews)</span>
          </div>

          {isEditing ? (
            <Input
              type="text"
              defaultValue="High school student passionate about learning!"
              className="text-foreground/70"
            />
          ) : (
            <p className="text-foreground/70">High school student passionate about learning!</p>
          )}
        </div>
      </div>
    </div>
  )
}
