// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-51671.firebaseapp.com",
  projectId: "mern-estate-51671",
  storageBucket: "mern-estate-51671.appspot.com",
  messagingSenderId: "983024831276",
  appId: "1:983024831276:web:daed40de4472496493ba89"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);