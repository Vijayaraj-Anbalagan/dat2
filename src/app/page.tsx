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
        <About />
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



const SECTION_HEIGHT = 700;
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

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center px-4 relative pt-24 sm:pt-32"
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
        </span>
        </motion.h1>
        
        <motion.p 
        className="text-xl text-white mb-36 max-w-2xl mx-auto relative z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        >
        <span className="relative">
          Empowering the future with cutting-edge High-Altitude Platform Systems (HAPS) for near-space applications.
          <span className="absolute inset-0 blur-lg bg-blue-500/10" />
        </span>
        </motion.p>

         
      </div>
      <LogoScroll/>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-64 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const About = () => {
  const features = [
    {
      title: "Payload Capacity",
      value: "200kg",
      description: "Maximum carrying capacity for various mission equipment and instruments",
      icon: <FiBox className="text-blue-400" />,
    },
    {
      title: "Operational Altitude",
      value: "20-40km",
      description: "Optimal height range for stratospheric operations and coverage",
      icon: <FiArrowUp className="text-blue-400" />,
    },
    {
      title: "Endurance",
      value: "300+ Days",
      description: "Extended mission duration with sustained performance",
      icon: <FiClock className="text-blue-400" />,
    },
  ];

  const decorativeElements = [...Array(20)].map((_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${10 + Math.random() * 10}s infinite`,
        animationDelay: `${Math.random() * 5}s`
      }}
    />
  ));

  return (
    <section id='about' className="relative py-20 bg-zinc-950 overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {decorativeElements}
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-br from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              About Dashagriv Aerospace
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-6" />
            <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              India&apos;s pioneering force in stratospheric innovation, we design and manufacture 
              state-of-the-art operational platforms that bridge the crucial gap between satellites 
              and traditional aerial systems.
            </p>
          </motion.div>

          {/* Features Section - Horizontal Layout */}
            <div className="grid grid-cols-1 gap-8 justify-center">
            {features.map((feature, index) => (
              <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group w-full sm:w-3/4 mx-auto"
              >
              <div className="relative">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-violet-500/5 
                opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
                
                {/* Content container */}
                <div className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} 
                items-center gap-8 p-8 bg-zinc-900/40 backdrop-blur-sm rounded-2xl 
                border border-zinc-800 hover:border-blue-500/30 transition-all duration-300`}>
                
                {/* Icon section */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl 
                  bg-gradient-to-br from-blue-500/10 to-violet-500/10 
                  text-zinc-400 group-hover:text-blue-400 transition-colors">
                  <span className="text-3xl">{feature.icon}</span>
                  </div>
                </div>

                {/* Text content */}
                <div className="flex-grow space-y-3">
                  <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider 
                  group-hover:text-zinc-300">
                  {feature.title}
                  </h3>
                  <div className="text-2xl font-bold text-white group-hover:text-blue-400 
                  transition-colors">
                  {feature.value}
                  </div>
                  <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {feature.description}
                  </p>
                </div>
                </div>
              </div>
              </motion.div>
            ))}
            </div>
        </div>
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
