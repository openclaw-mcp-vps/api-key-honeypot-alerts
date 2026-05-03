import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Key Honeypot Alerts — Detect API Key Theft',
  description: 'Generate fake API keys, embed them as honeypots, and get instant alerts when attackers use them. Protect your codebase from credential theft.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8c1ab8ad-042b-4122-8922-e4d282b82331"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
