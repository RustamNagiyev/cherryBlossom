//firbase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyC-hOs8svjOm_ZEeK3LiCE6ToIjzDPvQZU",
  authDomain: "cherry-blossom-usersdata.firebaseapp.com",
  projectId: "cherry-blossom-usersdata",
  storageBucket: "cherry-blossom-usersdata.appspot.com",
  messagingSenderId: "645432581320",
  appId: "1:645432581320:web:3703adfe220d4d085759fd",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);