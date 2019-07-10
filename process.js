const firebase = require("firebase/app");
require("firebase/firestore");
const myData = require('./src/data.js')
const _ = require('lodash')

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
var db = firebase.firestore();

myData.forEach(item => {
    let tags = item.tags ? item.tags.split(/, ?/) : []
    let categories = item.categories ? item.categories.split(/, ?/) : []

    db.collection('items').doc(item.name).set({
        tags,
        categories,
    }).then(() => {
        console.log("successfully wrote item");
    })
})