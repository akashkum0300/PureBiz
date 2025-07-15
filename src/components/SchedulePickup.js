import React, { useState, useEffect, useRef } from 'react';
import { FaTruck, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTimes, FaCheckCircle } from 'react-icons/fa';
import { gsap } from 'gsap';

const SchedulePickup = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    serviceType: '',
    pickupDate: '',
    pickupTime: '',
    estimatedVolume: '',
    specialInstructions: '',
    urgentPickup: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(modalRef.current, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/schedule-pickup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          zipCode: '',
          serviceType: '',
          pickupDate: '',
          pickupTime: '',
          estimatedVolume: '',
          specialInstructions: '',
          urgentPickup: false
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.log('Backend not available, showing fallback message');
      setSubmitStatus('fallback');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 8000);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getTimeSlots = () => {
    const slots = [];
    for (let hour = 6; hour <= 22; hour++) {
      const time12 = hour > 12 ? `${hour - 12}:00 PM` : hour === 12 ? '12:00 PM' : `${hour}:00 AM`;
      const time24 = `${hour.toString().padStart(2, '0')}:00`;
      slots.push({ value: time24, label: time12 });
    }
    return slots;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaTruck className="text-2xl" />
              <h2 className="text-2xl font-bold">Schedule Pickup</h2>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <FaTimes />
            </button>
          </div>
          <p className="mt-2 opacity-90">
            Schedule a convenient pickup time for your laundry service
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Company Information */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-primary-600" />
              Company Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Contact person name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="(+91) 1234567890"
                />
              </div>
            </div>
          </div>

          {/* Pickup Address */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary-600" />
              Pickup Address
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Street address, building name, floor"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="City"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="ZIP Code"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center gap-2">
              <FaTruck className="text-primary-600" />
              Service Details
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Service Type *
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select service type</option>
                  <option value="hotel-laundry">Hotel Laundry</option>
                  <option value="hospital-linen">Hospital Linen Cleaning</option>
                  <option value="bulk-washing">Bulk Washing & Sterilization</option>
                  <option value="regular-pickup">Regular Pickup Service</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Estimated Volume
                </label>
                <select
                  name="estimatedVolume"
                  value={formData.estimatedVolume}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select volume</option>
                  <option value="small">Small (1-5 bags)</option>
                  <option value="medium">Medium (6-15 bags)</option>
                  <option value="large">Large (16-30 bags)</option>
                  <option value="bulk">Bulk (30+ bags)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center gap-2">
              <FaCalendarAlt className="text-primary-600" />
              Pickup Schedule
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Pickup Date *
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  required
                  min={getMinDate()}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-secondary-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select time</option>
                  {getTimeSlots().map(slot => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="urgentPickup"
                  checked={formData.urgentPickup}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm font-medium text-secondary-700">
                  Urgent Pickup (within 2 hours) - Additional charges may apply
                </span>
              </label>
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <label className="block text-sm font-semibold text-secondary-700 mb-2">
              Special Instructions
            </label>
            <textarea
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical"
              placeholder="Any special handling instructions, access codes, or additional information..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-secondary text-lg py-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 btn-primary text-lg py-4 flex items-center justify-center gap-3 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Scheduling...
                </>
              ) : (
                <>
                  <FaTruck />
                  Schedule Pickup
                </>
              )}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <FaCheckCircle className="mr-2" />
                <div>
                  <strong>Success!</strong> Your pickup has been scheduled successfully. We'll contact you to confirm the details within 30 minutes.
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong>Error:</strong> Sorry, there was an error scheduling your pickup. Please try again or call us directly at +91 (8318424372).
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'fallback' && (
            <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong>Request Received!</strong> Thank you for your pickup request. Please call us at <strong>+91 (8318424372)</strong> to confirm your pickup schedule.
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SchedulePickup;
