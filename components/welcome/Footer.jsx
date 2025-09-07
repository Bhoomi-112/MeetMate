"use client"

export default function Footer() {
  return (
    <footer className="border-t bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} MeetMate. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a 
            className="hover:text-foreground transition-colors" 
            href="/privacy"
          >
            Privacy
          </a>
          <a 
            className="hover:text-foreground transition-colors" 
            href="/terms"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
