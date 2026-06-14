"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const pressItems = [
  {
    publication: "StartupPedia",
    date: "May 2, 2026",
    title:
      "Dashagriv Aerospace conducts high-altitude airship prototype trial in mid-sea off Nagapattinam coast",
    href: "https://startuppedia.in/startup-stories/dashagriv-aerospace-conducts-high-altitude-airship-prototype-trial-mid-sea-11789471",
    tag: "Breakthrough",
  },
  {
    publication: "Indian Defence News",
    date: "May 2, 2026",
    title:
      "Dashagriv Aerospace successfully trials high-altitude airship in mid-sea conditions off Nagapattinam",
    href: "https://www.indiandefensenews.in/2026/05/dashagriv-aerospace-successfully-trials.html",
    tag: "Defence",
  },
  {
    publication: "IDRW.org",
    date: "March 26, 2026",
    title:
      "Dashagriv Aerospace unveils India's HAPS pseudo-satellite platform, targets 20 KM stratospheric operations",
    href: "https://idrw.org/dashagriv-aerospace-unveils-indias-haps-pseudo-satellite-platform-targets-20-km-stratospheric-operations/",
    tag: "Aerospace",
  },
  {
    publication: "StartupPedia",
    date: "March 28, 2026",
    title:
      "This startup is building India's 1st High-Altitude Pseudo Satellite (HAPS) platform for surveillance in remote areas & disaster response",
    href: "https://startuppedia.in/trending/this-startup-is-building-indias-1st-high-altitude-pseudo-satellite-haps-platform-for-surveillance-in-remote-areas-disaster-response-11429479",
    tag: "Feature",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-black border-t border-white/10 py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="eyebrow mb-4">Press</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white">
              In the News
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-xs leading-relaxed font-body">
            Dashagriv Aerospace covered by global aerospace and defence media.
          </p>
        </div>

        {/* Press list */}
        <div className="border-t border-white/10">
          {pressItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              /*
               * ── FIX: always flex-row, never flex-col.
               * Arrow is always inline-right, even on mobile.
               * items-start keeps arrow anchored to the top of the text block.
               */
              className="group flex flex-row justify-between items-start py-8 border-b border-white/10 gap-4 hover:bg-zinc-950 px-3 -mx-3 transition-colors duration-200"
            >
              {/* Content — flex-1 ensures it fills space, min-w-0 prevents overflow */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="eyebrow">{item.publication}</span>
                  <span
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontFamily:
                        'var(--font-display, "Space Grotesk", sans-serif)',
                      color: "rgba(255,255,255,0.25)",
                    }}
                  >
                    {item.date}
                  </span>
                  <span
                    style={{
                      fontSize: "8px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontFamily:
                        'var(--font-display, "Space Grotesk", sans-serif)',
                      border: "1px solid rgba(255,255,255,0.12)",
                      padding: "2px 7px",
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-body text-zinc-400 group-hover:text-white transition-colors duration-200 leading-snug">
                  {item.title}
                </h3>
              </div>

              {/*
               * Arrow — flex-shrink-0 stops it from collapsing.
               * mt-0.5 aligns it with the first line of text.
               * Always visible on the right, on all screen sizes.
               */}
              <ArrowUpRight className="w-5 h-5 mt-0.5 flex-shrink-0 text-zinc-700 group-hover:text-white transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
