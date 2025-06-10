"use client"

import { useState } from "react"

interface Job {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary?: string
  description: string
  matchScore?: number
}

export default function JobDetails({ job }: { job: Job | null }) {
  const [activeTab, setActiveTab] = useState("overview")

  if (!job) {
    return (
      <div className="bg-background-card rounded-xl p-8 h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0V6a2 2 0 00-2 2v6.001"
              />
            </svg>
          </div>
          <p className="text-gray-400 text-lg">Select a job to view details</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background-card rounded-xl p-8 h-full">
      {/* Header */}
      <div className="flex items-start gap-6 mb-8">
        <div className="w-16 h-16 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
          {job.company
            .split(" ")
            .map((w) => w[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white mb-2">{job.title}</h1>
          <p className="text-gray-400 text-lg mb-4">{job.company}</p>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-gray-700 text-gray-200 rounded-full px-4 py-2 text-sm">{job.location}</span>
            <span className="bg-gray-700 text-gray-200 rounded-full px-4 py-2 text-sm">{job.type}</span>
            {job.salary && (
              <span className="bg-gray-700 text-gray-200 rounded-full px-4 py-2 text-sm">{job.salary}</span>
            )}
            {job.matchScore && (
              <span className="bg-orange-600 text-white rounded-full px-4 py-2 text-sm font-semibold">
                {job.matchScore}% Match
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === "overview" ? "bg-orange-600 text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("description")}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === "description" ? "bg-orange-600 text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          Full Description
        </button>
        <button
          onClick={() => setActiveTab("company")}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === "company" ? "bg-orange-600 text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          Company
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 mb-8">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Job Summary</h3>
              <p className="text-gray-300 leading-relaxed">{job.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Key Requirements</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                  5+ years of experience in software development
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                  Proficiency in React, TypeScript, and modern web technologies
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                  Experience with cloud platforms (AWS, GCP, or Azure)
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "description" && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Full Job Description</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">{job.description}</p>
              <p className="text-gray-300 leading-relaxed">
                We are looking for a talented individual to join our growing team. This role offers excellent
                opportunities for career growth and the chance to work on cutting-edge projects that impact millions of
                users worldwide.
              </p>
            </div>
          </div>
        )}

        {activeTab === "company" && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About {job.company}</h3>
            <p className="text-gray-300 leading-relaxed">
              {job.company} is a leading technology company focused on innovation and excellence. We pride ourselves on
              creating products that make a difference in people's lives while fostering a collaborative and inclusive
              work environment.
            </p>
          </div>
        )}
      </div>

      {/* Apply Button */}
      <div className="pt-6 border-t border-gray-700">
        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg">
          Apply Now
        </button>
      </div>
    </div>
  )
}
