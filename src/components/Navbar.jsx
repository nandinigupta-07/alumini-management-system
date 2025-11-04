import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center gap-2" 
            aria-label="CampusConnect Alumni"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              CampusConnect
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 text-sm">
            <li>
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    isActive 
                      ? 'text-blue-700 dark:text-blue-400 font-semibold' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/events" 
                className={({isActive}) => 
                  `hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    isActive 
                      ? 'text-blue-700 dark:text-blue-400 font-semibold' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/directory" 
                className={({isActive}) => 
                  `hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    isActive 
                      ? 'text-blue-700 dark:text-blue-400 font-semibold' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                Directory
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/jobs" 
                className={({isActive}) => 
                  `hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    isActive 
                      ? 'text-blue-700 dark:text-blue-400 font-semibold' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/alumni" 
                className={({isActive}) => 
                  `hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    isActive 
                      ? 'text-blue-700 dark:text-blue-400 font-semibold' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                Alumni
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({isActive}) => 
                  `hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    isActive 
                      ? 'text-blue-700 dark:text-blue-400 font-semibold' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <NavLink 
              to="/login" 
              className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sign In
            </NavLink>
            <NavLink 
              to="/register" 
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-all"
            >
              Join Now
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-gray-200 dark:border-gray-800">
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className={({isActive}) => 
                    `block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                      isActive 
                        ? 'text-blue-700 dark:text-blue-400 font-semibold' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/events" 
                  className={({isActive}) => 
                    `block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                      isActive 
                        ? 'text-blue-700 dark:text-blue-400 font-semibold' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/directory" 
                  className={({isActive}) => 
                    `block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                      isActive 
                        ? 'text-blue-700 dark:text-blue-400 font-semibold' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Directory
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/jobs" 
                  className={({isActive}) => 
                    `block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                      isActive 
                        ? 'text-blue-700 dark:text-blue-400 font-semibold' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/alumni" 
                  className={({isActive}) => 
                    `block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                      isActive 
                        ? 'text-blue-700 dark:text-blue-400 font-semibold' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Alumni
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({isActive}) => 
                    `block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                      isActive 
                        ? 'text-blue-700 dark:text-blue-400 font-semibold' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex gap-3">
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="flex-1 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span>{isDark ? 'Light' : 'Dark'}</span>
              </button>
              <NavLink 
                to="/login" 
                className="flex-1 px-4 py-2 text-center rounded-lg text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </NavLink>
              <NavLink 
                to="/register" 
                className="flex-1 px-4 py-2 text-center rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Now
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;


