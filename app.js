import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBuI1KF3n-_9e5harqOs4vVHfdufbrCzW4",
  authDomain: "brotherhood-e6919.firebaseapp.com",
  projectId: "brotherhood-e6919",
  storageBucket: "brotherhood-e6919.firebasestorage.app",
  messagingSenderId: "569240233880",
  appId: "1:569240233880:web:5122a1f1692b6e745d2ded",
  measurementId: "G-63XKV6XEY7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
