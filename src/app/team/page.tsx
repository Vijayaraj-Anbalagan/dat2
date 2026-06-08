'use client';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const TeamsPage = () => {
  const mentors = [
    {
      name: "Dr. Vijayraja K",
      role: "Mentor",
      position: "Professor & Head, Aero & Aerospace, KCG Tech",
      linkedin: "https://www.linkedin.com/in/dr-vijayraja-kvijayraja-2627ba2a/",
      image: "/team/vijayaraja.png"
    }
  ];

  const founders = [
    {
      name: "Logeshwaran M",
      role: "Founder & CEO",
      education: "Aerospace Engineer",
      image: "/team/loki.png",
      linkedin: "https://www.linkedin.com/in/logeshwaran-mahendran-ba27572b7/"
    },
    {
      name: "Jayashree B",
      role: "Founder & COO",
      education: "Coventry University",
      image: "/team/jayashree.jpg",
      linkedin: "https://www.linkedin.com/in/jayashree-b-67950621a/"
    },
    {
      name: "Hariharan R",
      role: "Founder & CTO",
      education: "University of Leicester",
      image: "/team/hariharan.jpg",
      linkedin: "https://www.linkedin.com/in/hariharan-rajaraman/"
    }
  ];

  const teamMembers = {
    aerospace: [
      { name: "Srinivasan A", role: "Chief Manufacturing Officer", linkedin: "https://www.linkedin.com/in/srinivasan-arumugam16601/", education: " ", image: "/team/srinivasan.jpg" },
      { name: "Barani L", role: "Re-entry Vehicles", education: "IIT MADRAS", linkedin: "https://www.linkedin.com/in/barani-l-aa679323b/", image: "/team/barani.jpeg" },
      { name: "Hariharamadhavan M", role: "Chief Innovation Officer", education: " ", linkedin: "https://www.linkedin.com/in/hariharamadhavan-m-3121b522b/", image: "/team/harimahadev.png" },
      { name: "Srikanth R", role: "Space Vehicle Design", education: "Coventry University", linkedin: "https://www.linkedin.com/in/srikanth-ravichandran-9974b521a/", image: "/team/srikanth.jpg" },
      { name: "Balajee E", role: "Design Engineer", education: "MIT, Anna University", linkedin: "https://www.linkedin.com/in/balajee-e-a35755230/", image: "/team/balaji.png" },
      { name: "Barath Kanna B O", role: "Avionics", education: "MIT, Anna University", linkedin: "https://www.linkedin.com/in/barath-kanna-079074289/", image: "/team/barath.png" },
      { name: "Sabari Balan G", role: "Flight System Engineer", linkedin: "https://www.linkedin.com/in/sabaribalan1710/", education: " ", image: "/team/sabari.png" },
      { name: "Karpaganathan N", role: "Embedded Engineer", linkedin: "https://www.linkedin.com/in/karpaganathan-nagendran-5791551ab/", education: " ", image: "/team/karpagaanathan.jpg" },
      { name: "Atharva Atul Gado", role: "R&D advisor", linkedin: "https://www.linkedin.com/in/atharva-atul-gado-516ba81b8/", education: "University of Wisconsin", image: "/team/atul.jpg" }
    ],
    technical: [
      { name: "Dhilagam Parvathi Nathan C", role: "Technical Engineer", linkedin: "https://www.linkedin.com/in/dhilagam-parvathi-nathan-39701526b/", image: "/team/avatar.png" }
    ],
    software: [
      { name: "Vijayaraj Anbalagan", role: "AI & Software Developer", linkedin: "https://www.linkedin.com/in/vijayarajanbalagan/", image: "/team/vijay.jpg" },
      { name: "Ravikumar G", role: "Data Engineer", linkedin: "https://www.linkedin.com/in/ravikumar-g-605305263/", image: "/team/ravi.jpg" }
    ],
    operations: [
      { name: "Sowmya R", role: "Chief Human Resource Officer", linkedin: "https://www.linkedin.com/in/sowmya-ramesh-0b1650251/", image: "/team/sowmya.png" }
    ]
  };

  interface TeamMember {
    name: string;
    role: string;
    education?: string;
    image?: string;
    linkedin: string;
  }

  const ProfileCard = ({ member }: { member: TeamMember }) => (
    <div className="flex flex-col border border-white/10 p-6 bg-zinc-950 group hover:bg-zinc-900 transition-colors">
      <div className="relative aspect-square w-full mb-6 overflow-hidden bg-black">
        <Image
          src={member.image || "/team/avatar.png"}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
      </div>
      <div className="text-left flex-1 flex flex-col">
        <h3 className="text-xl font-display uppercase tracking-wide mb-1">{member.name}</h3>
        <p className="eyebrow mb-2">{member.role}</p>
        <p className="text-zinc-500 text-sm mb-4 flex-1">{member.education || "\u00A0"}</p>
        <a href={member.linkedin} className="text-zinc-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

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
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Our Story</p>
            <h1 className="text-5xl md:text-7xl font-display uppercase font-bold tracking-tighter mb-8">
              The People<br/>Behind The Mission
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Exactly two years ago, what began as a simple college project fueled by curiosity, late nights, and pure ambition has transformed into a full-fledged spacetech revolution.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Today, <strong className="text-white font-normal">Dashagriv Aerospace</strong> is proud to be India&apos;s first dedicated HAPS spacetech startup, building next-gen platforms for surveillance, Earth observation, defense, telecom, and scientific research.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black border-b border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">Founders</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {founders.map((founder, idx) => <ProfileCard key={idx} member={founder} />)}
          </div>
        </div>
      </section>

      <section className="py-32 bg-zinc-950 border-b border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <p className="eyebrow mb-4">Guidance</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">Mentor</h2>
          </div>
          <div className="max-w-md">
            {mentors.map((mentor, idx) => <ProfileCard key={idx} member={mentor} />)}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <p className="eyebrow mb-4">The Crew</p>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">Engineering Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {teamMembers.aerospace.map((member, idx) => <ProfileCard key={idx} member={member} />)}
          </div>

          <h3 className="text-2xl font-display uppercase tracking-wide mb-10 text-white">Software & Data</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {teamMembers.software.map((member, idx) => <ProfileCard key={idx} member={member} />)}
          </div>

          <div className="grid sm:grid-cols-2 gap-20">
            <div>
               <h3 className="text-2xl font-display uppercase tracking-wide mb-10 text-white">Technical</h3>
               <div className="grid grid-cols-1 gap-6">
                 {teamMembers.technical.map((member, idx) => <ProfileCard key={idx} member={member} />)}
               </div>
            </div>
            <div>
               <h3 className="text-2xl font-display uppercase tracking-wide mb-10 text-white">Operations</h3>
               <div className="grid grid-cols-1 gap-6">
                 {teamMembers.operations.map((member, idx) => <ProfileCard key={idx} member={member} />)}
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
