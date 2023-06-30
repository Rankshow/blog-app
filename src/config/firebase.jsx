import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFireStore } from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzU_YndbS5MoUTmfc7Ls48GSSEaYB17oY",
  authDomain: "blog-app-1e734.firebaseapp.com",
  projectId: "blog-app-1e734",
  storageBucket: "blog-app-1e734.appspot.com",
  messagingSenderId: "482472787560",
  appId: "1:482472787560:web:ed43333517a4f9a3b085dd"
};

// Initialize Firebase
// export const db = getFireStore(app)

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();