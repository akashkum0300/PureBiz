import React, { useEffect, useRef } from 'react';
import { FaHotel, FaHospital, FaTruck, FaIndustry, FaCheckCircle } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const services = servicesRef.current.children;
    
    gsap.fromTo(services, 
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
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

  const services = [
    {
      icon: FaHotel,
      title: "Hotel Laundry",
      description: "Premium laundry services for luxury hotels and resorts. We handle bed linens, towels, uniforms, and guest laundry with the highest standards.",
      features: [
        "Luxury linen care",
        "Guest laundry services",
        "Staff uniform cleaning",
        "Express turnaround options"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaHospital,
      title: "Hospital Linen Cleaning",
      description: "Medical-grade cleaning and sterilization for healthcare facilities. We ensure complete hygiene and safety for all medical linens.",
      features: [
        "Medical-grade sterilization",
        "Infection control protocols",
        "Specialized detergents",
        "Compliance with health standards"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaTruck,
      title: "Pickup & Delivery",
      description: "Convenient pickup and delivery services that fit your schedule. We provide reliable transportation with tracking and scheduling.",
      features: [
        "Scheduled pickups",
        "Real-time tracking",
        "Flexible delivery windows",
        "Emergency service available"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FaIndustry,
      title: "Bulk Washing & Sterilization",
      description: "Large-volume processing with industrial-grade equipment. Perfect for high-capacity needs with consistent quality.",
      features: [
        "High-capacity processing",
        "Industrial equipment",
        "Quality consistency",
        "Cost-effective pricing"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="section-padding gradient-bg" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-primary-600 font-semibold text-lg uppercase tracking-wide mb-4">
            Our Services
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Comprehensive B2B 
            <span className="text-gradient"> Laundry Solutions</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            We provide specialized laundry services tailored to the unique needs of hotels 
            and hospitals, ensuring the highest standards of cleanliness and hygiene.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16" ref={servicesRef}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover group"
            >
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <service.icon className="text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Features */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                  Key Features:
                </h4>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 w-full btn-secondary group-hover:btn-primary transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Our Proven Process
            </h3>
            <p className="text-secondary-600 text-lg">
              A streamlined workflow designed for efficiency and quality
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Collection", desc: "Scheduled pickup from your facility" },
              { step: "02", title: "Processing", desc: "Professional cleaning and sterilization" },
              { step: "03", title: "Quality Check", desc: "Thorough inspection and packaging" },
              { step: "04", title: "Delivery", desc: "On-time delivery to your location" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  {process.title}
                </h4>
                <p className="text-secondary-600">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
