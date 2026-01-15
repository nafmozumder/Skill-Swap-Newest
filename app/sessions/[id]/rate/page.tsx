"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Star, ArrowLeft } from "lucide-react"

export default function RateSessionPage({ params }: { params: { id: string } }) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Backend integration will handle feedback submission
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background py-8 flex items-center justify-center">
        <Card className="p-8 max-w-md text-center space-y-6">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
            <Star className="text-accent fill-accent" size={32} />
          </div>
          <h1 className="text-2xl font-bold">Thank You!</h1>
          <p className="text-foreground/60">
            Your feedback helps instructors improve and helps other students make informed decisions.
          </p>
          <Button asChild className="w-full">
            <Link href="/sessions">Back to Sessions</Link>
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Button variant="ghost" asChild className="mb-8 gap-2">
          <Link href="/sessions">
            <ArrowLeft size={18} />
            Back to Sessions
          </Link>
        </Button>

        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-2">Rate Your Session</h1>
          <p className="text-foreground/60 mb-8">Help Emma Thompson improve by sharing your feedback</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xl font-bold text-primary-foreground">
                  ET
                </div>
                <div>
                  <h2 className="font-semibold text-lg">Emma Thompson</h2>
                  <p className="text-foreground/60 text-sm">Web Development - React Basics</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-lg font-semibold">How would you rate this session?</label>
              <div className="flex gap-2 text-5xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setRating(star)}
                    className="transition transform hover:scale-110"
                  >
                    <Star
                      size={56}
                      className={star <= (hoveredRating || rating) ? "fill-accent text-accent" : "text-muted"}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-sm text-foreground/60">You rated this session {rating} out of 5 stars</p>
              )}
            </div>

            <div className="space-y-3">
              <label className="block font-semibold">What was your feedback?</label>
              <Textarea
                placeholder="Tell them what went well, what could be improved, or anything else you'd like to share..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="min-h-32"
                required
              />
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-sm">Review Guidelines</h3>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>• Be honest and constructive</li>
                <li>• Focus on the quality of teaching and learning</li>
                <li>• Don't include personal information</li>
                <li>• Be respectful and professional</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" asChild className="flex-1 bg-transparent">
                <Link href="/sessions">Cancel</Link>
              </Button>
              <Button
                type="submit"
                disabled={rating === 0 || !feedback.trim()}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Submit Review
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
