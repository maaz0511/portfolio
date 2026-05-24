
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import { PROJECTS, CERTIFICATES, BLOG_POSTS } from './constants';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

export type Theme = 'light' | 'dark';
export type Page = 'home' | 'about' | 'projects' | 'certificates' | 'blog' | 'contact';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 absolute bottom-0 w-full">
       <div className="container mx-auto px-6 py-6 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} <span className="font-bold text-gray-700 dark:text-gray-200">Mohd Maaz</span>. Built with ❤️ for Data & AI.
          </p>
        </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  // Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      <div className="flex flex-col min-h-screen relative pb-24">
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects projects={PROJECTS} />} />
            <Route path="/blog" element={<Blog posts={BLOG_POSTS} />} />
            <Route path="/certificates" element={<Certificates certificates={CERTIFICATES} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
