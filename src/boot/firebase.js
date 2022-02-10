import * as firebase from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC-ISdlBzPc8rsLuVNl8zY3keyl3nVQG8",
  authDomain: "quasarapp-89f6f.firebaseapp.com",
  projectId: "quasarapp-89f6f",
  storageBucket: "quasarapp-89f6f.appspot.com",
  messagingSenderId: "898745234544",
  appId: "1:898745234544:web:8fd0311bba105ad1e330b5"
}

firebase.initializeApp(firebaseConfig)
let db = getFirestore();
export default db;