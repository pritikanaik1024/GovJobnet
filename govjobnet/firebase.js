import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBRRdA0IXvFOehu01migpso5h3QglJEhew",
  authDomain: "govjobnet.firebaseapp.com",
  projectId: "govjobnet",
  storageBucket: "govjobnet.appspot.com",
  messagingSenderId: "883577938123",
  appId: "1:883577938123:web:239eeadade30a7df28fb4e",
  measurementId: "G-EGP854ZVRM"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseApp;