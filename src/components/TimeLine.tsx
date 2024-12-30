import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Cursor } from './ui/cursor';
import Image from 'next/image';

const Timeline = () => {
  const milestones = [
    {
      title: "Designed and Developed Nanosatellite",
      date: "March 2023",
      category: "Development",
      image: "/cubesat.png",
      location: "KCG Space Technology Center",
    },
    {
      title: "Demonstrated CubeSat at Ground Station",
      date: "May 2023",
      category: "Demonstration",
      image: "/demo.png",
      location: "KCG Space Technology Center",
      description: "In the presence of Dr. A.S. Kiran Kumar, Former Chairman of ISRO.",
    },
    {
      title: "Presented HAPS Project",
      date: "November 2023",
      category: "Presentation",
      image: "/present.png",
      location: "KCG Space Technology Center",
      description: "Presented to Padma Shree Dr. A. S. Sivathanu Pillai, Father of BrahMos.",
    },
    {
      title: "Initial Prototype Developed",
      date: "May 2024",
      category: "Development",
      image: "/hapsproto.png",
      location: "Testing Facility",
    },
    {
      title: "Successful SATCOM Demonstration",
      date: "August 2024",
      category: "Demonstration",
      image: "/demohaps.png",
      location: "Testing Facility",
    },
    {
      title: "Incubated at KCG",
      date: "September 2024",
      category: "Achievement",
      image: "/kcg.jpg",
      location: "KCG College",
    },
    {
      title: "Joined HAPS Alliance",
      date: "November 2024",
      category: "Partnership",
      image: "/hapsalliance.webp",
      location: "Virtual Event",
    },
    {
      title: "Joined The Airship Association",
      date: "December 2024",
      category: "Partnership",
      image: "/airship.png",
      location: "Virtual Event",
    },
    {
      title: "Low Altitude Trials",
      date: "January 2025",
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
        Our Journey
      </motion.h1>
      <motion.p
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-10 text-sm text-zinc-400 sm:text-xl"
      >
        Hover over the titles to view milestone images.
      </motion.p>

      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <TimelineItem key={index} {...milestone} />
        ))}
      </div>
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
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  date,
  category,
  location,
  image,
  description,
  upcoming,
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={`group relative border-b border-zinc-800 pb-6 ${upcoming ? "opacity-50" : ""}`}
    >
      <div className="flex items-center justify-between px-3">
        <div className="flex-1">
          <div className="flex items-center gap-4">
            {!upcoming && image && (
              <Cursor
                attachToParent
                variants={{
                  initial: { height: 0, opacity: 0, scale: 0.3 },
                  animate: { height: "auto", opacity: 1, scale: 1 },
                  exit: { height: 0, opacity: 0, scale: 0.3 },
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  bounce: 0.1,
                }}
                className="overflow-hidden"
                springConfig={{
                  bounce: 0.01,
                }}
              >
                <Image
                  src={image}
                  alt={title}
                  width={160}
                  height={160}
                  className="h-40 w-40"
                />
              </Cursor>
            )}
            <div>
              <h3 className="mb-1.5 text-xl text-zinc-50">{title}</h3>
              <p className="text-sm uppercase text-zinc-500">{date}</p>
              {description && <p className="mt-1 text-sm text-zinc-400">{description}</p>}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
          <span className="hidden sm:inline">{category}</span>
          <p>{location}</p>
          <MapPin className="h-4 w-4" />
        </div>
      </div>
    </motion.div>
  );
};

export default Timeline;
