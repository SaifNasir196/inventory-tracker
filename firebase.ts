// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDseANGwKsbs-OS-k4ul7hvujX2Az2y_l0",
  authDomain: "inventory-tracker-f81c8.firebaseapp.com",
  projectId: "inventory-tracker-f81c8",
  storageBucket: "inventory-tracker-f81c8.appspot.com",
  messagingSenderId: "1007989659585",
  appId: "1:1007989659585:web:e82fdcaafa60b01add4140",
  measurementId: "G-D6GGYJLRTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore }