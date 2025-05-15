// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR33MsMiGtvn9SiPavl2kjVG_BK_FMk8s",
  authDomain: "fullstackwebcourse-7b1b5.firebaseapp.com",
  projectId: "fullstackwebcourse-7b1b5",
  storageBucket: "fullstackwebcourse-7b1b5.firebasestorage.app",
  messagingSenderId: "1839996522",
  appId: "1:1839996522:web:040840946818fc6a39b413",
  measurementId: "G-XLH7NR38TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);