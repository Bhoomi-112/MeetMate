"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Newsletter() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
      <Card className="rounded-2xl border-dashed bg-card text-card-foreground">
        <CardContent className="py-10 md:py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Be the first to know
            </h3>
            <p className="mt-2 text-muted-foreground">
              Sign up for updates, tips, and early features.
            </p>

            <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Input
                type="email"
                placeholder="you@company.com"
                className="h-11 rounded-xl bg-background"
              />
              <Button type="submit" className="h-11 rounded-xl">
                Notify me
              </Button>
            </form>

            <p className="mt-2 text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
