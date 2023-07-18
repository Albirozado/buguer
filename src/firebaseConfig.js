// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDkx2TaUdDRNjyhjmfcWUVWMLlCVJBdw3Y",
  authDomain: "vanscodecampe.firebaseapp.com",
  projectId: "vanscodecampe",
  storageBucket: "vanscodecampe.appspot.com",
  messagingSenderId: "608706785845",
  appId: "1:608706785845:web:4ebc0f69c1ac4516fbf77c",
  measurementId: "G-Z1TYLNK09S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)
const storage = getStorage()
export {app, firestore, storage};