import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const Team = () => {
  const team = [
    {
      name: "Logeshwaran M",
      role: "Founder & CEO",
      education: "Aerospace Engineer, KCG Alumnus",
      image: "/api/placeholder/400/400",
      links: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Jayashree B",
      role: "Founder & COO",
      education: "Masters in Aerospace Engineering, Coventry University",
      image: "/api/placeholder/400/400",
      links: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Hariharan R",
      role: "Founder & CTO",
      education: "Masters in Aerospace Engineering, MIT Campus",
      image: "/api/placeholder/400/400",
      links: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent absolute -top-8 left-0"
          />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Meet the visionaries behind Dashagriv Aerospaces revolutionary technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card Background with Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl" />
              
              <div className="relative p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800/50 hover:border-blue-500/50 transition-all duration-300">
                {/* Image Container */}
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Orbital Ring Effect */}
                  <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-spin-slow" 
                       style={{ animationDuration: '10s' }} />
                </div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 mb-2 font-medium">{member.role}</p>
                  <p className="text-zinc-400 text-sm mb-4">{member.education}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={member.links.linkedin} className="text-zinc-400 hover:text-blue-400 transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-zinc-700 rounded-tl-xl group-hover:border-blue-500/50 transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-zinc-700 rounded-br-xl group-hover:border-blue-500/50 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.a
            href="/team"
            whileHover={{ x: 5 }}
            className="text-blue-400 flex items-center gap-2 font-medium text-base md:text-lg hover:text-blue-600 transition-colors cursor-pointer"
          >
            Meet the team who made Dashagriv <FaArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="/careers"
            whileHover={{ x: 5 }}
            className="text-blue-400 flex items-center gap-2 font-medium text-base md:text-lg hover:text-blue-600 transition-colors cursor-pointer"
          >
            Be a part of the team, join Dashagriv <FaArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Team;
