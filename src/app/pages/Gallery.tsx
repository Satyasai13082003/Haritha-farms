import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FadeIn } from '../components/ui/fade-in';
import { CTASection } from '../components/ui/CTASection';
import murrelFishImage from "../../assets/fish.png";

const images = [
    "https://images.unsplash.com/photo-1554300331-bfe3177f1b66?q=80&w=1080", // Sheep
    "https://images.unsplash.com/photo-1758357935338-936a266501d7?q=80&w=1080", // Sheep 2
    "https://images.unsplash.com/photo-1765460220129-233c27c4eafb?q=80&w=1080", // Hen
    murrelFishImage, // Fish
    "https://images.unsplash.com/photo-1641455459887-6ae7b095d1bb?q=80&w=1920", // Landscape
    "https://images.unsplash.com/photo-1759155895472-c4fd4716b158?q=80&w=1080", // Green field
    "https://images.unsplash.com/photo-1601408648796-349272138e57?q=80&w=1080", // Hands
    "https://images.unsplash.com/photo-1761055141447-38e2667b9c69?q=80&w=1080" // Sunset field
];

export default function Gallery() {
  return (
    <div className="bg-background pt-24 min-h-screen">
      <section className="py-20 px-6 text-center border-b border-border/40">
         <FadeIn>
            <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Visual Stories</span>
            <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6">Life on the Farm</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed">
              A visual journey through life at Haritha Farms—from grazing sheep and free-range hens to clean fish ponds and the people who care for them every day.
            </p>
         </FadeIn>
      </section>

      <section className="px-6 py-24">
        <div className="container mx-auto max-w-7xl">
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
             <Masonry gutter="1.5rem">
               {images.map((src, i) => (
                 <FadeIn key={i} delay={i * 0.1}>
                    <div className="overflow-hidden rounded-sm hover:opacity-95 transition-opacity duration-500 bg-muted/20">
                      <img src={src} alt="Haritha Farms Gallery" className="w-full h-auto block" />
                    </div>
                 </FadeIn>
               ))}
             </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      <CTASection 
         title="See it in Person"
         description="Photographs capture moments, but visits capture the soul. We invite you to walk our fields."
         primaryAction={{ text: "Plan a Visit", link: "/visit" }}
      />
    </div>
  );
}
