
import React from 'react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import type { Theme } from '../App';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);


const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/blog', label: 'Blog' },
    { to: '/certificates', label: 'Certificates' },
    { to: '/contact', label: 'Contact' },
  ];

  const closeMenu = () => setIsOpen(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" onClick={closeMenu} className="text-2xl font-bold text-primary dark:text-primary-light">Mohd Maaz</Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <NavLink 
              key={link.to} 
              to={link.to}
              className={({ isActive }) => `font-bold transition-colors duration-200 ${
                isActive
                ? 'text-primary dark:text-primary-light' 
                : 'text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary-light'
              }`}
            >
              {link.label}
            </NavLink>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-dark-bg">
            {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
          </button>
        </div>

        <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="p-2 mr-2 rounded-full focus:outline-none">
                {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-light-text dark:text-dark-text focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>
        </div>
      </nav>
      {isOpen && (
         <div className="md:hidden bg-light-card dark:bg-dark-card border-t border-gray-200 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                {navLinks.map(link => (
                    <NavLink 
                      key={link.to} 
                      to={link.to} 
                      onClick={closeMenu}
                      className={({ isActive }) => `block w-full text-center px-3 py-2 rounded-md text-base font-bold ${
                        isActive
                        ? 'bg-primary/10 text-primary dark:text-primary-light'
                        : 'text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;
