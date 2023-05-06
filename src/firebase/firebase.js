import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrMv6e8nsuV5Sm8wlUFzXSiIRR6qbDwKE",
  authDomain: "sagulita-d8f9d.firebaseapp.com",
  projectId: "sagulita-d8f9d",
  storageBucket: "sagulita-d8f9d.appspot.com",
  messagingSenderId: "762832789159",
  appId: "1:762832789159:web:363f4cce6097d27c570582",
  measurementId: "G-4HC8SL4T0G",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
