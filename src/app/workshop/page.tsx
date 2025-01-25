'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Satellite, 
  Clock, 
  MapPin, 
  CheckCircle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { WorkshopRegistrationDialog } from '@/components/WorkshopRegistrationDialog';
import { AlreadyRegisteredDialog } from '@/components/AlreadyRegisteredDialog';

const WorkshopPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const earlyBirdDeadline = new Date('2025-01-30T23:59:59');
      const now = new Date();
      const difference = earlyBirdDeadline.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const pricingTiers = [
    {
      category: 'Students',
      price: '₹1,499'
    },
    {
      category: 'Research Scholars',
      price: '₹1,999'
    },
    {
      category: 'Professionals',
      price: '₹1,999'
    }
  ];

  const sessions = [
    {
      time: '9:30 am - 10:30 am',
      title: 'Introduction to Satellite System',
      topics: [
        'Overview of satellites and orbits (LEO, MEO, GEO)',
        'Basics of satellite communication applications'
      ],
      activities: [
        'Interactive presentation on satellite tracking concepts',
        'Q&A sessions to engage students'
      ]
    },
    {
      time: '10:45 am - 12:30 pm',
      title: 'Ground Station Setup & Software',
      topics: [
        'Components of a ground station: Rotator, SDR, Antenna',
        'Software for satellite tracking and signal processing'
      ],
      activities: [
        'Live demonstration of setting up a portal ground station',
        'Software setup using GPredict and Orbitron'
      ]
    },
    {
      time: '1:30 pm - 3:30 pm',
      title: 'Real-Time Satellite Pass Monitoring',
      topics: [
        'Scheduling and monitoring satellite passes (NOAA, ISS)',
        'Data acquisition using SDR and signal decoding basics'
      ],
      activities: [
        'Real-time satellite signal reception using SDRSharp/CubicSDR',
        'Processing and decoding weather satellite images'
      ]
    },
    {
      time: '3:45 pm - 5:00 pm',
      title: 'Data Analysis & Visualization',
      topics: [
        'Data interpretation and telemetry analysis',
        'Visualization techniques for acquired satellite data'
      ],
      activities: [
        'Analyze captured data using Python (Matplotlib)',
        'Data visualization and interpretation techniques'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-20 relative">
          {/* Early Bird Offer Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-blue-500/20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-blue-300">
                Early Bird Offer
              </h2>
              
              <div className="flex justify-center items-center mb-6">
                <div className="text-3xl font-semibold text-blue-200">
                  Hurry! Offer Ends In: {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {pricingTiers.map((tier, index) => (
                  <div 
                    key={index} 
                    className="bg-zinc-900/60 backdrop-blur-xl rounded-xl p-6 border border-zinc-800/50 shadow-lg"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">{tier.category}</h3>
                    <div className="text-3xl font-bold text-blue-500 mb-4">{tier.price}</div>
                    <p className="text-zinc-300">Early Bird Price</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-16 relative">
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center relative z-10 mb-16"
            >
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                Dashagriv Aerospace Technology
                <br />
                One-Day Training Workshop
              </h1>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Satellite Tracking Data Acquisition Monitoring
              </p>
            </motion.div>

            {/* Workshop Overview Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* What You'll Learn */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-2xl"
              >
                <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center">
                  <Satellite className="mr-4 text-blue-500" />
                  What You&apos;ll Learn
                </h2>
                <ul className="space-y-4 list-none pl-0">
                  {[
                    'Satellite tracking, communication, and data acquisition',
                    'Practical skills for space research and projects',
                    'Ground station setup and real-time satellite tracking'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 text-blue-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Why Attend */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-2xl"
              >
                <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center">
                  <Rocket className="mr-4 text-blue-500" />
                  Why Attend
                </h2>
                <ul className="space-y-4 list-none pl-0">
                  {[
                    'Hands-on training with live demos',
                    'Interactive sessions by industry experts',
                    'Internship opportunities',
                    'Participation certificate'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 text-blue-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Event Details */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-8 text-blue-400">
                Event Details
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-zinc-900/60 backdrop-blur-xl rounded-xl p-6 border border-zinc-800/50">
                  <Clock className="mx-auto mb-4 text-blue-500" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Date & Time</h3>
                  <p className="text-zinc-300">5th February 2025</p>
                  <p className="text-zinc-300">8:00 am - 4:30 pm</p>
                </div>
                <div className="bg-zinc-900/60 backdrop-blur-xl rounded-xl p-6 border border-zinc-800/50">
                  <MapPin className="mx-auto mb-4 text-blue-500" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Venue</h3>
                  <p className="text-zinc-300">KCG Space Technology Centre</p>
                  <p className="text-zinc-300">Chennai, Tamil Nadu</p>
                </div>
                <div className="bg-zinc-900/60 backdrop-blur-xl rounded-xl p-6 border border-zinc-800/50">
                  <CheckCircle className="mx-auto mb-4 text-blue-500" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Who Can Attend</h3>
                  <p className="text-zinc-300">Undergraduates</p>
                  <p className="text-zinc-300">Graduates, Research Scholars</p>
                </div>
              </div>
            </motion.div>

            {/* Workshop Sessions */}
            <div className="container mx-auto px-4 py-16">
              <motion.h2 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-violet-500 to-pink-500 bg-clip-text text-transparent"
              >
                Workshop Sessions
              </motion.h2>

              <div className="space-y-8">
                {sessions.map((session, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 shadow-2xl"
                  >
                    <h3 className="text-3xl font-bold mb-4 text-blue-400">
                      {session.title}
                    </h3>
                    <p className="text-xl mb-4 text-zinc-300">{session.time}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-xl mb-2 text-blue-500">Topics</h4>
                        <ul className="list-disc pl-5 text-zinc-300">
                          {session.topics.map((topic, idx) => (
                            <li key={idx}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-xl mb-2 text-blue-500">Activities</h4>
                        <ul className="list-disc pl-5 text-zinc-300">
                          {session.activities.map((activity, idx) => (
                            <li key={idx}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-8 space-x-3">
                <WorkshopRegistrationDialog />
              </div>
              <div className="text-center mt-8 space-x-3">
                <AlreadyRegisteredDialog />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkshopPage;