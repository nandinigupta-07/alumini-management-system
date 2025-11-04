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
    { label: 'Alumni', end: 10000, suffix: '+' },
    { label: 'Events', end: 250, suffix: '+' },
    { label: 'Active Clubs', end: 15, suffix: '+' },
  ];
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
            >
              <div className="text-4xl font-extrabold text-blue-800">
                {val.toLocaleString()}{item.suffix}
              </div>
              <div className="mt-2 text-gray-700 font-medium">{item.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default StatsCounter;


