import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  query,
  where,
  getDocs,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
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
const db = getFirestore(app);

function signIn() {
  signInWithPopup(auth, provider).then((res) => {
    console.log(res);
    localStorage.setItem("Name", res.user.displayName);
    localStorage.setItem("Email", res.user.email);
    localStorage.setItem("UserID", res.user.uid);
    var uid11 = res.user.uid;
    if (res.user.phoneNumber !== null) {
      localStorage.setItem("Phone", res.user.phoneNumber);
    } else {
      localStorage.setItem("Phone", "notgiven");
    }
    document.getElementById("login").style.display = "none";
    document.getElementById("onlyshowtologin").style.display = "block";
    document.getElementById("logout").style.display = "block";
    document.getElementById("welcomeuser").innerHTML =
      "Welcome " + res.user.displayName + "!";
    document.getElementById("loginprompt").style.display = "none";
    document.getElementById("maincontent").style.display = "none";
    document.getElementById("photo").style.display = "none";
    document.getElementById("exploretext").style.display = "block";
    document.getElementById("contentbuttons").style.display = "block";
    getAppointments(uid11);
  });
}

function signOutt() {
  signOut(auth).then(() => {
    document.getElementById("logout").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("onlyshowtologin").style.display = "none";
    document.getElementById("welcomeuser").innerHTML = " ";
    document.getElementById("loginprompt").style.display = "block";
    document.getElementById("maincontent").style.display = "block";
    document.getElementById("photo").style.display = "block";
    document.getElementById("exploretext").style.display = "none";
    document.getElementById("contentbuttons").style.display = "none";
  });
}

function deleteApp(name, hospital, time) {
  const citiesRef = collection(db, "appointments");
  const q = query(
    citiesRef,
    where("Name", "==", name),
    where("Hospital", "==", hospital),
    where("Time", "==", time)
  );
  const querySnapshot = getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((docs) => {
      deleteDoc(doc(db, "appointments", docs.id));
    });
  });
}

function getAppointments(uid) {
  const appref = collection(db, "appointments");
  const q = query(appref, where("UID", "==", uid));
  const querySnapshot = getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var x = doc.data();
      console.log(x);

      var massiveBlock = document.createElement("div");
      massiveBlock.classList.add("Blocks");
      var a = document.createElement("div");
      a.classList.add("first");
      var add = document.createElement("div");
      add.classList.add("secondlast");
      var dist = document.createElement("div");
      dist.classList.add("secondlast");
      var time = document.createElement("div");
      time.classList.add("secondlast");
      var add1 = document.createElement("div");
      add1.classList.add("secondlast");
      var add2 = document.createElement("a");
      add2.classList.add("secondlasta");
      add2.classList.add("remove");

      a.innerHTML = x.Name;
      add.innerHTML = x.Hospital;
      dist.innerHTML = x.Specialist;
      time.innerHTML = x.Time;
      add1.innerHTML = x.Address;
      add2.innerHTML = "Completed";
      add2.onclick = () => {
        console.log("done");
        add2.parentNode.style.display = "none";
        deleteApp(x.Name, x.Hospital, x.Time);
      };
      massiveBlock.appendChild(a);
      massiveBlock.appendChild(add);
      massiveBlock.appendChild(dist);
      massiveBlock.appendChild(add1);
      massiveBlock.appendChild(time);
      massiveBlock.appendChild(add2);
      document.getElementById("appointments").appendChild(massiveBlock);
    });
    document.getElementById("bigappointments").style.display = "block";
  });
}

document.getElementById("login").onclick = () => {
  signIn();
};

document.getElementById("loginbutton2").onclick = () => {
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
let apiparam4 =
  "https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.psychiatry&bias=proximity:77.6667136,12.910592&limit=20&apiKey=6211193b5dfd4c76b3a7889d3fa560d1";
let apiparam5 =
  "https://api.geoapify.com/v2/places?categories=building.sport&bias=proximity:77.6667136,12.910592&limit=3&apiKey=6211193b5dfd4c76b3a7889d3fa560d1";

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
      app.href = "patient_form.html";
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
      app.href = "patient_form.html";
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

fetch(apiparam4, requestOptions)
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
      app.href = "patient_form.html";
      massiveBlock.appendChild(a);
      massiveBlock.appendChild(add);
      massiveBlock.appendChild(dist);
      massiveBlock.appendChild(app);
      document.getElementById("psycs").appendChild(massiveBlock);
    }
  })
  .catch((error) => console.log("error", error));

fetch(apiparam5, requestOptions)
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
      app.href = "patient_form.html";
      massiveBlock.appendChild(a);
      massiveBlock.appendChild(add);
      massiveBlock.appendChild(dist);
      massiveBlock.appendChild(app);
      document.getElementById("fitness").appendChild(massiveBlock);
    }
  })
  .catch((error) => console.log("error", error));

document.getElementById("showapp").onclick = () => {
  if (document.getElementById("appointments").style.display === "flex") {
    document.getElementById("appointments").style.display = "none";
  } else {
    document.getElementById("appointments").style.display = "flex";
  }
};

document.getElementById("hospitalbutton").onclick = () => {
  if (document.getElementById("massivehospitals").style.display === "block") {
    document.getElementById("massivehospitals").style.display = "none";
  } else {
    document.getElementById("massivehospitals").style.display = "block";
  }
};

document.getElementById("psycbutton").onclick = () => {
  if (document.getElementById("massivemhealth").style.display === "block") {
    document.getElementById("massivemhealth").style.display = "none";
  } else {
    document.getElementById("massivemhealth").style.display = "block";
  }
};

document.getElementById("fitnessbutton").onclick = () => {
  if (document.getElementById("massivefitness").style.display === "block") {
    document.getElementById("massivefitness").style.display = "none";
  } else {
    document.getElementById("massivefitness").style.display = "block";
  }
};
