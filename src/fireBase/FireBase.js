// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVapANddxyVuMRbL_t7CTofD_FOwi0gYQ",
  authDomain: "makemytrip-e8400.firebaseapp.com",
  projectId: "makemytrip-e8400",
  storageBucket: "makemytrip-e8400.appspot.com",
  messagingSenderId: "784288710216",
  appId: "1:784288710216:web:d4126c1ef02096d324227d",
  measurementId: "G-WE949KCS45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);