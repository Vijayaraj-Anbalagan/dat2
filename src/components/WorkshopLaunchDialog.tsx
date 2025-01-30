import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Calendar, MapPin } from 'lucide-react'

const WorkshopLaunchDialog = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-zinc-900 rounded-2xl p-8 max-w-md w-full text-white border border-zinc-800 shadow-2xl"
                    >
                        <h2 className="text-3xl font-bold mb-4 text-blue-400 text-center">
                            Satellite Tracking Workshop
                        </h2>
                        
                        <div className="space-y-4 mb-6">
                            <div className="flex items-center space-x-4">
                                <Calendar className="text-blue-500" />
                                <span>Coming Soon</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Clock className="text-blue-500" />
                                <span>To Be Announced</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <MapPin className="text-blue-500" />
                                <span>Location To Be Announced</span>
                            </div>
                        </div>

                        <div className="bg-zinc-800/50 rounded-lg p-4 mb-6 text-center">
                            <h3 className="text-xl mb-2 text-blue-300">Stay Tuned For More Details</h3>
                        </div>

                        <div className="flex space-x-4">
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="w-full bg-zinc-800 text-zinc-300 py-3 rounded-lg hover:bg-zinc-700 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default WorkshopLaunchDialog
