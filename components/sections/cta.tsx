import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Ready to Start Learning?</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Join hundreds of students already exchanging skills on SkillSwap. Whether you want to teach or learn, your
          community is waiting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/register" className="gap-2">
              Create Your Profile <ArrowRight size={18} />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/browse">Browse Skills</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
