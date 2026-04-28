import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Cpu, Zap, Code, Layout, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import SplitText from '../components/SplitText';
import TextType from '../components/TextType';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-hidden bg-navam-bg">
      
      {/* 
        HERO SECTION 
        Stripe Style: Two column, text left, visual right, angled background 
      */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Gradient Background (Stripe-ish) */}
        <div className="absolute inset-0 bg-stripe-gradient z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-purple/20 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
        </div>

        {/* Diagonal Cut Effect at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-navam-bg transform origin-bottom-right -skew-y-3 translate-y-12 z-10"></div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Column: Text */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              Now accepting new ventures
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Idea-To-Impact <br/>
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-accent">
                Turning Ambition into Execution
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              ARTHANTA builds the digital foundation for tomorrow's unicorns. From high-scale web platforms to brand identity and funding strategy.
            </p>
            
            <div className="flex flex-row gap-4">
              <Button onClick={() => navigate('/contact')} hasArrow={true}>
                Start now
              </Button>
              <Button variant="outline" onClick={() => navigate('/services')}>
                View platform
              </Button>
            </div>
          </div>

          {/* Right Column: Visual / Graphic */}
          <div className="relative hidden lg:block h-[500px]">
             {/* Simulated Dashboard / App Interface visual */}
             <motion.div 
               initial={{ opacity: 0, rotateX: 20, rotateY: -20, y: 100 }}
               animate={{ opacity: 1, rotateX: 10, rotateY: -10, y: 0 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="absolute top-10 right-0 w-[450px] h-[300px] bg-[#1e293b]/80 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl p-6 transform perspective-1000 rotate-y-12 rotate-x-6 z-20"
             >
                <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-brand-purple/20 flex items-center justify-center">
                        <Code className="text-brand-purple" size={24} />
                    </div>
                    <div>
                        <div className="h-3 w-24 bg-white/10 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-white/5 rounded"></div>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="h-2 w-full bg-white/5 rounded"></div>
                    <div className="h-2 w-5/6 bg-white/5 rounded"></div>
                    <div className="h-2 w-4/6 bg-white/5 rounded"></div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                     <div className="bg-black/40 rounded p-3 border border-white/5">
                        <div className="text-xs text-gray-500">Revenue</div>
                        <div className="text-lg font-bold text-white">$2.4M</div>
                     </div>
                     <div className="bg-black/40 rounded p-3 border border-white/5">
                        <div className="text-xs text-gray-500">Growth</div>
                        <div className="text-lg font-bold text-green-400">+124%</div>
                     </div>
                </div>
             </motion.div>

             {/* Back card */}
             <motion.div 
                initial={{ opacity: 0, x: 50, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute top-32 right-32 w-[400px] h-[300px] bg-[#0f172a] border border-white/10 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10"
             >
             </motion.div>
          </div>
        </div>
      </section>

      {/* 
        ECOSYSTEM / BENTO GRID 
        Stripe Style: Clean cards, icons, specific layout
      */}
      <section className="py-24 relative z-10 bg-navam-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-brand-purple font-semibold mb-4 uppercase tracking-wider text-sm">Unified Platform</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              A fully integrated suite of <br/> growth products.
            </h3>
            <p className="text-slate-400 text-lg">
              We reduce the friction of scaling. Whether you need a product built, a brand designed, or capital to grow, we handle the complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Large */}
            <div className="col-span-1 md:col-span-2 stripe-card p-8 min-h-[300px] flex flex-col justify-between group overflow-hidden relative">
               <div className="relative z-10">
                 <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                    <Globe className="text-blue-400" />
                 </div>
                 <h4 className="text-xl font-bold text-white mb-2">Global Development</h4>
                 <p className="text-slate-400 max-w-sm">Websites and apps that perform anywhere. React, Node, and Python infrastructure designed for scale.</p>
               </div>
               <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Card 2: Tall */}
            <div className="col-span-1 stripe-card p-8 bg-gradient-to-br from-brand-purple/10 to-transparent">
               <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center mb-6">
                  <Zap className="text-brand-purple" />
               </div>
               <h4 className="text-xl font-bold text-white mb-2">Fast Launch</h4>
               <p className="text-slate-400 mb-4">From idea to MVP in weeks, not months. We ship code that works.</p>
               <Button variant="text" hasArrow>Start Building</Button>
            </div>

            {/* Card 3: Standard */}
            <div className="col-span-1 stripe-card p-8">
               <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <TrendingUp className="text-green-400" />
               </div>
               <h4 className="text-xl font-bold text-white mb-2">Growth Marketing</h4>
               <p className="text-slate-400">Data-driven campaigns to acquire your first 10,000 users.</p>
            </div>

             {/* Card 4: Wide */}
             <div className="col-span-1 md:col-span-2 stripe-card p-8 flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1">
                 <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center mb-6">
                    <Layout className="text-brand-gold" />
                 </div>
                 <h4 className="text-xl font-bold text-white mb-2">Pixel-Perfect Design</h4>
                 <p className="text-slate-400">Branding that sticks. UI/UX that converts. We design for the 1%.</p>
               </div>
               <div className="flex-1 w-full bg-black/30 rounded-lg p-4 border border-white/5">
                  <div className="flex gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-2">
                     <div className="w-full h-24 bg-white/5 rounded flex items-center justify-center text-xs text-gray-600">Preview</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        STATS / SOCIAL PROOF 
        Stripe Style: Simple, gray text, large numbers
      */}
      <section className="py-20 border-y border-white/5 bg-[#050b1d]">

      </section>

      {/* 
        CALLOUT SECTION 
        Stripe Style: Colored background section with angle
      */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple to-indigo-900 opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        {/* Top slant */}
        <div className="absolute top-0 left-0 w-full h-16 bg-navam-bg transform -skew-y-2 origin-top-left -translate-y-8 z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale your vision?</h2>
          <p className="text-slate-300 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
            Join the ecosystem of founders building the future. From student ideas to enterprise execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate('/contact', { state: { service: 'Student / Idea Stage (Investment)' } })} hasArrow>
              Submit Your Pitch
            </Button>
            <Button variant="outline" onClick={() => navigate('/services')}>
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;