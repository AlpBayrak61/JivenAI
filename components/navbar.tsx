"use client"

import Link from "next/link"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export default function Navbar() {
  const [dark, setDark] = useState(true)

  const handleThemeToggle = () => {
    setDark((d) => {
      const newDark = !d
      document.documentElement.classList.toggle("dark", newDark)
      return newDark
    })
  }

  return (
    <nav className="bg-background border-b border-gray-800 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center">
            <span className="inline-flex items-center">
              <span className="bg-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#ea580c" />
                  <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="9" cy="9" r="1" fill="white" />
                  <circle cx="15" cy="9" r="1" fill="white" />
                </svg>
              </span>
              <span className="text-xl font-bold text-white tracking-tight">JiveanAI</span>
            </span>
          </Link>
          <span className="ml-4 text-gray-400 text-base font-medium hidden sm:block">Application Tracker</span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            aria-label="Toggle theme"
            onClick={handleThemeToggle}
            className="rounded-full p-2 bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            {dark ? (
              <SunIcon className="w-5 h-5 text-primary-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-primary-400" />
            )}
          </button>
          <button className="px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-500 transition-colors font-semibold">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  )
}
