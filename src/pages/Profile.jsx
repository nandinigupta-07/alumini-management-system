import React from 'react';

function Profile() {
  const handleProfileUpdate = () => {
    alert('Profile updated successfully!');
  };
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-bold">Your Profile</h1>
      <p className="mt-2 text-gray-600">View and update your alumni information.</p>

      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Graduation Year</label>
            <input className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="2018" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Headline</label>
            <input className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Senior Engineer at BlueTech" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" rows="4" placeholder="Short professional bio" />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-3">
          <button className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50">Cancel</button>
          <button onClick={handleProfileUpdate} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;


