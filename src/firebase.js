// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC15twigdCgZjbfcRcYDgba7ULwOoB3oVQ",
  authDomain: "login-page-5a7bc.firebaseapp.com",
  projectId: "login-page-5a7bc",
  storageBucket: "login-page-5a7bc.firebasestorage.app",
  messagingSenderId: "902103739181",
  appId: "1:902103739181:web:bd9461596a0b4b6d71c1a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);