import type React from "react"
import type { Metadata, Viewport } from "next"

import "./globals.css"
import { Geist, Roboto_Slab } from 'next/font/google'

// Initialize fonts
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const robotoSlab = Roboto_Slab({ subsets: ['latin'], variable: '--font-roboto-slab', display: 'swap' })

export const metadata: Metadata = {
  title: "Brianna Birkel | Data Analysis & Computational Research",
  description:
    "Brianna Birkel, Ph.D.: data analysis, computational modeling, and geophysics research. Exploring opportunities in data analysis, AI evaluation, and geophysics.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#f7f1e3",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${robotoSlab.variable} bg-background`}>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}

