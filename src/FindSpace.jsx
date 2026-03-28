import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import findImage from './assets/find.png';
import planImage from './assets/Plan.png';

const FindSpace = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedLocation, setSelectedLocation] = useState('Taramani, Chennai');
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [enquiryPopup, setEnquiryPopup] = useState(false);
  const [enquiryFloor, setEnquiryFloor] = useState('');
  const [imagePopup, setImagePopup] = useState(false);
  const sectionRefs = useRef({});
  const dropdownRef = useRef(null);

  const locationData = {
    'Taramani, Chennai': {
      desc: "TIDEL's Numero Uno, the place where it all began.",
      tag: 'Chennai Hub',
      spaces: [
        { floor: '1st Floor, Phase I, TIDEL Park', type: 'IT / ITeS / Office', area: '23,500 sq.ft', status: 'Available' },
        { floor: '2nd Floor, Phase I, TIDEL Park', type: 'IT / ITeS / Office', area: '18,200 sq.ft', status: 'Available' },
        { floor: '3rd Floor, Phase II, TIDEL Park', type: 'IT / ITeS / Office', area: '15,800 sq.ft', status: 'Available' },
        { floor: '4th Floor, Phase I, TIDEL Park', type: 'IT / ITeS / Office', area: '12,400 sq.ft', status: 'Partially Available' },
        { floor: '5th Floor, Phase II, TIDEL Park', type: 'IT / ITeS / Office', area: '20,100 sq.ft', status: 'Available' },
        { floor: 'Ground Floor, Phase I, TIDEL Park', type: 'IT / ITeS / Office', area: '8,600 sq.ft', status: 'Available' },
      ]
    },
    'Thanjavur': {
      desc: "Cultural heritage meets modern tech in the heart of Delta.",
      tag: 'Tier-II Excellence',
      spaces: [
        { floor: 'Ground Floor', type: 'IT / ITeS', area: '5,000 sq.ft', status: 'Available' }
      ]
    },
    'Villupuram': {
      desc: "Strategic connectivity for the future of tech expansion.",
      tag: 'Emerging Tech Zone',
      spaces: [
        { floor: '1st Floor', type: 'IT / Office', area: '12,000 sq.ft', status: 'Available' }
      ]
    },
    'Pattabiram, Chennai': {
      desc: "The western gateway to Chennai's innovation corridor.",
      tag: 'New Launch',
      spaces: [
        { floor: 'Phase I, Level 4', type: 'ITeS', area: '45,000 sq.ft', status: 'Available' }
      ]
    },
    'Salem': {
      desc: "Driving industrial growth with world-class infrastructure.",
      tag: 'Industrial Hub',
      spaces: [
        { floor: 'Level 2', type: 'Office', area: '10,000 sq.ft', status: 'Available' }
      ]
    },
    'Thoothukudi': {
      desc: "Coastal connectivity for global business operations.",
      tag: 'Industrial Port City',
      spaces: [
        { floor: 'Block A', type: 'IT / ITeS', area: '15,000 sq.ft', status: 'Available' }
      ]
    },
    'Tiruppur': {
      desc: "Empowering the textile capital with technology.",
      tag: 'Commercial Hub',
      spaces: [
        { floor: 'Main Wing', type: 'IT / Office', area: '8,000 sq.ft', status: 'Available' }
      ]
    },
    'Karaikudi': {
      desc: "Innovation in the land of heritage and education.",
      tag: 'Educational Tech Hub',
      spaces: [
        { floor: 'East Wing', type: 'ITeS', area: '6,500 sq.ft', status: 'Available' }
      ]
    }
  };

  const locations = Object.keys(locationData);

  // Read city from URL query parameter (?city=Salem) when navigating from Navbar
  useEffect(() => {
    const cityParam = searchParams.get('city');
    if (cityParam && locations.includes(cityParam)) {
      setSelectedLocation(cityParam);
    }
  }, [searchParams, location]);

  const tabs = [
    { id: 'profile', label: 'Space Availability' },
    { id: 'home', label: 'View Master Plan' },
    { id: 'application', label: 'Application form' },
    { id: 'tc', label: 'Terms and Conditions' },
    { id: 'enquiry', label: 'Enquiry' },
  ];



  const keyContacts = [
    {
      title: 'Tenders',
      contacts: [
        { name: 'Sandeep Nanduri IAS', designation: 'Managing Director', org: 'TIDEL Park Ltd.' }
      ]
    },
    {
      title: 'Feedback & Complaints',
      contacts: [
        { name: 'MD Office', phone: '+91 44 22541634', email: 'md@tidelpark.com' }
      ]
    },
    {
      title: 'PR & Media',
      contacts: [
        { name: 'D Sadiq Ahmed', designation: 'Marketing Head', phone: '+91 99400 75962', email: 'marketing@tidelpark.com' }
      ]
    }
  ];

  const termsAndConditions = [
    'Application for allotment of space shall be shared by request.',
    'The application form duly filled-in is to be submitted together with interest free booking advance equivalent to ten months rent by RTGS / Cheque / DD in favour of "TIDEL Park Ltd." payable at "Chennai".',
    'The Lease Agreement of TIDEL is to be signed within 30 days from the date of allotment but not later than the date of occupation.',
    'In case the applicant desires to withdraw the application prior to payment of balance security deposit, the booking advance will be refunded after deducting 10% of the advance paid towards administrative cost incurred by the company.',
    'All statutory clearness required have to be obtained by the allotee before commencement of any work.',
    'The entire work including fixing, removal and refixing of all activities has to be done by you at your cost, without causing damages to the cable of other occupants / service provider and TIDEL properties.',
  ];

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLocationDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Auto-scroll to the section hash on load
    const hash = window.location.hash.replace('#', '');
    if (hash === 'keycontact') {
      setTimeout(() => {
        const el = document.getElementById('keycontact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const el = document.getElementById(`section-${tabId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleEnquireClick = (floor) => {
    setEnquiryFloor(floor);
    setEnquiryPopup(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex flex-col pt-16 md:pt-20">
        <div className="relative flex-grow w-full overflow-hidden flex flex-col justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${findImage})` }} 
          />
          {/* Subtle dark overlay for readability, replacing the heavy blue gradients */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 flex justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 uppercase inline-block border-b-4 border-transparent hover:border-white transition-all pb-2">
                March Ahead
              </h1>
              <p className="text-base md:text-xl text-white font-medium drop-shadow-md">
                For businesses that go places, TIDEL is the place to be.
              </p>
            </div>
          </div>

          {/* ENQUIRY Button */}
          <div className="absolute bottom-4 right-8 z-20">
            <button 
              onClick={() => handleTabClick('enquiry')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-3 px-6 flex items-center justify-center gap-2 transition-all rounded-sm text-sm"
            >
              Enquiry <span>&uarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* City Selector Bar - Matching requested screenshot */}
      <div className="relative z-40 bg-gray-100 flex flex-col md:flex-row shadow-sm">
        {/* Left Side Selector (Grey Background) */}
        <div 
          className="w-full md:w-1/3 bg-[#a1a1a1] hover:bg-[#8e8e8e] transition-colors py-5 px-8 md:px-16 lg:px-24 flex items-center justify-between cursor-pointer relative group"
          onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
          ref={dropdownRef}
        >
          <span className="text-white text-base md:text-lg font-bold uppercase tracking-wider">
            {selectedLocation}
          </span>
          <svg className={`w-5 h-5 text-white transition-transform duration-300 ${locationDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>

          {/* Location Dropdown */}
          {locationDropdownOpen && (
            <div className="absolute top-full left-0 w-full bg-[#f8f9fa] shadow-xl z-50 border-t border-white/10">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLocation(loc);
                    setLocationDropdownOpen(false);
                  }}
                  className={`w-full text-left px-8 md:px-16 py-4 text-sm md:text-base font-bold uppercase transition-all duration-200 border-b border-gray-100 last:border-0
                    ${selectedLocation === loc 
                      ? 'bg-[#19438e] text-white' 
                      : 'text-gray-700 hover:bg-gray-200 hover:pl-10 md:hover:pl-20'
                    }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side Description (Light Grey Background) */}
        <div className="w-full md:w-2/3 bg-[#e5e5e5] py-5 px-8 md:px-10 flex items-center justify-center md:justify-start">
          <p className="text-gray-600 text-sm md:text-base italic font-medium leading-relaxed tracking-wide text-center md:text-left">
            {locationData[selectedLocation]?.desc || "Securing your place in the hub of innovation."}
          </p>
        </div>
      </div>



      {/* Tab Navigation */}
      <section className="sticky top-16 md:top-20 z-30 bg-white border-b border-gray-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto w-full flex overflow-x-auto px-4 md:px-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex-none px-6 md:px-8 py-5 text-sm md:text-base font-semibold tracking-wide transition-all border-b-2 cursor-pointer whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'text-gray-900 border-[#19438e]' 
                  : 'text-gray-500 border-transparent hover:text-gray-800 hover:border-gray-300'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* ===== SPACE AVAILABILITY SECTION ===== */}
      <section id="section-profile" className="py-16 md:py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 tracking-wide">a. IT / ITeS / Office</h2>
          </div>

          {/* Space Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#19438e] text-white">
                  <th className="text-left py-4 px-6 text-sm font-semibold tracking-wide">FLOOR / LOCATION</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold tracking-wide">TYPE</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold tracking-wide">AREA</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold tracking-wide">STATUS</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold tracking-wide">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {locationData[selectedLocation]?.spaces.map((space, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-200 transition-colors hover:bg-blue-50/30 ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}
                  >
                    <td className="py-4 px-6 text-sm text-gray-700 font-medium">{space.floor}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{space.type}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{space.area}</td>
              <td className="py-4 px-6">
                <span className={`inline-block px-3 py-1 text-xs font-semibold ${
                  space.status === 'Available' 
                    ? 'text-green-600' 
                    : 'text-amber-600'
                }`}>
                  {space.status}
                </span>
              </td>
              <td className="py-4 px-6 text-center">
                <button 
                  onClick={() => handleEnquireClick(space.floor)}
                  className="bg-[#315797] hover:bg-[#19438e] text-white text-xs font-semibold py-2 px-6 transition-colors cursor-pointer tracking-wide rounded-sm"
                >
                  Enquire
                </button>
              </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* ===== VIEW MASTER PLAN SECTION ===== */}
      <section id="section-home" className="py-16 md:py-24 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide">View Master Plan</h2>
          </div>
          
          <div className="bg-white border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Master Plan Image */}
              <div
                className="aspect-video w-full border border-gray-200 bg-gray-100 flex items-center justify-center group relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setImagePopup(true)}
              >
                <img
                  src={planImage}
                  alt="Master Plan"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                    <span className="text-sm font-semibold text-gray-700">Click to enlarge</span>
                  </div>
                </div>
              </div>
              
              {/* Master Plan Details */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">TIDEL Park – Taramani</h3>
                  <p className="text-gray-600 leading-relaxed">
                    TIDEL Park is strategically located in Taramani, Chennai, with excellent connectivity via MRTS, 
                    bus routes, and proximity to major IT corridors. The campus spans over 1.2 million sq.ft 
                    of prime office space across multiple phases.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-2xl font-bold text-[#19438e]">1.2M</p>
                    <p className="text-xs text-gray-500 mt-1">Sq. Ft. Total Area</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-2xl font-bold text-[#19438e]">50+</p>
                    <p className="text-xs text-gray-500 mt-1">Companies</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-2xl font-bold text-[#19438e]">2</p>
                    <p className="text-xs text-gray-500 mt-1">Phases</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-2xl font-bold text-[#19438e]">24/7</p>
                    <p className="text-xs text-gray-500 mt-1">Security & Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FORM SECTION ===== */}
      <section id="section-application" className="py-16 md:py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide">Application form</h2>
          </div>
          
          <div className="border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#19438e]/10 mb-4">
                <svg className="w-8 h-8 text-[#19438e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Request Application Form</h3>
              <p className="text-gray-500 max-w-lg mx-auto">
                Application for allotment of space shall be shared by request. Please contact our marketing 
                team or submit an enquiry to receive the application form.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:marketing@tidelpark.com" 
                className="inline-flex items-center gap-2 bg-[#19438e] hover:bg-[#13326c] text-white font-bold py-3 px-8 transition-all duration-300 hover:shadow-lg tracking-wide text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                EMAIL US
              </a>
              <a 
                href="tel:+919940075962" 
                className="inline-flex items-center gap-2 border-2 border-[#19438e] text-[#19438e] hover:bg-[#19438e] hover:text-white font-bold py-3 px-8 transition-all duration-300 tracking-wide text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                CALL US
              </a>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-lg text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Space Availability: <strong className="ml-1">D Sadiq Ahmed</strong> | Marketing Head | +91 99400 75962
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TERMS AND CONDITIONS SECTION ===== */}
      <section id="section-tc" className="py-16 md:py-24 px-6 md:px-16 lg:px-24 bg-gray-50 border-t border-gray-200 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide">Terms and Conditions</h2>
          </div>
          
          <div className="p-4 md:p-8">
            <ol className="space-y-6">
              {termsAndConditions.map((term, index) => (
                <li key={index} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center text-gray-500 font-semibold">
                    {index + 1}.
                  </div>
                  <p className="text-gray-600 leading-relaxed pt-1">{term}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY SECTION ===== */}
      <section id="section-enquiry" className="py-16 md:py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide">Enquiry</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Enquiry Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 p-8 md:p-10">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Company Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:border-[#19438e] focus:ring-1 focus:ring-[#19438e]/20 transition-all" 
                        placeholder="Enter company name" 
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Contact Person *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:border-[#19438e] focus:ring-1 focus:ring-[#19438e]/20 transition-all" 
                        placeholder="Enter contact person" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:border-[#19438e] focus:ring-1 focus:ring-[#19438e]/20 transition-all" 
                        placeholder="email@company.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:border-[#19438e] focus:ring-1 focus:ring-[#19438e]/20 transition-all" 
                        placeholder="+91 XXXXX XXXXX" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Space Required (sq.ft)</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:border-[#19438e] focus:ring-1 focus:ring-[#19438e]/20 transition-all" 
                        placeholder="e.g., 10,000 sq.ft" 
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Preferred Location</label>
                      <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:border-[#19438e] focus:ring-1 focus:ring-[#19438e]/20 transition-all text-gray-600">
                        <option>Taramani, Chennai</option>
                        <option>Thanjavur</option>
                        <option>Villupuram</option>
                        <option>Pattabiram, Chennai</option>
                        <option>Salem</option>
                        <option>Thoothukudi</option>
                        <option>Tiruppur</option>
                        <option>Karaikudi</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Message / Requirements</label>
                    <textarea 
                      rows="4" 
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:border-[#19438e] focus:ring-1 focus:ring-[#19438e]/20 transition-all resize-none" 
                      placeholder="Please describe your requirements..."
                    ></textarea>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="terms-agree" className="w-4 h-4 accent-[#19438e]" />
                    <label htmlFor="terms-agree" className="text-sm text-gray-500">
                      I agree to the <span className="text-[#19438e] underline cursor-pointer">Terms and Conditions</span>
                    </label>
                  </div>
                  <button 
                    type="button" 
                    className="bg-[#19438e] hover:bg-[#13326c] text-white font-bold py-3 px-10 transition-all duration-300 hover:shadow-lg tracking-widest text-sm cursor-pointer"
                  >
                    SUBMIT ENQUIRY
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-[#f0f4f8] border border-gray-200 p-8 text-gray-800">
                <h3 className="text-lg font-bold mb-4 tracking-wide">Space Availability</h3>
                <div className="space-y-3 pt-4 border-t border-gray-300">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">D Sadiq Ahmed</p>
                      <p className="text-gray-600 text-sm">Marketing Head</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <svg className="w-5 h-5 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-gray-700 font-medium">+91 99400 75962</p>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <svg className="w-5 h-5 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-700 font-medium">marketing@tidelpark.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-[#f8f9fb] to-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="#section-profile" className="flex items-center gap-2 text-[#19438e] hover:text-[#13326c] text-sm font-medium transition-colors group">
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    View Space Availability
                  </a>
                  <a href="#section-application" className="flex items-center gap-2 text-[#19438e] hover:text-[#13326c] text-sm font-medium transition-colors group">
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Download Application Form
                  </a>
                  <a href="#section-tc" className="flex items-center gap-2 text-[#19438e] hover:text-[#13326c] text-sm font-medium transition-colors group">
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Terms & Conditions
                  </a>
                  <a href="#keycontact" className="flex items-center gap-2 text-[#19438e] hover:text-[#13326c] text-sm font-medium transition-colors group">
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Key Contacts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY CONTACTS SECTION ===== */}
      <section id="keycontact" className="py-20 px-8 md:px-16 lg:px-24 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light text-slate-700 uppercase tracking-[0.2em] mb-4">Key Contacts</h2>
            <div className="w-16 h-1 bg-[#19438e] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyContacts.map((section, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 shadow-sm rounded-sm flex flex-col items-center hover:shadow-md transition-shadow group"
              >
                <div className="w-full py-4 px-6 border-b border-gray-50 bg-slate-50/50 group-hover:bg-[#19438e] group-hover:text-white transition-colors duration-300">
                   <h3 className="text-lg font-bold text-center uppercase tracking-wider">{section.title}</h3>
                </div>
                <div className="p-10 text-center flex flex-col justify-center grow w-full">
                  {section.contacts.map((contact, cIdx) => (
                    <div key={cIdx} className="space-y-3">
                      <p className="text-sm font-black text-slate-800">{contact.name}</p>
                      {contact.designation && (
                        <p className="text-xs font-medium text-slate-500">{contact.designation}</p>
                      )}
                      {contact.org && (
                        <p className="text-xs font-medium text-slate-500">{contact.org}</p>
                      )}
                      {contact.phone && (
                        <a href={`tel:${contact.phone}`} className="block text-xs font-bold text-[#19438e] hover:text-blue-700 transition-colors mt-2">
                          {contact.phone}
                        </a>
                      )}
                      {contact.email && (
                        <a href={`mailto:${contact.email}`} className="block text-xs font-bold text-[#19438e] hover:text-blue-700 transition-colors">
                          {contact.email}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY POPUP MODAL ===== */}
      {enquiryPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setEnquiryPopup(false)}>
          <div 
            className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 p-8 relative animate-[fadeInScale_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setEnquiryPopup(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-xl font-bold text-gray-800 mb-1">Enquire About Space</h3>
            <p className="text-sm text-gray-500 mb-6">{enquiryFloor}</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Name *</label>
                <input type="text" className="w-full px-4 py-2.5 border border-gray-200 rounded focus:outline-none focus:border-[#19438e] transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Email *</label>
                <input type="email" className="w-full px-4 py-2.5 border border-gray-200 rounded focus:outline-none focus:border-[#19438e] transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Phone *</label>
                <input type="tel" className="w-full px-4 py-2.5 border border-gray-200 rounded focus:outline-none focus:border-[#19438e] transition-all" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Message</label>
                <textarea rows="3" className="w-full px-4 py-2.5 border border-gray-200 rounded focus:outline-none focus:border-[#19438e] transition-all resize-none" placeholder="Additional requirements..."></textarea>
              </div>
              <button 
                type="button" 
                className="w-full bg-[#19438e] hover:bg-[#13326c] text-white font-bold py-3 transition-colors tracking-widest text-sm cursor-pointer"
              >
                SUBMIT ENQUIRY
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ===== IMAGE POPUP MODAL ===== */}
      {imagePopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setImagePopup(false)}
        >
          <div
            className="relative max-w-5xl w-full animate-[fadeInScale_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setImagePopup(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors cursor-pointer z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={planImage}
              alt="Master Plan - Enlarged View"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default FindSpace;
