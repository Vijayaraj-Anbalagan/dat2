'use client';
import React from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { StaticGallery } from "@/components/Gallery";

const SolutionPage = () => {
  const applications = [
    {
      title: "Earth Observation",
      description: "Remote sensing and data access in isolated areas.",
      image: "/applications/earth-observation.jpg",
    },
    {
      title: "Emergency Response",
      description: "Rapid deployment for disaster recovery.",
      image: "/applications/emergency.jpg",
    },
    {
      title: "Border Surveillance",
      description: "Real-time monitoring with wide-area coverage.",
      image: "/applications/border-survilance.jpg",
    },
    {
      title: "Urban Air Mobility",
      description: "Support infrastructure for future urban transportation.",
      image: "/applications/urban.jpg",
    },
    {
      title: "Fixed Wireless Access",
      description: "Reliable connectivity for remote regions.",
      image: "/applications/fixed_wireless.jpg",
    },
    {
      title: "Private Networks",
      description: "Secure and dedicated communication networks.",
      image: "/applications/private_networks.jpg",
    },
    {
      title: "Maritime Surveillance",
      description: "Offshore tracking and vessel monitoring at scale.",
      image: "/applications/marirtime-survilance.jpg",
    },
    {
      title: "White Spot Reduction",
      description: "Bridging connectivity gaps in under-served areas.",
      image: "/applications/white_spot.jpg",
    },
    {
      title: "Terrestrial Backhaul",
      description: "High-capacity backhaul for terrestrial networks.",
      image: "/applications/terrestrial_backhaul.jpg",
    },
  ];

  const features = [
    { title: 'Stratospheric HAPS Development', description: 'Building high-altitude platforms for long-endurance missions in research, surveillance, and advanced communications.' },
    { title: 'Payload Hosting Services (HaaS)', description: 'Host your payloads on our stratospheric platforms with plug-and-play ease.' },
    { title: 'Stratospheric Subsystems', description: 'Reliable integration-ready subsystems for HAPS-based missions.' },
    { title: 'Flight Data & Planning', description: 'Advanced software suite for mission planning and flight data analytics.' }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Nav />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/solutions/solution-bg1.png"
            alt="Hero background"
            fill
            className="object-cover opacity-60 grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-6 relative z-20 text-center"
        >
          <p className="eyebrow mb-6">Capabilities</p>
          <h1 className="text-5xl md:text-8xl font-display uppercase font-bold tracking-tighter mb-8">
            Stratospheric<br/>Solutions
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Revolutionizing near-space operations with cutting-edge HAPS technology.
          </p>
        </motion.div>
      </section>

      <section className="py-32 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-24">
            <p className="eyebrow mb-4">Core Systems</p>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight">What We Do</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {features.map((feature, index) => (
              <div key={index} className="bg-black p-12 group hover:bg-zinc-900 transition-colors">
                <div className="text-zinc-600 font-display text-xl mb-6 group-hover:text-white transition-colors">0{index + 1}</div>
                <h3 className="text-2xl font-display uppercase mb-4">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StaticGallery />

      {/* Applications Section */}
      <section className="py-32 bg-zinc-950 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <p className="eyebrow mb-4">Deployments</p>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight">Applications</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative group aspect-square overflow-hidden bg-black"
              >
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover grayscale opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-xl font-display uppercase tracking-wide mb-2">
                    {app.title}
                  </h3>
                  <p className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 transform">
                    {app.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-center border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight mb-8">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
            Join us in revolutionizing near-space technology and unlock new possibilities.
          </p>
          <a
            href="mailto:info@dashagriv.in?subject=Inquiry about solutions"
            className="ghost-btn"
          >
            Contact Us
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SolutionPage;
