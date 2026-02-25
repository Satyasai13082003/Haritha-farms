import React from 'react';
import { motion } from 'motion/react';

// A realistic grass patch with multiple blades
const GrassPatch = ({ x, y, scale = 1, delay = 0, opacity = 0.2, color = "currentColor" }) => {
  const windVariant = {
    animate: {
      skewX: [0, 10, 4, 15, 0], 
      rotate: [0, 2, 1, 3, 0],
      scaleY: [1, 0.98, 1, 0.95, 1] 
    },
    transition: {
      duration: 3 + Math.random() * 2, 
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay 
    }
  };

  const baseSize = 24;

  return (
    <motion.div 
      className="absolute origin-bottom pointer-events-none"
      style={{ left: `${x}%`, bottom: `${y}%`, opacity, zIndex: 10, color }}
      {...windVariant}
    >
      <svg 
        width={baseSize * scale} 
        height={baseSize * scale} 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id={`grassGradient-${x}-${y}`} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path d="M10 100 Q15 60 5 40 L8 40 Q20 60 20 100 Z" fill={`url(#grassGradient-${x}-${y})`} />
        <path d="M25 100 Q30 50 15 10 L20 10 Q35 50 35 100 Z" fill={`url(#grassGradient-${x}-${y})`} />
        <path d="M45 100 Q50 40 45 5 L50 5 Q60 40 55 100 Z" fill={`url(#grassGradient-${x}-${y})`} />
        <path d="M65 100 Q65 50 80 20 L75 20 Q60 50 75 100 Z" fill={`url(#grassGradient-${x}-${y})`} />
        <path d="M85 100 Q80 70 95 50 L92 50 Q85 70 95 100 Z" fill={`url(#grassGradient-${x}-${y})`} />
      </svg>
    </motion.div>
  );
};

// Simplified monochrome flower
const Flower = ({ x, y, delay = 0 }) => (
    <motion.div 
        className="absolute w-1 h-1 rounded-full z-20 bg-white"
        style={{ left: `${x}%`, top: `${y}%` }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
    />
);

const Tree = ({ x, y, size = 1, delay = 0, opacity = 0.07 }) => (
  <div 
    className="absolute origin-bottom text-white"
    style={{ left: `${x}%`, bottom: `${y}%`, opacity }}
  >
    <motion.svg 
      width={100 * size} 
      height={160 * size} 
      viewBox="0 0 100 160"
      animate={{ skewX: [0, 2, 0, -1, 0] }}
      transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <path d="M48 160 L48 40 L52 40 L52 160 Z" fill="currentColor" />
      <path d="M50 20 L20 60 L45 55 L15 95 L45 90 L15 130 L85 130 L55 90 L85 95 L60 55 L80 60 Z" fill="currentColor" />
    </motion.svg>
  </div>
);

const RoundTree = ({ x, y, size = 1, delay = 0, opacity = 0.05 }) => (
    <div 
    className="absolute origin-bottom text-white"
    style={{ right: `${x}%`, bottom: `${y}%`, opacity }}
  >
    <motion.svg 
      width={100 * size} 
      height={160 * size} 
      viewBox="0 0 100 160"
      animate={{ skewX: [0, -2, 0, 1, 0] }}
      transition={{ duration: 5 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay }}
    >
       <path d="M45 160 L50 60 L55 160 Z" fill="currentColor" />
       <circle cx="50" cy="50" r="40" fill="currentColor" />
       <circle cx="30" cy="60" r="25" fill="currentColor" />
       <circle cx="70" cy="60" r="25" fill="currentColor" />
    </motion.svg>
  </div>
);

// Barn House Component - Adjusted position to be firmly on the ground
const BarnHouse = () => (
    <div className="absolute bottom-[4%] left-[2%] z-10 opacity-80 text-white/90">
        <svg width="100" height="80" viewBox="0 0 100 80">
            <defs>
                <linearGradient id="barnGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
                </linearGradient>
            </defs>
            {/* Main Structure */}
            <path d="M10 80 L10 40 L50 10 L90 40 L90 80 Z" fill="url(#barnGradient)" />
            {/* Roof Overhang */}
            <path d="M5 42 L50 8 L95 42 L95 38 L50 4 L5 38 Z" fill="white" />
            {/* Door */}
            <rect x="35" y="50" width="30" height="30" rx="2" fill="currentColor" fillOpacity="0.2" />
            <path d="M35 50 L65 80 M65 50 L35 80" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
            {/* Window */}
            <circle cx="50" cy="28" r="8" fill="currentColor" fillOpacity="0.2" />
            <path d="M42 28 L58 28 M50 20 L50 36" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
            {/* Silo */}
            <rect x="92" y="30" width="20" height="50" rx="2" fill="url(#barnGradient)" fillOpacity="0.8" />
            <path d="M92 30 Q102 15 112 30" fill="white" />
        </svg>
    </div>
);

// Splash animation
const Splash = ({ x, y, delay }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y, width: 30, height: 10 }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
        opacity: [0, 0.3, 0], 
        scale: [0.5, 1.8],
        borderWidth: ["1px", "0px"]
    }}
    transition={{
        duration: 0.8,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 5.2, 
        ease: "easeOut"
    }}
  >
      <div className="w-full h-full border border-white/40 rounded-[100%]" />
  </motion.div>
);

const Fish = ({ delay = 0, size = 1 }) => {
    return (
        <motion.div
            className="absolute z-20 text-white"
            style={{ 
                width: 30 * size, 
                height: 30 * size,
                left: '20%',
                top: '50%' 
            }}
            initial={{ opacity: 0, x: 0, y: 0, rotate: -45 }}
            animate={{ 
                opacity: [0, 0.6, 0.6, 0], 
                x: [0, 40 * size, 80 * size],
                y: [0, -40 * size, 0], 
                rotate: [-60, 0, 60]
            }}
            transition={{
                duration: 1.5,
                delay: delay,
                repeat: Infinity,
                repeatDelay: 4.5,
                ease: [0.45, 0, 0.55, 1],
                times: [0, 0.2, 0.8, 1] 
            }}
        >
             <svg viewBox="0 0 50 30" className="w-full h-full fill-white/60">
                 <path d="M48,15 Q40,5 25,5 Q10,5 2,15 Q10,25 25,25 Q40,25 48,15 Z M35,5 L30,0 L25,5 Z M5,15 L0,10 L0,20 Z" />
             </svg>
        </motion.div>
    );
};

export function FarmAnimation() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Fireflies/Particles */}
      <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
              <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                  initial={{ 
                      x: Math.random() * 100 + "%", 
                      y: Math.random() * 100 + "%",
                      opacity: 0 
                  }}
                  animate={{ 
                      y: [null, Math.random() * -50],
                      opacity: [0, 0.4, 0]
                  }}
                  transition={{ 
                      duration: 3 + Math.random() * 4, 
                      repeat: Infinity, 
                      delay: Math.random() * 5 
                  }}
              />
          ))}
      </div>

      {/* THE STAGE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64">
         
         {/* The Hill Path - Reference for grounding */}
         <div className="absolute inset-0 text-white opacity-[0.05]">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0,100 Q50,30 100,100 L100,100 L0,100 Z" fill="currentColor" />
            </svg>
         </div>

         {/* Barn House - Left Bottom Corner - Grounded */}
         <BarnHouse />

         {/* --- VEGETATION & WIND EFFECT --- */}
         
         <Tree x={-2} y={10} size={1.5} delay={0} opacity={0.08} />
         <Tree x={12} y={20} size={0.8} delay={1} opacity={0.04} />
         <Tree x={5} y={15} size={0.6} delay={2} opacity={0.03} />
         
         <RoundTree x={-5} y={8} size={1.6} delay={0.5} opacity={0.06} />
         <RoundTree x={8} y={18} size={0.7} delay={1.5} opacity={0.04} />
         
         <GrassPatch x={-2} y={2} delay={0} scale={1.2} opacity={0.15} />
         <GrassPatch x={5} y={8} delay={0.2} scale={1.0} opacity={0.12} />
         <GrassPatch x={12} y={16} delay={0.4} scale={1.1} opacity={0.14} />
         <GrassPatch x={18} y={22} delay={0.6} scale={0.9} opacity={0.10} />
         <GrassPatch x={24} y={28} delay={0.8} scale={1.3} opacity={0.16} />
         <GrassPatch x={30} y={32} delay={1.0} scale={1.0} opacity={0.13} />
         <GrassPatch x={36} y={36} delay={1.2} scale={1.1} opacity={0.15} />
         <GrassPatch x={42} y={38} delay={1.4} scale={0.9} opacity={0.12} />
         <GrassPatch x={48} y={39} delay={1.6} scale={1.2} opacity={0.16} />
         <GrassPatch x={54} y={38} delay={1.8} scale={1.0} opacity={0.14} />
         <GrassPatch x={60} y={36} delay={2.0} scale={1.1} opacity={0.13} />
         <GrassPatch x={66} y={32} delay={2.2} scale={0.9} opacity={0.11} />
         <GrassPatch x={72} y={28} delay={2.4} scale={1.3} opacity={0.15} />
         <GrassPatch x={78} y={22} delay={2.6} scale={1.0} opacity={0.12} />
         
         <GrassPatch x={15} y={10} delay={0.5} scale={1.5} opacity={0.08} />
         <GrassPatch x={35} y={25} delay={1.5} scale={1.5} opacity={0.08} />
         <GrassPatch x={65} y={25} delay={2.5} scale={1.5} opacity={0.08} />

         {/* --- POND (Bottom Right Corner) --- */}
         <div className="absolute bottom-[-10%] right-[-2%] w-[45%] h-[40%] z-0">
             
             {/* 1. Pond Boundary/Bank */}
             <div className="absolute inset-0 transform scale-105">
                 <svg viewBox="0 0 100 50" className="w-full h-full">
                     <ellipse cx="50" cy="28" rx="50" ry="24" fill="black" className="opacity-20" />
                 </svg>
             </div>

             {/* 2. Water Body Surface */}
             <div className="absolute inset-0 w-full h-full">
                <svg viewBox="0 0 100 50" className="w-full h-full">
                    <defs>
                        <radialGradient id="pondGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.1" /> 
                            <stop offset="60%" stopColor="#115e59" stopOpacity="0.1" /> 
                            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" /> 
                        </radialGradient>
                    </defs>
                    <ellipse cx="50" cy="28" rx="48" ry="22" fill="url(#pondGradient)" />
                    <ellipse cx="50" cy="20" rx="30" ry="10" fill="#ffffff" fillOpacity="0.03" className="blur-md" />
                </svg>
             </div>

             {/* 3. Pond Bank Vegetation */}
             <div className="absolute inset-0">
                <GrassPatch x={5} y={55} scale={0.5} opacity={0.15} />
                <Flower x={8} y={35} delay={0} />
                <Flower x={12} y={32} delay={1} />
                
                <GrassPatch x={15} y={65} scale={0.6} opacity={0.12} />
                <Flower x={18} y={25} delay={2} />

                <GrassPatch x={30} y={75} scale={0.5} opacity={0.1} />
                <Flower x={35} y={15} delay={0.5} />
                
                <GrassPatch x={50} y={78} scale={0.5} opacity={0.12} />
                <Flower x={55} y={15} delay={1.5} />

                <GrassPatch x={70} y={72} scale={0.6} opacity={0.15} />
                <Flower x={75} y={20} delay={2.5} />

                <GrassPatch x={85} y={60} scale={0.5} opacity={0.1} />
                <Flower x={88} y={30} delay={0.8} />
             </div>
             
             {/* 4. Water Ripples */}
             <div className="absolute inset-0 overflow-hidden rounded-full transform scale-x-110 translate-y-4 opacity-30">
                 <motion.div 
                    className="absolute inset-0 border border-white/10 rounded-[100%]"
                    animate={{ scale: [0.9, 1.05], opacity: [0.3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 />
             </div>

             {/* 5. Jumping Fish */}
             <div className="absolute inset-0 z-10">
                 <Fish delay={0} size={1.2} />
                 <Splash x="50%" y="60%" delay={1.4} />

                 <Fish delay={3} size={1} />
                 <Splash x="70%" y="55%" delay={4.4} />
             </div>
         </div>


         {/* --- ANIMALS (Silhouettes, High Visibility, Strictly Grounded) --- */}
         
         {/* Cow Pair - Left slope */}
         <motion.div 
           className="absolute bottom-[18%] left-[18%] origin-bottom z-10"
           animate={{ 
               rotate: [0, -3, 0, 0, -5, 0], 
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
         >
           <div className="relative">
                <span className="text-5xl md:text-7xl filter brightness-0 invert opacity-90 drop-shadow-lg">🐄</span>
                <div className="absolute -bottom-1 left-2 w-3/4 h-2 bg-black/40 rounded-full blur-sm" />
           </div>
         </motion.div>
         
         {/* Cow 2 - Lowered to contact ground */}
         <motion.div 
           className="absolute bottom-[15%] left-[14%] origin-bottom"
           animate={{ 
               rotate: [0, -2, 0, -4, 0], 
           }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
         >
           <div className="relative transform scale-90">
                <span className="text-5xl md:text-7xl filter brightness-0 invert opacity-80 drop-shadow-lg">🐄</span>
                <div className="absolute -bottom-1 left-2 w-3/4 h-2 bg-black/40 rounded-full blur-sm" />
           </div>
         </motion.div>

         {/* Sheep Pair - Top Peak */}
         <motion.div 
           className="absolute bottom-[34%] left-[45%] origin-bottom z-10"
           animate={{ 
               y: [0, -2, 0],
           }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         >
           <div className="relative">
               <span className="text-4xl md:text-6xl filter brightness-0 invert opacity-90 drop-shadow-md">🐑</span>
               <div className="absolute -bottom-1 left-1 w-3/4 h-1.5 bg-black/40 rounded-full blur-sm" />
           </div>
         </motion.div>

         {/* Sheep 2 - Top Peak */}
         <motion.div 
           className="absolute bottom-[34%] left-[53%] origin-bottom"
           animate={{ 
               rotate: [0, 5, 0, 5, 0], 
           }}
           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
         >
           <div className="relative transform scale-x-[-1]">
               <span className="text-3xl md:text-5xl filter brightness-0 invert opacity-80 drop-shadow-md">🐑</span>
                <div className="absolute -bottom-1 left-1 w-3/4 h-1.5 bg-black/40 rounded-full blur-sm" />
           </div>
         </motion.div>

         {/* Hen Pair - Right Slope */}
         {/* Hen 1 - Lowered to contact ground */}
         <motion.div 
           className="absolute bottom-[16%] right-[15%] origin-bottom z-10"
           animate={{ 
               rotate: [0, 15, 0, 15, 0, 0, 0], 
           }}
           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
         >
           <div className="relative transform scale-x-[-1]">
              <span className="text-2xl md:text-4xl filter brightness-0 invert opacity-90 drop-shadow-sm">🐓</span>
               <div className="absolute -bottom-1 left-1 w-3/4 h-1 bg-black/40 rounded-full blur-sm" />
           </div>
         </motion.div>

         {/* Hen 2 - Adjusted to contact ground */}
         <motion.div 
           className="absolute bottom-[21%] right-[20%] origin-bottom"
           animate={{ 
               rotate: [0, 0, 15, 0, 15, 0], 
           }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
         >
           <div className="relative">
              <span className="text-2xl md:text-4xl filter brightness-0 invert opacity-80 drop-shadow-sm">🐓</span>
               <div className="absolute -bottom-1 left-1 w-3/4 h-1 bg-black/40 rounded-full blur-sm" />
           </div>
         </motion.div>

         {/* Bee Pair - Flying - Slightly Lower */}
         <motion.div 
           className="absolute bottom-[40%] left-[30%]"
           animate={{ 
               x: [0, 50, 20, 80, 0],
               y: [0, -20, 10, -30, 0],
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         >
            <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
            >
               <span className="text-2xl filter brightness-0 invert opacity-80 drop-shadow-sm">🐝</span>
            </motion.div>
         </motion.div>

         <motion.div 
           className="absolute bottom-[38%] left-[28%]"
           animate={{ 
               x: [0, 50, 20, 80, 0],
               y: [0, -20, 10, -30, 0],
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 0.5 }}
         >
            <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
            >
               <span className="text-xl filter brightness-0 invert opacity-70 drop-shadow-sm">🐝</span>
            </motion.div>
         </motion.div>

      </div>
    </div>
  );
}
