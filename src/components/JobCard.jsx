const JobCard = ({ job, searchTerm }) => {
  // Highlight search keyword in title
  function highlightText(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-200 text-black">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold text-gray-800">
        {highlightText(job.title, searchTerm)}
      </h3>
      <p className="text-gray-600 mt-1">{job.company} • {job.location}</p>
      <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
        {job.type}
      </span>
    </div>
  );
};

export default JobCard;