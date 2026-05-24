
import React from 'react';
import { BlogPlatform, BlogPost } from '../types';

interface BlogProps {
    posts: BlogPost[];
}

const MediumIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7 6h10v1H7zM7 11h10v1H7zM7 16h7v1H7z"></path><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"></circle></svg>;
const LinkedInIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-7 5H9v7h3v-7zm-4 0H5v7h3v-7zm10 0h-3v3.4c0 1.2.6 1.6 1 1.6s1-.4 1-1.6V8z"></path></svg>;
const PlaceholderIcon = () => <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>;

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <section id="blog" className="py-20 bg-transparent animate-fade-in-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Blog & Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a 
              key={post.id}
              href={post.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block bg-light-card dark:bg-dark-card rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 group overflow-hidden flex flex-col h-full"
            >
              <div className="h-48 w-full bg-gray-200 dark:bg-gray-800 overflow-hidden flex items-center justify-center">
                   {post.image ? (
                       <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   ) : (
                       <PlaceholderIcon />
                   )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3 text-sm font-medium">
                    <span className={`flex items-center gap-1 ${post.platform === BlogPlatform.MEDIUM ? 'text-gray-800 dark:text-gray-200' : 'text-blue-600 dark:text-blue-400'}`}>
                      {post.platform === BlogPlatform.MEDIUM ? <MediumIcon /> : <LinkedInIcon />}
                      {post.platform}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-grow">{post.description}</p>
                  <span className="text-primary dark:text-primary-light font-medium text-sm mt-auto inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Read Article 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
