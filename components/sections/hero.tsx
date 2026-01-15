import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-20 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Welcome to SkillSwap</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance">
            Share Your Skills,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Learn from Others
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-foreground/70 text-balance">
            Connect with students who share your passion for learning. Exchange skills, build confidence, and grow
            together in a supportive community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/register">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/how-it-works">Learn More</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <p className="text-sm text-foreground/60">Active Students</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">1000+</div>
              <p className="text-sm text-foreground/60">Skills Shared</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9★</div>
              <p className="text-sm text-foreground/60">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
