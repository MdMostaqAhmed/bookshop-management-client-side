// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAb5ekxUMh_vMAMdkrR9G3GBK12n9_6Us",
    authDomain: "book-shop-fbf65.firebaseapp.com",
    projectId: "book-shop-fbf65",
    storageBucket: "book-shop-fbf65.appspot.com",
    messagingSenderId: "1042219197240",
    appId: "1:1042219197240:web:9e485651d59026aed2d7cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;