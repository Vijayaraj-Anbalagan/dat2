"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TeamMember {
  name: string;
  role: string;
  education?: string;
  image?: string;
  linkedin: string;
  position?: string;
}

// ─── ViewportProfileCard ─────────────────────────────────────────────────────
//
// Colorizes when in viewport on both mobile and desktop.
// Used for: Founders, Mentor.
//
// The image goes from grayscale/dim → full color when the card is in view.
// Works on mobile (no hover needed) and enriches desktop scroll experience.

const ViewportProfileCard = ({ member }: { member: TeamMember }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.55 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col border border-white/10 p-6 bg-zinc-950 hover:bg-zinc-900 transition-colors"
    >
      <div className="relative aspect-square w-full mb-6 overflow-hidden bg-black">
        <Image
          src={member.image || "/team/avatar.png"}
          alt={member.name}
          fill
          style={{
            objectFit: "cover",
            filter: inView ? "grayscale(0%)" : "grayscale(100%)",
            opacity: inView ? 1 : 0.8,
            transition: "filter 0.7s ease, opacity 0.7s ease",
          }}
          className="transition-all duration-700"
        />
      </div>
      <div className="text-left flex-1 flex flex-col">
        <h3 className="text-xl font-display uppercase tracking-wide mb-1">
          {member.name}
        </h3>
        <p className="eyebrow mb-2">{member.role}</p>
        {member.position && (
          <p className="text-zinc-500 text-xs mb-2">{member.position}</p>
        )}
        <p className="text-zinc-500 text-sm mb-4 flex-1">
          {member.education || "\u00A0"}
        </p>
        <a
          href={member.linkedin}
          className="text-zinc-400 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

// ─── ScrollProfileCard ────────────────────────────────────────────────────────
//
// For engineering team cards. Uses IntersectionObserver with a moderate
// threshold so as you scroll, the cards that are well within view colorize
// and the ones that have scrolled past revert to grayscale.
// Typically 2–4 cards are active at a time depending on scroll position.

const ScrollProfileCard = ({ member }: { member: TeamMember }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.65 }, // higher threshold → fewer cards active at once
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col border border-white/10 p-6 bg-zinc-950 hover:bg-zinc-900 transition-colors"
    >
      <div className="relative aspect-square w-full mb-6 overflow-hidden bg-black">
        <Image
          src={member.image || "/team/avatar.png"}
          alt={member.name}
          fill
          style={{
            objectFit: "cover",
            filter: inView ? "grayscale(0%)" : "grayscale(100%)",
            opacity: inView ? 1 : 0.7,
            transition: "filter 0.6s ease, opacity 0.6s ease",
          }}
        />
      </div>
      <div className="text-left flex-1 flex flex-col">
        <h3 className="text-xl font-display uppercase tracking-wide mb-1">
          {member.name}
        </h3>
        <p className="eyebrow mb-2">{member.role}</p>
        <p className="text-zinc-500 text-sm mb-4 flex-1">
          {member.education || "\u00A0"}
        </p>
        <a
          href={member.linkedin}
          className="text-zinc-400 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const TeamsPage = () => {
  const mentors = [
    {
      name: "Dr. Vijayraja K",
      role: "Mentor",
      position: "Professor & Head, Aero & Aerospace, KCG Tech",
      linkedin: "https://www.linkedin.com/in/dr-vijayraja-kvijayraja-2627ba2a/",
      image: "/team/vijayaraja.png",
    },
  ];

  const founders = [
    {
      name: "Logeshwaran M",
      role: "Founder & CEO",
      education: "Aerospace Engineer",
      image: "/team/loki.png",
      linkedin: "https://www.linkedin.com/in/logeshwaran-mahendran-ba27572b7/",
    },
    {
      name: "Jayashree B",
      role: "Founder & COO",
      education: "Coventry University",
      image: "/team/jayashree.jpg",
      linkedin: "https://www.linkedin.com/in/jayashree-b-67950621a/",
    },
    {
      name: "Hariharan R",
      role: "Founder & CTO",
      education: "University of Leicester",
      image: "/team/hariharan.jpg",
      linkedin: "https://www.linkedin.com/in/hariharan-rajaraman/",
    },
  ];

  const teamMembers = {
    aerospace: [
      {
        name: "Srinivasan A",
        role: "Chief Manufacturing Officer",
        linkedin: "https://www.linkedin.com/in/srinivasan-arumugam16601/",
        education: " ",
        image: "/team/srinivasan.jpg",
      },
      {
        name: "Barani L",
        role: "Re-entry Vehicles",
        education: "IIT MADRAS",
        linkedin: "https://www.linkedin.com/in/barani-l-aa679323b/",
        image: "/team/barani.jpeg",
      },
      {
        name: "Hariharamadhavan M",
        role: "Chief Innovation Officer",
        education: " ",
        linkedin: "https://www.linkedin.com/in/hariharamadhavan-m-3121b522b/",
        image: "/team/harimahadev.png",
      },
      {
        name: "Srikanth R",
        role: "Space Vehicle Design",
        education: "Coventry University",
        linkedin:
          "https://www.linkedin.com/in/srikanth-ravichandran-9974b521a/",
        image: "/team/srikanth.jpg",
      },
      {
        name: "Balajee E",
        role: "Design Engineer",
        education: "MIT, Anna University",
        linkedin: "https://www.linkedin.com/in/balajee-e-a35755230/",
        image: "/team/balaji.png",
      },
      {
        name: "Barath Kanna B O",
        role: "Avionics",
        education: "MIT, Anna University",
        linkedin: "https://www.linkedin.com/in/barath-kanna-079074289/",
        image: "/team/barath.png",
      },
      {
        name: "Sabari Balan G",
        role: "Flight System Engineer",
        linkedin: "https://www.linkedin.com/in/sabaribalan1710/",
        education: " ",
        image: "/team/sabari.png",
      },
      {
        name: "Karpaganathan N",
        role: "Embedded Engineer",
        linkedin:
          "https://www.linkedin.com/in/karpaganathan-nagendran-5791551ab/",
        education: " ",
        image: "/team/karpagaanathan.jpg",
      },
      {
        name: "Atharva Atul Gado",
        role: "R&D Advisor",
        linkedin: "https://www.linkedin.com/in/atharva-atul-gado-516ba81b8/",
        education: "University of Wisconsin",
        image: "/team/atul.jpg",
      },
    ],
    software: [
      {
        name: "Vijayaraj Anbalagan",
        role: "AI & Software Developer",
        linkedin: "https://www.linkedin.com/in/vijayarajanbalagan/",
        image: "/team/vijay.jpg",
      },
      {
        name: "Ravikumar G",
        role: "Data Engineer",
        linkedin: "https://www.linkedin.com/in/ravikumar-g-605305263/",
        image: "/team/ravi.jpg",
      },
    ],
    technical: [
      {
        name: "Dhilagam Parvathi Nathan C",
        role: "Technical Engineer",
        linkedin:
          "https://www.linkedin.com/in/dhilagam-parvathi-nathan-39701526b/",
        image: "/team/avatar.png",
      },
    ],
    operations: [
      {
        name: "Sowmya R",
        role: "Chief Human Resource Officer",
        linkedin: "https://www.linkedin.com/in/sowmya-ramesh-0b1650251/",
        image: "/team/sowmya.png",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/team/Team_bg.png"
            alt="Team background"
            fill
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="relative z-10 container px-6 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <p className="eyebrow mb-4 tracking-[0.25em] text-zinc-400 font-medium">
              Our Story
            </p>
            <h1 className="text-4xl md:text-6xl font-display uppercase font-bold tracking-tight leading-tight text-white mb-6">
              The People
              <br />
              Behind The Mission
            </h1>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-body">
              Exactly two years ago, what began as a simple college project
              fueled by curiosity, late nights, and pure ambition has
              transformed into a full-fledged spacetech revolution.
            </p>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-body">
              Today,{" "}
              <strong className="text-white font-normal">
                Dashagriv Aerospace
              </strong>{" "}
              is proud to be India&apos;s first dedicated HAPS spacetech
              startup, building next-gen platforms for surveillance, Earth
              observation, defense, telecom, and scientific research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Founders (viewport-colorized) ── */}
      <section className="py-32 bg-black border-b border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">
              Founders
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {founders.map((founder, idx) => (
              <ViewportProfileCard key={idx} member={founder} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mentor (viewport-colorized) ── */}
      <section className="py-32 bg-zinc-950 border-b border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <p className="eyebrow mb-4">Guidance</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">
              Mentor
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, idx) => (
              <ViewportProfileCard key={idx} member={mentor} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Engineering Team (scroll-colorized, 2-4 at a time) ── */}
      <section className="py-32 bg-black border-b border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <p className="eyebrow mb-4">The Crew</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">
              Engineering Team
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.aerospace.map((member, idx) => (
              <ScrollProfileCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/*
       * ── Support Teams ────────────────────────────────────────────────────────
       *
       * FIX: The old layout used `flex gap-6` with `flex-[2]`, `flex-1`, `flex-1`
       * which created very narrow columns on mobile and was totally broken.
       *
       * New layout:
       *   - Software & Data: responsive 2–4 column grid
       *   - Technical + Operations: side-by-side on tablet+, stacked on mobile
       *   Each sub-section has its own clear label.
       */}
      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <p className="eyebrow mb-4">Supporting Teams</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">
              Beyond Engineering
            </h2>
          </div>

          {/* Software & Data */}
          <div className="mb-16">
            <h3 className="text-xs font-display uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-4 mb-8">
              Software &amp; Data
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.software.map((member, idx) => (
                <ScrollProfileCard key={idx} member={member} />
              ))}
            </div>
          </div>

          {/* Technical + Operations — side by side on md+, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xs font-display uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-4 mb-8">
                Technical
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {teamMembers.technical.map((member, idx) => (
                  <ScrollProfileCard key={idx} member={member} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-display uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-4 mb-8">
                Operations
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {teamMembers.operations.map((member, idx) => (
                  <ScrollProfileCard key={idx} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamsPage;
