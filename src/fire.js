import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBrntHK38ndlaQ_-d4RFzT26ThtuHo230g",
  authDomain: "project-ai-ec4fe.firebaseapp.com",
  projectId: "project-ai-ec4fe",
  storageBucket: "project-ai-ec4fe.appspot.com",
  messagingSenderId: "148225132429",
  appId: "1:148225132429:web:ba87b011da226646351fc4"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;