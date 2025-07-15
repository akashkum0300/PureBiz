import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaCheckCircle } from 'react-icons/fa';
import { gsap } from 'gsap';
import SchedulePickup from './SchedulePickup';

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

          {/* Right Content - Professional Laundry Visualization */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
              {/* Professional Laundry Scene */}
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                  {/* Washing Machine Icon */}
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                    <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white rounded-full animate-spin"></div>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Industrial Washing</p>
                  </div>
                  
                  {/* Sterilization Icon */}
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform animation-delay-200">
                    <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Sterilization</p>
                  </div>
                  
                  {/* Folding Icon */}
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform animation-delay-400">
                    <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Professional Folding</p>
                  </div>
                  
                  {/* Delivery Icon */}
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform animation-delay-600">
                    <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Fast Delivery</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 animate-bounce-slow">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-secondary-600">Happy Clients</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 animation-delay-400 animate-bounce-slow">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-secondary-600">Quality Rate</div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-4 bg-blue-500 text-white rounded-lg px-3 py-2 text-sm font-medium shadow-lg">
                24/7 Service
              </div>
            </div>
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
