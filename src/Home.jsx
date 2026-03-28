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
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const projectCardsRef = useRef([]);
  const lifeCardsRef = useRef([]);
  const featureCardsRef = useRef([]);
  const findSpaceButtonRef = useRef(null);

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
      if (card) {
        observer.observe(card);
      }
    });

    projectCardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    lifeCardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    featureCardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
      projectCardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
      lifeCardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
      featureCardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Define onYouTubeIframeAPIReady globally
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    // Check if find-space section exists
    const findSpaceSection = document.getElementById('find-space');
    console.log('Find Space Section:', findSpaceSection);
    
    // Add click listener to Find Space button with timeout
    setTimeout(() => {
      const button = document.querySelector('button.bg-red-600');
      console.log('Button found:', button);
      if (button) {
        button.addEventListener('click', () => {
          console.log('Button clicked');
          if (findSpaceSection) {
            findSpaceSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    }, 1000);

    // Ensure we start at the top whenever Home is loaded
    window.scrollTo(0, 0);
  }, []);

  // Hero slideshow logic
  useEffect(() => {
    const hero1 = document.getElementById('hero1');
    const hero2 = document.getElementById('hero2');
    const hero3 = document.getElementById('hero3');
    let currentSlide = 1;

    const slideInterval = setInterval(() => {
      // Fade out current slide
      const current = document.getElementById(`hero${currentSlide}`);
      current.style.opacity = '0';

      // Fade in next slide
      currentSlide = currentSlide === 3 ? 1 : currentSlide + 1;
      const next = document.getElementById(`hero${currentSlide}`);
      next.style.opacity = '1';
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  // Rotating text animation (roller effect)
  useEffect(() => {
    const displayDuration = 5000; // 5 seconds display time (increased from 4)
    const animationDuration = 1200; // 1.2 seconds for roller animation (slowed down from 0.8)
    
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

  const toggleVideo = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

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
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
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
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our premium projects designed for comfort, education, and recreation. Each development offers unique experiences and world-class amenities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              ref={(el) => (projectCardsRef.current[0] = el)}
              className="location-card development-card bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col group hover:shadow-md transition-all duration-300 relative overflow-hidden fade-in-up"
            >
              <div className="shine-effect" />
              <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `url(${tidelImage})` }} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white typing-text">TIDEL Park</h3>
                </div>
                <div className="development-meta mb-4">
                  <div className="meta-item">
                    <span className="meta-label">Area:</span>
                    <span className="meta-value">1.2 Million Sq. Ft.</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Established:</span>
                    <span className="meta-value">2000</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Companies:</span>
                    <span className="meta-value">50+</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow transition-colors duration-300 group-hover:text-white">TIDEL Park is a world-class IT infrastructure hub that fosters innovation and collaboration. Designed to accommodate leading technology companies, it provides state-of-the-art facilities and a vibrant ecosystem for growth and development in the digital age.</p>
                <div className="development-features mb-4">
                  <span className="feature-tag">Smart Building</span>
                  <span className="feature-tag">High-Speed Internet</span>
                  <span className="feature-tag">24/7 Security</span>
                  <span className="feature-tag">Food Court</span>
                </div>
                <div className="flex items-center text-red-600 font-medium group-hover:translate-x-1 transition-all duration-300 group-hover:text-white">
                  Explore Park <span className="ml-2">→</span>
                </div>
              </div>
            </div>
            <div
              ref={(el) => (projectCardsRef.current[1] = el)}
              className="location-card development-card bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col group hover:shadow-md transition-all duration-300 relative overflow-hidden fade-in-up"
            >
              <div className="shine-effect" />
              <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `url(${neoImage})` }} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white typing-text">TIDEL Neo</h3>
                </div>
                <div className="development-meta mb-4">
                  <div className="meta-item">
                    <span className="meta-label">Area:</span>
                    <span className="meta-value">800,000 Sq. Ft.</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Expected:</span>
                    <span className="meta-value">2025</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Focus:</span>
                    <span className="meta-value">Startups & Innovation</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow transition-colors duration-300 group-hover:text-white">TIDEL Neo will be a new age platform that will incubate an IT and commercial startup environment in Tamil Nadu. This initiative will homogenise and localise a multinational environment across all areas in the state.</p>
                <div className="development-features mb-4">
                  <span className="feature-tag">Co-working Spaces</span>
                  <span className="feature-tag">Incubation Center</span>
                  <span className="feature-tag">Green Building</span>
                  <span className="feature-tag">EV Charging</span>
                </div>
                <div className="flex items-center text-red-600 font-medium group-hover:translate-x-1 transition-all duration-300 group-hover:text-white">
                  Explore Neo <span className="ml-2">→</span>
                </div>
              </div>
            </div>
            <div
              ref={(el) => (projectCardsRef.current[2] = el)}
              className="location-card development-card bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col group hover:shadow-md transition-all duration-300 relative overflow-hidden fade-in-up"
            >
              <div className="shine-effect" />
              <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `url(${thulirImage})` }} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white typing-text">TIDEL Thulir</h3>
                </div>
                <div className="development-meta mb-4">
                  <div className="meta-item">
                    <span className="meta-label">Area:</span>
                    <span className="meta-value">500,000 Sq. Ft.</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Established:</span>
                    <span className="meta-value">2018</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Students:</span>
                    <span className="meta-value">5,000+</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow transition-colors duration-300 group-hover:text-white">TIDEL Thulir is an educational initiative aimed at nurturing talent and skills development. Focused on emerging technologies and industry-aligned curriculum, it empowers students and professionals to excel in the rapidly evolving digital economy.</p>
                <div className="development-features mb-4">
                  <span className="feature-tag">Training Labs</span>
                  <span className="feature-tag">Digital Library</span>
                  <span className="feature-tag">Auditorium</span>
                  <span className="feature-tag">Hostel</span>
                </div>
                <div className="flex items-center text-red-600 font-medium group-hover:translate-x-1 transition-all duration-300 group-hover:text-white">
                  Explore Thulir <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="technological-excellence" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Welcome to a dream realized, where innovation meets legacy in a concise chronicle of technological excellence.</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Experience exceptional facilities designed for productivity, comfort, and convenience. Our developments offer everything you need to thrive.</p>
          </div>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
               <div ref={(el) => (featureCardsRef.current[0] = el)} className="feature-card bg-white rounded-xl border border-gray-200 p-6 text-center group cursor-pointer relative overflow-hidden fade-in-up" style={{ animationDelay: '0ms' }}>
                  <div className="feature-glow" />
                  <div className="relative z-10">
                    <div className="feature-icon w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                      <img src={location1Image} alt="Strategic Location" className="w-10 h-10" />
                    </div>
                    <h3 className="feature-title text-lg font-semibold mb-1 text-gray-900">Strategic Location</h3>
                  </div>
                </div>
                <div ref={(el) => (featureCardsRef.current[1] = el)} className="feature-card bg-white rounded-xl border border-gray-200 p-6 text-center group cursor-pointer relative overflow-hidden fade-in-up" style={{ animationDelay: '100ms' }}>
                   <div className="feature-glow" />
                   <div className="relative z-10">
                     <div className="feature-icon w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                       <img src={carImage} alt="Ample Parking" className="w-10 h-10" />
                     </div>
                     <h3 className="feature-title text-lg font-semibold mb-1 text-gray-900">Ample Parking</h3>
                   </div>
                 </div>
                 <div ref={(el) => (featureCardsRef.current[2] = el)} className="feature-card bg-white rounded-xl border border-gray-200 p-6 text-center group cursor-pointer relative overflow-hidden fade-in-up" style={{ animationDelay: '200ms' }}>
                    <div className="feature-glow" />
                    <div className="relative z-10">
                      <div className="feature-icon w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                        <img src={foodImage} alt="Food Court" className="w-10 h-10" />
                      </div>
                      <h3 className="feature-title text-lg font-semibold mb-1 text-gray-900">Food Court</h3>
                    </div>
                  </div>
                  <div ref={(el) => (featureCardsRef.current[3] = el)} className="feature-card bg-white rounded-xl border border-gray-200 p-6 text-center group cursor-pointer relative overflow-hidden fade-in-up" style={{ animationDelay: '300ms' }}>
                     <div className="feature-glow" />
                     <div className="relative z-10">
                       <div className="feature-icon w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                         <img src={trainImage} alt="MRTS Access" className="w-10 h-10" />
                       </div>
                       <h3 className="feature-title text-lg font-semibold mb-1 text-gray-900">MRTS Access</h3>
                     </div>
                   </div>
                   <div ref={(el) => (featureCardsRef.current[4] = el)} className="feature-card bg-white rounded-xl border border-gray-200 p-6 text-center group cursor-pointer relative overflow-hidden fade-in-up" style={{ animationDelay: '400ms' }}>
                      <div className="feature-glow" />
                      <div className="relative z-10">
                        <div className="feature-icon w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                          <img src={techImage} alt="Tech Hub" className="w-10 h-10" />
                        </div>
                        <h3 className="feature-title text-lg font-semibold mb-1 text-gray-900">Tech Hub</h3>
                      </div>
                    </div>
                    <div ref={(el) => (featureCardsRef.current[5] = el)} className="feature-card bg-white rounded-xl border border-gray-200 p-6 text-center group cursor-pointer relative overflow-hidden fade-in-up" style={{ animationDelay: '500ms' }}>
                       <div className="feature-glow" />
                       <div className="relative z-10">
                         <div className="feature-icon w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                           <img src={hallImage} alt="Conference Halls" className="w-10 h-10" />
                         </div>
                         <h3 className="feature-title text-lg font-semibold mb-1 text-gray-900">Conference Halls</h3>
                       </div>
                     </div>
                     <div ref={(el) => (featureCardsRef.current[6] = el)} className="feature-card bg-white rounded-xl border border-gray-200 p-6 text-center group cursor-pointer relative overflow-hidden fade-in-up" style={{ animationDelay: '600ms' }}>
                        <div className="feature-glow" />
                        <div className="relative z-10">
                          <div className="feature-icon w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                            <img src={spaceImage} alt="Promotional Space" className="w-10 h-10" />
                          </div>
                          <h3 className="feature-title text-lg font-semibold mb-1 text-gray-900">Promotional Space</h3>
                        </div>
                      </div>
                      <div ref={(el) => (featureCardsRef.current[7] = el)} className="feature-card bg-white rounded-xl border border-gray-200 p-6 text-center group cursor-pointer relative overflow-hidden fade-in-up" style={{ animationDelay: '700ms' }}>
                         <div className="feature-glow" />
                         <div className="relative z-10">
                           <div className="feature-icon w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                             <img src={atmImage} alt="Banking Services" className="w-10 h-10" />
                           </div>
                           <h3 className="feature-title text-lg font-semibold mb-1 text-gray-900">Banking Services</h3>
                         </div>
                       </div>
                       <div ref={(el) => (featureCardsRef.current[8] = el)} className="feature-card bg-white rounded-xl border border-gray-200 p-6 text-center group cursor-pointer relative overflow-hidden fade-in-up" style={{ animationDelay: '800ms' }}>
                          <div className="feature-glow" />
                          <div className="relative z-10">
                            <div className="feature-icon w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                              <img src={securityImage} alt="24/7 Security" className="w-10 h-10" />
                            </div>
                            <h3 className="feature-title text-lg font-semibold mb-1 text-gray-900">24/7 Security</h3>
                          </div>
                        </div>
                        <div ref={(el) => (featureCardsRef.current[9] = el)} className="feature-card bg-white rounded-xl border border-gray-200 p-6 text-center group cursor-pointer relative overflow-hidden fade-in-up" style={{ animationDelay: '900ms' }}>
                           <div className="feature-glow" />
                           <div className="relative z-10">
                             <div className="feature-icon w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                               <img src={ecoImage} alt="Eco-Friendly" className="w-10 h-10" />
                             </div>
                             <h3 className="feature-title text-lg font-semibold mb-1 text-gray-900">Eco-Friendly</h3>
                           </div>
                         </div>
            </div>
        </div>
      </section>



      {/* Video Section - Redesigned to match requested accent style perfectly */}
      <section id="watch-our-story" className="py-12 md:py-24 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 -z-10" 
             style={{ backgroundImage: `url(${heroImage})` }}>
        </div>
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[#f8f9fb] opacity-50 -z-10" 
             style={{ backgroundImage: 'linear-gradient(135deg, #f0f0f0 25%, transparent 25%, transparent 50%, #f0f0f0 50%, #f0f0f0 75%, transparent 75%, transparent 100%)', backgroundSize: '60px 60px' }}>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-light text-slate-600 tracking-tight">
              Watch the legacy of <span className="font-black text-slate-900">TIDEL</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto relative group">
            {/* Blue Vertical Bar Accent (Left) */}
            <div className="absolute -left-4 -top-8 md:-left-12 md:-top-16 w-12 md:w-24 h-[60%] md:h-[85%] bg-[#1c487b] -z-10 shadow-lg" />
            
            {/* Orange-Red Box Accent (Bottom Right) */}
            <div className="absolute -right-4 -bottom-8 md:-right-16 md:-bottom-16 w-32 md:w-80 h-32 md:h-80 bg-[#ee4c23] -z-10 shadow-lg" />

            {/* Video Container */}
            <div className="relative z-10 aspect-video w-full bg-black rounded-sm overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                id="youtube-player"
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ejoGJ-QLC8Y?autoplay=1&mute=1&loop=1&playlist=ejoGJ-QLC8Y&modestbranding=1&rel=0&iv_load_policy=3"
                title="TIDEL Legacy Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
              <p className="text-gray-600 max-w-2xl mx-auto">From a single tech park to Tamil Nadu's IT identity, TIDEL has expanded its horizons</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                ref={(el) => (cardsRef.current[0] = el)}
                className="location-card bg-white rounded-xl shadow-sm border border-gray-200 p-4 cursor-pointer fade-in-up"
              >
                <div className="shine-effect" />
                <div className="card-glow" />
                <div className="card-content">
                  <div className="mb-4 overflow-hidden rounded-xl shadow-sm relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={tidelImage}
                      alt="Chennai"
                      className="card-image w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={locationGif} alt="Location" className="location-icon w-6 h-6 mr-2" />
                    <h3 className="card-title text-xl font-semibold mr-3 text-gray-800">Chennai</h3>
                    <div className="card-arrow text-xl">→</div>
                  </div>
                  <p className="card-description text-gray-600 text-sm leading-relaxed mb-3">Tamil Nadu's first tech workspace that opened the state to a world of possibilities.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Area:</span>
                      <span>1.2 Million Sq. Ft.</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Established:</span>
                      <span>2000</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Address:</span>
                      <span>Thiru.Vi.Ka Industrial Estate, Guindy, Chennai - 600032</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Contact:</span>
                      <span>+91 44 2254 0000</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Facilities:</span>
                      <span>Parking, Cafeteria, ATM, Security, High-Speed Internet</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">50+ Companies</span>
                      <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">IT Hub</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => (cardsRef.current[1] = el)}
                className="location-card bg-white rounded-xl shadow-sm border border-gray-200 p-4 cursor-pointer fade-in-up"
              >
                <div className="shine-effect" />
                <div className="card-glow" />
                <div className="card-content">
                  <div className="mb-4 overflow-hidden rounded-xl shadow-sm relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={coimbatoreImage}
                      alt="Coimbatore"
                      className="card-image w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={locationGif} alt="Location" className="location-icon w-6 h-6 mr-2" />
                    <h3 className="card-title text-xl font-semibold mr-3 text-gray-800">Coimbatore</h3>
                    <div className="card-arrow text-xl">→</div>
                  </div>
                  <p className="card-description text-gray-600 text-sm leading-relaxed mb-3">TIDEL goes beyond Chennai, spreading opportunities and growth to people across the state.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Area:</span>
                      <span>800,000 Sq. Ft.</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Established:</span>
                      <span>2010</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Address:</span>
                      <span>Peelamedu, Coimbatore - 641004</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Contact:</span>
                      <span>+91 422 254 0000</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Facilities:</span>
                      <span>Parking, Cafeteria, Conference Rooms, Power Backup</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">Manufacturing Hub</span>
                      <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Textile Capital</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => (cardsRef.current[2] = el)}
                className="location-card bg-white rounded-xl shadow-sm border border-gray-200 p-4 cursor-pointer fade-in-up"
              >
                <div className="shine-effect" />
                <div className="card-glow" />
                <div className="card-content">
                  <div className="mb-4 overflow-hidden rounded-xl shadow-sm relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={pattabiramImage}
                      alt="Salem"
                      className="card-image w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={locationGif} alt="Location" className="location-icon w-6 h-6 mr-2" />
                    <h3 className="card-title text-xl font-semibold mr-3 text-gray-800">Salem</h3>
                    <div className="card-arrow text-xl">→</div>
                  </div>
                  <p className="card-description text-gray-600 text-sm leading-relaxed mb-3">Bringing IT infrastructure and opportunities to the industrial heartland of Tamil Nadu.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Area:</span>
                      <span>600,000 Sq. Ft.</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Established:</span>
                      <span>2015</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Address:</span>
                      <span>Suramangalam, Salem - 636005</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Contact:</span>
                      <span>+91 427 254 0000</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Facilities:</span>
                      <span>Parking, Cafeteria, 24/7 Security, Power Backup</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="px-2 py-1 bg-red-50 text-red-700 rounded text-xs">Steel City</span>
                      <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded text-xs">Industrial Hub</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => (cardsRef.current[3] = el)}
                className="location-card bg-white rounded-xl shadow-sm border border-gray-200 p-4 cursor-pointer fade-in-up"
              >
                <div className="shine-effect" />
                <div className="card-glow" />
                <div className="card-content">
                  <div className="mb-4 overflow-hidden rounded-xl shadow-sm relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={tidelImage}
                      alt="Villupuram"
                      className="card-image w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={locationGif} alt="Location" className="location-icon w-6 h-6 mr-2" />
                    <h3 className="card-title text-xl font-semibold mr-3 text-gray-800">Villupuram</h3>
                    <div className="card-arrow text-xl">→</div>
                  </div>
                  <p className="card-description text-gray-600 text-sm leading-relaxed mb-3">Extending TIDEL's vision to the southern regions, fostering growth and innovation.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Area:</span>
                      <span>400,000 Sq. Ft.</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Established:</span>
                      <span>2018</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Address:</span>
                      <span>Villupuram Main Road, Villupuram - 605602</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Contact:</span>
                      <span>+91 4146 254 000</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Facilities:</span>
                      <span>Parking, Cafeteria, High-Speed Internet, Meeting Rooms</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="px-2 py-1 bg-teal-50 text-teal-700 rounded text-xs">Agricultural Hub</span>
                      <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs">Emerging IT</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => (cardsRef.current[4] = el)}
                className="location-card bg-white rounded-xl shadow-sm border border-gray-200 p-4 cursor-pointer fade-in-up"
              >
                <div className="shine-effect" />
                <div className="card-glow" />
                <div className="card-content">
                  <div className="mb-4 overflow-hidden rounded-xl shadow-sm relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={coimbatoreImage}
                      alt="Thoothukudi"
                      className="card-image w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={locationGif} alt="Location" className="location-icon w-6 h-6 mr-2" />
                    <h3 className="card-title text-xl font-semibold mr-3 text-gray-800">Thoothukudi</h3>
                    <div className="card-arrow text-xl">→</div>
                  </div>
                  <p className="card-description text-gray-600 text-sm leading-relaxed mb-3">Empowering the coastal region with modern IT infrastructure and digital opportunities.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Area:</span>
                      <span>350,000 Sq. Ft.</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Established:</span>
                      <span>2020</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Address:</span>
                      <span>Thoothukudi Main Road, Thoothukudi - 628002</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Contact:</span>
                      <span>+91 461 254 0000</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Facilities:</span>
                      <span>Parking, Cafeteria, Security, Power Backup, Internet</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="px-2 py-1 bg-cyan-50 text-cyan-700 rounded text-xs">Port City</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Coastal Hub</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => (cardsRef.current[5] = el)}
                className="location-card bg-white rounded-xl shadow-sm border border-gray-200 p-4 cursor-pointer fade-in-up"
              >
                <div className="shine-effect" />
                <div className="card-glow" />
                <div className="card-content">
                  <div className="mb-4 overflow-hidden rounded-xl shadow-sm relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={pattabiramImage}
                      alt="Thanjavur"
                      className="card-image w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <img src={locationGif} alt="Location" className="location-icon w-6 h-6 mr-2" />
                    <h3 className="card-title text-xl font-semibold mr-3 text-gray-800">Thanjavur</h3>
                    <div className="card-arrow text-xl">→</div>
                  </div>
                  <p className="card-description text-gray-600 text-sm leading-relaxed mb-3">Combining rich cultural heritage with modern technology infrastructure.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Area:</span>
                      <span>300,000 Sq. Ft.</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Established:</span>
                      <span>2022</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Address:</span>
                      <span>Budalur Main Road, Thanjavur - 613001</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Contact:</span>
                      <span>+91 4362 254 000</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">Facilities:</span>
                      <span>Parking, Cafeteria, Conference Rooms, High-Speed Internet</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs">Cultural Capital</span>
                      <span className="px-2 py-1 bg-rose-50 text-rose-700 rounded text-xs">Heritage City</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </section>

         {/* Companies Section */}
         <section id="companies-in-tidel-park" className="py-20 bg-gray-50 overflow-hidden">
           <div className="container mx-auto px-4">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-3 text-gray-900">Companies in TIDEL Park</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">Home to leading technology companies and global enterprises driving innovation</p>
             </div>
            <div className="companies-roller-container">
              <div className="companies-roller">
                <div className="companies-track">
                  <div className="company-logo">
                    <img src={animakerImage} alt="Animaker" />
                  </div>
                  <div className="company-logo">
                    <img src={arcadiaImage} alt="Arcadia" />
                  </div>
                  <div className="company-logo">
                    <img src={bnyImage} alt="BNY" />
                  </div>
                  <div className="company-logo">
                    <img src={codoidImage} alt="Codoid" />
                  </div>
                  <div className="company-logo">
                    <img src={ctsImage} alt="CTS" />
                  </div>
                  <div className="company-logo">
                    <img src={eyImage} alt="EY" />
                  </div>
                  <div className="company-logo">
                    <img src={guardianImage} alt="Guardian" />
                  </div>
                  <div className="company-logo">
                    <img src={sifyImage} alt="Sify" />
                  </div>
                  <div className="company-logo">
                    <img src={tcsImage} alt="TCS" />
                  </div>
                  <div className="company-logo">
                    <img src={verizonImage} alt="Verizon" />
                  </div>
                  <div className="company-logo">
                    <img src={williamsLeaImage} alt="Williams Lea" />
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="company-logo">
                    <img src={animakerImage} alt="Animaker" />
                  </div>
                  <div className="company-logo">
                    <img src={arcadiaImage} alt="Arcadia" />
                  </div>
                  <div className="company-logo">
                    <img src={bnyImage} alt="BNY" />
                  </div>
                  <div className="company-logo">
                    <img src={codoidImage} alt="Codoid" />
                  </div>
                  <div className="company-logo">
                    <img src={ctsImage} alt="CTS" />
                  </div>
                  <div className="company-logo">
                    <img src={eyImage} alt="EY" />
                  </div>
                  <div className="company-logo">
                    <img src={guardianImage} alt="Guardian" />
                  </div>
                  <div className="company-logo">
                    <img src={sifyImage} alt="Sify" />
                  </div>
                  <div className="company-logo">
                    <img src={tcsImage} alt="TCS" />
                  </div>
                  <div className="company-logo">
                    <img src={verizonImage} alt="Verizon" />
                  </div>
                  <div className="company-logo">
                    <img src={williamsLeaImage} alt="Williams Lea" />
                  </div>
                </div>
              </div>
            </div>
          </div>
         </section>

         {/* Banks and Financial Section */}
         <section id="banks-and-financial-services" className="py-20 bg-gray-50">
           <div className="container mx-auto px-4">
             <div className="text-center mb-12">
               <div className="flex items-center justify-center mb-3">
                 <img src={atmImage} alt="Banking" className="w-6 h-6 mr-2" />
                 <h2 className="text-3xl font-bold text-gray-900">Banks and Financial Services</h2>
               </div>
               <p className="text-gray-600 max-w-2xl mx-auto">Experience seamless banking and financial services right at TIDEL Park. Our banking partners provide comprehensive financial solutions for businesses and individuals.</p>
             </div>
             
             {/* Bank Carousel */}
             <div className="banks-roller-container">
               <div className="banks-roller">
                 <div className="banks-track">
                   <div className="bank-logo">
                     <img src={bankOfAmericaImage} alt="Bank of America" />
                   </div>
                   <div className="bank-logo">
                     <img src={canaraBankImage} alt="Canara Bank" />
                   </div>
                   <div className="bank-logo">
                     <img src={cholaImage} alt="Chola" />
                   </div>
                   <div className="bank-logo">
                     <img src={hdbImage} alt="HDB" />
                   </div>
                   <div className="bank-logo">
                     <img src={icicImage} alt="ICICI" />
                   </div>
                   <div className="bank-logo">
                     <img src={kotakImage} alt="Kotak" />
                   </div>
                   <div className="bank-logo">
                     <img src={tataImage} alt="Tata" />
                   </div>
                   <div className="bank-logo">
                     <img src={bankOfAmericaImage} alt="Bank of America" />
                   </div>
                   <div className="bank-logo">
                     <img src={canaraBankImage} alt="Canara Bank" />
                   </div>
                   <div className="bank-logo">
                     <img src={cholaImage} alt="Chola" />
                   </div>
                   <div className="bank-logo">
                     <img src={hdbImage} alt="HDB" />
                   </div>
                   <div className="bank-logo">
                     <img src={icicImage} alt="ICICI" />
                   </div>
                   <div className="bank-logo">
                     <img src={kotakImage} alt="Kotak" />
                   </div>
                   <div className="bank-logo">
                     <img src={tataImage} alt="Tata" />
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>

          {/* Find Your Space Section */}
         <section id="find-space" className="py-20 bg-blue-600 relative overflow-visible">
           <div className="absolute inset-0 opacity-10" style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}></div>
           
           <div className="container mx-auto px-4 relative z-10">
             <div className="text-center mb-12">
               <h2 className="text-4xl font-bold mb-3 text-white">Find Your Space</h2>
               <p className="text-blue-100 max-w-2xl mx-auto">Come and be a part of Tamil Nadu's biggest IT identity in 3 simple steps</p>
             </div>
             
             <div className="max-w-4xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                 <CustomDropdown
                   placeholder="Choose Location"
                   options={[
                     { value: 'chennai', label: 'Chennai' },
                     { value: 'coimbatore', label: 'Coimbatore' },
                     { value: 'salem', label: 'Salem' },
                     { value: 'villupuram', label: 'Villupuram' },
                     { value: 'thoothukudi', label: 'Thoothukudi' },
                     { value: 'thanjavur', label: 'Thanjavur' }
                   ]}
                 />
                 
                 <CustomDropdown
                   placeholder="Choose Building"
                   options={[
                     { value: 'tidel-park', label: 'TIDEL Park' },
                     { value: 'tidel-neo', label: 'TIDEL Neo' },
                     { value: 'tidel-thulir', label: 'TIDEL Thulir' }
                   ]}
                 />
                 
                 <CustomDropdown
                   placeholder="Choose Area Sq ft."
                   options={[
                     { value: '100-500', label: '100 - 500 sq ft' },
                     { value: '500-1000', label: '500 - 1000 sq ft' },
                     { value: '1000-2000', label: '1000 - 2000 sq ft' },
                     { value: '2000-5000', label: '2000 - 5000 sq ft' },
                     { value: '5000+', label: '5000+ sq ft' }
                   ]}
                 />
               </div>
               
               <div className="text-center">
                 <button className="find-space-enquiry-btn" onClick={(e) => {
                   // Ripple effect on click
                   const button = e.currentTarget;
                   const ripple = document.createElement('span');
                   const rect = button.getBoundingClientRect();
                   const size = Math.max(rect.width, rect.height);
                   const x = e.clientX - rect.left - size / 2;
                   const y = e.clientY - rect.top - size / 2;
                   
                   ripple.style.width = ripple.style.height = `${size}px`;
                   ripple.style.left = `${x}px`;
                   ripple.style.top = `${y}px`;
                   ripple.classList.add('ripple');
                   
                   button.appendChild(ripple);
                   
                   setTimeout(() => {
                     ripple.remove();
                   }, 600);
                 }}>
                   Enquiry
                 </button>
               </div>
             </div>
           </div>
         </section>

          {/* Life at Tidel Section */}
          <section id="life-at-tidel" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3 text-gray-900">Life at Tidel</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Experience a vibrant and dynamic work-life balance at TIDEL Park. From recreational facilities to cultural events, we foster a community that thrives.</p>
              </div>
              
               {/* Gallery Roller */}
               <div className="relative flex w-full overflow-hidden mb-12">
                 <motion.div 
                   className="flex gap-4 md:gap-8 whitespace-nowrap"
                   animate={{ 
                     x: [0, -2500] 
                   }}
                   transition={{ 
                     duration: 40,
                     repeat: Infinity,
                     ease: "linear"
                   }}
                 >
                   {[...Array(3)].map((_, i) => (
                     <React.Fragment key={i}>
                       {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13].map((img, idx) => (
                         <div key={`${i}-${idx}`} className="w-64 h-48 md:w-80 md:h-60 rounded-2xl overflow-hidden shadow-lg border border-gray-100 shrink-0">
                           <img src={img} alt={`Life at TIDEL ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                         </div>
                       ))}
                     </React.Fragment>
                   ))}
                 </motion.div>
               </div>
              
               <div className="mt-12 text-center">
                 <button
                   onClick={() => navigate('/life-at-tidel')}
                   className="view-gallery-btn bg-blue-600 text-white px-12 py-4 rounded font-medium shadow-lg"
                 >
                   View Gallery
                 </button>
               </div>
             </div>
           </section>

           {/* Latest Blogs Section */}
           <section id="latest-blogs" className="py-20 bg-white">
             <div className="container mx-auto px-4">
               <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold mb-3 text-gray-900">Latest Blogs</h2>
                 <p className="text-gray-600 max-w-2xl mx-auto">Read interesting pieces on business, technology, government policies and more.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={neoImage} 
                      alt="TIDEL Neo Rasipuram" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded">
                      <div className="text-lg font-semibold">Nov 07</div>
                      <div className="text-sm">2025</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                      TIDEL NEO RASIPURAM (NAMAKKAL) – FOUNDATION STONE LAID ON 05.11.2025
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      On 5th November 2025, the Foundation Stone for TIDEL Neo Rasipuram (Namakkal) was laid, marking yet another milestone in Tamil Nadu's IT expansion journey under the TIDEL Neo initiative.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Located at Andalagur Gate, Kurukkapuram Village, Rasipuram Taluk, this Mini IT Park will span 60,000 sq. ft. with G + 3 floors.
                    </p>
                    <div className="flex items-center text-red-600 font-medium group-hover:translate-x-1 transition-all duration-300">
                      Read More <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={tidelImage} 
                      alt="TIDEL Neo Tiruvannamalai" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded">
                      <div className="text-lg font-semibold">Nov 07</div>
                      <div className="text-sm">2025</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                      TIDEL NEO TIRUVANNAMALAI – FOUNDATION STONE LAID ON 01.08.2025
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Paving the Way for Future IT Growth
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      The Foundation Stone for TIDEL Neo Tiruvannamalai was ceremoniously laid on 1st August 2025, marking a major step in bringing advanced IT infrastructure to the heritage-rich district of Tiruvannamalai.
                    </p>
                    <div className="flex items-center text-red-600 font-medium group-hover:translate-x-1 transition-all duration-300">
                      Read More <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={thulirImage} 
                      alt="TIDEL Neo Vellore" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded">
                      <div className="text-lg font-semibold">Nov 07</div>
                      <div className="text-sm">2025</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                      TIDEL NEO VELLORE – INAUGURATED ON 05.11.2025
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Located in Melmonavur-Abdullapuram Villages, Vellore Taluk, TIDEL Neo Vellore is a G+4 floor Mini IT Park spanning 60,000 sq. ft. The project, established at a cost of Rs. 32 Crores, is designed to foster innovation, collaboration, and the growth of IT and ITes enterprises in Vellore and surrounding districts.
                    </p>
                    <div className="flex items-center text-red-600 font-medium group-hover:translate-x-1 transition-all duration-300">
                      Read More <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
               </div>
             </div>
           </section>

           {/* Testimonials Section */}
           <section id="testimonials" className="py-20 bg-gray-50">
             <div className="container mx-auto px-4">
               <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold mb-3 text-gray-900">What Our Clients Say</h2>
                 <p className="text-gray-600 max-w-2xl mx-auto">Hear from businesses and professionals who have experienced the TIDEL advantage.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 group hover:shadow-md transition-all duration-300">
                   <div className="flex items-center mb-6">
                     <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 group-hover:scale-110 transition-transform duration-300">
                       <img 
                         src={neoImage} 
                         alt="Client Avatar" 
                         className="w-full h-full rounded-full object-cover"
                       />
                     </div>
                     <div>
                       <h4 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">Rajesh Kumar</h4>
                       <p className="text-gray-500">CEO, Tech Solutions Inc.</p>
                     </div>
                   </div>
                   <p className="text-gray-600 mb-4 leading-relaxed italic">
                     "Tidel Park has been instrumental in our company's growth. The state-of-the-art infrastructure and vibrant community have created the perfect environment for innovation."
                   </p>
                   <div className="flex text-yellow-500">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   </div>
                 </div>

                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 group hover:shadow-md transition-all duration-300">
                   <div className="flex items-center mb-6">
                     <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 group-hover:scale-110 transition-transform duration-300">
                       <img 
                         src={tidelImage} 
                         alt="Client Avatar" 
                         className="w-full h-full rounded-full object-cover"
                       />
                     </div>
                     <div>
                       <h4 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">Priya Sharma</h4>
                       <p className="text-gray-500">Founder, Digital Innovations</p>
                     </div>
                   </div>
                   <p className="text-gray-600 mb-4 leading-relaxed italic">
                     "The strategic location and world-class facilities at Tidel Park have been crucial for our startup's success. The vibrant community and networking opportunities are unmatched."
                   </p>
                   <div className="flex text-yellow-500">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   </div>
                 </div>

                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 group hover:shadow-md transition-all duration-300">
                   <div className="flex items-center mb-6">
                     <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 group-hover:scale-110 transition-transform duration-300">
                       <img 
                         src={thulirImage} 
                         alt="Client Avatar" 
                         className="w-full h-full rounded-full object-cover"
                       />
                     </div>
                     <div>
                       <h4 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">Arun Prabhu</h4>
                       <p className="text-gray-500">CTO, Cloud Solutions Pvt. Ltd.</p>
                     </div>
                   </div>
                   <p className="text-gray-600 mb-4 leading-relaxed italic">
                     "Tidel Park's commitment to sustainability and cutting-edge technology has made it the perfect partner for our cloud-based operations. The 24/7 support and security are exceptional."
                   </p>
                   <div className="flex text-yellow-500">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   </div>
                 </div>
               </div>
             </div>
           </section>

      <Footer />

     </div>
   );
 };

 export default Home;
