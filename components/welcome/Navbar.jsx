"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/shared/theme-toggle" // 👈 import our toggle

export default function Navbar() {
    return (
        <header className="sticky top-0 z-20 backdrop-blur bg-background/70 border-b border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Left Section */}
                <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-2xl bg-primary grid place-items-center text-primary-foreground font-bold">
                        M
                    </div>
                    <span className="font-extrabold tracking-tight text-xl text-foreground">
                        MeetMate
                    </span>
                    <Badge className="ml-2" variant="secondary">beta</Badge>
                </div>

                {/* Middle Nav */}
                <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
                    <a href="#features" className="hover:text-foreground">Features</a>
                    <a href="#how" className="hover:text-foreground">How it works</a>
                    <a href="#contact" className="hover:text-foreground">Contact</a>
                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button variant="ghost" asChild>
                        <a href="/login">Log in</a>
                    </Button>
                    <Button asChild>
                        <a href="/signup">Get Started</a>
                    </Button>
                </div>
            </div>
        </header>
    )
}
