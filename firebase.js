// Import the functions you need from the SDKs you need
import { initializeApp , getApps , getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore'; 
// import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBFK8BY3BYTn6N5bY7FXrWeDRRGg6F6kx8",
  authDomain: "facebook-clone-op.firebaseapp.com",
  projectId: "facebook-clone-op",
  storageBucket: "facebook-clone-op.appspot.com",
  messagingSenderId: "495883759397",
  appId: "1:495883759397:web:3cb3351e2268c31505f4cc"
};


// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app , db , storage} ;


  
//  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
//   const db = app.firestore();
//   const storage = firebase.storage();
//   export { db , storage};

