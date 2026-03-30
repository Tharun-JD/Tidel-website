import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import neoImage from './assets/neo.png';
import hallImage from './assets/hall.png';
import spaceImage from './assets/space.png';
import carImage from './assets/car.png';
import foodImage from './assets/food.png';
import trainImage from './assets/train.png';

// Import preview gallery images
import g1 from './assets/gallery/g1.png';
import g2 from './assets/gallery/g2.png';
import g3 from './assets/gallery/g3.png';
import g4 from './assets/gallery/g4.png';

const WhyTidel = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          const yOffset = -100; // Offset for sticky navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const facilities = [
    {
      id: "parking",
      title: "Ample Parking Space",
      description: "The standard parking at TIDEL Taramani is well-organized and has the capacity to park 800 four-wheelers and 2000 two-wheelers, ensuring the safety and security of all employees' vehicles 24x7.",
      icon: carImage
    },
    {
      id: "food-court",
      title: "Food Court",
      description: "Top restaurants and caterers have taken stalls to deliver quality and tasty food, while the food court itself is a comfortable space for food, conversations and more!",
      icon: foodImage
    },
    {
      id: "mrts",
      title: "MRTS Overpass",
      description: "TIDEL is constantly working toward making the place better and convenient. In one such development, the MRTS overpass is aimed to help people reach office conveniently.",
      icon: trainImage
    },
    {
      id: "auditorium",
      title: "650 Seat Auditorium",
      description: "Whether it is an Annual day or Family day in your company, it can all be done at TIDEL. This state-of-the-art auditorium can handle events of any scale.",
      icon: hallImage
    },
    {
      id: "conference",
      title: "150 Seat Conference Hall",
      description: "Host client meetings or pitches with ease in our conference hall equipped with project and audio facilities.",
      icon: hallImage
    },
    {
      id: "promo",
      title: "Promotional Space",
      description: "TIDEL has the right spaces for promotion and installations, including 2 inside the building and 1 in the parking lot.",
      icon: spaceImage
    }
  ];

  const highlights = [
    "Strategic location",
    "Ample Parking Space",
    "Multi-Cuisine Food Court",
    "MRTS Overpass",
    "650 Seat World Class Auditorium",
    "150 Seat Spacious Conference Hall",
    "Promotional Space",
    "Banking & ATM Services",
    "24/7 Support & Security"
  ];

  const testimonialsData = [
    { name: 'Rajesh Kumar', role: 'CEO, Tech Solutions', text: 'Tidel Park has been instrumental in our growth.' },
    { name: 'Priya Sharma', role: 'Founder, Digital Innovations', text: 'Strategic location and world-class facilities.' },
    { name: 'Arun Prabhu', role: 'CTO, Cloud Solutions', text: 'Commitment to technology and security is exceptional.' },
    { name: 'Suresh Raina', role: 'Product Manager, Animaker', text: 'Transformative experience for our team. The infra is unmatched.' },
    { name: 'Anjali Devi', role: 'Operations Lead, BNY Mellon', text: 'Security and global standards at its best. A heritage of tech excellence.' },
    { name: 'Karthik Raja', role: 'Founder, Codoid', text: 'Scalable workspace that grows with your vision at TIDEL.' },
    { name: 'Deepika Iyer', role: 'HR Manager, Sify', text: 'World-class amenities that keep our employees energized and productive.' },
    { name: 'Vikram Singh', role: 'Director, Verizon', text: 'An ecosystem where innovation truly thrives and scales globally.' }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] flex flex-col pt-16 md:pt-20"> 
        <div className="relative flex-grow w-full overflow-hidden flex flex-col justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${neoImage})` }} 
          />
          <div className="absolute inset-0 bg-[#002f6c]/70 mix-blend-multiply"></div>
          
          <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
                Workspaces for the ready
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-medium max-w-xl">
                TIDEL is the definition of the right places, right time, you just have to be ready!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-1.5 bg-linear-to-r from-[#19438e] to-[#60a5fa] z-20"></div>
      </section>

      {/* Facilities Section */}
      <section id="cn_fac_title" className="py-12 md:py-20 px-4 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#19438e] mb-4">Facilities</h2>
            <div className="w-24 h-1 bg-[#19438e] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              TIDEL is the perfect space for organizations and people of all kinds. It is an experience with amenities that parallel international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac) => (
              <div key={fac.id} className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
                <div className="w-16 h-16 mb-6 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                  <img src={fac.icon} alt={fac.title} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{fac.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {fac.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-12 md:py-20 px-4 md:px-16 lg:px-24 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 border-l-8 border-[#19438e] pl-6">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#19438e] text-white flex items-center justify-center shrink-0 font-bold">
                  {index + 1}
                </div>
                <span className="text-lg font-semibold text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonial" className="py-24 bg-white overflow-hidden border-y border-gray-100">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-[#19438e] mb-6">Testimonials</h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Success stories from the global organizations and visionaries who paved their way to greatness within the TIDEL ecosystem.
          </p>
        </div>

        <div className="relative flex w-full overflow-hidden py-12">
          <motion.div 
            className="flex gap-8 whitespace-nowrap px-4"
            animate={{ x: [0, -2800] }} 
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            whileHover={{ transition: { duration: 0 } }}
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {testimonialsData.map((test, idx) => (
                  <div key={`${i}-${idx}`} className="w-[450px] inline-block bg-[#f8fafc] rounded-2xl shadow-sm border border-gray-100 p-10 group hover:shadow-xl transition-all duration-500 whitespace-normal">
                    <div className="text-red-500 text-4xl mb-6 opacity-40 group-hover:opacity-100 transition-opacity font-serif">"</div>
                    <p className="text-gray-600 italic mb-8 leading-relaxed text-lg underline-offset-4 decoration-blue-200/50">
                      {test.text}
                    </p>
                    <div className="flex items-center mt-auto border-t border-gray-200 pt-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mr-4 flex items-center justify-center font-bold text-blue-600">
                        {test.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{test.name}</h4>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">{test.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Life at TIDEL Section */}
      <section id="lifeattidel" className="py-12 md:py-24 px-4 md:px-16 lg:px-24 bg-[#19438e] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight italic">Experience #LifeAtTIDEL</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
             Take a tour for a glimpse of the TIDEL life where professional achievement meets personal well-being.
          </p>

          {/* New Preview Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 px-4 md:px-0">
             {[g1, g2, g3, g4].map((img, idx) => (
                <div key={idx} className="aspect-square rounded-2xl overflow-hidden shadow-2xl group border-2 border-white/10">
                   <img 
                     src={img} 
                     alt={`Life At Tidel - ${idx + 1}`} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                </div>
             ))}
          </div>

          <Link to="/life-at-tidel">
            <button className="bg-white text-[#19438e] px-12 py-5 rounded-full font-black text-sm tracking-widest uppercase hover:bg-slate-100 transition-all shadow-2xl hover:scale-105 active:scale-95 group flex items-center gap-4 mx-auto">
              VIEW FULL GALLERY
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyTidel;
