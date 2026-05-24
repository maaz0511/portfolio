
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.48 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.018-3.714v-2.155z"/></svg>;
const GitHubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const KaggleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.1,10.6L9,15.3l-3.3-4.7H2.8l4.8,6.8L12.5,5l4.8,6.8l4.8-6.8h-2.8L16,10.6l-3.2,4.7L12.1,10.6z"/></svg>;
const DiscordIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.414s-.75-.61-1.833-.565c-1.325.068-2.583.52-3.645 1.054a12.636 12.636 0 00-4.66.023c-1.07-.533-2.34-.98-3.67-1.045-1.08-.045-1.83.565-1.83.565S3.248 8.812 3.002 13.138c.633 1.912 2.112 3.522 4.12 4.312.488.19 1 .345 1.512.465a.75.75 0 00.91-.705v-.345s-.082-.143-.232-.263c-1.125-.87-1.95-2.025-2.3-3.338a.75.75 0 01.623-.855c.2-.045.412-.06.623-.053.824.03 1.63.195 2.4.435.045.015.082.03.127.053.135.06.27.12.405.18.675.308 1.35.533 2.025.683.675.15 1.35.225 2.025.225s1.35-.075 2.025-.225c.675-.15 1.35-.375 2.025-.683a4.99 4.99 0 00.533-.233c.77-.24 1.575-.405 2.4-.435.21-.007.423.008.623.053a.75.75 0 01.623.855c-.345 1.313-1.17 2.468-2.3 3.338-.15.12-.233.263-.233.263v.345a.75.75 0 00.91.705c.513-.12 1.024-.275 1.513-.465 2.008-.79 3.487-2.4 4.12-4.312.246-4.326-1.5-8.724-1.5-8.724zM10.42 14.805c-.9 0-1.633-.78-1.633-1.74s.733-1.74 1.633-1.74c.9 0 1.633.78 1.633 1.74s-.733 1.74-1.633 1.74zm4.993 0c-.9 0-1.633-.78-1.633-1.74s.733-1.74 1.633-1.74c.9 0 1.633.78 1.633 1.74.001 1.05-1 1.74-1.633 1.74z"/></svg>;

const contactLinks = [
  { href: "mailto:mohdmaazwork@gmail.com", icon: EmailIcon, label: "mohdmaazwork@gmail.com" },
  { href: "https://www.linkedin.com/in/maaz0511", icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://github.com/maaz0511", icon: GitHubIcon, label: "GitHub" },
  { href: "https://www.kaggle.com/maaz0511", icon: KaggleIcon, label: "Kaggle" },
  { href: "https://discord.com/users/maaz.0511", icon: DiscordIcon, label: "Discord" },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }
    setError('');
    setIsSending(true);

    try {
      // You provided a public key and template ID.
      // EmailJS also requires a Service ID (usually starts with "service_").
      const publicKey = 'qC7W-8JJmauEvQwGR';
      const templateID = 'template_1hhf7jp';
      const serviceID = 'service_5nxtvic';

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,    // Common variable name
          user_name: formData.name,    // Alternative common variable name
          reply_to: formData.email,
          user_email: formData.email,
          message: formData.message,
        },
        publicKey
      );
      
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      // EmailJS errors typically have a 'text' property with the error description
      const errorMsg = err.text || err.message || 'Unknown error. Check console for details.';
      setError(`Failed to send message: ${errorMsg}`);
    } finally {
      setIsSending(false);
    }
  };


  return (
    <section id="contact" className="py-20 bg-transparent animate-fade-in-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Contact Info */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm actively looking for new opportunities and love to connect with fellow professionals. Whether you have a question, a project proposal, or just want to say hi, feel free to reach out through any of these platforms or by using the contact form.
            </p>
            <div className="space-y-4">
              {contactLinks.map(({ href, icon: Icon, label }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg group text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-card transition-colors duration-300"
                >
                  <Icon />
                  <span className="ml-4 font-medium group-hover:text-primary dark:group-hover:text-primary-light">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:w-1/2">
             <div className="bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send me a Message</h3>
                {isSent ? (
                  <div className="text-center p-4 bg-accent/20 text-accent-dark dark:text-accent-light rounded-lg">
                    <h4 className="font-bold">Thank you!</h4>
                    <p>Your message has been sent successfully.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                      <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
                    </div>
                     <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                      <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
                    </div>
                     <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                      <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button 
                      type="submit" 
                      disabled={isSending}
                      className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary-dark dark:hover:bg-primary-light transform hover:scale-105 transition-all duration-300 disabled:bg-gray-400 disabled:scale-100"
                    >
                      {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;