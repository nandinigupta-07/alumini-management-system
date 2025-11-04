import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { quote: 'CampusConnect keeps me involved and gives back to students.', name: 'Grace Okoye', grad: 'Class of 2016' },
  { quote: 'Great platform for mentorship and real opportunities.', name: 'Ravi Patel', grad: 'Class of 2018' },
  { quote: 'I love the events and the positive energy of the community.', name: 'Emily Johnson', grad: 'Class of 2015' }
];

function Testimonials() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Alumni Say</h2>
        <div className="relative mt-10">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 bg-white p-10 shadow-lg"
          >
            <div className="text-xl text-gray-700 leading-relaxed">“{testimonials[index].quote}”</div>
            <div className="mt-6 font-semibold text-gray-900">{testimonials[index].name}</div>
            <div className="text-sm text-gray-600">{testimonials[index].grad}</div>
          </motion.div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Go to testimonial ${i+1}`} className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-yellow-400' : 'bg-gray-300'}`}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;


