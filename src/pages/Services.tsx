import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, Palette, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Volume2,
      title: 'Premium Car Audio Systems',
      description: 'Transform your driving experience with crystal-clear sound',
      features: [
        'High-end speaker installations',
        'Custom subwoofer setups',
        'Amplifier installations',
        'Sound system tuning',
        'Bluetooth integration',
        'Dashboard upgrades'
      ],
      image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Palette,
      title: 'Vehicle Wraps & Graphics',
      description: 'Express your style with custom vehicle wrapping',
      features: [
        'Full vehicle wraps',
        'Partial wraps',
        'Custom graphics design',
        'Commercial branding',
        'Paint protection wraps',
        'Color change wraps'
      ],
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shield,
      title: 'Window Tinting',
      description: 'Privacy, protection, and style for your windows',
      features: [
        'UV protection tinting',
        'Privacy window films',
        'Heat reduction films',
        'Security window films',
        'Decorative window films',
        'Commercial tinting'
      ],
      image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800'
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
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Professional automotive customization services tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-r from-red-600 to-red-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                      {service.title}
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 inline-flex items-center"
                  >
                    Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
                Our Process
              </span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Simple steps to get your vehicle customized
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your vision and requirements' },
              { step: '02', title: 'Planning', desc: 'Design and plan the customization' },
              { step: '03', title: 'Installation', desc: 'Professional installation by experts' },
              { step: '04', title: 'Quality Check', desc: 'Final inspection and testing' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-red-600 to-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Contact us today for a free consultation and personalized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all transform hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;