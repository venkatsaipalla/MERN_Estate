// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "venkat-mern-estate.firebaseapp.com",
  projectId: "venkat-mern-estate",
  storageBucket: "venkat-mern-estate.appspot.com",
  messagingSenderId: "1026763340346",
  appId: "1:1026763340346:web:c1a3cce9e95bb03f4c5303"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);