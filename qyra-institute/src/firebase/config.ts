import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDaqc2pkvAp8fLHksCxTPZdbLuSZsPRMNs",
  authDomain: "qyrainstutute.firebaseapp.com",
  projectId: "qyrainstutute",
  storageBucket: "qyrainstutute.firebasestorage.app",
  messagingSenderId: "349099320849",
  appId: "1:349099320849:web:4c5977c0b86b5de4bcb3b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, signOut, onAuthStateChanged };
export default app;
