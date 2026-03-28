import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import companyImage from './assets/company/tcs.png';
import tidelImage from './assets/tidel.png';
import neoImage from './assets/neo.png';
import thulirImage from './assets/thulir.png';

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "TIDEL Neo Rasipuram (Namakkal) – Foundation Stone Laid on 05.11.2025",
      date: "Nov 05, 2025",
      views: "5,396",
      comments: 0,
      excerpt: "On 5th November 2025, the Foundation Stone for TIDEL Neo Rasipuram (Namakkal) was laid, marking yet another milestone in Tamil Nadu’s IT expansion journey under the TIDEL Neo initiative. Located at Andagalur Gate, Kurukkapuram Village, Rasipuram Taluk, this Mini IT Park will span 63,000 sq. ft. of built-up area.",
      category: "TIDEL Neo",
      icon: neoImage
    },
    {
      id: 2,
      title: "TIDEL Neo Tiruvannamalai – Foundation Stone Laid on 01.08.2025",
      date: "Aug 01, 2025",
      views: "4,109",
      comments: 0,
      excerpt: "Paving the Way for Future IT Growth. The Foundation Stone for TIDEL Neo Tiruvannamalai was ceremoniously laid on 1st August 2025, marking a major step in bringing advanced IT infrastructure to the heritage-rich district of Tiruvannamalai.",
      category: "TIDEL Neo",
      icon: neoImage
    },
    {
      id: 3,
      title: "TIDEL Neo Vellore – Inaugurated on 05.11.2025",
      date: "Nov 05, 2025",
      views: "12,681",
      comments: 0,
      excerpt: "Located in Melmonavur–Abdullapuram Villages, Vellore Taluk, TIDEL Neo Vellore is a G+4 floor Mini IT Park spanning 60,000 sq. ft. The project, established at a cost of Rs. 32 Crores, is designed to foster innovation, collaboration, and the growth of IT and ITeS enterprises.",
      category: "Inauguration",
      icon: tidelImage
    },
    {
      id: 4,
      title: "TIDEL Neo Tiruppur – A New Era for IT Growth in the Knitwear Capital",
      date: "Oct 24, 2024",
      views: "20,411",
      comments: 0,
      excerpt: "TIDEL Neo Tiruppur marks a significant milestone in Tamil Nadu's IT infrastructure expansion. Located in Rakkiyapalayam Village, Avinashi Taluk, it spans 1.77 acres and features a built-up area of 65,500 sq. ft. across LG + G + 7 floors.",
      category: "TIDEL Neo",
      icon: neoImage
    },
    {
      id: 5,
      title: "TIDEL Neo Karaikudi: Igniting the IT Spark in the Heart of Chettinad",
      date: "Sep 15, 2024",
      views: "17,397",
      comments: 0,
      excerpt: "Blending the cultural richness of Chettinad with the future of Tamil Nadu's digital landscape, TIDEL Neo Karaikudi is redefining growth in southern Tamil Nadu. A G+2 Mini IT Park offering 50,000 sq. ft. for startups.",
      category: "Events",
      icon: tidelImage
    },
    {
      id: 6,
      title: "TIDEL Neo - Salem",
      date: "Aug 30, 2024",
      views: "82,517",
      comments: 0,
      excerpt: "Discover TIDEL Neo Salem, nestled amidst the serene landscapes of Aanaigoundanpatti-Karuppur Villages in Omalur Taluk. Spanning 15.72 acres, it boasts a substantial built-up area of 55,000 sq ft across G+3 floors.",
      category: "Infrastructure",
      icon: tidelImage
    },
    {
      id: 7,
      title: "TIDEL Neo Thoothukudi",
      date: "Jul 12, 2024",
      views: "56,471",
      comments: 0,
      excerpt: "Experience the perfect blend of modernity and functionality at TIDEL Neo Thoothukudi. Spanning 4.16 acres, this state-of-the-art mini IT Park features a built-up area of 63,100 sq ft across G+4 floors.",
      category: "Infrastructure",
      icon: tidelImage
    },
    {
      id: 8,
      title: "TIDEL Neo Thanjavur",
      date: "Jun 05, 2024",
      views: "101,887",
      comments: 0,
      excerpt: "Nestled amidst the serene landscapes of Pillayarpatti Village in Thanjavur Taluk, TIDEL Neo Thanjavur emerges as a beacon of modernity and innovation, providing 50,000 sq. ft. of office space.",
      category: "Inauguration",
      icon: tidelImage
    },
    {
      id: 9,
      title: "TIDEL’s Comprehensive Marketing Strategy",
      date: "May 20, 2024",
      views: "8,216",
      comments: 0,
      excerpt: "TIDEL’s marketing department drives the company’s growth through a dynamic and diverse approach, combining digital marketing with traditional methods and client engagement activities.",
      category: "Marketing",
      icon: tidelImage
    },
    {
      id: 10,
      title: "TIDEL Neo - Villupuram",
      date: "Apr 15, 2024",
      views: "58,768",
      comments: 0,
      excerpt: "TIDEL Neo: Redefining workspaces with avant-garde design in Villupuram. A 63,000 sq ft G+4 floor masterpiece, just 8 km from Pondicherry. More than an office space—it's a commitment to growth.",
      category: "TIDEL Neo",
      icon: neoImage
    },
    {
      id: 11,
      title: "TIDEL Park - Pattabiram",
      date: "Mar 10, 2024",
      views: "167,796",
      comments: 0,
      excerpt: "TIDEL Park, Chennai is constructing an Information Technology Park with 11.41 acres of land in Pattabiram village, Avadi Taluk, expanding the IT horizon to the western suburbs.",
      category: "Infrastructure",
      icon: tidelImage
    },
    {
      id: 12,
      title: "Tidel - A New Identity",
      date: "Feb 15, 2024",
      views: "63,614",
      comments: 0,
      excerpt: "Two decades ago, at the turn of the Millenia, Chennai had the rise of an important identity. Discover how TIDEL has evolved into a new identity for the modern IT professional.",
      category: "IT",
      icon: tidelImage
    },
    {
      id: 13,
      title: "TIDEL Thulir - Nurturing a Better Tomorrow",
      date: "Jan 12, 2024",
      views: "19,080",
      comments: 0,
      excerpt: "Tamil Nadu has been one of the top performing states in all facets. TIDEL Thulir is an initiative to nurture the next generation of excellence and sustainable development.",
      category: "IT",
      icon: thulirImage
    },
    {
      id: 14,
      title: "TIDEL NEO - For a new Tamil Nadu",
      date: "Jan 01, 2024",
      views: "42,563",
      comments: 0,
      excerpt: "The latest reports of NCAER underscore Tamil Nadu's IT potential. TIDEL NEO is the spearhead for bringing world-class infrastructure to every corner of the state.",
      category: "Marketing",
      icon: tidelImage
    }
  ];

  const popularPosts = [
    "TIDEL Neo Rasipuram (Namakkal) – Foundation Stone Laid on 05.11.2025",
    "TIDEL Neo Tiruvannamalai – Foundation Stone Laid on 01.08.2025",
    "TIDEL Neo Vellore – Inaugurated on 05.11.2025",
    "TIDEL Neo Tiruppur",
    "TIDEL Neo Karaikudi",
    "TIDEL Neo - Salem",
    "TIDEL Neo Thoothukudi",
    "TIDEL Neo Thanjavur"
  ];

  const categories = [
    { title: "Marketing", count: 5 },
    { title: "IT", count: 5 }
  ];
  
  const tags = ["Tamil Nadu", "New"];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      
      {/* Exact Header Replication */}
      <header className="pt-24 md:pt-32 pb-12 px-8 md:px-16 lg:px-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-gray-400 mb-6 flex gap-2 uppercase tracking-widest font-bold">
            <span className="hover:text-[#19438e] cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-[#19438e]">Blog</span>
          </nav>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#19438e] mb-6 leading-tight max-w-4xl tracking-tight">
                Interesting tidbits, event highlights, workplace fun and much more that goes on here at TIDEL!
              </h1>
            </div>
            <div className="flex-shrink-0">
              <img src={companyImage} alt="Company" className="w-48 h-48 object-contain rounded-xl shadow-lg border border-gray-100" />
            </div>
          </div>
        </div>
      </header>

      {/* Content Feed Section */}
      <section className="flex-grow py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20">
          
          {/* Main Feed: Left Column (70%) */}
          <div className="lg:w-2/3 flex flex-col gap-16">
            {blogPosts.map((post) => (
              <article key={post.id} className="group flex flex-col gap-6 md:gap-10 pb-16 border-b border-gray-100 last:border-0 hover:translate-x-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-10">
                  {/* Thumbnail */}
                  <div className="w-full md:w-80 h-52 bg-[#f8fafc] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-sm border border-gray-50 overflow-hidden relative">
                    <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/0 transition-colors"></div>
                    <img src={post.icon} alt={post.category} className="w-48 h-48 object-contain" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-[10px] font-black text-[#19438e] uppercase tracking-[0.2em] mb-4">
                      <span className="bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-400">{post.date}</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 group-hover:text-[#19438e] transition-colors leading-tight mb-5">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <button className="text-[#19438e] font-black text-xs tracking-[0.2em] uppercase border-b-4 border-[#19438e]/10 group-hover:border-[#19438e] transition-all pb-1.5 flex items-center gap-2">
                        Read More 
                        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </button>
                      
                      <div className="flex items-center gap-6 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                         <span className="flex items-center gap-1.5"><span className="text-lg">👁️</span> {post.views}</span>
                         <span className="flex items-center gap-1.5"><span className="text-lg">💬</span> {post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <div className="mt-8 flex justify-center md:justify-start">
              <button className="px-16 py-5 bg-[#19438e] text-white font-black rounded-full hover:bg-slate-800 transition-all shadow-2xl hover:scale-105 active:scale-95 tracking-[0.2em] uppercase text-xs">
                Load More Blog Posts
              </button>
            </div>
          </div>

          {/* Sidebar: Right Column (30%) */}
          <aside className="lg:w-1/3 flex flex-col gap-20">
            
            {/* Search */}
            <div className="relative group">
               <h4 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-6">Search Post</h4>
               <input 
                 type="text" 
                 placeholder="TYPE KEYWORD..."
                 className="w-full bg-[#f8fafc] border-0 rounded-2xl px-6 py-5 text-xs font-bold focus:outline-none focus:ring-4 focus:ring-[#19438e]/5 transition-all outline-none"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
               <span className="absolute right-6 top-[72px] text-gray-400 group-hover:text-[#19438e] transition-colors">🔍</span>
            </div>

            {/* Popular Posts */}
            <div>
              <h4 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-10 border-b-2 border-slate-50 pb-5">Popular Posts</h4>
              <ul className="flex flex-col gap-10">
                {popularPosts.map((title, idx) => (
                  <li key={idx} className="group cursor-pointer flex gap-5 items-start">
                    <span className="text-lg font-black text-slate-100 group-hover:text-[#19438e] transition-colors">0{idx + 1}</span>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-bold text-gray-700 group-hover:text-[#19438e] transition-colors leading-snug">
                        {title}
                      </p>
                      <span className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Article Insight</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-[#f8fafc] p-10 rounded-4xl border border-gray-50 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full -mr-10 -mt-10"></div>
              <h4 className="text-[10px] font-black text-[#19438e] uppercase tracking-[0.3em] mb-8">Categories</h4>
              <ul className="flex flex-col gap-5">
                {categories.map((cat, idx) => (
                  <li key={idx} className="flex items-center justify-between text-xs font-bold text-gray-700 hover:text-[#19438e] transition-colors cursor-pointer group">
                    <span className="flex items-center gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-[#19438e]"></span>
                       {cat.title}
                    </span>
                    <span className="bg-white px-3 py-1 rounded-lg text-[10px] text-gray-400 font-black shadow-sm group-hover:shadow-md transition-shadow">({cat.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div>
              <h4 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-8">Popular Tags</h4>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, idx) => (
                  <span key={idx} className="px-6 py-2.5 bg-white border-2 border-slate-100 rounded-xl text-[10px] font-black text-gray-500 uppercase tracking-widest hover:border-[#19438e] hover:text-[#19438e] cursor-pointer transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>

      {/* Corporate Footer Section Callout */}
      <section className="py-12 md:py-24 px-4 md:px-16 lg:px-24 bg-[#f8fafc] border-t border-gray-100">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
               <h2 className="text-3xl font-black text-[#19438e] mb-2 uppercase tracking-tight">Stay Informed</h2>
               <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Subscribe to the TIDEL monthly newsletter.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
               <input type="email" placeholder="YOUR EMAIL ADDRESS..." className="flex-grow md:w-80 px-8 py-5 rounded-full bg-white border-2 border-slate-100 focus:border-[#19438e] focus:outline-none text-xs font-bold tracking-widest outline-none transition-all shadow-sm" />
               <button className="bg-[#19438e] text-white px-10 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-slate-800 transition-all shadow-md active:scale-95">JOIN</button>
            </div>
         </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;
