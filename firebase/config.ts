// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWW0v7niWgQ89a0yC-JxxJwjWKiQpvPGU",
  authDomain: "fallo-a5953.firebaseapp.com",
  databaseURL:
    "https://fallo-a5953-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fallo-a5953",
  storageBucket: "fallo-a5953.appspot.com",
  messagingSenderId: "994172827799",
  appId: "1:994172827799:web:385b03f1c45d57e22991d2",
  measurementId: "G-EVMSDMWHF6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase();
