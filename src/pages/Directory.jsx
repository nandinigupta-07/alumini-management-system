import React, { useState } from 'react';
import { Search, MapPin, Building, GraduationCap } from 'lucide-react';

// Sample alumni data
const alumniData = [
  { id: 1, name: 'Alex Johnson', year: 2016, role: 'Software Engineer', course: 'CSE', company: 'BlueTech', location: 'Lagos', email: 'alex.j@example.com' },
  { id: 2, name: 'Jane Doe', year: 2018, role: 'Product Manager', course: 'MBA', company: 'NexaSoft', location: 'Abuja', email: 'jane.d@example.com' },
  { id: 3, name: 'Michael Smith', year: 2015, role: 'Data Analyst', course: 'Stats', company: 'InsightAI', location: 'Accra', email: 'michael.s@example.com' },
  { id: 4, name: 'Sara Ali', year: 2017, role: 'UX Designer', course: 'Design', company: 'PixelWorks', location: 'Cairo', email: 'sara.a@example.com' },
  { id: 5, name: 'David Kim', year: 2019, role: 'DevOps Engineer', course: 'CSE', company: 'CloudCore', location: 'Nairobi', email: 'david.k@example.com' },
  { id: 6, name: 'Emily Zhang', year: 2016, role: 'Finance Associate', course: 'Finance', company: 'GreenBank', location: 'Lagos', email: 'emily.z@example.com' },
  { id: 7, name: 'James Wilson', year: 2017, role: 'Marketing Director', course: 'Marketing', company: 'BrandCore', location: 'Abuja', email: 'james.w@example.com' },
  { id: 8, name: 'Maria Garcia', year: 2018, role: 'Senior Developer', course: 'CSE', company: 'BlueTech', location: 'Lagos', email: 'maria.g@example.com' },
  { id: 9, name: 'Robert Brown', year: 2015, role: 'Business Analyst', course: 'Business', company: 'NexaSoft', location: 'Accra', email: 'robert.b@example.com' },
];

function Directory() {
  const [query, setQuery] = useState('');
  const [batch, setBatch] = useState('All');
  const [course, setCourse] = useState('All');
  const [company, setCompany] = useState('All');
  const [location, setLocation] = useState('All');

  const batches = ['All', ...new Set(alumniData.map(a => a.year))].sort((a, b) => b - a);
  const courses = ['All', ...new Set(alumniData.map(a => a.course))];
  const companies = ['All', ...new Set(alumniData.map(a => a.company))];
  const locations = ['All', ...new Set(alumniData.map(a => a.location))];

  const filtered = alumniData.filter(a =>
    a.name.toLowerCase().includes(query.toLowerCase()) &&
    (batch === 'All' || a.year === Number(batch)) &&
    (course === 'All' || a.course === course) &&
    (company === 'All' || a.company === company) &&
    (location === 'All' || a.location === location)
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Alumni Directory
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Search and find alumni by name, batch, course, company, or location.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search by name or role..."
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <select
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {batches.map((y) => (
                <option key={y} value={y}>
                  {y === 'All' ? 'All Batches' : `Class of ${y}`}
                </option>
              ))}
            </select>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {courses.map((c) => (
                <option key={c} value={c}>
                  {c === 'All' ? 'All Courses' : c}
                </option>
              ))}
            </select>
            <select
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {companies.map((c) => (
                <option key={c} value={c}>
                  {c === 'All' ? 'All Companies' : c}
                </option>
              ))}
            </select>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l === 'All' ? 'All Locations' : l}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filtered.length} of {alumniData.length} alumni
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((alum) => (
            <div
              key={alum.id}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {alum.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{alum.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{alum.role}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <GraduationCap className="h-4 w-4" />
                  Class of {alum.year} • {alum.course}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Building className="h-4 w-4" />
                  {alum.company}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4" />
                  {alum.location}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                <button className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  View Profile
                </button>
                <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No alumni found matching your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Directory;


