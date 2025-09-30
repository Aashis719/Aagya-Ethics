"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const footerLinks = {
    shop: ["New Arrivals", "Kurthas", "Accessories", "Gift Cards"],
    company: ["Our Story", "Sustainability", "Press", "Careers"],
    support: ["Size Guide", "Shipping Info", "Returns", "Contact Us"],
  };

  return (
    <footer style={{ backgroundColor: '#430A18', color: '#f5f3f0' }} id="contact" className="py-16 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h3 className="text-3xl font-serif font-bold mb-2" style={{ color: '#E7CA27' }}>
              Aagya Ethics
            </h3>
            <div className="h-1 w-24 mb-6" style={{ backgroundColor: '#E7CA27' }}></div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#e6d7cc' }}>
              Where tradition meets modern elegance. We curate premium ethnic wear 
              that celebrates your heritage while embracing contemporary style.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm" style={{ color: '#d1b8a3' }}>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" style={{ color: '#E7CA27' }} />
                <span>Melbourne, Australia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" style={{ color: '#E7CA27' }} />
                <span>+61 3 9000 0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" style={{ color: '#E7CA27' }} />
                <span>hello@aagyaethics.com</span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
             {Object.entries(footerLinks).map(([title, links], i) => (
               <div key={i}>
                 <h4 className="text-lg font-serif font-semibold mb-6 capitalize" style={{ color: '#E7CA27' }}>
                   {title}
                 </h4>
                 <ul className="space-y-3">
                   {links.map((link, idx) => (
                     <li key={idx}>
                       <a
                         href="#"
                         className="text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                         style={{ color: '#d1b8a3' }}
                         onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#E7CA27'}
                         onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#d1b8a3'}
                       >
                         {link}
                       </a>
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <h4 className="text-lg font-serif font-semibold mb-6" style={{ color: '#E7CA27' }}>
               Follow Us
             </h4>
             <p className="text-sm mb-4" style={{ color: '#d1b8a3' }}>
               Follow us for the latest collections, styling tips, and behind-the-scenes moments.
             </p>
             <div className="flex space-x-4 mb-6">
               {socialLinks.map((social) => (
                 <motion.a
                   key={social.label}
                   href={social.href}
                   whileHover={{ scale: 1.1, rotate: 5 }}
                   whileTap={{ scale: 0.9 }}
                   className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                   style={{ 
                     backgroundColor: 'rgba(245, 243, 240, 0.1)', 
                     color: '#E7CA27',
                     border: '1px solid #E7CA27'
                   }}
                   onMouseEnter={(e) => {
                     (e.target as HTMLElement).style.backgroundColor = '#E7CA27';
                     (e.target as HTMLElement).style.color = '#7c2d3e';
                   }}
                   onMouseLeave={(e) => {
                     (e.target as HTMLElement).style.backgroundColor = 'rgba(245, 243, 240, 0.1)';
                     (e.target as HTMLElement).style.color = '#E7CA27';
                   }}
                   aria-label={social.label}
                 >
                   <social.icon className="w-5 h-5" />
                 </motion.a>
               ))}
             </div>
             <a
               href="#newsletter"
               className="text-sm font-medium transition-colors"
               style={{ color: '#E7CA27' }}
               onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#f2d663'}
               onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#E7CA27'}
             >
               Join our newsletter →
             </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(209, 184, 163, 0.3)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-sm"
              style={{ color: 'rgba(209, 184, 163, 0.8)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              © {currentYear} Aagya Ethics. A luxury fashion brand. All rights reserved.
            </motion.p>

            <motion.div
              className="flex space-x-6 text-sm"
              style={{ color: 'rgba(209, 184, 163, 0.8)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#" 
                className="transition-colors"
                style={{ color: 'rgba(209, 184, 163, 0.8)' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#E7CA27'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(209, 184, 163, 0.8)'}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="transition-colors"
                style={{ color: 'rgba(209, 184, 163, 0.8)' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#E7CA27'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(209, 184, 163, 0.8)'}
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="transition-colors"
                style={{ color: 'rgba(209, 184, 163, 0.8)' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#E7CA27'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(209, 184, 163, 0.8)'}
              >
                Cookies
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
