
import React from 'react';
import { Skill, Project, BlogPost, Certificate, ProjectCategory, BlogPlatform } from './types';

// Tech Stack Brand Logos
const PythonIcon = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-10 h-10 drop-shadow-sm" />;
const PandasIcon = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" className="w-10 h-10 drop-shadow-sm dark:bg-white dark:rounded-full dark:border-2 dark:border-white" />;
const ScikitIcon = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit-learn" className="w-10 h-10 drop-shadow-sm" />;
const DockerIcon = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-10 h-10 drop-shadow-sm" />;
const AWSIcon = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-10 h-10 drop-shadow-sm dark:bg-white dark:p-1 dark:rounded-md" />;
const FastAPIIcon = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="w-10 h-10 drop-shadow-sm" />;
const MLflowIcon = () => <img src="https://cdn.simpleicons.org/mlflow/0194E2" alt="MLflow" className="w-10 h-10 drop-shadow-sm" />;
const StreamlitIcon = () => <img src="https://cdn.simpleicons.org/streamlit/FF4B4B" alt="Streamlit" className="w-10 h-10 drop-shadow-sm" />;
const LangChainIcon = () => <img src="https://cdn.simpleicons.org/langchain/1C3C3C" alt="LangChain" className="w-10 h-10 drop-shadow-sm dark:invert" />; 
const CICDIcon = () => <img src="https://cdn.simpleicons.org/githubactions/2088FF" alt="CI/CD" className="w-10 h-10 drop-shadow-sm" />;

const MLIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#ml-grad)" strokeWidth="1.5" className="w-10 h-10 drop-shadow-sm">
    <defs>
      <linearGradient id="ml-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 15V7l9 5-9 5z" />
  </svg>
);

const NLPIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#nlp-grad)" strokeWidth="1.5" className="w-10 h-10 drop-shadow-sm">
    <defs>
      <linearGradient id="nlp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export const SKILLS: Skill[] = [
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'Machine Learning', icon: <MLIcon /> },
  { name: 'NLP', icon: <NLPIcon /> },
  { name: 'LangChain', icon: <LangChainIcon /> },
  { name: 'Pandas', icon: <PandasIcon /> },
  { name: 'Scikit-learn', icon: <ScikitIcon /> },
  { name: 'MLflow', icon: <MLflowIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
  { name: 'AWS', icon: <AWSIcon /> },
  { name: 'CI/CD', icon: <CICDIcon /> },
  { name: 'Streamlit', icon: <StreamlitIcon /> },
  { name: 'FastAPI', icon: <FastAPIIcon /> },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Vision Tales',
    description: 'An AI-powered web app that transforms uploaded images into narrated stories. Upload up to 10 images, choose a genre and language, and the app generates a unique story using Google Generative AI — complete with an audio voiceover via Google Text-to-Speech.',
    tags: ['Python', 'Streamlit', 'Google Generative AI', 'gTTS'],
    githubUrl: 'https://github.com/maaz0511/vision_tales',
    liveUrl: 'https://vision-tales.streamlit.app/',
    category: ProjectCategory.GEN_AI,
    image: '/projects/vision-tales.png'
  },
  {
    id: '2',
    title: 'Shade Analyzer',
    description: 'Extracts the most prominent colors from any uploaded image using K-Means clustering. Users can customize how many top colors they want to see — useful for designers, artists, or anyone analyzing visual aesthetics.',
    tags: ['Python', 'Scikit-learn', 'Streamlit', 'Matplotlib'],
    githubUrl: 'https://github.com/maaz0511/Shade_Analyzer',
    liveUrl: 'https://shade-analyzer.streamlit.app/',
    category: ProjectCategory.ML,
    image: '/projects/shade-analyzer.png'
  },
  {
    id: '3',
    title: 'Health Sage',
    description: 'Predicts whether a person is at risk of Diabetes, PCOS, or Heart Disease — using real medical data and ML models. Includes educational health resources so users understand their results, not just see them.',
    tags: ['Python', 'Scikit-learn', 'Flask', 'Pandas', 'HTML/CSS'],
    githubUrl: 'https://github.com/maaz0511/Health-Sage',
    category: ProjectCategory.ML,
    image: '/projects/health-sage.png'
  },
  {
    id: '4',
    title: 'YouTube Comment Analyzer',
    description: 'A Chrome extension that extracts and analyzes comments. The frontend handles browser interaction while the backend classifies comment sentiment using LightGBM — with full MLOps practices including DVC, MLflow, and AWS deployment.',
    tags: ['Python', 'Flask', 'LightGBM', 'NLTK', 'Scikit-learn', 'DVC', 'MLflow', 'AWS S3', 'JavaScript'],
    githubUrl: 'https://github.com/maaz0511/yt-chrome-plugin',
    liveUrl: 'https://github.com/maaz0511/yt-chrome-plugin-frontend', // Frontend repo link
    category: ProjectCategory.ML,
    image: '/projects/youtube-analyzer.png'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How MLOps Connects Development with Operations',
    description: 'A look into how MLOps bridges the gap between ML models in development and reliable operations in production.',
    platform: BlogPlatform.LINKEDIN,
    url: 'https://www.linkedin.com/posts/maaz0511_how-mlops-connects-development-with-operations-ugcPost-7258123246737240066-tDsp/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErSlLABzlAVtKs1gMZyaBgGGNKHxlsXsP4',
    image: '/blogs/mlops.png'
  },
  {
    id: '2',
    title: 'Exploring the Shift to Monolithic Architecture',
    description: 'Understanding the reasons behind shifting to a monolithic architecture and its potential benefits for certain scales and systems.',
    platform: BlogPlatform.LINKEDIN,
    url: 'https://www.linkedin.com/posts/maaz0511_exploring-the-shift-to-monolithic-architecture-ugcPost-7262943216507744257-5ZsT/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErSlLABzlAVtKs1gMZyaBgGGNKHxlsXsP4',
    image: '/blogs/monolithic.png'
  },
  {
    id: '3',
    title: 'MLflow Guide',
    description: 'A comprehensive guide on utilizing MLflow for managing the machine learning lifecycle, experiment tracking, and deployment.',
    platform: BlogPlatform.LINKEDIN,
    url: 'https://www.linkedin.com/posts/maaz0511_mlflow-guide-ugcPost-7320543935100010497-xIJY/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErSlLABzlAVtKs1gMZyaBgGGNKHxlsXsP4',
    image: '/blogs/mlflow.png'
  },
  {
    id: '4',
    title: 'The Backbone of Data Science: Unpacking Its Core Pillars',
    description: 'Unpacking the core pillars of Data Science: Mathematics, Computer Science, and Domain Knowledge.',
    platform: BlogPlatform.MEDIUM,
    url: 'https://medium.com/@dsmohdmaaz/the-backbone-of-data-science-unpacking-its-core-pillars-0955e2d56eba',
    image: '/blogs/data-science.png'
  }
];

export const CERTIFICATES: Certificate[] = [
  { 
    id: '1', 
    title: 'Completed 5-Day Gen AI Intensive', 
    issuer: 'Kaggle', 
    url: 'https://drive.google.com/file/d/11BlJ0CF9C_XBSXWDcgIwOL-aCOme8-Li/view?usp=drive_link',
    image: '/certificates/kaggle.png' // Upload your image to public/certificates/ as kaggle.png
  },
  { 
    id: '2', 
    title: 'FastAPI for Machine Learning', 
    issuer: 'CampusX', 
    url: 'https://drive.google.com/file/d/1CeePXR0GCWKrzS3_agjQWiyee995qJNg/view?usp=drive_link',
    image: '/certificates/fastapi.png' // Upload your image to public/certificates/ as fastapi.png
  },
  { 
    id: '3', 
    title: 'Generative AI using Google Gemini', 
    issuer: 'CampusX', 
    url: 'https://drive.google.com/file/d/19aPWCN7e_6-gGEcppOUF4YfsxBRrfxPf/view?usp=drive_link',
    image: '/certificates/gemini.png' // Upload your image to public/certificates/ as gemini.png
  },
  { 
    id: '4', 
    title: 'Kaggle Project Research Internship Program', 
    issuer: 'Integral University', 
    url: 'https://drive.google.com/file/d/1cUkNqijQZ4PQ5aVqju6bXcPwFY7hI-3E/view?usp=drive_link',
    image: '/certificates/research.png' // Upload your image to public/certificates/ as research.png
  },
  { 
    id: '5', 
    title: 'Ultimate Web Scraping for Data Science', 
    issuer: 'Udemy', 
    url: 'https://drive.google.com/file/d/1BaQyfm07Ielohhgkta3PTZpzBdhMLAEA/view?usp=drive_link',
    image: '/certificates/web-scraping.jpg' // Upload your image to public/certificates/ as web-scraping.png
  },
    { 
    id: '6', 
    title: 'Claude AI: From Basics to Build', 
    issuer: 'PWSkills', 
    url: 'https://drive.google.com/file/d/1_aQWmptQ16Oo4hoj6oviepuFLy0d5t6J/view?usp=drive_link',
    image: '/certificates/Claude-Code.png' // Upload your image to public/certificates/ as web-scraping.png
  },
];
