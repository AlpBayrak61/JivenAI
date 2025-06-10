"use client"

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

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export default function JobList({
  jobs,
  selectedJobId,
  onSelectJob,
}: {
  jobs: Job[]
  selectedJobId: number | null
  onSelectJob: (id: number) => void
}) {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          onClick={() => onSelectJob(job.id)}
          className={`bg-background-card rounded-xl p-6 cursor-pointer transition-all duration-200 hover:bg-gray-700/50 border-2 ${
            job.id === selectedJobId ? "border-orange-500" : "border-transparent"
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              {getInitials(job.company)}
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-lg mb-1 truncate">{job.title}</h3>
              <p className="text-gray-400 text-sm mb-2">
                {job.company} • {job.location}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-xs">{job.type}</span>
                {job.salary && (
                  <span className="bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-xs">{job.salary}</span>
                )}
              </div>

              <p className="text-gray-300 text-sm line-clamp-2">{job.description.slice(0, 120)}...</p>
            </div>

            {job.matchScore && (
              <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0">
                {job.matchScore}%
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
