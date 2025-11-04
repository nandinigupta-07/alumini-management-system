import React from 'react';
import { motion } from 'framer-motion';

function Mentorship() {
  const mentors = [
    { name: 'Aisha Bello', bio: 'PM at NexaSoft. 8 yrs experience. Product strategy & careers.' },
    { name: 'Daniel Chen', bio: 'Sr Engineer at CloudCore. System design & interviews.' },
  ];
  const mentees = [
    { name: 'Ravi Patel', bio: 'Looking for guidance on backend engineering growth.' },
    { name: 'Grace Okoye', bio: 'Seeking mentorship for product management transition.' },
  ];
  const [mode, setMode] = React.useState('seek');

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mentorship</h1>
        <div className="flex gap-2">
          <button onClick={() => setMode('seek')} className={`rounded-md px-3 py-2 text-sm border ${mode==='seek' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 hover:bg-gray-50'}`}>Seek a Mentor</button>
          <button onClick={() => setMode('be')} className={`rounded-md px-3 py-2 text-sm border ${mode==='be' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 hover:bg-gray-50'}`}>Be a Mentor</button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {(mode === 'seek' ? mentors : mentees).map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-100" />
              <div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-gray-600">{p.bio}</div>
              </div>
            </div>
            <div className="mt-4">
              <button className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700">Request</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Mentorship;


