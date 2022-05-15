import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDxOh-KbJexgIT781UOfv71FyEoLOjyXuU",
    authDomain: "foro-de-quejas-661cf.firebaseapp.com",
    projectId: "foro-de-quejas-661cf",
    storageBucket: "foro-de-quejas-661cf.appspot.com",
    messagingSenderId: "554823407109",
    appId: "1:554823407109:web:69f163f9a8cfe5a6f4ae6c"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
