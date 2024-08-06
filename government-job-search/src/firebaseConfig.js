// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRRdA0IXvFOehu01migpso5h3QglJEhew",
  authDomain: "govjobnet.firebaseapp.com",
  projectId: "govjobnet",
  storageBucket: "govjobnet.appspot.com",
  messagingSenderId: "883577938123",
  appId: "1:883577938123:web:239eeadade30a7df28fb4e",
  measurementId: "G-EGP854ZVRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);