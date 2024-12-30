import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" }
  ];

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: "contact@company.com" },
    { icon: <Phone className="h-5 w-5" />, text: "+91 XXX XXX XXXX" },
    { icon: <MapPin className="h-5 w-5" />, text: "Chennai, Tamil Nadu" }
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
            <h3 className="text-lg font-semibold text-zinc-50 mb-4">Company Name</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Pioneering the future of aerospace technology through innovation and dedication.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  aria-label={social.label}
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
                <li key={index} className="flex items-center space-x-2 text-sm text-zinc-400">
                  {info.icon}
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500"
        >
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;