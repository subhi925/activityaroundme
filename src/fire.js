import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDODFcZvsjOvltGuYZsApk8lMk1mO-r8-Y",
  authDomain: "activity-5305e.firebaseapp.com",
  projectId: "activity-5305e",
  storageBucket: "activity-5305e.firebasestorage.app",
  messagingSenderId: "923416098614",
  appId: "1:923416098614:web:cf8f7a5cbd0b0ee94d2597",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
export default app;
