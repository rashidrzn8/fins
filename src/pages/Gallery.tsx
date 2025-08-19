import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, Play, ExternalLink } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ParallaxSection from '../components/ParallaxSection';

interface GalleryItem {
  id: number;
  title: string;
  category: 'audio' | 'wraps' | 'tints' | 'all';
  image: string;
  description: string;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'audio' | 'wraps' | 'tints'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(false);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Premium Sound System Installation",
      category: "audio",
      image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
      description: "High-end car audio system with custom subwoofer installation"
    },
    {
      id: 2,
      title: "Carbon Fiber Vehicle Wrap",
      category: "wraps",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
      description: "Complete carbon fiber wrap transformation"
    },
    {
      id: 3,
      title: "Professional Window Tinting",
      category: "tints",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg",
      description: "Premium ceramic window tint installation"
    },
    {
      id: 4,
      title: "Custom Speaker Setup",
      category: "audio",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg",
      description: "Professional speaker system with amplifier"
    },
    {
      id: 5,
      title: "Matte Black Wrap",
      category: "wraps",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
      description: "Sleek matte black vehicle transformation"
    },
    {
      id: 6,
      title: "Privacy Tint Package",
      category: "tints",
      image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
      description: "Complete privacy tinting solution"
    },
    {
      id: 7,
      title: "Competition Audio Build",
      category: "audio",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg",
      description: "Competition-grade sound system installation"
    },
    {
      id: 8,
      title: "Chrome Delete Wrap",
      category: "wraps",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
      description: "Modern chrome delete with accent wrapping"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work', icon: Filter },
    { id: 'audio', label: 'Car Audio', icon: Play },
    { id: 'wraps', label: 'Vehicle Wraps', icon: ExternalLink },
    { id: 'tints', label: 'Window Tints', icon: Filter }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleCategoryChange = (category: 'all' | 'audio' | 'wraps' | 'tints') => {
    setLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
        className="h-96 flex items-center justify-center"
      >
        <div className="text-center text-white z-10">
          <motion.h1 
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing Premium Automotive Customization
          </motion.p>
        </div>
      </ParallaxSection>

      {/* Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25'
                      : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.label}
                </motion.button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            {loading ? (
              <div className="flex justify-center py-20">
                <LoadingSpinner />
              </div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard className="group cursor-pointer overflow-hidden">
                      <div 
                        className="relative aspect-square overflow-hidden rounded-lg"
                        onClick={() => setSelectedImage(item)}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <GlassCard>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Vehicle?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a custom quote on your automotive project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Quote
                </motion.button>
                <motion.button
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Gallery;