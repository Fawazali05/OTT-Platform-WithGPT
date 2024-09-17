// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVlbZp_YB23s8Zpb2-kHXGR1a6_OjbDC4",
  authDomain: "ott-gpt-1462b.firebaseapp.com",
  projectId: "ott-gpt-1462b",
  storageBucket: "ott-gpt-1462b.appspot.com",
  messagingSenderId: "628428860144",
  appId: "1:628428860144:web:888a30e585792a722e3035",
  measurementId: "G-BZLV4QWQ9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()