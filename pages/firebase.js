// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFtKvP8zyeGDZ4gOglKK_KvWF3srRwBVA",
  authDomain: "testproject12-818b3.firebaseapp.com",
  databaseURL: "https://testproject12-818b3-default-rtdb.firebaseio.com",
  projectId: "testproject12-818b3",
  storageBucket: "testproject12-818b3.appspot.com",
  messagingSenderId: "845291488949",
  appId: "1:845291488949:web:670a34f588d40757a1a0fc",
  measurementId: "G-MNN95N3Z4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);