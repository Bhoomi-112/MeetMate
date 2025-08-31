'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Calendar, Users, Video, Sparkles, ArrowRight } from 'lucide-react'

export default function WelcomePage() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-blue-50 via-white to-white text-gray-800">
      {/* Top Nav */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-blue-600 grid place-items-center text-white font-bold">M</div>
            <span className="font-extrabold tracking-tight text-xl">MeetMate</span>
            <Badge className="ml-2" variant="secondary">beta</Badge>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <a href="/login">Log in</a>
            </Button>
            <Button asChild>
              <a href="/signup">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-4" variant="outline">
                <Sparkles className="h-3.5 w-3.5 mr-1" /> Smarter meetings, less chaos
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Welcome to <span className="text-blue-600">MeetMate</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-prose">
                Plan, schedule, and run meetings without the back‑and‑forth. Share links, auto‑create notes, and keep everyone in sync.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <a href="/signup" className="inline-flex items-center">Start for free <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/conversation">Open Conversations</a>
                </Button>
              </div>
              <p className="mt-3 text-sm text-gray-500">No credit card needed • 2‑minute setup</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Calendar className="h-5 w-5 text-blue-600" /> Upcoming meeting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold">Sprint Planning</p>
                        <p className="text-sm text-gray-500">Mon, 10:00 – 11:00 AM</p>
                      </div>
                      <Badge>15 min left</Badge>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Users className="h-4 w-4" /> 5 attendees • Auto-notes enabled
                    </div>
                    <div className="rounded-2xl border p-3 flex items-center justify-between">
                      <div>
                        <p className="font-medium">Join via Meet</p>
                        <p className="text-xs text-gray-500">meet.google.com/abc-defg-hij</p>
                      </div>
                      <Button size="sm" className="rounded-xl" asChild>
                        <a href="#join"><Video className="mr-2 h-4 w-4" /> Join now</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need for great meetings</h2>
          <p className="mt-3 text-gray-600">Built with care using shadcn/ui + Tailwind for a clean, accessible UI.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-blue-600" /> Smart Scheduling</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">Availability detection, 1‑click invites, and automatic reminders.
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-blue-600" /> Collaborative Notes</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">Shared notes with action items that sync to your workspace.
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Video className="h-5 w-5 text-blue-600" /> Seamless Calls</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">Join links, recording, and transcripts all in one place.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <Card className="rounded-2xl border-dashed">
          <CardContent className="py-10 md:py-12">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-bold tracking-tight">Be the first to know</h3>
              <p className="mt-2 text-gray-600">Sign up for updates, tips, and early features.</p>
              <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Input type="email" placeholder="you@company.com" className="h-11 rounded-xl" />
                <Button type="submit" className="h-11 rounded-xl">Notify me</Button>
              </form>
              <p className="mt-2 text-xs text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} MeetMate. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-900" href="/privacy">Privacy</a>
            <a className="hover:text-gray-900" href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
