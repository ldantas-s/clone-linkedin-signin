import * as firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCG3O0MV3GCBxbcCY_3sN57QgHDntkIpo4",
  authDomain: "authbootstrap.firebaseapp.com",
  databaseURL: "https://authbootstrap.firebaseio.com",
  projectId: "authbootstrap",
  storageBucket: "authbootstrap.appspot.com",
  messagingSenderId: "285794479",
  appId: "1:285794479:web:8bd4cc0c5bf9f3ee09345a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


export default auth;