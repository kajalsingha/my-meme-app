
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'



var firebaseConfig = {
    apiKey: "AIzaSyBGfFiNRNJBSBT0ybI06LDy254cmKXXTiU",
    authDomain: "my-movie-app-4ea76.firebaseapp.com",
    projectId: "my-movie-app-4ea76",
    storageBucket: "my-movie-app-4ea76.appspot.com",
    messagingSenderId: "209502281618",
    appId: "1:209502281618:web:ddeb284019ebc1440beb4b",
    measurementId: "G-MNK4F9BTRL"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;