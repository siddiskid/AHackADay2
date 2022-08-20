var select1 = false;
var select2 = false;

window.checkvalue1 = function (val) {
  if (val === "other1") {
    document.getElementById("other1").style.display = "block";
    // var select1 = true;
  } else {
    document.getElementById("other1").style.display = "none";
    // var select1 = false;
  }
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
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
const db = getFirestore(app);

function setupBusiness(namee, typee, addd, emaill, mobilenoo, uidd) {
  try {
    const docRef = addDoc(collection(db, "businesses"), {
      Name: namee,
      Type: typee,
      Address: addd,
      EmailID: emaill,
      MobileNo: mobilenoo,
      UID: uidd,
      firsttimesetup: "done",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

document.getElementById("final").onclick = () => {
  var name1 = document.getElementById("nameee").value;
  var temp1 = document.getElementById("genderselect").value;
  var type1 = "";
  if (temp1 !== "other1") {
    var type1 = temp1;
  } else {
    var type1 = document.getElementById("other1").value;
  }
  var add1 = document.getElementById("addresss").value;
  var email1 = document.getElementById("emailll").value;
  var phone1 = document.getElementById("phoneee").value;
  var uid1 = localStorage.getItem("UserID");
  localStorage.setItem("hosname", name1);
  setupBusiness(name1, type1, add1, email1, phone1, uid1);
  document.getElementById("first").style.display = "none";
  document.getElementById("finalbanner").style.display = "block";
};

document.getElementById("redirectback").onclick = () => {
  window.location.href = "enterprise.html";
};
