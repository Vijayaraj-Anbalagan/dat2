"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Copy, ArrowRight, ArrowLeft, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { SiPhonepe, SiPaytm } from "react-icons/si"
import { FaGooglePay } from "react-icons/fa"
import { toast, Toaster } from "react-hot-toast"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Inter } from "next/font/google"
import { generateUPIQRCode } from "@/lib/upi-qr"
import { saveRegistration, type RegistrationData, checkRegistrationStatus } from "@/lib/firebase-utils"
import { uploadToCloudinary } from "@/lib/cloudinary-utils"
import { AlreadyRegisteredDialog } from "./AlreadyRegisteredDialog"

type ReferralSource = "College" | "Faculty" | "Friends" | "SocialMedia" | `Others - ${string}`

type Category = "Undergraduate" | "Postgraduate" | "Research Scholar" | "Startup/Industrial"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const pricingDetails = {
  Undergraduate: { 
    normal: 1999, 
    earlyBird: 1499,
    kcgDiscount: {
      earlyBird: 759,
      normal: 999
    }
  },
  Postgraduate: { 
    normal: 2499, 
    earlyBird: 1999,
    kcgDiscount: {
      earlyBird: 999,
      normal: 1249
    }
  },
  "Research Scholar": { 
    normal: 2499, 
    earlyBird: 1999,
    kcgDiscount: {
      earlyBird: 999,
      normal: 1249
    }
  },
  "Startup/Industrial": { 
    normal: 2999, 
    earlyBird: 2499,
    kcgDiscount: {
      earlyBird: 1249,
      normal: 1499
    }
  },
}

const upiDetails = {
  upiId: "vijayaraj.anbalagan@oksbi",
  phoneNumber: "+91 7358551897",
  apps: [
    { name: "Google Pay", icon: FaGooglePay },
    { name: "PhonePe", icon: SiPhonepe },
    { name: "Paytm", icon: SiPaytm },
  ],
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
  toast.success("Copied to clipboard")
}

const openUPIApp = ( isEarlyBirdActive: boolean, formData: RegistrationData & { category: Category} ) => {
    const price = isEarlyBirdActive
        ? pricingDetails[formData.category].earlyBird
        : pricingDetails[formData.category].normal

    const upiLink = `upi://pay?pa=${upiDetails.upiId}&pn=${formData.name}&am=${price}&cu=INR`
    window.open(upiLink, "_blank")
}


const FileUploader = ({ 
  onFileUpload, 
  existingImage 
}: { 
  onFileUpload: (file: File) => void, 
  existingImage?: string 
}) => {
  const [dragOver, setDragOver] = useState(false)
  const [preview, setPreview] = useState<string | null>(existingImage || null)

  const handleFileChange = (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size exceeds 5MB")
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)

    onFileUpload(file)
  }

 
  
  

  return (
    <div 
      className={`
        border-2 border-dashed rounded-lg p-6 text-center 
        transition-colors duration-300 group
        ${dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}
      `}
      onDragOver={(e) => {
        e.preventDefault()
        setDragOver(true)
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDragOver(false)
        const file = e.dataTransfer.files[0]
        handleFileChange(file)
      }}
    >
      {preview ? (
        <img 
          src={preview} 
          alt="Payment screenshot" 
          className="mx-auto max-h-48 rounded-lg shadow-md"
        />
      ) : (
        <>
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            id="fileUpload"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleFileChange(e.target.files[0])
              }
            }}
          />
          <Label 
            htmlFor="fileUpload" 
            className="
              cursor-pointer text-gray-600 hover:text-blue-600 
              flex flex-col items-center space-y-2
            "
          >
            <Upload className="w-12 h-12 text-gray-400 group-hover:text-blue-500" />
            <span>Drag and drop or click to upload payment screenshot</span>
          </Label>
        </>
      )}
    </div>
  )
}

export function WorkshopRegistrationDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<RegistrationData & { category: Category , isKcgSudent : boolean, otherReferralDetails?: string }>({
    name: "",
    email: "",
    phone: "",
    institution: "",
    category: "Undergraduate",
    paymentScreenshot: "",
    transactionId: "",
    amount: 0,
    status: "Pending",
    timestamp: new Date().toISOString(),
    attended: false,
    feedback: "0",
    feedbackContent: "",
    isKcgSudent : false,
    referralSource: "College",
  })
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    category: "",
    referralSource: "",
    otherReferralDetails: "",
  })
  const [upiQRCode, setUpiQRCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isEarlyBirdActive, setIsEarlyBirdActive] = useState(false)

  useEffect(() => {
    const checkEarlyBirdStatus = () => {
        const earlyBirdDeadline = new Date("2025-01-30T23:59:59")
        const now = new Date()
        setIsEarlyBirdActive(now < earlyBirdDeadline)
      }
  
      checkEarlyBirdStatus()
      const intervalId = setInterval(checkEarlyBirdStatus, 3600000)
  
      return () => clearInterval(intervalId)
  }, [])

  // Local Storage Effects
  useEffect(() => {
    const savedStep = localStorage.getItem('registrationStep')
    const savedFormData = localStorage.getItem('registrationFormData')
    const savedEmail = localStorage.getItem('dashagrivemail')

    if (savedStep) setStep(parseInt(savedStep))
    if (savedFormData) {
      try {
        const parsedData = JSON.parse(savedFormData)
        setFormData(parsedData)
      } catch (error) {
        console.error('Failed to parse saved form data',error)
      }
    }
    if (savedEmail) {
      checkRegistrationStatus(savedEmail).then((status) => {
        if (status === "Completed") {
          toast.success("Registration already completed")
        } else if (status === "Pending") {
          setIsOpen(true)
          setStep(3)
        }
      })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('registrationStep', step.toString())
    localStorage.setItem('registrationFormData', JSON.stringify(formData))
  }, [step, formData])

  // Early Bird Effect
  useEffect(() => {
    const checkEarlyBirdStatus = () => {
      const earlyBirdDeadline = new Date("2025-01-30T23:59:59")
      const now = new Date()
      setIsEarlyBirdActive(now < earlyBirdDeadline)
    }

    checkEarlyBirdStatus()
    const intervalId = setInterval(checkEarlyBirdStatus, 3600000)

    return () => clearInterval(intervalId)
  }, [])

  // Validation and Input Handlers
  const validateForm = () => {
    const errors = {
      name: formData.name.trim() ? "" : "Name is required",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Enter a valid email address",
      phone: /^[6-9]\d{9}$/.test(formData.phone) ? "" : "Enter a valid 10-digit Indian mobile number",
      institution: formData.institution.trim() ? "" : "Institution is required",
      category: formData.category ? "" : "Select a category",
      referralSource: formData.referralSource ? "" : "Please select how you knew about us",
      otherReferralDetails: formData.referralSource === "Others - " && !formData.otherReferralDetails?.trim()
        ? "Please specify how you knew about us" 
        : ""
    }

    const isKcgStudent = formData.email.toLowerCase().endsWith("kcgcollege.in") ||
    ["kcg", "kcg college of technology", "kcg college"].some(institution =>
      formData.institution.toLowerCase().includes(institution)
    )
    setFormData(prev => ({ ...prev, isKcgStudent }))

    setFormErrors(errors)
    return Object.values(errors).every((error) => error === "")
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ 
      ...prev, 
      [name]: value, 
      timestamp: new Date().toISOString() 
    }))
    if (name in formErrors) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleFileUpload = async (file: File) => {
    try {
      const cloudinaryUrl = await uploadToCloudinary(file, "workshop-payments")
      setFormData((prev) => ({
        ...prev,
        paymentScreenshot: cloudinaryUrl,
        timestamp: new Date().toISOString(),
      }))
      toast.success("Payment screenshot uploaded successfully")
    } catch (error) {
      console.error("Upload error:", error)
      toast.error("Failed to upload screenshot")
    }
  }

  const calculatePricing = () => {
    const isEarlyBird = isEarlyBirdActive
    const category = formData.category
    const isKcgStudent = formData.email.toLowerCase().endsWith("@kcgcollege.com")

    if (isKcgStudent) {
      return isEarlyBird 
        ? pricingDetails[category].kcgDiscount.earlyBird 
        : pricingDetails[category].kcgDiscount.normal
    }

    return isEarlyBird 
      ? pricingDetails[category].earlyBird 
      : pricingDetails[category].normal
  }

  const calculateDiscountDetails = () => {
    const category = formData.category
    const isKcgStudent = formData.email.toLowerCase().endsWith("@kcgcollege.com")

    if (!isKcgStudent) return null

    const originalPrice = isEarlyBirdActive 
      ? pricingDetails[category].earlyBird 
      : pricingDetails[category].normal

    const discountedPrice = isEarlyBirdActive 
      ? pricingDetails[category].kcgDiscount.earlyBird 
      : pricingDetails[category].kcgDiscount.normal

    const savedAmount = originalPrice - discountedPrice
    const discountPercentage = Math.round((savedAmount / originalPrice) * 100)

    return {
      originalPrice,
      discountedPrice,
      savedAmount,
      discountPercentage
    }
  }

  const generateQRCode = async () => {
    setIsLoading(true)
    try {
      const price = calculatePricing()

      const qrCode = await generateUPIQRCode(upiDetails.upiId, price, formData.name)

      setFormData((prev) => ({
        ...prev,
        amount: price,
        timestamp: new Date().toISOString(),
      }))

      setUpiQRCode(qrCode)
    } catch (error) {
      console.error("QR Code generation error:", error)
      toast.error("Failed to generate QR code")
    } finally {
      setIsLoading(false)
    }
  }

  const submitRegistration = async () => {
    if (!formData.paymentScreenshot || !formData.transactionId) {
      toast.error("Please upload payment screenshot and enter transaction ID")
      return
    }

    setIsLoading(true)
    try {
      const finalFormData: RegistrationData = {
        ...formData,
        // If referral source is "Others", combine it with the details
        referralSource: formData.referralSource.startsWith("Others - ")
          ? `Others - ${formData.otherReferralDetails}`
          : formData.referralSource
      }
      await saveRegistration(formData.email, finalFormData)
      localStorage.setItem("dashagrivemail", formData.email)

      toast.success("Registration submitted successfully!")
      setStep(4)
    } catch (error) {
      console.error("Registration submission error:", error)
      toast.error("Registration submission failed")
    } finally {
      setIsLoading(false)
    }
  }


  const renderPricingDetails = () => {
    const discountDetails = calculateDiscountDetails()
    const price = calculatePricing()
    const isKcgStudent = formData.email.toLowerCase().endsWith("@kcgcollege.com")

    return (
      <div className="mt-4 space-y-4">
  {upiQRCode ? (
    <div className="relative flex flex-col items-center">
      <div className="w-full max-w-[300px] relative">
        <img
          src={upiQRCode || "/placeholder.svg"}
          alt="UPI QR Code"
          className="mx-auto mb-2 max-w-full rounded-lg"
        />
      </div>

      <div className="bg-zinc-800 rounded-lg p-4 w-full space-y-3">
        <div className="flex justify-between items-center">
          <span>Registration Fee</span>
          <div className="flex items-center space-x-2">
            {isKcgStudent && discountDetails ? (
              <>
                <span className="line-through text-gray-500">
                  ₹{discountDetails.originalPrice}
                </span>
                <span className="font-bold text-green-500">
                  ₹{discountDetails.discountedPrice}
                </span>
              </>
            ) : (
              <span className={isEarlyBirdActive ? 'text-green-500' : 'text-white'}>
                ₹{price}
              </span>
            )}
          </div>
        </div>

        {isKcgStudent && discountDetails && (
          <div className="bg-green-900/30 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-green-400">KCG Student Discount</span>
              <span className="font-bold text-green-300">
                {discountDetails.discountPercentage}% OFF
              </span>
            </div>
            <div className="text-sm text-green-200 mt-1">
              You saved ₹{discountDetails.savedAmount}
            </div>
          </div>
        )}

        {isEarlyBirdActive && !isKcgStudent && (
          <div className="bg-blue-900/30 p-3 rounded-lg text-blue-300">
            Early Bird Discount Applied
          </div>
        )}
      </div>

      <div className="mt-4 w-full">
        <div className="flex justify-between items-center bg-zinc-700 p-2 rounded-lg">
          <span>UPI ID</span>
          <div className="flex items-center">
            <span className="mr-2">{upiDetails.upiId}</span>
            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(upiDetails.upiId)}>
              <Copy size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-400">Generating QR Code...</div>
  )}
</div>
    )
  }

  // Rendering Logic
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-3">
            <DialogHeader>
              <DialogTitle className="text-white">Registration Details</DialogTitle>
              <DialogDescription>Enter your personal information</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["name", "email", "phone", "institution"].map((field) => (
                <div key={field}>
                  <Label htmlFor={field} className="text-white">{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                  <Input
                    id={field}
                    name={field}
                    value={String(formData[field as keyof typeof formData])}
                    onChange={handleInputChange}
                    className={`
                      ${formErrors[field as keyof typeof formErrors] 
                        ? "border-red-500" 
                        : "border-gray-700 focus:border-blue-500"
                      } bg-zinc-900 text-white
                    `}
                  />
                  {formErrors[field as keyof typeof formErrors] && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors[field as keyof typeof formErrors]}
                    </p>
                  )}
                </div>
              ))}
              <div>
                <Label className="text-white">Category</Label>
                <Select
                  name="category"
                  value={formData.category}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value as Category }))}
                >
                  <SelectTrigger className="bg-zinc-900 text-white border-gray-700 focus:border-blue-500">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 text-white">
                    {Object.keys(pricingDetails).map((category) => (
                      <SelectItem 
                        key={category} 
                        value={category} 
                        className="hover:bg-zinc-800"
                      >
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div >
  <Label className="text-white">How did you know about us?</Label>
  <Select
    name="referralSource"
    value={formData.referralSource}
    onValueChange={(value: ReferralSource) => {
      setFormData(prev => ({
        ...prev,
        referralSource: value,
        otherReferralDetails: !value.startsWith("Others - ") ? "" : prev.otherReferralDetails
      }))
      setFormErrors(prev => ({ ...prev, referralSource: "", otherReferralDetails: "" }))
    }}
  >
    <SelectTrigger className="bg-zinc-900 text-white border-gray-700 focus:border-blue-500">
      <SelectValue placeholder="Select how you knew about us" />
    </SelectTrigger>
    <SelectContent className="bg-zinc-900 text-white">
      {["College", "Faculty", "Friends", "SocialMedia", "Others - "].map((source) => (
        <SelectItem
          key={source}
          value={source}
          className="hover:bg-zinc-800"
        >
          {source}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
  {formErrors.referralSource && (
    <p className="text-red-500 text-sm mt-1">{formErrors.referralSource}</p>
  )}
</div>
            </div>
            
{formData.referralSource.startsWith("Others - ") && (
  <div className="col-span-2">
    <Label className="text-white">Please specify</Label>
    <Input
      name="otherReferralDetails"
      value={formData.otherReferralDetails}
      onChange={handleInputChange}
      placeholder="Tell us how you knew about us"
      className={`
        ${formErrors.otherReferralDetails ? "border-red-500" : "border-gray-700 focus:border-blue-500"}
        bg-zinc-900 text-white
      `}
    />
    {formErrors.otherReferralDetails && (
      <p className="text-red-500 text-sm mt-1">{formErrors.otherReferralDetails}</p>
    )}
  </div>
)}
            <div className="flex justify-end mt-4">
              <Button
                onClick={() => {
                  if (validateForm()) {
                    setStep(2)
                    generateQRCode()
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Next <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        )

        case 2:
          return (
            <>
            <DialogHeader>
              <DialogTitle>Payment Details</DialogTitle>
              <DialogDescription>Complete your payment</DialogDescription>
            </DialogHeader>
            {renderPricingDetails()}
            <div className="flex justify-center mt-4">
              <div className="grid grid-cols-3 gap-4">
              {upiDetails.apps.map((app) => (
                <div 
                key={app.name} 
                onClick={() => openUPIApp(isEarlyBirdActive, formData)} 
                className="cursor-pointer text-gray-400 hover:text-blue-500 flex flex-col items-center"
                >
                <app.icon className="w-12 h-12" />
                </div>
              ))}
              </div>
            </div>
            <div className="flex justify-between mt-4">
                <Button onClick={() => setStep(1)} className="bg-white text-black hover:bg-slate-50">
                <ArrowLeft className="mr-2" /> Back
                </Button>
              <Button onClick={() => setStep(3)}>
                Next <ArrowRight className="ml-2" />
              </Button>
            </div>
            </>
          )
        case 3:
          return (
            <>
            <DialogHeader>
              <DialogTitle>Payment Proof</DialogTitle>
              <DialogDescription>Upload your payment screenshot and enter transaction ID</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="paymentScreenshot">Payment Screenshot</Label>
                <FileUploader onFileUpload={handleFileUpload} existingImage={formData.paymentScreenshot} />
              </div>
              <div>
                <Label htmlFor="transactionId">Transaction ID</Label>
                <Input
                id="transactionId"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleInputChange}
                className="bg-zinc-900 text-white border-gray-700 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button onClick={() => setStep(2)} className="bg-white text-black hover:bg-slate-50">
                <ArrowLeft className="mr-2" /> Back
              </Button>
              <Button onClick={submitRegistration} disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit Registration"}
              </Button>
            </div>
            </>
          )
        case 4:
          return (
            <>
            <DialogHeader>
              <DialogTitle>Registration Complete</DialogTitle>
              <DialogDescription>Thank you for registering!</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <p>Your registration has been submitted successfully.</p>
              <p className="mt-2">Check your Status using the below link by Entering your Email.</p>
            </div>
            <div className="mt-4">
              <AlreadyRegisteredDialog />
            </div>
            <div className="flex justify-end mt-4">
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
            </>
          )
      // Other steps remain similar, with UI updates matching step 1's style
      // I'll omit them for brevity, but they would follow the same dark theme
      // with white text and blue accents
      default:
        return null
    }
  }

  return (
    <div>
      <Button 
        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg mb-4"  
        onClick={() => setIsOpen(true)}
      >
        Register Now
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          className={`${inter.className}
            bg-black text-white max-w-md sm:max-w-xl 
            border border-gray-800 rounded-xl shadow-2xl
          `}
        >
          {renderStep()}
        </DialogContent>
      </Dialog>
      <Toaster position="top-right" />
    </div>
  )
}

