import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
              FINS CAR AUDIO
            </h3>
            <p className="text-gray-300 mb-4">
              Your premier destination for car audio systems, vehicle wraps, and window tinting in Sri Lanka.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="text-gray-300">513 High Level Road, Delkanda, Nugegoda, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <div>
                  <p className="text-gray-300">0112 804 163</p>
                  <p className="text-gray-300">+94 77 868 6555</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-gray-300">Finsholdings@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
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
                <span className="text-white font-bold text-sm">TikTok</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Fins Holdings. All rights reserved. | Designed for premium automotive experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;