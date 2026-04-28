

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { services } from "../config/servicesConfig";
// import {
//   ArrowRight,
//   Code,
//   Share2,
//   ChevronRight,
//   Layers,
//   Zap,
//   Shield,
//   Globe,
//   Box,
//   Users,
//   X,
//   Briefcase,
//   ShoppingCart,
//   GraduationCap,
//   CheckCircle,
//   Star,
//   ExternalLink,
//   Smartphone,
//   Apple,
// } from "lucide-react";
// import { Button } from "../components/ui/Button";

// // ─── Sub-service definitions for Web Development ───────────────────────────

// const webSubServices = [
//   {
//     id: "portfolio",
//     icon: <Briefcase size={20} />,
//     label: "Portfolio Website",
//     tagline: "Make your first impression unforgettable.",
//     description:
//       "A stunning, animated personal or agency portfolio that showcases your work with scroll-driven transitions, case study layouts, and contact integration.",
//     features: [
//       "Custom animated hero section",
//       "Case study / project gallery",
//       "Contact form with email integration",
//       "SEO-ready meta structure",
//       "Mobile-first responsive design",
//     ],
//     premium: {
//       price: "₹1k – ₹3k",
//       label: "Premium / Enterprise",
//       perks: [
//         "Dedicated support manager",
//         "Unlimited design revisions until approval",
//         "Priority 7-day delivery",
//         "Source code ownership & handoff",
//         "Custom domain & hosting setup",
//         "1 month post-launch bug warranty",
//       ],
//     },
//     color: "from-violet-500/20 to-indigo-500/10",
//     accent: "#a78bfa",
//   },
//   {
//     id: "quick-commerce",
//     icon: <ShoppingCart size={20} />,
//     label: "Quick Commerce Store",
//     tagline: "Sell online in days, not months.",
//     description:
//       "A full-featured e-commerce storefront with product listings, cart, checkout (Razorpay / Stripe), order tracking, and admin dashboard — built for speed.",
//     features: [
//       "Product catalog & variants",
//       "Cart + Razorpay / Stripe checkout",
//       "Order management dashboard",
//       "Inventory & stock alerts",
//       "SMS / WhatsApp order notifications",
//     ],
//     premium: {
//       price: "₹10k – ₹12k",
//       label: "Premium / Enterprise",
//       perks: [
//         "Dedicated support manager",
//         "Unlimited product & design revisions",
//         "Priority 10-day delivery",
//         "Source code ownership & handoff",
//         "Payment gateway setup & testing",
//         "1 month post-launch bug warranty",
//       ],
//     },
//     color: "from-emerald-500/20 to-teal-500/10",
//     accent: "#34d399",
//   },
//   {
//     id: "college-project",
//     icon: <GraduationCap size={20} />,
//     label: "College Project",
//     tagline: "Score top marks with a polished web project.",
//     description:
//       "End-to-end college project development — from requirements doc to final presentation-ready app. CRUD apps, dashboards, mini social platforms, anything academic.",
//     features: [
//       "Requirements & ER diagram documentation",
//       "Full-stack web application",
//       "Database design (MySQL / MongoDB)",
//       "Admin + user role system",
//       "Project report & PPT included",
//     ],
//     premium: {
//       price: "₹2k – ₹5k",
//       label: "Premium / Enterprise",
//       perks: [
//         "Dedicated support throughout viva",
//         "Unlimited feature revisions",
//         "Priority 5-day delivery",
//         "Source code + detailed documentation handoff",
//         "Live demo deployment on free hosting",
//         "Mock viva Q&A preparation session",
//       ],
//     },
//     color: "from-amber-500/20 to-orange-500/10",
//     accent: "#fbbf24",
//   },
// ];

// // ─── Visual Components for Right Panel ─────────────────────────────────────

// const WebDevVisual = () => (
//   <div className="w-full h-full bg-[#1e293b] rounded-lg border border-white/10 p-4 shadow-2xl relative overflow-hidden flex flex-col">
//     <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
//       <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
//       <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
//       <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
//     </div>
//     <div className="space-y-2 font-mono text-xs opacity-80 overflow-hidden">
//       <div className="flex">
//         <span className="text-brand-purple mr-2">import</span>
//         <span className="text-white">React</span>
//         <span className="text-brand-purple mx-2">from</span>
//         <span className="text-green-400">'react'</span>;
//       </div>
//       <div className="flex">
//         <span className="text-brand-purple mr-2">const</span>
//         <span className="text-yellow-400">App</span> {"= () => {"}
//       </div>
//       <div className="pl-4 text-white">return (</div>
//       <div className="pl-8 text-blue-300">{`<Hero`}</div>
//       <div className="pl-12 text-blue-200">title="Scale Your Vision"</div>
//       <div className="pl-12 text-blue-200">animate={true}</div>
//       <div className="pl-8 text-blue-300">{`/>`}</div>
//       <div className="pl-4 text-white">);</div>
//       <div>{`}`}</div>
//     </div>
//     <motion.div
//       animate={{ y: [0, -10, 0] }}
//       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//       className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-24 md:w-32 h-16 md:h-20 bg-brand-purple/20 backdrop-blur-md rounded border border-brand-purple/50 flex items-center justify-center"
//     >
//       <span className="text-brand-purple font-bold text-xs md:text-sm">
//         100% Lighthouse
//       </span>
//     </motion.div>
//   </div>
// );

// const AppVisual = () => (
//   <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
//     <div className="w-[140px] md:w-[180px] h-[240px] md:h-[320px] bg-[#020420] border-4 border-[#334155] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl relative">
//       <div className="absolute top-0 left-0 w-full h-4 md:h-6 bg-[#334155] z-10 flex justify-center">
//         <div className="w-12 md:w-16 h-3 md:h-4 bg-[#020420] rounded-b-lg"></div>
//       </div>
//       <div className="p-3 md:p-4 pt-6 md:pt-8 space-y-2 md:space-y-3">
//         <div className="w-full h-16 md:h-24 bg-gradient-to-br from-brand-purple to-blue-600 rounded-lg md:rounded-xl"></div>
//         <div className="w-full h-6 md:h-8 bg-white/10 rounded-md md:rounded-lg"></div>
//         <div className="flex gap-2">
//           <div className="w-1/2 h-16 md:h-24 bg-white/5 rounded-md md:rounded-lg"></div>
//           <div className="w-1/2 h-16 md:h-24 bg-white/5 rounded-md md:rounded-lg"></div>
//         </div>
//       </div>
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.2 }}
//         className="absolute bottom-4 right-4 w-8 h-8 md:w-10 md:h-10 bg-brand-gold rounded-full flex items-center justify-center shadow-lg"
//       >
//         <ArrowRight className="text-black w-4 h-4 md:w-5 md:h-5" />
//       </motion.div>
//     </div>
//     <div className="absolute -z-10 w-48 h-48 md:w-64 md:h-64 bg-brand-accent/10 rounded-full blur-[50px]"></div>
//   </div>
// );

// const BrandingVisual = () => (
//   <div className="w-full h-full relative p-6 flex items-center justify-center">
//     <div className="grid grid-cols-2 gap-4 w-full max-w-[200px] md:max-w-sm">
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="aspect-square bg-[#0f172a] border border-white/10 rounded-lg p-2 md:p-4 flex flex-col justify-between"
//       >
//         <span className="text-2xl md:text-4xl font-serif text-white">Aa</span>
//         <span className="text-[10px] md:text-xs text-gray-500">Typography</span>
//       </motion.div>
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="aspect-square bg-gradient-to-br from-brand-gold to-orange-600 rounded-lg p-2 md:p-4 flex flex-col justify-end"
//       >
//         <span className="text-[10px] text-black font-bold bg-white/50 px-2 py-1 rounded w-fit scale-75 md:scale-100 origin-bottom-left">
//           Primary
//         </span>
//       </motion.div>
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="aspect-square bg-white text-black rounded-lg p-2 md:p-4 flex items-center justify-center"
//       >
//         <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-black rounded-full flex items-center justify-center font-bold text-sm md:text-base">
//           S
//         </div>
//       </motion.div>
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="aspect-square bg-[#1e293b] rounded-lg p-2 md:p-4 flex items-center justify-center border border-white/10"
//       >
//         <div className="w-6 h-6 md:w-8 md:h-8 border border-brand-purple rounded"></div>
//       </motion.div>
//     </div>
//   </div>
// );

// const SocialVisual = () => (
//   <div className="w-full h-full flex items-center justify-center relative">
//     <div className="w-48 md:w-64 bg-[#0f172a] border border-white/10 rounded-xl p-4 shadow-xl">
//       <div className="flex items-center gap-3 mb-4">
//         <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-purple rounded-full"></div>
//         <div>
//           <div className="w-16 md:w-24 h-2 bg-white/20 rounded"></div>
//           <div className="w-8 md:w-12 h-2 bg-white/10 rounded mt-1"></div>
//         </div>
//       </div>
//       <div className="w-full h-24 md:h-32 bg-white/5 rounded-lg mb-3 flex items-center justify-center">
//         <Share2 className="text-white/20 w-6 h-6 md:w-8 md:h-8" />
//       </div>
//       <div className="flex gap-4 text-xs text-gray-500">
//         <div className="flex items-center gap-1">
//           <span className="text-white font-bold">1.2k</span> Likes
//         </div>
//         <div className="flex items-center gap-1">
//           <span className="text-white font-bold">450</span> Shares
//         </div>
//       </div>
//     </div>
//     <motion.div
//       animate={{ y: [-5, 5, -5] }}
//       transition={{ duration: 3, repeat: Infinity }}
//       className="absolute -right-2 md:-right-4 top-10 bg-white text-black text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-lg"
//     >
//       +34% Growth
//     </motion.div>
//   </div>
// );

// const SEOVisual = () => (
//   <div className="w-full h-full flex flex-col justify-center p-6">
//     <div className="bg-[#0f172a] border border-white/10 rounded-lg p-4 w-full">
//       <div className="flex justify-between items-end h-24 md:h-32 gap-2">
//         {[40, 65, 50, 85, 70, 95].map((h, i) => (
//           <motion.div
//             key={i}
//             initial={{ height: 0 }}
//             animate={{ height: `${h}%` }}
//             transition={{ duration: 1, delay: i * 0.1 }}
//             className="w-full bg-brand-accent/20 border-t-2 border-brand-accent rounded-t-sm relative group"
//           ></motion.div>
//         ))}
//       </div>
//       <div className="mt-4 flex justify-between text-[10px] md:text-xs text-gray-500 font-mono">
//         <span>M</span>
//         <span>T</span>
//         <span>W</span>
//         <span>T</span>
//         <span>F</span>
//         <span>S</span>
//       </div>
//     </div>
//   </div>
// );

// const DeckVisual = () => (
//   <div className="w-full h-full flex items-center justify-center">
//     <motion.div
//       whileHover={{ rotate: -2 }}
//       className="w-48 md:w-64 aspect-[4/3] bg-white text-black p-4 md:p-6 rounded shadow-2xl flex flex-col justify-between transform rotate-2 transition-transform"
//     >
//       <div>
//         <div className="text-lg md:text-xl font-serif font-bold mb-1">
//           Startup Ecosystem
//         </div>
//         <div className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest">
//           Series A Deck
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-2">
//         <div className="h-10 md:h-16 bg-gray-100 rounded"></div>
//         <div className="h-10 md:h-16 bg-gray-100 rounded"></div>
//       </div>
//     </motion.div>
//   </div>
// );

// // ─── Premium Modal ──────────────────────────────────────────────────────────

// const PremiumModal = ({ subService, onClose, onContact }) => {
//   if (!subService) return null;
//   return (
//     <AnimatePresence>
//       <motion.div
//         key="modal-backdrop"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-50 flex items-center justify-center p-4"
//         style={{ background: "rgba(2,4,32,0.85)", backdropFilter: "blur(8px)" }}
//         onClick={onClose}
//       >
//         <motion.div
//           key="modal-card"
//           initial={{ opacity: 0, scale: 0.92, y: 24 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.94, y: 16 }}
//           transition={{ type: "spring", stiffness: 320, damping: 28 }}
//           onClick={(e) => e.stopPropagation()}
//           className="relative w-full max-w-lg bg-[#0d1526] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
//         >
//           {/* Gradient accent strip */}
//           <div
//             className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${subService.color.replace("/20", "").replace("/10", "")} opacity-80`}
//             style={{
//               background: `linear-gradient(90deg, ${subService.accent}88, transparent)`,
//             }}
//           />

//           {/* Header */}
//           <div className="p-6 pb-4 flex items-start justify-between">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-11 h-11 rounded-xl flex items-center justify-center"
//                 style={{
//                   background: `${subService.accent}22`,
//                   color: subService.accent,
//                 }}
//               >
//                 {subService.icon}
//               </div>
//               <div>
//                 <div className="text-white font-bold text-lg leading-tight">
//                   {subService.label}
//                 </div>
//                 <div className="text-xs text-gray-400 mt-0.5">
//                   {subService.tagline}
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-white transition-colors mt-1"
//             >
//               <X size={18} />
//             </button>
//           </div>

//           {/* Tier badge */}
//           <div className="mx-6 mb-4">
//             <div
//               className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border"
//               style={{
//                 background: `${subService.accent}15`,
//                 borderColor: `${subService.accent}40`,
//                 color: subService.accent,
//               }}
//             >
//               <Star size={11} fill="currentColor" /> {subService.premium.label}
//             </div>
//           </div>

//           {/* Description */}
//           <div className="mx-6 mb-5 text-sm text-slate-400 leading-relaxed">
//             {subService.description}
//           </div>

//           {/* Features included */}
//           <div className="mx-6 mb-3">
//             <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
//               What's included
//             </div>
//             <div className="grid grid-cols-1 gap-2">
//               {subService.features.map((f, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start gap-2 text-sm text-slate-300"
//                 >
//                   <CheckCircle
//                     size={14}
//                     className="mt-0.5 shrink-0"
//                     style={{ color: subService.accent }}
//                   />
//                   {f}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="mx-6 my-4 border-t border-white/5" />

//           {/* Premium perks */}
//           <div className="mx-6 mb-6">
//             <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
//               Premium / Enterprise perks
//             </div>
//             <div className="grid grid-cols-1 gap-2">
//               {subService.premium.perks.map((p, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start gap-2 text-sm"
//                   style={{ color: subService.accent }}
//                 >
//                   <Star
//                     size={13}
//                     className="mt-0.5 shrink-0"
//                     fill="currentColor"
//                   />
//                   <span className="text-slate-200">{p}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Pricing + CTA */}
//           <div className="mx-6 mb-6 flex items-center justify-between gap-4">
//             <div>
//               <div className="text-xs text-gray-500 mb-0.5">Pricing</div>
//               <div className="text-brand-gold font-mono font-bold text-xl">
//                 {subService.premium.price}
//               </div>
//             </div>
//             <button
//               onClick={() => {
//                 onClose();
//                 onContact(subService.id);
//               }}
//               className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all"
//               style={{
//                 background: `${subService.accent}22`,
//                 border: `1px solid ${subService.accent}44`,
//               }}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.background = `${subService.accent}35`)
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.background = `${subService.accent}22`)
//               }
//             >
//               Get a Quote <ExternalLink size={14} />
//             </button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// // ─── Web Sub-Services Panel (shown inside Web Dev section) ──────────────────

// const WebSubServicesPanel = ({ onOpenModal }) => (
//   <div className="mt-4 pt-4 border-t border-white/5">
//     <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-semibold px-1">
//       Specialisations
//     </div>
//     <div className="flex flex-col gap-2">
//       {webSubServices.map((sub) => (
//         <motion.button
//           key={sub.id}
//           whileHover={{ x: 4 }}
//           onClick={(e) => {
//             e.stopPropagation();
//             onOpenModal(sub);
//           }}
//           className="flex items-center justify-between w-full text-left px-3 py-2.5 rounded-lg transition-all group"
//           style={{
//             background: "rgba(255,255,255,0.03)",
//             border: "1px solid rgba(255,255,255,0.06)",
//           }}
//         >
//           <div className="flex items-center gap-3">
//             <div
//               className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
//               style={{ background: `${sub.accent}18`, color: sub.accent }}
//             >
//               {sub.icon}
//             </div>
//             <div>
//               <div className="text-sm font-medium text-white group-hover:text-white">
//                 {sub.label}
//               </div>
//               <div className="text-[11px] text-gray-500">{sub.tagline}</div>
//             </div>
//           </div>
//           <div className="flex items-center gap-2 shrink-0 ml-2">
//             <span
//               className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
//               style={{
//                 color: sub.accent,
//                 borderColor: `${sub.accent}40`,
//                 background: `${sub.accent}12`,
//               }}
//             >
//               {sub.premium.price}
//             </span>
//             <ChevronRight
//               size={14}
//               className="text-gray-600 group-hover:text-white transition-colors"
//             />
//           </div>
//         </motion.button>
//       ))}
//     </div>
//   </div>
// );

// // ─── Sub-service definitions for Mobile App Development ────────────────────

// const appSubServices = [
//   {
//     id: "android-app",
//     icon: <Smartphone size={20} />,
//     label: "Android App",
//     tagline: "Reach 3 billion Android users worldwide.",
//     description:
//       "Native & cross-platform Android applications built with Flutter or React Native — performant, scalable, and Play Store ready with full backend integration.",
//     features: [
//       "Flutter / React Native development",
//       "Google Play Store submission",
//       "Push notifications & deep linking",
//       "Firebase / REST API integration",
//       "Offline-first architecture",
//     ],
//     premium: {
//       price: "₹30k – ₹40k",
//       label: "Premium / Enterprise",
//       perks: [
//         "Dedicated support manager",
//         "Unlimited UI/UX revisions until approval",
//         "Priority delivery timeline",
//         "Source code ownership & full handoff",
//         "Play Store listing setup & optimization",
//         "3 months post-launch bug warranty",
//       ],
//     },
//     color: "from-green-500/20 to-emerald-500/10",
//     accent: "#4ade80",
//   },
//   {
//     id: "ios-app",
//     icon: <Apple size={20} />,
//     label: "iOS App",
//     tagline: "Ship a premium experience on iPhone & iPad.",
//     description:
//       "Polished iOS applications built with Flutter or React Native — adhering to Apple HIG guidelines, App Store compliant, and optimised for all iPhone & iPad sizes.",
//     features: [
//       "Flutter / React Native development",
//       "Apple App Store submission",
//       "Face ID / Touch ID integration",
//       "iCloud & CoreData support",
//       "TestFlight beta distribution",
//     ],
//     premium: {
//       price: "₹35k – ₹45k",
//       label: "Premium / Enterprise",
//       perks: [
//         "Dedicated support manager",
//         "Unlimited UI/UX revisions until approval",
//         "Priority delivery timeline",
//         "Source code ownership & full handoff",
//         "App Store listing setup & ASO",
//         "3 months post-launch bug warranty",
//       ],
//     },
//     color: "from-sky-500/20 to-blue-500/10",
//     accent: "#38bdf8",
//   },
// ];

// // ─── App Sub-Services Panel (shown inside App Dev section) ──────────────────

// const AppSubServicesPanel = ({ onOpenModal }) => (
//   <div className="mt-4 pt-4 border-t border-white/5">
//     <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-semibold px-1">
//       Platforms
//     </div>
//     <div className="flex flex-col gap-2">
//       {appSubServices.map((sub) => (
//         <motion.button
//           key={sub.id}
//           whileHover={{ x: 4 }}
//           onClick={(e) => {
//             e.stopPropagation();
//             onOpenModal(sub);
//           }}
//           className="flex items-center justify-between w-full text-left px-3 py-2.5 rounded-lg transition-all group"
//           style={{
//             background: "rgba(255,255,255,0.03)",
//             border: "1px solid rgba(255,255,255,0.06)",
//           }}
//         >
//           <div className="flex items-center gap-3">
//             <div
//               className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
//               style={{ background: `${sub.accent}18`, color: sub.accent }}
//             >
//               {sub.icon}
//             </div>
//             <div>
//               <div className="text-sm font-medium text-white">{sub.label}</div>
//               <div className="text-[11px] text-gray-500">{sub.tagline}</div>
//             </div>
//           </div>
//           <div className="flex items-center gap-2 shrink-0 ml-2">
//             <span
//               className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
//               style={{
//                 color: sub.accent,
//                 borderColor: `${sub.accent}40`,
//                 background: `${sub.accent}12`,
//               }}
//             >
//               {sub.premium.price}
//             </span>
//             <ChevronRight
//               size={14}
//               className="text-gray-600 group-hover:text-white transition-colors"
//             />
//           </div>
//         </motion.button>
//       ))}
//     </div>
//   </div>
// );

// // ─── Main Component ─────────────────────────────────────────────────────────

// const Services = () => {
//   const navigate = useNavigate();
//   const [activeServiceId, setActiveServiceId] = useState(services[0].id);
//   const [modalSubService, setModalSubService] = useState(null);

//   const activeService =
//     services.find((s) => s.id === activeServiceId) || services[0];

//   const handleServiceClick = (serviceId) => {
//     navigate("/contact", { state: { service: serviceId } });
//   };

//   const renderVisual = (id) => {
//     switch (id) {
//       case "web-dev":
//         return <WebDevVisual />;
//       case "app-dev":
//         return <AppVisual />;
//       case "branding":
//         return <BrandingVisual />;
//       case "social-media":
//         return <SocialVisual />;
//       case "seo-marketing":
//         return <SEOVisual />;
//       case "investment-deck":
//         return <DeckVisual />;
//       default:
//         return <WebDevVisual />;
//     }
//   };

//   return (
//     <div className="bg-navam-bg min-h-screen">
//       {/* Premium Modal */}
//       <PremiumModal
//         subService={modalSubService}
//         onClose={() => setModalSubService(null)}
//         onContact={handleServiceClick}
//       />

//       {/* HERO SECTION */}
//       <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
//         <div className="absolute top-0 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />
//         <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-gold text-xs font-semibold mb-6 uppercase tracking-wider">
//               <Layers size={12} /> Service Catalog
//             </div>
//             <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-[1.1]">
//               Tools for every <br /> stage of growth.
//             </h1>
//             <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
//               We provide the technical and creative infrastructure so you can
//               focus on your core mission. Explore our suite of specialized
//               services.
//             </p>
//             <div className="flex gap-4">
//               <Button onClick={() => navigate("/contact")}>Get Started</Button>
//               <Button
//                 variant="outline"
//                 onClick={() =>
//                   document
//                     .getElementById("explorer")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//               >
//                 Explore Services
//               </Button>
//             </div>
//           </motion.div>

//           <div className="relative h-[400px] hidden lg:flex items-center justify-center">
//             <motion.div
//               animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
//               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-brand-purple/20 to-blue-500/20 rounded-2xl border border-white/10 backdrop-blur-sm z-10"
//             />
//             <motion.div
//               animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
//               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-brand-gold/10 to-orange-500/10 rounded-full border border-white/10 backdrop-blur-sm"
//             />
//             <div className="relative z-20 bg-[#0f172a] p-6 rounded-xl border border-white/10 shadow-2xl max-w-xs">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 rounded bg-brand-purple flex items-center justify-center text-white">
//                   <Code size={20} />
//                 </div>
//                 <div>
//                   <div className="text-white font-bold">Engineering</div>
//                   <div className="text-xs text-gray-400">
//                     Full Stack Support
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <div className="h-2 bg-white/10 rounded w-full"></div>
//                 <div className="h-2 bg-white/10 rounded w-3/4"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* INTERACTIVE SERVICE EXPLORER */}
//       <div id="explorer" className="relative z-20">
//         <div className="absolute top-0 left-0 right-0 h-24 bg-navam-bg -translate-y-12 transform -skew-y-2 origin-top-right z-10"></div>
//         <section className="bg-navam-surface pt-24 pb-32 relative diagonal-section">
//           <div className="max-w-[1200px] mx-auto px-6">
//             <div className="mb-16">
//               <h2 className="text-3xl font-bold text-white mb-2">
//                 Capabilities
//               </h2>
//               <p className="text-slate-400">
//                 Everything you need to build and scale.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//               {/* Left Column: Service Menu */}
//               <div className="lg:col-span-5 space-y-4">
//                 {services.map((service) => (
//                   <div
//                     key={service.id}
//                     onClick={() => setActiveServiceId(service.id)}
//                     className={`cursor-pointer p-6 rounded-xl transition-all duration-300 border ${
//                       activeServiceId === service.id
//                         ? "bg-white/5 border-brand-purple/50 shadow-lg"
//                         : "bg-transparent border-transparent hover:bg-white/5"
//                     }`}
//                   >
//                     <div className="flex justify-between items-center">
//                       <h3
//                         className={`text-lg font-bold transition-colors ${activeServiceId === service.id ? "text-brand-purple" : "text-white"}`}
//                       >
//                         {service.title}
//                       </h3>
//                       <ChevronRight
//                         className={`lg:hidden transition-transform ${activeServiceId === service.id ? "rotate-90 text-brand-purple" : "text-gray-500"}`}
//                         size={20}
//                       />
//                     </div>

//                     <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mt-2">
//                       {service.description}
//                     </p>

//                     {/* Sub-services for web-dev (desktop: always visible when active) */}
//                     {service.id === "web-dev" &&
//                       activeServiceId === "web-dev" && (
//                         <div className="hidden lg:block">
//                           <WebSubServicesPanel
//                             onOpenModal={setModalSubService}
//                           />
//                         </div>
//                       )}

//                     {/* Sub-services for app-dev (desktop: always visible when active) */}
//                     {service.id === "app-dev" &&
//                       activeServiceId === "app-dev" && (
//                         <div className="hidden lg:block">
//                           <AppSubServicesPanel
//                             onOpenModal={setModalSubService}
//                           />
//                         </div>
//                       )}

//                     {/* Mobile/Tablet Accordion */}
//                     <AnimatePresence>
//                       {activeServiceId === service.id && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           className="lg:hidden mt-6 overflow-hidden"
//                         >
//                           {/* Sub-services for mobile */}
//                           {service.id === "web-dev" && (
//                             <WebSubServicesPanel
//                               onOpenModal={setModalSubService}
//                             />
//                           )}

//                           {/* App platform sub-services for mobile */}
//                           {service.id === "app-dev" && (
//                             <AppSubServicesPanel
//                               onOpenModal={setModalSubService}
//                             />
//                           )}

//                           <div className="h-[300px] w-full bg-[#020420] rounded-xl border border-white/10 relative overflow-hidden mb-4 mt-4">
//                             <div className="w-full h-full scale-90 origin-center">
//                               {renderVisual(service.id)}
//                             </div>
//                           </div>

//                           <div className="flex flex-col gap-3">
//                             <div className="flex items-center justify-between border-t border-white/10 pt-3">
//                               <span className="text-brand-gold font-mono text-sm">
//                                 {service.priceRange || "Custom"}
//                               </span>
//                               {service.id === "social-media" && (
//                                 <button
//                                   onClick={(e) => {
//                                     e.stopPropagation();
//                                     navigate("/services/social-media");
//                                   }}
//                                   className="flex items-center text-xs text-gray-400 hover:text-white"
//                                 >
//                                   Details{" "}
//                                   <ArrowRight size={12} className="ml-1" />
//                                 </button>
//                               )}
//                               {service.id === "investment-deck" && (
//                                 <button
//                                   onClick={(e) => {
//                                     e.stopPropagation();
//                                     navigate("/services/investors");
//                                   }}
//                                   className="flex items-center text-xs text-brand-purple hover:text-white"
//                                 >
//                                   <Users size={12} className="mr-1" /> Meet
//                                   Investors
//                                 </button>
//                               )}
//                             </div>
//                             <Button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleServiceClick(service.id);
//                               }}
//                               className="w-full text-sm"
//                             >
//                               Start Project
//                             </Button>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ))}
//               </div>

//               {/* Right Column: Visual Preview (Sticky - Desktop) */}
//               <div className="hidden lg:block lg:col-span-7 relative">
//                 <div className="sticky top-32 h-[500px] w-full bg-[#020420] rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-8 flex flex-col">
//                   <div className="flex justify-between items-start mb-8">
//                     <div>
//                       <h3 className="text-2xl font-serif text-white mb-2">
//                         {activeService.title}
//                       </h3>
//                       <p className="text-slate-400 text-sm max-w-md">
//                         {activeService.description}
//                       </p>
//                     </div>
//                     <div className="text-right flex flex-col items-end">
//                       <div className="text-brand-gold font-mono text-lg">
//                         {activeService.priceRange || "Custom"}
//                       </div>
//                       <button
//                         onClick={() => handleServiceClick(activeService.id)}
//                         className="mt-2 flex items-center text-sm font-bold text-white hover:text-brand-purple transition-colors"
//                       >
//                         Get Started <ChevronRight size={14} className="ml-1" />
//                       </button>
//                       {activeService.id === "social-media" && (
//                         <button
//                           onClick={() => navigate("/services/social-media")}
//                           className="mt-3 flex items-center px-4 py-2 bg-white/10 rounded-full text-xs md:text-sm font-semibold text-white hover:bg-brand-purple transition-colors ml-auto border border-white/10"
//                         >
//                           Deep Dive <ArrowRight size={14} className="ml-2" />
//                         </button>
//                       )}
//                       {activeService.id === "investment-deck" && (
//                         <button
//                           onClick={() => navigate("/services/investors")}
//                           className="mt-3 flex items-center px-4 py-2 bg-brand-gold/10 rounded-full text-xs md:text-sm font-semibold text-brand-gold hover:bg-brand-gold hover:text-black transition-all ml-auto border border-brand-gold/20"
//                         >
//                           Meet Our Investors{" "}
//                           <Users size={14} className="ml-2" />
//                         </button>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap gap-2 mb-8">
//                     {activeService.features?.slice(0, 4).map((f, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300"
//                       >
//                         {f}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex-grow bg-grid rounded-xl border border-white/5 relative overflow-hidden">
//                     <AnimatePresence mode="wait">
//                       <motion.div
//                         key={activeServiceId}
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                         className="w-full h-full"
//                       >
//                         {renderVisual(activeServiceId)}
//                       </motion.div>
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* BENTO BOX GRID */}
//       <section className="py-32 max-w-[1200px] mx-auto px-6">
//         <div className="mb-16 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             The Ecosystem Advantage
//           </h2>
//           <p className="text-slate-400 max-w-2xl mx-auto">
//             We aren't just an agency. We are a growth platform designed to
//             integrate seamlessly with your startup.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
//           <div className="stripe-card p-8 md:col-span-2 row-span-1 flex flex-col justify-center relative overflow-hidden group">
//             <div className="relative z-10">
//               <div className="w-12 h-12 bg-brand-purple/20 rounded-lg flex items-center justify-center text-brand-purple mb-4">
//                 <Zap />
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 Velocity Matters
//               </h3>
//               <p className="text-slate-400 max-w-md">
//                 We operate on sprints. Get your MVP to market in weeks, not
//                 months. Our pre-built modules for auth, payments, and databases
//                 save hundreds of hours.
//               </p>
//             </div>
//             <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand-purple/10 to-transparent skew-x-12 transform translate-x-10 group-hover:translate-x-0 transition-transform duration-500"></div>
//           </div>

//           <div className="stripe-card p-8 md:col-span-1 row-span-1 bg-[#0f172a] flex flex-col justify-center">
//             <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500 mb-4">
//               <Shield />
//             </div>
//             <h3 className="text-xl font-bold text-white mb-2">
//               Transparent Pricing
//             </h3>
//             <p className="text-slate-400 text-sm">
//               No hidden hourly billing. We prefer flat-rate project fees or
//               monthly retainers so you can forecast your burn rate accurately.
//             </p>
//           </div>

//           <div className="stripe-card p-8 md:col-span-1 row-span-1 flex flex-col justify-center">
//             <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500 mb-4">
//               <Globe />
//             </div>
//             <h3 className="text-xl font-bold text-white mb-2">Global Talent</h3>
//             <p className="text-slate-400 text-sm">
//               Access top 1% engineers and designers from around the world
//               without the hiring headache.
//             </p>
//           </div>

//           <div className="stripe-card p-8 md:col-span-2 row-span-1 flex items-center justify-between relative overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
//             <div className="relative z-10 max-w-md">
//               <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center text-brand-gold mb-4">
//                 <Box />
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 One Unified Partner
//               </h3>
//               <p className="text-slate-400">
//                 Stop managing 5 different freelancers. We handle design, dev,
//                 and marketing under one roof.
//               </p>
//             </div>
//             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 border-t border-white/5 text-center">
//         <h2 className="text-4xl font-serif text-white mb-8">Ready to start?</h2>
//         <Button
//           onClick={() => navigate("/contact")}
//           className="px-10 py-4 text-lg"
//         >
//           Launch Project
//         </Button>
//       </section>
//     </div>
//   );
// };

// export default Services;



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { services } from "../config/servicesConfig";
import {
  ArrowRight,
  Code,
  Share2,
  ChevronRight,
  Layers,
  Zap,
  Shield,
  Globe,
  Box,
  Users,
  X,
  Briefcase,
  ShoppingCart,
  GraduationCap,
  CheckCircle,
  Star,
  ExternalLink,
  Smartphone,
  Apple,
} from "lucide-react";
import { Button } from "../components/ui/Button";

// ─── Sub-service definitions for Web Development ───────────────────────────

const webSubServices = [
  {
    id: "portfolio",
    icon: <Briefcase size={20} />,
    label: "Portfolio Website",
    tagline: "Make your first impression unforgettable.",
    description:
      "A stunning, animated personal or agency portfolio that showcases your work with scroll-driven transitions, case study layouts, and contact integration.",
    features: [
      "Custom animated hero section",
      "Case study / project gallery",
      "Contact form with email integration",
      "SEO-ready meta structure",
      "Mobile-first responsive design",
    ],
    premium: {
      
      label: "Premium / Enterprise",
      perks: [
        "Dedicated support manager",
        "Unlimited design revisions until approval",
        "Priority 7-day delivery",
        "Source code ownership & handoff",
        "Custom domain & hosting setup",
        "1 month post-launch bug warranty",
      ],
    },
    color: "from-violet-500/20 to-indigo-500/10",
    accent: "#a78bfa",
  },
  {
    id: "quick-commerce",
    icon: <ShoppingCart size={20} />,
    label: "Quick Commerce Store",
    tagline: "Sell online in days, not months.",
    description:
      "A full-featured e-commerce storefront with product listings, cart, checkout (Razorpay / Stripe), order tracking, and admin dashboard — built for speed.",
    features: [
      "Product catalog & variants",
      "Cart + Razorpay / Stripe checkout",
      "Order management dashboard",
      "Inventory & stock alerts",
      "SMS / WhatsApp order notifications",
    ],
    premium: {
      
      label: "Premium / Enterprise",
      perks: [
        "Dedicated support manager",
        "Unlimited product & design revisions",
        "Priority 10-day delivery",
        "Source code ownership & handoff",
        "Payment gateway setup & testing",
        "1 month post-launch bug warranty",
      ],
    },
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "#34d399",
  },
  {
    id: "college-project",
    icon: <GraduationCap size={20} />,
    label: "College Project",
    tagline: "Score top marks with a polished web project.",
    description:
      "End-to-end college project development — from requirements doc to final presentation-ready app. CRUD apps, dashboards, mini social platforms, anything academic.",
    features: [
      "Requirements & ER diagram documentation",
      "Full-stack web application",
      "Database design (MySQL / MongoDB)",
      "Admin + user role system",
      "Project report & PPT included",
    ],
    premium: {
     
      label: "Premium / Enterprise",
      perks: [
        "Dedicated support throughout viva",
        "Unlimited feature revisions",
        "Priority 5-day delivery",
        "Source code + detailed documentation handoff",
        "Live demo deployment on free hosting",
        "Mock viva Q&A preparation session",
      ],
    },
    color: "from-amber-500/20 to-orange-500/10",
    accent: "#fbbf24",
  },
];

// ─── Sub-service definitions for Mobile App Development ────────────────────

const appSubServices = [
  {
    id: "android-app",
    icon: <Smartphone size={20} />,
    label: "Android App",
    tagline: "Reach 3 billion Android users worldwide.",
    description:
      "Native & cross-platform Android applications built with Flutter or React Native — performant, scalable, and Play Store ready with full backend integration.",
    features: [
      "Flutter / React Native development",
      "Google Play Store submission",
      "Push notifications & deep linking",
      "Firebase / REST API integration",
      "Offline-first architecture",
    ],
    premium: {
  
      label: "Premium / Enterprise",
      perks: [
        "Dedicated support manager",
        "Unlimited UI/UX revisions until approval",
        "Priority delivery timeline",
        "Source code ownership & full handoff",
        "Play Store listing setup & optimization",
        "3 months post-launch bug warranty",
      ],
    },
    color: "from-green-500/20 to-emerald-500/10",
    accent: "#4ade80",
  },
  {
    id: "ios-app",
    icon: <Apple size={20} />,
    label: "iOS App",
    tagline: "Ship a premium experience on iPhone & iPad.",
    description:
      "Polished iOS applications built with Flutter or React Native — adhering to Apple HIG guidelines, App Store compliant, and optimised for all iPhone & iPad sizes.",
    features: [
      "Flutter / React Native development",
      "Apple App Store submission",
      "Face ID / Touch ID integration",
      "iCloud & CoreData support",
      "TestFlight beta distribution",
    ],
    premium: {
  
      label: "Premium / Enterprise",
      perks: [
        "Dedicated support manager",
        "Unlimited UI/UX revisions until approval",
        "Priority delivery timeline",
        "Source code ownership & full handoff",
        "App Store listing setup & ASO",
        "3 months post-launch bug warranty",
      ],
    },
    color: "from-sky-500/20 to-blue-500/10",
    accent: "#38bdf8",
  },
];

// ─── Sub-service definitions for Any Project ───────────────────────────────

const anyProjectSubServices = [
  {
    id: "ai-integration",
    icon: <Zap size={20} />,
    label: "AI / LLM Integration",
    tagline: "Embed intelligence into your product.",
    description:
      "Connect OpenAI, Claude, Gemini, or open-source models to your app. Chatbots, document Q&A, summarization pipelines, semantic search — fully custom built to your needs.",
    features: [
      "Model selection & prompt engineering",
      "RAG pipeline setup",
      "API integration & streaming",
      "Rate limiting & cost controls",
      "Admin dashboard for logs",
    ],
    premium: {

      label: "Premium / Enterprise",
      perks: [
        "Dedicated engineer throughout",
        "Unlimited iteration until approved",
        "Source code + full handoff",
        "Deployment & hosting setup",
        "1 month post-launch support",
        "Custom SLA available",
      ],
    },
    color: "from-violet-500/20 to-indigo-500/10",
    accent: "#a78bfa",
  },
  {
    id: "internal-tool",
    icon: <Box size={20} />,
    label: "Internal Tool / Dashboard",
    tagline: "Automate the boring stuff your team does daily.",
    description:
      "Custom admin panels, CRMs, inventory managers, HR tools, reporting dashboards — tailored exactly to your workflow with role-based access and clean UX.",
    features: [
      "Role-based access control",
      "CRUD + bulk operations",
      "Data visualisation (charts, tables)",
      "Export to CSV / PDF",
      "Auth & audit logs",
    ],
    premium: {
     
      label: "Premium / Enterprise",
      perks: [
        "Dedicated support manager",
        "Unlimited design revisions",
        "Priority delivery",
        "Source code ownership",
        "Deployment to your infra",
        "1 month bug warranty",
      ],
    },
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "#34d399",
  },
  {
    id: "custom-other",
    icon: <Globe size={20} />,
    label: "Something Else?",
    tagline: "Describe it — we'll figure out the rest.",
    description:
      "Bots, scrapers, automation pipelines, browser extensions, CLI tools, webhooks, Zapier replacements, Discord / Telegram integrations — if you can describe it, we can build it.",
    features: [
      "Free 30-min scoping call",
      "Written proposal & timeline",
      "Fixed-price or milestone billing",
      "Flexible tech stack",
      "Full source code ownership",
    ],
    premium: {
      
      label: "Custom Scoped",
      perks: [
        "No lock-in — pay per milestone",
        "Dedicated point of contact",
        "Transparent progress updates",
        "Source code + docs on delivery",
        "Post-launch support available",
        "NDA available on request",
      ],
    },
    color: "from-orange-500/20 to-amber-500/10",
    accent: "#fb923c",
  },
];

// ─── Visual Components for Right Panel ─────────────────────────────────────

const WebDevVisual = () => (
  <div className="w-full h-full bg-[#1e293b] rounded-lg border border-white/10 p-4 shadow-2xl relative overflow-hidden flex flex-col">
    <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
    </div>
    <div className="space-y-2 font-mono text-xs opacity-80 overflow-hidden">
      <div className="flex">
        <span className="text-brand-purple mr-2">import</span>
        <span className="text-white">React</span>
        <span className="text-brand-purple mx-2">from</span>
        <span className="text-green-400">'react'</span>;
      </div>
      <div className="flex">
        <span className="text-brand-purple mr-2">const</span>
        <span className="text-yellow-400">App</span> {"= () => {"}
      </div>
      <div className="pl-4 text-white">return (</div>
      <div className="pl-8 text-blue-300">{`<Hero`}</div>
      <div className="pl-12 text-blue-200">title="Scale Your Vision"</div>
      <div className="pl-12 text-blue-200">animate={true}</div>
      <div className="pl-8 text-blue-300">{`/>`}</div>
      <div className="pl-4 text-white">);</div>
      <div>{`}`}</div>
    </div>
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-24 md:w-32 h-16 md:h-20 bg-brand-purple/20 backdrop-blur-md rounded border border-brand-purple/50 flex items-center justify-center"
    >
      <span className="text-brand-purple font-bold text-xs md:text-sm">
        100% Lighthouse
      </span>
    </motion.div>
  </div>
);

const AppVisual = () => (
  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
    <div className="w-[140px] md:w-[180px] h-[240px] md:h-[320px] bg-[#020420] border-4 border-[#334155] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl relative">
      <div className="absolute top-0 left-0 w-full h-4 md:h-6 bg-[#334155] z-10 flex justify-center">
        <div className="w-12 md:w-16 h-3 md:h-4 bg-[#020420] rounded-b-lg"></div>
      </div>
      <div className="p-3 md:p-4 pt-6 md:pt-8 space-y-2 md:space-y-3">
        <div className="w-full h-16 md:h-24 bg-gradient-to-br from-brand-purple to-blue-600 rounded-lg md:rounded-xl"></div>
        <div className="w-full h-6 md:h-8 bg-white/10 rounded-md md:rounded-lg"></div>
        <div className="flex gap-2">
          <div className="w-1/2 h-16 md:h-24 bg-white/5 rounded-md md:rounded-lg"></div>
          <div className="w-1/2 h-16 md:h-24 bg-white/5 rounded-md md:rounded-lg"></div>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-4 right-4 w-8 h-8 md:w-10 md:h-10 bg-brand-gold rounded-full flex items-center justify-center shadow-lg"
      >
        <ArrowRight className="text-black w-4 h-4 md:w-5 md:h-5" />
      </motion.div>
    </div>
    <div className="absolute -z-10 w-48 h-48 md:w-64 md:h-64 bg-brand-accent/10 rounded-full blur-[50px]"></div>
  </div>
);

const BrandingVisual = () => (
  <div className="w-full h-full relative p-6 flex items-center justify-center">
    <div className="grid grid-cols-2 gap-4 w-full max-w-[200px] md:max-w-sm">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="aspect-square bg-[#0f172a] border border-white/10 rounded-lg p-2 md:p-4 flex flex-col justify-between"
      >
        <span className="text-2xl md:text-4xl font-serif text-white">Aa</span>
        <span className="text-[10px] md:text-xs text-gray-500">Typography</span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="aspect-square bg-gradient-to-br from-brand-gold to-orange-600 rounded-lg p-2 md:p-4 flex flex-col justify-end"
      >
        <span className="text-[10px] text-black font-bold bg-white/50 px-2 py-1 rounded w-fit scale-75 md:scale-100 origin-bottom-left">
          Primary
        </span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="aspect-square bg-white text-black rounded-lg p-2 md:p-4 flex items-center justify-center"
      >
        <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-black rounded-full flex items-center justify-center font-bold text-sm md:text-base">
          S
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="aspect-square bg-[#1e293b] rounded-lg p-2 md:p-4 flex items-center justify-center border border-white/10"
      >
        <div className="w-6 h-6 md:w-8 md:h-8 border border-brand-purple rounded"></div>
      </motion.div>
    </div>
  </div>
);

const SocialVisual = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <div className="w-48 md:w-64 bg-[#0f172a] border border-white/10 rounded-xl p-4 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-purple rounded-full"></div>
        <div>
          <div className="w-16 md:w-24 h-2 bg-white/20 rounded"></div>
          <div className="w-8 md:w-12 h-2 bg-white/10 rounded mt-1"></div>
        </div>
      </div>
      <div className="w-full h-24 md:h-32 bg-white/5 rounded-lg mb-3 flex items-center justify-center">
        <Share2 className="text-white/20 w-6 h-6 md:w-8 md:h-8" />
      </div>
      <div className="flex gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <span className="text-white font-bold">1.2k</span> Likes
        </div>
        <div className="flex items-center gap-1">
          <span className="text-white font-bold">450</span> Shares
        </div>
      </div>
    </div>
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute -right-2 md:-right-4 top-10 bg-white text-black text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-lg"
    >
      +34% Growth
    </motion.div>
  </div>
);

const SEOVisual = () => (
  <div className="w-full h-full flex flex-col justify-center p-6">
    <div className="bg-[#0f172a] border border-white/10 rounded-lg p-4 w-full">
      <div className="flex justify-between items-end h-24 md:h-32 gap-2">
        {[40, 65, 50, 85, 70, 95].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="w-full bg-brand-accent/20 border-t-2 border-brand-accent rounded-t-sm relative group"
          ></motion.div>
        ))}
      </div>
      <div className="mt-4 flex justify-between text-[10px] md:text-xs text-gray-500 font-mono">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
      </div>
    </div>
  </div>
);

const DeckVisual = () => (
  <div className="w-full h-full flex items-center justify-center">
    <motion.div
      whileHover={{ rotate: -2 }}
      className="w-48 md:w-64 aspect-[4/3] bg-white text-black p-4 md:p-6 rounded shadow-2xl flex flex-col justify-between transform rotate-2 transition-transform"
    >
      <div>
        <div className="text-lg md:text-xl font-serif font-bold mb-1">
          Startup Ecosystem
        </div>
        <div className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest">
          Series A Deck
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="h-10 md:h-16 bg-gray-100 rounded"></div>
        <div className="h-10 md:h-16 bg-gray-100 rounded"></div>
      </div>
    </motion.div>
  </div>
);

const AnyProjectVisual = () => {
  const tiles = [
    { label: "AI Integration", accent: "#a78bfa" },
    { label: "Internal Tool", accent: "#34d399" },
    { label: "Automation", accent: "#fbbf24" },
    { label: "Dashboard", accent: "#38bdf8" },
    { label: "Bot / Scraper", accent: "#f472b6" },
    { label: "Anything else", accent: "#fb923c" },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden p-4">
      <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
        {tiles.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.08, y: -2 }}
            className="aspect-square rounded-xl flex items-center justify-center text-center text-[11px] font-semibold px-2 cursor-default"
            style={{
              background: `${item.accent}18`,
              border: `1px solid ${item.accent}40`,
              color: item.accent,
            }}
          >
            {item.label}
          </motion.div>
        ))}
      </div>
      <div className="absolute -z-10 w-48 h-48 bg-white/5 rounded-full blur-[40px]" />
    </div>
  );
};

// ─── Premium Modal ──────────────────────────────────────────────────────────

const PremiumModal = ({ subService, onClose, onContact }) => {
  if (!subService) return null;
  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(2,4,32,0.85)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      >
        <motion.div
          key="modal-card"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-[#0d1526] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Gradient accent strip */}
          <div
            className="absolute top-0 left-0 right-0 h-1 opacity-80"
            style={{
              background: `linear-gradient(90deg, ${subService.accent}88, transparent)`,
            }}
          />

          {/* Header */}
          <div className="p-6 pb-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: `${subService.accent}22`,
                  color: subService.accent,
                }}
              >
                {subService.icon}
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">
                  {subService.label}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {subService.tagline}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-white transition-colors mt-1"
            >
              <X size={18} />
            </button>
          </div>

          {/* Tier badge */}
          <div className="mx-6 mb-4">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border"
              style={{
                background: `${subService.accent}15`,
                borderColor: `${subService.accent}40`,
                color: subService.accent,
              }}
            >
              <Star size={11} fill="currentColor" /> {subService.premium.label}
            </div>
          </div>

          {/* Description */}
          <div className="mx-6 mb-5 text-sm text-slate-400 leading-relaxed">
            {subService.description}
          </div>

          {/* Features included */}
          <div className="mx-6 mb-3">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
              What's included
            </div>
            <div className="grid grid-cols-1 gap-2">
              {subService.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <CheckCircle
                    size={14}
                    className="mt-0.5 shrink-0"
                    style={{ color: subService.accent }}
                  />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-6 my-4 border-t border-white/5" />

          {/* Premium perks */}
          <div className="mx-6 mb-6">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
              {subService.premium.label} perks
            </div>
            <div className="grid grid-cols-1 gap-2">
              {subService.premium.perks.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: subService.accent }}
                >
                  <Star size={13} className="mt-0.5 shrink-0" fill="currentColor" />
                  <span className="text-slate-200">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing + CTA */}
          <div className="mx-6 mb-6 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs text-gray-500 mb-0.5">Pricing</div>
              <div className="text-brand-gold font-mono font-bold text-xl">
                {subService.premium.price}
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onContact(subService.id);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all"
              style={{
                background: `${subService.accent}22`,
                border: `1px solid ${subService.accent}44`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = `${subService.accent}35`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = `${subService.accent}22`)
              }
            >
              Get a Quote <ExternalLink size={14} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── Sub-Services Panels ────────────────────────────────────────────────────

const SubServicesPanel = ({ items, sectionLabel, onOpenModal }) => (
  <div className="mt-4 pt-4 border-t border-white/5">
    <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-semibold px-1">
      {sectionLabel}
    </div>
    <div className="flex flex-col gap-2">
      {items.map((sub) => (
        <motion.button
          key={sub.id}
          whileHover={{ x: 4 }}
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(sub);
          }}
          className="flex items-center justify-between w-full text-left px-3 py-2.5 rounded-lg transition-all group"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${sub.accent}18`, color: sub.accent }}
            >
              {sub.icon}
            </div>
            <div>
              <div className="text-sm font-medium text-white group-hover:text-white">
                {sub.label}
              </div>
              <div className="text-[11px] text-gray-500">{sub.tagline}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 ml-2">
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
              style={{
                color: sub.accent,
                borderColor: `${sub.accent}40`,
                background: `${sub.accent}12`,
              }}
            >
              {sub.premium.price}
            </span>
            <ChevronRight
              size={14}
              className="text-gray-600 group-hover:text-white transition-colors"
            />
          </div>
        </motion.button>
      ))}
    </div>
  </div>
);

const WebSubServicesPanel = ({ onOpenModal }) => (
  <SubServicesPanel items={webSubServices} sectionLabel="Specialisations" onOpenModal={onOpenModal} />
);

const AppSubServicesPanel = ({ onOpenModal }) => (
  <SubServicesPanel items={appSubServices} sectionLabel="Platforms" onOpenModal={onOpenModal} />
);

const AnyProjectSubServicesPanel = ({ onOpenModal }) => (
  <SubServicesPanel items={anyProjectSubServices} sectionLabel="Popular Requests" onOpenModal={onOpenModal} />
);

// ─── Main Component ─────────────────────────────────────────────────────────

const Services = () => {
  const navigate = useNavigate();
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const [modalSubService, setModalSubService] = useState(null);

  const activeService =
    services.find((s) => s.id === activeServiceId) || services[0];

  const handleServiceClick = (serviceId) => {
    navigate("/contact", { state: { service: serviceId } });
  };

  const renderVisual = (id) => {
    switch (id) {
      case "web-dev":
        return <WebDevVisual />;
      case "app-dev":
        return <AppVisual />;
      case "branding":
        return <BrandingVisual />;
      case "social-media":
        return <SocialVisual />;
      case "seo-marketing":
        return <SEOVisual />;
      case "investment-deck":
        return <DeckVisual />;
      case "any-project":
        return <AnyProjectVisual />;
      default:
        return <WebDevVisual />;
    }
  };

  return (
    <div className="bg-navam-bg min-h-screen">
      {/* Premium Modal */}
      <PremiumModal
        subService={modalSubService}
        onClose={() => setModalSubService(null)}
        onContact={handleServiceClick}
      />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-gold text-xs font-semibold mb-6 uppercase tracking-wider">
              <Layers size={12} /> Service Catalog
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-[1.1]">
              Tools for every <br /> stage of growth.
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              We provide the technical and creative infrastructure so you can
              focus on your core mission. Explore our suite of specialized
              services.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => navigate("/contact")}>Get Started</Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("explorer")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Services
              </Button>
            </div>
          </motion.div>

          <div className="relative h-[400px] hidden lg:flex items-center justify-center">
            <motion.div
              animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-brand-purple/20 to-blue-500/20 rounded-2xl border border-white/10 backdrop-blur-sm z-10"
            />
            <motion.div
              animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-brand-gold/10 to-orange-500/10 rounded-full border border-white/10 backdrop-blur-sm"
            />
            <div className="relative z-20 bg-[#0f172a] p-6 rounded-xl border border-white/10 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded bg-brand-purple flex items-center justify-center text-white">
                  <Code size={20} />
                </div>
                <div>
                  <div className="text-white font-bold">Engineering</div>
                  <div className="text-xs text-gray-400">Full Stack Support</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/10 rounded w-full"></div>
                <div className="h-2 bg-white/10 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SERVICE EXPLORER */}
      <div id="explorer" className="relative z-20">
        <div className="absolute top-0 left-0 right-0 h-24 bg-navam-bg -translate-y-12 transform -skew-y-2 origin-top-right z-10"></div>
        <section className="bg-navam-surface pt-24 pb-32 relative diagonal-section">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-2">
                Capabilities
              </h2>
              <p className="text-slate-400">
                Everything you need to build and scale.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Service Menu */}
              <div className="lg:col-span-5 space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={`cursor-pointer p-6 rounded-xl transition-all duration-300 border ${
                      activeServiceId === service.id
                        ? "bg-white/5 border-brand-purple/50 shadow-lg"
                        : "bg-transparent border-transparent hover:bg-white/5"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <h3
                        className={`text-lg font-bold transition-colors ${activeServiceId === service.id ? "text-brand-purple" : "text-white"}`}
                      >
                        {service.title}
                      </h3>
                      <ChevronRight
                        className={`lg:hidden transition-transform ${activeServiceId === service.id ? "rotate-90 text-brand-purple" : "text-gray-500"}`}
                        size={20}
                      />
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mt-2">
                      {service.description}
                    </p>

                    {/* Sub-services for web-dev (desktop) */}
                    {service.id === "web-dev" && activeServiceId === "web-dev" && (
                      <div className="hidden lg:block">
                        <WebSubServicesPanel onOpenModal={setModalSubService} />
                      </div>
                    )}

                    {/* Sub-services for app-dev (desktop) */}
                    {service.id === "app-dev" && activeServiceId === "app-dev" && (
                      <div className="hidden lg:block">
                        <AppSubServicesPanel onOpenModal={setModalSubService} />
                      </div>
                    )}

                    {/* Sub-services for any-project (desktop) */}
                    {service.id === "any-project" && activeServiceId === "any-project" && (
                      <div className="hidden lg:block">
                        <AnyProjectSubServicesPanel onOpenModal={setModalSubService} />
                      </div>
                    )}

                    {/* Mobile/Tablet Accordion */}
                    <AnimatePresence>
                      {activeServiceId === service.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="lg:hidden mt-6 overflow-hidden"
                        >
                          {service.id === "web-dev" && (
                            <WebSubServicesPanel onOpenModal={setModalSubService} />
                          )}
                          {service.id === "app-dev" && (
                            <AppSubServicesPanel onOpenModal={setModalSubService} />
                          )}
                          {service.id === "any-project" && (
                            <AnyProjectSubServicesPanel onOpenModal={setModalSubService} />
                          )}

                          <div className="h-[300px] w-full bg-[#020420] rounded-xl border border-white/10 relative overflow-hidden mb-4 mt-4">
                            <div className="w-full h-full scale-90 origin-center">
                              {renderVisual(service.id)}
                            </div>
                          </div>

                          <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between border-t border-white/10 pt-3">
                              <span className="text-brand-gold font-mono text-sm">
                                {service.priceRange || "Custom"}
                              </span>
                              {service.id === "social-media" && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate("/services/social-media");
                                  }}
                                  className="flex items-center text-xs text-gray-400 hover:text-white"
                                >
                                  Details <ArrowRight size={12} className="ml-1" />
                                </button>
                              )}
                              {service.id === "investment-deck" && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate("/services/investors");
                                  }}
                                  className="flex items-center text-xs text-brand-purple hover:text-white"
                                >
                                  <Users size={12} className="mr-1" /> Meet Investors
                                </button>
                              )}
                            </div>
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleServiceClick(service.id);
                              }}
                              className="w-full text-sm"
                            >
                              Start Project
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Right Column: Visual Preview (Sticky - Desktop) */}
              <div className="hidden lg:block lg:col-span-7 relative">
                <div className="sticky top-32 h-[500px] w-full bg-[#020420] rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-2xl font-serif text-white mb-2">
                        {activeService.title}
                      </h3>
                      <p className="text-slate-400 text-sm max-w-md">
                        {activeService.description}
                      </p>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <div className="text-brand-gold font-mono text-lg">
                        {activeService.priceRange || "Custom"}
                      </div>
                      <button
                        onClick={() => handleServiceClick(activeService.id)}
                        className="mt-2 flex items-center text-sm font-bold text-white hover:text-brand-purple transition-colors"
                      >
                        Get Started <ChevronRight size={14} className="ml-1" />
                      </button>
                      {activeService.id === "social-media" && (
                        <button
                          onClick={() => navigate("/services/social-media")}
                          className="mt-3 flex items-center px-4 py-2 bg-white/10 rounded-full text-xs md:text-sm font-semibold text-white hover:bg-brand-purple transition-colors ml-auto border border-white/10"
                        >
                          Deep Dive <ArrowRight size={14} className="ml-2" />
                        </button>
                      )}
                      {activeService.id === "investment-deck" && (
                        <button
                          onClick={() => navigate("/services/investors")}
                          className="mt-3 flex items-center px-4 py-2 bg-brand-gold/10 rounded-full text-xs md:text-sm font-semibold text-brand-gold hover:bg-brand-gold hover:text-black transition-all ml-auto border border-brand-gold/20"
                        >
                          Meet Our Investors <Users size={14} className="ml-2" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {activeService.features?.slice(0, 4).map((f, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex-grow bg-grid rounded-xl border border-white/5 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeServiceId}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                      >
                        {renderVisual(activeServiceId)}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* BENTO BOX GRID */}
      <section className="py-32 max-w-[1200px] mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            The Ecosystem Advantage
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We aren't just an agency. We are a growth platform designed to
            integrate seamlessly with your startup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
          <div className="stripe-card p-8 md:col-span-2 row-span-1 flex flex-col justify-center relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-brand-purple/20 rounded-lg flex items-center justify-center text-brand-purple mb-4">
                <Zap />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Velocity Matters
              </h3>
              <p className="text-slate-400 max-w-md">
                We operate on sprints. Get your MVP to market in weeks, not
                months. Our pre-built modules for auth, payments, and databases
                save hundreds of hours.
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand-purple/10 to-transparent skew-x-12 transform translate-x-10 group-hover:translate-x-0 transition-transform duration-500"></div>
          </div>

          <div className="stripe-card p-8 md:col-span-1 row-span-1 bg-[#0f172a] flex flex-col justify-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500 mb-4">
              <Shield />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Transparent Pricing
            </h3>
            <p className="text-slate-400 text-sm">
              No hidden hourly billing. We prefer flat-rate project fees or
              monthly retainers so you can forecast your burn rate accurately.
            </p>
          </div>

          <div className="stripe-card p-8 md:col-span-1 row-span-1 flex flex-col justify-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500 mb-4">
              <Globe />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Global Talent</h3>
            <p className="text-slate-400 text-sm">
              Access top 1% engineers and designers from around the world
              without the hiring headache.
            </p>
          </div>

          <div className="stripe-card p-8 md:col-span-2 row-span-1 flex items-center justify-between relative overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center text-brand-gold mb-4">
                <Box />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                One Unified Partner
              </h3>
              <p className="text-slate-400">
                Stop managing 5 different freelancers. We handle design, dev,
                and marketing under one roof.
              </p>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-white/5 text-center">
        <h2 className="text-4xl font-serif text-white mb-8">Ready to start?</h2>
        <Button
          onClick={() => navigate("/contact")}
          className="px-10 py-4 text-lg"
        >
          Launch Project
        </Button>
      </section>
    </div>
  );
};

export default Services;