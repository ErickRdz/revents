import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDnB8Q3HC1ZSrMB-AG0wWe-_UTl0MeLLnU",
    authDomain: "revents-f6c01.firebaseapp.com",
    databaseURL: "https://revents-f6c01.firebaseio.com",
    projectId: "revents-f6c01",
    storageBucket: "revents-f6c01.appspot.com",
    messagingSenderId: "589894528332",
    appId: "1:589894528332:web:76823d4cac21bd90c0b3e9"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
