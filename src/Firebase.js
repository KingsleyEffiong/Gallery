import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {

  apiKey: "AIzaSyAntVdkYB8JEJIoDi6GI2zrPOXkBZIybjQ",

  authDomain: "gallery-c64b1.firebaseapp.com",

  projectId: "gallery-c64b1",

  storageBucket: "gallery-c64b1.appspot.com",

  messagingSenderId: "812339870998",

  appId: "1:812339870998:web:3c51d656c4b79ed916a437",

  measurementId: "G-GCQMXTYL2T"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
