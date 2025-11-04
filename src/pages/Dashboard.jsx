import React from 'react';

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-600">Quick overview of your alumni activity.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-500">Connections</p>
          <p className="mt-2 text-3xl font-semibold">128</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-500">Events Registered</p>
          <p className="mt-2 text-3xl font-semibold">3</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-500">Applications</p>
          <p className="mt-2 text-3xl font-semibold">5</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


