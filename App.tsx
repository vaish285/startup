import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedLogos from './components/Background';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import About from './pages/About';
import SocialMediaService from './pages/SocialMediaService';
import InvestorConnect from './pages/InvestorConnect';

// ScrollToTop component to ensure page starts at top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-navam-bg text-white selection:bg-brand-purple selection:text-white">
        
        {/* Background Canvas - Low opacity to keep it subtle for the "Clean" Stripe look */}
        <div className="fixed inset-0 z-0 opacity-20">
             <AnimatedLogos initialMode="normal" />
        </div>
        
        {/* Main Content Wrapper - z-10 ensures it sits on top of canvas */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/social-media" element={<SocialMediaService />} />
              <Route path="/services/investors" element={<InvestorConnect />} />
              {/* <Route path="/team" element={<Team />} /> */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;