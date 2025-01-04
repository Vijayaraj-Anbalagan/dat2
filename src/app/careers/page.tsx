'use client';
import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Dialog } from '@/components/ui/dialog';
import { TextScramble } from '@/components/ui/text-scramble';
import { Rocket, BookOpen, Factory, X, MapPin, Clock, Users, Building2, Coffee, Target, Zap, Mail } from 'lucide-react';
import Nav from '@/components/Navbar';
import Footer from '@/components/Footer';

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
      id: 'aiml-engineer',
      title: 'AI/ML Engineer',
      type: 'fulltime',
      location: 'Chennai',
      mode: 'Hybrid',
      department: 'Technology',
      description: 'Join our team to develop cutting-edge AI/ML solutions for aerospace applications.',
      requirements: [
        'Masters/PhD in Computer Science or related field',
        '3+ years experience in machine learning',
        'Strong Python programming skills',
        'Experience with PyTorch or TensorFlow'
      ],
      formLink: 'https://forms.google.com/...'
    },
    {
      id: 'cad-designer',
      title: '3D CAD Designer',
      type: 'fulltime',
      location: 'Chennai',
      mode: 'Remote',
      department: 'Engineering',
      description: 'Design next-generation aerospace components using advanced CAD tools.',
      requirements: [
        'Bachelors in Mechanical/Aerospace Engineering',
        'Proficiency in CATIA/SolidWorks',
        'Understanding of aerospace design principles',
        'Experience with GD&T'
      ],
      formLink: 'https://forms.google.com/...'
    },
    {
      id: 'intern-aerospace',
      title: 'Aerospace Engineering Intern',
      type: 'internship',
      location: 'Chennai',
      mode: 'On-site',
      department: 'Engineering',
      description: 'Learn and contribute to cutting-edge aerospace projects.',
      requirements: [
        'Currently pursuing B.Tech/M.Tech in Aerospace Engineering',
        'Strong academic record',
        'Knowledge of fluid dynamics and aerodynamics',
        'Basic CAD skills'
      ],
      formLink: 'https://forms.google.com/...'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Flexible Work Culture',
      description: 'Design your own schedule with our flexible work policy, promoting work-life harmony',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Learning & Growth',
      description: 'Access to cutting-edge aerospace tech and continuous learning opportunities for personal growth',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Coffee,
      title: 'Modern Workspace',
      description: 'State-of-the-art facilities with collaborative spaces and latest equipment',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'Work on breakthrough aerospace technologies that shape the future',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Users,
      title: 'Diverse Teams',
      description: 'Collaborate with experts from various fields in a inclusive environment',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Building2,
      title: 'Global Impact',
      description: 'Be part of projects that revolutionize the aerospace industry worldwide',
      color: 'from-red-400 to-red-600'
    }
  ];
      
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
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      
              <div className="container mx-auto px-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center max-w-4xl mx-auto"
                >
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    <TextScramble duration={1.2}>
                      Join Our Mission to the Stratosphere
                    </TextScramble>
                  </h1>
                  <p className="text-xl text-zinc-300 mb-8">
                    Be part of Indias pioneering aerospace innovation
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg"
                      onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      View Open Positions
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-8 py-3 bg-transparent border border-blue-500 rounded-lg hover:bg-blue-500/10"
                      onClick={() => document.getElementById('collaborate')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Collaborate With Us
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </section>
      

      {/* Benefits Section */}
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


     

      {/* Open Positions Section */}
      <section id="positions" className="py-20 relative bg-zinc-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Open Positions
              </span>
            </h2>
            <div className="flex justify-center gap-4 mt-8">
              {[
                { id: 'all', label: 'All Positions' },
                { id: 'fulltime', label: 'Full-time' },
                { id: 'internship', label: 'Internships' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                      : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
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
                  <div className="relative p-8 border border-zinc-800 rounded-xl backdrop-blur-lg hover:border-zinc-700 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex gap-6 text-sm text-zinc-400">
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
                        className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors"
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-white"
          >
            Contact Us
          </motion.button>
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
