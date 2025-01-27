import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Calendar, MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'

const WorkshopLaunchDialog = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const router = useRouter()

    useEffect(() => {
        const calculateTimeLeft = () => {
            const earlyBirdDeadline = new Date('2025-01-30T23:59:59')
            const now = new Date()
            const difference = earlyBirdDeadline.getTime() - now.getTime()

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                }
            }

            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const handleWorkshopRedirect = () => {
        router.push('/workshop')
        setIsOpen(false)
    }

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
                                <span>7th February 2025</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Clock className="text-blue-500" />
                                <span>9:00 am - 4:00 pm</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <MapPin className="text-blue-500" />
                                <span>KCG Space Technology Centre</span>
                            </div>
                        </div>

                        <div className="bg-zinc-800/50 rounded-lg p-4 mb-6 text-center">
                            <h3 className="text-xl mb-2 text-blue-300">Early Bird Offer Ends In:</h3>
                            <div className="flex justify-center space-x-2 sm:space-x-4">
                                <div className="bg-zinc-900 px-2 py-1 sm:px-4 sm:py-2 rounded">
                                    <span className="text-xl sm:text-2xl font-bold text-blue-400">{timeLeft.days}</span>
                                    <p className="text-xs text-zinc-400">Days</p>
                                </div>
                                <div className="bg-zinc-900 px-2 py-1 sm:px-4 sm:py-2 rounded">
                                    <span className="text-xl sm:text-2xl font-bold text-blue-400">{timeLeft.hours}</span>
                                    <p className="text-xs text-zinc-400">Hours</p>
                                </div>
                                <div className="bg-zinc-900 px-2 py-1 sm:px-4 sm:py-2 rounded">
                                    <span className="text-xl sm:text-2xl font-bold text-blue-400">{timeLeft.minutes}</span>
                                    <p className="text-xs text-zinc-400">Minutes</p>
                                </div>
                                <div className="bg-zinc-900 px-2 py-1 sm:px-4 sm:py-2 rounded">
                                    <span className="text-xl sm:text-2xl font-bold text-blue-400">{timeLeft.seconds}</span>
                                    <p className="text-xs text-zinc-400">Seconds</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="w-full bg-zinc-800 text-zinc-300 py-3 rounded-lg hover:bg-zinc-700 transition-colors"
                            >
                                Close
                            </button>
                            <button 
                                onClick={handleWorkshopRedirect}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                View Workshop Details
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default WorkshopLaunchDialog
