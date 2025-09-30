"use client";

import { motion } from "framer-motion";
import { Truck, CreditCard, MapPin, Shield, Users, Award } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

const valuePropositions = [
  {
    icon: Truck,
    title: "Worldwide Delivery",
    description: "Fast and secure shipping to 50+ countries",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Protected transactions with SSL encryption",
    highlighted: true,
  },
  {
    icon: MapPin,
    title: "Australian-based Brand",
    description: "Proudly crafted in Melbourne, Australia",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "30-day return policy for peace of mind",
  },
  {
    icon: Users,
    title: "Customer Care",
    description: "Dedicated support team ready to help",
  },
  {
    icon: Award,
    title: "Premium Certified",
    description: "Awarded for excellence in luxury fashion",
  },
];

export default function ValueProps() {
  return (
    <section 
      className="py-20"
      style={{ backgroundColor: '#f8f6f0' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionWrapper direction="up" delay={0.2}>
          <div className="text-center mb-16">
            {/* Golden line */}
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
              Why Choose Aagya Ethics?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg max-w-2xl mx-auto"
              style={{ color: '#6B3410' }}
            >
              Experience the confidence that comes with choosing a brand committed to excellence, quality, and customer satisfaction at every step
            </motion.p>
          </div>
        </MotionWrapper>

        {/* Value Propositions Grid - 3x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuePropositions.map((prop, index) => (
            <MotionWrapper
              key={prop.title}
              direction="up"
              delay={0.1 * index}
            >
              <motion.div
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                className="rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-[#F5E6D3] transition-all duration-300 text-left"
                style={{ 
                //   backgroundColor: prop.highlighted ? '#F5E6D3' : '#ffffff',
                  border: '1px solid #F5E6D3'
                }}
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (0.1 * index) }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#F5E6D3' }}
                >
                  <prop.icon 
                    className="w-8 h-8" 
                    style={{ color: '#D4AF37' }}
                  />
                </motion.div>

                {/* Content */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + (0.1 * index) }}
                  className="text-xl font-semibold mb-3"
                  style={{ 
                    color: prop.highlighted ? '#D4AF37' : '#8B4513'
                  }}
                >
                  {prop.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + (0.1 * index) }}
                  className="leading-relaxed"
                  style={{ color: '#6B3410' }}
                >
                  {prop.description}
                </motion.p>
              </motion.div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
