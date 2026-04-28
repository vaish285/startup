import React from 'react';
import { teamMembers } from '../config/teamConfig';
import CircularGallery from '../components/CircularGallery';
import { Globe, Heart, Zap, Coffee } from 'lucide-react';

const Team: React.FC = () => {
  // Map team members to the format expected by CircularGallery
  const galleryItems = teamMembers.map(member => ({
    image: member.imageUrl,
    text: member.name 
  }));

  return (
    <div className="relative min-h-screen bg-navam-bg overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-stripe-gradient z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="pt-32 pb-16 relative z-10">
         <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">The Minds Behind The Ecosystem</h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
                Builders, dreamers, and strategists. We are a distributed collective united by a passion for shipping world-class digital products.
            </p>
            <p className="text-xs text-brand-gold mt-8 uppercase tracking-widest font-bold animate-pulse">
                Scroll to Explore the Team
            </p>
         </div>
      </section>

      {/* Gallery Section with Angled Top */}
      <section className="relative py-20 bg-[#0f172a] diagonal-section z-20 overflow-hidden">
         {/* Top Angled Edge handled by CSS class 'diagonal-section' */}
         <div className="max-w-7xl mx-auto px-4 h-[600px]">
             <CircularGallery 
                items={galleryItems}
                bend={2} 
                textColor="#ffffff" 
                borderRadius={0.05} 
                scrollEase={0.04}
                font="bold 40px Playfair Display"
             />
         </div>
      </section>

      {/* Culture / Join Us Section */}
      <section className="py-32 relative z-10 max-w-[1200px] mx-auto px-6">
         <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Culture</h2>
            <p className="text-slate-400">How we work is just as important as what we build.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="stripe-card p-8 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                    <Globe />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Remote First</h3>
                <p className="text-sm text-slate-400">
                    We hire the best talent regardless of geography. Asynchronous by default.
                </p>
            </div>
            <div className="stripe-card p-8 group">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform">
                    <Zap />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Bias for Action</h3>
                <p className="text-sm text-slate-400">
                    We prefer shipping over meeting. Perfect is the enemy of done.
                </p>
            </div>
            <div className="stripe-card p-8 group">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
                    <Heart />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Radical Candor</h3>
                <p className="text-sm text-slate-400">
                    We care personally and challenge directly. Feedback is a gift.
                </p>
            </div>
            <div className="stripe-card p-8 group">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                    <Coffee />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Continuous Learning</h3>
                <p className="text-sm text-slate-400">
                    Stipends for courses and books. We grow as the technology grows.
                </p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Team;