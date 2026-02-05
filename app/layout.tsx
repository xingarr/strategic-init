import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: {
    default: "UXCA - Web Development & Digital Solutions",
    template: "%s | UXCA",
  },
  description: "Professional web development and digital solutions by UXCA",
  keywords: ["web development", "digital solutions", "UXCA", "web design"],
  authors: [{ name: "UXCA" }],
  creator: "UXCA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://UXCA.com",
    title: "UXCA - Web Development & Digital Solutions",
    description: "Professional web development and digital solutions by UXCA",
    siteName: "UXCA",
  },
  twitter: {
    card: "summary_large_image",
    title: "UXCA - Web Development & Digital Solutions",
    description: "Professional web development and digital solutions by UXCA",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} bg-brand-black`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
