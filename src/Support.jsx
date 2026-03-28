import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import thulirImage from './assets/thulir.png';

const Support = () => {
  const [selectedCity, setSelectedCity] = useState("Chennai - Taramani");

  const locations = {
    "Chennai - Taramani": {
      address: "No. 4, Rajiv Gandhi Salai, Taramani, Chennai - 600 113, Tamil Nadu, India.",
      phone: "+91 44 2254 0500 / 0501",
      email: "md@tidelpark.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4855219213!2d80.244837475904!3d12.980630487335682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6255555555%3A0xc3f7a147e45e7d5d!2sTIDEL%20Park!5e0!3m2!1sen!2sin!4v1711540000000!5m2!1sen!2sin",
      icon: "🏢"
    },
    "Chennai - Pattabiram": {
      address: "Pattabiram High Road, Pattabiram, Avadi Taluk, Chennai - 600 072, Tamil Nadu, India.",
      phone: "+91 44 2254 0500 / 0501",
      email: "md@tidelpark.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d80.062!3d13.123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526!2sTIDEL%20Park%20Pattabiram!5e0!3m2!1sen!2sin!4v1711540000000",
      icon: "🏗️"
    },
    "Coimbatore": {
      address: "ELCOT SEZ, IT Park Road, Civil Aerodrome Post, Coimbatore - 641 014, Tamil Nadu, India.",
      phone: "+91 422 251 0000",
      email: "md-cbe@tidelpark.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3!2d77.012!3d11.023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85!2sTIDEL%20Park%20Coimbatore!5e0!3m2!1sen!2sin!4v1711540000000",
      icon: "⛰️"
    },
    "Salem": {
      address: "Kullagoundanoor, Karuppur, Saminaickenpatti, Salem - 636 011, Tamil Nadu, India.",
      phone: "+91 44 2254 0500",
      email: "md@tidelpark.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.5!2d78.072!3d11.723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1!2sTIDEL%20Neo%20Salem!5e0!3m2!1sen!2sin!4v1711540000000",
      icon: "🕍"
    },
    "Thanjavur": {
      address: "Pillayarpatti Village, Thanjavur Taluk, Thanjavur - 613 005, Tamil Nadu, India.",
      phone: "+91 44 2254 0500",
      email: "md@tidelpark.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911!2d79.123!3d10.745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8b!2sTIDEL%20Neo%20Thanjavur!5e0!3m2!1sen!2sin!4v1711540000000",
      icon: "🕌"
    },
    "Thoothukudi": {
      address: "Meelavittan II Village, Thoothukudi Taluk, Thoothukudi - 628 001, Tamil Nadu, India.",
      phone: "+91 44 2254 0500",
      email: "md@tidelpark.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941!2d78.145!3d8.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03!2sTIDEL%20Neo%20Thoothukudi!5e0!3m2!1sen!2sin!4v1711540000000",
      icon: "🚢"
    },
    "Tiruppur": {
      address: "Rakkiyapalayam Village, Avinashi Taluk, Tiruppur - 641 654, Tamil Nadu, India.",
      phone: "+91 44 2254 0500",
      email: "md@tidelpark.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915!2d77.345!3d11.223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9!2sTIDEL%20Neo%20Tiruppur!5e0!3m2!1sen!2sin!4v1711540000000",
      icon: "👚"
    },
    "Villupuram": {
      address: "Trichy-Chennai Highway, Villupuram - 605 602, Tamil Nadu, India. (8km from Pondicherry)",
      phone: "+91 44 2254 0500",
      email: "md@tidelpark.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896!2d79.445!3d11.923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53!2sTIDEL%20Neo%20Villupuram!5e0!3m2!1sen!2sin!4v1711540000000",
      icon: "🏙️"
    },
    "Karaikudi": {
      address: "Kalanivasal, Karaikudi, Sivaganga District - 630 001, Tamil Nadu, India.",
      phone: "+91 44 2254 0500",
      email: "md@tidelpark.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920!2d78.745!3d10.023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9!2sTIDEL%20Neo%20Karaikudi!5e0!3m2!1sen!2sin!4v1711540000000",
      icon: "🏰"
    }
  };

  const currentLoc = locations[selectedCity];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] flex flex-col pt-16 md:pt-20"> 
        <div className="relative flex-grow w-full overflow-hidden flex flex-col justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${thulirImage})` }} 
          />
          <div className="absolute inset-0 bg-[#002f6c]/70 mix-blend-multiply"></div>
          
          <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-black uppercase tracking-[0.3em] rounded-full mb-6 italic">
                 Support & Location
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
                Towards the Future
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl leading-relaxed">
                 More than just a technology park. We are here to assist you with any inquiries or facility management needs.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-1.5 bg-[#19438e] z-20 shadow-lg"></div>
      </section>

      {/* Dynamic Location Switcher Section */}
      <section id="location" className="py-24 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          
          {/* Map Side */}
          <div className="lg:w-2/3 h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-50 group relative">
             <div className="absolute top-8 left-8 z-10">
                <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 animate-slide-in">
                   <span className="text-3xl">{currentLoc.icon}</span>
                   <div>
                      <h4 className="text-sm font-black text-[#19438e] leading-none uppercase tracking-widest">{selectedCity}</h4>
                      <p className="text-[10px] font-bold text-gray-400 mt-1">Live Map View</p>
                   </div>
                </div>
             </div>
             
             <iframe 
               title="TIDEL Map"
               src={currentLoc.mapUrl}
               className="w-full h-full grayscale-[0.2] transition-all duration-700 hover:grayscale-0 bg-slate-100"
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>

          {/* Selector & Address Side */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-xs font-black text-[#19438e] uppercase tracking-[0.4em] mb-4">Location Center</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-800 mb-10 tracking-tighter">Choose a City</h3>
            
            <div className="relative mb-12">
               <select 
                 className="w-full bg-[#f8fafc] border-2 border-slate-50 text-slate-800 font-bold px-6 py-5 rounded-2xl appearance-none focus:outline-none focus:border-[#19438e] transition-all cursor-pointer shadow-sm hover:shadow-md text-sm tracking-widest uppercase"
                 value={selectedCity}
                 onChange={(e) => setSelectedCity(e.target.value)}
               >
                 {Object.keys(locations).map(city => (
                   <option key={city} value={city}>{city}</option>
                 ))}
               </select>
               <span className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#19438e] text-xl">▼</span>
            </div>

            <div className="space-y-10 animate-fade-in" key={selectedCity}>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-[#19438e] transition-colors duration-500">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest block mb-4">Mailing Address</span>
                <h4 className="text-xl font-black text-slate-800 mb-4 group-hover:text-[#19438e] transition-colors">TIDEL Park Ltd.</h4>
                <p className="text-gray-500 leading-relaxed font-semibold text-sm">
                  {currentLoc.address}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                 <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <span className="text-[10px] font-black text-[#19438e] uppercase tracking-widest block mb-1">Phone</span>
                    <p className="text-sm font-black text-slate-700">{currentLoc.phone}</p>
                 </div>
                 <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <span className="text-[10px] font-black text-[#19438e] uppercase tracking-widest block mb-1">Email</span>
                    <p className="text-sm font-black text-slate-700 truncate">{currentLoc.email}</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Key Contacts Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-slate-700 text-center mb-16 uppercase tracking-[0.2em]">Key Contacts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tenders Card */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-sm flex flex-col items-center">
              <div className="w-full py-4 px-6 border-b border-gray-100">
                 <h3 className="text-lg font-bold text-slate-700 text-center">Tenders</h3>
              </div>
              <div className="p-10 text-center flex flex-col justify-center grow">
                 <p className="text-sm font-black text-slate-800 mb-1">Sandeep Nanduri IAS</p>
                 <p className="text-xs font-medium text-slate-500 mb-1">Managing Director</p>
                 <p className="text-xs font-medium text-slate-500">TIDEL Park Ltd.</p>
              </div>
            </div>

            {/* Feedback & Complaints Card */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-sm flex flex-col items-center">
              <div className="w-full py-4 px-6 border-b border-gray-100">
                 <h3 className="text-lg font-bold text-slate-700 text-center">Feedback & Complaints</h3>
              </div>
              <div className="p-10 text-center flex flex-col justify-center grow">
                 <p className="text-xs font-medium text-slate-500 mb-2">MD Office</p>
                 <p className="text-xs font-medium text-slate-500 mb-2">+91 44 22541634</p>
                 <p className="text-xs font-medium text-slate-500">md@tidelpark.com</p>
              </div>
            </div>

            {/* PR & Media Card */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-sm flex flex-col items-center">
              <div className="w-full py-4 px-6 border-b border-gray-100">
                 <h3 className="text-lg font-bold text-slate-700 text-center">PR & Media</h3>
              </div>
              <div className="p-10 text-center flex flex-col justify-center grow">
                 <p className="text-xs font-medium text-slate-500 mb-2">D Sadiq Ahmed</p>
                 <p className="text-xs font-medium text-slate-500 mb-2">Marketing Head</p>
                 <p className="text-xs font-medium text-slate-500 mb-2">+91 99400 75962</p>
                 <p className="text-xs font-medium text-slate-500">marketing@tidelpark.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Brand Footer */}
      <section className="py-12 px-8 flex justify-center bg-white border-t border-slate-100">
         <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em] italic">© 2026 TIDEL PARK LIMITED • Numero Uno</span>
      </section>
      <Footer />
    </div>
  );
};

export default Support;
