import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, MapPin } from "lucide-react"

interface SkillCardProps {
  skill: {
    id: number
    title: string
    instructor: string
    rating: number
    reviews: number
    avatar: string
    description: string
    category: string
    skill: string
    experience: string
    learners: number
    sessionType: string
  }
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="overflow-hidden hover:border-accent/50 transition group">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        <div className="md:col-span-3 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition">{skill.title}</h3>
              <p className="text-foreground/60 text-sm mb-3">{skill.description}</p>

              <div className="flex items-center gap-1 mb-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(skill.rating) ? "fill-accent text-accent" : "text-muted"}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium ml-2">
                  {skill.rating} ({skill.reviews} reviews)
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {skill.category}
                </Badge>
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                  {skill.experience} exp
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  {skill.learners} learners
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  {skill.sessionType}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-lg font-bold text-primary-foreground">
            {skill.avatar}
          </div>
          <div className="text-center">
            <p className="font-semibold text-sm">{skill.instructor}</p>
            <p className="text-xs text-foreground/60">Instructor</p>
          </div>
          <Button asChild className="w-full">
            <Link href={`/skill/${skill.id}`}>View Profile</Link>
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            Request Session
          </Button>
        </div>
      </div>
    </Card>
  )
}
