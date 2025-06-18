'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Nav from '@/components/Navbar';
import Footer from '@/components/Footer';
type Solution = {
  title: string;
  specs: string[];
  features: string[];
  image: string;
};
const solutions = [
  {
    title: 'Stratocore On-Board Computer (OBC)',
    specs: [
      'Processor: ARM Cortex-M7 (STM32F7)',
      'Clock Speed: 216 MHz',
      'Memory: 512 KB SRAM, 2 MB Flash',
      'Interfaces: UART, I2C, SPI, CAN, PWM',
    ],
    features: [
      'Real-time data logging and mission control',
      'Sensor fusion support',
      'Fault-tolerant firmware architecture',
    ],
    image: '/solutions/Product-1.png',
  },
  {
    title: 'StratoVolt – Electrical Power System (EPS)',
    specs: [
      'Input Voltage: 6V–24V DC',
      'Output: 3.3V, 5V, 12V regulated',
    ],
    features: [
      'MPPT solar charge controller',
      'Dual battery support',
      'Integrated power distribution & load switching',
    ],
    image: '/solutions/Product-2.png',
  },
  {
    title: 'XS-Com – UHF Telemetry Module',
    specs: [
      'Frequency: 433 MHz',
      'Data Rate: Up to 115.2 kbps',
      'Range: >30 km LoS',
      'Protocol: UART over RF / optional LoRa',
    ],
    features: [
      'Low-power operation',
      'AES-128 encryption support',
      'Ground station compatible',
    ],
    image: '/solutions/Product-3.png',
  },
  {
    title: 'StratoPack – Battery Power Bank',
    specs: [
      'Battery Type: 3S Lithium-Ion',
      'Capacity: 11.1V, 5200 mAh',
      'Discharge: Up to 10A continuous',
    ],
    features: [
      'Insulated for -50°C operation',
      'Custom BMS with protections',
      'JST-XH / XT60 connectors',
    ],
    image: '/solutions/Product-4.png',
  },
  {
    title: 'Strato-Frame – Payload Frame',
    specs: [
      'Material: Aluminum 6061-T6',
      'Fits: 1U to 15kg payloads',
    ],
    features: [
      'Vibration-damped mounting',
      'Modular rails, stackable design',
      'Compatible with OBC, EPS, Comm',
    ],
    image: '/solutions/Product-5.png',
  },
];

export default function ProductPage() {
  return (
    <>
    <Nav />
    <div className="bg-black text-white px-4 ">
      <section className="relative w-full h-[90vh] overflow-hidden mb-12">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/product-bg-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="flex flex-col items-center justify-end h-full text-center text-white px-4 backdrop-brightness-[0.5]">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-pink-600 text-transparent bg-clip-text">
            Our Stratospheric Solutions
          </h2>
          <p className="text-gray-200 mt-4 max-w-2xl">
            Explore our suite of high-altitude, plug-and-play aerospace hardware designed for mission-critical operations.
          </p>
        </div>
      </section>

      {/* Grid Wrapper */}
      <div className="flex flex-col items-center gap-8 mt-36">
        {/* First Row (3 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {solutions.slice(0, 3).map((item, i) => (
            <SolutionCard item={item} key={i} index={i} />
          ))}
        </div>

        {/* Second Row (2 Cards Centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
          {solutions.slice(3).map((item, i) => (
            <SolutionCard item={item} key={i} index={i + 3} />
          ))}
        </div>
      </div>

       {/* Call to Action */}
      <section className="py-20 mt-24 relative bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-pink-500/10">
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
    </>
  );
}

function SolutionCard({ item, index }: { item: Solution; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-[#111] border border-gray-700 rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <div className="relative h-48 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <ul className="text-sm text-gray-400 mb-2 space-y-1">
            {item.specs.map((spec: string, idx: number) => (
              <li key={idx}>• {spec}</li>
            ))}
          </ul>
          <ul className="text-sm text-gray-300 space-y-1">
            {item.features.map((feature: string, idx: number) => (
              <li key={idx}>✓ {feature}</li>
            ))}
          </ul>
        </div>
       <button className="mt-6 w-full rounded-md bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90 transition-all">
  Enquire Now
</button>
      </div>
    </motion.div>
  );
}
