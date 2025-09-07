"use client"

import Hero from "@/components/welcome/Hero"
import Features from "@/components/welcome/Features"
import Newsletter from "@/components/welcome/Newsletter"
import Footer from "@/components/welcome/Footer"

export default function WelcomePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Hero />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  )
}
