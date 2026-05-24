
import React from 'react';
import type { Skill } from '../types';

const SkillIcon: React.FC<Skill> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-light-card dark:bg-dark-card rounded-lg shadow-md hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-primary/20 hover:-translate-y-1 hover:scale-105 transition-all duration-300 group">
      <div className="text-primary dark:text-primary-light mb-2 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <p className="font-semibold text-light-text dark:text-dark-text text-center">{name}</p>
    </div>
  );
};

export default SkillIcon;