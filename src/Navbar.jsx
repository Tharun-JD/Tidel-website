import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';

const Navbar = ({ hideEnquireButton = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhyTidelDropdownOpen, setIsWhyTidelDropdownOpen] = useState(false);
  const [isFindSpaceDropdownOpen, setIsFindSpaceDropdownOpen] = useState(false);
  const [isSpaceBookingSubmenuOpen, setIsSpaceBookingSubmenuOpen] = useState(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const [isBlogsDropdownOpen, setIsBlogsDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);
  const [isEnquirePopupOpen, setIsEnquirePopupOpen] = useState(false);
  
  const whyTidelDropdownRef = useRef(null);
  const findSpaceDropdownRef = useRef(null);
  const spaceBookingSubmenuRef = useRef(null);
  const aboutUsDropdownRef = useRef(null);
  const blogsDropdownRef = useRef(null);
  const supportDropdownRef = useRef(null);
  const enquirePopupRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (whyTidelDropdownRef.current && !whyTidelDropdownRef.current.contains(event.target)) {
        setIsWhyTidelDropdownOpen(false);
      }
      if (findSpaceDropdownRef.current && !findSpaceDropdownRef.current.contains(event.target)) {
        setIsFindSpaceDropdownOpen(false);
        setIsSpaceBookingSubmenuOpen(false);
      }
      if (spaceBookingSubmenuRef.current && !spaceBookingSubmenuRef.current.contains(event.target) && !findSpaceDropdownRef.current.contains(event.target)) {
        setIsSpaceBookingSubmenuOpen(false);
      }
      if (aboutUsDropdownRef.current && !aboutUsDropdownRef.current.contains(event.target)) {
        setIsAboutUsDropdownOpen(false);
      }
      if (blogsDropdownRef.current && !blogsDropdownRef.current.contains(event.target)) {
        setIsBlogsDropdownOpen(false);
      }
      if (supportDropdownRef.current && !supportDropdownRef.current.contains(event.target)) {
        setIsSupportDropdownOpen(false);
      }
      if (enquirePopupRef.current && !enquirePopupRef.current.contains(event.target)) {
        setIsEnquirePopupOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const whyTidelDropdownItems = [
    { label: 'Facilities', path: '/why-tidel#cn_fac_title', icon: '🏢', desc: 'World-class amenities for seamless business.' },
    { label: 'Highlights', path: '/why-tidel#highlights', icon: '✨', desc: 'Defining features of TIDEL ecosystems.' },
    { label: 'Find space', path: '/find-space', icon: '📍', desc: 'Secure your place in the hub of innovation.' },
    { label: 'Testimonials', path: '/why-tidel#testimonial', icon: '💬', desc: 'Success stories from global organizations.' },
    { label: '#LifeAtTidel', path: '/life-at-tidel', icon: '🌟', desc: 'A thriving community beyond office walls.' }
  ];

  const findSpaceDropdownItems = [
    { 
      label: 'Space Booking', 
      id: 'space-booking',
      path: '/find-space',
      icon: '📐',
      desc: 'Secure your place in the hub of innovation.',
      submenu: [
        { label: 'Thanjavur', path: '/find-space?city=Thanjavur' },
        { label: 'Villupuram', path: '/find-space?city=Villupuram' },
        { label: 'Pattabiram, Chennai', path: '/find-space?city=Pattabiram, Chennai' },
        { label: 'Salem', path: '/find-space?city=Salem' },
        { label: 'Thoothukudi', path: '/find-space?city=Thoothukudi' },
        { label: 'Tiruppur', path: '/find-space?city=Tiruppur' },
        { label: 'Karaikudi', path: '/find-space?city=Karaikudi' },
        { label: 'Taramani, Chennai', path: '/find-space?city=Taramani, Chennai' }
      ]
    },
    { 
      label: 'Key Contacts', 
      path: '/find-space#keycontact', 
      icon: '📞',
      desc: 'Connect with our leadership and support teams.'
    }
  ];

  const aboutUsDropdownItems = [
    { label: 'TIDEL Legacy', path: '/about-us#tidel-legacy' },
    { label: 'Vision & Mission', path: '/about-us#vision-mission' },
    { label: 'Board of Directors', path: '/about-us#board-of-directors' },
    { label: 'Careers', path: '/about-us#careers' }
  ];

  const blogsDropdownItems = [
    { label: 'Latest Blogs', path: '/blogs' },
    { label: 'Events', path: '/events' }
  ];

  const supportDropdownItems = [
    { label: 'Location', path: '/support#location' },
    { label: 'Key Contacts', path: '/support' }
  ];

  const handleLinkClick = (path, setDropdownState) => {
    if (setDropdownState) setDropdownState(false);
    setIsSpaceBookingSubmenuOpen(false);
    setIsMobileMenuOpen(false);
    
    if (path.includes('?')) {
      const [route, queryString] = path.split('?');
      navigate(`${route}?${queryString}`);
      window.scrollTo(0, 0);
      return;
    }
    
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      const targetRoute = route === '' ? '/' : route;
      
      if (window.location.pathname !== targetRoute) {
        navigate(targetRoute);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
          }
        }, 500);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`bg-white shadow-sm fixed w-full top-0 z-50 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <div className="flex items-center space-x-2 cursor-pointer shrink-0" onClick={() => navigate('/')}>
              <img src={logo} alt="TIDEL Logo" className="h-10 w-auto md:h-12" />
            </div>

            {/* Desktop Navigation Links - hidden on mobile/tablet */}
            <div className="hidden xl:flex items-center justify-center flex-1 mx-4">
              {/* Why TIDEL with dropdown */}
              <div
                className="relative px-2 py-2"
                ref={whyTidelDropdownRef}
                onMouseEnter={() => {
                  setIsWhyTidelDropdownOpen(true);
                  setIsFindSpaceDropdownOpen(false);
                  setIsAboutUsDropdownOpen(false);
                  setIsBlogsDropdownOpen(false);
                  setIsSupportDropdownOpen(false);
                }}
                onMouseLeave={() => {
                  setTimeout(() => setIsWhyTidelDropdownOpen(false), 150);
                }}
              >
                <button
                  className="nav-button text-slate-800 text-sm font-semibold hover:text-blue-600 px-2 py-2 rounded-lg hover:bg-slate-100 flex items-center whitespace-nowrap"
                  onClick={() => {
                    navigate('/');
                    window.scrollTo(0, 0);
                    setIsWhyTidelDropdownOpen(false);
                    setIsFindSpaceDropdownOpen(false);
                    setIsAboutUsDropdownOpen(false);
                    setIsBlogsDropdownOpen(false);
                    setIsSupportDropdownOpen(false);
                  }}
                >
                  Why TIDEL
                </button>
                
                {isWhyTidelDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl py-2 z-100 border border-gray-100 flex flex-col overflow-visible"
                    onMouseEnter={() => setIsWhyTidelDropdownOpen(true)}
                    onMouseLeave={() => setIsWhyTidelDropdownOpen(false)}
                  >
                    {whyTidelDropdownItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleLinkClick(item.path, setIsWhyTidelDropdownOpen)}
                        className="dropdown-item w-full text-left px-6 py-4 text-base font-medium text-gray-700 hover:bg-slate-50 hover:text-blue-600 transition-all duration-200 flex items-center justify-between group"
                      >
                        <span>{item.label}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">&rarr;</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Find Space with dropdown */}
              <div
                className="relative px-2 py-2"
                ref={findSpaceDropdownRef}
                onMouseEnter={() => {
                  setIsFindSpaceDropdownOpen(true);
                  setIsWhyTidelDropdownOpen(false);
                  setIsAboutUsDropdownOpen(false);
                  setIsBlogsDropdownOpen(false);
                  setIsSupportDropdownOpen(false);
                }}
                onMouseLeave={() => {
                  setTimeout(() => setIsFindSpaceDropdownOpen(false), 150);
                }}
              >
                <button
                  className="nav-button text-slate-800 text-sm font-semibold hover:text-blue-600 px-2 py-2 rounded-lg hover:bg-slate-100 flex items-center whitespace-nowrap"
                  onClick={() => {
                    navigate('/find-space');
                    window.scrollTo(0, 0);
                    setIsFindSpaceDropdownOpen(false);
                    setIsWhyTidelDropdownOpen(false);
                    setIsAboutUsDropdownOpen(false);
                    setIsBlogsDropdownOpen(false);
                    setIsSupportDropdownOpen(false);
                  }}
                >
                  Find Space
                </button>
                {isFindSpaceDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl py-2 z-100 border border-gray-100 flex flex-col overflow-visible"
                    onMouseEnter={() => setIsFindSpaceDropdownOpen(true)}
                    onMouseLeave={() => setIsFindSpaceDropdownOpen(false)}
                  >
                    {findSpaceDropdownItems.map((item, index) => (
                      item.submenu ? (
                        <div
                          key={index}
                          className="relative"
                          ref={spaceBookingSubmenuRef}
                        >
                          <button
                            className="dropdown-item w-full text-left px-6 py-4 text-base font-medium text-gray-700 hover:bg-slate-50 hover:text-blue-600 transition-all duration-200 flex items-center justify-between group"
                            onClick={() => setIsSpaceBookingSubmenuOpen(!isSpaceBookingSubmenuOpen)}
                          >
                            <span>{item.label}</span>
                            <span className="transition-transform group-hover:translate-x-1 text-blue-400">&raquo;</span>
                          </button>
                          {isSpaceBookingSubmenuOpen && (
                            <div className="absolute top-0 left-full ml-1 w-64 bg-white rounded-lg shadow-lg py-2 z-110 border border-gray-100">
                              {item.submenu.map((subItem, subIndex) => (
                                <button
                                  key={subIndex}
                                  onClick={() => {
                                    setIsSpaceBookingSubmenuOpen(false);
                                    setIsFindSpaceDropdownOpen(false);
                                    handleLinkClick(subItem.path, null);
                                  }}
                                  className="dropdown-item block px-4 py-3 w-full text-left text-base text-gray-700 hover:bg-slate-100 hover:text-blue-600 transition-all duration-200"
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <button
                          key={index}
                          onClick={() => handleLinkClick(item.path, setIsFindSpaceDropdownOpen)}
                          className="dropdown-item w-full text-left px-6 py-4 text-base font-medium text-gray-700 hover:bg-slate-50 hover:text-blue-600 transition-all duration-200 flex items-center justify-between group"
                        >
                          <span>{item.label}</span>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">&rarr;</span>
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>

              {/* About Us with dropdown */}
              <div 
                className="relative px-2 py-2"
                ref={aboutUsDropdownRef}
                onMouseEnter={() => {
                  setIsAboutUsDropdownOpen(true);
                  setIsWhyTidelDropdownOpen(false);
                  setIsFindSpaceDropdownOpen(false);
                  setIsBlogsDropdownOpen(false);
                  setIsSupportDropdownOpen(false);
                }}
                onMouseLeave={() => {
                  setTimeout(() => setIsAboutUsDropdownOpen(false), 150);
                }}
              >
                <button
                  className="nav-button text-slate-800 text-sm font-semibold hover:text-blue-600 transition-all duration-300 px-2 py-2 rounded-lg hover:bg-slate-100 flex items-center whitespace-nowrap"
                  onClick={() => {
                    navigate('/about-us');
                    window.scrollTo(0, 0);
                    setIsAboutUsDropdownOpen(false);
                    setIsWhyTidelDropdownOpen(false);
                    setIsFindSpaceDropdownOpen(false);
                    setIsBlogsDropdownOpen(false);
                    setIsSupportDropdownOpen(false);
                  }}
                >
                  About Us
                </button>
                
                {isAboutUsDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-100 border border-gray-100"
                    onMouseEnter={() => setIsAboutUsDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutUsDropdownOpen(false)}
                  >
                    {aboutUsDropdownItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleLinkClick(item.path, setIsAboutUsDropdownOpen)}
                        className="dropdown-item block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-slate-100 hover:text-blue-600 transition-all duration-200"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Blogs with dropdown */}
              <div 
                className="relative px-2 py-2"
                ref={blogsDropdownRef}
                onMouseEnter={() => {
                  setIsBlogsDropdownOpen(true);
                  setIsWhyTidelDropdownOpen(false);
                  setIsFindSpaceDropdownOpen(false);
                  setIsAboutUsDropdownOpen(false);
                  setIsSupportDropdownOpen(false);
                }}
                onMouseLeave={() => {
                  setTimeout(() => setIsBlogsDropdownOpen(false), 150);
                }}
              >
                <button
                  className="nav-button text-slate-800 text-sm font-semibold hover:text-blue-600 transition-all duration-300 px-2 py-2 rounded-lg hover:bg-slate-100 flex items-center whitespace-nowrap"
                  onClick={() => {
                    navigate('/blogs');
                    window.scrollTo(0, 0);
                    setIsBlogsDropdownOpen(false);
                    setIsWhyTidelDropdownOpen(false);
                    setIsFindSpaceDropdownOpen(false);
                    setIsAboutUsDropdownOpen(false);
                    setIsSupportDropdownOpen(false);
                  }}
                >
                  Blogs
                </button>
                
                {isBlogsDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-100 border border-gray-100"
                    onMouseEnter={() => setIsBlogsDropdownOpen(true)}
                    onMouseLeave={() => setIsBlogsDropdownOpen(false)}
                  >
                    {blogsDropdownItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleLinkClick(item.path, setIsBlogsDropdownOpen)}
                        className="dropdown-item block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-slate-100 hover:text-blue-600 transition-all duration-200"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Tenders Button */}
              <button
                onClick={() => handleLinkClick('/tenders', null)}
                className="nav-button text-slate-800 text-sm font-semibold hover:text-blue-600 px-2 py-2 rounded-lg hover:bg-slate-100 flex items-center whitespace-nowrap"
              >
                Tenders
              </button>

              {/* Announcements Button */}
              <button
                onClick={() => handleLinkClick('/announcements', null)}
                className="nav-button text-slate-800 text-sm font-semibold hover:text-blue-600 px-2 py-2 rounded-lg hover:bg-slate-100 flex items-center whitespace-nowrap"
              >
                Announcements
              </button>

              {/* Support with dropdown */}
              <div 
                className="relative px-2 py-2"
                ref={supportDropdownRef}
                onMouseEnter={() => {
                  setIsSupportDropdownOpen(true);
                  setIsWhyTidelDropdownOpen(false);
                  setIsFindSpaceDropdownOpen(false);
                  setIsAboutUsDropdownOpen(false);
                  setIsBlogsDropdownOpen(false);
                }}
                onMouseLeave={() => {
                  setTimeout(() => setIsSupportDropdownOpen(false), 150);
                }}
              >
                <button
                  className="nav-button text-slate-800 text-sm font-semibold hover:text-blue-600 px-2 py-2 rounded-lg hover:bg-slate-100 flex items-center whitespace-nowrap"
                  onClick={() => {
                    handleLinkClick('/support', setIsSupportDropdownOpen);
                  }}
                >
                  Support
                </button>
                
                {isSupportDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-100 border border-gray-100"
                    onMouseEnter={() => setIsSupportDropdownOpen(true)}
                    onMouseLeave={() => setIsSupportDropdownOpen(false)}
                  >
                    {supportDropdownItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleLinkClick(item.path, setIsSupportDropdownOpen)}
                        className="dropdown-item block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-slate-100 hover:text-blue-600 transition-all duration-200"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Enquire Button - Desktop */}
            {!hideEnquireButton && (
              <div className="hidden xl:flex items-center justify-center">
                <button
                  onClick={() => setIsEnquirePopupOpen(!isEnquirePopupOpen)}
                  className="enquire-button"
                >
                  Enquire
                </button>
              </div>
            )}

            {/* Hamburger Menu Button - visible on mobile/tablet */}
            <div className="xl:hidden flex items-center gap-3">
              {!hideEnquireButton && (
                <button
                  onClick={() => setIsEnquirePopupOpen(!isEnquirePopupOpen)}
                  className="bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Enquire
                </button>
              )}
              <button
                ref={mobileMenuRef}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              {/* Why TIDEL */}
              <div>
                <button
                  onClick={() => {
                    setIsWhyTidelDropdownOpen(!isWhyTidelDropdownOpen);
                    setIsFindSpaceDropdownOpen(false);
                    setIsAboutUsDropdownOpen(false);
                    setIsBlogsDropdownOpen(false);
                    setIsSupportDropdownOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 text-slate-800 font-semibold hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Why TIDEL
                </button>
                {isWhyTidelDropdownOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {whyTidelDropdownItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleLinkClick(item.path, setIsWhyTidelDropdownOpen)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Find Space */}
              <div>
                <button
                  onClick={() => {
                    setIsFindSpaceDropdownOpen(!isFindSpaceDropdownOpen);
                    setIsWhyTidelDropdownOpen(false);
                    setIsAboutUsDropdownOpen(false);
                    setIsBlogsDropdownOpen(false);
                    setIsSupportDropdownOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 text-slate-800 font-semibold hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Find Space
                </button>
                {isFindSpaceDropdownOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {findSpaceDropdownItems.map((item, index) => (
                      item.submenu ? (
                        <div key={index}>
                          <button
                            onClick={() => setIsSpaceBookingSubmenuOpen(!isSpaceBookingSubmenuOpen)}
                            className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                          >
                            {item.label}
                          </button>
                          {isSpaceBookingSubmenuOpen && (
                            <div className="pl-4 space-y-1">
                              {item.submenu.map((subItem, subIndex) => (
                                <button
                                  key={subIndex}
                                  onClick={() => handleLinkClick(subItem.path, setIsFindSpaceDropdownOpen)}
                                  className="block w-full text-left px-4 py-2 text-xs text-gray-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <button
                          key={index}
                          onClick={() => handleLinkClick(item.path, setIsFindSpaceDropdownOpen)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                        >
                          {item.label}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>

              {/* About Us */}
              <div>
                <button
                  onClick={() => {
                    setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
                    setIsWhyTidelDropdownOpen(false);
                    setIsFindSpaceDropdownOpen(false);
                    setIsBlogsDropdownOpen(false);
                    setIsSupportDropdownOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 text-slate-800 font-semibold hover:bg-slate-50 rounded-lg transition-colors"
                >
                  About Us
                </button>
                {isAboutUsDropdownOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {aboutUsDropdownItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleLinkClick(item.path, setIsAboutUsDropdownOpen)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Blogs */}
              <div>
                <button
                  onClick={() => {
                    setIsBlogsDropdownOpen(!isBlogsDropdownOpen);
                    setIsWhyTidelDropdownOpen(false);
                    setIsFindSpaceDropdownOpen(false);
                    setIsAboutUsDropdownOpen(false);
                    setIsSupportDropdownOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 text-slate-800 font-semibold hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Blogs
                </button>
                {isBlogsDropdownOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {blogsDropdownItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleLinkClick(item.path, setIsBlogsDropdownOpen)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Tenders */}
              <button
                onClick={() => handleLinkClick('/tenders', null)}
                className="w-full text-left px-4 py-3 text-slate-800 font-semibold hover:bg-slate-50 rounded-lg transition-colors"
              >
                Tenders
              </button>

              {/* Announcements */}
              <button
                onClick={() => handleLinkClick('/announcements', null)}
                className="w-full text-left px-4 py-3 text-slate-800 font-semibold hover:bg-slate-50 rounded-lg transition-colors"
              >
                Announcements
              </button>

              {/* Support */}
              <div>
                <button
                  onClick={() => {
                    handleLinkClick('/support', setIsSupportDropdownOpen);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 text-slate-800 font-semibold hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Support
                </button>
                {isSupportDropdownOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {supportDropdownItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleLinkClick(item.path, setIsSupportDropdownOpen)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Enquire Popup */}
        {isEnquirePopupOpen && !hideEnquireButton && (
          <div className="fixed inset-0 bg-black/50 flex items-start justify-end z-100 p-4">
            <div 
              ref={enquirePopupRef}
              className="bg-white text-gray-800 rounded-lg p-8 max-w-md w-full animate-fade-in"
            >
              <h3 className="text-2xl font-bold mb-3 text-blue-600">ENQUIRY</h3>
              <p className="text-lg mb-6 text-gray-600">Click here to enquire.</p>
              
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded hover:bg-blue-700 transition-colors">
                  Book Facility
                </button>
                <button className="w-full bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded hover:bg-blue-700 transition-colors">
                  Find Space
                </button>
                <button className="w-full bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded hover:bg-blue-700 transition-colors">
                  Visitor Pass
                </button>
                <button 
                  onClick={() => setIsEnquirePopupOpen(false)}
                  className="w-full bg-gray-200 text-gray-800 text-lg font-medium px-6 py-3 rounded hover:bg-gray-300 transition-colors"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
