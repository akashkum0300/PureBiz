import React, { useEffect, useRef, useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "General Manager",
      company: "Grand Plaza Hotel",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "PureBiz has transformed our laundry operations. Their attention to detail and consistent quality has elevated our guest experience significantly. The 24/7 support is invaluable for our 24-hour operations.",
      logo: "🏨"
    },
    {
      name: "Dr. Michael Chen",
      position: "Operations Director",
      company: "Metropolitan Medical Center",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The medical-grade sterilization and infection control protocols give us complete confidence. PureBiz understands the critical nature of hospital linens and delivers exceptional results every time.",
      logo: "🏥"
    },
    {
      name: "Robert Martinez",
      position: "Facility Manager",
      company: "Luxury Resort & Spa",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Outstanding service and reliability. PureBiz handles our high-volume needs with ease, and their eco-friendly approach aligns perfectly with our sustainability goals. Highly recommended!",
      logo: "🌴"
    },
    {
      name: "Lisa Thompson",
      position: "Housekeeping Director",
      company: "City General Hospital",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The pickup and delivery service is seamless, and the quality is consistently excellent. PureBiz has become an integral part of our operations, and we couldn't be happier with their service.",
      logo: "⚕️"
    }
  ];

  const clientLogos = [
    { name: "Grand Plaza Hotel", logo: "🏨" },
    { name: "Metropolitan Medical", logo: "🏥" },
    { name: "Luxury Resort & Spa", logo: "🌴" },
    { name: "City General Hospital", logo: "⚕️" },
    { name: "Business Hotel Chain", logo: "🏢" },
    { name: "Regional Medical Center", logo: "🩺" }
  ];

  useEffect(() => {
    gsap.fromTo(sectionRef.current.children, 
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="section-padding gradient-bg" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-primary-600 font-semibold text-lg uppercase tracking-wide mb-4">
            Client Testimonials
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            What Our Clients 
            <span className="text-gradient"> Say About Us</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what leading hotels and hospitals 
            say about their experience with PureBiz Laundry Services.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-8 left-8 text-primary-200 opacity-50">
            <FaQuoteLeft size={60} />
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                
                <p className="text-xl text-secondary-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-secondary-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-secondary-600">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p className="text-primary-600 font-semibold">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Logo */}
              <div className="text-8xl opacity-20">
                {testimonials[currentTestimonial].logo}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
          >
            <FaChevronRight />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary-600' : 'bg-secondary-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8">
            Trusted by Leading Organizations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg card-hover text-center"
              >
                <div className="text-4xl mb-2">{client.logo}</div>
                <div className="text-sm text-secondary-600 font-medium">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Ready to Join Our Satisfied Clients?
            </h3>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Experience the PureBiz difference for yourself. Contact us today for a 
              free consultation and custom quote tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Get Free Quote
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
