import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXn3wK7cF2HQ_oe3KB0Xdr2BGysbiawFE",
  authDomain: "tictactoe-f98df.firebaseapp.com",
  databaseURL: "https://tictactoe-f98df-default-rtdb.firebaseio.com",
  projectId: "tictactoe-f98df",
  storageBucket: "tictactoe-f98df.appspot.com",
  messagingSenderId: "569238433203",
  appId: "1:569238433203:web:143183f24ad7847ca6efc6",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
