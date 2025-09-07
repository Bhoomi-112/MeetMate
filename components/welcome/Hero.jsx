"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Calendar, Users, Video, Sparkles, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Decorative Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/20 dark:bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-secondary/20 dark:bg-secondary/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4" variant="outline">
              <Sparkles className="h-3.5 w-3.5 mr-1" /> Smarter meetings, less chaos
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              Welcome to <span className="text-primary">MeetMate</span>
            </h1>

            <p className="mt-4 text-lg text-muted-foreground max-w-prose">
              Plan, schedule, and run meetings without the back-and-forth. Share links, auto-create notes, and keep everyone in sync.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <a href="/signup" className="inline-flex items-center">
                  Start for free <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="/conversation">Open Conversations</a>
              </Button>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              No credit card needed • 2-minute setup
            </p>
          </motion.div>

          {/* Right Meeting Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="shadow-xl border-0 bg-card text-card-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Calendar className="h-5 w-5 text-primary" /> Upcoming meeting
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-foreground">Sprint Planning</p>
                      <p className="text-sm text-muted-foreground">Mon, 10:00 – 11:00 AM</p>
                    </div>
                    <Badge>15 min left</Badge>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" /> 5 attendees • Auto-notes enabled
                  </div>

                  <div className="rounded-2xl border border-border p-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Join via Meet</p>
                      <p className="text-xs text-muted-foreground">meet.google.com/abc-defg-hij</p>
                    </div>

                    <Button size="sm" className="rounded-xl" asChild>
                      <a href="#join">
                        <Video className="mr-2 h-4 w-4" /> Join now
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
