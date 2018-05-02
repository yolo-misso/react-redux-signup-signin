  import * as firebase from 'firebase';

  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet

  const prodConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
  };

  const devConfig = {
    apiKey: "AIzaSyCw53iQihnRzs-Un3rJC6Q-uX50mvBaor4",
    authDomain: "react-redux-authenticate-c7f44.firebaseapp.com",
    databaseURL: "https://react-redux-authenticate-c7f44.firebaseio.com/",
    projectId: "react-redux-authenticate-c7f44",
    storageBucket: "gs://react-redux-authenticate-c7f44.appspot.com/",
    messagingSenderId: "378688200437",
  };

  const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

  if (!firebase.apps.length){
  firebase.initializeApp(config);
  }

  const db = firebase.database();
  const auth = firebase.auth();

  export {
    db,
    auth,
  };