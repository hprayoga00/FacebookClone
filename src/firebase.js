import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDTHfMhawn-cQIiiEM_w6sDLEEnJWzL0Ek",
    authDomain: "facebook-clone-7aa31.firebaseapp.com",
    projectId: "facebook-clone-7aa31",
    storageBucket: "facebook-clone-7aa31.appspot.com",
    messagingSenderId: "356266795680",
    appId: "1:356266795680:web:e6afe6ecab7a289d2e9fc5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;