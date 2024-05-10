// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe7T18RQMYPb9cGDsvIL6UrDAU8otaLRg",
  authDomain: "testy-food-86b21.firebaseapp.com",
  projectId: "testy-food-86b21",
  storageBucket: "testy-food-86b21.appspot.com",
  messagingSenderId: "714185004208",
  appId: "1:714185004208:web:421dcf8d614573dcb51775"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);

export default auth;