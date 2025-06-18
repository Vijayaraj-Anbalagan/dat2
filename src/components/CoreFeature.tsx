'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, SatelliteDish, Zap } from 'lucide-react';

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = ({
  title,
  description,
  icon,
  className,
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25 } },
  };

  return (
    <motion.div
      variants={variants}
      className={cn(
        'group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-gray-700 bg-[#0e0e0e] px-6 pb-10 pt-6 shadow-md transition-all duration-500 hover:border-gray-500',
        className,
      )}
    >
      <div className="absolute -right-1/2 top-0 z-0 size-full bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 flex h-full flex-col justify-between text-white">
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white text-xl shadow shadow-gray-900 transition-all duration-500 group-hover:bg-gray-700 group-hover:shadow-gray-800">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <div className="mt-4 flex items-center text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-pink-600 ">
          {/* <span className="mr-1">Learn more</span> */}
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-500 to-indigo-400/30 blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};

const items = [
  {
    title: 'Stratospheric HAPS Development',
    description: 'Building high-altitude platforms (HAPS) for long-endurance missions in research, surveillance, and advanced communications.',
     icon: <SatelliteDish className="size-6" />,
    size: 'large' as const,
  },
  {
    title: 'Payload Hosting Services (HaaS)',
    description: 'Host your payloads on our stratospheric platforms with plug-and-play ease.',
    icon: <Zap className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Stratospheric Subsystems',
    description: 'Reliable integration-ready subsystems for HAPS-based missions.',
    icon: <Layers className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Flight Data & Planning Software',
    description: 'Advanced software suite for mission planning and flight data analytics.',
    icon: <Code className="size-6" />,
    size: 'medium' as const,
  },
];

export default function BentoGrid1() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className={` bg-black px-4 mt-16`}>
      <div className="mx-auto max-w-6xl px-4 py-12 bg-black">
        <h2 className="mb-4 text-center text-4xl font-bold leading-[1.2] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-pink-600  tracking-tighter md:text-5xl">
          What We Do 
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-center text-lg font-medium text-gray-400">
          Explore our core stratospheric solutions built for the future.
        </p>
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              size={item.size}
              className={cn(
                item.size === 'large'
                  ? 'col-span-4'
                  : item.size === 'medium'
                  ? 'col-span-3'
                  : 'col-span-2',
                'h-full sm:h-[210px]',
              )}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
