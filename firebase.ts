import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYE181UEt9j0UbhZBfOb1rLjNQ24yg4HA",
  authDomain: "notes-7cc4d.firebaseapp.com",
  projectId: "notes-7cc4d",
  storageBucket: "notes-7cc4d.firebasestorage.app",
  messagingSenderId: "21913150409",
  appId: "1:21913150409:web:202e9d7f30dfc2079b3e18",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
