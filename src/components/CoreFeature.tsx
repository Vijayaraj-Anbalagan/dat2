"use client";

import { motion } from "framer-motion";
import { SatelliteDish, Zap, Layers, Code, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

// ─── Types ─────────────────────────────────────────────

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  size: "large" | "medium" | "small";
  className?: string;
}

// ─── Individual card ────────────────────────────────────

const BentoGridItem: React.FC<BentoGridItemProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "group relative overflow-hidden border-0 bg-black p-10 transition-colors duration-300 hover:bg-zinc-900",
        className,
      )}
    >
      {/* Subtle grid texture */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between text-white">
        <div>
          {/* Icon container */}
          <div className="mb-8 inline-flex h-10 w-10 items-center justify-center border border-white/10 text-zinc-400 transition-colors duration-300 group-hover:border-white/30 group-hover:text-white">
            {icon}
          </div>

          <h3 className="mb-3 font-display text-xl uppercase tracking-wide text-white leading-tight">
            {title}
          </h3>
          <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Arrow */}
        <div className="mt-8">
          <ArrowRight className="h-4 w-4 text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-400" />
        </div>
      </div>

      {/* Bottom edge sweep on hover */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-white/30 transition-all duration-500 ease-out group-hover:w-full" />
    </motion.div>
  );
};

// ─── Data ────────────────────────────────────────────────

const items = [
  {
    title: "Stratospheric HAPS Development",
    description:
      "Building high-altitude platform systems for long-endurance missions in research, surveillance, and advanced communications — operating at 18–20 km.",
    icon: <SatelliteDish className="h-5 w-5" />,
    size: "large" as const,
  },
  {
    title: "Payload Hosting Services (HaaS)",
    description:
      "Deploy your sensors and payloads on our stratospheric platforms with plug-and-play integration.",
    icon: <Zap className="h-5 w-5" />,
    size: "small" as const,
  },
  {
    title: "Stratospheric Subsystems",
    description:
      "Reliable, integration-ready subsystems purpose-built for HAPS-based missions.",
    icon: <Layers className="h-5 w-5" />,
    size: "medium" as const,
  },
  {
    title: "Flight Data & Planning Software",
    description:
      "Advanced software suite for mission planning, real-time telemetry, and flight data analytics.",
    icon: <Code className="h-5 w-5" />,
    size: "medium" as const,
  },
];

// ─── Grid ────────────────────────────────────────────────

export default function CoreFeature() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="eyebrow mb-4">Core Systems</p>
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-white">
            What We Do
          </h2>
        </div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 gap-px bg-white/10 border border-white/10 sm:grid-cols-2 md:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              size={item.size}
              className={cn(
                item.size === "large"
                  ? "md:col-span-4"
                  : item.size === "medium"
                    ? "md:col-span-3"
                    : "md:col-span-2",
                "min-h-[200px]",
              )}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
