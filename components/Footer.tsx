import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-2xl font-bold tracking-wider text-white">ARTHANTA</span>
            <p className="mt-4 text-gray-400 max-w-sm text-sm leading-relaxed">
              Empowering startups with approachable intelligence. We build the digital foundation your visionary idea needs to thrive in a competitive market.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors text-sm">Team</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Connect</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Start a Project</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Twitter</a></li>
              <li><a href="mailto:hello@startupecosystem.com" className="text-gray-400 hover:text-white transition-colors text-sm">hello@startupecosystem.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} ARTHANTA. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span className="text-gray-600 text-xs">Designed for Visionaries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;