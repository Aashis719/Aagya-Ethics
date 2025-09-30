"use client";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();







  
  // Transform values for smooth transitions (desktop only)
  const navBackgroundDesktop = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  
  // Mobile always has white background
  const navBackgroundMobile = "rgba(255, 255, 255, 0.95)";
  
  // const borderOpacity = useTransform(
  //   scrollY,
  //   [0, 100],
  //   [0, 1]
  // );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section based on scroll position
      const sections = ['home', 'products', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Initial checks
    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Add click outside listener only when menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to get nav link styles based on active state
  const getNavLinkStyle = (section: string) => {
    const isActive = activeSection === section;
    if (isActive) {
      return { color: '#E7CA27' }; // Gold color for active state
    }
    return { color: scrolled ? '#430A18' : '#ffffff' };
  };

  const getNavLinkHoverHandlers = (section: string) => {
    const isActive = activeSection === section;
    return {
      onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isActive) {
          (e.target as HTMLElement).style.color = '#E7CA27';
        }
      },
      onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isActive) {
          (e.target as HTMLElement).style.color = scrolled ? '#430A18' : '#ffffff';
        }
      }
    };
  };

  // Mobile navigation styles (always dark background)
  const getMobileNavLinkStyle = (section: string) => {
    const isActive = activeSection === section;
    return { color: isActive ? '#E7CA27' : '#430A18' };
  };

  const getMobileNavLinkHoverHandlers = (section: string) => {
    const isActive = activeSection === section;
    return {
      onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isActive) {
          (e.target as HTMLElement).style.color = '#E7CA27';
        }
      },
      onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isActive) {
          (e.target as HTMLElement).style.color = '#430A18';
        }
      }
    };
  };

  return (
    <motion.nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300"
      style={{ 
        backgroundColor: isMobile ? navBackgroundMobile : navBackgroundDesktop,
        // borderBottom: `1px solid rgba(245, 243, 240, ${borderOpacity.get()})`
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-0 w-full">
        <div className="flex justify-between items-center h-16  md:h-18 w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <Image
              src="/images/aagya-logo.png"
              alt="Aagya Ethics"
              width={70}
              height={70}
              className="rounded-full md:w-18 md:h-18 w-14 h-14"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`ml-10 flex items-baseline space-x-8 ${poppins.className}`}>
              <a
                href="#home"
                className="px-2 py-2 text-lg font-medium transition-colors duration-300"
                style={getNavLinkStyle('home')}
                {...getNavLinkHoverHandlers('home')}
              >
                Home
              </a>
             
              <a
                href="#products"
                className="px-2 py-2 text-lg font-medium transition-colors duration-300"
                style={getNavLinkStyle('products')}
                {...getNavLinkHoverHandlers('products')}
              >
                Products
              </a>
              <a
                href="#about"
                className="px-2 py-2 text-lg font-medium transition-colors duration-300"
                style={getNavLinkStyle('about')}
                {...getNavLinkHoverHandlers('about')}
              >
                About
              </a>
              <a
                href="#contact"
                className="px-2 py-2 text-lg font-medium transition-colors duration-300"
                style={getNavLinkStyle('contact')}
                {...getNavLinkHoverHandlers('contact')}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="p-2 transition-colors duration-300"
              style={{ color: isMobile ? '#430A18' : (scrolled ? '#430A18' : '#ffffff') }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#E7CA27'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = isMobile ? '#430A18' : (scrolled ? '#430A18' : '#ffffff')}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" style={{ color: 'inherit' }} />
              ) : (
                <Menu className="h-6 w-6" style={{ color: 'inherit' }} />
              )}
            </motion.button>
          </div>
        </div>

         {/* Mobile Navigation */}
         {isMenuOpen && (
           <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: "auto" }}
             exit={{ opacity: 0, height: 0 }}
             className="md:hidden bg-transparent"
           >
             <div 
               className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t w-full " 
               style={{ 
                 
                 borderColor: '#f5f3f0',
                
               }}
             >
              <a
                href="#home"
                className="block px-3 py-2 text-base font-medium transition-colors duration-200"
                style={getMobileNavLinkStyle('home')}
                {...getMobileNavLinkHoverHandlers('home')}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
             
              <a
                href="#products"
                className="block px-3 py-2 text-base font-medium transition-colors duration-200"
                style={getMobileNavLinkStyle('products')}
                {...getMobileNavLinkHoverHandlers('products')}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-base font-medium transition-colors duration-200"
                style={getMobileNavLinkStyle('about')}
                {...getMobileNavLinkHoverHandlers('about')}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium transition-colors duration-200"
                style={getMobileNavLinkStyle('contact')}
                {...getMobileNavLinkHoverHandlers('contact')}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
