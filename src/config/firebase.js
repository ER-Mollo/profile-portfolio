// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNcxaWAjqQO7MVFZp_NfAQEV5S4O97r6s",
  authDomain: "portfolio-ac79c.firebaseapp.com",
  projectId: "portfolio-ac79c",
  storageBucket: "portfolio-ac79c.appspot.com",
  messagingSenderId: "714179251010",
  appId: "1:714179251010:web:97b41025283a464e0416db",
  measurementId: "G-7LCPL4RZW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};
