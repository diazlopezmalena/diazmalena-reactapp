// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDia9gfC5l_z7NpDRXLxIZbpXOur6VZZ0g",
  authDomain: "backendbookstore.firebaseapp.com",
  projectId: "backendbookstore",
  storageBucket: "backendbookstore.appspot.com",
  messagingSenderId: "127703007284",
  appId: "1:127703007284:web:3064038287797411670a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)