'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import {
  motion
} from "framer-motion";
import {
  FiArrowUp,
  FiBox,
  FiClock,
} from "react-icons/fi";
import {  FC } from "react";
import Image from "next/image";
import Technology from '@/components/Technology';
import Team from '@/components/Team';
import Timeline from '@/components/TimeLine';
import Footer from '@/components/Footer';
import { TextScramble } from '@/components/ui/text-scramble';
import LogoScroll from '@/components/LogoScroll';
import Nav from '@/components/Navbar';
const SmoothScrollPage: FC = () => {
  return (
    <div className="bg-zinc-950 vmin-h-screen relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      {/* @ts-expect-error - Known issue with ReactLenis types */}
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Nav />
        <Hero />
        <Technology />
        <ParallaxShowcase />
        <Team />
        <Timeline />
        <Contact />
        <Footer/>
      </ReactLenis>
    </div>
  );
};



const SECTION_HEIGHT = 500;
const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <Image
        src="/hero.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="w-full h-full object-cover"
      />
    </div>
  );
};


const ParallaxShowcase = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">HAPS Advantage</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Our stratospheric platforms bridge the gap between satellites and traditional aerial systems
          </p>
        </motion.div>
        <div className="relative flex justify-center">
          <Image
            src="/explain.png"
            width={900}
            height={420}
            alt="HAPS Technology"
            className="rounded-lg mix-blend-screen"
          />
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <HeroBackground />
      <div className="absolute inset-0 flex items-center justify-center hidden sm:flex">
        <div className="w-[800px] h-[800px] border border-blue-500/10 rounded-full animate-spin-slow" />
        <div className="absolute w-[600px] h-[600px] border border-blue-500/20 rounded-full animate-spin-slow-reverse" />
        <div className="absolute w-[400px] h-[400px] border border-blue-500/30 rounded-full animate-spin-slow" />
      </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 relative"
        >
          <div className="relative">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 pt-28"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
                <span className="relative text-white">
                Welcome to <span className="text-blue-500">Dashagriv</span> Aerospace Technology Pvt. Limited 
                <span className="absolute inset-0 blur-md bg-blue-500/20" />
                </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-md text-zinc-300 mb-8 max-w-2xl mx-auto relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="relative">
              <TextScramble
          className=''
          duration={1.2}
        >
              Empowering the future with cutting-edge High-Altitude Platform Systems (HAPS) for near-space applications.
              </TextScramble>
              <span className="absolute inset-0 blur-md bg-blue-500/20" />
              </span>
            </motion.p>
          </div>

          <motion.button 
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 text-white transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Learn More
          </motion.button>
          <LogoScroll/>
          <About />
        </motion.div>
        
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const About = () => {
  const features = [
    {
      title: "Payload Capacity",
      value: "200kg",
      icon: <FiBox className="text-blue-600" />,
    },
    {
      title: "Operational Altitude",
      value: "20-40km",
      icon: <FiArrowUp className="text-blue-600" />,
    },
    {
      title: "Endurance",
      value: "Months",
      icon: <FiClock className="text-blue-600" />,
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-8 overflow-hidden">
      {/* Background with subtle particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"
        >
          <div className="relative p-6 group">
            {/* Frosted glass effect */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-xl shadow-lg border border-blue-500/50" />
            
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Content container */}
            <div className="relative space-y-6">
              <motion.h2 
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                About Dashagriv Aerospace
              </motion.h2>
              
              <motion.p 
                className="text-gray-700 text-base"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Indias first company to design and manufacture operational stratospheric platforms,
                bridging the gap between satellites and traditional aerial systems.
              </motion.p>
              
                <div className="grid grid-cols-3 gap-4 hidden sm:grid">
                {features.map((feature, index) => (
                  <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group/card relative h-32 overflow-hidden"
                  >
                  {/* Card background with frost effect */}
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-lg 
                          group-hover/card:bg-white/60 transition-all duration-300 border-1 border-blue-500/40" />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 
                          transition-opacity duration-300 bg-gradient-to-t 
                          from-blue-400/10 via-blue-400/5 to-transparent" />
                  
                  {/* Content wrapper */}
                  <div className="relative h-full p-4 border border-white/20 rounded-lg 
                          group-hover/card:border-blue-400/30 transition-colors duration-300
                          flex flex-col justify-between">
                    <div className="text-2xl transform group-hover/card:scale-110 
                          group-hover/card:text-blue-600 transition-all duration-300">
                    {feature.icon}
                    </div>
                    <div>
                    <div className="text-sm text-gray-600 font-medium mb-1">
                      {feature.title}
                    </div>
                    <div className="text-lg font-bold text-blue-600 
                            group-hover/card:text-blue-700 transition-colors">
                      {feature.value}
                    </div>
                    </div>
                  </div>
                  </motion.div>
                ))}
                </div>
            </div>
          </div>
          
            <motion.div 
            className="relative h-[400px] group hidden sm:block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            >
            {/* Image container */}
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 
                    to-purple-500/10 mix-blend-overlay group-hover:opacity-75 
                    transition-opacity duration-500" />
              
              {/* Orbital rings */}
              <div className="absolute inset-0 flex items-center justify-center 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="w-[300px] h-[300px] border border-blue-400/20 
                      rounded-full animate-spin-slow" />
              <div className="absolute w-[200px] h-[200px] border border-blue-400/30 
                      rounded-full animate-spin-slow-reverse" />
              </div>
              
              <Image
              src="/blimp.webp"
              alt="HAPS Platform"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 
                    border-blue-400/30 rounded-tl-xl group-hover:border-blue-400/60 
                    transition-colors duration-300" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 
                    border-blue-400/30 rounded-br-xl group-hover:border-blue-400/60 
                    transition-colors duration-300" />
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-zinc-900/50 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-zinc-800/50 rounded-lg border border-zinc-700"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-zinc-800/50 rounded-lg border border-zinc-700"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 bg-zinc-800/50 rounded-lg border border-zinc-700"
            />
            <button className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};



export default SmoothScrollPage;
