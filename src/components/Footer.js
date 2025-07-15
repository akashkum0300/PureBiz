import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
      >
        <FaArrowUp className="text-white" />
      </button>

      {/* Main Footer Content */}
      <div className="container-custom pt-16 pb-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-2xl font-bold text-white mb-4">
                PureBiz<span className="text-primary-400">Laundry</span>
              </div>
              <p className="text-secondary-300 leading-relaxed">
                Your trusted partner for professional B2B laundry services. 
                Serving hotels and hospitals with excellence since 2008.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebookF, href: "#", label: "Facebook" },
                  { icon: FaTwitter, href: "#", label: "Twitter" },
                  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                  { icon: FaInstagram, href: "#", label: "Instagram" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <social.icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "about" },
                { label: "Services", id: "services" },
                { label: "Why Choose Us", id: "why-choose-us" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Contact", id: "contact" }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Hotel Laundry Services",
                "Hospital Linen Cleaning",
                "Pickup & Delivery",
                "Bulk Washing & Sterilization",
                "Emergency Services",
                "Custom Solutions"
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-secondary-300">
                  <p>Ayodhya</p>
                  <p>Ayodhy, Uttar Pradesh 224001</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-400 flex-shrink-0" />
                <div className="text-secondary-300">
                  <p>+91 (8318424372) LAUNDRY</p>
                  <p className="text-sm">24/7 Support Available</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400 flex-shrink-0" />
                <div className="text-secondary-300">
                  <p>info@purebizlaundry.com</p>
                  <p className="text-sm">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaClock className="text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-secondary-300">
                  <p>Mon-Fri: 6:00 AM - 10:00 PM</p>
                  <p>Sat-Sun: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-secondary-300">
                Subscribe to our newsletter for industry insights and special offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="border-t border-secondary-800 mt-8 pt-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Certifications & Memberships</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 text-secondary-400">
              <div className="text-center">
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-sm">ISO 9001:2015</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🌿</div>
                <div className="text-sm">Green Certified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">⚕️</div>
                <div className="text-sm">Healthcare Approved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🏨</div>
                <div className="text-sm">Hospitality Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-400 text-sm">
              © {currentYear} PureBiz Laundry Services. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button className="text-secondary-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-secondary-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </button>
              <button className="text-secondary-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </button>
              <button className="text-secondary-400 hover:text-primary-400 transition-colors">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
