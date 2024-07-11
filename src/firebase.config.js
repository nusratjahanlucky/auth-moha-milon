// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_RStZ2wKTnJCLjog1MVHyWuncY5yAjLc",
  authDomain: "auth-moha-milon-10b3e.firebaseapp.com",
  projectId: "auth-moha-milon-10b3e",
  storageBucket: "auth-moha-milon-10b3e.appspot.com",
  messagingSenderId: "1019549300610",
  appId: "1:1019549300610:web:1a43963a2e367e8629819b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;