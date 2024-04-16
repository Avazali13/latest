// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBf5ARzEc5ZFV7MrLNndUT5XkZbiiDMpQE",
  authDomain: "insta-clone-ca63b.firebaseapp.com",
  projectId: "insta-clone-ca63b",
  storageBucket: "insta-clone-ca63b.appspot.com",
  messagingSenderId: "956228789358",
  appId: "1:956228789358:web:b631c8b1330550d878b27f",
  measurementId: "G-PGZT4XHH0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const firestore=getFirestore(app)
const storage=getStorage(app)

export {app,auth,firestore,storage}
