import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Phone, Volume2, Palette, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import GlassCard from '../components/GlassCard';
import AnimatedButton from '../components/AnimatedButton';
import ParallaxSection from '../components/ParallaxSection';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const heroImages = [
    'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1920'
  ];

  const services = [
    {
      icon: Volume2,
      title: 'Premium Car Audio',
      description: 'High-quality sound systems and professional installation',
      image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Custom Speakers', 'Subwoofer Systems', 'Amplifiers', 'Bluetooth Integration']
    },
    {
      icon: Palette,
      title: 'Vehicle Wraps',
      description: 'Custom wraps and vinyl graphics for your vehicle',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Full Wraps', 'Partial Wraps', 'Custom Graphics', 'Paint Protection']
    },
    {
      icon: Shield,
      title: 'Window Tinting',
      description: 'Professional tinting for privacy and UV protection',
      image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['UV Protection', 'Privacy Films', 'Heat Reduction', 'Security Films']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      text: 'Outstanding service! The car audio system they installed exceeded my expectations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Priya Fernando',
      text: 'Professional work on my vehicle wrap. Highly recommend Fins Holdings!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Silva',
      text: 'Best window tinting service in Nugegoda. Great quality and fair prices.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen animated-gradient flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="float-animation mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto pulse-glow">
              <Volume2 className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold animated-gradient-text mb-4">FINS CAR AUDIO</h1>
          <LoadingSpinner size="lg" />
          <p className="text-white mt-4">Loading Premium Experience...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section with Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroSlider images={heroImages} />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-20 text-center max-w-6xl px-6"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-glow"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="animated-gradient-text block">
              FINS CAR AUDIO
            </span>
            <span className="text-white text-4xl md:text-5xl mt-4 block">
              Premium Car Customization
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Transform your vehicle with our expert audio systems, custom wraps, and professional tinting services
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <AnimatedButton 
              href="/contact" 
              variant="primary" 
              size="lg"
              icon={ArrowRight}
            >
              Get a Quote
            </AnimatedButton>
            <AnimatedButton 
              href="/gallery" 
              variant="outline" 
              size="lg"
            >
              View Gallery
            </AnimatedButton>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 float-animation">
          <div className="w-4 h-4 bg-red-500 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 float-animation" style={{ animationDelay: '2s' }}>
          <div className="w-6 h-6 bg-white rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-40 left-20 float-animation" style={{ animationDelay: '4s' }}>
          <div className="w-3 h-3 bg-red-400 rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Stats Section with Glass Effect */}
      <section className="py-20 animated-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '500+', label: 'Happy Customers' },
              { icon: Award, number: '5+', label: 'Years Experience' },
              { icon: Star, number: '4.9', label: 'Average Rating' },
              { icon: Phone, number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center">
                  <stat.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Parallax */}
      <ParallaxSection 
        backgroundImage="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920"
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="animated-gradient-text">
                Our Services
              </span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              We specialize in premium automotive customization services that enhance both style and functionality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <GlassCard className="h-full">
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <AnimatedButton 
                    href="/contact" 
                    variant="primary"
                    icon={ArrowRight}
                    className="w-full"
                  >
                    Learn More
                  </AnimatedButton>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="animated-gradient-text">
                What Customers Say
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Animated Background */}
      <section className="py-20 animated-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-glow">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <AnimatedButton 
                href="/contact" 
                variant="secondary" 
                size="lg"
                icon={ArrowRight}
              >
                Contact Us
              </AnimatedButton>
              <AnimatedButton 
                href="tel:+94778686555" 
                variant="outline" 
                size="lg"
                icon={Phone}
              >
                Call Now: +94 77 868 6555
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;