"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "react-hot-toast"
import { checkRegistrationStatus, db, updateRegistrationFeedback } from "@/lib/firebase-utils"
import { generateRegQR } from "@/lib/upi-qr"
import { Calendar, MapPin, Clock, Phone, Mail, Star } from "lucide-react"
import { doc, getDoc } from 'firebase/firestore'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export function AlreadyRegisteredDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [identifier, setIdentifier] = useState('')
  interface RegistrationData {
    name: string;
    email: string;
    phone: string;
    amount: number;
    status: 'Pending' | 'Approved' | 'Rejected' | 'Completed';
    catagory: 'Undergraduate' | 'Postgraduate' | 'Research Scholar' | 'Startup/Industrial';
    institution: string;
    attended?: boolean;
    feedback?: string;
    feedbackContent?: string;
  }

  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null)
  const [registrationQR, setRegistrationQR] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [feedbackRating, setFeedbackRating] = useState(0)
  const [feedbackContent, setFeedbackContent] = useState('')

  const FeedbackStars = ({ rating, onRatingChange }: { 
    rating: number, 
    onRatingChange: (newRating: number) => void 
  }) => {
    return (
      <div className="flex space-x-1 mb-4 justify-center items-center text-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star}
            className={`cursor-pointer w-8 h-8 ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            }`}
            onClick={() => onRatingChange(star)}
          />
        ))}
      </div>
    )
    }

  const checkRegistration = async () => {
    if (!identifier.trim()) {
      toast.error("Please enter email or phone number")
      return
    }

    setIsLoading(true)
    try {
      // Determine if input is email or phone
      
      const status = await checkRegistrationStatus(identifier)
      
      if (status === null) {
        toast.error("No registration found")
        return
      }

      // Fetch full registration data
      const docRef = doc(db, 'workshop1', identifier)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        const data = docSnap.data()
        console.log("Registration data:", data);
        if (!data.status) {
            console.error("No status found in registration data")
            toast.error("Invalid registration data")
            return
          }
        setRegistrationData(data as RegistrationData)

        // Generate registration QR
        if (data.status === 'Approved') {
            const registrationQRCode = await generateRegQR(
              data.email, 
              data.name,
              data.phone,
              data.institution,
              data.catagory,
              data.status
            )
            setRegistrationQR(registrationQRCode)
          }
        } else {
          toast.error("Registration details not found")
        }
      } catch (error) {
        console.error('Registration check error:', error)
        toast.error("Error checking registration")
      } finally {
        setIsLoading(false)
      }
    }


  const submitFeedback = async () => {
    if (feedbackRating === 0) {
      toast.error("Please select a rating")
      return
    }

    if (!registrationData?.email) {
      toast.error("No registration data found")
      return
    }

    try {
      await updateRegistrationFeedback(
        registrationData.email, 
        feedbackRating.toString(), 
        feedbackContent
      )
      toast.success("Thank you for your feedback!")
      setIsOpen(false)
    } catch (error) {
      console.error('Feedback submission error:', error)
      toast.error("Failed to submit feedback")
    }
  }


  const renderStatusBadge = () => {
    switch (registrationData?.status) {
      case 'Pending':
        return (
          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-flex items-center">
            <span className="mr-2">🕒</span> Pending Approval
          </div>
        )
      case 'Approved':
        return (
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-flex items-center">
            <span className="mr-2">✅</span> Approved
          </div>
        )
      case 'Rejected':
        return (
          <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full inline-flex items-center">
            <span className="mr-2">❌</span> Rejected
          </div>
        )
        case 'Completed':
        return (
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-flex items-center">
            <span className="mr-2">📝</span> Feedback
          </div>
        )
      default:
        return null
    }
  }

  const renderRegistrationContent = () => {
    if (!registrationData) return null

    switch (registrationData.status) {
      case 'Pending':
        return (
          <div className="space-y-4">
            <p>Your registration is currently under review. We will update you soon.</p>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <div className="flex items-center space-x-2 mb-1">
                <Phone size={16} />
                <a href={`tel:${registrationData.phone}`} className="hover:underline">
                  {registrationData.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href={`mailto:${registrationData.email}`} className="hover:underline">
                  {registrationData.email}
                </a>
              </div>
            </div>
          </div>
        )
      case 'Approved':
        return (
          <div className="space-y-4 md:flex md:space-y-0 md:space-x-4">
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg md:max-w-xl">
              <h2 className="text-xl font-bold text-green-800 mb-4">Congratulations!</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>Date: January 30, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>Time: 9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Venue: KCG Campus, Chennai</span>
                </div>
              </div>
            </div>
            {registrationQR && (
              <div className="mt-4 md:mt-0 md:flex-shrink-0">
                <h3 className="text-center mb-2">Your Registration QR Code</h3>
                <img 
                  src={registrationQR} 
                  alt="Registration QR Code" 
                  className="mx-auto max-w-[200px] rounded-lg"
                />
              </div>
            )}
          </div>
        )
      case 'Rejected':
        localStorage.removeItem('registrationStep')
        localStorage.removeItem('dashagrivemail')
        localStorage.removeItem('registrationFormData')
        return (
          <div className="space-y-4">
            <p className="text-red-600">
              Your registration has been rejected. Please review and update your submission.
            </p>
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Next Steps</h3>
              <p>
                Please verify your payment details and contact information. 
                Reach out to our support team for further assistance.
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <Phone size={16} />
                <a href="tel:+917358551897" className="hover:underline">+91 7358551897</a>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <Mail size={16} />
                <a href="mailto:support@example.com" className="hover:underline">
                  support@example.com
                </a>
              </div>
            </div>
          </div>
        )
        case 'Completed':
            return (
              <div className="space-y-4">
                <p>Thank you for attending our event. We would love to hear your feedback.</p>
                <FeedbackStars 
                  rating={feedbackRating} 
                  onRatingChange={setFeedbackRating} 
                />
                <Label>Feedback</Label>
                <Input
                  value={feedbackContent}
                  onChange={(e) => setFeedbackContent(e.target.value)}
                  placeholder="Your feedback..."
                  className="mt-2"
                />
                <Button onClick={submitFeedback} className="w-full">
                  Submit Feedback
                </Button>
              </div>
            )
          default:
            console.error("Unexpected status:", registrationData.status)
            return <p>Registration Status: {registrationData.status}</p>
    }
  }

  return (
    <>
      <span 
        className="text-blue-600 underline cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Already Registered?
      </span>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent  className={`${inter.className} bg-white text-black max-w-md`}>
          <DialogHeader>
            <DialogTitle>Check Registration Status</DialogTitle>
            <DialogDescription>
              Enter your registered Email
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Email</Label>
              <Input
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Enter Email"
                className="mt-2"
              />
            </div>
            
            <Button 
              onClick={checkRegistration} 
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Checking..." : "Check Status"}
            </Button>
            
            {registrationData && (
              <div className="mt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{registrationData.name}</h3>
                  {renderStatusBadge()}
                </div>
                {renderRegistrationContent()}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}