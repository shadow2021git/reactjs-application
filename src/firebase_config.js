import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyBIcKlioYUbac2hLwR37FsbXP_KMelz0",
  authDomain: "military-documents.firebaseapp.com",
  projectId: "military-documents",
  storageBucket: "military-documents.appspot.com",
  messagingSenderId: "498033913328",
  appId: "1:498033913328:web:a268334bf3f1bed63c8135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);