
import React from 'react';
import { SKILLS } from '../constants';
import SkillIcon from './SkillIcon';
import { generateAndDownloadResume } from '../utils/resume';

const About: React.FC = () => {
  // Using the profile image from public folder
  const profileImageUrl = "/profile.png";

  return (
    <section id="about" className="py-20 animate-fade-in-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        
        <div className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-white/20 dark:border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <img 
                  src={profileImageUrl}
                  alt="Mohd Maaz" 
                  className="relative -mt-20 rounded-2xl w-64 h-72 md:w-80 md:h-96 object-cover shadow-2xl border-4 border-white dark:border-gray-700 select-none transition-all duration-300 group-hover:rotate-1"
                />
              </div>
            </div>
            <div className="md:w-2/3 text-lg text-gray-700 dark:text-gray-300">
              <p className="mb-4 leading-relaxed font-medium">
                Hi, I'm Mohd Maaz, a Machine Learning Developer and educator who loves building real solutions and explaining complex things simply.
              </p>
              <p className="mb-4 leading-relaxed">
                I've built and deployed end-to-end ML projects, from a YouTube Comment Analyzer using NLP and LightGBM, to a Multiple Disease Predictor for Diabetes, PCOS, and Heart Disease. I've guided students in choosing the right learning path, and helped professionals work with data tools.
              </p>
              <p className="mb-4 leading-relaxed">
                My approach to any problem : understand the what, the why, and the how before writing a single line of code.
              </p>
              <p className="mb-4 leading-relaxed">
                I hold a BCA and MCA from Integral University, 10/10 CGPA, University Topper both times.
              </p>
              <p className="mb-8 leading-relaxed">
                Open to freelance ML projects, tutoring, and collaborations. <strong className="text-gray-900 dark:text-white">Let's build something meaningful.</strong>
              </p>
              <button onClick={generateAndDownloadResume} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-dark transform hover:-translate-y-1 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Download My Resume
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {SKILLS.map((skill, index) => (
              <SkillIcon key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
