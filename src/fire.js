import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDQpvViCe1YP0S64aKj-IY-y5vIJA_d7rM",
    authDomain: "login-13c30.firebaseapp.com",
    projectId: "login-13c30",
    storageBucket: "login-13c30.appspot.com",
    messagingSenderId: "58904908640",
    appId: "1:58904908640:web:48f3ac50b8d2da7c718405"
  };

  const fire = firebase.initializeApp(firebaseConfig);
export default fire;