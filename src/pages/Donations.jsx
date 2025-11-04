import React from 'react';

function Donations() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-2xl font-bold">Support & Donations</h1>
      <p className="mt-2 text-gray-600">Help fund scholarships, labs, and student innovation.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { tier: 'Supporter', amount: '$25', desc: 'General fund support.' },
          { tier: 'Champion', amount: '$100', desc: 'Back a scholarship.' },
          { tier: 'Patron', amount: '$500', desc: 'Fund a lab or club.' },
        ].map((t) => (
          <div key={t.tier} className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <p className="text-sm text-gray-500">{t.tier}</p>
            <p className="mt-1 text-3xl font-bold">{t.amount}</p>
            <p className="mt-2 text-sm text-gray-600">{t.desc}</p>
            <button className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Donate</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Donations;


