
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const GitHubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.1-4.7-5.1 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1.1a10.3 10.3 0 015 0c2-1.3 2.8-1.1 2.8-1.1.6 1.4.2 2.5.1 2.7.7.7 1.1 1.6 1.1 2.8 0 4-2.4 4.8-4.7 5.1.4.3.8.9.8 1.8v2.7c0 .3.2.7.8.6A12 12 0 0012 .3z"></path></svg>;
const LinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M10 13a1 1 0 01-1.414.001l-3.001-3a1 1 0 111.414-1.414l3 3.001a1 1 0 010 1.414zm4-4a1 1 0 010-1.414l3.001-3.001a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.415 0zm-7 8a1 1 0 01-1.414 0l-3-3.001a1 1 0 111.414-1.414l3.001 3a1 1 0 010 1.414z M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path></svg>;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative flex flex-col h-full bg-light-card dark:bg-dark-card rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10 opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none z-10"></span>
      <div className="h-48 shrink-0 overflow-hidden relative">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-primary/10 dark:bg-primary-light/20 text-primary dark:text-primary-light text-xs font-semibold rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end space-x-4 mt-auto pt-2">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary-light transition-colors relative z-20">
            <GitHubIcon />
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-dark-text hover:text-accent dark:hover:text-accent-light transition-colors relative z-20">
              <LinkIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;