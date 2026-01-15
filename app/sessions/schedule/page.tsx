"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function ScheduleSessionPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    skillTitle: "",
    selectedDate: "",
    selectedTime: "",
    sessionType: "online",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Backend integration will handle session request submission
    console.log("Session request submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/sessions">← Back</Link>
        </Button>

        <Card className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Schedule a Session</h1>
            <p className="text-foreground/60">Step {step} of 3</p>
          </div>

          <div className="w-full bg-muted rounded-full h-2 mb-8">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Select a Skill</h2>
                <div className="border border-border rounded-lg p-4 cursor-pointer hover:bg-accent/5 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                      ET
                    </div>
                    <div>
                      <h3 className="font-semibold">Web Development - React Basics</h3>
                      <p className="text-sm text-foreground/60">Emma Thompson</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Choose Date & Time</h2>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input
                      type="date"
                      name="selectedDate"
                      value={formData.selectedDate}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input
                      type="time"
                      name="selectedTime"
                      value={formData.selectedTime}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Session Type</label>
                  <select
                    name="sessionType"
                    value={formData.sessionType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="online">Online</option>
                    <option value="in-person">In-Person</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Tell Them About Your Goals</h2>

                <Textarea
                  name="message"
                  placeholder="What would you like to learn? Any specific goals or experience level?"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-40"
                  required
                />

                <Card className="p-4 bg-accent/5 border-accent/20">
                  <h3 className="font-semibold mb-2">Session Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-foreground/60">Date:</span>
                      <span className="ml-2 font-medium">{formData.selectedDate}</span>
                    </div>
                    <div>
                      <span className="text-foreground/60">Time:</span>
                      <span className="ml-2 font-medium">{formData.selectedTime}</span>
                    </div>
                    <div>
                      <span className="text-foreground/60">Type:</span>
                      <span className="ml-2 font-medium capitalize">{formData.sessionType}</span>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            <div className="flex gap-3 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className="flex-1 bg-transparent"
              >
                Back
              </Button>
              {step < 3 ? (
                <Button type="button" onClick={handleNext} className="flex-1 gap-2 bg-primary hover:bg-primary/90">
                  Next <ArrowRight size={18} />
                </Button>
              ) : (
                <Button type="submit" className="flex-1 gap-2 bg-primary hover:bg-primary/90">
                  Send Request <ArrowRight size={18} />
                </Button>
              )}
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
