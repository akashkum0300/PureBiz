import React, { useEffect, useRef } from 'react';
import { FaAward, FaClock, FaShieldAlt, FaUsers, FaIndustry } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import facilityImage from '../assets/h5.jpg';
import teamImage from '../assets/h6.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const stats = statsRef.current.children;
    
    gsap.fromTo(stats, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const stats = [
    {
      icon: FaUsers,
      number: "500+",
      label: "Satisfied Clients",
      description: "Hotels & Hospitals"
    },
    {
      icon: FaClock,
      number: "15+",
      label: "Years Experience",
      description: "Industry Leadership"
    },
    {
      icon: FaShieldAlt,
      number: "99.9%",
      label: "Quality Assurance",
      description: "Guaranteed Results"
    },
    {
      icon: FaAward,
      number: "24/7",
      label: "Support Available",
      description: "Always Here for You"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-primary-600 font-semibold text-lg uppercase tracking-wide">
                About PureBiz Laundry
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 leading-tight">
                Your Trusted Partner in 
                <span className="text-gradient"> Commercial Laundry</span>
              </h2>
            </div>

            <div className="space-y-6 text-secondary-600 text-lg leading-relaxed">
              <p>
                For over 15 years, PureBiz Laundry Services has been the trusted choice for 
                hotels and hospitals seeking reliable, high-quality commercial laundry solutions. 
                We understand the critical importance of cleanliness and hygiene in your industry.
              </p>
              
              <p>
                Our state-of-the-art facilities and experienced team ensure that every piece 
                of linen meets the highest standards of cleanliness and safety. From luxury 
                hotel bedding to critical hospital linens, we handle it all with precision and care.
              </p>
              
              <p>
                We're committed to building long-term partnerships with our clients, providing 
                consistent quality, reliable service, and competitive pricing that helps your 
                business thrive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Learn More About Us
              </button>
              <button className="btn-secondary">
                View Our Certifications
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced Stats & Visuals */}
          <div className="space-y-8">
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-6" ref={statsRef}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-primary-50 via-white to-blue-50 p-6 rounded-2xl text-center card-hover group relative overflow-hidden shadow-lg"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233b82f6' fill-opacity='0.3'%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: '30px 30px'
                    }}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="text-white text-3xl drop-shadow-lg" />
                    </div>
                    <div className="text-4xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-primary-600 font-semibold mb-2 text-lg">
                      {stat.label}
                    </div>
                    <div className="text-secondary-500 text-sm leading-relaxed">
                      {stat.description}
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-2 right-2 w-4 h-4 bg-primary-200 rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-blue-200 rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
                </div>
              ))}
            </div>

            {/* Enhanced Mission Statement */}
            <div className="bg-gradient-to-br from-secondary-50 via-white to-blue-50 p-8 rounded-2xl border-l-4 border-primary-600 shadow-lg relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233b82f6' fill-opacity='0.2'%3E%3Cpath d='M25 25c0-6.9-5.6-12.5-12.5-12.5S0 18.1 0 25s5.6 12.5 12.5 12.5S25 31.9 25 25zm12.5-12.5c0-6.9-5.6-12.5-12.5-12.5S12.5 5.6 12.5 12.5s5.6 12.5 12.5 12.5 12.5-5.6 12.5-12.5z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <FaAward className="text-white text-xl" />
                  </div>
                  <h4 className="text-2xl font-bold text-secondary-900">Our Mission</h4>
                </div>
                <p className="text-secondary-700 leading-relaxed text-lg">
                  To provide exceptional commercial laundry services that exceed our clients' 
                  expectations while maintaining the highest standards of hygiene, reliability, 
                  and customer service in the industry.
                </p>
                
                {/* Mission Highlights */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600">15+</div>
                    <div className="text-xs text-secondary-600">Years</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">ISO</div>
                    <div className="text-xs text-secondary-600">Certified</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-xs text-secondary-600">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Facility Showcase */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4 flex items-center">
                  <FaIndustry className="mr-3 text-3xl" />
                  State-of-the-Art Facility
                </h4>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Our modern facility features the latest industrial laundry equipment, 
                  ensuring efficient processing and superior results for all your commercial needs.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">50,000</div>
                    <div className="text-sm text-blue-200">Sq Ft Facility</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-sm text-blue-200">Operations</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full animate-pulse animation-delay-700"></div>
            </div>
          </div>
        </div>

        {/* Facility & Team Showcase */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Our Facility & Team
            </h3>
            <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
              Modern equipment and experienced professionals working together to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Facility Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={facilityImage} 
                alt="Modern Laundry Facility" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Modern Facility</h4>
                <p className="text-blue-200 text-lg">50,000 sq ft of industrial-grade equipment</p>
                <div className="flex items-center mt-3 space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-sm">ISO Certified</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-sm">24/7 Operations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team & Quality Control */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={teamImage} 
                alt="Quality Control Team" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Expert Team</h4>
                <p className="text-green-200 text-lg">Trained professionals ensuring quality</p>
                <div className="flex items-center mt-3 space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <span className="text-sm">Quality Control</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-sm">Expert Staff</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaIndustry className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-secondary-900 mb-2">Advanced Equipment</h4>
              <p className="text-secondary-600">Latest industrial washing and sterilization technology</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-secondary-900 mb-2">Quality Assurance</h4>
              <p className="text-secondary-600">Rigorous testing and inspection processes</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-secondary-900 mb-2">Experienced Team</h4>
              <p className="text-secondary-600">Skilled professionals with years of expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
