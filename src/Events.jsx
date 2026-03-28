import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import heroImage3 from './assets/hero3.png';

const eventsData = [
  {
    title: 'TIDEL Neo - Foundation Stone Laying Of Thoothukudi, Thanjavur & Salem',
    description: "Hon'ble Chief Minister Thiru. M . K . Stalin laid the foundation stone of upcoming TIDEL Neo parks in Thoothukudi, Thanjavur & Salem. The TIDEL Neo parks in Tier 2 & 3 cities will help to accelerate the socio-economic development and create employment opportunities to IT professionals in their own district.",
    image: 'https://www.tidelpark.com/uploads/image/untitled-design-7(1).jpg'
  },
  {
    title: 'TIDEL Turns Pink - Breast Cancer Awareness',
    description: 'Tidel Turns Pink in association with India turns pink ( ITP ) to create awareness and screening for breast cancer and join hands together for breast cancer free India 2030 as PINKTOBER Inaugurated by Mr. M.Saravanan, Executive Director, Tidel A. Anandakumar, Founder President of India Turns Pink Dr.Veda Padma Priya, Oncologist Mrs. Martina, chief manager, SBI bank',
    image: 'https://www.tidelpark.com/manage/includes/kcfinder/upload/image/events/pinktober.jpg'
  },
  {
    title: 'World Ozone Day',
    description: 'World Ozone Day. Montreal Protocol @35: Global Cooperation Protecting Life on Earth. Clients and Employees of TIDEL taking the pledge to make every citizen, office and industry aware of using or making only non Ozone depleting Substances containing products.',
    image: 'https://www.tidelpark.com/manage/includes/kcfinder/upload/image/events/ozone-day.jpg'
  },
  {
    title: "Hon'ble Chief Minister Thiru. M . K . Stalin at TIDEL park.",
    description: 'Laid the foundation stone of two new Neo-TIDEL parks in Tiruppur and Villupuram districts. The mini IT parks will allow companies to open development centres and other facilities in Tier 2 & 3 cities and create substantial employment opportunities in the districts. Inaugurated the newly established SIPCOT Industrial Innovation Centres at Hosur and Sriperumbudur parks in partnership with Forge academy. Inaugurated Centre of Excellence (CoE) in Advanced Manufacturing. A collaborative venture between TIDCO and Dassault Systèmes.',
    image: 'https://www.tidelpark.com/manage/includes/kcfinder/upload/image/da4a7746.jpg'
  },
  {
    title: 'TIDEL Health Awareness Program',
    description: 'TIDEL Health Awareness Program for the clients in association with BHALAKH Medical Centre - Dr. S. Udhayashankar & Dr. S. Ranjitha.',
    image: 'https://www.tidelpark.com/manage/includes/kcfinder/upload/image/events/health-awareness-program.jpg'
  },
  {
    title: 'Environment Day Initiative',
    description: 'On the occasion of World Environment day, TIDEL in association with Greenpeace organized an environmental awareness drive inside TIDEL premises. Free saplings were distributed to all the participants.',
    image: 'https://www.tidelpark.com/manage/includes/kcfinder/upload/image/events/environment-day.jpg'
  },
  {
    title: 'Celebration of 22nd Anniversary of TIDEL Park',
    description: 'MD of TIDEL park Tmt Vandana Garg IAS Felicitated TIDEL employees for completing their longer service. Clients shared their valuable feedback and experience of having their office at TIDEL.',
    image: 'https://www.tidelpark.com/manage/includes/kcfinder/upload/image/_mg_3752.jpg'
  },
  {
    title: 'Republic Day Celebration',
    description: 'Hoisting of the national flag to mark India\u2019s Republic Day.',
    image: 'https://www.tidelpark.com/assets/img/event1.jpeg'
  },
  {
    title: 'Earth Day Initiative',
    description: 'On the occasion of earth day, Our Managing Director Mr. Nishant Krishna - IAS, along with the management staff of TIDEL planted trees at the upcoming TIDEL park project in Pattabiram.',
    image: 'https://www.tidelpark.com/manage/includes/kcfinder/upload/image/events/new-project-1.jpg'
  },
  {
    title: 'Road Safety Awareness',
    description: 'Employees of SB hold a Road Safety Awareness Campaign',
    image: 'https://www.tidelpark.com/uploads/image/mask-group-20.png'
  },
  {
    title: 'IT in the Pandemic',
    description: 'A two day conference was held to discuss the pandemic impact.',
    image: 'https://www.tidelpark.com/uploads/image/mask-group-19.png'
  },
  {
    title: 'World Health Environmental week event',
    description: 'TIDEL Park in association with Greenpeace (an independent global campaigning organisation) celebrated \u201cWorld Health Environmental week\u201d with exciting activities, VR demos, crosswords and plant saplings for all of TIDEL participants.',
    image: 'https://www.tidelpark.com/uploads/image/img/events/envion-day-2024.jpg'
  },
  {
    title: "Empowering Safety: TIDEL's 2023 Annual Emergency Evacuation Mock Drill",
    description: "In a poignant display of preparedness and unity, the TIDEL family came together during the 2023 Annual Emergency Evacuation Mock Drill. The exclusive demonstration not only showcased effective procedures but also stirred a profound sense of community and responsibility. As participants engaged with heightened awareness and genuine camaraderie, TIDEL fostered a spirit that transcended the drill's practicalities, leaving a lasting impression of resilience and mutual support within the TIDEL family.",
    image: 'https://www.tidelpark.com/uploads/image/img/events/mock-drill-dec-2023.jpg'
  },
  {
    title: "Health Unites: TIDEL & Kauvery hospital's Diabetes Screening",
    description: 'TIDEL joined hands with Kauvery Hospital to orchestrate a complimentary diabetes screening program. This altruistic endeavour extended its warm embrace to both cherished clients and dedicated staff members, exemplifying a shared commitment to well-being. The event, marked by a spirit of care and unity, provided a heartfelt opportunity for individuals to prioritise their health, fostering a sense of community and camaraderie.',
    image: 'https://www.tidelpark.com/uploads/image/img/events/diabetes-dec-20223.jpg'
  },
  {
    title: 'TIDEL Park: Pioneering progress at Tamil Nadu Global Investors Meet - 2024',
    description: 'Stepping into the future while honouring our legacy, TIDEL Park embraced a momentous opportunity to participate in the Tamil Nadu Global Investors Meet 2024. The event served as a platform for us to showcase our rich history, spanning milestones of growth and innovation. TIDEL Park stands as a symbol of progress. Our exclusive projects unveiled at the meet reflect our commitment to fostering innovation and economic development. As we navigate the future landscape, TIDEL Park remains dedicated to contributing significantly to the growth trajectory of Tamil Nadu, embodying the ethos of Growth, Innovation, and Together.',
    image: 'https://www.tidelpark.com/uploads/image/img/events/gim-2024.jpg'
  },
  {
    title: 'Festive Joy at TIDEL: Pongal Celebrations Unite Team and Clients',
    description: "TIDEL spreaded the joy of Pongal by adorning our TIDEL space with exclusive decorations. The vibrant and festive atmosphere not only celebrated the spirit of Pongal but also served as a gesture of appreciation for our incredible team and cherished clients. The office buzzed with enthusiasm as colleagues and clients came together to mark the occasion, sharing traditional Pongal delicacies and exchanging warm wishes. The festive decorations added a touch of cultural vibrancy, fostering a sense of unity and camaraderie among everyone present. TIDEL's Pongal celebrations exemplified our commitment to creating a positive and inclusive work environment, where festivities become opportunities for connection and shared joy.",
    image: 'https://www.tidelpark.com/uploads/image/img/events/pongal-2024.jpg'
  },
  {
    title: 'TIDEL Park Celebrates 75th Republic Day: Fostering Unity and Progress',
    description: "TIDEL Park proudly marked the 75th Republic Day with a grand celebration, reflecting our unwavering commitment to the spirit of unity and progress. The day resonated with immense pride and joy as our amazing employees came together in a show of patriotic fervour. The celebration served as a testament to our dedication to fostering a sense of unity, pride, and shared purpose among our TIDEL family, making the 75th Republic Day a truly memorable and meaningful occasion.",
    image: 'https://www.tidelpark.com/uploads/image/img/events/republic-day-2024.jpg'
  },
  {
    title: 'TIDEL-Kauvery Cancer Awareness Run, K10K, Triumphs with 5000+ Participants',
    description: "In a successful collaboration, TIDEL and Kauvery Hospital organized the Cancer Awareness Run, K10K, on Sunday. Over 5000 participants of all ages turned up, showcasing a strong community commitment to raising awareness about cancer. The event not only highlighted physical prowess but also emphasized the impact of TIDEL Park and Kauvery Hospital's joint initiative in promoting fitness and cancer awareness.",
    image: 'https://www.tidelpark.com/uploads/image/img/events/k10k.jpg'
  },
  {
    title: 'TIDEL Neo Villupuram Inaugurated by Chief Minister MK Stalin',
    description: 'TIDEL Neo at Villupuram was inaugurated grandly by our honourable Chief Minister Thiru MK Stalin, the new mini IT park is now all ready to be thriving with growing businesses and moving forward with success.',
    image: 'https://www.tidelpark.com/uploads/image/img/events/villupuram_tidel_park_inaugurates_cr.jpg'
  },
  {
    title: 'TIDEL Neo Villupuram Welcomes first client Mr. Uvraj S of SUV Start-Up Space.',
    description: 'TIDEL Neo in Villupuram proudly welcomed its inaugural client, Mr. Uvraj S of M/s. SUV Start-Up Space. The letter of allotment from the honourable Chief Minister of Tamil Nadu, Thiru MK Stalin, was presented to M/s. SUV Start-Up, marking the beginning of a promising collaboration at this innovative workspace',
    image: 'https://www.tidelpark.com/uploads/image/img/events/vilupuram-first-sign.jpg'
  },
  {
    title: 'TIDEL Park & TIDEL Neo Mini IT Park participation and showcasing of projects at UMAGINE 2024',
    description: "TIDEL Park's involvement at UMAGINE 2024 aimed to showcase TIDEL Neo Mini IT Park projects situated in Villupuram, Thoothukudi, Thanjavur, Salem, Vellore, and Tiruppur, along with TIDEL Park Pattabiram. The participation also focused on generating brand awareness about the TIDEL Neo mini IT parks that were set to emerge in tier 2 and tier 3 cities of Tamil Nadu.",
    image: 'https://www.tidelpark.com/uploads/image/img/events/unmagine-2024.jpeg'
  }
];

const Events = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex flex-col pt-16 md:pt-20"> 
        <div className="relative flex-grow w-full overflow-hidden flex flex-col justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${heroImage3})` }} 
          />
          <div className="absolute inset-0 bg-[#2f619b]/80 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c487b]/90 to-[#1c487b]/30"></div>
          
          <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-2xl text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide drop-shadow-md">
                Latest Events
              </h1>
              <p className="text-base md:text-xl text-white/90 font-light drop-shadow">
                TIDEL is buzzing with events and activities.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-2 bg-gradient-to-r from-[#19438e] to-[#a3a3a3] z-20"></div>
      </section>

      {/* Events Grid */}
      <section className="flex-grow py-16 px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest Event</h2>
              <div className="w-16 h-1 bg-[#1c487b]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-4xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all group cursor-pointer duration-300"
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className="h-52 bg-gray-200 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                      const span = document.createElement('span');
                      span.className = 'text-4xl';
                      span.textContent = '🎪';
                      e.target.parentElement.appendChild(span);
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-[#1c487b] transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <p className={`text-gray-600 text-sm mb-4 leading-relaxed ${expandedCard === index ? '' : 'line-clamp-3'}`}>
                    {event.description}
                  </p>
                  {event.description.length > 150 && (
                    <button 
                      className="text-[#1c487b] text-sm font-semibold hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCard(expandedCard === index ? null : index);
                      }}
                    >
                      {expandedCard === index ? 'Show Less' : 'Read More'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Events;
