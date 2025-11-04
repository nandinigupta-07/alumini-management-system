import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  {
    name: 'Aisha Bello',
    role: 'Product Manager, NexaSoft',
    blurb: 'Mentorship through CampusConnect helped me pivot into PM.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Daniel Chen',
    role: 'Senior Engineer, CloudCore',
    blurb: 'I found my current team through the alumni directory.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Fatima Khan',
    role: 'Data Scientist, InsightAI',
    blurb: 'The network and referrals opened amazing doors for me.',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop'
  }
];

function SuccessStories() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-2 text-gray-600">Inspiring achievements from our alumni.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border border-gray-100 bg-white"
            >
              <div className="h-48 w-full bg-gray-200" style={{ backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-6">
                <div className="font-semibold text-gray-900">{s.name}</div>
                <div className="text-sm text-gray-600">{s.role}</div>
                <p className="mt-3 text-gray-700">{s.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;


