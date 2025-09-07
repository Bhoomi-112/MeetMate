import Navbar from "@/components/welcome/Navbar"
import "./globals.css"
import { Providers } from "./providers"

export const metadata = {
  title: "MeetMate",
  description: "Chatting and calling app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
