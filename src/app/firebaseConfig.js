
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCYDY9NY69kgViyQCRYMIhc68mrOG1a2lE",
  authDomain: "koinbx-e0ea6.firebaseapp.com",
  projectId: "koinbx-e0ea6",
  databaseURL: "https://koinbx-e0ea6-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "koinbx-e0ea6.appspot.com",
  messagingSenderId: "213914164312",
  appId: "1:213914164312:web:47cb2991c01a35e940be2d",
  measurementId: "G-E8DNG1Z0M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database}