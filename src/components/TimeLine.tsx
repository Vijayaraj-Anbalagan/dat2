import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Timeline = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const milestones = [
    {
      title: "Prototype developed and Tested",
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
    {
      title: "Low Altitude Trials",
      date: "January 2025",
      category: "Achievement",
      image: "/low-altitude.jpg" ,
      location: "Testing Field",
    },
    {
      title: "Pre-flight Medium Altitude Trials",
      date: "May 2025",
      category: "Achievement",
      image: "/mid-flight.jpg" ,
      location: "Testing Field",
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
      date: "January 2026",
      category: "Upcoming",
      location: "Testing Field",
      upcoming: true,
    },
  ];

  return (
    <section id="company-journey" className="relative bg-black border-t border-white/10 mx-auto w-full px-6 py-32 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">Traction</p>
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight mb-16">
            Company Journey
          </h2>
        </motion.div>

        <div className="space-y-0">
          {milestones.map((milestone, index) => (
            <TimelineItem 
              key={index} 
              {...milestone} 
              onImageClick={(image) => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white opacity-50 hover:opacity-100 transition-opacity"
            >
              <X className="w-8 h-8" />
            </button>
            <div
              className="relative aspect-video w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                layout="fill"
                objectFit="contain"
              />
            </div>
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
  upcoming?: boolean;
  onImageClick: (image: string) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  date,
  category,
  location,
  image,
  upcoming,
  onImageClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`border-t border-white/10 py-8 ${upcoming ? "opacity-50" : ""}`}
    >
      <div className="grid md:grid-cols-4 gap-8 items-start">
        <div className="md:col-span-1">
          <p className="text-sm font-display uppercase tracking-widest text-zinc-500 mb-2">{date}</p>
          <p className="eyebrow">{category} / {location}</p>
        </div>
        
        <div className="md:col-span-3">
          <h3 className="text-2xl font-display uppercase tracking-wide mb-6">{title}</h3>
          
          {!upcoming && image && (
            <div 
              className="relative aspect-video w-full max-w-2xl cursor-pointer overflow-hidden group bg-zinc-900"
              onClick={() => onImageClick(image)}
            >
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Timeline;
