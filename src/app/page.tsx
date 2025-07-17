'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import {
  motion
} from "framer-motion";
import {  FC, useEffect, useRef } from "react";
import Image from "next/image";
import Technology from '@/components/Technology';
import Timeline from '@/components/TimeLine';
import Footer from '@/components/Footer';
import Nav from '@/components/Navbar';

const SmoothScrollPage: FC = () => {
  return (
    <div className="bg-zinc-950 vmin-h-screen relative">
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
      {/* @ts-expect-error - Known issue with ReactLenis types */}
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Nav />
        <Hero />
        <About />
        <LogoShowcase />
        <Technology />
        {/* <NewsRoomSection /> */}
        {/* <ParallaxShowcase /> */}
        <Timeline />
        <Contact />
        <Footer/>
      </ReactLenis>
    </div>
  );
};



const SECTION_HEIGHT = 700;
const HeroBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      
      
      // Ensure video plays when ready
      const playVideo = () => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            // Handle any autoplay restrictions gracefully
            console.log('Autoplay prevented by browser');
          });
        }
      };

      videoRef.current.addEventListener('loadeddata', playVideo);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', playVideo);
        }
      };
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 z-10" /> {/* Overlay for better text visibility */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient overlay for smoother text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-20" />
      
      {/* Optional: Add a fallback image for loading state */}
      <div className="absolute inset-0 bg-zinc-900 -z-10" />
    </div>
  );
};

// const ParallaxShowcase = () => {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center text-white mb-12"
//         >
//           <h2 className="text-3xl font-bold mb-4">HAPS Advantage</h2>
//           <p className="text-zinc-400 max-w-2xl mx-auto">
//             Our stratospheric platforms bridge the gap between satellites and traditional aerial systems
//           </p>
//         </motion.div>
//         <div className="relative flex justify-center">
//           <Image
//             src="/explain.png"
//             width={900}
//             height={420}
//             alt="HAPS Technology"
//             className="rounded-lg mix-blend-screen"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full bg-zinc-950"
    >
      <HeroBackground />

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center px-4 relative pt-24 sm:pt-32"
      >
      <div className="relative max-w-4xl mx-auto">
        <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        <span className="relative inline-block text-white">
          Redefining Near Space Access with 
          <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 bg-clip-text text-transparent"> HAPS </span>
          Technology
        </span>
        </motion.h1>
        
        <motion.p 
        className="text-xl text-white mb-36 max-w-2xl mx-auto relative z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        >
        <span className="relative">
          Empowering the future with cutting-edge High-Altitude Platform Systems (HAPS) for near-space applications.
          <span className="absolute inset-0 blur-lg bg-blue-500/10" />
        </span>
        </motion.p>

         
      </div>
      {/* <LogoScroll/> */}
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-64 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};


const About = () => {
  const decorativeElements = [...Array(20)].map((_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${10 + Math.random() * 10}s infinite`,
        animationDelay: `${Math.random() * 5}s`
      }}
    />
  ));
  return (
    <section id='about' className="relative py-20 bg-zinc-950 overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {decorativeElements}
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-br from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Who We Are
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-6" />
            <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              India&apos;s pioneering force in stratospheric innovation, we design and manufacture 
              state-of-the-art operational platforms that bridge the crucial gap between satellites 
              and traditional aerial systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-zinc-900/50 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-zinc-800/50 rounded-lg border border-zinc-700"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-zinc-800/50 rounded-lg border border-zinc-700"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 bg-zinc-800/50 rounded-lg border border-zinc-700"
            />
            <button className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


const LogoShowcase = () => {
  const logos = [
    // "/logo/DPIIT.png",
    "/logo/Ediit-tn-logo.png",
    "/logo/haps-alliance.png",
    // "/logo/vaanam.png",
    // "/logo/MSME.png",
    "/logo/IN-SPACe_Logo.png",
    "/logo/SI.png",
    "/logo/TAA.png",
    "/logo/startup tn.png",
    "/logo/kcg.png",
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <p className="text-center text-md text-white">
        Supported and Partnered with
      </p>
      <div className="mt-8 grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8       gap-8 items-center">
        {logos.map((logo, index) => (
          <div
            key={`logo-${index}`}
            className="flex justify-center items-center"
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={100}
              height={75}
              objectFit="contain"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


// const NewsRoomSection = () => {
//   const newsItems = [
//     {
//       id: 1,
//       title: "Successful Low Altitude Trials",
//       date: "Jan 23, 2025",
//       image: "/news/lta.jpg",
//       description: "Our platform completed low altitude trials with AI-powered human detection system operating successfully.",
//       link: "https://www.youtube.com/watch?v=5UyAUkmlnN8"
//     },
//     {
//       id: 2,
//       title: "Inauguration of Dashagriv Aerospace",
//       date: "April 2025",
//       image: "/news/inag.jpg",
//       description: "Official inauguration featuring MEGNATH scaled model, attended by StartupTN CEO, Airport Authority Director, and Hindustan Group Chairman.",
//       link: "https://www.linkedin.com/posts/dashagriv-aerospace-technology_dashagrivaerospace-highaltitudeplatform-activity-7312709328984002561-hm-B?utm_source=chatgpt.com"
//     },
//     {
//       id: 3,
//       title: "Indo-French Space-Tech Meet",
//       date: "May 2025",
//       image: "/news/indofrenchmeet.png",
//       description: "Co-founders represented Dashagriv at the Indo-French networking event to foster international collaboration in space technology.",
//       link: "https://in.linkedin.com/company/dashagriv-aerospace-technology?utm_source=chatgpt.com"
//     }
//   ];

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
//           Newsroom
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Top box spanning full width */}
//           <div className="col-span-1 md:col-span-2">
//             <NewsCard {...newsItems[0]} />
//           </div>
          
//           {/* Two boxes side by side */}
//           <div className="col-span-1">
//             <NewsCard {...newsItems[1]} />
//           </div>
//           <div className="col-span-1">
//             <NewsCard {...newsItems[2]} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Separate NewsCard component for better organization
// interface NewsCardProps {
//   title: string;
//   date: string;
//   image: string;
//   description: string;
//   link: string;
// }

// const NewsCard = ({ title, date, image, description , link  }: NewsCardProps) => (
//   <Link href={link}>
//   <div className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 hover:border-blue-500 transition-colors h-full">
//     <div className="relative h-48">
//       <Image
//         src={image}
//         alt={title}
//         layout="fill"
//         objectFit="cover"
//         className="transition-transform duration-500 hover:scale-105"
//       />
//     </div>
//     <div className="p-4">
//       <p className="text-xs text-zinc-400 mb-2">{date}</p>
//       <h3 className="text-xl font-semibold text-white mb-2">
//         {title}
//       </h3>
//       <p className="text-sm text-zinc-300">
//         {typeof window !== 'undefined' && window.innerWidth < 768 
//           ? `${description.substring(0, 150)}...` 
//           : description}
//       </p>
//     </div>
//   </div>
//   </Link>
// );



export default SmoothScrollPage;
