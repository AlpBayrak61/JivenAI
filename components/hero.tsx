"use client"

import type React from "react"

import { useRef } from "react"
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline"

export default function Hero() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      console.log("File selected:", file.name)
    }
  }

  return (
    <section className="py-16 flex flex-col items-center justify-center bg-background">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">
          Find Perfect Job Matches with <span className="text-orange-400">AI</span>
        </h1>

        <div className="w-full max-w-2xl mx-auto">
          <div
            className="w-full bg-background-card border-2 border-dashed border-gray-600 rounded-2xl p-12 flex flex-col items-center justify-center mb-8 transition-all duration-200 hover:border-orange-400 hover:bg-gray-800/50 cursor-pointer"
            onClick={handleBrowseClick}
          >
            <ArrowUpTrayIcon className="w-16 h-16 text-gray-400 mb-4" />
            <p className="text-gray-300 text-lg mb-4">Drag & drop resume</p>
            <button
              type="button"
              className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors font-semibold shadow-lg"
              onClick={handleBrowseClick}
            >
              Click to browse
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
