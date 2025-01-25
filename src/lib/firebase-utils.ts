import { initializeApp } from 'firebase/app';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';


// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZ-dW0yrz9x03-0Y7-tYAymTaVCUKp0DA",
    authDomain: "dat-tools.firebaseapp.com",
    projectId: "dat-tools",
    storageBucket: "dat-tools.firebasestorage.app",
    messagingSenderId: "788326049198",
    appId: "1:788326049198:web:82ab1ac5b289e1f7a4143f",
    measurementId: "G-D1EHPLLN9D",
  };
  
  export default firebaseConfig;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Firestore database

export const db = getFirestore(app);


export interface RegistrationData {
  name: string;
  email: string;
  phone: string;
  institution: string;
  category: 'Undergraduate' | 'Postgraduate' | 'Research Scholar' | 'Startup/Industrial';
  paymentScreenshot: string;
  transactionId: string;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Completed';
  amount: number;
  timestamp: string;
  attended: boolean;
  feedback: string;
  feedbackContent: string
}


export async function saveRegistration(email: string, data: RegistrationData) {
  try {
    const registrationRef = doc(db, 'workshop1', email);
    await setDoc(registrationRef, {
      ...data,
      createdAt: new Date().toISOString(),
    }, { merge: true });
    return true;
  } catch (error) {
    console.error('Registration save error:', error);
    throw error;
  }
}

export async function checkRegistrationStatus(email: string): Promise<string | null> {
  try {
    const registrationRef = doc(db, 'workshop1', email);
    const docSnap = await getDoc(registrationRef);
    
    if (docSnap.exists()) {
      return docSnap.data()?.status || 'Not Found';
    }
    return null;
  } catch (error) {
    console.error('Registration status check error:', error);
    return null;
  }
}

export const updateRegistrationFeedback = async (
  email: string, 
  feedback: string, 
  feedbackContent: string
) => {
  const docRef = doc(db, 'workshop1', email)
  await updateDoc(docRef, {
    feedback,
    feedbackContent,
    attendedFeedbackSubmitted: true
  })
}