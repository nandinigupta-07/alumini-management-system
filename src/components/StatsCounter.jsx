import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function useCountUp(end, durationMs = 1200) {
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
}

function StatsCounter() {
  const stats = [
    { label: 'Alumni Connected', end: 5000, suffix: '+' },
    { label: 'Events Hosted', end: 120, suffix: '+' },
    { label: 'Jobs Shared', end: 350, suffix: '+' },
  ];
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((item, idx) => {
          const val = useCountUp(item.end);
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                {val.toLocaleString()}{item.suffix}
              </div>
              <div className="mt-2 text-gray-700 dark:text-gray-300 font-medium">{item.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default StatsCounter;


