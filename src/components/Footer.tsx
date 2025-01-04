import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi';
import SparklesText from './ui/sparkles-text';

const Footer = () => {
  const socialLinks = [
    { icon: <FiLinkedin className="h-5 w-5" />, href: "https://linkedin.com/company/dashagriv-aerospace", label: "LinkedIn" },
    { icon: <FiTwitter className="h-5 w-5" />, href: "https://twitter.com/dashagrivaero", label: "Twitter" },
    { icon: <FiInstagram className="h-5 w-5" />, href: "https://instagram.com/dashagrivaerospace", label: "Instagram" },
    { icon: <FiGithub className="h-5 w-5" />, href: "https://github.com/dashagrivaero", label: "GitHub" }
  ];

  const contactInfo = [
    { icon: <FiMail className="h-5 w-5" />, text: "info@dashagriv.in" },
    { icon: <FiPhone className="h-5 w-5" />, text: "+91 63824 97619" },
    { icon: <FiMapPin className="h-5 w-5" />, text: "Chennai, Tamil Nadu, India" }
  ];


  return (
    <footer className="bg-zinc-900/50 border-t border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-zinc-50 mb-4">Dashagriv Aerospace</h3>
            <p className="text-sm text-zinc-400 mb-4">
              India&apos;s first company pioneering stratospheric platforms for near-space applications, revolutionizing aerospace technology through innovation and dedication.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-zinc-500 hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-zinc-50 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
              { name: 'About', route: false },
              { name: 'Technology', route: false },
              { name: 'Product', route: true },
              { name: 'Team', route: true },
              { name: 'Careers', route: true }
              ].map((item, index) => (
              <li key={index}>
                <a
                href={item.route ? `/${item.name.toLowerCase()}` : `#${item.name.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
                onClick={(e) => {
                  if (!item.route) {
                  e.preventDefault();
                  document.querySelector(`#${item.name.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                >
                {item.name}
                </a>
              </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-zinc-50 mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors">
                  {info.icon}
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Made with Love & Copyright */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-zinc-800 text-center"
        >
            <p className="text-sm text-zinc-400 mb-1">Made with ❤️ by</p>
            <a href="https://thesocialsync.in" target="_blank" rel="noopener noreferrer">
            <SparklesText text="SocialSync" className="text-white text-4xl m-4" />
            </a>
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Dashagriv Aerospace. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;