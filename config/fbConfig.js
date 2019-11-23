import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB8i9sbN2R4_RUhbVumUI0Ix6OrgVegeoQ",
    authDomain: "academychat-72ba0.firebaseapp.com",
    databaseURL: "https://academychat-72ba0.firebaseio.com",
    projectId: "academychat-72ba0",
    storageBucket: "academychat-72ba0.appspot.com",
    messagingSenderId: "49536558690",
    appId: "1:49536558690:web:1b3288f659dc2b1516933b",
    measurementId: "G-7MKYDFSGKS"
  };

  firebase.initializeApp(firebaseConfig);
 

export default firebase