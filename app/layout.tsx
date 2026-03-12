import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nile University of Nigeria — Student Portal',
  description: 'Student Information System (SIS) — Nile University of Nigeria',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
