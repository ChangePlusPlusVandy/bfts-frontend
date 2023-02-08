// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // Insert secrets here
  apiKey: "AIzaSyBbnwgqvj0WE7s5ldM7zzv_4IYGKk3YxQs",
  authDomain: "bfts-e5301.firebaseapp.com",
  projectId: "bfts-e5301",
  storageBucket: "bfts-e5301.appspot.com",
  messagingSenderId: "682538519243",
  appId: "1:682538519243:web:385c232049722288f6a94e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };