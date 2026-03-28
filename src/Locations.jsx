import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import pattabiramImage from './assets/pattabiram.png';

const Locations = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex flex-col pt-16 md:pt-20"> 
        <div className="relative flex-grow w-full overflow-hidden flex flex-col justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${pattabiramImage})` }} 
          />
          <div className="absolute inset-0 bg-[#2f619b]/80 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c487b]/90 to-[#1c487b]/30"></div>
          
          <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-2xl text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide drop-shadow-md">
                Our Locations
              </h1>
              <p className="text-base md:text-xl text-white/90 font-light drop-shadow">
                Expanding the TIDEL footprint across Tamil Nadu's rapidly growing IT hubs.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-2 bg-gradient-to-r from-[#19438e] to-[#a3a3a3] z-20"></div>
      </section>

      {/* Content Section */}
      <section className="flex-grow py-16 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">TIDEL Networks</h2>
        <div className="w-16 h-1 bg-[#1c487b] mb-12 mx-auto"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { city: 'Taramani, Chennai', desc: 'The flagship IT park that started it all.', icon: '🏢' },
            { city: 'Pattabiram, Chennai', desc: 'Our newest venture extending the IT corridor.', icon: '🏢' },
            { city: 'Coimbatore', desc: 'A premier IT ecosystem in the textile city.', icon: '🏗️' },
            { city: 'Thanjavur', desc: 'Empowering the cultural heartland with IT capability.', icon: '🏛️' },
            { city: 'Salem', desc: 'Driving tech opportunities in the Steel City.', icon: '🏭' },
            { city: 'Villupuram', desc: 'Developing new vistas for technology expansion.', icon: '📐' }
          ].map((loc, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 rounded-4xl
lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{loc.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{loc.city}</h3>
              <p className="text-gray-600 mb-6">{loc.desc}</p>
              <button className="text-[#1c487b] font-semibold hover:text-[#13326c] transition-colors flex items-center gap-1">
                Explore Facility <span>→</span>
              </button>
            </div>
          ))}
        </div>

      </section>
      <Footer />
    </div>
  );
};

export default Locations;
