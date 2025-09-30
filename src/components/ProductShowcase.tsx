"use client";

import { motion } from "framer-motion";
import { Product } from "@/types/product";
import MotionWrapper from "./MotionWrapper";

// Sample product data - in a real app, this would come from a database
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Royal Maroon Elegance",
    description: "Premium silk kurta with intricate embroidery, perfect for special occasions",
    price: 299,
    image: "/images/image-background-aagya-ethic.jpeg",
    category: "Kurta",
    featured: true,
  },
  {
    id: "2",
    name: "Golden Cream Luxury",
    description: "Comfortable cotton kurta with matching dupatta, ideal for daily wear",
    price: 349,
    image: "/images/image-background-aagya-ethic.jpeg",
    category: "Kurta Set",
    featured: true,
  },
  {
    id: "3",
    name: "Midnight Navy Grace",
    description: "Contemporary design with traditional elements, a perfect fusion piece",
    price: 279,
    image: "/images/image-background-aagya-ethic.jpeg",
    category: "Designer",
    featured: true,
  },
];

export default function ProductShowcase() {
  return (
    <section 
      id="products" 
      className="py-20"
      style={{ backgroundColor: '#f8f6f0' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionWrapper direction="up" delay={0.2}>
          <div className="text-center mb-16">
            {/* Yellow line */}
            <div 
              className="w-16 h-1 mx-auto mb-4"
              style={{ backgroundColor: '#D4AF37' }}
            ></div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif mb-4"
              style={{ color: '#8B4513' }}
            >
              Premium Collection
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg max-w-2xl mx-auto"
              style={{ color: '#6B3410' }}
            >
              Discover our handcrafted Kurthas, where traditional artistry meets contemporary elegance.
            </motion.p>
          </div>
        </MotionWrapper>

        {/* Artisan Crafted Excellence Banner */}
        <MotionWrapper direction="up" delay={0.4}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
            <div 
              className="h-80 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('/images/kurthas.jpeg')",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-maroon-900/80 via-maroon-800/60 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex justify-center items-center">
                <div className="max-w-2xl px-8 text-center">
                  <motion.h3
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-4xl md:text-5xl font-serif text-white mb-4"
                  >
                    Artisan Crafted Excellence
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-white text-lg mb-6"
                  >
                    Each piece tells a story of heritage, luxury, and uncompromising quality
                  </motion.p>
                  <motion.a
                    href="#products"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-8 py-3  rounded-lg  hover:bg-gold-100 font-semibold transition-colors duration-200"
                    style={{ 
                        backgroundColor: 'transparent',
                      color: 'gold',
                      border: '1px solid #D4AF37'
                      
                    }}
                  >
                    View Full Collection
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product, index) => (
            <MotionWrapper
              key={product.id}
              direction="up"
              delay={0.1 * index}
            >
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-cream-200 hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Featured Badge for middle product */}
                  {index === 1 && (
                    <div className="absolute top-4 left-4">
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ 
                          backgroundColor: '#D4AF37',
                          color: '#8B4513'
                        }}
                      >
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 
                    className="text-xl font-serif mb-2"
                    style={{ color: '#8B4513' }}
                  >
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="text-2xl font-bold"
                      style={{ color: '#8B4513' }}
                    >
                      ${product.price}
                    </span>
                  </div>

                  {/* Quick View Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 rounded-lg font-medium transition-colors duration-200"
                    style={{ 
                      backgroundColor: 'transparent',
                      color: '#8B4513',
                      border: '2px solid #D4AF37'
                    }}
                  >
                    Quick View
                  </motion.button>
                </div>
              </motion.div>
            </MotionWrapper>
          ))}
        </div>

        {/* Final CTA Button */}
        <MotionWrapper direction="up" delay={0.6}>
          <div className="text-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-4 rounded-lg font-semibold transition-colors duration-200 text-lg"
              style={{ 
                backgroundColor: '#D4AF37',
                color: '#8B4513'
              }}
            >
              Explore Full Collection
            </motion.a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
