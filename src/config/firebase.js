// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKCELXpXarkC2InS3GRLfg1I24N01FA0A",
    authDomain: "vetannow-4fadd.firebaseapp.com",
    projectId: "vetannow-4fadd",
    storageBucket: "vetannow-4fadd.firebasestorage.app",
    messagingSenderId: "473566291471",
    appId: "1:473566291471:web:9fab948a8b754b919f257a",
    measurementId: "G-JXHH481QKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
