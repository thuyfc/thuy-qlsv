import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp ( {
  apiKey: "AIzaSyD0hNOEwnuWmYBlmcs605tEBRWX02-AQv8",
  authDomain: "qlsv-dd905.firebaseapp.com",
  projectId: "qlsv-dd905",
  storageBucket: "qlsv-dd905.appspot.com",
  messagingSenderId: "26271585044",
  appId: "1:26271585044:web:51e6453f7f0037f0cce801",
  measurementId: "G-XGEH49PS3D"
})

// Initialize Firebase
const db = getFirestore(app);
export const auth = app.auth()

export default {app , db};