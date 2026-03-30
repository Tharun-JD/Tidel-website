import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-blue-50 via-slate-50 to-cyan-50 text-gray-900 py-16 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Animated tech grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptLTE4LTE4YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDE4YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0xOCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDE4YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAxKSIvPjwvZz48L3N2Zz4=')] opacity-50 animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-linear-to-r from-blue-500 to-cyan-500 rounded-4xl p-8 mb-12 shadow-lg transform hover:scale-[1.02] transition-all duration-500 hover:shadow-blue-500/30 border border-blue-300/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2 text-white">Subscribe to Our Tech Newsletter</h2>
              <p className="text-blue-100">Stay updated with IT trends and opportunities</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-l-xl w-full md:w-72 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 bg-white/95"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-r-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Branding Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src={logoImage} alt="TIDEL Park Logo" className="h-10" />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">Tamil Nadu's premier IT infrastructure hub, fostering innovation and technological excellence since inception.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
            
            <div className="mt-8">
              <div className="relative inline-block text-left">
                <select className="appearance-none bg-transparent border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 cursor-pointer w-32">
                  <option value="en">English</option>
                  <option value="ta">தமிழ்</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Us */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-gray-900 relative inline-block">
              About Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Vision', path: '/about-us#vision-mission' },
                { name: 'History', path: '/about-us#tidel-legacy' },
                { name: 'Board of Directors', path: '/about-us#board-of-directors' },
                { name: 'Shareholders', path: '/about-us#shareholders' },
                { name: 'Other Ventures', path: '/about-us#other-ventures' },
                { name: 'CSR Policy', path: '/about-us#csr-policy' },
                { name: 'NRC Policy', path: '/about-us#nrc-committee' },
                { name: 'CSR Committee', path: '/about-us#audit-committee' },
                { name: 'NR Committee', path: '/about-us#tender-committee' },
                { name: 'RTI', path: '/about-us#rti' },
                { name: 'Careers', path: '/about-us#careers' }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="footer-menu-item text-gray-600 hover:text-gray-900 transition-all duration-300 hover:translate-x-2 inline-block group">
                    <span className="group-hover:text-blue-500 transition-colors duration-300">→</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Find Space */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-gray-900 relative inline-block">
              Find Space
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Coimbatore', path: '/find-space?city=Coimbatore' },
                { name: 'Salem', path: '/find-space?city=Salem' },
                { name: 'Taramani', path: '/find-space?city=Taramani, Chennai' },
                { name: 'Thanjavur', path: '/find-space?city=Thanjavur' },
                { name: 'Thoothukudi', path: '/find-space?city=Thoothukudi' },
                { name: 'Tiruppur', path: '/find-space?city=Tiruppur' },
                { name: 'Villupuram', path: '/find-space?city=Villupuram' }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="footer-menu-item text-gray-600 hover:text-gray-900 transition-all duration-300 hover:translate-x-2 inline-block group">
                    <span className="group-hover:text-blue-500 transition-colors duration-300">→</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Why TIDEL */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-gray-900 relative inline-block">
              Why TIDEL
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Facilities', path: '/why-tidel#cn_fac_title' },
                { name: 'Highlights', path: '/why-tidel#highlights' },
                { name: 'Testimonials', path: '/why-tidel#testimonial' },
                { name: 'Life at TIDEL', path: '/why-tidel#lifeattidel' }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="footer-menu-item text-gray-600 hover:text-gray-900 transition-all duration-300 hover:translate-x-2 inline-block group">
                    <span className="group-hover:text-blue-500 transition-colors duration-300">→</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources & Support */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-gray-900 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                { name: 'Blog', path: '/blogs' },
                { name: 'Events', path: '/events' },
                { name: 'Tenders', path: '/tenders' }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="footer-menu-item text-gray-600 hover:text-gray-900 transition-all duration-300 hover:translate-x-2 inline-block group">
                    <span className="group-hover:text-blue-500 transition-colors duration-300">→</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mb-6 text-gray-900 relative inline-block">
              Support
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Get in Touch', path: '/support#location' },
                { name: 'Book Facility', path: '/support#book-facility' },
                { name: 'Visitors Pass', path: '/support#visitor-pass' },
                { name: 'Find TIDEL', path: '/support#location' }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="footer-menu-item text-gray-600 hover:text-gray-900 transition-all duration-300 hover:translate-x-2 inline-block group">
                    <span className="group-hover:text-blue-500 transition-colors duration-300">→</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 TIDEL Park. All rights reserved. Building Tamil Nadu's IT future.</p>
            <div className="flex space-x-6 text-sm">
              <Link to="/support" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">Privacy Policy</Link>
              <Link to="/support" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">Terms of Service</Link>
              <Link to="/support" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
