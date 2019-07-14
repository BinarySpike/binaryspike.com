import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnUJiHtfTdpVXSIYFmJBXYcpcEbjXiIIg",
    authDomain: "bin-listing.firebaseapp.com",
    databaseURL: "https://bin-listing.firebaseio.com",
    projectId: "bin-listing",
    storageBucket: "bin-listing.appspot.com",
    messagingSenderId: "565166920201",
    appId: "1:565166920201:web:736c913d96a436f6"
  };
  // Initialize Cloud Firestore through Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();

