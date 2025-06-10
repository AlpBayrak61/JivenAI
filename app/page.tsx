"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import FiltersBar from "@/components/filters-bar"
import JobList from "@/components/job-list"
import JobDetails from "@/components/job-details"

const sampleJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $150k",
    description:
      "We are looking for an experienced frontend developer to join our team and help build the next generation of web applications. You will work with cutting-edge technologies and collaborate with a talented team of engineers.",
    matchScore: 95,
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "StartupX",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130k - $160k",
    description:
      "Join our fast-growing startup as a full stack engineer. You will be responsible for building scalable web applications and working across the entire technology stack.",
    matchScore: 88,
  },
  {
    id: 3,
    title: "Product Designer",
    company: "DesignCo",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110k - $140k",
    description:
      "We are seeking a creative product designer to help shape the user experience of our digital products. You will work closely with product managers and engineers.",
    matchScore: 82,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$125k - $155k",
    description:
      "Looking for a DevOps engineer to help build and maintain our cloud infrastructure. Experience with AWS, Docker, and Kubernetes required.",
    matchScore: 90,
  },
]

export default function Home() {
  const [filters, setFilters] = useState({
    experience: "Experience Level",
    location: "Location",
    domain: "Domain",
    date: "3 Days ago",
  })
  const [selectedJobId, setSelectedJobId] = useState<number | null>(1)

  const selectedJob = sampleJobs.find((job) => job.id === selectedJobId) || null

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FiltersBar filters={filters} setFilters={setFilters} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <JobList jobs={sampleJobs} selectedJobId={selectedJobId} onSelectJob={setSelectedJobId} />
          </div>
          <div className="lg:col-span-3">
            <JobDetails job={selectedJob} />
          </div>
        </div>
      </div>
    </div>
  )
}
