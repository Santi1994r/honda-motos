import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCGIYfSRc1lAZasqJR0IJkyMLZC11FZ_QA",
    authDomain: "ecommerce-motos.firebaseapp.com",
    projectId: "ecommerce-motos",
    storageBucket: "ecommerce-motos.appspot.com",
    messagingSenderId: "579468277844",
    appId: "1:579468277844:web:8720fee874a629179815c1"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);