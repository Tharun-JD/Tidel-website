import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import neoImage from './assets/neo.png';

const Announcements = () => {
  const announcementsList = [
    {
      id: 1,
      title: "RECRUITMENT NOTIFICATION FOR THE POST OF ASSISTANT MANAGER (FINANCE & ACCOUNTS)",
      category: "Recruitment",
      isLatest: true,
      description: "TIDEL Park Limited invites applications for the post of Assistant Manager (Finance & Accounts) for its corporate office in Chennai."
    },
    {
      id: 2,
      title: "RECRUITMENT NOTIFICATION FOR THE POST OF ASSISTANT ENGINEER (CIVIL)",
      category: "Recruitment",
      isLatest: true,
      description: "Recruitment drive for Assistant Engineer (Civil) to supervise infrastructure development across our multiple locations in Tamil Nadu."
    },
    {
      id: 3,
      title: "Environmental Clearance - TIDEL Park Pattabiram",
      category: "Environment",
      isLatest: false,
      description: "Notification regarding the environmental clearance obtained for the TIDEL Park project at Pattabiram, Avadi Taluk."
    },
    {
      id: 4,
      title: "E-Tender Notice",
      category: "Tenders",
      isLatest: false,
      description: "Latest E-Tender notices published for maintenance services and infrastructure upgrades. Please visit the Tenders section for details."
    },
    {
      id: 5,
      title: "Environmental Clearance - AEROHUB",
      category: "Environment",
      isLatest: false,
      description: "AEROHUB project environmental clearance and compliance report for public information."
    },
    {
      id: 6,
      title: "Environment Clearance for Trichy TIDEL Park",
      category: "Environment",
      isLatest: false,
      description: "Project details and environmental assessment for the newly proposed Trichy TIDEL Park."
    },
    {
      id: 7,
      title: "Environmental Clearance for Madurai TIDEL Park",
      category: "Environment",
      isLatest: false,
      description: "Environmental clearance status and project overview for the expansion project in Madurai."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] flex flex-col pt-16 md:pt-20"> 
        <div className="relative flex-grow w-full overflow-hidden flex flex-col justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${neoImage})` }} 
          />
          <div className="absolute inset-0 bg-[#002f6c]/70 mix-blend-multiply"></div>
          
          <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-4xl text-left">
              <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-black uppercase tracking-[0.3em] rounded-full mb-6">
                 Official Announcements
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
                TIDEL’S Numero Uno,<br/> the place where it all began
              </h1>
              <div className="w-20 h-1.5 bg-blue-500 mb-8 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-full h-1.5 bg-gradient-to-r from-blue-900 to-blue-400 z-20 shadow-lg"></div>
      </section>

      {/* Announcements Content Section */}
      <section className="flex-grow py-24 px-8 md:px-16 lg:px-24 bg-white relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16 border-b border-gray-100 pb-10 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-3xl font-black text-slate-800 tracking-tight uppercase mb-2">Notice Board</h2>
              <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">Latest Recruitment & Project Updates</p>
            </div>
            <div className="flex gap-3 text-[10px] font-black tracking-widest uppercase">
               <span className="text-[#19438e] cursor-pointer hover:underline underline-offset-8">All Notices</span>
               <span className="text-gray-300">/</span>
               <span className="text-gray-400 cursor-pointer hover:text-[#19438e]">Recruitment</span>
               <span className="text-gray-300">/</span>
               <span className="text-gray-400 cursor-pointer hover:text-[#19438e]">Environment</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {announcementsList.map((ann) => (
              <div 
                key={ann.id} 
                className={`group p-8 md:p-10 rounded-3xl border-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer flex flex-col md:flex-row gap-8 items-start md:items-center ${
                  ann.isLatest 
                  ? 'border-blue-100 bg-blue-50/20 shadow-blue-900/5' 
                  : 'border-slate-50 bg-white shadow-slate-900/5 hover:border-blue-100'
                }`}
              >
                <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${
                  ann.isLatest ? 'bg-blue-600 text-white animate-pulse' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors'
                }`}>
                  {ann.category === 'Recruitment' ? '👤' : ann.category === 'Environment' ? '🌿' : '📑'}
                </div>

                <div className="grow">
                  <div className="flex items-center gap-4 mb-4">
                     <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg ${
                       ann.isLatest ? 'bg-blue-600/10 text-blue-600' : 'bg-slate-100 text-slate-400'
                     }`}>
                       {ann.category}
                     </span>
                     {ann.isLatest && (
                       <span className="text-[10px] font-black text-red-500 uppercase tracking-tighter flex items-center gap-1.5">
                         <span className="w-1.5 h-1.5 rounded-full bg-red-500 block"></span>
                         NEW NOTIFICATION
                       </span>
                     )}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                    {ann.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                    {ann.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-4 md:flex-col md:gap-2">
                   <button className="px-6 py-3 bg-[#19438e] text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all shadow-xl group-hover:scale-110">
                      Download PDF
                   </button>
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">PDF • 1.2 MB</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 md:rounded-4xl bg-[#19438e] overflow-hidden relative group">
             <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="absolute -right-20 -bottom-20 text-[200px] font-black text-white/5 select-none pointer-events-none tracking-tighter italic">UPDATE</div>
             <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="text-center md:text-left">
                   <h4 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Join our Mailing List</h4>
                   <p className="text-blue-200 font-bold uppercase text-xs tracking-widest">Get official notifications delivered straight to your inbox.</p>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                   <input type="email" placeholder="EMAIL ADDRESS" className="bg-white/10 border-2 border-white/20 rounded-2xl px-8 py-5 text-white placeholder-white/40 text-xs font-black tracking-widest focus:outline-none focus:border-white transition-all w-full md:w-80 outline-none" />
                   <button className="bg-white text-[#19438e] px-10 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-50 transition-all shadow-xl active:scale-95">JOIN</button>
                </div>
             </div>
          </div>

          <div className="mt-24 text-center">
             <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">Authorized by TIDEL Park Limited • Copyright 2026</p>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Announcements;
