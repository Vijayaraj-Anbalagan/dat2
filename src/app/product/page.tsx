'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Nav from '@/components/Navbar';
import Spline from '@splinetool/react-spline';
import { TextScramble } from '@/components/ui/text-scramble';
import { Rocket, Orbit, Clock, Globe, ArrowRight, Box, Brain, Layers, Radio } from 'lucide-react';
import Footer from '@/components/Footer';
import Image from 'next/image';


const ProductPage = () => {
  const [activeMetric, setActiveMetric] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const featuresRef = useRef<HTMLElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const metrics = [
    {
      label: "Payload Capacity",
      value: "200 kg",
      description: "Maximum payload capacity for diverse mission requirements",
      icon: Rocket,
      stats: [50, 100, 150, 200],
      unit: "kg"
    },
    {
      label: "Altitude Range",
      value: "20-40 km",
      description: "Optimal stratospheric operational altitude",
      icon: Orbit,
      stats: [10, 20, 30, 40],
      unit: "km"
    },
    {
      label: "Endurance",
      value: "6+ months",
      description: "Extended mission duration capability",
      icon: Clock,
      stats: [1, 2, 4, 6],
      unit: "months"
    },
    {
      label: "Coverage Area",
      value: "80,000 km²",
      description: "Single platform coverage radius",
      icon: Globe,
      stats: [20000, 40000, 60000, 80000],
      unit: "km²"
    }
  ];

  const features = [
    {
      title: "AI-Driven Navigation",
      description: "Advanced autonomous systems enabling efficient stratospheric operations.",
      icon: Brain,
      details: [
        "Machine learning algorithms for optimal path planning",
        "Real-time weather pattern analysis",
        "Autonomous decision-making capabilities"
      ]
    },
    {
      title: "Rigid Helium Design",
      description: "Engineered for optimal performance in extreme conditions.",
      icon: Box,
      details: [
        "Advanced composite materials",
        "Temperature-resistant construction",
        "Optimized aerodynamic profile"
      ]
    },
    {
      title: "Multi-Mission Capability",
      description: "Adaptable platform supporting diverse applications.",
      icon: Layers,
      details: [
        "Modular payload systems",
        "Rapid mission reconfiguration",
        "Multiple sensor integration"
      ]
    },
    {
      title: "Real-Time Integration",
      description: "Seamless data and infrastructure connectivity.",
      icon: Radio,
      details: [
        "High-bandwidth data transmission",
        "Low-latency communication",
        "Cloud-based mission control"
      ]
    }
  ];

  const applications = [
    {
      title: "Green Field Coverage",
      description: "Extending connectivity to remote areas efficiently.",
      image: "/applications/greenfield.jpg"
    },
    {
      title: "Emergency Response",
      description: "Rapid deployment for disaster recovery.",
      image: "/applications/emergency.jpg"
    },
    {
      title: "IoT Connectivity",
      description: "Enabling wide-area IoT networks.",
      image: "/applications/iot.jpg"
    },
    {
      title: "Urban Air Mobility",
      description: "Support infrastructure for future urban air transportation.",
      image: "/applications/urban.jpg"
    },
    {
      title: "Fixed Wireless Access",
      description: "Reliable connectivity for remote regions.",
      image: "/applications/fixed_wireless.jpg"
    },
    {
      title: "Private Networks",
      description: "Secure and dedicated communication networks.",
      image: "/applications/private_networks.jpg"
    },
    {
      title: "Temporary Event Coverage",
      description: "Connectivity for large-scale events and gatherings.",
      image: "/applications/event_coverage.jpg"
    },
    {
      title: "White Spot Reduction",
      description: "Bridging connectivity gaps in under-served areas.",
      image: "/applications/white_spot.jpg"
    },
    {
      title: "Terrestrial Backhaul",
      description: "High-capacity backhaul for terrestrial networks.",
      image: "/applications/terrestrial_backhaul.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-start pt-20 md:pt-0 md:justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/70 to-zinc-950" />
        
        {/* Text content with responsive positioning */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-6 relative z-20 text-center mt-16 md:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-pink-600 mt-0 md:mt-24">
              Stratospheric Solutions
            </h1>
            {/* Animated underline */}
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-violet-400 to-pink-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-zinc-300 max-w-3xl mx-auto mt-6"
          >
            Revolutionizing near-space operations with cutting-edge HAPS technology.
          </motion.p>

          {/* Single CTA button with smooth scroll */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <motion.button
              onClick={scrollToFeatures}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg text-white font-medium
                hover:from-blue-600 hover:to-violet-600 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              Explore Solutions
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Spline model */}
        <div className="relative w-full h-[50vh] md:h-[70vh] flex justify-center items-center">
        <Spline
          scene="https://prod.spline.design/XDQLQUryYksHCn0z/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      </section>

      {/* Metrics Section */}
      <section className="py-10 mt-9 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
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

      <div className="container mx-auto px-6 relative">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-pink-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <TextScramble duration={1.2}>Platform Capabilities</TextScramble>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setActiveMetric(index)}
                onHoverEnd={() => setActiveMetric(null)}
                className={`
                  relative group h-64 w-full overflow-hidden rounded-xl backdrop-blur-lg
                  transition-all duration-500 cursor-pointer
                  ${activeMetric === index 
                    ? 'bg-blue-950/40 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20' 
                    : 'bg-zinc-900/50 border border-zinc-800/50'}
                `}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-transparent" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-transparent blur-xl" />
                </div>
                
                {/* Orbital rings on hover */}
                {activeMetric === index && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-32 h-32 border border-blue-500/10 rounded-full animate-spin-slow" />
                    <div className="absolute w-24 h-24 border border-blue-500/20 rounded-full animate-spin-slow-reverse" />
                  </div>
                )}

                <div className="relative p-6 z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className={`w-6 h-6 ${activeMetric === index ? 'text-blue-400' : 'text-blue-300/70'}`} />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-zinc-300 text-lg font-medium">{metric.label}</h3>
                      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                        {metric.value}
                      </div>
                      <p className="text-sm text-zinc-500">{metric.description}</p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: activeMetric === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <div className="relative h-1.5 w-full bg-zinc-800/50 rounded-full overflow-hidden">
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 bg-blue-500/20 blur-sm" />
                      
                      {/* Progress bar with pulse animation */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ 
                          width: `${(activeMetric !== null ? metric.stats[activeMetric] : 0) / metric.stats[metric.stats.length - 1] * 100}%`,
                          transition: { duration: 1.5, ease: "easeOut" }
                        }}
                        className="relative h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 group-hover:animate-pulse"
                      >
                        {/* Moving light effect */}
                        <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>
                    
                    <div className="flex justify-between mt-2 text-xs text-zinc-500">
                      <span>0 {metric.unit}</span>
                      <span>{metric.stats[metric.stats.length - 1]} {metric.unit}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-pink-600">
            <TextScramble duration={1.2}>Platform Features</TextScramble>
          </h2>
          <p className="text-blue-300/70">Next-generation capabilities pushing the boundaries of stratospheric operations</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Feature Navigation */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveFeature(index)}
                    className={`
                      relative group cursor-pointer p-4 rounded-lg
                      backdrop-blur-lg transition-all duration-300
                      ${activeFeature === index 
                        ? 'bg-blue-950/30 border border-blue-500/50' 
                        : 'hover:bg-blue-950/20'}
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`
                        p-2 rounded-lg
                        ${activeFeature === index 
                          ? 'bg-blue-500/20 text-blue-400' 
                          : 'text-blue-300/70'}
                      `}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`
                          font-semibold transition-colors
                          ${activeFeature === index ? 'text-blue-400' : 'text-white'}
                        `}>
                          {feature.title}
                        </h3>
                        <p className="text-sm text-zinc-400">{feature.description}</p>
                      </div>
                      <ArrowRight className={`
                        w-5 h-5 transition-all duration-300
                        ${activeFeature === index 
                          ? 'opacity-100 translate-x-0 text-blue-400' 
                          : 'opacity-0 -translate-x-4 text-zinc-500'}
                      `} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Feature Details */}
          <div className="lg:w-2/3 relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-2xl backdrop-blur-xl" />
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-transparent rounded-2xl" />
              <div className="relative">
                {features[activeFeature].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 mb-6"
                  >
                    <div className="h-px w-8 bg-blue-500/50" />
                    <div className="flex-1">
                      <p className="text-lg text-blue-100">{detail}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Interactive visualization placeholder */}
                <div className="mt-8 h-48 rounded-xl bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-transparent border border-blue-500/20 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {React.createElement(features[activeFeature].icon, {
                      className: "w-16 h-16 text-blue-400/70"
                    })}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

      {/* Applications Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-pink-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Applications
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
                <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl border border-zinc-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                >
                <div className="relative w-full h-64">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6 z-10">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {app.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{app.description}</p>
                </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-pink-500/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-zinc-400 mb-8">
            Join us in revolutionizing near-space technology and unlock new possibilities for your mission.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-white"
          >
            Contact Us
          </motion.button>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ProductPage;
