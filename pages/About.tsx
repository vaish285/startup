import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Target, Lightbulb, Users, BarChart } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-navam-bg min-h-screen relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="pt-32 pb-32 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           {/* Text Content */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
           >
              <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-brand-purple uppercase bg-brand-purple/10 rounded-full border border-brand-purple/20">
                  Our Mission
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                Where Vision Meets <br/> <span className="text-brand-gold">Execution.</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
                ARTHANTA is a unified platform built to simplify the journey of turning ideas into successful businesses. We bring together technology, innovation, marketing, and investment under one ecosystem so that startups and individuals don’t have to depend on multiple disconnected services.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                We are a hybrid entity — one part digital product studio, one part investment firm. We understand the frantic energy of a pre-seed round, the necessity of a pixel-perfect MVP, and the noise of the market.
              </p>
              <Button onClick={() => navigate('/contact')} hasArrow>
                 Work With Us
              </Button>
           </motion.div>

           {/* Visual Right */}
          
        </div>
      </section>

      {/* Values Section - Angled */}
      <section className="py-24 bg-[#0f172a] relative diagonal-section">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">The principles that guide every line of code we write and every strategy we design.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Value 1 */}
              <div className="stripe-card p-10 flex gap-6 items-start hover:bg-white/5 transition-colors">
                 <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                    <Target className="text-brand-purple" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-3">Precision</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        In a world of noise, clarity is power. We design with intent. Every pixel, every line of code serves a specific purpose to drive growth.
                    </p>
                 </div>
              </div>

              {/* Value 2 */}
              <div className="stripe-card p-10 flex gap-6 items-start hover:bg-white/5 transition-colors">
                 <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                    <Users className="text-blue-400" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-3">Empathy</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        We build for humans. Whether it's the UI your customer touches or the support we give you as a founder, human connection is at the core.
                    </p>
                 </div>
              </div>

              {/* Value 3 */}
              <div className="stripe-card p-10 flex gap-6 items-start hover:bg-white/5 transition-colors">
                 <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                    <Lightbulb className="text-brand-gold" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        We don't follow trends; we study them to create timeless digital assets. We leverage the latest in AI and frameworks to keep you ahead.
                    </p>
                 </div>
              </div>

              {/* Value 4 */}
              <div className="stripe-card p-10 flex gap-6 items-start hover:bg-white/5 transition-colors">
                 <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                    <BarChart className="text-green-400" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-3">Transparency</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        No hidden fees. No tech jargon used to confuse. Just honest partnership and clear roadmaps from day one.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Timeline / CTA */}
      <section className="py-32 bg-navam-bg relative">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif text-white mb-8">Join the movement.</h2>
            <p className="text-slate-400 mb-10 text-lg">
                Whether you are a solo founder with a deck or a Series A company looking to rebrand, we are ready.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button onClick={() => navigate('/contact')} className="px-8 py-4">Start Project</Button>
               <Button variant="outline" onClick={() => navigate('/team')} className="px-8 py-4">Meet the Team</Button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default About;