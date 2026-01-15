import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Review {
  id: number
  author: string
  rating: number
  text: string
  date: string
  avatar: string
}

interface ReviewListProps {
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

export function ReviewList({ reviews, averageRating, totalReviews }: ReviewListProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-4xl font-bold">{averageRating.toFixed(1)}</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.floor(averageRating) ? "fill-accent text-accent" : "text-muted"}
                />
              ))}
            </div>
          </div>
          <p className="text-foreground/60">{totalReviews} reviews</p>
        </div>

        <div className="flex-1 space-y-2">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = reviews.filter((r) => r.rating === star).length
            const percentage = (count / totalReviews) * 100
            return (
              <div key={star} className="flex items-center gap-2">
                <span className="text-sm w-6">{star}★</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent transition-all" style={{ width: `${percentage}%` }}></div>
                </div>
                <span className="text-sm text-foreground/60 w-10 text-right">{count}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                {review.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{review.author}</h4>
                  <span className="text-xs text-foreground/60">{review.date}</span>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < review.rating ? "fill-accent text-accent" : "text-muted"} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">{review.text}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
