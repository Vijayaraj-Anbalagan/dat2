'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Nav from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { 
  Cpu, 
  Battery, 
  Radio, 
  Zap, 
  Box,
  CheckCircle
} from 'lucide-react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
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
    <div className="bg-black text-white">     
       <section className="relative w-full h-[45vh] sm:h-[70vh] lg:h-[100vh] overflow-hidden mb-12">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center z-0 "
          src="/product-bg-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ objectPosition: 'center center' }}
        />
        
      </section>      {/* Product Listing Section */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white px-4 md:mt-24 backdrop-brightness-[0.5]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-pink-600 text-transparent bg-clip-text">
        Our Stratospheric Solutions
          </h2>
          <p className="text-gray-200 mt-2 sm:mt-4 max-w-2xl text-sm sm:text-base">
        Explore our suite of high-altitude, plug-and-play aerospace hardware designed for mission-critical operations.
          </p>
        </div>
      {/* <div className="w-full max-w-[95%] sm:max-w-[85%] lg:max-w-[75%] mx-auto mt-16 sm:mt-24 md:mt-30 mb-16 px-4">
        {solutions.map((product, index) => (
          <div key={index}>
            <ProductRow product={product} index={index} />
            {index < solutions.length - 1 && (
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-8 origin-center"
              ></motion.div>
            )}
          </div>
        ))}
      </div>Call to Action */}
           <div className="bg-black px-4 pb-4 lg:hidden">
          <button className="w-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-black hover:text-white hover:border hover:border-white hover:shadow-lg">
            Enquire Now
          </button>
        </div>

          <div className="hidden  lg:flex items-center justify-center mt-8 mb-8">
            <button className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-black hover:text-white hover:border hover:border-white hover:shadow-lg">
              Enquire Now
            </button>
          </div>

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
    </>
  );
}

function ProductRow({ product, index }: { product: Solution; index: number }) {
  const isEven = index % 2 === 0;
  
  // Icon mapping for different products
  const getProductIcon = (title: string) => {
    if (title.includes('Computer') || title.includes('OBC')) return <Cpu className="w-6 h-6 text-white" />;
    if (title.includes('Power') || title.includes('EPS')) return <Zap className="w-6 h-6 text-white" />;
    if (title.includes('Telemetry') || title.includes('Com')) return <Radio className="w-6 h-6 text-white" />;
    if (title.includes('Battery') || title.includes('Pack')) return <Battery className="w-6 h-6 text-white" />;
    if (title.includes('Frame')) return <Box className="w-6 h-6 text-white" />;
    return <CheckCircle className="w-6 h-6 text-white" />;
  };

  // Dynamic image sizing based on product title
  const getImageScale = (title: string) => {
    if (title.includes('StratoVolt')) return 'scale-140'; // 50% increase
    if (title.includes('XS-Com')) return 'scale-125'; // 25% increase  
    if (title.includes('StratoPack')) return 'scale-125'; // 25% increase
    if (title.includes('Strato-Frame')) return 'scale-115'; // 15% increase
    return 'scale-100'; // Default size
  };  return (
    <>
      {/* Mobile Layout */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex flex-col w-full lg:hidden"
      >
        {/* Mobile Header */}
        <div className="bg-black text-white p-4">
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 p-2 flex-shrink-0">
              {getProductIcon(product.title)}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className={`text-lg font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-pink-600 text-transparent bg-clip-text leading-tight ${inter.className}`}>
                {product.title}
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 mt-2"></div>
            </div>
          </div>
        </div>        {/* Mobile Image Section */}
        <div className="w-full group bg-black overflow-hidden">
          <div className="h-full flex items-center justify-center min-h-[200px] py-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={300}
                className={`max-w-full max-h-full object-contain transition-all duration-300 ${getImageScale(product.title)} group-hover:brightness-105`}
              />
            </motion.div>
          </div>
        </div>

        {/* Mobile Enquire Button - Below Image */}
        <div className="bg-black px-4 pb-4">
          <button className="w-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-black hover:text-white hover:border hover:border-white hover:shadow-lg">
            Enquire Now
          </button>
        </div>

        {/* Mobile Specifications */}
        <div className="bg-black text-white p-4">
          {/* Specifications Table */}
          <div className="mb-4">
            <h4 className={`text-base font-semibold text-white mb-3 ${inter.className}`}>
              Technical Specifications
            </h4>
            <div className="overflow-hidden border border-gray-700 rounded">
              <table className="w-full">
                <tbody>
                  {product.specs.map((spec, idx) => {
                    const [label, value] = spec.split(':');
                    return (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-900/50' : 'bg-black/50'}>
                        <td className={`py-2 px-2 text-xs font-medium text-gray-300 border-r border-gray-700 ${inter.className} w-1/3`}>
                          {label?.trim()}
                        </td>
                        <td className={`py-2 px-2 text-xs text-white ${inter.className}`}>
                          {value?.trim() || spec}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h4 className={`text-base font-semibold text-white mb-3 ${inter.className}`}>
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 p-1 rounded-full flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className={`text-xs text-gray-300 ${inter.className} leading-relaxed`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Desktop Layout */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="hidden lg:flex lg:flex-row w-full"
      >
        {/* Desktop Image Section */}
        <div className={`w-full lg:w-1/2 relative group bg-black overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="h-full flex items-center justify-center min-h-[300px] py-6 pb-16">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={300}
                className={`max-w-full max-h-full object-contain transition-all duration-300 ${getImageScale(product.title)} group-hover:brightness-105`}
              />
            </motion.div>
          </div>
          
          {/* Desktop Enquire Button */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <button className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white px-6 py-2 font-medium transition-all duration-300 hover:bg-black hover:text-white hover:border hover:border-white hover:shadow-lg">
              Enquire Now
            </button>
          </div>
        </div>

        {/* Desktop Details Section */}
        <div className={`w-full lg:w-1/2 bg-black text-white ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="h-full p-6 flex flex-col justify-start">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 p-3 flex-shrink-0">
                {getProductIcon(product.title)}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className={`text-2xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-pink-600 text-transparent bg-clip-text leading-tight ${inter.className}`}>
                  {product.title}
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 mt-2"></div>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="mb-4">
              <h4 className={`text-lg font-semibold text-white mb-3 ${inter.className}`}>
                Technical Specifications
              </h4>
              <div className="overflow-hidden border border-gray-700 rounded">
                <table className="w-full">
                  <tbody>
                    {product.specs.map((spec, idx) => {
                      const [label, value] = spec.split(':');
                      return (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-900/50' : 'bg-black/50'}>
                          <td className={`py-2 px-3 text-sm font-medium text-gray-300 border-r border-gray-700 ${inter.className} w-1/3`}>
                            {label?.trim()}
                          </td>
                          <td className={`py-2 px-3 text-sm text-white ${inter.className}`}>
                            {value?.trim() || spec}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className={`text-lg font-semibold text-white mb-3 ${inter.className}`}>
                Key Features
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className={`text-sm text-gray-300 ${inter.className} leading-relaxed`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
