import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Create your student account and set up your profile with your interests and skills.",
  },
  {
    number: "2",
    title: "Add Your Skills",
    description: "List the skills you're offering to teach and the skills you want to learn from others.",
  },
  {
    number: "3",
    title: "Connect",
    description: "Browse profiles and find students with complementary skills. Send requests or respond to offers.",
  },
  {
    number: "4",
    title: "Schedule",
    description: "Coordinate your first session with built-in scheduling and messaging tools.",
  },
  {
    number: "5",
    title: "Learn & Share",
    description: "Have your skill exchange session. Help each other grow and achieve your learning goals.",
  },
  {
    number: "6",
    title: "Rate & Grow",
    description: "Leave feedback and ratings. Unlock achievements and build your community reputation.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">How SkillSwap Works</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Six simple steps to start your learning journey and share your expertise with the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <Card key={idx} className="p-6 relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-foreground/60 text-sm">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
