import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We use only premium products and maintain the highest standards in every installation.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We work closely with you to achieve your vision.'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'We respect your time and deliver projects on schedule without compromising quality.'
    },
    {
      icon: Target,
      title: 'Precision Work',
      description: 'Every detail matters. Our skilled technicians ensure perfect results every time.'
    }
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
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                About Fins Car Audio
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your trusted partner for premium automotive customization in Sri Lanka
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded with a passion for automotive excellence, Fins Car Audio has become Sri Lanka's 
                  premier destination for car audio systems, vehicle wraps, and window tinting services.
                </p>
                <p>
                  Located in the heart of Nugegoda, we've been serving customers across Sri Lanka with 
                  dedication, expertise, and a commitment to quality that sets us apart from the competition.
                </p>
                <p>
                  Our team of skilled technicians combines years of experience with the latest technology 
                  to deliver results that exceed expectations. Every project is treated with the same level 
                  of care and attention to detail, whether it's a simple tinting job or a complete audio system overhaul.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Car Audio Installation"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-black/50 p-6 rounded-lg backdrop-blur-sm hover:bg-black/70 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">5+</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Years of Experience</h3>
              <p className="text-gray-300">
                Half a decade of expertise in automotive customization and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Happy Customers</h3>
              <p className="text-gray-300">
                Hundreds of satisfied customers who trust us with their vehicles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Customer Support</h3>
              <p className="text-gray-300">
                Round-the-clock support to assist you with any questions or concerns.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;