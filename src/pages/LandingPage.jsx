import React, { useEffect } from 'react';
import { motion, useScroll, useAnimation } from 'framer-motion';
import { 
  Calendar, 
  Award, 
  Users, 
  Linkedin, 
  Instagram, 
  Mail,
  Menu,
  X,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import SuccessStories from '../components/SuccessStories.jsx';
import StatsCounter from '../components/StatsCounter.jsx';
import Testimonials from '../components/Testimonials.jsx';

function LandingPage() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);
  const { scrollY } = useScroll();
  const controls = useAnimation();

  // Handle scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll for anchor links
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  // Dark/Light mode toggle
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Simple counter hook for animated numbers
  const useCountUp = (end, durationMs = 1200) => {
    const [value, setValue] = React.useState(0);
    useEffect(() => {
      let rafId;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min(1, (now - start) / durationMs);
        setValue(Math.floor(progress * end));
        if (progress < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    }, [end, durationMs]);
    return value;
  };

  // Success stories data and carousel state
  const successStories = [
    { name: 'Aisha Bello', role: 'Product Manager, NexaSoft', story: 'Mentorship through CampusConnect helped me pivot into PM and land my dream role.' },
    { name: 'Daniel Chen', role: 'Senior Engineer, CloudCore', story: 'I found my current team through the alumni directory and events.' },
    { name: 'Fatima Khan', role: 'Data Scientist, InsightAI', story: 'The network and referrals opened doors I never imagined.' }
  ];
  const [successIndex, setSuccessIndex] = React.useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSuccessIndex((i) => (i + 1) % successStories.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // Testimonials data and slider state
  const testimonials = [
    { quote: 'CampusConnect keeps me involved and gives back to students.', name: 'Grace Okoye', grad: 'Class of 2016' },
    { quote: 'Great platform for mentorship and real opportunities.', name: 'Ravi Patel', grad: 'Class of 2018' },
    { quote: 'I love the events and the positive energy of the community.', name: 'Emily Johnson', grad: 'Class of 2015' }
  ];
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      
      {/* ========================================
          1. NAVBAR SECTION
      ======================================== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 shadow-md py-3' 
          : 'bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo + Site Name */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                CampusConnect
              </span>
            </motion.div>

            {/* Desktop Menu Items */}
            <div className="hidden lg:flex items-center gap-8">
              <a 
                href="#home" 
                onClick={(e) => handleSmoothScroll(e, 'home')}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Home
              </a>
              <a 
                href="#events" 
                onClick={(e) => handleSmoothScroll(e, 'events')}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Events
              </a>
              <a 
                href="#directory" 
                onClick={(e) => handleSmoothScroll(e, 'directory')}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Directory
              </a>
              <a 
                href="#jobs" 
                onClick={(e) => handleSmoothScroll(e, 'jobs')}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Jobs
              </a>
              <a 
                href="#alumni" 
                onClick={(e) => handleSmoothScroll(e, 'alumni')}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Alumni
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setIsDark((d) => !d)}
                aria-label="Toggle dark mode"
                className="px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 border border-gray-300/60 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {isDark ? 'Light' : 'Dark'}
              </button>
              <button className="px-4 py-2 text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 dark:border-gray-800 pt-4"
            >
              <a 
                href="#home" 
                onClick={(e) => handleSmoothScroll(e, 'home')}
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
              >
                Home
              </a>
              <a 
                href="#events" 
                onClick={(e) => handleSmoothScroll(e, 'events')}
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
              >
                Events
              </a>
              <a 
                href="#directory" 
                onClick={(e) => handleSmoothScroll(e, 'directory')}
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
              >
                Directory
              </a>
              <a 
                href="#jobs" 
                onClick={(e) => handleSmoothScroll(e, 'jobs')}
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
              >
                Jobs
              </a>
              <a 
                href="#alumni" 
                onClick={(e) => handleSmoothScroll(e, 'alumni')}
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
              >
                Alumni
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
              >
                Contact
              </a>
              <div className="flex gap-3 pt-2">
                <button className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-200 font-medium border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  Sign In
                </button>
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                  Join Now
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* ========================================
          2. HERO SECTION
      ======================================== */}
      <section 
        id="home"
        className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-left"
            >
              <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Welcome to <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">CampusConnect</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-xl">Connecting Students, Alumni, and Opportunities.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 to-yellow-400 hover:from-blue-700 hover:to-yellow-500">
                  Explore Now
                </button>
                <button className="px-8 py-4 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 font-semibold rounded-xl border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all shadow-md hover:shadow-lg">
                  Join Community
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-80 sm:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border border-white/60 dark:border-gray-800"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-blue-600/20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================
          2b. COUNTERS & QUICK STATS (Jobs anchor)
      ======================================== */}
      <div id="jobs">
        <StatsCounter />
      </div>

      {/* ========================================
          3. FEATURES SECTION
      ======================================== */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the features that make CampusConnect your gateway to campus life
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            
            {/* Card 1: Upcoming Events */}
            <motion.div
              variants={fadeInUp}
              className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-500/50 transform hover:-translate-y-2"
            >
              <div className="h-16 w-16 bg-blue-100 dark:bg-blue-950 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Upcoming Events
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Stay updated on campus happenings
              </p>
            </motion.div>

            {/* Card 2: Student Achievements */}
            <motion.div
              variants={fadeInUp}
              className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-500/50 transform hover:-translate-y-2"
            >
              <div className="h-16 w-16 bg-blue-100 dark:bg-blue-950 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Award className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Student Achievements
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Celebrating success and excellence
              </p>
            </motion.div>

            {/* Card 3: Clubs & Societies */}
            <motion.div
              variants={fadeInUp}
              className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-500/50 transform hover:-translate-y-2"
            >
              <div className="h-16 w-16 bg-blue-100 dark:bg-blue-950 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Clubs & Societies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Showcasing creativity and skills
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ========================================
          4. ABOUT / MISSION SECTION
      ======================================== */}
      {/* ========================================
          3b. DIRECTORY PREVIEW SECTION
      ======================================== */}
      <section id="directory" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Alumni Directory</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Search and filter to discover alumni across roles and locations.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input aria-label="Search alumni" placeholder="Search alumni by name or role" className="w-full sm:w-80 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <div className="flex gap-2 flex-wrap">
                {['Engineering','Product','Design','Business'].map((tag) => (
                  <button key={tag} className="px-3 py-2 rounded-full text-sm border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-500">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Jane Doe', role: 'Software Engineer', company: 'BlueTech', location: 'Lagos' },
              { name: 'Michael Smith', role: 'Product Designer', company: 'PixelWorks', location: 'Accra' },
              { name: 'Sara Ali', role: 'Data Analyst', company: 'InsightAI', location: 'Cairo' },
            ].map((alum, i) => (
              <motion.div
                key={alum.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{alum.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{alum.role} • {alum.company}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{alum.location}</div>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-lg border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 py-2 text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-800">View Profile</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          4. ABOUT / MISSION SECTION
      ======================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              CampusConnect is dedicated to fostering meaningful connections between students and alumni, 
              creating opportunities for networking, mentorship, and professional growth. We believe in 
              building a vibrant community that extends beyond graduation, where every member can thrive 
              and contribute to the collective success of our institution.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          5. UPCOMING EVENTS SECTION
      ======================================== */}
      <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Join our next meetups, webinars, and reunions.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Tech Alumni Meetup', date: 'Nov 12, 2025', location: 'Online' },
              { title: 'Career Fair', date: 'Dec 3, 2025', location: 'Campus Hall A' },
              { title: 'Design Showcase', date: 'Jan 15, 2026', location: 'Innovation Hub' }
            ].map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center gap-3 text-blue-700 dark:text-blue-400 font-semibold"><Calendar className="h-5 w-5" /> {event.date}</div>
                <div className="mt-3 text-lg font-bold text-gray-900 dark:text-white">{event.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{event.location}</div>
                <button className="mt-4 w-full rounded-lg bg-blue-600 text-white py-2 text-sm font-semibold hover:bg-blue-700">Register</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          6. SUCCESS STORIES CAROUSEL (Alumni anchor)
      ======================================== */}
      <section id="alumni" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <SuccessStories />
      </section>

      {/* ========================================
          7. DONATION PROGRESS BAR
      ======================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Support Campus Initiatives</h2>
          <p className="mt-2 text-center text-gray-600 dark:text-gray-300">Help us fund scholarships, research, and community programs.</p>
          <div className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
              <span>Goal: $50,000</span>
              <span>Raised: $32,500</span>
            </div>
            <div className="mt-3 h-4 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
              <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-blue-600 to-yellow-400"></div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 rounded-lg bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700">Contribute Now</button>
              <button className="flex-1 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 py-3 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800">Learn How Funds Are Used</button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          8. TESTIMONIALS SLIDER
      ======================================== */}
      <Testimonials />

      {/* ========================================
          5. FOOTER SECTION
      ======================================== */}
      {/* Footer is provided by layout component */}

      {/* Custom CSS for blob animation */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;
