import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Github, Send } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">CampusConnect</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Connecting students, alumni, and opportunities. Building a vibrant community that extends beyond graduation.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-pink-400 hover:bg-pink-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 hover:text-pink-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/directory" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Directory
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} CampusConnect Alumni. All rights reserved.
          </p>
          {/* Newsletter */}
          <form className="w-full md:w-auto flex items-center gap-2">
            <input
              type="email"
              required
              placeholder="Subscribe with your email"
              className="w-full md:w-72 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
              <Send className="h-4 w-4" />
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


