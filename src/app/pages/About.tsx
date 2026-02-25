import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { ArrowRight, Star, Sun, Wind, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import soilImage from "../../assets/soil.png";

// --- Assets ---
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1714588166786-c3791ea796c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMGNpbmVtYXRpYyUyMGFlcmlhbCUyMGZvcmVzdCUyMGdyZWVufGVufDF8fHx8MTc2ODIxNDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
  soil: soilImage,
  chicken: "https://images.unsplash.com/photo-1535806111783-1cc5dfa1179e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlJTIwcmFuZ2UlMjBjaGlja2VuJTIwZmFybSUyMGNpbmVtYXRpYyUyMGRhcmt8ZW58MXx8fHwxNzY4MjE0MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  veg: "https://images.unsplash.com/photo-1589666728137-8cabeb7179b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdmVnZXRhYmxlcyUyMGZhcm0lMjBjaW5lbWF0aWMlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzY4MjE0MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  farmer: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1080&auto=format&fit=crop"
};

// --- Components ---

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// 1. Hero Section
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F0]">
      <motion.div style={{ y, opacity }} className="z-10 text-center px-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1 border border-primary/20 rounded-full text-xs uppercase tracking-[0.3em] text-primary/80">
            Est. 2024 • Haritha Farms
          </span>
        </motion.div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-primary leading-[0.9] tracking-tight mb-8">
          The Planet<br/>
          <span className="italic text-secondary">Pledge</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground font-light leading-relaxed">
          We don't just farm. We curate an ecosystem where nature dictates the rules, and we simply follow.
        </p>
      </motion.div>
      
      {/* Background Texture/Grain could go here */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
    </section>
  );
};

// 2. Stacking Cards Section
const StackingCards = () => {
  const cards = [
    {
      title: "Soil Stewardship",
      description: "It starts beneath our feet. We invest in regenerative practices that restore the earth's natural biodiversity.",
      image: IMAGES.soil,
      color: "bg-[#1A3C34]", // Primary Dark Green
      textColor: "text-[#F5F5F0]",
      subText: "text-[#F5F5F0]/60",
      number: "01"
    },
    {
      title: "Animal Freedom",
      description: "Free-range isn't a label; it's a lifestyle. Our animals roam, forage, and live as nature intended.",
      image: IMAGES.chicken,
      color: "bg-[#F5F5F0]", // Cream
      textColor: "text-[#1A3C34]",
      subText: "text-[#1A3C34]/60",
      number: "02"
    },
    {
      title: "Pure Harvest",
      description: "Zero chemicals, zero compromises. Just the purest produce harvested at peak nutritional value.",
      image: IMAGES.veg,
      color: "bg-[#8B5A2B]", // Secondary Brown
      textColor: "text-[#F5F5F0]",
      subText: "text-[#F5F5F0]/60",
      number: "03"
    }
  ];

  return (
    <div className="relative">
      {cards.map((card, index) => (
        <Card key={index} {...card} index={index} range={cards.length} />
      ))}
    </div>
  );
};

const Card = ({ title, description, image, color, textColor, subText, number, index, range }: any) => {
  return (
    <div className={`sticky top-0 h-screen flex flex-col md:flex-row overflow-hidden ${color}`}>
      <div className="flex-1 flex flex-col justify-center p-12 md:p-24 relative z-10">
        <FadeUp>
          
          <h2 className={`text-5xl md:text-7xl font-serif mb-8 leading-none ${textColor}`}>
            {title}
          </h2>
          <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-md ${subText}`}>
            {description}
          </p>
          <div className="mt-12 flex items-center gap-4">
             <div className={`h-px w-24 ${textColor} opacity-20`}></div>
             <span className={`text-xs uppercase tracking-widest ${textColor} opacity-60`}>Scroll to reveal</span>
          </div>
        </FadeUp>
      </div>
      
      <div className="flex-1 h-[50vh] md:h-auto relative overflow-hidden">
        <motion.div 
           initial={{ scale: 1.2 }}
           whileInView={{ scale: 1 }}
           transition={{ duration: 1.5 }}
           className="w-full h-full"
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </motion.div>
        {/* Overlay gradient for text readability on mobile if needed, though split layout handles it */}
      </div>
    </div>
  );
};

// 3. Marquee Text
const Marquee = () => {
  return (
    <div className="py-24 bg-primary overflow-hidden whitespace-nowrap flex items-center">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-16 items-center"
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="text-8xl md:text-9xl font-serif text-transparent stroke-text opacity-30">
              ETHICAL
            </span>
            <Star className="text-secondary w-12 h-12" />
            <span className="text-8xl md:text-9xl font-serif text-white opacity-80">
              ORGANIC
            </span>
            <Star className="text-secondary w-12 h-12" />
          </div>
        ))}
      </motion.div>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

// 4. Horizontal Scroll Section
const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]); // 3 panels, so move 2/3rds

  return (
    <section ref={targetRef} className="relative w-full h-[300vh] bg-[#F5F5F0]" style={{ position: 'relative' }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden relative">
        <motion.div style={{ x }} className="flex relative">
          {/* Panel 1 */}
          <div className="h-screen w-screen flex-shrink-0 flex items-center justify-center p-12 border-r border-primary/10">
            <div className="max-w-3xl text-center">
               <span className="text-secondary text-sm font-bold tracking-[0.3em] uppercase mb-8 block">Our History</span>
               <h3 className="text-5xl md:text-7xl font-serif text-primary mb-8">2020: The Beginning</h3>
               <p className="text-xl text-muted-foreground font-light">It started with a single acre and a simple idea: farming should heal the earth, not hurt it.</p>
            </div>
          </div>
          
          {/* Panel 2 */}
          <div className="h-screen w-screen flex-shrink-0 flex items-center justify-center p-12 bg-[#EAECE5] border-r border-primary/10">
             <div className="max-w-3xl text-center">
               <span className="text-secondary text-sm font-bold tracking-[0.3em] uppercase mb-8 block">Growth</span>
               <h3 className="text-5xl md:text-7xl font-serif text-primary mb-8">2022: Expanding Roots</h3>
               <p className="text-xl text-muted-foreground font-light">We partnered with local communities, sharing our seeds and our knowledge to create a collective of ethical growers.</p>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="h-screen w-screen flex-shrink-0 flex items-center justify-center p-12 bg-primary text-white">
             <div className="max-w-3xl text-center">
               <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-8 block">Today</span>
               <h3 className="text-5xl md:text-7xl font-serif text-white mb-8">2024: The Ecosystem</h3>
               <p className="text-xl text-white/80 font-light mb-12">Now a fully sustainable ecosystem, Haritha Farms sets the standard for transparency in the region.</p>
               <Button asChild size="lg" className="bg-white text-primary hover:bg-accent hover:text-primary-foreground rounded-none px-12 py-8 text-sm tracking-widest uppercase">
                 <Link to="/contact">Join the Movement</Link>
               </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 5. Grid Collage
const GridCollage = () => {
  return (
    <section className="bg-background py-32 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          
          {/* Large Item */}
          <div className="md:col-span-6 md:row-span-2 relative group overflow-hidden">
             <img src={IMAGES.farmer} alt="Farming" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
             <div className="absolute bottom-8 left-8 text-white">
               <h4 className="text-3xl font-serif italic">The Hands</h4>
             </div>
          </div>

          {/* Small Item */}
          <div className="md:col-span-3 md:row-span-1 bg-[#1A3C34] flex items-center justify-center p-8 text-center group hover:bg-[#15302a] transition-colors">
             <div>
               <Sun className="w-12 h-12 text-accent mx-auto mb-4" />
               <p className="text-white/80 text-sm uppercase tracking-widest">Solar Powered</p>
             </div>
          </div>

          {/* Small Item */}
          <div className="md:col-span-3 md:row-span-1 relative overflow-hidden group">
             <img src={IMAGES.veg} alt="Veg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* Wide Item */}
          <div className="md:col-span-6 md:row-span-1 bg-[#EAECE5] p-12 flex flex-col justify-center">
             <h4 className="text-3xl font-serif text-primary mb-4">Visit Us</h4>
             <p className="text-muted-foreground mb-6">Experience the farm life firsthand. Book a tour and see where your food comes from.</p>
             <Link to="/visit" className="flex items-center gap-2 text-secondary uppercase tracking-widest text-xs hover:gap-4 transition-all">
               Book a Tour <ArrowRight size={16} />
             </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

import { CTASection } from '../components/ui/CTASection';

export default function About() {
  return (
    <div className="bg-background min-h-screen relative">
      <Hero />
      <StackingCards />
      <Marquee />
      <HorizontalScroll />
      <GridCollage />
      <CTASection 
        title="Be Part of the Ecosystem"
        description="Whether you are a chef, a family, or a fellow farmer, there is a place for you at Haritha Farms."
        primaryAction={{ text: "Contact Us", link: "/contact" }}
        secondaryAction={{ text: "Visit The Farm", link: "/visit" }}
      />
    </div>
  );
}
