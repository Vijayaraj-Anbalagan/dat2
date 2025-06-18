import { motion } from 'framer-motion';
import { MapPin, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Timeline = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const milestones = [
    // {
    //   title: "Designed and Developed Nanosatellite",
    //   date: "March 2023",
    //   category: "Development",
    //   image: "/cubesat.png",
    //   location: "KCG Space Technology Center",
    // },
    
    // {
    //   title: "CubeSat demonstration at Ground Station",
    //   date: "May 2023",
    //   category: "Demonstration",
    //   image: "/demo.png",
    //   location: "KCG Space Technology Center",
    //   description: "In the presence of Dr. A.S. Kiran Kumar, Former Chairman of ISRO.",
    // },
    // {
    //   title: "Presented HAPS Project",
    //   date: "November 2023",
    //   category: "Presentation",
    //   image: "/present.png",
    //   location: "KCG Space Technology Center",
    //   description: "Presented to Padma Shree Dr. A. S. Sivathanu Pillai, Father of BrahMos.",
    // },
    // {
    //   title: "Initial Prototype Developed",
    //   date: "May 2024",
    //   category: "Development",
    //   image: "/hapsproto.png",
    //   location: "Testing Facility",
    // },
    {
      title: "Prototype developed and Tested ",
      date: "August 2024",
      category: "Demonstration",
      image: "/demohaps.png",
      location: "Testing Facility",
    },
    {
      title: "Inauguration",
      date: "September 2024",
      category: "Achievement",
      image: "/incubation.jpg",
      location: "KCG College",
    },
    // {
    //   title: "Joined HAPS Alliance",
    //   date: "November 2024",
    //   category: "Partnership",
    //   image: "",
    //   location: "Virtual Event",
    // },
    // {
    //   title: "Joined The Airship Association",
    //   date: "December 2024",
    //   category: "Partnership",
    //   image: "",
    //   location: "Virtual Event",
    // },
    {
      title: "Low Altitude Trials",
      date: "January 2025",
      category: "Achievement",
      image: "/low-altitude.jpg" ,
      location: "Testing Field",
      // upcoming: true,
    },
    {
      title: "Pre-flight Medium Altitude Trials",
      date: "August 2025",
      category: "Achievement",
      image: "/mid-flight.jpg" ,
      location: "Testing Field",
      // upcoming: true,
    },
     {
      title: "Mid Altitude Trials",
      date: "August 2025",
      category: "Upcoming",
      location: "Testing Field",
      upcoming: true,
    },
     {
      title: "High Altitude Trials",
      date: "Januaru 2026",
      category: "Upcoming",
      location: "Testing Field",
      upcoming: true,
    },
  ];

  return (
    <section id="company-journey" className="relative mx-auto max-w-5xl px-4 py-10 text-white sm:py-32">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-3xl font-bold uppercase text-zinc-50 mb-2 sm:text-4xl"
      >
        Traction
      </motion.h1>
      <motion.p
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-10 text-sm text-zinc-400 sm:text-xl"
      >
        Click on images to view them in full size.
      </motion.p>

      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <TimelineItem 
            key={index} 
            {...milestone} 
            onImageClick={(image) => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-blue-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative aspect-video w-full overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                layout="fill"
                objectFit="contain"
                className="bg-zinc-900"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

interface TimelineItemProps {
  title: string;
  date: string;
  category: string;
  location: string;
  image?: string;
  description?: string;
  upcoming?: boolean;
  onImageClick: (image: string) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  date,
  category,
  location,
  image,
  description,
  upcoming,
  onImageClick,
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={`group relative border-b border-zinc-800 pb-8 ${upcoming ? "opacity-50" : ""}`}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between px-3">
          <div className="flex-1">
            <div>
              <h3 className="mb-1.5 text-xl text-zinc-50">{title}</h3>
              <p className="text-sm uppercase text-zinc-500">{date}</p>
              {description && <p className="mt-1 text-sm text-zinc-400">{description}</p>}
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
            <span className="hidden sm:inline">{category}</span>
            <p>{location}</p>
            <MapPin className="h-4 w-4" />
          </div>
        </div>

        {/* Image displayed directly below content */}
        {!upcoming && image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full px-3"
          >
            <div 
              className="relative aspect-video max-w-md cursor-pointer overflow-hidden rounded-lg 
                        border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/50 
                        transition-colors duration-300"
              onClick={() => onImageClick(image)}
            >
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Timeline;