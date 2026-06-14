'use client';

import { motion } from 'framer-motion';

// ─── Stats data ──────────────────────────────────────────

const stats = [
  {
    value: '20',
    unit: 'KM',
    label: 'Stratospheric Altitude',
    note: 'Operating ceiling in near-space — bridging satellites and drones',
  },
  {
    value: '1st',
    unit: '',
    label: 'In India',
    note: 'Dedicated HAPS spacetech startup — built from a college project',
  },
  {
    value: '6+',
    unit: '',
    label: 'Partners & Backers',
    note: 'MeitY, StartupTN, EDII Tamil Nadu, InnoSphere, Indian Coast Guard & Navy',
  },
  {
    value: '2024',
    unit: '→',
    label: 'Now',
    note: 'Prototype to sea-trial validation in under two years',
  },
];

// ─── Component ───────────────────────────────────────────

export default function StatsSection() {
  return (
    <section className="bg-zinc-950 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 border-b border-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 md:p-12 group hover:bg-black transition-colors duration-300"
            >
              {/* Number */}
              <div className="mb-3 flex items-baseline gap-1.5">
                <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-white leading-none">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-base md:text-lg font-display uppercase text-zinc-600 leading-none">
                    {stat.unit}
                  </span>
                )}
              </div>

              {/* Label */}
              <p className="text-xs font-display uppercase tracking-widest text-zinc-400 mb-2">
                {stat.label}
              </p>

              {/* Supporting note */}
              <p className="text-xs text-zinc-600 leading-relaxed max-w-[18ch] group-hover:text-zinc-500 transition-colors duration-300">
                {stat.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
