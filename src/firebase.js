import * as firebase from 'firebase';

const config =  {
    apiKey: "AIzaSyDTcpbE5ae3XdshBWWW1H3v0XdAJ4A2xDs",
    authDomain: "motivateme-4d70a.firebaseapp.com",
    databaseURL: "https://motivateme-4d70a.firebaseio.com",
    projectId: "motivateme-4d70a",
    storageBucket: "motivateme-4d70a.appspot.com",
    messagingSenderId: "335495992182"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
