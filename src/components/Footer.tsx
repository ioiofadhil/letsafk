import { Instagram, Twitter, MessageCircle } from 'lucide-react';
import { INSTAGRAM_PROFILE_URL } from '../config/instagram';
import { Button, Heading } from './ui';
export function Footer() {
  return (
    <footer className="relative bg-[#EA580C] border-t-8 border-black pt-20 pb-10 px-4 overflow-hidden">
      {/* Blueprint grid continues naturally from body, but let's add some footer specific styling */}
      <div className="absolute inset-0 bg-blueprint opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-block bg-[#FFD93D] border-4 border-black px-4 py-2 rounded-lg transform -rotate-2">
              <span className="font-poppins font-black text-3xl text-black tracking-tight">
                Let's AFK
              </span>
            </div>
            <Heading as="h3" accent="white" className="max-w-md leading-tight">
              Touch grass. Meet humans. Go AFK.
            </Heading>
            <p className="font-inter text-white/80 font-medium max-w-sm">
              Indonesia's fastest growing offline community. Stop scrolling,
              start living.
            </p>
          </div>

          {/* Links Col */}
          <div className="space-y-4">
            <Heading as="h4" accent="pink">
              Explore
            </Heading>
            <ul className="space-y-3 font-inter font-semibold text-lg">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#FFD93D] transition-colors inline-block hover:translate-x-2 transform duration-200">

                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-[#FFD93D] transition-colors inline-block hover:translate-x-2 transform duration-200">

                  Upcoming Events
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-[#FFD93D] transition-colors inline-block hover:translate-x-2 transform duration-200">

                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFD93D] transition-colors inline-block hover:translate-x-2 transform duration-200">

                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Col */}
          <div className="space-y-4">
            <Heading as="h4" accent="yellow">
              Connect
            </Heading>
            <div className="flex gap-4">
              <Button as="a" href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer" color="icon">
                <Instagram size={24} />
              </Button>
              <Button as="a" href="#" color="icon">
                <Twitter size={24} />
              </Button>
              <Button as="a" href="#" color="icon">
                <MessageCircle size={24} />
              </Button>
            </div>
            <p className="font-inter text-sm text-white/80 mt-4 font-medium">
              Join our WhatsApp community for instant updates!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-black/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter font-bold text-white/90">
            © {new Date().getFullYear()} Let's AFK. All rights reserved.
          </p>
          <div className="flex gap-6 font-inter font-bold text-sm text-white/80">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}