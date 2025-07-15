import React, { useEffect, useRef } from 'react';
import { FaAward, FaClock, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

          {/* Right Content - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6" ref={statsRef}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-xl text-center card-hover"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-white text-2xl" />
                  </div>
                  <div className="text-3xl font-bold text-secondary-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-600 font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-secondary-500 text-sm">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-secondary-50 p-8 rounded-xl border-l-4 border-primary-600">
              <h4 className="text-xl font-bold text-secondary-900 mb-4">Our Mission</h4>
              <p className="text-secondary-700 leading-relaxed">
                To provide exceptional commercial laundry services that exceed our clients' 
                expectations while maintaining the highest standards of hygiene, reliability, 
                and customer service in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
