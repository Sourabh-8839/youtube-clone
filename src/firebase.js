import firebase from 'firebase/compat/app'

import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAoVn2w8J3gvuzp8cG4Il445k5egWM-BNA",
  authDomain: "tube-mate-db0fd.firebaseapp.com",
  projectId: "tube-mate-db0fd",
  storageBucket: "tube-mate-db0fd.appspot.com",
  messagingSenderId: "1052213666897",
  appId: "1:1052213666897:web:cc9c75f67b3d0f0ae0c470",
  measurementId: "G-SP8F78DTG2"
};

firebase.initializeApp(firebaseConfig)


export default firebase.auth();
