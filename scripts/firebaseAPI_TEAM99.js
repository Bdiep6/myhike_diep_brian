//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyA8IGfk5Vg63Dr-nQiw4m22ALnlKn_hVV8",
    authDomain: "comp1800demo-2d3ee.firebaseapp.com",
    projectId: "comp1800demo-2d3ee",
    storageBucket: "comp1800demo-2d3ee.appspot.com",
    messagingSenderId: "69191231601",
    appId: "1:69191231601:web:125a2d3ed535cc8f9613d0"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
