import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6hg6XDZV3P1sYjtkZjHfMLQuQXx3dHMY",
  authDomain: "smartih-c1bae.firebaseapp.com",
  projectId: "smartih-c1bae",
  storageBucket: "smartih-c1bae.firebasestorage.app",
  messagingSenderId: "290369190411",
  appId: "1:290369190411:web:f9c6ba9cdca0bbfaf8a50e",
  measurementId: "G-T0WFYYCD9L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
