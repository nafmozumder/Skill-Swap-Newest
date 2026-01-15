"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { auth } from "@/lib/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, Lock, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ email: "", password: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password)
      console.log("User logged in:", userCredential.user)
      alert("Login successful! Redirecting...")
      router.push("/dashboard") // create a dashboard page later
    } catch (error: any) {
      console.error("Login error:", error)
      if (error.code === "auth/user-not-found") {
        alert("No account found with this email.")
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password.")
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email address.")
      } else {
        alert("Login failed: " + error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <Button type="submit" disabled={loading}>{loading ? "Signing In..." : "Sign In"} <ArrowRight size={18} /></Button>
        </form>
        <p className="mt-4 text-sm text-center">
          Don't have an account? <Link href="/register" className="text-blue-500">Sign Up</Link>
        </p>
      </Card>
    </div>
  )
}
