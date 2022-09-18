import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "blog-42b87.firebaseapp.com",
    projectId: "blog-42b87",
    storageBucket: "blog-42b87.appspot.com",
    messagingSenderId: "750554888461",
    appId: "1:750554888461:web:eb7f978c63344ebe945844",
    measurementId: "G-SJ3L0HZ61N"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);