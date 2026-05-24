
import React from 'react';

export interface Skill {
  name: string;
  // Fix: Changed from JSX.Element to React.ReactNode to resolve namespace error in .ts file.
  icon: React.ReactNode;
}

export enum ProjectCategory {
  ALL = 'All',
  GEN_AI = 'GenAI Projects',
  ML = 'ML Projects',
  DL = 'DL Projects',
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  category: ProjectCategory;
  image: string;
}

export enum BlogPlatform {
  MEDIUM = 'Medium',
  LINKEDIN = 'LinkedIn',
}

export interface BlogPost {
  id: string;
  title:string;
  description: string;
  platform: BlogPlatform;
  url: string;
  image?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  url: string;
  image?: string;
}
