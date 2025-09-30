"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Static background with subtle opacity fade
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={ref} id="home" className="relative h-screen w-full overflow-hidden pt-16 md:pt-16">
      {/* Background Image - Static */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/image-background-aagya-ethics.jpeg')",
          opacity,
        }}
      />

      {/* Soft Overlay Gradient - Bottom to Top */}
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 via-maroon-800/20 to-transparent"></div>

      {/* Hero Content - No navbar here since it's in layout */}

      {/* Mobile Layout - Bottom Text Zone */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 w-full text-center px-4 pb-16 z-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-serif text-gold mb-3"
        >
          Aagya Ethics
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream text-base leading-relaxed mb-6"
        >
          Premium curated fashion –<br />
          Elegance you can trust.
        </motion.p>

        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.4)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-8 py-3 bg-cream text-maroon-800 font-medium rounded-lg border border-gold shadow-lg"
        >
          Explore Collection
        </motion.a>
      </div>

      {/* Desktop Layout - Slightly Below Center Overlay */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center z-20" style={{ paddingTop: '38vh' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-cream/95  p-8 rounded-2xl shadow-2xl border border-gold/30 max-w-md text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl font-serif text-maroon-800 mb-4"
          >
            Aagya Ethics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-maroon-700 text-lg leading-relaxed mb-6"
          >
            Premium curated fashion – Elegance you can trust.
          </motion.p>

          <motion.a
            href="#products"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 0px 20px rgba(139, 69, 19, 0.3)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 bg-maroon-800 text-cream font-medium rounded-lg border border-gold shadow-lg"
          >
            Explore Collection
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
