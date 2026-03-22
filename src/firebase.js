// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";          // ✅ ADD
import { getFirestore } from "firebase/firestore"; // ✅ ADD
import { getAnalytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCS1mqTVcW3uOESS9Iv6ZVU2IIo-h0QUB8",
  authDomain: "login-page-5a7bc.firebaseapp.com",
  projectId: "login-page-5a7bc",
  storageBucket: "login-page-5a7bc.firebasestorage.app",
  messagingSenderId: "902103739181",
  appId: "1:902103739181:web:bd9461596a0b4b6d71c1a4",
  measurementId: "G-KZ6994BBJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ SERVICES (THIS IS WHAT YOU MISSED)
export const auth = getAuth(app);
export const db = getFirestore(app);

// Optional
const analytics = getAnalytics(app);
