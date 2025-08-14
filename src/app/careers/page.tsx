'use client';
import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Dialog } from '@/components/ui/dialog';
import { TextScramble } from '@/components/ui/text-scramble';
import { Rocket, BookOpen, Factory, X, MapPin, Clock, Users, Building2, Mail } from 'lucide-react';
import Nav from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
interface Position {
  id: string;
  title: string;
  type: 'fulltime' | 'internship';
  location: string;
  mode: string;
  department: string;
  description: string;
  requirements: string[];
  formLink: string;
}



const CareersPage = () => {
   
    const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'fulltime' | 'internship'>('all');

  const positions: Position[] = [
    {
      id: 'cad-intern',
      title: 'CAD Intern',
      type: 'fulltime',
      location: 'Chennai',
      mode: 'hybrid',
      department: 'Engineering',
      description: 'Support the engineering team in creating and refining 3D models, assemblies, and detailed drawings for product design and manufacturing',
      requirements: [
        'Basic experience with CAD software such as SolidWorks, CATIA, or Autodesk Inventor.',
        'Understanding of engineering drawings, tolerances, and manufacturing processes.',
        'Ability to convert conceptual sketches into accurate 3D models.',
        'Familiarity with product lifecycle management (PLM) systems is a plus.',
        'Strong attention to detail and willingness to learn.'
      ],
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScDj30aw4NMFGLiNoqP4xHoqUFK0XO1wjKcNAJn1taei19kyg/viewform?usp=header'
    },
    {
      id: 'cfd/feq-analysis-intern',
      title: 'CFD/FEA Analysis Intern',
      type: 'fulltime',
      location: 'Chennai',
      mode: 'Hybrid',
      department: 'Engineering',
      description: 'Assist in performing Computational Fluid Dynamics (CFD) and Finite Element Analysis (FEA) to evaluate and optimize product designs for performance, strength, and efficiency',
      requirements: [
        'Basic knowledge of simulation tools such as ANSYS, COMSOL, or Abaqus.',
        'Understanding of fluid mechanics, thermodynamics, and structural analysis fundamentals.',
        'Ability to set up and run simulations for flow, heat transfer, and stress analysis',
        'Familiarity with pre-processing (meshing) and post-processing of simulation results.',
        'Strong analytical and problem-solving skills.'
      ],
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScDj30aw4NMFGLiNoqP4xHoqUFK0XO1wjKcNAJn1taei19kyg/viewform?usp=header'
    },
    // {
    //   id: 'pcb-designer-intern',
    //   title: 'PCB Designer Intern',
    //   type: 'fulltime',
    //   location: 'Chennai',
    //   mode: 'Hybrid',
    //   department: 'Engineering',
    //   description: 'Design and develop PCB layouts for avionics and embedded systems.',
    //   requirements: [
    //     'Experience in PCB design using Altium Designer, KiCad, or Eagle.',
    //     'Understanding of circuit design, signal integrity, and EMI/EMC considerations.',
    //     'Ability to design multi-layer PCBs for embedded systems.',
    //     'Knowledge of PCB manufacturing processes and component selection.'
    //   ],
    //   formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScDj30aw4NMFGLiNoqP4xHoqUFK0XO1wjKcNAJn1taei19kyg/viewform?usp=header'
    // },
  ];

  // const benefits = [
  //   {
  //     icon: Clock,
  //     title: 'Flexible Work Culture',
  //     description: 'Design your own schedule with our flexible work policy, promoting work-life harmony',
  //     color: 'from-blue-400 to-blue-600'
  //   },
  //   {
  //     icon: Zap,
  //     title: 'Learning & Growth',
  //     description: 'Access to cutting-edge aerospace tech and continuous learning opportunities for personal growth',
  //     color: 'from-purple-400 to-purple-600'
  //   },
  //   {
  //     icon: Coffee,
  //     title: 'Modern Workspace',
  //     description: 'State-of-the-art facilities with collaborative spaces and latest equipment',
  //     color: 'from-pink-400 to-pink-600'
  //   },
  //   {
  //     icon: Target,
  //     title: 'Innovation Focus',
  //     description: 'Work on breakthrough aerospace technologies that shape the future',
  //     color: 'from-green-400 to-green-600'
  //   },
  //   {
  //     icon: Users,
  //     title: 'Diverse Teams',
  //     description: 'Collaborate with experts from various fields in a inclusive environment',
  //     color: 'from-yellow-400 to-yellow-600'
  //   },
  //   {
  //     icon: Building2,
  //     title: 'Global Impact',
  //     description: 'Be part of projects that revolutionize the aerospace industry worldwide',
  //     color: 'from-red-400 to-red-600'
  //   }
  // ];
      
  const collaborationTypes = [
    {
      title: 'Knowledge Partnership',
      icon: BookOpen,
      description: 'Partner with us for groundbreaking research in aerospace technology. Join our network of academic institutions and research centers working on next-generation aerospace solutions.',
      email: 'info@dashagriv.in',
      subject: '[Dashagriv Website] - Knowledge Partnership Inquiry'
    },
    {
      title: 'Educational Alliance',
      icon: Users,
      description: 'Create opportunities for students through internships, workshops, and collaborative projects. Help shape the future workforce of the aerospace industry.',
      email: 'info@dashagriv.in',
      subject: '[Dashagriv Website] - Educational Alliance Inquiry'
    },
    {
      title: 'Industry Collaboration',
      icon: Factory,
      description: 'Form strategic partnerships to develop innovative aerospace solutions. Leverage our expertise and infrastructure for mutual growth , advancement and success.',
      email: 'info@dashagriv.in',
      subject: '[Dashagriv Website] - Industry Collaboration Inquiry'
    }
  ];

  const filteredPositions = positions.filter(position => 
    activeFilter === 'all' ? true : position.type === activeFilter
  );

  const handleCollaboration = (email: string, subject: string) => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      <Nav />

      {/* Hero Section */}
         <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
          {/* Background Image Layer */}
         <div className="absolute inset-0 z-0">
          <Image
            src="/Career_bg.png"
            alt="Hero background"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

  {/* Star Animation Layer */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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

  {/* Content */}
  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center max-w-4xl mx-auto"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-16">
        <TextScramble duration={1.2}>
          Join our mission to reach stratosphere
        </TextScramble>
      </h1>
      <p className="text-xl text-zinc-300 mb-8">
        Be part of India&apos;s pioneering aerospace innovation
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg"
          onClick={() =>
            document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          View Open Positions
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-transparent border border-blue-500 rounded-lg hover:bg-blue-500/10"
          onClick={() =>
            document.getElementById('collaborate')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Collaborate With Us
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>


      

      {/* Benefits Section
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Life at Dashagriv
              </span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Join a culture of innovation where your ideas take flight and your career soars to new heights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500`} />
                <div className="relative p-8 backdrop-blur-lg border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 */}

     

      {/* Open Positions Section */}
      <section id="positions" className="py-20 relative bg-zinc-900/30">
  <div className="container mx-auto px-4 sm:px-6">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-center max-w-3xl mx-auto mb-12"
    >
      <h2 className="text-4xl font-bold mb-6">
        <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          Open Positions
        </span>
      </h2>
      
      {/* Filter Buttons - Made scrollable on mobile */}
      <div className="overflow-x-auto pb-4 -mb-4">
        <div className="flex justify-center gap-3 min-w-min mx-auto">
          {[
            { id: 'all', label: 'All Positions' },
            { id: 'fulltime', label: 'Full-time' },
            { id: 'internship', label: 'Internships' }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>

    <AnimatePresence mode="wait">
      <motion.div
        key={activeFilter}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="grid gap-4 sm:gap-6 max-w-5xl mx-auto"
      >
        {filteredPositions.map((position) => (
          <motion.div
            key={position.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedPosition(position)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            <div className="relative p-4 sm:p-8 border border-zinc-800 rounded-xl backdrop-blur-lg hover:border-zinc-700 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-zinc-400">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {position.mode}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {position.type === 'internship' ? 'Internship' : 'Full-time'}
                    </span>
                  </div>
                </div>
                <motion.div
                  className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors self-start sm:self-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Rocket className="w-6 h-6 text-blue-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  </div>
</section>

      <section id="collaborate" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Collaboration Opportunities
              </span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Partner with us to shape the future of aerospace technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborationTypes.map((collab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-auto p-8 border border-zinc-800 rounded-xl backdrop-blur-lg hover:border-zinc-700 transition-colors">
                  <div className="mb-8">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-6">
                      <collab.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{collab.title}</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">{collab.description}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleCollaboration(collab.email, collab.subject)}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    <Mail className="w-4 h-4" />
                    Connect Now
                  </motion.button>
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
            Ready to Join Our Team?
          </h2>
          <p className="text-zinc-400 mb-8">
            Join us in revolutionizing near-space technology and unlock new possibilities for your mission.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:info@dashagriv.in?subject=Inquiry about careers"
            className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-white"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
      {selectedPosition && (
        <Dialog open={!!selectedPosition} onOpenChange={() => setSelectedPosition(null)}>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-zinc-900 p-8 rounded-xl max-w-2xl w-full mx-4 relative border border-zinc-800">
              <button
                onClick={() => setSelectedPosition(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-bold mb-4">{selectedPosition.title}</h3>
              
              <div className="flex gap-4 mb-6 text-sm text-zinc-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {selectedPosition.location}
                </span>
                <span>{selectedPosition.mode}</span>
                <span>{selectedPosition.type === 'internship' ? 'Internship' : 'Full-time'}</span>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">About the Role</h4>
                <p className="text-zinc-400">{selectedPosition.description}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-2">Requirements</h4>
                <ul className="space-y-2">
                  {selectedPosition.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-zinc-400">
                      <div className="w-1 h-1 bg-blue-400 rounded-full mt-2" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              <motion.a
                href={selectedPosition.formLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-center font-medium"
              >
                Apply Now
              </motion.a>
            </div>
          </div>
        </Dialog>
      )}
      <Footer/>
    </div>
    
  );
};

export default CareersPage;
