var ab = [];
var hosadd = {};
var select1 = false;
var select2 = false;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      var latt = position.coords.latitude;
      var longg = position.coords.longitude;
      let apiparam1 = `https://api.geoapify.com/v2/places?categories=healthcare.hospital&bias=proximity:${longg},${latt}&limit=3&apiKey=6211193b5dfd4c76b3a7889d3fa560d1`;
      let apiparam2 = `https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis&bias=proximity:${longg},${latt}&limit=3&apiKey=6211193b5dfd4c76b3a7889d3fa560d1 `;
      let apiparam3 = `https://api.geoapify.com/v2/places?categories=healthcare.pharmacy&bias=proximity:${longg},${latt}&limit=2&apiKey=6211193b5dfd4c76b3a7889d3fa560d1 `;
      let apiparam4 = `https://api.geoapify.com/v2/places?categories=healthcare.clinic_or_praxis.psychiatry&bias=proximity:${longg},${latt}&limit=20&apiKey=6211193b5dfd4c76b3a7889d3fa560d1`;
      let apiparam5 = `https://api.geoapify.com/v2/places?categories=building.sport&bias=proximity:${longg},${latt}&limit=3&apiKey=6211193b5dfd4c76b3a7889d3fa560d1`;
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
            if (i === 0) {
              document.getElementById("ab1").innerHTML =
                ab.features[i].properties.name;
              document.getElementById("ab1").value =
                ab.features[i].properties.name;
            }
            if (i === 1) {
              document.getElementById("ab2").innerHTML =
                ab.features[i].properties.name;
              document.getElementById("ab2").value =
                ab.features[i].properties.name;
            }
            if (i === 2) {
              document.getElementById("ab3").innerHTML =
                ab.features[i].properties.name;
              document.getElementById("ab3").value =
                ab.features[i].properties.name;
            }
            hosadd[ab.features[i].properties.name] =
              ab.features[i].properties.address_line2;
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
            if (i === 0) {
              document.getElementById("ab4").innerHTML =
                ab.features[i].properties.name;
              document.getElementById("ab4").value =
                ab.features[i].properties.name;
            }
            if (i === 1) {
              document.getElementById("ab5").innerHTML =
                ab.features[i].properties.name;
              document.getElementById("ab5").value =
                ab.features[i].properties.name;
            }
            if (i === 2) {
              document.getElementById("ab6").innerHTML =
                ab.features[i].properties.name;
              document.getElementById("ab6").value =
                ab.features[i].properties.name;
            }
            hosadd[ab.features[i].properties.name] =
              ab.features[i].properties.address_line2;
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
            if (i === 0) {
              document.getElementById("ba1").innerHTML =
                ab.features[i].properties.name;
              document.getElementById("ab1").value =
                ab.features[i].properties.name;
            }
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
            if (i === 0) {
              document.getElementById("ca1").innerHTML =
                ab.features[i].properties.name;
              document.getElementById("ca1").value =
                ab.features[i].properties.name;
            }
            if (i === 1) {
              document.getElementById("ca2").innerHTML =
                ab.features[i].properties.name;
              document.getElementById("ca2").value =
                ab.features[i].properties.name;
            }
            if (i === 2) {
              document.getElementById("ca3").innerHTML =
                ab.features[i].properties.name;
              document.getElementById("ca3").value =
                ab.features[i].properties.name;
            }
            hosadd[ab.features[i].properties.name] =
              ab.features[i].properties.address_line2;
          }
        })
        .catch((error) => console.log("error", error));
    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

getLocation();

window.checkvalue1 = function (val) {
  if (val === "other1") {
    document.getElementById("other1").style.display = "block";
    // var select1 = true;
  } else {
    document.getElementById("other1").style.display = "none";
    // var select1 = false;
  }
};
window.checkvalue2 = function (val) {
  if (val === "other2") {
    document.getElementById("other2").style.display = "block";
    // var select2 = true;
  } else {
    document.getElementById("other2").style.display = "none";
    // var select2 = false;
  }
};
window.checkvalue3 = function (val) {
  if (val === "other3") {
    document.getElementById("other3").style.display = "block";
    // var select2 = true;
  } else {
    document.getElementById("other3").style.display = "none";
    // var select2 = false;
  }
};
window.checkvalue4 = function (val) {
  if (val === "other4") {
    document.getElementById("other4").style.display = "block";
    // var select2 = true;
  } else {
    document.getElementById("other4").style.display = "none";
    // var select2 = false;
  }
};
window.checktype = function (val) {
  if (val === "Hospitals") {
    document.getElementById("massiveehospital").style.display = "block";
    document.getElementById("massiveepsyc").style.display = "none";
    document.getElementById("massiveefitness").style.display = "none";
    // var select2 = true;
  } else if (val === "Psyc") {
    document.getElementById("massiveehospital").style.display = "none";
    document.getElementById("massiveepsyc").style.display = "block";
    document.getElementById("massiveefitness").style.display = "none";
    // var select2 = false;
  } else {
    document.getElementById("massiveehospital").style.display = "none";
    document.getElementById("massiveepsyc").style.display = "none";
    document.getElementById("massiveefitness").style.display = "block";
  }
};

document.getElementById("nameee").value = localStorage.getItem("Name");
document.getElementById("emailll").value = localStorage.getItem("Email");
if (localStorage.getItem("Phone") !== "notgiven") {
  document.getElementById("phoneee").value = localStorage.getItem("Phone");
}

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

function addAppointmentsHospitals(
  namee,
  genderr,
  dobb,
  agee,
  emaill,
  mobilenoo,
  hospitall,
  specialistt,
  timee,
  uidd,
  addd,
  codee
) {
  try {
    const docRef = addDoc(collection(db, "appointments"), {
      Name: namee,
      Gender: genderr,
      DOB: dobb,
      Age: agee,
      EmailID: emaill,
      MobileNo: mobilenoo,
      Hospital: hospitall,
      Specialist: specialistt,
      Time: timee,
      UID: uidd,
      Address: addd,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  const codeUri = encodeURIComponent(codee);
  const hospitalUri = encodeURIComponent(hospitall);
  const timeUri = encodeURIComponent(timee);
  const specialistUri = encodeURIComponent(specialistt);
  const addressUri = encodeURIComponent(addd);
  const phoneUri = encodeURIComponent(mobilenoo);
  const nameUri = encodeURIComponent(namee);
  const twilioRes = fetch(
    `https://ahad-pradipraj.netlify.app/.netlify/functions/api/sendMessage?to=${codeUri}${phoneUri}&name=${nameUri}&code=${codeUri}&hospital=${hospitalUri}&time=${timeUri}&specialist=${specialistUri}&address=${addressUri}`,
    {
      method: "GET",
      mode: "no-cors",
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(twilioRes);
}

function addAppointmentsPsyc(
  namee,
  genderr,
  dobb,
  agee,
  emaill,
  mobilenoo,
  hospitall,
  timee,
  uidd,
  addd,
  codee
) {
  console.log(hosadd);
  try {
    const docRef = addDoc(collection(db, "appointments"), {
      Name: namee,
      Gender: genderr,
      DOB: dobb,
      Age: agee,
      EmailID: emaill,
      MobileNo: mobilenoo,
      Hospital: hospitall,
      Time: timee,
      UID: uidd,
      Address: addd,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function addAppointmentsFitness(
  namee,
  genderr,
  dobb,
  agee,
  emaill,
  mobilenoo,
  hospitall,
  timee,
  uidd,
  addd,
  codee
) {
  console.log(hosadd);
  try {
    const docRef = addDoc(collection(db, "appointments"), {
      Name: namee,
      Gender: genderr,
      DOB: dobb,
      Age: agee,
      EmailID: emaill,
      MobileNo: mobilenoo,
      Hospital: hospitall,
      Time: timee,
      UID: uidd,
      Address: addd,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

document.getElementById("final").onclick = () => {
  if (document.getElementById("typeselect").value === "Hospitals") {
    var name1 = document.getElementById("nameee").value;
    var temp1 = document.getElementById("genderselect").value;
    var gender1 = "";
    if (temp1 !== "other1") {
      var gender1 = temp1;
    } else {
      var gender1 = document.getElementById("other1").value;
    }
    var dob1 = document.getElementById("dateee").value;
    var age1 = document.getElementById("ageee").value;
    var email1 = document.getElementById("emailll").value;
    var phone1 = document.getElementById("phoneee").value;
    var code1 = document.getElementById("codeee").value;
    var temp2 = document.getElementById("hospitalselect").value;
    var hospital1 = " ";
    if (temp2 !== "other2") {
      var hospital1 = temp2;
    } else {
      var hospital1 = document.getElementById("other2").value;
    }
    var specialist1 = document.getElementById("specialistselect").value;
    var time1 = document.getElementById("timeselect").value;
    var uid1 = localStorage.getItem("UserID");
    var add1 = hosadd[hospital1];
    addAppointmentsHospitals(
      name1,
      gender1,
      dob1,
      age1,
      email1,
      phone1,
      hospital1,
      specialist1,
      time1,
      uid1,
      add1,
      code1
    );
  } else if (document.getElementById("typeselect").value === "Psyc") {
    var name1 = document.getElementById("nameee").value;
    var temp1 = document.getElementById("genderselect").value;
    var gender1 = "";
    if (temp1 !== "other1") {
      var gender1 = temp1;
    } else {
      var gender1 = document.getElementById("other1").value;
    }
    var dob1 = document.getElementById("dateee").value;
    var age1 = document.getElementById("ageee").value;
    var email1 = document.getElementById("emailll").value;
    var phone1 = document.getElementById("phoneee").value;
    var temp2 = document.getElementById("psycselect").value;
    var hospital1 = " ";
    if (temp2 !== "other3") {
      var hospital1 = temp2;
    } else {
      var hospital1 = document.getElementById("other3").value;
    }
    var time1 = document.getElementById("timeselect").value;
    var uid1 = localStorage.getItem("UserID");
    var add1 = hosadd[hospital1];
    addAppointmentsPsyc(
      name1,
      gender1,
      dob1,
      age1,
      email1,
      phone1,
      hospital1,
      time1,
      uid1,
      add1,
      code1
    );
  } else {
    var name1 = document.getElementById("nameee").value;
    var temp1 = document.getElementById("genderselect").value;
    var gender1 = "";
    if (temp1 !== "other1") {
      var gender1 = temp1;
    } else {
      var gender1 = document.getElementById("other1").value;
    }
    var dob1 = document.getElementById("dateee").value;
    var age1 = document.getElementById("ageee").value;
    var email1 = document.getElementById("emailll").value;
    var phone1 = document.getElementById("phoneee").value;
    var temp2 = document.getElementById("fitnessselect").value;
    var hospital1 = " ";
    if (temp2 !== "other4") {
      var hospital1 = temp2;
    } else {
      var hospital1 = document.getElementById("other4").value;
    }
    var time1 = document.getElementById("timeselect").value;
    var uid1 = localStorage.getItem("UserID");
    var add1 = hosadd[hospital1];
    addAppointmentsFitness(
      name1,
      gender1,
      dob1,
      age1,
      email1,
      phone1,
      hospital1,
      time1,
      uid1,
      add1,
      code1
    );
  }

  document.getElementById("first").style.display = "none";
  document.getElementById("finalbanner").style.display = "block";
};

document.getElementById("redirectback").onclick = () => {
  window.location.href = "index.html";
};
