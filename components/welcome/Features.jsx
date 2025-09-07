"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Calendar, Users, Video } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Everything you need for great meetings
        </h2>
        <p className="mt-3 text-muted-foreground">
          Built with care using shadcn/ui + Tailwind for a clean, accessible UI.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="rounded-2xl bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Calendar className="h-5 w-5 text-primary" /> Smart Scheduling
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Availability detection, 1-click invites, and automatic reminders.
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Users className="h-5 w-5 text-primary" /> Collaborative Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Shared notes with action items that sync to your workspace.
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Video className="h-5 w-5 text-primary" /> Seamless Calls
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Join links, recording, and transcripts all in one place.
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
