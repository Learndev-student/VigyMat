//FIREBASE SERVICE SCRIPT
//
//DON'T CHANGE!
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
import { getPerformance } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-performance.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCc34xLRwDkPduN1B1eb4KSTOvrVDxRfv0",
    authDomain: "sciemath.firebaseapp.com",
    projectId: "sciemath",
    storageBucket: "sciemath.appspot.com",
    messagingSenderId: "858317261158",
    appId: "1:858317261158:web:d2b72c73797a33c6b3e0a7",
    measurementId: "G-D96P3GBYKF"
  };

let app = initializeApp(firebaseConfig);
let analytics = getAnalytics(app);
let perf= getPerformance(app);
document.getElementById("firebase").innerHTML="Loaded";
