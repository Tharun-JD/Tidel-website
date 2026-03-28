import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
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

  const testimonials = [
    {
      author: "Shanker",
      text: "TIDEL is a place where we feel secure. Besides this, we have a very friendly environment and the facility support we receive is extremely good."
    },
    {
      author: "Ajay Jain",
      text: "Tidel Park's strategic location and seamless business continuity infrastructure has been the backbone for Guardian India's presence here since our inception."
    },
    {
      author: "Saraswathy K.",
      text: "The brand identity of Tidel Park enriched Pointel Solutions' presence in business. Our sincere appreciation to the entire Tidel Park team."
    }
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
      <section id="cn_fac_title" className="py-20 px-8 md:px-16 lg:px-24 bg-white">
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
      <section id="highlights" className="py-20 px-8 md:px-16 lg:px-24 bg-[#f1f5f9]">
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
      <section id="testimonial" className="py-20 px-8 md:px-16 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#19438e] mb-16">Testimonials</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div key={index} className="bg-[#f8fafc] p-10 rounded-2xl relative border border-gray-100">
                <div className="text-6xl text-[#19438e]/10 absolute top-4 left-4 font-serif">"</div>
                <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                  {test.text}
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold text-gray-800 text-lg">— {test.author}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at TIDEL Section */}
      <section id="lifeattidel" className="py-24 px-8 md:px-16 lg:px-24 bg-[#19438e] text-white">
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

      {/* Corporate Footer Section Callout */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-gray-500">
            <div>
               <h4 className="font-bold text-gray-800 mb-6 uppercase tracking-wider">About Us</h4>
               <ul className="space-y-3">
                  <li>Vision</li>
                  <li>History</li>
                  <li>Board of Directors</li>
                  <li>Careers</li>
               </ul>
            </div>
            <div>
               <h4 className="font-bold text-gray-800 mb-6 uppercase tracking-wider">Find Space</h4>
               <ul className="space-y-3">
                  <li>Salem</li>
                  <li>Thanjavur</li>
                  <li>Coimbatore</li>
                  <li>Villupuram</li>
               </ul>
            </div>
            <div>
               <h4 className="font-bold text-gray-800 mb-6 uppercase tracking-wider">Why TIDEL</h4>
               <ul className="space-y-3">
                  <li>Facilities</li>
                  <li>Highlights</li>
                  <li>Testimonials</li>
                  <li>Life at TIDEL</li>
               </ul>
            </div>
            <div>
               <h4 className="font-bold text-gray-800 mb-6 uppercase tracking-wider">Resources</h4>
               <ul className="space-y-3">
                  <li>Blog</li>
                  <li>Events</li>
                  <li>Tenders</li>
               </ul>
            </div>
         </div>
      </section>
      <Footer />
    </div>
  );
};

export default WhyTidel;
