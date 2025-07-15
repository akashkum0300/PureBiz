import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaCheckCircle } from 'react-icons/fa';
import { gsap } from 'gsap';
import SchedulePickup from './SchedulePickup';
import heroBg from '../assets/hero-bg.jpg';
import heroLaundry from '../assets/hero-laundry.jpg';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const featuresRef = useRef(null);
  const [isSchedulePickupOpen, setIsSchedulePickupOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(buttonsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(featuresRef.current.children,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openSchedulePickup = () => {
    setIsSchedulePickupOpen(true);
  };

  const closeSchedulePickup = () => {
    setIsSchedulePickupOpen(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.3'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-bounce-slow"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-blue-300 rounded-full opacity-30 animate-bounce-slow animation-delay-400"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-blue-400 rounded-full opacity-25 animate-bounce-slow animation-delay-600"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div ref={titleRef} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                Professional
                <span className="text-gradient block">B2B Laundry</span>
                Solutions
              </h1>
            </div>

            <div ref={subtitleRef}>
              <p className="text-xl text-secondary-600 leading-relaxed max-w-2xl">
                Trusted by hotels and hospitals nationwide. We provide reliable, hygienic, 
                and efficient commercial laundry services with 24/7 support and guaranteed quality.
              </p>
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="btn-primary text-lg px-8 py-4"
              >
                Request a Quote
              </button>
              <button 
                onClick={openSchedulePickup}
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-3"
              >
                <FaPlay className="text-sm" />
                Schedule Pickup
              </button>
            </div>

            <div ref={featuresRef} className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-secondary-700">
                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                <span className="font-medium">24-48 Hour Turnaround Time</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-700">
                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                <span className="font-medium">Hospital-Grade Sterilization</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-700">
                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                <span className="font-medium">Free Pickup & Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-700">
                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                <span className="font-medium">24/7 Customer Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Professional Laundry Visualization */}
          <div className="relative">
            {/* Main Hero Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
              {/* Professional Laundry Facility Background */}
              <div className="aspect-video relative overflow-hidden">
                {/* Real Hero Laundry Image */}
                <img 
                  src={heroLaundry} 
                  alt="Professional Laundry Facility" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-600/20"></div>
                
                {/* Professional Equipment Showcase */}
                <div className="relative z-10 p-8 h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                    {/* Industrial Washing Machine */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                        <div className="w-8 h-8 border-3 border-white rounded-full animate-spin border-t-transparent"></div>
                      </div>
                      <p className="text-sm font-semibold text-gray-800">Industrial Washing</p>
                      <p className="text-xs text-gray-600 mt-1">High-Capacity</p>
                    </div>
                    
                    {/* Medical Sterilization */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl animation-delay-200">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                        <div className="w-8 h-8 bg-white rounded-full animate-pulse flex items-center justify-center">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-gray-800">Medical Grade</p>
                      <p className="text-xs text-gray-600 mt-1">Sterilization</p>
                    </div>
                    
                    {/* Professional Folding */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl animation-delay-400">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                        <div className="w-8 h-6 bg-white rounded-sm shadow-inner flex items-center justify-center">
                          <div className="w-6 h-1 bg-purple-500 rounded"></div>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-gray-800">Professional</p>
                      <p className="text-xs text-gray-600 mt-1">Folding</p>
                    </div>
                    
                    {/* Express Delivery */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl animation-delay-600">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                        <div className="w-8 h-6 bg-white rounded-sm transform rotate-12 shadow-inner flex items-center justify-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-gray-800">Express</p>
                      <p className="text-xs text-gray-600 mt-1">Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl p-6 animate-bounce-slow border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
                  <div className="text-sm text-secondary-600 font-medium">Happy Clients</div>
                  <div className="text-xs text-secondary-400 mt-1">Hotels & Hospitals</div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-gradient-to-br from-white to-green-50 rounded-xl shadow-2xl p-6 animation-delay-400 animate-bounce-slow border border-green-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">99.9%</div>
                  <div className="text-sm text-secondary-600 font-medium">Quality Rate</div>
                  <div className="text-xs text-secondary-400 mt-1">Guaranteed</div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg px-4 py-3 text-sm font-semibold shadow-xl transform -translate-y-1/2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>24/7 Service</span>
                </div>
              </div>

              {/* Quality Certification Badge */}
              <div className="absolute bottom-4 right-4 bg-gradient-to-br from-yellow-400 to-yellow-500 text-yellow-900 rounded-full p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-xs font-bold">ISO</div>
                  <div className="text-xs">Certified</div>
                </div>
              </div>
            </div>

            {/* Additional Visual Elements */}
            <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -z-10 bottom-8 left-8 w-24 h-24 bg-green-200 rounded-full opacity-30 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Schedule Pickup Modal */}
      <SchedulePickup 
        isOpen={isSchedulePickupOpen} 
        onClose={closeSchedulePickup} 
      />
    </section>
  );
};

export default Hero;
