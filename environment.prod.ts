// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9gACckgCHAoEsPWdETAcVjnn2rbROEgs",
  authDomain: "hamallimoodtora.firebaseapp.com",
  databaseURL: "https://hamallimoodtora-default-rtdb.firebaseio.com",
  projectId: "hamallimoodtora",
  storageBucket: "hamallimoodtora.appspot.com",
  messagingSenderId: "1047706209686",
  appId: "1:1047706209686:web:187d41f9ed0cd0eea1a1b7",
  measurementId: "G-7WJCPQXYVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);