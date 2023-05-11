import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_LZdbmWMU_4DhElBJWCzeFoeH4lwGP7c",
  authDomain: "travelapp-f655d.firebaseapp.com",
  projectId: "travelapp-f655d",
  storageBucket: "travelapp-f655d.appspot.com",
  messagingSenderId: "183434830713",
  appId: "1:183434830713:web:0f965780da62bdebd8c5a8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export default auth;
