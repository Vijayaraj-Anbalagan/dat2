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
import {  FC, useEffect, useRef } from "react";
import Image from "next/image";
import Technology from '@/components/Technology';
import Team from '@/components/Team';
import Timeline from '@/components/TimeLine';
import Footer from '@/components/Footer';
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



const SECTION_HEIGHT = 800;
const HeroBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      
      
      // Ensure video plays when ready
      const playVideo = () => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            // Handle any autoplay restrictions gracefully
            console.log('Autoplay prevented by browser');
          });
        }
      };

      videoRef.current.addEventListener('loadeddata', playVideo);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', playVideo);
        }
      };
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 z-10" /> {/* Overlay for better text visibility */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient overlay for smoother text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-20" />
      
      {/* Optional: Add a fallback image for loading state */}
      <div className="absolute inset-0 bg-zinc-900 -z-10" />
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
      className="relative w-full bg-zinc-950"
    >
      <HeroBackground />
      {/* Orbital rings with electric blue glow */}
      <div className="absolute inset-0 flex items-center justify-center hidden sm:flex">
        <div className="w-[800px] h-[800px] border border-blue-500/20 rounded-full animate-spin-slow shadow-[0_0_15px_rgba(59,130,246,0.2)]" />
        <div className="absolute w-[600px] h-[600px] border border-blue-500/30 rounded-full animate-spin-slow-reverse shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
        <div className="absolute w-[400px] h-[400px] border border-blue-500/40 rounded-full animate-spin-slow shadow-[0_0_15px_rgba(59,130,246,0.4)]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 relative pt-32 sm:pt-40"
      >
        <div className="relative max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="relative inline-block text-white">
              Redefining Near Space Access with 
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 bg-clip-text text-transparent"> HAPS </span>
              Technology
              <span className="absolute inset-0 blur-xl bg-blue-500/20" />
            </span>
          </motion.h1>
          
            <motion.p 
            className="text-xl text-white mb-12 max-w-2xl mx-auto relative z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            >
            <span className="relative">
              Empowering the future with cutting-edge High-Altitude Platform Systems (HAPS) for near-space applications.
              <span className="absolute inset-0 blur-lg bg-blue-500/10" />
            </span>
            </motion.p>

            <motion.button 
            onClick={() => {
              window.location.href = "/product";
            }}
            className="relative z-30 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg 
               hover:from-blue-700 hover:to-violet-700 text-white text-lg font-medium
               transition-all duration-300 shadow-lg shadow-blue-500/25
               hover:shadow-xl hover:shadow-blue-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            >
            View Our Product
            </motion.button>
        </div>
        <LogoScroll/>
        <About/>
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
      icon: <FiBox className="text-blue-400" />,
    },
    {
      title: "Operational Altitude",
      value: "20-40km",
      icon: <FiArrowUp className="text-blue-400" />,
    },
    {
      title: "Endurance",
      value: "Months",
      icon: <FiClock className="text-blue-400" />,
    },
  ];

  return (
    <section id="about" className="relative py-8 sm:py-12 md:py-24 overflow-hidden">
  {/* Animated stars background */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }}
      />
    ))}
  </div>

  <div className="container mx-auto px-4 sm:px-6 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center max-w-6xl mx-auto"
    >
      <div className="relative p-4 sm:p-6 md:p-8 group w-full">
        {/* Dark glass effect with electric blue border */}
        <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-blue-500/30 shadow-lg shadow-blue-500/20" />
        
        {/* Gradient border on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative space-y-6 md:space-y-8">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Dashagriv Aerospace
          </motion.h2>
          
          <motion.p 
            className="text-zinc-300 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Indias first company to design and manufacture operational stratospheric platforms,
            bridging the gap between satellites and traditional aerial systems.
          </motion.p>
          
          {/* Uniform Features Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group/card relative aspect-square"
              >
                {/* Card background with dark glass effect */}
                <div className="absolute inset-0 bg-zinc-800/50 backdrop-blur-lg rounded-lg 
                        group-hover/card:bg-zinc-800/70 transition-all duration-300 
                        border border-blue-500/20" />
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 
                        transition-opacity duration-300 bg-gradient-to-t 
                        from-blue-500/10 via-violet-500/5 to-transparent" />
                
                <div className="relative h-full flex flex-col justify-between p-3 sm:p-4">
                  {/* Icon Container */}
                  <div className="flex justify-start items-center h-8 sm:h-10">
                    <div className="text-xl sm:text-2xl md:text-3xl transform group-hover/card:scale-110 
                          group-hover/card:text-blue-400 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm text-zinc-400 font-medium truncate">
                      {feature.title}
                    </div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-blue-400 
                          group-hover/card:text-blue-300 transition-colors">
                      {feature.value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Image section */}
      <motion.div 
        className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] group mt-6 lg:mt-0"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          {/* Space-themed gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 
                  to-violet-500/20 mix-blend-overlay group-hover:opacity-75 
                  transition-opacity duration-500" />
          
          {/* Orbital rings with glow */}
          <div className="absolute inset-0 flex items-center justify-center 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] 
                    h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] 
                    border border-blue-400/30 rounded-full animate-spin-slow 
                    shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
            <div className="absolute w-[100px] sm:w-[150px] md:w-[180px] lg:w-[200px] 
                    h-[100px] sm:h-[150px] md:h-[180px] lg:h-[200px] 
                    border border-violet-400/30 rounded-full animate-spin-slow-reverse 
                    shadow-[0_0_15px_rgba(139,92,246,0.3)]" />
          </div>
          
          <Image
            src="/blimp.png"
            alt="HAPS Platform"
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        {/* Corner accents with glow */}
        <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 
                  border-l-2 border-t-2 border-blue-400/40 rounded-tl-xl 
                  group-hover:border-blue-400/60 transition-colors duration-300 
                  shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
        <div className="absolute bottom-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 
                  border-r-2 border-b-2 border-violet-400/40 rounded-br-xl 
                  group-hover:border-violet-400/60 transition-colors duration-300 
                  shadow-[0_0_10px_rgba(139,92,246,0.4)]" />
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
