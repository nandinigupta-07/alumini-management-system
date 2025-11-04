import React from 'react';

function ProgressSteps({ current = 0 }) {
  const steps = ['Register', 'Add Institute', 'Verification', 'Dashboard'];
  return (
    <div className="flex items-center gap-2 text-sm">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <div className={`px-3 py-1 rounded-full border ${i <= current ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 text-gray-700'}`}>{s}</div>
          {i < steps.length - 1 && <div className={`h-px w-6 ${i < current ? 'bg-blue-600' : 'bg-gray-300'}`}></div>}
        </div>
      ))}
    </div>
  );
}

export default ProgressSteps;


