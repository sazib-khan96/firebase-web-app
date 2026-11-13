// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6HjRO4xWkHq4LnOUqdFcS-KdQl7UtvpI",
  authDomain: "myprojects-8c5a1.firebaseapp.com",
  projectId: "myprojects-8c5a1",
  storageBucket: "myprojects-8c5a1.firebasestorage.app",
  messagingSenderId: "785273193042",
  appId: "1:785273193042:web:3dc4f1f6cf920ca439158b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);