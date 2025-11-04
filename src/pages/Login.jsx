import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ProgressSteps from '../components/ProgressSteps.jsx';

function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/institute');
  };
  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <ProgressSteps current={0} />
      </div>
      <p className="mt-2 text-gray-600">Welcome back to your alumni network.</p>

      <form onSubmit={handleLogin} className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Sign in</button>
        </div>
        <p className="mt-4 text-sm text-gray-600">New here? <NavLink to="/register" className="text-blue-700 hover:underline">Create an account</NavLink></p>
      </form>
    </div>
  );
}

export default Login;


