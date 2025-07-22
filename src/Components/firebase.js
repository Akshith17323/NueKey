import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";           
import { getFirestore } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAtRKEtQg1Z-kz9xGlZFIH096pupXVIBp0",
  authDomain: "nuekagi.firebaseapp.com",
  projectId: "nuekagi",
  storageBucket: "nuekagi.firebasestorage.app",
  messagingSenderId: "180660338244",
  appId: "1:180660338244:web:9f88806756729146378611",
  measurementId: "G-0WCF5Z18KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);
const auth = getAuth(app); 

export { auth, db, app }