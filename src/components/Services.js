import React, { useEffect, useRef } from 'react';
import { FaHotel, FaHospital, FaTruck, FaIndustry, FaCheckCircle } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hotelImage1 from '../assets/h1.jpg';
import hotelImage2 from '../assets/h2.jpg';
import hospitalImage1 from '../assets/h3.jpg';
import hospitalImage2 from '../assets/h4.jpg';
import facilityImage1 from '../assets/h5.jpg';
import facilityImage2 from '../assets/h6.jpg';
import hotelLaundryImage from '../assets/hotel-laundry.jpg';
import washingMachines from '../assets/washing-machines.png';
import qualityControl from '../assets/quality-control.png';
import deliveryTruck from '../assets/delivery-truck.png';
import facilityExterior from '../assets/facility-exterior.png';

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

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16" ref={servicesRef}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover group relative"
            >
              {/* Service Header with Enhanced Visual */}
              <div className={`bg-gradient-to-br ${service.color} p-8 text-white relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10-10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="text-4xl drop-shadow-lg" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                      <div className="w-12 h-1 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-8 w-6 h-6 bg-white/10 rounded-full animate-pulse animation-delay-500"></div>
              </div>

              {/* Enhanced Service Features */}
              <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                <h4 className="text-lg font-semibold text-secondary-900 mb-6 flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Key Features:
                </h4>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 group/item">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:bg-green-200 transition-colors">
                        <FaCheckCircle className="text-green-500 text-sm" />
                      </div>
                      <span className="text-secondary-700 group-hover/item:text-secondary-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-8 w-full btn-secondary group-hover:btn-primary transition-all duration-300 py-3 font-semibold">
                  Learn More
                </button>
              </div>

              {/* Service Image Placeholder */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                <service.icon className="w-full h-full text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Service Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Our Facilities & Services
            </h3>
            <p className="text-secondary-600 text-lg">
              Professional facilities serving hotels and hospitals nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hotel Services */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src={hotelImage1} 
                  alt="Luxury Hotel Laundry Services" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold mb-1">Hotel Laundry</h4>
                  <p className="text-blue-200">Premium linen care</p>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src={hotelImage2} 
                  alt="Hotel Linen Processing" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold mb-1">Guest Services</h4>
                  <p className="text-blue-200">24/7 availability</p>
                </div>
              </div>
            </div>

            {/* Hospital Services */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src={hospitalImage1} 
                  alt="Hospital Linen Sterilization" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold mb-1">Medical Grade</h4>
                  <p className="text-green-200">Sterilization</p>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src={hospitalImage2} 
                  alt="Hospital Linen Services" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold mb-1">Hospital Linens</h4>
                  <p className="text-green-200">Infection control</p>
                </div>
              </div>
            </div>

            {/* Facility & Equipment */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src={facilityImage1} 
                  alt="Industrial Laundry Facility" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold mb-1">Modern Facility</h4>
                  <p className="text-purple-200">Industrial equipment</p>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src={facilityImage2} 
                  alt="Quality Control Process" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold mb-1">Quality Control</h4>
                  <p className="text-purple-200">Inspection process</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Equipment & Process Showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              State-of-the-Art Equipment & Process
            </h3>
            <p className="text-secondary-600 text-lg">
              Advanced technology and proven processes ensuring exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Washing Machines */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={washingMachines} 
                alt="Industrial Washing Machines" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Industrial Equipment</h4>
                <p className="text-blue-200 text-sm">High-capacity washing machines</p>
                <div className="flex items-center mt-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-xs">24/7 Operations</span>
                </div>
              </div>
            </div>

            {/* Quality Control */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={qualityControl} 
                alt="Quality Control Process" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Quality Assurance</h4>
                <p className="text-green-200 text-sm">Rigorous inspection process</p>
                <div className="flex items-center mt-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="text-xs">99.9% Quality Rate</span>
                </div>
              </div>
            </div>

            {/* Delivery Service */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={deliveryTruck} 
                alt="Delivery Service" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Reliable Delivery</h4>
                <p className="text-purple-200 text-sm">On-time pickup & delivery</p>
                <div className="flex items-center mt-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-xs">GPS Tracking</span>
                </div>
              </div>
            </div>

            {/* Facility Exterior */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={facilityExterior} 
                alt="Facility Exterior" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Modern Facility</h4>
                <p className="text-orange-200 text-sm">50,000 sq ft facility</p>
                <div className="flex items-center mt-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-xs">ISO Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Process Stats */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">50K</span>
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-2">Sq Ft Facility</h4>
                <p className="text-secondary-600">Modern industrial space</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">24/7</span>
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-2">Operations</h4>
                <p className="text-secondary-600">Round-the-clock service</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">99%</span>
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-2">Quality Rate</h4>
                <p className="text-secondary-600">Consistent excellence</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">500+</span>
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-2">Happy Clients</h4>
                <p className="text-secondary-600">Hotels & hospitals served</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-5">
            <img 
              src={hotelLaundryImage} 
              alt="Laundry Process Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10">
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
                { step: "01", title: "Collection", desc: "Scheduled pickup from your facility", color: "bg-blue-600" },
                { step: "02", title: "Processing", desc: "Professional cleaning and sterilization", color: "bg-green-600" },
                { step: "03", title: "Quality Check", desc: "Thorough inspection and packaging", color: "bg-purple-600" },
                { step: "04", title: "Delivery", desc: "On-time delivery to your location", color: "bg-orange-600" }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 ${process.color} text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
      </div>
    </section>
  );
};

export default Services;
