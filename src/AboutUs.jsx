import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import heroImage from './assets/hero2.png';

// Board of Directors Portraits
import arunRoyImg from './assets/Board of directors/Thiru. V. Arun Roy IAS.png';
import sandeepNanduriImg from './assets/Board of directors/Thiru. Sandeep Nanduri, IAS.png';
import mariamPallaviImg from './assets/Board of directors/Tmt. Mariam Pallavi Baldev, IAS.png';
import pratikTayalImg from './assets/Board of directors/Thiru. Pratik Tayal, IAS.png';
import kpKarthikeyanImg from './assets/Board of directors/Thiru. KP Karthikeyan, IAS.png';
import chitraNagappanImg from './assets/Board of directors/Tmt. Chitra Nagappan.png';
import sureshRamanImg from './assets/Board of directors/Thiru. Suresh Raman.png';
import muraliKrishnaImg from './assets/Board of directors/Thiru. M V R Murali Krishna.png';
import padmavathySrikantImg from './assets/Board of directors/Tmt. R. Padmavathy Srikant.png';
import murlidharImg from './assets/Board of directors/Thiru. K.Murlidhar.png';
import inTackSongImg from './assets/Board of directors/Thiru. In Tack Song.png';

const AboutUs = () => {
  // Handle native hash scroll on mount or hash change
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
      }, 100);
    }
  }, []);

  const boardOfDirectors = [
    { 
      name: 'Thiru. V. Arun Roy IAS', 
      role: 'Chairman Secretary to Government - Industries Department',
      image: arunRoyImg
    },
    { 
      name: 'Thiru. Sandeep Nanduri, IAS', 
      role: 'Managing Director TIDCO / TIDEL',
      image: sandeepNanduriImg
    },
    { 
      name: 'Tmt. Mariam Pallavi Baldev, IAS', 
      role: 'Director Special Secretary to Government, Industries Department',
      image: mariamPallaviImg
    },
    { 
      name: 'Thiru. Pratik Tayal, IAS', 
      role: 'Joint Secretary (Budget) to Government, Finance Department',
      image: pratikTayalImg
    },
    { 
      name: 'Thiru. KP Karthikeyan, IAS', 
      role: 'Director ELCOT - Managing Director',
      image: kpKarthikeyanImg
    },
    { 
      name: 'Tmt. Chitra Nagappan', 
      role: 'Independent Director TIDEL PARK LTD',
      image: chitraNagappanImg
    },
    { 
      name: 'Thiru. Suresh Raman', 
      role: 'Independant Director - Member',
      image: sureshRamanImg
    },
    { 
      name: 'Thiru. M V R Murali Krishna', 
      role: 'Nominee Director GM Network I, Chennai Circle State Bank of India',
      image: muraliKrishnaImg
    },
    { 
      name: 'Tmt. R. Padmavathy Srikant', 
      role: 'Field General Manager, Indian Bank',
      image: padmavathySrikantImg
    },
    { 
      name: 'Thiru. K.Murlidhar', 
      role: 'Nominee Director LIC Zonal Manager - South Zone',
      image: murlidharImg
    },
    { 
      name: 'Thiru. In Tack Song', 
      role: 'Director General Manager Hyundai Engineering',
      image: inTackSongImg
    }
  ];

  const auditCommittee = [
    { 
      name: 'Thiru. Pratik Tayal, IAS', 
      role: 'Joint Secretary (Budget) to Government, Finance Department, Chairman of the Committee',
      image: pratikTayalImg
    },
    { 
      name: 'Tmt. Chitra Nagappan', 
      role: 'Independent Director, Member',
      image: chitraNagappanImg
    },
    { 
      name: 'Thiru. Suresh Raman', 
      role: 'Independent Director – Member',
      image: sureshRamanImg
    }
  ];

  const nrcCommittee = [
    { 
      name: 'Thiru. Pratik Tayal, IAS', 
      role: 'Deputy Secretary to Government (Budget), Finance Department, Chairman of the Committee',
      image: pratikTayalImg
    },
    { 
      name: 'Tmt. Chitra Nagappan', 
      role: 'Independent Director, Member',
      image: chitraNagappanImg
    },
    { 
      name: 'Thiru. Suresh Raman', 
      role: 'Independent Director – Member',
      image: sureshRamanImg
    }
  ];

  const tenderCommittee = [
    { 
      name: 'Thiru. Pratik Tayal, IAS', 
      role: 'Joint Secretary (Budget) to Government, Finance Department, Chairman of the Committee',
      image: pratikTayalImg
    },
    { 
      name: 'Thiru. Sandeep Nanduri IAS', 
      role: 'Managing Director, TIDCO / TIDEL Park, Member',
      image: sandeepNanduriImg
    },
    { 
      name: 'Tmt. R Padmavathy Srikant', 
      role: 'Field General Manager, Indian Bank, Member',
      image: padmavathySrikantImg
    }
  ];

  const CommitteeCard = ({ member }) => (
    <div className="bg-white border-2 border-gray-100 rounded-4xl flex flex-col items-center p-8 transition-all hover:bg-gray-50/50 group hover:shadow-2xl hover:-translate-y-2 duration-500 shadow-sm hover:border-[#19438e]">
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="text-center">
        <h4 className="text-sm font-black text-gray-900 mb-2 uppercase italic tracking-tight">{member.name}</h4>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed max-w-[200px] mx-auto">{member.role}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex flex-col pt-16 md:pt-20"> 
        <div className="relative grow w-full overflow-hidden flex flex-col justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${heroImage})` }} 
          />
          <div className="absolute inset-0 bg-[#2f619b]/80 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-linear-to-r from-[#1c487b]/90 to-[#1c487b]/30"></div>
          
          <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-2xl text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide drop-shadow-md">
                About Us
              </h1>
              <p className="text-base md:text-xl text-white/90 font-light drop-shadow">
                Pioneering IT Infrastructure in Tamil Nadu and fostering global innovation.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-2 bg-linear-to-r from-[#19438e] to-[#a3a3a3] z-20"></div>
      </section>

      {/* Content Section */}
      <section className="grow py-16 px-8 md:px-16 lg:px-24 xl:px-32 bg-white font-sans">
        <div className="max-w-6xl mx-auto">
          
          {/* Legacy */}
          <div id="tidel-legacy" className="mb-20 scroll-mt-24 transition-opacity duration-700">
            <h2 className="text-3xl font-black mb-6 text-gray-900 uppercase tracking-tight italic">TIDEL Legacy</h2>
            <div className="w-16 h-1 bg-[#1c487b] mb-8"></div>
            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl font-medium">
              Since its inception, TIDEL Park has stood as a monumental testament to Chennai's rise as a premier IT destination. Conceived as a joint venture between TIDCO and ELCOT, TIDEL seamlessly blends state-of-the-art technological infrastructure with sustainable growth. 
              <br/><br/>
              Today, our spaces are celebrated not just for their scale, but for the vibrant community of professionals, global corporations, and startups that call them home. 
            </p>
          </div>

          {/* Legacy Video Section */}
          <div className="mb-32 relative">
            <h3 className="text-3xl md:text-[2.5rem] text-center font-light text-slate-600 mb-12 tracking-tight">
              Watch the legacy of <span className="font-black text-slate-900">TIDEL</span>
            </h3>
            
            <div className="relative max-w-5xl mx-auto px-4 py-12">
              {/* Blue Vertical Bar Accent (Left) */}
              <div className="absolute -left-4 -top-8 md:-left-12 md:-top-16 w-12 md:w-24 h-[60%] md:h-[85%] bg-[#1c487b] z-0 shadow-lg" />
              
              {/* Orange-Red Box Accent (Bottom Right) */}
              <div className="absolute -right-4 -bottom-8 md:-right-16 md:-bottom-16 w-32 md:w-80 h-32 md:h-80 bg-[#ee4c23] z-0 shadow-lg" />
              
              {/* Video Container */}
              <div className="relative z-10 aspect-video w-full bg-black rounded-sm overflow-hidden shadow-2xl border-4 border-white">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ejoGJ-QLC8Y?modestbranding=1&rel=0&iv_load_policy=3&loop=1&playlist=ejoGJ-QLC8Y&autoplay=1&mute=1" 
                  title="Legacy of TIDEL" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div id="vision-mission" className="mb-24 scroll-mt-24">
            <h2 className="text-3xl font-black mb-6 text-gray-900 uppercase tracking-tight italic">Vision & Mission</h2>
            <div className="w-16 h-1 bg-[#1c487b] mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-[#f8f9fb] border-l-8 border-[#19438e] p-10 rounded-4xl shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 duration-500">
                <h3 className="text-2xl font-black text-[#19438e] mb-6 uppercase italic">Vision</h3>
                <p className="text-gray-800 leading-relaxed text-lg font-bold">
                  To ensure quality service & enhance and sustain customer satisfaction with a commitment to comply with applicable requirements through an ongoing process of continual improvement.
                </p>
              </div>
              <div className="bg-[#f8f9fb] border-l-8 border-[#19438e] p-10 rounded-4xl shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 duration-500">
                <h3 className="text-2xl font-black text-[#19438e] mb-6 uppercase italic">Mission</h3>
                <p className="text-gray-800 leading-relaxed text-lg mb-6 font-bold">
                  To achieve quality by providing our customers with:
                </p>
                <ul className="space-y-4 text-gray-800">
                  <li className="flex gap-4 items-start font-bold">
                    <span className="text-[#19438e] mt-1 shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                    </span> 
                    Safe, secure and clean environment
                  </li>
                  <li className="flex gap-4 items-start font-bold">
                    <span className="text-[#19438e] mt-1 shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                    </span> 
                    Reliable & quality service
                  </li>
                  <li className="flex gap-4 items-start font-bold">
                    <span className="text-[#19438e] mt-1 shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                    </span> 
                    Instant response to service request
                  </li>
                  <li className="flex gap-4 items-start font-bold">
                    <span className="text-[#19438e] mt-1 shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                    </span> 
                    Improved satisfaction by minimising complaints
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Board of Directors */}
          <div id="board-of-directors" className="mb-24 scroll-mt-24">
            <h2 className="text-3xl font-black mb-6 text-gray-900 uppercase tracking-tight italic text-center md:text-left">Board of Directors</h2>
            <div className="w-16 h-1 bg-[#1c487b] mb-12 mx-auto md:mx-0"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {boardOfDirectors.map((director, idx) => (
                <CommitteeCard key={idx} member={director} />
              ))}
            </div>
          </div>

          {/* Additional Committees */}
          <div className="space-y-24 mb-24">
            {/* Audit Committee */}
            <div id="audit-committee" className="scroll-mt-24">
              <h2 className="text-xl font-black mb-6 text-[#19438e] uppercase italic border-b-2 border-red-100 pb-2">Audit Committee</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {auditCommittee.map((member, idx) => (
                  <CommitteeCard key={idx} member={member} />
                ))}
              </div>
            </div>

            {/* NRC Committee */}
            <div id="nrc-committee" className="scroll-mt-24">
              <h2 className="text-xl font-black mb-6 text-[#19438e] uppercase italic border-b-2 border-red-100 pb-2">Nomination and Remuneration Committee</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {nrcCommittee.map((member, idx) => (
                  <CommitteeCard key={idx} member={member} />
                ))}
              </div>
            </div>

            {/* Tender Committee */}
            <div id="tender-committee" className="scroll-mt-24">
              <h2 className="text-xl font-black mb-6 text-[#19438e] uppercase italic border-b-2 border-red-100 pb-2">Board Tender Evaluation Committee</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {tenderCommittee.map((member, idx) => (
                  <CommitteeCard key={idx} member={member} />
                ))}
              </div>
            </div>
          </div>

          {/* Careers */}
          <div id="careers" className="scroll-mt-24 bg-[#19438e] p-12 rounded-4xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tight italic">Work With Us</h2>
              <div className="w-16 h-1 bg-red-600 mb-8"></div>
              <p className="text-blue-100 leading-relaxed text-lg mb-8 max-w-2xl font-bold">
                Join a vibrant team that shapes the IT landscape of tomorrow. At TIDEL, we foster a culture of excellence, innovation, and continuous learning.
              </p>
              <button className="bg-white text-[#19438e] hover:bg-red-600 hover:text-white font-black py-4 px-10 text-xs tracking-[0.2em] transition-all duration-300 uppercase italic rounded-lg shadow-xl translate-y-0 hover:-translate-y-1">
                VIEW OPENINGS
              </button>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};


export default AboutUs;
