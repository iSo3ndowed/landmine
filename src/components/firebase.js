// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAxgZgkmHaSvVjSGv3iE-I6KoQ_a7ZyLtk",
  authDomain: "landmine-ac860.firebaseapp.com",
  projectId: "landmine-ac860",
  storageBucket: "landmine-ac860.appspot.com",
  messagingSenderId: "925062971778",
  appId: "1:925062971778:web:3dbe0233ae338b32ef8f9b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)