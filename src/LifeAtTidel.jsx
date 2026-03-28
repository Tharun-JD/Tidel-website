import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';

// Import gallery images
import g1 from './assets/gallery/g1.png';
import g2 from './assets/gallery/g2.png';
import g3 from './assets/gallery/g3.png';
import g4 from './assets/gallery/g4.png';
import g5 from './assets/gallery/g5.png';
import g6 from './assets/gallery/g6.png';
import g7 from './assets/gallery/g7.png';
import g8 from './assets/gallery/g8.png';
import g9 from './assets/gallery/g9.png';
import g10 from './assets/gallery/g10.png';
import g11 from './assets/gallery/g11.png';
import g12 from './assets/gallery/g12.png';
import g13 from './assets/gallery/g13.png';

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13];
const galleryData = images.map((img, i) => ({
  id: i,
  src: img,
  title: `TIDEL Moment #${i + 1}`,
  category: i % 3 === 0 ? 'Workplace' : i % 3 === 1 ? 'Community' : 'Events'
}));

const LifeAtTidel = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index = 0) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryData.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex flex-col pt-20 bg-[#f8fafc] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#19438e_1px,transparent_1px)] bg-size-[40px_40px]"></div>
        </div>
        
        <div className="relative z-10 grow flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#19438e] text-xs font-black uppercase tracking-[0.3em] rounded-4xl mb-6 italic animate-fade-in">
               Vibrant Ecosystem
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-800 mb-6 tracking-tighter leading-tight animate-slide-in">
              Let's take a tour for a <br/>
              <span className="text-[#19438e]">glimpse of the TIDEL life</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed animate-fade-in-up">
              Where professional excellence meets personal growth. Experience a community that thrives beyond the conventional workspace.
            </p>
          </div>
        </div>
        <div className="w-full h-1 bg-linear-to-r from-[#19438e] via-blue-400 to-[#19438e]"></div>
      </section>

      {/* Experience #LifeAtTIDEL Section - Mosaic Grid */}
      <section id="lifeattidel" className="py-24 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
               <h2 className="text-xs font-black text-[#19438e] uppercase tracking-[0.4em] mb-4">Experience</h2>
               <h3 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter italic">#LifeAtTIDEL</h3>
            </div>
            <button 
              onClick={() => openGallery(0)}
              className="group bg-[#19438e] text-white px-10 py-4 rounded-full font-black text-sm tracking-widest uppercase hover:bg-slate-800 transition-all shadow-xl hover:scale-105 flex items-center gap-4"
            >
              View Gallery
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Dynamic Masonry-style Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {galleryData.map((img, index) => {
              // Custom spanning for a dynamic masonry look
              const isLarge = index === 0 || index === 7;
              const isWide = index === 2 || index === 10;
              const isTall = index === 1 || index === 8;

              return (
                <div 
                  key={img.id}
                  className={`relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                    isLarge ? 'col-span-2 row-span-2' : 
                    isWide ? 'col-span-2 row-span-1' :
                    isTall ? 'col-span-1 row-span-2' :
                    'col-span-1 row-span-1'
                  }`}
                  onClick={() => openGallery(index)}
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-1">{img.category}</p>
                    <p className="text-white font-bold text-sm tracking-widest uppercase">{img.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section / Callout */}
      <section className="py-20 px-8 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
               <h4 className="text-4xl md:text-6xl font-black mb-2 text-[#60a5fa]">450+</h4>
               <p className="text-xs uppercase tracking-[0.4em] font-bold text-slate-400">Collaborating Partners</p>
            </div>
            <div>
               <h4 className="text-4xl md:text-6xl font-black mb-2 text-[#60a5fa]">24/7</h4>
               <p className="text-xs uppercase tracking-[0.4em] font-bold text-slate-400">Managed Ecosystem</p>
            </div>
            <div>
               <h4 className="text-4xl md:text-6xl font-black mb-2 text-[#60a5fa]">15+</h4>
               <p className="text-xs uppercase tracking-[0.4em] font-bold text-slate-400">State-of-the-Art Facilities</p>
            </div>
         </div>
      </section>

      {/* Full Gallery Lightbox */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10"
            onClick={closeGallery}
          >
            {/* Close Button */}
            <button 
              className="absolute top-8 right-8 text-white text-4xl hover:text-blue-400 transition-colors z-110"
              onClick={closeGallery}
            >
              ✕
            </button>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl transition-all z-110"
              onClick={prevImage}
            >
              ←
            </button>
            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl transition-all z-110"
              onClick={nextImage}
            >
              →
            </button>

            {/* Main Image Container */}
            <motion.div 
               key={currentImageIndex}
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               className="relative max-w-5xl w-full h-[70vh] flex flex-col items-center"
               onClick={(e) => e.stopPropagation()}
            >
               <img 
                 src={galleryData[currentImageIndex].src} 
                 alt={galleryData[currentImageIndex].title}
                 className="w-full h-full object-contain rounded-xl shadow-2xl"
               />
               <div className="mt-8 text-center">
                  <h4 className="text-white text-2xl font-black uppercase tracking-widest leading-none mb-2">
                     {galleryData[currentImageIndex].title}
                  </h4>
                  <p className="text-blue-400 font-bold uppercase tracking-[0.4em] text-[10px]">
                     {galleryData[currentImageIndex].category} • {currentImageIndex + 1} / {galleryData.length}
                  </p>
               </div>
            </motion.div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-8 left-0 w-full px-8 flex justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
               {galleryData.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={(e) => {
                       e.stopPropagation();
                       setCurrentImageIndex(idx);
                    }}
                    className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIndex ? 'border-blue-400 scale-110 opacity-100' : 'border-transparent opacity-40 hover:opacity-100'}`}
                  >
                    <img src={img.src} className="w-full h-full object-cover" alt="Thumb" />
                  </button>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Brand Footer */}
      <section className="py-12 px-8 flex justify-center bg-white border-t border-slate-100">
         <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em] italic">© 2026 TIDEL PARK LIMITED • Numero Uno</span>
      </section>
      <Footer />
    </div>
  );
};

export default LifeAtTidel;
