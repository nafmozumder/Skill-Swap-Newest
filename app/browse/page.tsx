"use client"

import { useState } from "react"
import { SkillCard } from "@/components/marketplace/skill-card"
import { FilterSidebar } from "@/components/marketplace/filter-sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"

const mockSkills = [
  {
    id: 1,
    title: "Python Tutoring",
    instructor: "Alex Johnson",
    rating: 4.9,
    reviews: 32,
    avatar: "AJ",
    description: "Learn Python from basics to advanced. Perfect for beginners!",
    category: "Programming",
    skill: "Python",
    experience: "2 years",
    learners: 18,
    sessionType: "online",
  },
  {
    id: 2,
    title: "Spanish Conversation Practice",
    instructor: "Maria Garcia",
    rating: 4.8,
    reviews: 28,
    avatar: "MG",
    description: "Practice conversational Spanish with a native speaker.",
    category: "Languages",
    skill: "Spanish",
    experience: "5 years",
    learners: 24,
    sessionType: "online",
  },
  {
    id: 3,
    title: "Guitar Basics for Beginners",
    instructor: "Jake Wilson",
    rating: 4.7,
    reviews: 45,
    avatar: "JW",
    description: "Learn guitar fundamentals including chords and strumming.",
    category: "Music",
    skill: "Guitar",
    experience: "8 years",
    learners: 31,
    sessionType: "in-person",
  },
  {
    id: 4,
    title: "Photography Editing & Composition",
    instructor: "Sam Chen",
    rating: 4.9,
    reviews: 22,
    avatar: "SC",
    description: "Master photo composition, lighting, and editing techniques.",
    category: "Creative",
    skill: "Photography",
    experience: "6 years",
    learners: 16,
    sessionType: "online",
  },
  {
    id: 5,
    title: "Web Development - React Basics",
    instructor: "Emma Thompson",
    rating: 5.0,
    reviews: 38,
    avatar: "ET",
    description: "Build modern web apps with React. No prior experience needed.",
    category: "Programming",
    skill: "React",
    experience: "3 years",
    learners: 27,
    sessionType: "online",
  },
  {
    id: 6,
    title: "Digital Art & Illustration",
    instructor: "Luna Park",
    rating: 4.8,
    reviews: 19,
    avatar: "LP",
    description: "Create beautiful digital art using industry-standard tools.",
    category: "Creative",
    skill: "Digital Art",
    experience: "4 years",
    learners: 12,
    sessionType: "online",
  },
]

const categories = ["All", "Programming", "Languages", "Music", "Creative", "Academic"]
const sessionTypes = ["All", "Online", "In-person", "Hybrid"]

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSessionType, setSelectedSessionType] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  const filteredSkills = mockSkills.filter((skill) => {
    const matchesSearch =
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory
    const matchesSessionType = selectedSessionType === "All" || skill.sessionType === selectedSessionType.toLowerCase()

    return matchesSearch && matchesCategory && matchesSessionType
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Browse Skills</h1>
          <p className="text-foreground/60">Discover amazing skills taught by students like you</p>
        </div>

        <div className="flex gap-6 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <Input
              placeholder="Search skills, instructors, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="lg" onClick={() => setShowFilters(!showFilters)} className="md:hidden gap-2">
            <Filter size={20} />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className={`md:block ${showFilters ? "block" : "hidden"}`}>
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sessionTypes={sessionTypes}
              selectedSessionType={selectedSessionType}
              onSessionTypeChange={setSelectedSessionType}
            />
          </div>

          <div className="md:col-span-3">
            {filteredSkills.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {filteredSkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-foreground/60 mb-4">No skills found matching your filters.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All")
                    setSelectedSessionType("All")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
