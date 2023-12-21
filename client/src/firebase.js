// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-ba970.firebaseapp.com",
    projectId: "mern-estate-ba970",
    storageBucket: "mern-estate-ba970.appspot.com",
    messagingSenderId: "114543238619",
    appId: "1:114543238619:web:8dd8479d027c81e8295bfe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);