import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDKue5FK67daRuRfVwhW4SXsh-jQ_WKHgQ",
    authDomain: "clone-2cae2.firebaseapp.com",
    databaseURL: "https://clone-2cae2.firebaseio.com",
    projectId: "clone-2cae2",
    storageBucket: "clone-2cae2.appspot.com",
    messagingSenderId: "1043621233072",
    appId: "1:1043621233072:web:b21e12e907c5633f681675",
    measurementId: "G-K4WRD8H3KV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };