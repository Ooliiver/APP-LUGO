import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // put your credentials here
  apiKey: "AIzaSyCaiXNXP8_sJDTCjMVxjvLdUuoiT4ZEB00",
  authDomain: "fruterialugo-29f84.firebaseapp.com",
  projectId: "fruterialugo-29f84",
  storageBucket: "fruterialugo-29f84.appspot.com",
  messagingSenderId: "82716546320",
  appId: "1:82716546320:web:d6ff1cf4e4614605b7c195",
  measurementId: "G-50C1H23RRQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
