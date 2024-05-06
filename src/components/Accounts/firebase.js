import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAEYMSri5ogcpew0tA0TMGAbETE2TjmA1U",
    authDomain: "store3i.firebaseapp.com",
    projectId: "store3i",
    storageBucket: "store3i.appspot.com",
    messagingSenderId: "741746083264",
    appId: "1:741746083264:web:920866e983998868b53425",
    measurementId: "G-2V0L0KLS7T"
};

firebase.initializeApp(firebaseConfig);
export const dataref=firebase.database();
export default firebase;