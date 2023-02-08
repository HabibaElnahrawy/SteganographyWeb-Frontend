
import firebase from 'firebase/compat/app';
import   "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlJubgdkjqw7iWVWSlYXd7BoqIVEA2Z64",
  authDomain: "steganography-tool-web.firebaseapp.com",
  projectId: "steganography-tool-web",
  storageBucket: "steganography-tool-web.appspot.com",
  messagingSenderId: "246768342904",
  appId: "1:246768342904:web:eeb9944fe6444f9e231a8d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
const FacebookAuthProvider=new firebase.auth.FacebookAuthProvider();
export {auth, googleAuthProvider,FacebookAuthProvider};
