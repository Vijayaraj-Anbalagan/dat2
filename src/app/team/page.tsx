'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TeamsPage = () => {
  const mentors = [
    {
      name: "Dr. Vijayraja K",
      role: "Mentor",
      position: "Professor & Head of Department of Aeronautical and Aerospace Engineering, KCG College of Technology",
      linkedin: "https://www.linkedin.com/in/dr-vijayraja-kvijayraja-2627ba2a/",
      image: "/team/vijayaraja.png"
    },{
      name: "Dr. Anumula Swarnalatha",
      role: "Mentor ( Avionics )",
      position: "Assistant Professor (S.G) at KCG College of Technology, Hindustan Group",
      linkedin:"https://www.linkedin.com/in/dr-sanagavarapu-swarnalatha-a067171a/",
      image: "/team/swarnalatha.jpg"
    }
  ];

  const advisors = [
    {
      name: "Er. Asad Ahmed. R PhD",
      role: "Advisor",
      position: "Professor and Educator at KCG College of Technology, Hindustan Group",
      linkedin: "https://www.linkedin.com/in/er-asad-ahmed-r-phd-85965911/",
      image: "/team/asad.png"
    },
    {
      name: "Dr. S. Solai Manohar",
      role: "Dean IEDC and Professor",
      position: "Professor in the Department of Electrical and Electronics Engineering (EEE) and Dean of the Innovation & Entrepreneurship Development Centre at KCG College of Technology, Chennai",
      linkedin: "https://www.linkedin.com/in/dr-s-solai-manohar-61917a19a/",
      image: "/team/solai.jpg"
    }
    
  ];

  const founders = [
    {
      name: "Logeshwaran M",
      role: "Founder & CEO",
      education: "Aerospace Engineer",
      image: "/team/loki.png",
      links: {
        linkedin: "https://www.linkedin.com/in/logeshwaran-mahendran-ba27572b7/"
      }
    },
    {
      name: "Jayashree B",
      role: "Founder & COO",
      education: "Masters in Aerospace Engineering, Coventry University",
      image: "/team/jayashree.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/jayashree-b-67950621a/"
      }
    },
    {
      name: "Hariharan R",
      role: "Founder & CTO",
      education: "Masters in Aerospace Technology , Anna University (MIT)",
      image: "/team/hariharan.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/hariharan-r-4a9a3b20b/"
      }
    }
  ];

  const teamMembers = {
    aerospace: [
      {
        name: "Srinivasan A",
        role: "Chief Manufacturing Officer",
        linkedin: "https://www.linkedin.com/in/a-srinivasan-8a64a9297/",
        education: "KCG Alumnus",
        image: "/team/srinivasan.jpg"
      },
      {
        name: "Barani L",
        role: "Re-entry Vehicles",
        education: "IIT MADRAS",
        linkedin: "https://www.linkedin.com/in/barani-l-aa679323b/",
        image: "/team/barani.jpeg"
      },
      {
        name: "Srikanth R",
        role: "Space Vehicle Design",
        education: "Coventry University",
        linkedin: "https://www.linkedin.com/in/srikanth-r-9974b521a/",
        image: "/team/srikanth.jpg"
      },
      {
        name: "Balajee E",
        role: "Chief Design Engineer",
        education: "MIT, Anna University",
        linkedin: "https://www.linkedin.com/in/balajee-e-a35755230/",
        image: "/team/balaji.png"
      },
      {
        name: "Barath Kanna B O",
        role: "Avionics",
        education: "MIT, Anna University",
        linkedin: "https://www.linkedin.com/in/barath-kanna-079074289/",
        image: "/team/barath.png"
      },
      {
        name: "Sabari Balan G",
        role: "Flight System Engineer",
        linkedin: "https://www.linkedin.com/in/sabaribalan1710/",
        education: "KCG Alumnus",
        image: "/team/sabari.png"
      }
      
    ],
    technical: [
      {
        name: "Dhilagam Parvathi Nathan C",
        role: "Technical Engineer",
        linkedin: "https://www.linkedin.com/in/dhilagam-parvathi-nathan-39701526b/",
        image: "/team/avatar.png"
      }
    ],
    software: [
      {
        name: "Vijayaraj Anbalagan",
        role: "AI & Software Developer",
        linkedin: "https://www.linkedin.com/in/vijayarajanbalagan/",
        image: "/team/vijay.jpg"
      },
      {
        name: "Ravikumar G",
        role: "Data Engineer",
        linkedin: "https://www.linkedin.com/in/ravikumar-g-605305263/",
        image: "/team/ravi.jpg"
      }
    ],
    operations: [
      {
        name: "Sowmya R",
        role: "Cheif Human Resource Officer",
        linkedin: "https://www.linkedin.com/in/sowmya-ramesh-0b1650251/",
        image: "/team/sowmya.png"
      }
    ]
  };

  const CardWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`bg-zinc-900 rounded-xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      
      {/* Background stars effect */}
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

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Our Founders
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <CardWrapper>
                  <div className="p-6">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {founder.name}
                      </h3>
                      <p className="text-blue-400 mb-2 font-medium">{founder.role}</p>
                      <p className="text-zinc-400 text-sm mb-4">{founder.education}</p>
                      
                      <a href={founder.links.linkedin} className="text-zinc-400 hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-5 h-5 mx-auto" />
                      </a>
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors & Advisors Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          {/* Mentors */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Our Mentor
              </span>
            </h2>

            <div className="max-w-3xl mx-auto">
              {mentors.map((mentor) => (
                <CardWrapper key={mentor.name} className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {mentor.name}
                      </h3>
                      <p className="text-blue-400 mb-2 text-lg">{mentor.role}</p>
                      <p className="text-zinc-400 mb-4">{mentor.position}</p>
                      
                      <a 
                        href={`https://linkedin.com/in/${mentor.linkedin}`}
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors"
                      >
                        <FaLinkedin className="w-5 h-5" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </CardWrapper>
              ))}
            </div>
          </motion.div>

          {/* Advisors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Our Advisor
              </span>
            </h2>

            <div className="max-w-3xl mx-auto">
              {advisors.map((advisor) => (
                <CardWrapper key={advisor.name} className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {advisor.name}
                      </h3>
                      <p className="text-blue-400 mb-2 text-lg">{advisor.role}</p>
                      <p className="text-zinc-400 mb-4">{advisor.position}</p>
                      
                      <a 
                        href={advisor.linkedin}
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors"
                      >
                        <FaLinkedin className="w-5 h-5" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </CardWrapper>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </motion.h2>

          {/* Aerospace Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-blue-400 text-center justify-center items-center">Aerospace Engineering Team</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.aerospace.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardWrapper>
                    <div className="p-6 h-full">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-lg font-bold mb-2 text-white">
                          {member.name}
                        </h3>
                        <p className="text-blue-400 mb-2">{member.role}</p>
                        {member.education && (
                          <p className="text-zinc-400 text-sm mb-3">{member.education}</p>
                        )}
                        
                        <a 
                          href={member.linkedin}
                          className="inline-flex items-center justify-center text-zinc-400 hover:text-blue-400 transition-colors"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </CardWrapper>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Software Team */}
          <div className="mb-16 justify-center items-center">
            <h3 className="text-2xl font-bold mb-8 text-blue-400 text-center justify-center items-center">Software & Data Team</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {teamMembers.software.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CardWrapper>
                    <div className="p-6 h-full">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-lg font-bold mb-2 text-white">
                          {member.name}
                        </h3>
                        <p className="text-blue-400 mb-2">{member.role}</p>
                        <a 
                          href={member.linkedin}
                          className="inline-flex items-center justify-center text-zinc-400 hover:text-blue-400 transition-colors"
                        >
                          <FaLinkedin className="w-5 h-5" />
                          </a>
                      </div>
                    </div>
                  </CardWrapper>
                </motion.div>
              ))}
            </div>
          </div>

            {/* Technical and Operations Team */}
            <div className="mb-8 grid md:grid-cols-2 gap-6">
            {/* Operations Team */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-blue-400 text-center">Operations Team</h3>
              <div className="grid gap-6">
              {teamMembers.operations.map((member, index) => (
                <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                >
                <CardWrapper>
                  <div className="p-6 h-full">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-bold mb-2 text-white">
                    {member.name}
                    </h3>
                    <p className="text-blue-400 mb-2">{member.role}</p>
                    <a 
                    href={member.linkedin}
                    className="inline-flex items-center justify-center text-zinc-400 hover:text-blue-400 transition-colors"
                    >
                    <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                  </div>
                </CardWrapper>
                </motion.div>
              ))}
              </div>
            </div>

            {/* Technical Team */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-blue-400 text-center">Technical Team</h3>
              <div className="grid gap-6">
              {teamMembers.technical.map((member, index) => (
                <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                >
                <CardWrapper>
                  <div className="p-6 h-full">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-bold mb-2 text-white">
                    {member.name}
                    </h3>
                    <p className="text-blue-400 mb-2">{member.role}</p>
                    <a 
                    href={member.linkedin}
                    className="inline-flex items-center justify-center text-zinc-400 hover:text-blue-400 transition-colors"
                    >
                    <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                  </div>
                </CardWrapper>
                </motion.div>
              ))}
              </div>
            </div>
            </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-10 relative bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-pink-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Journey to the Stratosphere
            </h2>
            <p className="text-zinc-400 mb-8">
              Were always looking for passionate individuals to join our mission of revolutionizing aerospace technology.
            </p>
            <Link 
              href="/careers"
              className="inline-flex px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-white"
            >
              View Open Positions
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TeamsPage;
