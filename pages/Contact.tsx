import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 relative z-10 min-h-screen bg-navam-bg">
      <div className="absolute inset-0 bg-stripe-gradient z-0 pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Let's Build Something Great</h1>
          <p className="text-gray-400">Tell us about your project, and we will help you bring it to life.</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;