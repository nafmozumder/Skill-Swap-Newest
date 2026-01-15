import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Calendar, Star } from "lucide-react"

interface InstructorStatsProps {
  rating: number
  reviews: number
  sessionsCompleted: number
  studentsHelped: number
}

export function InstructorStats({ rating, reviews, sessionsCompleted, studentsHelped }: InstructorStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-foreground/60 font-medium">RATING</span>
          <Star className="text-accent fill-accent" size={16} />
        </div>
        <p className="text-2xl font-bold">{rating.toFixed(1)}★</p>
        <p className="text-xs text-foreground/60 mt-1">{reviews} reviews</p>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-foreground/60 font-medium">SESSIONS</span>
          <Calendar className="text-primary" size={16} />
        </div>
        <p className="text-2xl font-bold">{sessionsCompleted}</p>
        <p className="text-xs text-foreground/60 mt-1">Completed</p>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-foreground/60 font-medium">STUDENTS</span>
          <Users className="text-accent" size={16} />
        </div>
        <p className="text-2xl font-bold">{studentsHelped}</p>
        <p className="text-xs text-foreground/60 mt-1">Helped</p>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-foreground/60 font-medium">TRENDING</span>
          <TrendingUp className="text-primary" size={16} />
        </div>
        <p className="text-2xl font-bold">↑ 12%</p>
        <p className="text-xs text-foreground/60 mt-1">This month</p>
      </Card>
    </div>
  )
}
