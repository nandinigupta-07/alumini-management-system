import React, { useState } from 'react';
import { Search, Briefcase, MapPin, DollarSign, Clock, Building } from 'lucide-react';

// Sample jobs data
const jobsData = [
  {
    id: 1,
    title: 'Frontend Engineer',
    company: 'BlueTech',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80k - $120k',
    description: 'Work on modern web applications using React, TypeScript, and Tailwind CSS. Join a fast-paced team building scalable products.',
    posted: '2 days ago',
    category: 'Engineering'
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'NexaSoft',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    salary: '$90k - $130k',
    description: 'Lead product strategy and work closely with engineering teams to deliver exceptional user experiences.',
    posted: '3 days ago',
    category: 'Product'
  },
  {
    id: 3,
    title: 'UX Designer',
    company: 'PixelWorks',
    location: 'Cairo, Egypt',
    type: 'Full-time',
    salary: '$70k - $100k',
    description: 'Design intuitive interfaces and conduct user research to create compelling digital experiences.',
    posted: '1 week ago',
    category: 'Design'
  },
  {
    id: 4,
    title: 'Data Analyst',
    company: 'InsightAI',
    location: 'Accra, Ghana',
    type: 'Full-time',
    salary: '$65k - $95k',
    description: 'Analyze complex datasets and provide actionable insights to drive business decisions.',
    posted: '4 days ago',
    category: 'Data'
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'CloudCore',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    salary: '$85k - $125k',
    description: 'Build and maintain cloud infrastructure, automate deployments, and ensure system reliability.',
    posted: '5 days ago',
    category: 'Engineering'
  },
  {
    id: 6,
    title: 'Marketing Director',
    company: 'BrandCore',
    location: 'Abuja, Nigeria',
    type: 'Full-time',
    salary: '$75k - $110k',
    description: 'Develop and execute marketing strategies to build brand awareness and drive growth.',
    posted: '1 week ago',
    category: 'Marketing'
  },
  {
    id: 7,
    title: 'Backend Developer',
    company: 'BlueTech',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80k - $120k',
    description: 'Build scalable APIs and microservices using Node.js, Python, or Go. Experience with cloud platforms preferred.',
    posted: '3 days ago',
    category: 'Engineering'
  },
  {
    id: 8,
    title: 'Finance Associate',
    company: 'GreenBank',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    salary: '$60k - $85k',
    description: 'Manage financial operations, prepare reports, and support strategic financial planning.',
    posted: '6 days ago',
    category: 'Finance'
  }
];

function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const categories = ['All', ...new Set(jobsData.map(j => j.category))];
  const types = ['All', ...new Set(jobsData.map(j => j.type))];

  const filteredJobs = jobsData.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  ).filter(job =>
    (selectedCategory === 'All' || job.category === selectedCategory) &&
    (selectedType === 'All' || job.type === selectedType)
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Job Opportunities
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover roles shared by alumni and partners. Find your next career opportunity.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search jobs, companies, or locations..."
              />
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
              Post a Job
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'All' ? 'All Types' : type}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredJobs.length} of {jobsData.length} jobs
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                  {job.category}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                {job.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4" />
                  {job.type}
                </div>
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <DollarSign className="h-4 w-4" />
                  {job.salary}
                </div>
                <span className="text-gray-500 dark:text-gray-500">
                  Posted {job.posted}
                </span>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                <button className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Details
                </button>
                <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No jobs found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;


