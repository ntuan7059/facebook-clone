// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCSeC5QMmvyWDeVw3Dc45BDKDp5OPZ-fXQ",
    authDomain: "facebook-clone-cb8eb.firebaseapp.com",
    projectId: "facebook-clone-cb8eb",
    storageBucket: "facebook-clone-cb8eb.appspot.com",
    messagingSenderId: "97624579716",
    appId: "1:97624579716:web:9ad909f73a0d3e7072ecd1",
    measurementId: "G-FX8B6PWGCC"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth, provider};
  export default db;