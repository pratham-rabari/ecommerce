// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLZRqx9yhNldIvTNPBqw5V3_0GVFRkZic",
  authDomain: "react-ee539.firebaseapp.com",
  projectId: "react-ee539",
  storageBucket: "react-ee539.appspot.com",
  messagingSenderId: "64357216484",
  appId: "1:64357216484:web:49b6422649e71798ac3cf1",
  measurementId: "G-LE7HGHMCCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);