import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      details: ['513 High Level Road', 'Delkanda, Nugegoda', 'Sri Lanka'],
      link: 'https://maps.google.com/?q=513+High+Level+Road+Delkanda+Nugegoda+Sri+Lanka'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['0112 804 163', '+94 77 868 6555'],
      link: 'tel:+94778686555'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['Finsholdings@gmail.com'],
      link: 'mailto:Finsholdings@gmail.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: By Appointment'],
      link: null
    }
  ];

  const services = [
    'Car Audio Systems',
    'Vehicle Wraps',
    'Window Tinting',
    'Custom Graphics',
    'Sound System Upgrade',
    'Other'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to transform your vehicle? Contact us for a free consultation and quote
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                  Send Us a Message
                </span>
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for contacting Fins Car Audio! We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-red-500 hover:text-red-400 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-white"
                        placeholder="+94 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-white resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Get in touch with Fins Car Audio today. We're here to help transform your vehicle into something extraordinary.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300">
                          {info.link && detailIndex === 0 ? (
                            <a 
                              href={info.link}
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="hover:text-red-500 transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="pt-8 border-t border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/finscaraudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full hover:scale-110 transition-transform"
                  >
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://www.facebook.com/finscaraudio/photos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-3 rounded-full hover:scale-110 transition-transform"
                  >
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://tiktok.com/@fins.car.audio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black p-3 rounded-full hover:scale-110 transition-transform border border-white"
                  >
                    <MessageSquare className="h-6 w-6 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                Quick Actions
              </span>
            </h2>
            <p className="text-gray-300 text-xl">
              Choose the best way to get in touch with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.a
              href="tel:+94778686555"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 p-8 rounded-lg text-center backdrop-blur-sm hover:bg-black/70 transition-all group"
            >
              <Phone className="h-12 w-12 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-2">Call Now</h3>
              <p className="text-gray-300 mb-4">Speak directly with our team</p>
              <p className="text-red-500 font-semibold">+94 77 868 6555</p>
            </motion.a>

            <motion.a
              href="https://maps.google.com/?q=513+High+Level+Road+Delkanda+Nugegoda+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 p-8 rounded-lg text-center backdrop-blur-sm hover:bg-black/70 transition-all group"
            >
              <MapPin className="h-12 w-12 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Come to our showroom</p>
              <p className="text-red-500 font-semibold">Nugegoda, Sri Lanka</p>
            </motion.a>

            <motion.a
              href="mailto:Finsholdings@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 p-8 rounded-lg text-center backdrop-blur-sm hover:bg-black/70 transition-all group"
            >
              <Mail className="h-12 w-12 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us your inquiry</p>
              <p className="text-red-500 font-semibold">Finsholdings@gmail.com</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Call us now for urgent support or emergency services
            </p>
            <motion.a
              href="tel:+94778686555"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center text-lg"
            >
              <Phone className="mr-2 h-6 w-6" />
              Call +94 77 868 6555
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;