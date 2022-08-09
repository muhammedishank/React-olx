import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyD1Ww7z22OuHsK2uqNjqxK_i_dbZIBXwSk",
    authDomain: "fir-48029.firebaseapp.com",
    projectId: "fir-48029",
    storageBucket: "fir-48029.appspot.com",
    messagingSenderId: "1093322913491",
    appId: "1:1093322913491:web:5c9f43915dc805d0134626",
    measurementId: "G-21ML91LGQC"
  };

export  default firebase.initializeApp(firebaseConfig)