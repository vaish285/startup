import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, Megaphone, PenTool, BarChart2, Radio, Video, ArrowRight, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/Button';

// --- Configuration Data ---

const subServices = [
  {
    id: 'community-growth',
    title: 'Community Growth',
    description: 'We build tribes, not just followers. We engage with your audience authentically to foster loyalty and brand advocacy.',
    icon: Users,
  },
  {
    id: 'ad-campaigns',
    title: 'Ad Campaigns',
    description: 'Precision-targeted paid media strategies across Meta, LinkedIn, and TikTok designed to lower CAC and maximize ROI.',
    icon: Megaphone,
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Stop the scroll. Our design team crafts high-fidelity visuals and compelling copy that aligns perfectly with your brand identity.',
    icon: PenTool,
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics Reporting',
    description: 'No vanity metrics. We provide comprehensive data reports that tie social performance directly to your business KPIs.',
    icon: BarChart2,
  },
  {
    id: 'influencer-outreach',
    title: 'Influencer Outreach',
    description: 'We connect your startup with authentic voices in your niche to amplify credibility and reach new demographics.',
    icon: Radio,
  },
  {
    id: 'video-shorts',
    title: 'Video Shorts',
    description: 'Viral-ready short-form video production (Reels, TikTok, YouTube Shorts) optimized for the current algorithm.',
    icon: Video,
  },
];

// --- Visual Components for Right Panel ---

const CommunityVisual = () => (
  <div className="w-full h-full flex items-center justify-center relative p-6">
    <div className="relative w-full max-w-xs aspect-square">
        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center shadow-lg z-10">
            <Users className="text-black" />
        </div>
        {/* Orbiting Nodes */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="absolute top-1/2 left-1/2 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center"
                style={{
                    transform: `translate(-50%, -50%) rotate(${deg}deg) translate(100px) rotate(-${deg}deg)`
                }}
            >
                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
            </motion.div>
        ))}
        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 animate-spin-slow">
            <circle cx="50%" cy="50%" r="100" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        </svg>
    </div>
  </div>
);

const AdVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-6">
        <div className="w-full max-w-sm bg-[#1e293b] rounded-xl border border-white/10 p-4 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
                <div className="text-xs font-bold text-gray-400">CAMPAIGN PERFORMANCE</div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-end gap-2 h-32 mb-4">
                {[30, 45, 35, 60, 50, 75, 90].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-brand-purple/20 to-brand-purple rounded-t-sm"
                    />
                ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-black/20 p-2 rounded">
                    <div className="text-[10px] text-gray-500">ROAS</div>
                    <div className="text-lg font-bold text-white">4.2x</div>
                </div>
                <div className="bg-black/20 p-2 rounded">
                    <div className="text-[10px] text-gray-500">CPC</div>
                    <div className="text-lg font-bold text-white">$0.45</div>
                </div>
            </div>
            {/* Cursor Overlay */}
            <motion.div 
                animate={{ x: [0, 100, 50], y: [0, 50, 20] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-black z-20"
            />
        </div>
    </div>
);

const ContentVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-6 relative">
        <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute w-40 h-56 bg-white rotate-6 rounded-lg shadow-xl z-10 border border-gray-200 p-2"
        >
            <div className="w-full h-2/3 bg-gray-100 rounded mb-2 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&q=80" alt="" className="w-full h-full object-cover grayscale opacity-50"/>
            </div>
            <div className="space-y-1">
                <div className="w-full h-2 bg-gray-200 rounded"></div>
                <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
            </div>
        </motion.div>
        <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute w-40 h-56 bg-[#0f172a] -rotate-6 rounded-lg shadow-2xl border border-white/20 p-4 z-20 flex flex-col justify-between"
        >
             <div className="text-brand-gold font-serif text-2xl">Create.</div>
             <div className="text-xs text-gray-400">High fidelity assets for high growth brands.</div>
        </motion.div>
    </div>
);

const AnalyticsVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
        <div className="w-64 h-64 relative">
             <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg]">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1e293b" strokeWidth="10" />
                <motion.circle 
                    cx="50" cy="50" r="40" 
                    fill="transparent" 
                    stroke="#635bff" 
                    strokeWidth="10" 
                    strokeDasharray="251.2"
                    strokeDashoffset="251.2"
                    animate={{ strokeDashoffset: 60 }} // 75% filled
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeLinecap="round"
                />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="text-3xl font-bold text-white">76%</span>
                 <span className="text-xs text-gray-500 uppercase">Growth</span>
             </div>
        </div>
    </div>
);

const InfluencerVisual = () => (
    <div className="w-full h-full flex items-center justify-center p-4">
        <div className="grid grid-cols-2 gap-4">
             <div className="flex items-center gap-2 bg-white/5 p-2 rounded-full border border-white/10 pr-4">
                 <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                 <div className="text-xs text-white">@tech_guru</div>
             </div>
             <div className="flex items-center gap-2 bg-white/5 p-2 rounded-full border border-white/10 pr-4 translate-x-4">
                 <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                 <div className="text-xs text-white">@startup_daily</div>
             </div>
             <div className="flex items-center gap-2 bg-white/5 p-2 rounded-full border border-white/10 pr-4 -translate-x-2">
                 <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                 <div className="text-xs text-white">@finance_wiz</div>
             </div>
             <div className="flex items-center gap-2 bg-white/5 p-2 rounded-full border border-white/10 pr-4">
                 <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                 <div className="text-xs text-white">@design_pro</div>
             </div>
        </div>
    </div>
);

const VideoVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
        <div className="w-[180px] h-[320px] bg-black border-4 border-gray-800 rounded-[2rem] relative overflow-hidden shadow-2xl">
             <video 
                className="w-full h-full object-cover opacity-60"
                autoPlay 
                muted 
                loop 
                playsInline
             >
                 {/* Placeholder for video, using a color block/gradient for now if no src */}
                 <source src="" /> 
             </video>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
             
             {/* UI Elements */}
             <div className="absolute bottom-16 right-2 flex flex-col gap-4 items-center">
                 <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><div className="w-4 h-4 bg-white rounded"></div></div>
                 <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                 <div className="w-8 h-8 bg-white/20 rounded-full"></div>
             </div>
             <div className="absolute bottom-6 left-4 right-12">
                 <div className="w-24 h-3 bg-white/50 rounded mb-2"></div>
                 <div className="w-full h-2 bg-white/30 rounded"></div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                 <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
             </div>
        </div>
    </div>
);


const SocialMediaService = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(subServices[0].id);

  const activeService = subServices.find(s => s.id === activeId) || subServices[0];

  const handleStartProject = (serviceName: string) => {
     navigate('/contact', { state: { service: `Social Media: ${serviceName}` } });
  };

  const renderVisual = (id: string) => {
      switch (id) {
          case 'community-growth': return <CommunityVisual />;
          case 'ad-campaigns': return <AdVisual />;
          case 'content-creation': return <ContentVisual />;
          case 'analytics-reporting': return <AnalyticsVisual />;
          case 'influencer-outreach': return <InfluencerVisual />;
          case 'video-shorts': return <VideoVisual />;
          default: return <CommunityVisual />;
      }
  };

  return (
    <div className="bg-navam-bg min-h-screen">
       
       {/* Hero Section */}
       <section className="relative pt-32 pb-20 px-6">
           <div className="max-w-[1200px] mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                        Brand Amplification
                    </span>
                    <h1 className="text-4xl md:text-7xl font-serif text-white mb-6">
                        Social Media <br/> Management
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                        In the digital age, attention is currency. We help you earn it, keep it, and convert it. 
                        A full-stack approach to modern social growth.
                    </p>
                </motion.div>
           </div>
           {/* Background Glow */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px] -z-10"></div>
       </section>

       {/* Interactive Layout */}
       <div id="explorer" className="relative z-20">
           {/* Slanted Divider */}
           <div className="absolute top-0 left-0 right-0 h-24 bg-navam-bg -translate-y-12 transform -skew-y-2 origin-top-right z-10"></div>
           
           <section className="bg-navam-surface pt-16 pb-32 relative diagonal-section">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        
                        {/* LEFT COLUMN: List */}
                        <div className="lg:col-span-5 space-y-4">
                            {subServices.map((service) => (
                                <div 
                                    key={service.id}
                                    onClick={() => setActiveId(service.id)}
                                    className={`cursor-pointer p-6 rounded-xl transition-all duration-300 border group ${
                                        activeId === service.id 
                                        ? 'bg-white/5 border-brand-purple/50 shadow-lg' 
                                        : 'bg-transparent border-transparent hover:bg-white/5'
                                    }`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-3">
                                            <service.icon className={`w-5 h-5 ${activeId === service.id ? 'text-brand-purple' : 'text-gray-500 group-hover:text-white'}`} />
                                            <h3 className={`text-lg font-bold transition-colors ${activeId === service.id ? 'text-brand-purple' : 'text-white'}`}>
                                                {service.title}
                                            </h3>
                                        </div>
                                        {/* Mobile Chevron */}
                                        <ChevronDown className={`lg:hidden transition-transform duration-300 ${activeId === service.id ? 'rotate-180 text-brand-purple' : 'text-gray-600'}`} size={16} />
                                    </div>
                                    
                                    <p className={`text-sm text-slate-400 leading-relaxed transition-all duration-300 ${activeId === service.id ? 'opacity-100 max-h-20' : 'opacity-60 line-clamp-2 lg:line-clamp-none'}`}>
                                        {service.description}
                                    </p>

                                    {/* Mobile/Tablet Accordion Visual */}
                                    <AnimatePresence>
                                        {activeId === service.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="lg:hidden mt-6 overflow-hidden"
                                            >
                                                <div className="h-[250px] w-full bg-[#020420] rounded-xl border border-white/10 relative overflow-hidden mb-4">
                                                    {renderVisual(service.id)}
                                                </div>
                                                <Button onClick={(e) => { e.stopPropagation(); handleStartProject(service.title); }} className="w-full text-sm">
                                                    Start Campaign
                                                </Button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT COLUMN: Sticky Visual (Desktop) */}
                        <div className="hidden lg:block lg:col-span-7 relative">
                            <div className="sticky top-32 h-[500px] w-full bg-[#020420] rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-8 flex flex-col">
                                
                                <div className="flex justify-between items-start mb-8 z-20 relative">
                                    <div>
                                        <h3 className="text-3xl font-serif text-white mb-2">{activeService.title}</h3>
                                        <p className="text-slate-400 text-sm max-w-md">{activeService.description}</p>
                                    </div>
                                    <Button onClick={() => handleStartProject(activeService.title)} hasArrow>
                                        Start Now
                                    </Button>
                                </div>

                                {/* Visual Container */}
                                <div className="flex-grow bg-grid rounded-xl border border-white/5 relative overflow-hidden">
                                     <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeId}
                                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 1.05, y: -20 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className="w-full h-full"
                                        >
                                            {renderVisual(activeId)}
                                        </motion.div>
                                     </AnimatePresence>
                                </div>

                                {/* Decorative Background Elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

                            </div>
                        </div>

                    </div>
                </div>
           </section>
       </div>

       {/* CTA Section */}
       <div className="text-center py-20 border-t border-white/10 bg-navam-bg">
            <h2 className="text-3xl font-serif text-white mb-6">Ready to go viral?</h2>
            <Button variant="outline" onClick={() => navigate('/contact', { state: { service: 'Social Media Strategy' } })}>
                Let's Talk Strategy <ArrowRight className="ml-2 w-4 h-4 inline" />
            </Button>
       </div>
    </div>
  );
};

export default SocialMediaService;