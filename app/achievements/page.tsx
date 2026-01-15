"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Users, Zap, Award, Clock } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "First Session",
    description: "Complete your first skill exchange session",
    icon: Star,
    progress: 100,
    unlocked: true,
    date: "Dec 10, 2024",
    rarity: "common",
  },
  {
    id: 2,
    title: "Helper",
    description: "Help 5 students learn new skills",
    icon: Users,
    progress: 80,
    unlocked: false,
    date: null,
    rarity: "uncommon",
  },
  {
    id: 3,
    title: "Five Star Master",
    description: "Achieve a 5-star rating from 10 students",
    icon: Trophy,
    progress: 60,
    unlocked: false,
    date: null,
    rarity: "rare",
  },
  {
    id: 4,
    title: "Speedster",
    description: "Schedule 10 sessions within a month",
    icon: Zap,
    progress: 40,
    unlocked: false,
    date: null,
    rarity: "uncommon",
  },
  {
    id: 5,
    title: "Dedicated Learner",
    description: "Complete sessions in 5 different skill categories",
    icon: Award,
    progress: 60,
    unlocked: false,
    date: null,
    rarity: "rare",
  },
  {
    id: 6,
    title: "Night Owl",
    description: "Complete a session between 8 PM - 6 AM",
    icon: Clock,
    progress: 0,
    unlocked: false,
    date: null,
    rarity: "uncommon",
  },
]

const rarityColors = {
  common: "bg-gray-100 text-gray-900 border-gray-300",
  uncommon: "bg-green-100 text-green-900 border-green-300",
  rare: "bg-blue-100 text-blue-900 border-blue-300",
  epic: "bg-purple-100 text-purple-900 border-purple-300",
}

export default function AchievementsPage() {
  const unlockedCount = achievements.filter((a) => a.unlocked).length
  const totalPoints = achievements.reduce((sum, a) => sum + (a.unlocked ? 10 : 0), 0)

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Achievements & Badges</h1>
          <p className="text-foreground/60">Unlock badges as you grow on SkillSwap</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6">
            <p className="text-foreground/60 text-sm mb-2">Badges Unlocked</p>
            <p className="text-3xl font-bold">
              {unlockedCount}/{achievements.length}
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-foreground/60 text-sm mb-2">Total Points</p>
            <p className="text-3xl font-bold">{totalPoints}</p>
          </Card>
          <Card className="p-6">
            <p className="text-foreground/60 text-sm mb-2">Next Badge In</p>
            <p className="text-3xl font-bold">20%</p>
          </Card>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            const rarityColor = rarityColors[achievement.rarity as keyof typeof rarityColors]

            return (
              <Card
                key={achievement.id}
                className={`p-6 transition relative overflow-hidden ${
                  achievement.unlocked ? "border-accent/50 bg-accent/5" : "opacity-60"
                }`}
              >
                {achievement.unlocked && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-accent text-accent-foreground">Unlocked</Badge>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${rarityColor} border-2`}>
                    <Icon size={32} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-foreground/60">{achievement.description}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-foreground/60">Progress</span>
                    <span className="text-xs font-semibold">{achievement.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all"
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                </div>

                {achievement.unlocked && achievement.date && (
                  <p className="text-xs text-foreground/50 text-center">Unlocked {achievement.date}</p>
                )}
              </Card>
            )
          })}
        </div>

        {/* Rarity Guide */}
        <Card className="p-6 mt-8">
          <h3 className="font-semibold mb-4">Achievement Rarity</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(rarityColors).map(([rarity, colors]) => (
              <div key={rarity} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded border-2 ${colors}`}></div>
                <span className="text-sm capitalize text-foreground/70">{rarity}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
