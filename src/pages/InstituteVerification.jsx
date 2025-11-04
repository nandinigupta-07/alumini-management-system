import React from 'react';
import { motion } from 'framer-motion';
import { verifyInstitute } from '../utils/mockApi.js';
import ProgressSteps from '../components/ProgressSteps.jsx';

function InstituteVerification() {
  const [name, setName] = React.useState('');
  const [domainOrCode, setDomainOrCode] = React.useState('');
  const [status, setStatus] = React.useState('form'); // form | verifying | success | pending

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('verifying');
    const res = await verifyInstitute({ name, domainOrCode });
    setStatus(res.verified ? 'success' : 'pending');
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Institute Setup</h1>
        <ProgressSteps current={1} />
      </div>

      {status === 'form' && (
        <motion.form initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit} className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Institute Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="e.g., Springfield University" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Domain or Code</label>
              <input value={domainOrCode} onChange={(e) => setDomainOrCode(e.target.value)} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="e.g., springfield.edu or VERIFIED" required />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Submit</button>
          </div>
        </motion.form>
      )}

      {status === 'verifying' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 rounded-xl border border-gray-200 bg-white p-6 text-center">
          <p className="text-gray-700">Verifying institute…</p>
        </motion.div>
      )}

      {status === 'success' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6">
          <p className="text-green-800 font-semibold">Institute Verified!</p>
          <a href="/dashboard" className="mt-4 inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Go to Dashboard</a>
        </motion.div>
      )}

      {status === 'pending' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-xl border border-yellow-200 bg-yellow-50 p-6">
          <p className="text-yellow-800 font-semibold">Pending Verification</p>
          <p className="mt-2 text-sm text-yellow-800">We couldn't verify the institute. Please retry or contact support.</p>
          <div className="mt-4 flex gap-3">
            <button onClick={() => setStatus('form')} className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">Retry</button>
            <a href="/contact" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Contact Support</a>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default InstituteVerification;


