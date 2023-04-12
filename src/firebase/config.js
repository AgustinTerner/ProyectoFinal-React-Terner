// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDWcLUbV-JdpiFoSnllhS4F6sd1XCX4Zg",
  authDomain: "cervezas-42d15.firebaseapp.com",
  projectId: "cervezas-42d15",
  storageBucket: "cervezas-42d15.appspot.com",
  messagingSenderId: "106322348176",
  appId: "1:106322348176:web:68390810ff064133faf015"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app