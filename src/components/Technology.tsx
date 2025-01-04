import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Radio, Database, Zap } from 'lucide-react';

const Technology = () => {
  const technologies = [
    {
      title: "AI-Powered Intelligence",
      description: "Advanced autonomous operations with real-time decision making capabilities and predictive analytics",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Extended Endurance",
      description: "Revolutionary power systems enabling continuous stratospheric operation for weeks to months",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Versatile Applications",
      description: "Multi-purpose platform supporting ISR, telecommunications, and environmental monitoring missions",
      icon: <Radio className="w-6 h-6" />,
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      title: "Data Processing",
      description: "Real-time edge computing and data analysis for immediate insights and decision-making",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section id="technology" className="py-16 relative sm:pt-40 pt-30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      {/* Abstract Background Image */}
      <div className="absolute inset-0 mix-blend-luminosity">
        <img 
          src="/technology.png" 
          alt="Abstract Technology" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Our Technology
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Pioneering next-generation stratospheric platforms with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"
                style={{ background: `linear-gradient(to right, ${tech.gradient})` }}
              />
              
              <div className="relative h-full p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="mb-6 p-3 inline-block rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 group-hover:text-blue-400 text-white transition-colors">
                  {tech.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {tech.title}
                </h3>
                
                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors text-sm">
                  {tech.description}
                </p>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-zinc-700 rounded-tl-xl group-hover:border-blue-500/50 transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-zinc-700 rounded-br-xl group-hover:border-blue-500/50 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;