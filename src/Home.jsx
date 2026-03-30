import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import CustomDropdown from './components/CustomDropdown';
import heroImage from './assets/hero.png';
import heroImage2 from './assets/hero2.png';
import heroImage3 from './assets/hero3.png';
import tidelImage from './assets/tidel.png';
import neoImage from './assets/neo.png';
import thulirImage from './assets/thulir.png';
import coimbatoreImage from './assets/coimbatore.png';
import pattabiramImage from './assets/pattabiram.png';
import carImage from './assets/car.png';
import locationGif from './assets/locat.gif';
import location1Image from './assets/location1.png';
import foodImage from './assets/food.png';
import hallImage from './assets/hall.png';
import techImage from './assets/tech.png';
import trainImage from './assets/train.png';
import atmImage from './assets/atm.png';
import ecoImage from './assets/eco.png';
import securityImage from './assets/security.png';
import spaceImage from './assets/space.png';
import logoImage from './assets/logo.png';
// Company images
import animakerImage from './assets/company/animaker.png';
import arcadiaImage from './assets/company/arcadia.png';
import bnyImage from './assets/company/bny.png';
import codoidImage from './assets/company/codoid.png';
import ctsImage from './assets/company/cts.png';
import eyImage from './assets/company/ey.png';
import guardianImage from './assets/company/guardian.png';
import sifyImage from './assets/company/sify.png';
import tcsImage from './assets/company/tcs.png';
import verizonImage from './assets/company/verizon.png';
import williamsLeaImage from './assets/company/williams lea.png';
// Bank images
import bankOfAmericaImage from './assets/bank/bank of america.png';
import canaraBankImage from './assets/bank/canara bank.png';
import cholaImage from './assets/bank/chola.png';
import hdbImage from './assets/bank/hdb.png';
import icicImage from './assets/bank/icic.png';
import kotakImage from './assets/bank/kotak.png';
import tataImage from './assets/bank/tata.png';
// Gallery images
import gallery1 from './assets/gallery/g1.png';
import gallery2 from './assets/gallery/g2.png';
import gallery3 from './assets/gallery/g3.png';
import gallery4 from './assets/gallery/g4.png';
import gallery5 from './assets/gallery/g5.png';
import gallery6 from './assets/gallery/g6.png';
import gallery7 from './assets/gallery/g7.png';
import gallery8 from './assets/gallery/g8.png';
import gallery9 from './assets/gallery/g9.png';
import gallery10 from './assets/gallery/g10.png';
import gallery11 from './assets/gallery/g11.png';
import gallery12 from './assets/gallery/g12.png';
import gallery13 from './assets/gallery/g13.png';

const Home = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const playerRef = useRef(null);
  const cardsRef = useRef([]);
  const projectCardsRef = useRef([]);
  const lifeCardsRef = useRef([]);
  const featureCardsRef = useRef([]);

  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13];

  const rotatingLines = [
    "Tidel Park stands as a symbol of Chennai's fast-growing tech innovation.",
    "Where ideas turn into reality — that's the power of Tidel Park.",
    "A hub where startups and global tech giants grow together.",
    "Tidel Park drives the digital future of Chennai every day.",
    "More than an IT park — it's where technology meets opportunity."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    projectCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    lifeCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    featureCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);
            else if (event.data === window.YT.PlayerState.PAUSED) setIsPlaying(false);
          },
        },
      });
    };
  }, []);

  useEffect(() => {
    const hero1 = document.getElementById('hero1');
    const hero2 = document.getElementById('hero2');
    const hero3 = document.getElementById('hero3');
    let currentSlide = 1;

    const slideInterval = setInterval(() => {
      const current = document.getElementById(`hero${currentSlide}`);
      if (current) current.style.opacity = '0';

      currentSlide = currentSlide === 3 ? 1 : currentSlide + 1;
      const next = document.getElementById(`hero${currentSlide}`);
      if (next) next.style.opacity = '1';
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const displayDuration = 5000;
    const animationDuration = 1200;
    
    const textInterval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentLineIndex((prevIndex) =>
          prevIndex === rotatingLines.length - 1 ? 0 : prevIndex + 1
        );
        setIsTyping(true);
      }, animationDuration);
    }, displayDuration + animationDuration);

    return () => clearInterval(textInterval);
  }, [rotatingLines.length]);

  useEffect(() => {
    const timers = galleryImages.map((_, idx) =>
      setTimeout(() => {
        setLoadedImages(prev => new Set(prev).add(idx));
      }, 300 + idx * 250)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-top transition-opacity duration-1000" style={{ 
            backgroundImage: `url(${heroImage})`,
            opacity: 1,
            backgroundPosition: 'top center',
            backgroundSize: '100% 100%'
          }} id="hero1" />
          <div className="absolute inset-0 bg-cover bg-top transition-opacity duration-1000" style={{ 
            backgroundImage: `url(${heroImage2})`,
            opacity: 0,
            backgroundPosition: 'top center',
            backgroundSize: '100% 100%'
          }} id="hero2" />
          <div className="absolute inset-0 bg-cover bg-top transition-opacity duration-1000" style={{ 
            backgroundImage: `url(${heroImage3})`,
            opacity: 0,
            backgroundPosition: 'top center',
            backgroundSize: '100% 100%'
          }} id="hero3" />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="relative z-20 hero-content">
            <div className="welcome-text-reveal" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-medium mb-2 mt-8 text-white">
                Welcome to Tidel Park
              </h1>
            </div>
            <div className="typing-fade-in" style={{ animationDelay: '1.5s' }}>
              <p className={`text-[clamp(1rem,2vw,1.5rem)] mb-6 text-gray-200 ${isTyping ? 'rotating-text-roller' : 'rotating-text-roller out'}`}>
                {rotatingLines[currentLineIndex]}
              </p>
            </div>
            <button 
              onClick={() => {
                const section = document.getElementById('find-space');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hero-find-space-btn bg-red-600 text-white px-9 py-3 mb-4 rounded font-medium"
            >
              Find Space
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="our-developments" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Our Developments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our premium projects designed for comfort, education, and recreation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TIDEL Park */}
            <div ref={(el) => (projectCardsRef.current[0] = el)} className="location-card development-card bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col group hover:shadow-md transition-all duration-300 relative overflow-hidden fade-in-up">
              <div className="shine-effect" />
              <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `url(${tidelImage})` }} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white mb-4">TIDEL Park</h3>
                 <div className="development-meta mb-4">
                  <div className="meta-item"><span className="meta-label">Area:</span><span className="meta-value">1.2 Million Sq. Ft.</span></div>
                  <div className="meta-item"><span className="meta-label">Established:</span><span className="meta-value">2000</span></div>
                </div>
                <p className="text-gray-600 mb-4 transition-colors duration-300 group-hover:text-white">TIDEL Park is a world-class IT infrastructure hub that fosters innovation and collaboration.</p>
                <div className="flex items-center text-red-600 font-medium group-hover:translate-x-1 transition-all duration-300 group-hover:text-white">
                  Explore Park <span className="ml-2">→</span>
                </div>
              </div>
            </div>
            {/* TIDEL Neo */}
            <div ref={(el) => (projectCardsRef.current[1] = el)} className="location-card development-card bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col group hover:shadow-md transition-all duration-300 relative overflow-hidden fade-in-up">
              <div className="shine-effect" />
              <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `url(${neoImage})` }} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white mb-4">TIDEL Neo</h3>
                <div className="development-meta mb-4">
                  <div className="meta-item"><span className="meta-label">Area:</span><span className="meta-value">800,000 Sq. Ft.</span></div>
                  <div className="meta-item"><span className="meta-label">Focus:</span><span className="meta-value">Startups</span></div>
                </div>
                <p className="text-gray-600 mb-4 transition-colors duration-300 group-hover:text-white">A platform to incubate IT and commercial startup environments in Tamil Nadu.</p>
                <div className="flex items-center text-red-600 font-medium group-hover:translate-x-1 transition-all duration-300 group-hover:text-white">
                  Explore Neo <span className="ml-2">→</span>
                </div>
              </div>
            </div>
            {/* TIDEL Thulir */}
            <div ref={(el) => (projectCardsRef.current[2] = el)} className="location-card development-card bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col group hover:shadow-md transition-all duration-300 relative overflow-hidden fade-in-up">
              <div className="shine-effect" />
              <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `url(${thulirImage})` }} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white mb-4">TIDEL Thulir</h3>
                 <div className="development-meta mb-4">
                  <div className="meta-item"><span className="meta-label">Area:</span><span className="meta-value">500,000 Sq. Ft.</span></div>
                  <div className="meta-item"><span className="meta-label">Established:</span><span className="meta-value">2018</span></div>
                </div>
                <p className="text-gray-600 mb-4 transition-colors duration-300 group-hover:text-white">An educational initiative aimed at nurturing talent and skills development.</p>
                <div className="flex items-center text-red-600 font-medium group-hover:translate-x-1 transition-all duration-300 group-hover:text-white">
                  Explore Thulir <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest at TIDEL Section */}
      <section id="latest-at-tidel" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tight mb-4">Latest at TIDEL</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">All things and everything TIDEL: from opportunities to events.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-500 group">
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">Competitive Pricing</h3>
              <p className="text-gray-600 leading-relaxed">Office space at competitive rates suitable for various budgets.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-500 group">
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">Revamped Food Court</h3>
              <p className="text-gray-600 leading-relaxed">A space to eat and for those who want to eat different too.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-500 group">
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">Renovated IBMS</h3>
              <p className="text-gray-600 leading-relaxed">Monitor and surveil with the latest in technology CCTV and scanners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section id="technological-excellence" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Experience Technological Excellence</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">State-of-the-art facilities designed for productivity and comfort.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: location1Image, title: 'Strategic Location' },
              { icon: carImage, title: 'Ample Parking' },
              { icon: foodImage, title: 'Food Court' },
              { icon: trainImage, title: 'MRTS Access' },
              { icon: techImage, title: 'Tech Hub' },
              { icon: hallImage, title: 'Conference Halls' },
              { icon: spaceImage, title: 'Promotional Space' },
              { icon: atmImage, title: 'Banking Services' },
              { icon: securityImage, title: '24/7 Security' },
              { icon: ecoImage, title: 'Eco-Friendly' },
            ].map((feature, idx) => (
              <div key={idx} ref={(el) => (featureCardsRef.current[idx] = el)} className="feature-card bg-white rounded-xl border border-gray-200 p-6 text-center group cursor-pointer relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="feature-icon w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
                </div>
                <h3 className="feature-title text-sm font-semibold text-gray-900">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="watch-our-story" className="py-12 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 -z-10" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-light text-slate-600 tracking-tight">
              Watch the legacy of <span className="font-black text-slate-900">TIDEL</span>
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden p-2" style={{background: 'linear-gradient(to right, #1c487b 35%, #ee4c23 35%)'}}>
              <div className="relative aspect-video w-full bg-black rounded shadow-2xl border-4 border-white">
                <iframe
                  id="youtube-player"
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ejoGJ-QLC8Y?autoplay=1&mute=1&loop=1&playlist=ejoGJ-QLC8Y&modestbranding=1&rel=0"
                  title="TIDEL Legacy Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-3">
              <img src={locationGif} alt="Location" className="w-10 h-10 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Locations</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">From a single tech park to Tamil Nadu's IT identity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Chennai', img: tidelImage, area: '1.2 M SqFt', desc: 'Tamil Nadu\'s first tech workspace.' },
              { title: 'Coimbatore', img: coimbatoreImage, area: '800k SqFt', desc: 'Spreading growth across the state.' },
              { title: 'Salem', img: pattabiramImage, area: '600k SqFt', desc: 'IT infrastructure in the industrial heartland.' },
              { title: 'Villupuram', img: tidelImage, area: '400k SqFt', desc: 'Fostering innovation in southern regions.' },
              { title: 'Thoothukudi', img: coimbatoreImage, area: '350k SqFt', desc: 'Empowering the coastal region.' },
              { title: 'Thanjavur', img: pattabiramImage, area: '300k SqFt', desc: 'Combining heritage with technology.' },
            ].map((loc, idx) => (
              <div key={idx} ref={(el) => (cardsRef.current[idx] = el)} className="location-card bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-blue-500 p-6 cursor-pointer">
                <img src={loc.img} alt={loc.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-gray-800">{loc.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{loc.desc}</p>
                <span className="text-xs font-medium text-blue-600">Area: {loc.area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Roller */}
      <section id="companies-in-tidel-park" className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Companies in TIDEL Park</h2>
          </div>
          <div className="companies-roller-container">
            <div className="companies-roller">
              <div className="companies-track">
                {[animakerImage, arcadiaImage, bnyImage, codoidImage, ctsImage, eyImage, guardianImage, sifyImage, tcsImage, verizonImage, williamsLeaImage].map((img, idx) => (
                  <div key={idx} className="company-logo"><img src={img} alt="Company" /></div>
                ))}
                {/* Duplicate for loop */}
                {[animakerImage, arcadiaImage, bnyImage, codoidImage, ctsImage, eyImage, guardianImage, sifyImage, tcsImage, verizonImage, williamsLeaImage].map((img, idx) => (
                  <div key={`dup-${idx}`} className="company-logo"><img src={img} alt="Company" /></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banks Roller */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Banks and Financial Services</h2>
          </div>
          <div className="banks-roller-container">
            <div className="banks-roller">
              <div className="banks-track">
                {[bankOfAmericaImage, canaraBankImage, cholaImage, hdbImage, icicImage, kotakImage, tataImage].map((img, idx) => (
                  <div key={idx} className="bank-logo"><img src={img} alt="Bank" /></div>
                ))}
                {/* Duplicate */}
                {[bankOfAmericaImage, canaraBankImage, cholaImage, hdbImage, icicImage, kotakImage, tataImage].map((img, idx) => (
                  <div key={`dup-${idx}`} className="bank-logo"><img src={img} alt="Bank" /></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Find Your Space Section */}
      <section id="find-space" className="py-20 bg-blue-600 relative overflow-visible">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-3">Find Your Space</h2>
          <p className="text-blue-100 mb-12">Part of Tamil Nadu's biggest IT identity in 3 simple steps</p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <CustomDropdown placeholder="Location" options={[{value:'chennai', label:'Chennai'}, {value:'coimbatore', label:'Coimbatore'}]} />
            <CustomDropdown placeholder="Building" options={[{value:'tidel-park', label:'TIDEL Park'}]} />
            <CustomDropdown placeholder="Area" options={[{value:'1000-2000', label:'1000 - 2000 sq ft'}]} />
          </div>
          <button className="find-space-enquiry-btn">Enquiry</button>
        </div>
      </section>

      {/* Life at Tidel Gallery */}
      <section id="life-at-tidel" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Life at Tidel</h2>
          <div className="relative flex w-full overflow-hidden mb-12">
            <motion.div className="flex gap-8 whitespace-nowrap" animate={{ x: [0, -2500] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
              {[...Array(3)].map((_, i) => (
                <React.Fragment key={i}>
                  {galleryImages.map((img, idx) => (
                    <div key={`${i}-${idx}`} className="w-80 h-60 rounded-2xl overflow-hidden shadow-lg border border-gray-100 shrink-0">
                      <img src={img} alt="Life at TIDEL" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
          <button onClick={() => navigate('/life-at-tidel')} className="view-gallery-btn bg-blue-600 text-white px-12 py-4 rounded font-medium shadow-lg">View Gallery</button>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="latest-blogs" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Latest Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'TIDEL NEO VELLORE', date: 'Nov 05, 2025', img: thulirImage, desc: '60,000 sq ft Mini IT Park inaugurated.' },
              { title: 'TIDEL NEO RASIPURAM', date: 'Nov 05, 2025', img: neoImage, desc: 'Foundation stone laid for new IT hub.' },
              { title: 'TIDEL NEO TIRUVANNAMALAI', date: 'Aug 01, 2025', img: tidelImage, desc: 'Augmenting IT growth in heritage district.' },
            ].map((blog, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="relative h-48 overflow-hidden"><img src={blog.img} alt="Blog" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                <div className="p-6 text-left">
                  <h4 className="text-xs text-blue-600 font-bold mb-2">{blog.date}</h4>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-blue-800">{blog.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{blog.desc}</p>
                  <div className="text-red-600 font-medium">Read More →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="pt-20 pb-12 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from the global organizations and leaders who thrive within the TIDEL ecosystem.</p>
        </div>

        <div className="relative flex w-full overflow-hidden py-12">
          <motion.div 
            className="flex gap-8 whitespace-nowrap px-4"
            animate={{ x: [0, -2800] }} 
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            whileHover={{ transition: { duration: 0 } }} // Attempt to pause
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {[
                  { name: 'Rajesh Kumar', role: 'CEO, Tech Solutions', text: 'Tidel Park has been instrumental in our growth.' },
                  { name: 'Priya Sharma', role: 'Founder, Digital Innovations', text: 'Strategic location and world-class facilities.' },
                  { name: 'Arun Prabhu', role: 'CTO, Cloud Solutions', text: 'Commitment to technology and security is exceptional.' },
                  { name: 'Suresh Raina', role: 'Product Manager, Animaker', text: 'Transformative experience for our team. The infra is unmatched.' },
                  { name: 'Anjali Devi', role: 'Operations Lead, BNY Mellon', text: 'Security and global standards at its best. A heritage of tech excellence.' },
                  { name: 'Karthik Raja', role: 'Founder, Codoid', text: 'Scalable workspace that grows with your vision at TIDEL.' },
                  { name: 'Deepika Iyer', role: 'HR Manager, Sify', text: 'World-class amenities that keep our employees energized and productive.' },
                  { name: 'Vikram Singh', role: 'Director, Verizon', text: 'An ecosystem where innovation truly thrives and scales globally.' }
                ].map((test, idx) => (
                  <div key={`${i}-${idx}`} className="w-[450px] inline-block bg-white rounded-2xl shadow-sm border border-gray-100 p-10 group hover:shadow-xl transition-all duration-500 whitespace-normal">
                    <div className="text-red-500 text-4xl mb-6 opacity-40 group-hover:opacity-100 transition-opacity font-serif">"</div>
                    <p className="text-gray-600 italic mb-8 leading-relaxed text-lg italic">
                      {test.text}
                    </p>
                    <div className="flex items-center mt-auto border-t border-gray-100 pt-6">
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

      <Footer />
    </div>
  );
};

export default Home;
