const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "xxxxx.firebaseapp.com",
  projectId: "xxxxx",
  storageBucket: "xxxxx.appspot.com",
  messagingSenderId: "123",
  appId: "1:123:web:abc"
};

firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();
