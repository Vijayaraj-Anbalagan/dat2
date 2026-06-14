import React from "react";
import { FiLinkedin, FiYoutube, FiInstagram } from "react-icons/fi";

// ─── Data ────────────────────────────────────────────────

const socialLinks = [
  {
    icon: <FiLinkedin className="h-4 w-4" />,
    href: "https://www.linkedin.com/company/dashagriv-aerospace-technology/",
    label: "LinkedIn",
  },
  {
    icon: <FiYoutube className="h-4 w-4" />,
    href: "https://www.youtube.com/@Dashagriv_Aerospace",
    label: "YouTube",
  },
  {
    // Verify the Instagram URL — update if handle differs
    icon: <FiInstagram className="h-4 w-4" />,
    href: "https://www.instagram.com/dashagriv_aerospace/",
    label: "Instagram",
  },
];

const navLinks = [
  { label: "Solutions", href: "/solution" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
];

// ─── Component ───────────────────────────────────────────

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Mission statement header */}
        <div className="mb-16 pb-16 border-b border-white/10">
          <p className="text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-tight text-white leading-tight max-w-2xl">
            The stratosphere is no longer
            <br className="hidden md:block" /> out of reach.
          </p>
        </div>

        {/* Four-column grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <h3 className="eyebrow mb-4">Dashagriv Aerospace Technology</h3>
            <p className="text-zinc-500 text-sm max-w-sm mb-8 leading-relaxed font-body">
              India&apos;s first dedicated HAPS spacetech startup — building
              stratospheric platforms at 18–20 km for surveillance, Earth
              observation, defence, and advanced telecommunications.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-white/10 text-zinc-600 transition-colors duration-200 hover:border-white/40 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate column */}
          <div>
            <h3 className="eyebrow mb-6">Navigate</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="eyebrow mb-6">Contact</h3>
            <ul className="space-y-4 text-sm font-body">
              <li>
                <a
                  href="mailto:info@dashagriv.in"
                  className="text-zinc-500 hover:text-white transition-colors duration-200"
                >
                  info@dashagriv.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+916382497619"
                  className="text-zinc-500 hover:text-white transition-colors duration-200"
                >
                  +91 63824 97619
                </a>
              </li>
              <li className="text-zinc-700 leading-relaxed">
                Chennai, Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-700 font-body">
            &copy; {new Date().getFullYear()} Dashagriv Aerospace Technology.
            All rights reserved.
          </p>
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Pioneering the Near Space Frontier
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
