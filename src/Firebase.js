// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {}
const firebaseConfig = {
  apiKey: "AIzaSyCoN9TTMS-K4G5Ggia9zxVCYuY8I4aHV-Y",
  authDomain: "photo-gallery-3b616.firebaseapp.com",
  projectId: "photo-gallery-3b616",
  storageBucket: "photo-gallery-3b616.appspot.com",
  messagingSenderId: "172299377160",
  appId: "1:172299377160:web:40e2ee9945e5482b028fbd",
  measurementId: "G-HJQ92J86FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);