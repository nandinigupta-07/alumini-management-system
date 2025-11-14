import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Award, Users } from 'lucide-react';
import SuccessStories from '../components/SuccessStories';
import Testimonials from '../components/Testimonials';
import Manas from '../assets/ManasSingh.jpg';
import Sikha from '../assets/SikhaJain.jpg';
import Sahil from '../assets/SahilSrivastava.jpg';
import Tanuj from '../assets/TanujJohal.jpg';
// Sample success stories data
const successStoriesData = [
  {
    id: 1,
    name: 'Manas Singh',
    role: 'Senior Product Manager',
    company: 'CISCO',
    year: 2026,
    story: 'Mentorship through CampusConnect helped me pivot into Product Management and land my dream role. The alumni network provided invaluable guidance during my career transition.',
    image: Manas
  },
  {
    id: 2,
    name: 'Sikha Jain',
    role: 'Senior Engineer',
    company: 'CloudCore',
    year: 2019,
    story: 'I found my current team through the alumni directory and events. The connections I made have been instrumental in my career growth and professional development.',
    image: Sikha
  },
  {
    id: 3,
    name: 'Tanuj Johal',
    role: 'Software Developer',
    company: 'TEKION',
    year: 2021,
    story: 'The network and referrals opened doors I never imagined. CampusConnect gave me access to opportunities that transformed my career path.',
    image: Tanuj
  },
  {
    id: 4,
    name: 'Sahil Srivastava',
    role: 'Data Scientist',
    company: 'Hotstar',
    year: 2023,
    story: 'Through alumni events, I connected with mentors who helped me refine my portfolio and secure positions at top design agencies.',
    image: Sahil
  }
];

// Sample testimonials data
const testimonialsData = [
  {
    id: 1,
    quote: 'CampusConnect keeps me involved and gives back to students. It\'s rewarding to mentor the next generation and see them succeed.',
    name: 'Pawan Gupta',
    role: 'Marketing Director',
    grad: 'Class of 2016',
    image: 'grace'
  },
  {
    id: 2,
    quote: 'Great platform for mentorship and real opportunities. The community is supportive and the events are always valuable.',
    name: 'Rakhi Sharma',
    role: 'Software Engineer',
    grad: 'Class of 2018',
    image: 'ravi'
  },
  {
    id: 3,
    quote: 'I love the events and the positive energy of the community. It\'s amazing how the network continues to grow and support each other.',
    name: 'Hemant Patel',
    role: 'Business Analyst',
    grad: 'Class of 2015',
    image: 'emily'
  },
  {
    id: 4,
    quote: 'The alumni directory helped me find my current job. The connections here are genuine and always willing to help.',
    name: 'Aarya Mishra',
    role: 'DevOps Engineer',
    grad: 'Class of 2019',
    image: 'david'
  }
];

function Alumni() {
  const [currentStory, setCurrentStory] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const storyInterval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStoriesData.length);
    }, 5000);
    return () => clearInterval(storyInterval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(testimonialInterval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Alumni Success Stories
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Celebrating the achievements of our alumni community. See how CampusConnect has helped shape careers and build lasting connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              From Our Community
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Real stories from alumni who have thrived in their careers
            </p>
          </div>

          {/* Success Stories Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 p-8 md:p-12 text-white shadow-xl">
              <motion.div
                key={currentStory}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6" />
                  <span className="text-blue-100 font-medium">Success Story</span>
                </div>
                <p className="text-xl md:text-2xl leading-relaxed mb-6">
                  "{successStoriesData[currentStory].story}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold">
                      <img
                          src={successStoriesData[currentStory].image}
                          alt={successStoriesData[currentStory].name}
                          className="h-full w-full object-cover"
                        />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{successStoriesData[currentStory].name}</div>
                    <div className="text-blue-100">
                      {successStoriesData[currentStory].role} at {successStoriesData[currentStory].company}
                    </div>
                    <div className="text-blue-200 text-sm">Batch of {successStoriesData[currentStory].year}</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setCurrentStory((prev) => (prev - 1 + successStoriesData.length) % successStoriesData.length)}
                className="p-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {successStoriesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentStory
                        ? 'w-8 bg-blue-600'
                        : 'w-2 bg-gray-300 dark:bg-gray-700'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentStory((prev) => (prev + 1) % successStoriesData.length)}
                className="p-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Alumni Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Testimonials from our vibrant community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} • {testimonial.grad}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20"
            >
              <Users className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">2,500+</div>
              <div className="text-gray-600 dark:text-gray-300">Active Alumni</div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-center p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20"
            >
              <Award className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Success Stories</div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20"
            >
              <Users className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">1,200+</div>
              <div className="text-gray-600 dark:text-gray-300">Mentorship Connections</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Alumni;

