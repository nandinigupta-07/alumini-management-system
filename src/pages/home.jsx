import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, ArrowRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatsCounter from '../components/StatsCounter';

function Home() {
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with soft gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, rgba(15, 23, 42, 0.35), rgba(2, 6, 23, 0.2)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        {/* Dark mode overlay to ensure readability */}
        <div className="absolute inset-0 bg-linear-to-br from-white/60 via-white/20 to-transparent dark:from-gray-950/70 dark:via-gray-950/40 dark:to-transparent" />

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
                Welcome to <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">CampusConnect</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                Connecting Students, Alumni, and Opportunities. Your gateway to a thriving community that extends beyond graduation.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/events"
                  className="px-8 py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  Explore Events
                </Link>
                <Link 
                  to="/directory"
                  className="px-8 py-4 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 font-semibold rounded-xl border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                >
                  Join Community
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-80 sm:h-112 rounded-2xl overflow-hidden shadow-2xl border border-white/60 dark:border-gray-800"
            >
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop"
                alt="University campus life"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-blue-900/20 to-blue-500/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-500/50 transform hover:-translate-y-2"
            >
              <div className="h-16 w-16 rounded-xl flex items-center justify-center mb-6 bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 group-hover:from-blue-600 group-hover:to-indigo-500 transition-all">
                <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Upcoming Events
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Stay updated on campus happenings, reunions, and networking opportunities.
              </p>
              <Link 
                to="/events"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
              >
                View Events <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-500/50 transform hover:-translate-y-2"
            >
              <div className="h-16 w-16 rounded-xl flex items-center justify-center mb-6 bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 group-hover:from-blue-600 group-hover:to-indigo-500 transition-all">
                <Award className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Student Achievements
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Celebrating success and excellence across our community.
              </p>
              <Link 
                to="/alumni"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
              >
                See Stories <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-500/50 transform hover:-translate-y-2"
            >
              <div className="h-16 w-16 rounded-xl flex items-center justify-center mb-6 bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 group-hover:from-blue-600 group-hover:to-indigo-500 transition-all">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Alumni Network
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Connect with alumni across industries and build your professional network.
              </p>
              <Link 
                to="/directory"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
              >
                Browse Directory <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
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
            <Link 
              to="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Removed blob CSS now that hero uses imagery */}
    </div>
  );
}

export default Home;
