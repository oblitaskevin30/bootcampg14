// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhGuc5dKfPbMvBFlZ-maokZovHk4etleg",
    authDomain: "heores-jonathan-oblitas.firebaseapp.com",
    projectId: "heores-jonathan-oblitas",
    storageBucket: "heores-jonathan-oblitas.appspot.com",
    messagingSenderId: "243175435476",
    appId: "1:243175435476:web:2fb93819b71a54cff9df41",
    measurementId: "G-SDV3RFVTFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)