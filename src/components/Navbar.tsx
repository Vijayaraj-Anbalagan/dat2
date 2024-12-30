import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import Image from "next/image";
import { TextShimmer } from '@/components/ui/text-shimmer';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'About', route: false },
        { name: 'Technology', route: false },
        { name: 'Product', route: true },
        { name: 'Team', route: true },
        { name: 'Careers', route: true },
    ];

    const handleMenuClick = (route: boolean, name: string) => {
        if (route) {
            window.location.href = `/${name.toLowerCase()}`;
        } else {
            document.querySelector(`#${name.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
        }

        setTimeout(() => setIsOpen(false), 300); // Close the menu after a delay
    };

    return (
        <nav className="fixed left-0 right-0 top-0 z-[100] backdrop-blur-md bg-black/15 border-b border-white/5">
            <motion.div 
                className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative group">
                    <div className="absolute -inset-1 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                    <Image
                        src="/logo.png"
                        alt="Dashagriv Aerospace"
                        width={150}
                        height={40}
                        className="relative mix-blend-difference"
                    />
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item, index) => (
                        <motion.button
                            key={index}
                            onClick={() => handleMenuClick(item.route, item.name)}
                            className="text-sm text-white hover:text-blue-400 transition-all relative group"
                            whileHover={{ scale: 1.05 }}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
                        </motion.button>
                    ))}
                </div>

                <div className="md:hidden">
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.div
                            initial={false}
                            animate={isOpen ? "open" : "closed"}
                            variants={{
                                open: { rotate: 180 },
                                closed: { rotate: 0 }
                            }}
                        >
                            {isOpen ? (
                                <FiX className="w-6 h-6" />
                            ) : (
                                <FiMenu className="w-6 h-6" />
                            )}
                        </motion.div>
                    </motion.button>
                </div>

                <motion.button 
                    className="hidden md:flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-all relative group"
                    whileHover={{ x: 5 }}
                >
                    <TextShimmer duration={5}>
                        Contact Us 
                    </TextShimmer>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden backdrop-blur-md border-b border-white/5"
                    >
                        <div className="px-6 py-4 space-y-4">
                            {menuItems.map((item, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => handleMenuClick(item.route, item.name)}
                                    className="block w-full text-left text-white hover:text-blue-400 py-2 transition-colors"
                                    whileHover={{ x: 10 }}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                            <motion.button 
                                className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-all w-full py-2"
                                whileHover={{ x: 10 }}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                <TextShimmer duration={5}>
                                    Contact Us 
                                </TextShimmer>
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Nav;
