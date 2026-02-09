"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail } from "lucide-react"
import UXCALogo from "./UXCALogo"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the email subscription
    console.log("Email submitted:", email)
    // Reset form
    setEmail("")
    // Show success message or toast notification
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-black pt-20 pb-10 relative overflow-hidden">
      {/* Large background logo */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10 pointer-events-none">
        <div className="text-[20rem] font-bold text-gray-800 whitespace-nowrap">UXCA</div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <UXCALogo />
            <p className="text-gray-400 mt-6 max-w-xs">
              Your team deserves a development partner that understands your goals, delivers on time, and empowers your
              team to learn, grow, and become more agile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">
              QUICK <span className="text-gray-500">LINKS</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-teal transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/client-journeys" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Client Journeys
                </Link>
              </li>
              <li>
                <Link href="/free-discovery" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Free Discovery
                </Link>
              </li>
              {/* <li>
                <Link href="/services" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Services
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">
              OUR <span className="text-gray-500">SKILLS</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/fullstack-development"
                  className="text-gray-400 hover:text-brand-teal transition-colors"
                >
                  Fullstack Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-development"
                  className="text-gray-400 hover:text-brand-teal transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/ux-ui-design" className="text-gray-400 hover:text-brand-teal transition-colors">
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="text-gray-400 hover:text-brand-teal transition-colors">
                  AI & Automation Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/legacy-modernization"
                  className="text-gray-400 hover:text-brand-teal transition-colors"
                >
                  Legacy System Modernization
                </Link>
              </li>
              <li>
                <Link href="/services/seo-wordpress" className="text-gray-400 hover:text-brand-teal transition-colors">
                  SEO + Managed WordPress
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">
              CONTACT <span className="text-gray-500">INFO</span>
            </h3>
            <div className="flex items-center mb-6">
              <Mail className="h-5 w-5 text-brand-teal mr-2" />
              <a href="mailto:UXCA@gmail.com" className="text-gray-400 hover:text-brand-teal transition-colors">
                hello@UXCA.com
              </a>
            </div>

            {/* Email Subscription Form */}
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  required
                  className="bg-gray-900 border border-gray-800 rounded-l-full py-2 px-4 text-white w-full focus:outline-none focus:ring-1 focus:ring-brand-teal"
                />
                <button
                  type="submit"
                  className="bg-brand-teal text-brand-black font-medium px-6 py-2 rounded-r-full hover:bg-opacity-90 transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© UXCA {currentYear} All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-brand-teal text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/terms" className="text-gray-500 hover:text-brand-teal text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
