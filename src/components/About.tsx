"use client";

import { motion } from "framer-motion";
import { Crown, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import MotionWrapper from "./MotionWrapper";

export default function About() {
  return (
    <section 
      id="about" 
      className="py-20"
      style={{ backgroundColor: '#f8f6f0' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <MotionWrapper direction="right" delay={0.2}>
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-serif"
                style={{ color: '#8B4513' }}
              >
                About Aagya Ethics
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 text-lg leading-relaxed"
                style={{ color: '#6B3410' }}
              >
                <p>
  At Aagya Ethics, fashion is more than clothing—it&apos;s a celebration of culture and modern elegance. 
  From Australia, we bring you authentic kurthas and ethnic wear that blend timeless tradition with contemporary style.
</p>
<p>
  Each piece is chosen for its quality and craftsmanship, telling a story of heritage, confidence, and the modern 
  woman&apos;s unique style.
</p>

              </motion.div>

              {/* Value Propositions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                <div className="text-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: '#F5E6D3' }}
                  >
                    <Crown 
                      className="w-6 h-6" 
                      style={{ color: '#D4AF37' }}
                    />
                  </div>
                  <h4 
                    className="font-semibold mb-2"
                    style={{ color: '#8B4513' }}
                  >
                    Premium Quality
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ color: '#6B3410' }}
                  >
                    Finest materials and craftsmanship.
                  </p>
                </div>
                <div className="text-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: '#F5E6D3' }}
                  >
                    <Heart 
                      className="w-6 h-6" 
                      style={{ color: '#D4AF37' }}
                    />
                  </div>
                  <h4 
                    className="font-semibold mb-2"
                    style={{ color: '#8B4513' }}
                  >
                    Ethical Fashion
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ color: '#6B3410' }}
                  >
                    Sustainable and responsible practices.
                  </p>
                </div>
                <div className="text-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: '#F5E6D3' }}
                  >
                    <Sparkles 
                      className="w-6 h-6" 
                      style={{ color: '#D4AF37' }}
                    />
                  </div>
                  <h4 
                    className="font-semibold mb-2"
                    style={{ color: '#8B4513' }}
                  >
                    Timeless Design
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ color: '#6B3410' }}
                  >
                    Classic elegance for modern women.
                  </p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href="#products"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                style={{ 
                  backgroundColor: '#D4AF37',
                  color: '#8B4513'
                }}
              >
                Discover Our Story
              </motion.a>
            </div>
          </MotionWrapper>

          {/* Image */}
          <MotionWrapper direction="left" delay={0.4}>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/craft.jpeg"
                  alt="Aagya Ethics - Traditional Fashion"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              
              {/* Overlay Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-6 right-6 rounded-xl p-6 shadow-lg"
                style={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #F5E6D3'
                }}
              >
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold mb-1"
                    style={{ color: '#8B4513' }}
                  >
                    5+
                  </div>
                  <div 
                    className="w-8 h-0.5 mx-auto mb-2"
                    style={{ backgroundColor: '#D4AF37' }}
                  ></div>
                  <div 
                    className="text-sm"
                    style={{ color: '#6B3410' }}
                  >
                    Years of Excellence
                  </div>
                </div>
              </motion.div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
