"use client"

import { Card } from "@/components/ui/card"

interface FilterSidebarProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  sessionTypes: string[]
  selectedSessionType: string
  onSessionTypeChange: (type: string) => void
}

export function FilterSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  sessionTypes,
  selectedSessionType,
  onSessionTypeChange,
}: FilterSidebarProps) {
  return (
    <div className="space-y-4">
      <Card className="p-4">
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={selectedCategory === cat}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="rounded-full"
              />
              <span className="text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-3">Session Type</h3>
        <div className="space-y-2">
          {sessionTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="sessionType"
                value={type}
                checked={selectedSessionType === type}
                onChange={(e) => onSessionTypeChange(e.target.value)}
                className="rounded-full"
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </Card>
    </div>
  )
}
