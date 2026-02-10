import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-exam-notes-generator-1444e.firebaseapp.com",
  projectId: "ai-exam-notes-generator-1444e",
  storageBucket: "ai-exam-notes-generator-1444e.firebasestorage.app",
  messagingSenderId: "142959680973",
  appId: "1:142959680973:web:a45785858e224a6ee5b884",
  measurementId: "G-29ZTLDQM38"
};


 const app = initializeApp(firebaseConfig);
 export const provider = new GoogleAuthProvider();
 export const auth = getAuth(app);


