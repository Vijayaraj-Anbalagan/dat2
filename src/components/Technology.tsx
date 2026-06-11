import React from 'react';
import { motion } from 'framer-motion';

const Technology = () => {
  const technologies = [
    {
      title: "AI-Powered Intelligence",
      description: "Advanced autonomous operations with real-time decision making capabilities and predictive analytics.",
      id: "01"
    },
    {
      title: "Extended Endurance",
      description: "Revolutionary power systems enabling continuous stratospheric operation for weeks to months.",
      id: "02"
    },
    {
      title: "Versatile Applications",
      description: "Multi-purpose platform supporting ISR, telecommunications, and environmental monitoring missions.",
      id: "03"
    },
    {
      title: "Data Processing",
      description: "Real-time edge computing and data analysis for immediate insights and decision-making.",
      id: "04"
    }
  ];

  return (
    <section id="technology" className="py-32 relative bg-black border-t border-white/10">
      <div className="absolute inset-0 z-0">
        <img 
          src="/technology.png" 
          alt="Abstract Technology" 
          className="w-full h-full object-cover object-center opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <p className="eyebrow mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight">
            Why Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-8 group hover:bg-zinc-900 transition-colors"
            >
              <div className="text-zinc-600 font-display text-xl mb-8 group-hover:text-white transition-colors">{tech.id}</div>
              <h3 className="text-xl font-display uppercase tracking-wide mb-4 text-white">
                {tech.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
