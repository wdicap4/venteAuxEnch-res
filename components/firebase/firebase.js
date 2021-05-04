import firebase from "firebase";
import "@firebase/firestore";

//initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAHfwGMzOBpDKePe-WhApfaEHwE-lgMb7U",
    authDomain: "venteauxencheres-22cee.firebaseapp.com",
    databaseURL: "https://venteauxencheres-22cee-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "venteauxencheres-22cee",
    storageBucket: "venteauxencheres-22cee.appspot.com",
    messagingSenderId: "84843955916",
    appId: "1:84843955916:web:f0de6fefd51580dfeb2469",
    measurementId: "G-SSKD0YHKKR",
};
const firebaseApp = firebase.initializeApp(firebaseApp);