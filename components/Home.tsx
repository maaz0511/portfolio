
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { generateAndDownloadResume } from '../utils/resume';
import { Link } from 'react-router-dom';

const subheadings = [
  "Machine Learning Developer",
  "AI Educator",
  "Problem Solver"
];

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subheading, setSubheading] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [subheading, isDeleting, delta]);

  const tick = () => {
    let i = index % subheadings.length;
    let fullText = subheadings[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, subheading.length - 1) 
      : fullText.substring(0, subheading.length + 1);

    setSubheading(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5); // Speed up deletion
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Wait before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setIndex(prevIndex => prevIndex + 1);
      setDelta(150); // Reset speed for typing
    } else if (!isDeleting && updatedText !== fullText) {
      // Add slight randomness to typing to make it feel human
      setDelta(100 + Math.random() * 50);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const offset = window.scrollY;
        sectionRef.current.style.backgroundPositionY = `${offset * 0.5}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home"
      ref={sectionRef}
      className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-transparent relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center z-10">
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-light-text dark:text-dark-text mb-5 tracking-tight leading-tight">
            Hi, I’m <span className="text-blue-700 dark:text-blue-400">Mohd Maaz</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium mb-6 tracking-wide">
            🥇 University Gold Medalist | MCA | BCA
          </p>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8">
            Machine Learning Developer & AI Educator
          </h2>
          
        </div>
        
        <div className="opacity-0 animate-fade-in-up mt-10 max-w-2xl mx-auto" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed whitespace-pre-line">
            I build ML solutions that solve real problems and explain them in a way that actually makes sense.{"\n"}
            I make sure the What, the Why, and the How are always clear.
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {/* 1. View Projects (Primary - Blue) */}
          <Link to="/projects" className="px-8 py-3.5 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-dark dark:hover:bg-primary-light hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300">
            View Projects
          </Link>
          
          {/* 2. Contact Me (Secondary - Dark) */}
          <Link to="/contact" className="px-8 py-3.5 bg-gray-800 dark:bg-gray-700 text-white font-bold rounded-full shadow-lg hover:bg-gray-900 dark:hover:bg-gray-600 transform hover:-translate-y-1 transition-all duration-300">
            Contact Me
          </Link>

          {/* 3. Download Resume (Filled Green) */}
          <button onClick={generateAndDownloadResume} className="px-8 py-3.5 bg-accent text-white font-bold rounded-full shadow-lg hover:bg-accent-dark dark:hover:bg-accent-light transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
