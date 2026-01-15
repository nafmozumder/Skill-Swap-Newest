"use client"

import { ReviewList } from "@/components/feedback/review-list"
import { InstructorStats } from "@/components/feedback/instructor-stats"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const mockReviews = [
  {
    id: 1,
    author: "Jordan Lee",
    rating: 5,
    text: "Alex is an amazing Python instructor! Clear explanations, patient with questions, and really cares about your progress. Highly recommend!",
    date: "2 weeks ago",
    avatar: "JL",
  },
  {
    id: 2,
    author: "Sarah Chen",
    rating: 5,
    text: "Great session! Learned so much about object-oriented programming. Will definitely book another session.",
    date: "1 month ago",
    avatar: "SC",
  },
  {
    id: 3,
    author: "Mike Johnson",
    rating: 4,
    text: "Really good instructor, very knowledgeable. Maybe could provide more practice exercises.",
    date: "1 month ago",
    avatar: "MJ",
  },
]

export default function InstructorReviewsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Button variant="ghost" asChild className="mb-8">
          <Link href={`/instructor/${params.id}`}>← Back to Profile</Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Reviews & Ratings</h1>
          <p className="text-foreground/60">See what students say about Alex Johnson</p>
        </div>

        <div className="mb-8">
          <InstructorStats rating={4.9} reviews={32} sessionsCompleted={12} studentsHelped={18} />
        </div>

        <ReviewList reviews={mockReviews} averageRating={4.9} totalReviews={32} />
      </div>
    </div>
  )
}
