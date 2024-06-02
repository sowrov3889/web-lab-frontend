// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBO1d6JpcTI-ZWXqxZ0ZjzXGX9YUclde2M",
    authDomain: "students-login-form.firebaseapp.com",
    projectId: "students-login-form",
    storageBucket: "students-login-form.appspot.com",
    messagingSenderId: "314403305703",
    appId: "1:314403305703:web:78f7ff7a49c7cbe9008a42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;