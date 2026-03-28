import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import tidelImage from './assets/tidel.png';

const Tenders = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] flex flex-col pt-16 md:pt-20"> 
        <div className="relative flex-grow w-full overflow-hidden flex flex-col justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${tidelImage})` }} 
          />
          {/* Blue Overlay to match aesthetic */}
          <div className="absolute inset-0 bg-[#2f619b]/90 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[#000000]/40"></div>
          
          <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide drop-shadow-md">
              Tenders & Procurement
            </h1>
            <div className="w-16 h-1 bg-[#19438e] mx-auto mt-6"></div>
          </div>
        </div>
        <div className="w-full h-1 bg-[#1c487b] z-20"></div>
      </section>

      {/* Content Section */}
      <section className="flex-grow py-16 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-gray-800">Active Tenders</h2>
            <div className="flex gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none">
                <option>All Locations</option>
                <option>Chennai</option>
                <option>Coimbatore</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { id: 'TIDEL/2026/01', title: 'Comprehensive Maintenance of HVAC Systems at TIDEL Park Chennai', date: 'March 15, 2026', status: 'Active' },
              { id: 'TIDEL/2026/02', title: 'Supply and Installation of IT Infrastructure at Neo Pattabiram', date: 'March 20, 2026', status: 'Active' },
              { id: 'TIDEL/2026/03', title: 'Security Surveillance System Upgrade', date: 'April 02, 2026', status: 'Active' },
            ].map((tender, index) => (
              <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 md:mb-0">
                  <span className="text-xs font-bold text-[#1c487b] bg-blue-50 px-2 py-1 rounded inline-block mb-2">{tender.id}</span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{tender.title}</h3>
                  <p className="text-sm text-gray-500">Closing Date: <span className="font-medium text-gray-700">{tender.date}</span></p>
                </div>
                <div>
                  <button className="bg-white border border-[#1c487b] text-[#1c487b] hover:bg-blue-50 font-semibold py-2 px-6 rounded transition-colors text-sm">
                    View Documents
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">No more active tenders found.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tenders;
