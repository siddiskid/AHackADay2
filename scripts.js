import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import {} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmtVUTNY5n6tlpzkEQ_vvX1Lb85qfaFHw",
  authDomain: "ahad2-94346.firebaseapp.com",
  projectId: "ahad2-94346",
  storageBucket: "ahad2-94346.appspot.com",
  messagingSenderId: "692402420164",
  appId: "1:692402420164:web:4d788b40212663c6510c91",
  measurementId: "G-3VV20FBS3E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function signIn() {
  signInWithPopup(auth, provider).then((res) => {
    console.log(res);
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
    document.getElementById("welcomeuser").innerHTML =
      "Welcome " + res.user.displayName + "!";
  });
}

function signOutt() {
  signOut(auth).then(() => {
    console.log("signed out");
    document.getElementById("logout").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("welcomeuser").innerHTML = " ";
  });
}

document.getElementById("login").onclick = () => {
  signIn();
};

document.getElementById("logout").onclick = () => {
  signOutt();
};

var ab = [];

let apiparam1 =
  "https://api.geoapify.com/v2/places?categories=healthcare.hospital&bias=proximity:77.6667136,12.910592&limit=3&apiKey=6211193b5dfd4c76b3a7889d3fa560d1 ";
let apiparam2 =
  "https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis&bias=proximity:77.6667136,12.910592&limit=3&apiKey=6211193b5dfd4c76b3a7889d3fa560d1 ";
let apiparam3 =
  "https://api.geoapify.com/v2/places?categories=healthcare.pharmacy&bias=proximity:77.6667136,12.910592&limit=2&apiKey=6211193b5dfd4c76b3a7889d3fa560d1 ";

var requestOptions = {
  method: "GET",
};

fetch(apiparam1, requestOptions)
  .then((response) => response.json())
  .then(function (result) {
    ab = result;
    // console.log(ab);
    // console.log(ab.features[0].properties);
    for (let i = 0; i < ab.features.length; i++) {
      var massiveBlock = document.createElement("div");
      massiveBlock.classList.add("Blocks");
      var a = document.createElement("div");
      a.classList.add("first");
      var add = document.createElement("div");
      add.classList.add("second");
      var dist = document.createElement("div");
      dist.classList.add("secondlast");
      var app = document.createElement("a");
      app.classList.add("last");
      var linktext = document.createTextNode("Book an appointment");
      a.innerHTML = ab.features[i].properties.name;
      add.innerHTML = ab.features[i].properties.address_line2;
      dist.innerHTML = ab.features[i].properties.distance.toString() + "m away";
      app.appendChild(linktext);
      app.href = "#";
      massiveBlock.appendChild(a);
      massiveBlock.appendChild(add);
      massiveBlock.appendChild(dist);
      massiveBlock.appendChild(app);
      document.getElementById("hospitals").appendChild(massiveBlock);
    }
  })
  .catch((error) => console.log("error", error));

fetch(apiparam2, requestOptions)
  .then((response) => response.json())
  .then(function (result) {
    ab = result;
    // console.log(ab);
    // console.log(ab.features[0].properties);
    for (let i = 0; i < ab.features.length; i++) {
      var massiveBlock = document.createElement("div");
      massiveBlock.classList.add("Blocks");
      var a = document.createElement("div");
      a.classList.add("first");
      var add = document.createElement("div");
      add.classList.add("second");
      var dist = document.createElement("div");
      dist.classList.add("secondlast");
      var app = document.createElement("a");
      app.classList.add("last");
      var linktext = document.createTextNode("Book an appointment");
      a.innerHTML = ab.features[i].properties.name;
      add.innerHTML = ab.features[i].properties.address_line2;
      dist.innerHTML = ab.features[i].properties.distance.toString() + "m away";
      app.appendChild(linktext);
      app.href = "#";
      massiveBlock.appendChild(a);
      massiveBlock.appendChild(add);
      massiveBlock.appendChild(dist);
      massiveBlock.appendChild(app);
      document.getElementById("clinics").appendChild(massiveBlock);
    }
  })
  .catch((error) => console.log("error", error));

fetch(apiparam3, requestOptions)
  .then((response) => response.json())
  .then(function (result) {
    ab = result;
    // console.log(ab);
    // console.log(ab.features[0].properties);
    for (let i = 0; i < ab.features.length; i++) {
      var massiveBlock = document.createElement("div");
      massiveBlock.classList.add("Blocks");
      var a = document.createElement("div");
      a.classList.add("first");
      var add = document.createElement("div");
      add.classList.add("second");
      var dist = document.createElement("div");
      dist.classList.add("secondlast");
      // var app = document.createElement("a");
      // app.classList.add("last");
      // var linktext = document.createTextNode("Book an appointment");
      a.innerHTML = ab.features[i].properties.name;
      add.innerHTML = ab.features[i].properties.address_line2;
      dist.innerHTML = ab.features[i].properties.distance.toString() + "m away";
      // app.appendChild(linktext);
      // app.href = "#";
      massiveBlock.appendChild(a);
      massiveBlock.appendChild(add);
      massiveBlock.appendChild(dist);
      // massiveBlock.appendChild(app);
      document.getElementById("pharmacies").appendChild(massiveBlock);
    }
  })
  .catch((error) => console.log("error", error));
