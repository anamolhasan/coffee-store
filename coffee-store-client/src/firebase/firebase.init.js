// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIP-o1dDIgdGNYX4wqaDkYzsAtpBlJtVQ",
  authDomain: "coffee-store-87769.firebaseapp.com",
  projectId: "coffee-store-87769",
  storageBucket: "coffee-store-87769.firebasestorage.app",
  messagingSenderId: "507109607476",
  appId: "1:507109607476:web:422831580fe532d68da261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);