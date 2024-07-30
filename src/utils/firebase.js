// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-2b911.firebaseapp.com",
  projectId: "blog-2b911",
  storageBucket: "blog-2b911.appspot.com",
  messagingSenderId: "918570002836",
  appId: "1:918570002836:web:905222a467f6af913e8781"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);