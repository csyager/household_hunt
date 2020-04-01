import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyCi-7KeSiJ9GZ5YArKP8GWDDfsJCf7kCzw",
    authDomain: "household-hunt.firebaseapp.com",
    databaseURL: "https://household-hunt.firebaseio.com",
    storageBucket: "household-hunt.appspot.com",
    messagingSenderId: "445967981340"
};
var fire = firebase.initializeApp(config);
export default fire;