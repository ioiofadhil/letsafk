import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Events',
    href: '#events'
  },
  {
    name: 'Gallery',
    href: '#gallery'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#EA580C]/90 backdrop-blur-md border-b-4 border-black py-3' : 'bg-transparent py-5'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            className="group relative inline-block"
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}>

            <div className="absolute inset-0 bg-black rounded-lg translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative bg-[#FFD93D] border-4 border-black px-4 py-2 rounded-lg transform -rotate-2">
              <span className="font-poppins font-black text-2xl text-black tracking-tight">
                Let's AFK
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="font-poppins font-bold text-white text-lg hover:text-[#FFD93D] transition-colors drop-shadow-md">

                {link.name}
              </a>
            )}
            <Button as="a" href="#events" color="pill">
              Join Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            as="button"
            color="icon"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen &&
      <motion.div
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="md:hidden absolute top-full left-0 right-0 bg-[#EA580C] border-b-4 border-black p-4 flex flex-col space-y-4">

          {navLinks.map((link) =>
        <a
          key={link.name}
          href={link.href}
          className="font-poppins font-bold text-white text-xl p-2 border-b-2 border-white/20"
          onClick={() => setIsMobileMenuOpen(false)}>

              {link.name}
            </a>
        )}
          <Button
            as="a"
            href="#events"
            color="pink"
            size="lg"
            className="mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join Now
          </Button>
        </motion.div>
      }
    </header>);

}