import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Service } from '../types';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();

  const handleServiceClick = () => {
    navigate('/contact', { state: { service: service.title } });
  };

  return (
    <div className="group relative p-6 bg-[#0f172a] border border-white/5 rounded-xl hover:border-brand-purple/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
      <div className="mb-6">
        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg text-white font-bold group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
           {service.title.charAt(0)}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-3">
        {service.title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
        {service.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <span className="text-xs text-slate-500 font-mono">{service.priceRange}</span>
        <button 
          onClick={handleServiceClick}
          className="text-sm font-semibold text-brand-purple flex items-center hover:text-white transition-colors"
        >
          Start <ArrowRight className="ml-1 w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;