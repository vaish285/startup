import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { submitLead } from '../utils/apiClient';
import { services } from '../config/servicesConfig';
import { CheckCircle, AlertCircle, ArrowRight, ChevronDown, Check } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Main Services List
const mainServiceOptions = [
    { value: "", label: "Select a Service..." },
    ...services.map(s => ({ value: s.title, label: s.title })),
    { value: "Startup Idea Submission", label: "I have a Startup Idea (Student/Founder)", highlight: true },
    { value: "General Inquiry", label: "General Inquiry" }
];

// Sub-services for Social Media
const socialSubOptions = [
    { value: "Community Growth", label: "Community Growth" },
    { value: "Ad Campaigns", label: "Ad Campaigns" },
    { value: "Content Creation", label: "Content Creation" },
    { value: "Analytics Reporting", label: "Analytics Reporting" },
    { value: "Influencer Outreach", label: "Influencer Outreach" },
    { value: "Video Shorts", label: "Video Shorts" },
];

const ContactForm: React.FC = () => {
  const location = useLocation();
  const initialState = location.state as { service?: string; type?: string } | null;

  // Initialize form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_interest: '',
    message: '',
    is_student_founder: false,
  });

  // Separate state for sub-service selection
  const [socialInterest, setSocialInterest] = useState('');

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Custom Select State
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  
  const mainDropdownRef = useRef<HTMLDivElement>(null);
  const subDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialState?.service) {
      // Check if the passed service is a specific social sub-service
      const isSubService = socialSubOptions.some(opt => `Social Media: ${opt.value}` === initialState.service);
      
      if (isSubService) {
          setFormData(prev => ({ ...prev, service_interest: 'Social Media Management' }));
          setSocialInterest(initialState.service!.replace('Social Media: ', ''));
      } else {
          setFormData(prev => ({ ...prev, service_interest: initialState.service! }));
      }
    }
    
    if (initialState?.type === 'student') {
        setFormData(prev => ({ ...prev, is_student_founder: true, service_interest: 'Startup Idea Submission' }));
    }
  }, [initialState]);

  // Close dropdowns when clicking outside
  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
          if (mainDropdownRef.current && !mainDropdownRef.current.contains(event.target as Node)) {
              setIsMainDropdownOpen(false);
          }
          if (subDropdownRef.current && !subDropdownRef.current.contains(event.target as Node)) {
              setIsSubDropdownOpen(false);
          }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMainSelectChange = (value: string) => {
      setFormData(prev => ({ 
          ...prev, 
          service_interest: value,
          is_student_founder: value === 'Startup Idea Submission'
      }));
      // Reset sub selection if main service changes
      if (value !== 'Social Media Management') {
          setSocialInterest('');
      }
      setIsMainDropdownOpen(false);
  };

  const handleSubSelectChange = (value: string) => {
      setSocialInterest(value);
      setIsSubDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (!formData.service_interest) {
        setStatus('error');
        setErrorMessage("Please select a service interest.");
        return;
    }

    if (formData.service_interest === 'Social Media Management' && !socialInterest) {
        setStatus('error');
        setErrorMessage("Please select a specific social media service.");
        return;
    }

    try {
      // Construct final service string
      const finalServiceInterest = formData.service_interest === 'Social Media Management' && socialInterest
        ? `${formData.service_interest} - ${socialInterest}`
        : formData.service_interest;

      const payload = { ...formData, service_interest: finalServiceInterest };

      const response = await submitLead(payload);
      
      if (response.success) {
        setStatus('success');
        // Clear form data
        setFormData({ name: '', email: '', phone: '', service_interest: '', message: '', is_student_founder: false });
        setSocialInterest('');
      } else {
        setStatus('error');
        setErrorMessage(response.message);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-16 px-6 bg-[#0f172a]/80 border border-green-500/20 backdrop-blur-md rounded-xl max-w-2xl mx-auto shadow-2xl">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
           <CheckCircle className="text-green-500 w-10 h-10" />
        </div>
        <h3 className="text-3xl font-serif text-white mb-4">Request Received</h3>
        <p className="text-gray-300 max-w-md mx-auto leading-relaxed">
          Thank you for contacting <span className="text-brand-gold font-bold">ARTHANTA</span>. We have received your project details and will be in touch within 24 hours.
        </p>
        <button 
            onClick={() => setStatus('idle')}
            className="mt-8 group px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 mx-auto"
        >
            Send Another Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    );
  }

  const selectedMainLabel = mainServiceOptions.find(opt => opt.value === formData.service_interest)?.label || "Select a Service...";
  const selectedSubLabel = socialSubOptions.find(opt => opt.value === socialInterest)?.label || "Select specific service...";

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8 bg-black/40 p-8 md:p-12 border border-white/10 backdrop-blur-md rounded-xl shadow-2xl relative overflow-visible">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      {status === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400">
           <AlertCircle size={20} />
           <span className="text-sm">{errorMessage || 'Something went wrong. Please try again.'}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-700 text-white py-2 focus:border-brand-purple focus:outline-none transition-colors placeholder-gray-700"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-700 text-white py-2 focus:border-brand-purple focus:outline-none transition-colors placeholder-gray-700"
            placeholder="john@startup.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
         <div className="space-y-2">
            <label htmlFor="phone" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Phone Number</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 text-white py-2 focus:border-brand-purple focus:outline-none transition-colors placeholder-gray-700"
                placeholder="+1 (555) 000-0000"
            />
         </div>
         
         {/* Main Service Dropdown */}
         <div className="space-y-2 relative" ref={mainDropdownRef}>
            <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Interested In</label>
            <div 
                className="w-full bg-transparent border-b border-gray-700 text-white py-2 cursor-pointer flex justify-between items-center group hover:border-brand-purple transition-colors"
                onClick={() => setIsMainDropdownOpen(!isMainDropdownOpen)}
            >
                <span className={formData.service_interest ? "text-white" : "text-gray-500"}>
                    {selectedMainLabel}
                </span>
                <ChevronDown size={16} className={`text-gray-500 transition-transform duration-300 ${isMainDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            <AnimatePresence>
                {isMainDropdownOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full w-full mt-2 bg-[#0f172a] border border-white/10 rounded-xl shadow-2xl max-h-60 overflow-y-auto z-50 overflow-x-hidden custom-scrollbar"
                    >
                        {mainServiceOptions.filter(opt => opt.value !== "").map((option) => (
                            <div 
                                key={option.value}
                                onClick={() => handleMainSelectChange(option.value)}
                                className={`px-4 py-3 text-sm cursor-pointer transition-colors flex justify-between items-center
                                    ${option.highlight ? 'bg-brand-gold/10 text-brand-gold font-bold hover:bg-brand-gold/20' : 'text-gray-300 hover:bg-white/5 hover:text-white'}
                                    ${formData.service_interest === option.value ? 'bg-white/5 text-brand-purple' : ''}
                                `}
                            >
                                <span>{option.label}</span>
                                {formData.service_interest === option.value && <Check size={14} className="text-brand-purple"/>}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
         </div>
      </div>

      {/* Conditional Sub-Service Dropdown for Social Media */}
      <AnimatePresence>
        {formData.service_interest === 'Social Media Management' && (
             <motion.div 
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="relative z-10 overflow-visible"
             >
                 <div className="space-y-2 relative" ref={subDropdownRef}>
                    <label className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Specific Social Service</label>
                    <div 
                        className="w-full bg-transparent border-b border-brand-gold/50 text-white py-2 cursor-pointer flex justify-between items-center group hover:border-brand-gold transition-colors"
                        onClick={() => setIsSubDropdownOpen(!isSubDropdownOpen)}
                    >
                        <span className={socialInterest ? "text-white" : "text-gray-500"}>
                            {selectedSubLabel}
                        </span>
                        <ChevronDown size={16} className={`text-brand-gold transition-transform duration-300 ${isSubDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    <AnimatePresence>
                        {isSubDropdownOpen && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-0 top-full w-full mt-2 bg-[#0f172a] border border-brand-gold/20 rounded-xl shadow-2xl max-h-60 overflow-y-auto z-50 overflow-x-hidden custom-scrollbar"
                            >
                                {socialSubOptions.map((option) => (
                                    <div 
                                        key={option.value}
                                        onClick={() => handleSubSelectChange(option.value)}
                                        className={`px-4 py-3 text-sm cursor-pointer transition-colors flex justify-between items-center text-gray-300 hover:bg-white/5 hover:text-white
                                            ${socialInterest === option.value ? 'bg-white/5 text-brand-gold' : ''}
                                        `}
                                    >
                                        <span>{option.label}</span>
                                        {socialInterest === option.value && <Check size={14} className="text-brand-gold"/>}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                 </div>
             </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-2 relative z-10">
        <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
            {formData.service_interest === 'Startup Idea Submission' ? 'Tell us about your idea' : 'Project Details'}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-700 text-white py-2 focus:border-brand-purple focus:outline-none transition-colors resize-none placeholder-gray-700"
          placeholder={formData.service_interest === 'Startup Idea Submission' ? "Briefly describe your problem statement and solution..." : "Tell us about your project goals and timeline..."}
        />
      </div>

      <div className="pt-4 relative z-10">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full md:w-auto px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-white/20 flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? (
            <>
              <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            'Send Request'
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;