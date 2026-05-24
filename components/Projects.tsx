
import React from 'react';
import { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.ALL);

  const categories = Object.values(ProjectCategory);

  const filteredProjects = activeCategory === ProjectCategory.ALL
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-transparent animate-fade-in-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>
        
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-light-card dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
