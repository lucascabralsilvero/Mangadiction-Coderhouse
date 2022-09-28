// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3eRQi2TeKi5EBo6NDnbS4DiY7iniVXEE",
  authDomain: "mangadiction-coderhouse.firebaseapp.com",
  projectId: "mangadiction-coderhouse",
  storageBucket: "mangadiction-coderhouse.appspot.com",
  messagingSenderId: "448197660991",
  appId: "1:448197660991:web:e9ede6ff4196500c69c38a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);