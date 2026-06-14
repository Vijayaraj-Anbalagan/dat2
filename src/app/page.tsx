"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import Technology from "@/components/Technology";
import Timeline from "@/components/TimeLine";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import NewsSection from "@/components/NewsSection";

const SmoothScrollPage: FC = () => {
  return (
    <div className="bg-black min-h-screen relative text-white">
      {/* @ts-expect-error - Known issue with ReactLenis types */}
      <ReactLenis root options={{ lerp: 0.05 }}>
        <Nav />
        <Hero />
        <About />
        <LogoShowcase />
        <Technology />
        <Timeline />
        <NewsSection />
        <Contact />
        <Footer />
      </ReactLenis>
    </div>
  );
};

const HeroBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = () => {
        if (video) {
          video.play().catch(() => console.log("Autoplay prevented"));
        }
      };
      video.addEventListener("loadeddata", playVideo);
      return () => {
        if (video) video.removeEventListener("loadeddata", playVideo);
      };
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center pt-20">
      <HeroBackground />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative px-8 py-12 md:px-16 md:py-20 w-full mb-12"
        >
          <motion.p
            className="eyebrow mb-6 tracking-[0.25em] text-zinc-400 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dashagriv Aerospace
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight leading-tight text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Pioneering the
            <br />
            Near Space Frontier
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-body leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            High-Altitude Platform Systems (HAPS) engineered for next-generation
            stratospheric operations.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button
            className="solid-btn"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Discover More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <p className="eyebrow mb-8">Who We Are</p>
        <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight leading-tight mb-8">
          India&apos;s pioneering force in stratospheric innovation
        </h2>
        <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
          We design and manufacture state-of-the-art operational platforms that
          bridge the crucial gap between satellites and traditional aerial
          systems. The stratosphere is no longer out of reach.
        </p>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-zinc-950 border-t border-white/10 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Connection</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">
              Get In Touch
            </h2>
          </div>
          <form className="space-y-8 text-left">
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="NAME"
                className="w-full px-4 py-3 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors font-display uppercase text-sm"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full px-4 py-3 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors font-display uppercase text-sm"
              />
            </div>
            <textarea
              placeholder="MESSAGE"
              rows={4}
              className="w-full px-4 py-3 bg-transparent border-b border-white/20 focus:border-white outline-none transition-colors font-display uppercase text-sm resize-none"
            />
            <div className="pt-8">
              <button className="solid-btn w-full py-4">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const LogoShowcase = () => {
  const logos = [
    "/logo/Ediit-tn-logo.png",
    "/logo/haps-alliance.png",
    "/logo/SI.png",
    "/logo/TAA.png",
    "/logo/startup tn.png",
    "/logo/kcg.png",
    "/logo/kiet.png",
  ];

  return (
    <section className="py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <p className="eyebrow text-center mb-12">
          Supported and Partnered with
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="transition-all duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={120}
                height={60}
                className="object-contain cursor-pointer filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmoothScrollPage;
