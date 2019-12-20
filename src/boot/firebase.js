var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/database");

var firebaseConfig = {
  apiKey: "AIzaSyC7yCV4nB1ENtbNFPHxys5TCXJ2if8Vclk",
  authDomain: "lotusms-774d8.firebaseapp.com",
  databaseURL: "https://lotusms-774d8.firebaseio.com",
  projectId: "lotusms-774d8",
  storageBucket: "lotusms-774d8.appspot.com",
  messagingSenderId: "814538903676",
  appId: "1:814538903676:web:f943b37801313302dbb9f9"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseDb = firebaseApp.database();

let firebaseAuth = firebaseApp.auth();

export { firebaseAuth, firebaseDb };
