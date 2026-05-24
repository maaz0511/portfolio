
import React from 'react';
import { Certificate } from '../types';

interface CertificatesProps {
    certificates: Certificate[];
}

const CertificateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  return (
    <section id="certificates" className="py-20 bg-transparent animate-fade-in-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Certificates & Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
                <div key={cert.id} className="bg-light-card dark:bg-dark-card rounded-lg shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                    <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                        {cert.image ? (
                            <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        ) : (
                            <CertificateIcon />
                        )}
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{cert.issuer}</p>
                        
                        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                             {cert.url && cert.url !== '#' ? (
                                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light hover:underline text-sm font-semibold flex items-center">
                                    View Credential
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </a>
                             ) : (
                                <span className="text-gray-400 text-sm italic">Credential not linked</span>
                             )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
