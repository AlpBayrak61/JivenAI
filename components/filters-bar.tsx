"use client"

import { BriefcaseIcon, MapPinIcon, FunnelIcon, ChevronDownIcon } from "@heroicons/react/24/outline"

interface FiltersBarProps {
  filters: {
    experience: string
    location: string
    domain: string
    date: string
  }
  setFilters: (filters: any) => void
}

const experienceLevels = ["Experience Level", "Entry", "Mid", "Senior"]
const locations = ["Location", "Remote", "San Francisco, CA", "New York, NY", "Austin, TX"]
const domains = ["Domain", "Engineering", "Design", "Product", "Marketing"]

export default function FiltersBar({ filters, setFilters }: FiltersBarProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap gap-4 items-center">
        {/* Experience Level */}
        <div className="relative">
          <select
            className="appearance-none bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 pr-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-w-[180px]"
            value={filters.experience}
            onChange={(e) => setFilters((f: any) => ({ ...f, experience: e.target.value }))}
          >
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <BriefcaseIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Location */}
        <div className="relative">
          <select
            className="appearance-none bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 pr-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-w-[180px]"
            value={filters.location}
            onChange={(e) => setFilters((f: any) => ({ ...f, location: e.target.value }))}
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <MapPinIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Date */}
        <div className="relative">
          <select
            className="appearance-none bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 pr-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-w-[140px]"
            value={filters.date}
            onChange={(e) => setFilters((f: any) => ({ ...f, date: e.target.value }))}
          >
            <option value="3 Days ago">3 Days ago</option>
            <option value="1 Week ago">1 Week ago</option>
            <option value="2 Weeks ago">2 Weeks ago</option>
            <option value="1 Month ago">1 Month ago</option>
          </select>
          <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Domain */}
        <div className="relative">
          <select
            className="appearance-none bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 pr-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-w-[140px]"
            value={filters.domain}
            onChange={(e) => setFilters((f: any) => ({ ...f, domain: e.target.value }))}
          >
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>
          <FunnelIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Additional Filters */}
        <div className="relative">
          <select
            className="appearance-none bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 pr-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-w-[160px]"
            defaultValue="Additional Filters"
          >
            <option value="Additional Filters">Additional Filters</option>
            <option value="Salary Range">Salary Range</option>
            <option value="Company Size">Company Size</option>
            <option value="Remote Only">Remote Only</option>
          </select>
          <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
