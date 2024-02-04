import React from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsdR9qq4Ahqd-tI4dJRXqDLyCsCzWfArk",
  authDomain: "ecommerce-a607e.firebaseapp.com",
  projectId: "ecommerce-a607e",
  storageBucket: "ecommerce-a607e.appspot.com",
  messagingSenderId: "365902014788",
  appId: "1:365902014788:web:54eed5b59f4d0b99e78f11"
};
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth };
