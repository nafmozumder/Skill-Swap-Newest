import { Card } from "@/components/ui/card"
import { BookOpen, Calendar, Star, Users, MessageSquare, Trophy } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Create Your Profile",
    description:
      "Showcase the skills you want to teach and the skills you want to learn. Build your student profile in minutes.",
  },
  {
    icon: Users,
    title: "Find Skill Matches",
    description:
      "Browse a vibrant community of students. Connect with peers who share similar interests and learning goals.",
  },
  {
    icon: Calendar,
    title: "Schedule Sessions",
    description:
      "Easy scheduling system to coordinate tutoring, practice sessions, and skill exchanges at times that work for everyone.",
  },
  {
    icon: Star,
    title: "Rate & Review",
    description:
      "Give and receive feedback after each exchange. Build your reputation and help others make informed choices.",
  },
  {
    icon: MessageSquare,
    title: "Stay Connected",
    description:
      "Built-in messaging system to coordinate details, ask questions, and maintain relationships with your learning partners.",
  },
  {
    icon: Trophy,
    title: "Earn Achievements",
    description:
      "Unlock badges and achievements as you complete exchanges, help others, and contribute to the community.",
  },
]

export function Features() {
  return (
    <section className="py-20 sm:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Powerful Features Built for You</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Everything you need to find, share, and learn skills in a supportive student community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={idx} className="p-6 hover:border-accent/50 transition group cursor-pointer">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
