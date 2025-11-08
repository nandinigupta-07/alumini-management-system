import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

// Sample events data
const eventsData = [
  {
    id: 1,
    title: 'Tech Alumni Meetup',
    date: '2025-11-12',
    time: '6:00 PM',
    location: 'Online',
    type: 'Webinar',
    description: 'Connect with tech alumni and discuss industry trends, career opportunities, and share experiences.',
    attendees: 150,
    image: 'tech'
  },
  {
    id: 2,
    title: 'Career Fair 2025',
    date: '2025-12-03',
    time: '10:00 AM',
    location: 'Campus Hall A',
    type: 'Career',
    description: 'Meet recruiters from top companies and explore job opportunities across various industries.',
    attendees: 500,
    image: 'career'
  },
  {
    id: 3,
    title: 'Design Showcase',
    date: '2026-01-15',
    time: '2:00 PM',
    location: 'Innovation Hub',
    type: 'Showcase',
    description: 'Showcase of creative work from alumni and current students in design and media.',
    attendees: 200,
    image: 'design'
  },
  {
    id: 4,
    title: 'Alumni Reunion Dinner',
    date: '2026-02-20',
    time: '7:00 PM',
    location: 'Grand Hotel',
    type: 'Social',
    description: 'Annual alumni reunion dinner. Reconnect with old friends and make new connections.',
    attendees: 300,
    image: 'reunion'
  },
  {
    id: 5,
    title: 'Mentorship Workshop',
    date: '2026-03-10',
    time: '3:00 PM',
    location: 'Online',
    type: 'Workshop',
    description: 'Learn how to become an effective mentor and help guide the next generation of students.',
    attendees: 100,
    image: 'mentorship'
  },
  {
    id: 6,
    title: 'Startup Pitch Night',
    date: '2026-04-05',
    time: '6:30 PM',
    location: 'Business Center',
    type: 'Entrepreneurship',
    description: 'Alumni entrepreneurs pitch their startups and share insights on building successful businesses.',
    attendees: 180,
    image: 'startup'
  }
];

// Parse date and time properly
const parseEventDateTime = (dateString, timeString) => {
  const date = new Date(dateString);
  const timeMatch = timeString.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (timeMatch) {
    let hours = parseInt(timeMatch[1], 10);
    const minutes = parseInt(timeMatch[2], 10);
    const period = timeMatch[3].toUpperCase();
    
    if (period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }
    
    date.setHours(hours, minutes, 0, 0);
  }
  return date;
};

function Events() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Get next upcoming event
  const nextEvent = eventsData[0];
  const nextEventDate = useMemo(
    () => parseEventDateTime(nextEvent.date, nextEvent.time),
    [nextEvent.date, nextEvent.time]
  );

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, nextEventDate.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [nextEventDate]);

  const eventTypes = ['All', ...new Set(eventsData.map(e => e.type))];
  const filteredEvents = selectedFilter === 'All' 
    ? eventsData 
    : eventsData.filter(e => e.type === selectedFilter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join our next meetups, webinars, and reunions. Stay connected with the community.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 p-8 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Next Event: {nextEvent.title}</h2>
          </div>
          <p className="text-blue-100 mb-6">{formatDate(nextEvent.date)} • {nextEvent.time} • {nextEvent.location}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white/20 rounded-lg p-4 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm text-blue-100">Days</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm text-blue-100">Hours</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm text-blue-100">Minutes</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm text-blue-100">Seconds</div>
            </div>
          </div>
          <button className="mt-6 w-full sm:w-auto px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            Register Now
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-3">
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedFilter(type)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-3">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold text-sm">{formatDate(event.date)}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                {event.description}
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="h-4 w-4" />
                  {event.attendees} attending
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Details
                </button>
                <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;


