import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Briefcase, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Investor Data
const investors = [
  {
    name: "Vijay Patil Groups",
    role: "Investment Group",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300",
    description: "Industry-focused investment group supporting early-stage startups in technology and services sectors.",
    tags: ["Tech", "Services", "Seed"],
    phone: "919999999999"
  },
  {
    name: "Pavan Kumar",
    role: "Investing Partner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    description: "Strategic investing partner focused on scalable digital solutions and high-growth SaaS platforms.",
    tags: ["SaaS", "Growth", "Angel"],
    phone: "918888888888"
  }
];

const InvestorConnect = () => {

  const contactInvestor = (phone: string, name: string) => {
    const message = encodeURIComponent(
      `Hello ${name}, I am interested in discussing investment opportunities via ARTHANTA.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="bg-navam-bg min-h-screen relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-gold text-xs font-semibold mb-6 uppercase tracking-wider">
               <TrendingUp size={12} /> Venture Capital
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                Our Investors
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                Our growth is powered by strong partnerships and visionary investors who believe in innovation, technology, and scalable digital solutions.
            </p>
        </motion.div>
      </section>

      {/* Investor Grid */}
      <section className="pb-32 px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {investors.map((investor, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative bg-[#0f172a] border border-white/10 rounded-2xl p-8 hover:border-brand-purple/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full p-1 border-2 border-brand-purple/30 mb-6 relative">
                                <img 
                                    src={investor.image} 
                                    alt={investor.name} 
                                    className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute bottom-0 right-0 bg-brand-gold text-black rounded-full p-1.5 border-2 border-[#0f172a]">
                                    <Briefcase size={14} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-serif text-white mb-1">{investor.name}</h3>
                            <span className="text-brand-purple text-sm font-semibold uppercase tracking-wider mb-4">{investor.role}</span>
                            
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {investor.description}
                            </p>

                            <div className="flex gap-2 mb-8">
                                {investor.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-white/5 rounded text-[10px] text-gray-400 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Button 
                                onClick={() => contactInvestor(investor.phone, investor.name)}
                                className="w-full bg-gradient-to-r from-brand-purple to-indigo-600 border-none"
                            >
                                <MessageCircle size={16} className="mr-2" /> Connect via WhatsApp
                            </Button>
                        </div>
                    </motion.div>
                ))}
             </div>
          </div>
      </section>

    </div>
  );
};

export default InvestorConnect;