import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyApcaHhuYNM60q7W8SNZa-5S1uGaQ3Lvb0",
    authDomain: "primebid-v1.firebaseapp.com",
    databaseURL: "https://primebid-v1-default-rtdb.firebaseio.com",
    projectId: "primebid-v1",
    storageBucket: "primebid-v1.appspot.com",
    messagingSenderId: "259706178760",
    appId: "1:259706178760:web:8044ace35ce786295a69fd"
  };


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;

