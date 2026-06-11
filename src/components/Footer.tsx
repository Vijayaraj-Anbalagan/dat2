import React from "react";
import { FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FiLinkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/company/dashagriv-aerospace-technology/",
      label: "LinkedIn",
    },
    {
      icon: <FiYoutube className="h-5 w-5" />,
      href: "https://www.youtube.com/@Dashagriv_Aerospace",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="lg:col-span-2">
            <h3 className="eyebrow mb-6">Dashagriv Aerospace</h3>
            <p className="text-zinc-400 text-sm max-w-sm mb-6 leading-relaxed">
              India&apos;s first company pioneering stratospheric platforms for near-space applications.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-zinc-500 hover:text-white transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="eyebrow mb-6">Navigation</h3>
            <ul className="space-y-4">
              {["Solution", "Team", "Careers"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li>info@dashagriv.in</li>
              <li>+91 63824 97619</li>
              <li>Chennai, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Dashagriv Aerospace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
