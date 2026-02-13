import { useState } from "react";
import { jobs } from "./data/jobs";
import JobCard from "./components/JobCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortByTitle, setSortByTitle] = useState(false);

  // Filtering logic
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (locationFilter === "All" || job.location === locationFilter) &&
    (typeFilter === "All" || job.type === typeFilter)
  );

  // Sorting logic
  let displayedJobs = [...filteredJobs];
  if (sortByTitle) {
    displayedJobs.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Job Listings
        </h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search job title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-6"
        />

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Types</option>
            <option value="Internship">Internship</option>
            <option value="Full-time">Full-time</option>
          </select>
        </div>

        {/* Sort Button */}
        <button
          onClick={() => setSortByTitle(!sortByTitle)}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          {sortByTitle ? "Clear Sorting" : "Sort Alphabetically"}
        </button>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedJobs.map(job => (
            <JobCard key={job.id} job={job} searchTerm={searchTerm} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
