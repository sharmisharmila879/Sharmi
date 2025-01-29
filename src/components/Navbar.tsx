import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/projects', label: 'Projects' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#141414]/80 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-[#8D45BC] dark:text-[#FED051]">
            Portfolio
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#8D45BC] dark:text-[#FED051]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-[#8D45BC] dark:hover:text-[#FED051] transition-colors ${
                  isActive(link.path) ? 'text-[#8D45BC] dark:text-[#FED051]' : 'text-black dark:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[#FED051]" />
              ) : (
                <Moon className="w-5 h-5 text-[#8D45BC]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  isActive(link.path) ? 'text-[#8D45BC] dark:text-[#FED051]' : 'text-black dark:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-5 h-5 text-[#FED051] mr-2" />
                  <span className="text-white">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5 text-[#8D45BC] mr-2" />
                  <span className="text-black">Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}