import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled || isOpen 
      ? 'bg-[#020420]/80 backdrop-blur-lg border-b border-white/5 py-2' 
      : 'bg-transparent py-4'
  }`;

  const linkClasses = (path: string) => `text-sm font-semibold transition-colors duration-200 ${
    location.pathname === path ? 'text-white' : 'text-slate-400 hover:text-white'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
              <div className="w-6 h-6 bg-brand-gold/20 rounded-md flex items-center justify-center border border-brand-gold/50">
                <span className="text-brand-gold text-xs">S</span>
              </div>
              ARTHANTA
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClasses('/')}>Home</Link>
            <Link to="/services" className={linkClasses('/services')}>Services</Link>
            {/* <Link to="/team" className={linkClasses('/team')}>Team</Link> */}
            <Link to="/about" className={linkClasses('/about')}>About</Link>
          </div>

          <div className="hidden md:block">
             <Link to="/contact">
               <Button variant="outline" className="py-2 px-4 text-xs h-auto">Contact Sales</Button>
             </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <Menu size={24} /> : <X size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#020420] absolute w-full border-b border-white/10 shadow-2xl">
          <div className="px-6 pt-4 pb-8 space-y-4 flex flex-col">
            <Link to="/" className="text-white font-medium text-lg">Home</Link>
            <Link to="/services" className="text-slate-400 hover:text-white font-medium text-lg">Services</Link>
            <Link to="/team" className="text-slate-400 hover:text-white font-medium text-lg">Team</Link>
            <Link to="/about" className="text-slate-400 hover:text-white font-medium text-lg">About</Link>
            <div className="pt-4">
                <Link to="/contact" className="block w-full text-center py-3 rounded-full bg-brand-gold text-black font-bold">
                Start Project
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;