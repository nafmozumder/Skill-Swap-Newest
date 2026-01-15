"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Lock, User, ArrowRight } from "lucide-react"

import { auth, db } from "@/lib/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    skillsOffered: "",
    skillsSought: "",
    location: "",
    preferredSessions: "",
    bestTimes: "",
    userType: "student" as const,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    setLoading(true)

    try {
      // 1️⃣ Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )
      const user = userCredential.user

      // 2️⃣ Create user profile in Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName: formData.fullName,
        email: formData.email,
        userType: formData.userType,
        bio: formData.bio,
        skillsOffered: formData.skillsOffered.split(",").map((s) => s.trim()),
        skillsSought: formData.skillsSought.split(",").map((s) => s.trim()),
        location: formData.location,
        preferredSessions: formData.preferredSessions,
        bestTimes: formData.bestTimes,
        reviews: 0,
        createdAt: new Date()
      })

      alert("Account created successfully! You can update your profile details anytime.")
      // TODO: redirect to dashboard or profile page
    } catch (error: any) {
      console.error(error.message)
      alert("Registration failed: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md shadow-lg">
        <div className="p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-foreground/60">
              Join SkillSwap and start sharing your skills. You can update these details anytime.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-muted-foreground" size={18} />
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-muted-foreground" size={18} />
                <Input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                <Input
                  type="password"
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bio/About Me</label>
              <Textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell others about yourself..."
                className="min-h-24"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Skills You Offer (comma separated)</label>
              <Input
                type="text"
                name="skillsOffered"
                value={formData.skillsOffered}
                onChange={handleChange}
                placeholder="Python, Web Development, Photography"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Skills You Want to Learn (comma separated)</label>
              <Input
                type="text"
                name="skillsSought"
                value={formData.skillsSought}
                onChange={handleChange}
                placeholder="Spanish, Guitar, Digital Design"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <Input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, State"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Preferred Sessions</label>
              <Input
                type="text"
                name="preferredSessions"
                value={formData.preferredSessions}
                onChange={handleChange}
                placeholder="Online, In-person"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Best Times</label>
              <Input
                type="text"
                name="bestTimes"
                value={formData.bestTimes}
                onChange={handleChange}
                placeholder="Weekends, 2-8 PM"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Account Type</label>
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="student">Student</option>
                <option value="educator">Educator</option>
              </select>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 gap-2" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"} <ArrowRight size={18} />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-foreground/60 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:text-primary/90 font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
