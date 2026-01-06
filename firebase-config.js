// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyCX0el34g6t8QgGigp3nGaVnXSAgfoNM7U",
  authDomain: "diario-das-aguas-unemat.firebaseapp.com",
  projectId: "diario-das-aguas-unemat",
  storageBucket: "diario-das-aguas-unemat.firebasestorage.app",
  messagingSenderId: "260533766070",
  appId: "1:260533766070:web:4b0603a0d40a5a57ef2317"
};

try {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  window.db = firebase.firestore();

  console.log("[Firebase] OK - projectId:", firebaseConfig.projectId);
} catch (e) {
  console.error("[Firebase] Falha ao inicializar:", e);
}
