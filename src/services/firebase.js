import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAsNf_t72429lXHNDObRyiyDwC_EkOUfts",
  authDomain: "movie-app-5bccf.firebaseapp.com",
  projectId: "movie-app-5bccf",
  storageBucket: "movie-app-5bccf.appspot.com",
  messagingSenderId: "906655637656",
  appId: "1:906655637656:web:b090ff5220fddad8faf0ed",
  measurementId: "G-G7J4RDVV12"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;