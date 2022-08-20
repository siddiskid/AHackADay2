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
  query,
  where,
  deleteDoc,
  getDocs,
  doc,
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

function displayAppointments(name) {
  const appref = collection(db, "appointments");
  const q = query(appref, where("Hospital", "==", name));
  const querySnapshot = getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var x = doc.data();
      console.log(x);

      var massiveBlock = document.createElement("div");
      massiveBlock.classList.add("Blocks");
      var a = document.createElement("div");
      a.classList.add("first");
      var add = document.createElement("a");
      add.classList.add("secondlast");
      add.classList.add("remove");
      var dist = document.createElement("div");
      dist.classList.add("secondlast");
      var time = document.createElement("div");
      time.classList.add("secondlast");

      a.innerHTML = x.Name;
      dist.innerHTML = x.Specialist;
      time.innerHTML = x.Time;
      add.innerHTML = "Reported";
      add.href = "#";
      add.onclick = () => {
        console.log("done");
        add.parentNode.style.display = "none";
        deleteApp(x.Name, x.Specialist, x.Time);
      };
      massiveBlock.appendChild(a);
      massiveBlock.appendChild(dist);
      massiveBlock.appendChild(time);
      massiveBlock.appendChild(add);
      document.getElementById("appointments").appendChild(massiveBlock);
    });
    document.getElementById("bigappointments").style.display = "block";
  });
}

function deleteApp(name, specialist, time) {
  const citiesRef = collection(db, "appointments");
  const q = query(
    citiesRef,
    where("Name", "==", name),
    where("Specialist", "==", specialist),
    where("Time", "==", time)
  );
  const querySnapshot = getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((docs) => {
      deleteDoc(doc(db, "appointments", docs.id));
    });
  });
}

function signIn() {
  signInWithPopup(auth, provider).then((res) => {
    document.getElementById("login").style.display = "none";
    document.getElementById("onlyshowtologin").style.display = "block";
    document.getElementById("logout").style.display = "block";
    document.getElementById("welcomeuser").innerHTML =
      "Welcome " + res.user.displayName + "!";
    console.log(res);
    document.getElementById("loginprompt").style.display = "none";
    document.getElementById("fts").style.display = "none";
    document.getElementById("maincontent").style.display = "none";
    document.getElementById("managestuff").innerHTML =
      "Manage appointments for " + localStorage.getItem("hosname");
    document.getElementById("photo").style.display = "none";
    displayAppointments(localStorage.getItem("hosname"));
  });
}

function signOutt() {
  signOut(auth).then(() => {
    console.log("signed out");
    document.getElementById("logout").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("onlyshowtologin").style.display = "none";
    document.getElementById("welcomeuser").innerHTML = " ";
    document.getElementById("loginprompt").style.display = "block";
    document.getElementById("fts").style.display = "block";
    document.getElementById("managestuff").style.display = "none";
    document.getElementById("photo").style.display = "block";
    document.getElementById("maincontent").style.display = "block";
  });
}

document.getElementById("login").onclick = () => {
  signIn();
};

document.getElementById("logout").onclick = () => {
  signOutt();
};

document.getElementById("loginbutton2").onclick = () => {
  signIn();
};
