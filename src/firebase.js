// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeApga0-itoqrUV4Dj2Lcl0tGi9yBOoEY",
  authDomain: "react-chat-app-5c7bd.firebaseapp.com",
  projectId: "react-chat-app-5c7bd",
  storageBucket: "react-chat-app-5c7bd.appspot.com",
  messagingSenderId: "164824512492",
  appId: "1:164824512492:web:a9b66fa8c18c9738f4f2c9",
  measurementId: "G-HDJEZDY0VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth}

