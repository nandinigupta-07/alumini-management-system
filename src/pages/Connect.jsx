import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../components/Toast.jsx';

const MOCK_ALUMNI = [
  { name: 'Alex Johnson', batch: 2016, department: 'CSE' },
  { name: 'Jane Doe', batch: 2018, department: 'EEE' },
  { name: 'Michael Smith', batch: 2015, department: 'ME' },
  { name: 'Sara Ali', batch: 2017, department: 'IT' },
  { name: 'David Kim', batch: 2019, department: 'CSE' },
];

function Connect() {
  const [query, setQuery] = React.useState('');
  const [dept, setDept] = React.useState('All');
  const [batch, setBatch] = React.useState('All');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [recipient, setRecipient] = React.useState(null);
  const [mode, setMode] = React.useState('single');
  const [message, setMessage] = React.useState('');
  const { addToast, ToastContainer } = useToast();

  const filtered = MOCK_ALUMNI.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase()) &&
    (dept === 'All' || a.department === dept) &&
    (batch === 'All' || a.batch === Number(batch))
  );

  const openConnect = (alum) => {
    setRecipient(alum);
    setIsModalOpen(true);
  };

  const sendMessage = () => {
    setIsModalOpen(false);
    setMessage('');
    addToast('Message sent successfully', 'success');
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Connect</h1>
        <a href="/mentorship" className="rounded-md border border-blue-600 px-3 py-2 text-sm text-blue-700 hover:bg-blue-50">Mentorship</a>
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex flex-wrap items-end gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Search</label>
            <input value={query} onChange={(e) => setQuery(e.target.value)} className="mt-1 w-56 rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Search name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Batch</label>
            <select value={batch} onChange={(e) => setBatch(e.target.value)} className="mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm">
              {['All',2015,2016,2017,2018,2019].map(String).map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <select value={dept} onChange={(e) => setDept(e.target.value)} className="mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm">
              {['All','CSE','EEE','ME','IT'].map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((a, i) => (
          <motion.div key={a.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-100" />
              <div>
                <div className="font-semibold">{a.name}</div>
                <div className="text-sm text-gray-600">Batch {a.batch} · {a.department}</div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button onClick={() => openConnect(a)} className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700">Connect</button>
              <a href="/directory" className="rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50">View Profile</a>
            </div>
          </motion.div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg font-semibold">Send Message</div>
                <div className="text-sm text-gray-600">To: {mode === 'single' ? recipient?.name : 'Multiple recipients'}</div>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50">Close</button>
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <label className="flex items-center gap-2"><input type="radio" checked={mode==='single'} onChange={() => setMode('single')} /> Single Recipient</label>
              <label className="flex items-center gap-2"><input type="radio" checked={mode==='multiple'} onChange={() => setMode('multiple')} /> Multiple Recipients</label>
            </div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="mt-3 w-full rounded-md border border-gray-300 p-3 text-sm" placeholder="Write your message..." />
            <div className="mt-4 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">Cancel</button>
              <button onClick={sendMessage} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Send</button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Connect;


