import React, { useEffect, useRef } from 'react';
import { 
  FaClock, 
  FaShieldAlt, 
  FaHeadset, 
  FaDollarSign, 
  FaLeaf, 
  FaCertificate,
  FaTruck,
  FaChartLine
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const benefitsRef = useRef(null);

  useEffect(() => {
    const benefits = benefitsRef.current.children;
    
    gsap.fromTo(benefits, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
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

  const benefits = [
    {
      icon: FaClock,
      title: "Timely Delivery",
      description: "Guaranteed 24-48 hour turnaround time with express options available for urgent needs.",
      highlight: "99.8% On-Time Rate"
    },
    {
      icon: FaShieldAlt,
      title: "Superior Hygiene",
      description: "Hospital-grade cleaning processes with medical-level sterilization and quality control.",
      highlight: "Medical Grade Standards"
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Round-the-clock customer service with dedicated account managers for seamless communication.",
      highlight: "Always Available"
    },
    {
      icon: FaDollarSign,
      title: "Affordable Rates",
      description: "Competitive pricing with transparent billing and volume discounts for long-term partnerships.",
      highlight: "Best Value Guarantee"
    },
    {
      icon: FaLeaf,
      title: "Eco-Friendly",
      description: "Environmentally responsible processes using biodegradable detergents and water conservation.",
      highlight: "Green Certified"
    },
    {
      icon: FaCertificate,
      title: "Certified Quality",
      description: "ISO certified facilities with rigorous quality management systems and regular audits.",
      highlight: "ISO 9001:2015"
    },
    {
      icon: FaTruck,
      title: "Reliable Logistics",
      description: "Advanced tracking systems and flexible scheduling to meet your operational requirements.",
      highlight: "Real-Time Tracking"
    },
    {
      icon: FaChartLine,
      title: "Scalable Solutions",
      description: "Flexible capacity to handle seasonal demands and business growth with consistent quality.",
      highlight: "Grows With You"
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-primary-600 font-semibold text-lg uppercase tracking-wide mb-4">
            Why Choose PureBiz
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            The Clear Choice for 
            <span className="text-gradient"> Commercial Laundry</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology, experienced professionals, and unwavering 
            commitment to deliver exceptional results that exceed your expectations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" ref={benefitsRef}>
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-xl card-hover border border-primary-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="text-white text-2xl" />
                </div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {benefit.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                See the PureBiz Difference
              </h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Compare our comprehensive service offering with traditional laundry providers 
                and see why leading hotels and hospitals choose PureBiz.
              </p>
              
              <div className="space-y-4">
                {[
                  "Advanced tracking and reporting systems",
                  "Dedicated account management team",
                  "Flexible pickup and delivery schedules",
                  "Emergency and rush service capabilities",
                  "Comprehensive insurance coverage",
                  "Sustainability and environmental compliance"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-center">
                Ready to Experience the Difference?
              </h4>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span>Free Consultation</span>
                  <span className="font-semibold">✓ Included</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span>Custom Pricing</span>
                  <span className="font-semibold">✓ Available</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span>Trial Period</span>
                  <span className="font-semibold">✓ 30 Days</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Setup Fee</span>
                  <span className="font-semibold text-green-300">$0</span>
                </div>
              </div>

              <button className="w-full bg-white text-primary-600 font-bold py-4 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
